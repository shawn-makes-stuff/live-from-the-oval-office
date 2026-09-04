// Fetches every source URL and checks the page actually contains the quote.
// Usage: node tools/checksources.js [topics-dir] [--only=topic]   (writes sources_report.txt to cwd)
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : path.join(__dirname, '..', 'data', 'topics');
const only = (process.argv.find(a => a.startsWith('--only=')) || '').slice(7);
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

const items = [];
for (const f of fs.readdirSync(dir)) {
    if (!/\.(js|json)$/.test(f) || (only && !f.startsWith(only))) continue;
    const raw = fs.readFileSync(path.join(dir, f), 'utf8').trim().replace(/^registerTopic\(/, '').replace(/\);?\s*$/, '');
    const t = JSON.parse(raw);
    for (const n of t.nodes) for (const o of n.options) items.push({ file: f, node: n.id, text: o.text, url: o.source });
}
const corePath = path.join(__dirname, '..', 'data', 'core.js');
if (!only && fs.existsSync(corePath)) {
    const sb = {}; vm.runInNewContext(fs.readFileSync(corePath, 'utf8') + '; this.CORE = CORE;', sb);
    for (const n of [...sb.CORE.openings, ...sb.CORE.finals, sb.CORE.meltdown]) for (const o of n.options) items.push({ file: 'core.js', node: n.id, text: o.text, url: o.source });
}

const norm = s => s.toLowerCase().replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/&#8217;|&rsquo;|&#x27;|&#39;/g, "'").replace(/&quot;|&#8220;|&#8221;/g, '"').replace(/&amp;/g, '&').replace(/—|--/g, ' ').replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ');
function matches(page, quote) {
    const words = norm(quote.replace(/\.\.\./g, ' ')).split(' ').filter(Boolean);
    const p = ' ' + norm(page) + ' ';
    let best = 0;
    for (let w = Math.min(6, words.length); w >= 3; w--) {
        for (let i = 0; i + w <= words.length; i++) if (p.includes(' ' + words.slice(i, i + w).join(' ') + ' ')) { best = Math.max(best, w); break; }
        if (best) break;
    }
    return best;
}
async function get(url) {
    const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 25000);
    try {
        const r = await fetch(url, { headers: { 'User-Agent': UA, 'Accept': 'text/html,*/*' }, redirect: 'follow', signal: ctl.signal });
        const body = r.ok ? (await r.text()).replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ') : '';
        return { status: r.status, body };
    } catch (e) { return { status: 'ERR ' + (e.cause?.code || e.name), body: '' }; }
    finally { clearTimeout(t); }
}
(async () => {
    const byUrl = new Map(); for (const it of items) (byUrl.get(it.url) || byUrl.set(it.url, []).get(it.url)).push(it);
    const urls = [...byUrl.keys()]; const out = []; let i = 0;
    async function worker() {
        while (i < urls.length) {
            const url = urls[i++]; const { status, body } = await get(url);
            for (const it of byUrl.get(url)) {
                const m = body ? matches(body, it.text) : 0;
                const flag = status !== 200 ? 'HTTP ' + status : m >= 4 ? 'OK' : m ? 'WEAK' : 'NOMATCH';
                out.push(`${flag.padEnd(12)} ${it.file.padEnd(16)} ${it.node.padEnd(34)} ${url}\n${' '.repeat(13)}"${it.text.slice(0, 110)}"`);
                process.stdout.write(`${flag.padEnd(12)} ${it.file} ${it.node}\n`);
            }
        }
    }
    await Promise.all(Array.from({ length: 6 }, worker));
    out.sort();
    fs.writeFileSync('sources_report.txt', out.join('\n') + '\n');
    const counts = {}; for (const l of out) { const k = l.split(' ')[0]; counts[k] = (counts[k] || 0) + 1; }
    console.log('\n', counts, '\nreport: sources_report.txt');
})();
