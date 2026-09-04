// Validates topic files. Usage: node tools/validate.js [dir-of-json-or-js]
const fs = require('fs'), path = require('path');
const CATS = new Set(['press','truth','elections','power','violence','dehumanization','cronyism','strongman']);
const dir = process.argv[2] || path.join(__dirname, '..', 'data', 'topics');
let errors = 0, topics = 0, nodes = 0, opts = 0;
const err = (f, m) => { errors++; console.log(`  [${f}] ${m}`); };
for (const f of fs.readdirSync(dir)) {
  if (!/\.(js|json)$/.test(f)) continue;
  let raw = fs.readFileSync(path.join(dir, f), 'utf8').trim();
  if (f.endsWith('.js')) raw = raw.replace(/^registerTopic\(/, '').replace(/\);?\s*$/, '');
  let t; try { t = JSON.parse(raw); } catch (e) { err(f, 'parse: ' + e.message); continue; }
  topics++;
  if (!/^[a-z][a-z0-9_]*$/.test(t.id || '')) err(f, 'bad topic id');
  if (!t.title) err(f, 'missing title');
  const ids = new Map(); for (const n of t.nodes || []) { if (ids.has(n.id)) err(f, `dup node ${n.id}`); ids.set(n.id, n); }
  if (!ids.has(t.entry)) err(f, `entry ${t.entry} missing`);
  const depth = new Map([[t.entry, 1]]); const q = [t.entry]; let maxDepth = 0;
  while (q.length) { const id = q.shift(); const d = depth.get(id); maxDepth = Math.max(maxDepth, d);
    for (const o of ids.get(id)?.options || []) if (o.next !== 'NEXT_TOPIC' && ids.has(o.next) && !depth.has(o.next)) { depth.set(o.next, d + 1); q.push(o.next); } }
  for (const [id, n] of ids) {
    nodes++;
    if (!id.startsWith(t.id + '_')) err(f, `node ${id} not prefixed ${t.id}_`);
    if (!n.prompt || n.prompt.length < 20) err(f, `node ${id} prompt too short`);
    if (!depth.has(id)) err(f, `node ${id} unreachable`);
    if (!Array.isArray(n.options) || n.options.length < 2 || n.options.length > 6) err(f, `node ${id} needs 2-6 options`);
    let lo = false, hi = false;
    for (const o of n.options || []) {
      opts++;
      if (o.who !== undefined && (typeof o.who !== 'string' || !o.who)) err(f, `${id}: bad who`);
      if (!o.text || o.text.length > 240) err(f, `${id}: option text missing or >240 chars`);
      if (!/^https?:\/\//.test(o.source || '')) err(f, `${id}: bad source "${o.source}"`);
      if (!/^\d{4}(-\d{2}){1,2}$/.test(o.date || '')) err(f, `${id}: bad date "${o.date}"`);
      if (!Number.isInteger(o.score) || o.score < 0 || o.score > 10) err(f, `${id}: bad score ${o.score}`);
      if (!CATS.has(o.cat)) err(f, `${id}: bad cat "${o.cat}"`);
      if (o.next !== 'NEXT_TOPIC' && !ids.has(o.next)) err(f, `${id}: next "${o.next}" missing`);
      if (o.score <= 3) lo = true; if (o.score >= 7) hi = true;
    }
    if (!lo || !hi) err(f, `${id}: needs one option <=3 and one >=7`);
  }
  if (maxDepth < 3) err(f, `max depth ${maxDepth} < 3`);
  if (ids.size < 7) err(f, `only ${ids.size} nodes (want 7-12)`);
}
console.log(`${topics} topics, ${nodes} nodes, ${opts} options, ${errors} errors`);
if (errors) process.exit(1);

// core.js sanity
try {
  const vm = require('vm'), sb = {};
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'data', 'core.js'), 'utf8') + '; this.CORE = CORE;', sb);
  let ce = 0;
  for (const n of [...sb.CORE.openings, ...sb.CORE.finals, sb.CORE.meltdown]) for (const o of n.options) {
    if (!['NEXT_TOPIC', 'RESULTS'].includes(o.next)) { ce++; console.log(`  [core] ${n.id}: next ${o.next}`); }
    if (!/^https?:\/\//.test(o.source) || !CATS.has(o.cat) || !Number.isInteger(o.score)) { ce++; console.log(`  [core] ${n.id}: bad option "${o.text.slice(0, 40)}"`); }
  }
  console.log(`core: ${sb.CORE.openings.length} openings, ${sb.CORE.finals.length} finals, ${sb.CORE.endings.length} endings, ${ce} errors`);
  if (ce) process.exit(1);
} catch (e) { console.log('core.js failed to load:', e.message); process.exit(1); }
