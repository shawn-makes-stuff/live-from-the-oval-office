// Engine. Data is registered by data/*.js via registerTopic() and window.CORE.
const TOPICS = {};
function registerTopic(t) { TOPICS[t.id] = t; }

const CAT_LABELS = {
    press: 'Attacks on the press', truth: 'Reality denial', elections: 'Election denial', power: 'Unchecked power',
    violence: 'Violence & force', dehumanization: 'Dehumanization', cronyism: 'Corruption & cronyism', strongman: 'Strongman worship'
};
const SPEEDS = { 1: 60, 2: 38, 3: 22, 4: 10, 5: 0 };
const DEFAULTS = { speed: 3, speech: 50, music: 35, sfx: 60, muted: false };

const $ = id => document.getElementById(id);
function el(tag, attrs = {}, ...children) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
        if (k === 'class') e.className = v; else if (k.startsWith('on')) e.addEventListener(k.slice(2), v); else e.setAttribute(k, v);
    }
    for (const c of children) if (c != null) e.append(c);
    return e;
}
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const tier = s => s <= 3 ? 'lo' : s <= 6 ? 'mid' : 'hi';

const Game = {
    topicsPerGame: 5,
    settings: { ...DEFAULTS },
    nodes: {},
    gen: 0,              // bumped on every render; stale async work checks it and bails
    usedTexts: new Set(), // quotes already given this interview, so none repeats

    init() {
        this.loadSettings();
        this.introHTML = $('content').innerHTML;
        for (const t of Object.values(TOPICS)) for (const n of t.nodes) this.nodes[n.id] = { ...n, topic: t.id };
        for (const n of [...CORE.openings, ...CORE.finals, CORE.meltdown]) this.nodes[n.id] = { ...n, topic: null };
        this.initTicker();
        this.tick(); setInterval(() => this.tick(), 1000);
        $('start-btn').onclick = () => this.start();
        $('mute-btn').onclick = () => { this.setSetting('muted', !this.settings.muted); };
        $('settings-btn').onclick = () => this.openSettings();
        $('walkout-btn').onclick = () => this.walkout();
        for (const id of ['settings-close', 'settings-done']) $(id).onclick = () => { $('settings').hidden = true; };
        $('settings-reset').onclick = () => { for (const [k, v] of Object.entries(DEFAULTS)) this.setSetting(k, v); this.syncSettingsUI(); };
        $('settings').onclick = e => { if (e.target === $('settings')) $('settings').hidden = true; };
        for (const k of ['speed', 'speech', 'music', 'sfx']) $('set-' + k).oninput = e => { this.setSetting(k, +e.target.value); this.syncSettingsUI(); };
        $('set-muted').onchange = e => this.setSetting('muted', e.target.checked);
        // Global click sound + audio unlock on first gesture
        // Audio unlock on first gesture; title music starts as soon as the browser allows it
        const unlock = () => { Audio.startMusic('title'); };
        unlock();
        document.addEventListener('pointerdown', e => { unlock(); if (e.target.closest('button, .option, .bubble')) Audio.click(); });
        document.addEventListener('keydown', unlock, { once: true });
        document.addEventListener('keydown', e => this.onKey(e));
    },

    // --- settings ---
    loadSettings() { try { Object.assign(this.settings, JSON.parse(localStorage.getItem('lfoo_settings')) || {}); } catch { } this.applySettings(); },
    setSetting(k, v) { this.settings[k] = v; try { localStorage.setItem('lfoo_settings', JSON.stringify(this.settings)); } catch { } this.applySettings(); },
    applySettings() {
        const s = this.settings;
        Audio.set({ speech: s.speech / 100, music: s.music / 100, sfx: s.sfx / 100, muted: s.muted });
        $('mute-btn').textContent = s.muted ? '🔇' : '🔊';
        $('set-muted').checked = s.muted;
    },
    openSettings() { this.syncSettingsUI(); $('settings').hidden = false; },
    syncSettingsUI() {
        const s = this.settings;
        for (const k of ['speed', 'speech', 'music', 'sfx']) $('set-' + k).value = s[k];
        $('out-speed').textContent = ['', 'Slow', 'Relaxed', 'Normal', 'Fast', 'Instant'][s.speed];
        for (const k of ['speech', 'music', 'sfx']) $('out-' + k).textContent = s[k] + '%';
    },

    // --- chrome ---
    tick() { $('broadcast-time').textContent = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' ET'; },
    initTicker() {
        const items = shuffle(NEWS), track = $('ticker'), view = track.parentElement;
        for (const it of [...items, ...items]) track.append(el('span', { class: 'ticker-item' }, it));
        // JS-driven scroll so hover can slow it down instead of stopping it
        let x = 0, speed = 1, last = performance.now();
        view.addEventListener('pointerenter', () => speed = .25); view.addEventListener('pointerleave', () => speed = 1);
        let cur = 1;
        const frame = now => {
            const dt = Math.min(now - last, 100); last = now;
            cur += (speed - cur) * .08;
            x -= dt * .08 * cur;
            const half = track.scrollWidth / 2;
            if (half && -x >= half) x += half;
            track.style.transform = 'translateX(' + x + 'px)';
            requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
    },
    updateMeter() {
        const pct = this.pct();
        $('meter-fill').style.width = pct + '%';
        $('meter-value').textContent = pct + '%';
    },
    // Points over points possible. Denominator is at least the minimum interview length (12) so one answer cannot spike the meter.
    pct() { return Math.round(this.score / (Math.max(this.history.length, 12) * 10) * 100); },
    setTopic(title) { $('chyron-topic').textContent = title ? '• ' + title : ''; },

    // --- flow ---
    start() {
        Object.assign(this, { score: 0, history: [], visited: [], melted: false, busy: false, current: null });
        this.gen++; this.usedTexts = new Set(); this.optionEls = [];
        this.updateMeter(); this.setTopic('');
        Audio.startMusic(); Audio.setMode('interview'); Audio.sting(); Audio.startCrowd();
        this.show(CORE.openings[Math.floor(Math.random() * CORE.openings.length)].id);
    },
    advance(next) {
        if (next === 'RESULTS') return this.results();
        if (next !== 'NEXT_TOPIC') return this.show(next);
        const pct = this.pct();
        if (!this.melted && pct >= 65 && this.visited.length >= 2) { this.melted = true; Audio.alarm(); this.setTopic('Breaking: interview tension'); return this.show(CORE.meltdown.id); }
        if (this.visited.length >= this.topicsPerGame) {
            this.setTopic('Final question'); Audio.sting();
            return this.show(CORE.finals[Math.floor(Math.random() * CORE.finals.length)].id);
        }
        const pool = Object.keys(TOPICS).filter(id => !this.visited.includes(id));
        const t = TOPICS[pool[Math.floor(Math.random() * pool.length)]];
        this.visited.push(t.id); this.setTopic(t.title); Audio.sting();
        this.show(t.entry);
    },
    async show(id) {
        const node = this.nodes[id];
        if (!node) { console.error('Missing node', id); return this.advance('NEXT_TOPIC'); }
        const gen = ++this.gen;
        this.current = node; this.busy = true;
        const q = el('div', { class: 'question' });
        const bubble = el('div', { class: 'bubble', onclick: () => this.skip() },
            el('div', { class: 'speaker-label' }, 'Sarah Chen • Anchor'), q,
            el('div', { class: 'skip-hint' }, 'Enter / tap to skip'));
        const opts = el('div', { class: 'options' });
        // Show at most 4 answers: prefer quotes not already used this interview, and always
        // span the range (one scoring <= 3 and one >= 7) when the node has them.
        const pool = shuffle(node.options);
        const ranked = [...pool.filter(o => !this.usedTexts.has(o.text)), ...pool.filter(o => this.usedTexts.has(o.text))];
        const pick = [];
        const lo = ranked.find(o => o.score <= 3), hi = ranked.find(o => o.score >= 7);
        for (const o of [lo, hi]) if (o && !pick.includes(o)) pick.push(o);
        for (const o of ranked) if (pick.length < 4 && !pick.includes(o)) pick.push(o);
        this.optionEls = shuffle(pick).map((o, i) => {
            const card = el('button', { class: 'option', onclick: () => this.choose(o, card, node, gen) },
                el('span', { class: 'num' }, String(i + 1)), o.text,
                el('a', { class: 'src', href: o.source, target: '_blank', rel: 'noopener', title: 'Source' + (o.date ? ' (' + o.date + ')' : ''), onclick: e => e.stopPropagation() }, '\u{1F517}'));
            opts.append(card); return card;
        });
        $('walkout-btn').hidden = false;
        $('content').replaceChildren(el('div', { class: 'speaker' }, el('div', { class: 'avatar' }, '\u{1F469}‍\u{1F4BC}'), bubble), opts);
        $('content').scrollTop = 0;
        await this.type(q, node.prompt);
        if (gen !== this.gen) return; // superseded while typing (walk-out, restart)
        bubble.querySelector('.skip-hint')?.remove();
        this.optionEls.forEach((c, i) => setTimeout(() => c.classList.add('in'), i * 90));
        this.busy = false;
    },
    type(target, text) {
        return new Promise(resolve => {
            const ms = SPEEDS[this.settings.speed], caret = el('span', { class: 'caret' });
            let i = 0; target.append(caret);
            const finish = () => { clearTimeout(this.typeTimer); target.textContent = text; this.skip = () => { }; resolve(); };
            this.skip = finish;
            if (!ms) return finish();
            const step = () => {
                if (i >= text.length) return finish();
                caret.before(text[i]);
                if (text[i] !== ' ') Audio.blip();
                i++; this.typeTimer = setTimeout(step, ms);
            };
            step();
        });
    },
    skip() { },
    onKey(e) {
        if (e.target.matches('input')) return;
        if (e.key === 'Escape') $('settings').hidden = true;
        if (!$('settings').hidden) return; // dialog open: no shortcuts through it
        if (e.key === 'Enter' || e.key === ' ') { if (this.current && this.busy) { e.preventDefault(); this.skip(); } return; }
        const n = +e.key, card = this.optionEls?.[n - 1];
        if (n >= 1 && n <= 4 && !this.busy && card?.isConnected && card.classList.contains('in')) card.click();
    },
    choose(o, card, node, gen) {
        // Ignore clicks from a render that is no longer on screen (stale keyboard target,
        // results/walk-out screen, or a card left over from the previous question).
        if (this.busy || gen !== this.gen || node !== this.current) return;
        this.busy = true; Audio.confirm(); Audio.crowd(o.score);
        this.score += o.score; this.usedTexts.add(o.text);
        this.history.push({ prompt: this.current.prompt, option: o, topic: this.current.topic });
        this.updateMeter();
        this.optionEls.forEach(c => { c.disabled = true; if (c !== card) c.style.opacity = .35; });
        card.style.borderColor = 'var(--gold)';
        const t = tier(o.score);
        $('content').append(el('div', { class: 'toast' },
            el('span', { class: 'chip ' + t }, (o.score > 0 ? '+' : '') + o.score + ' pts'),
            el('span', {}, el('b', {}, 'On the record'), o.date ? ' • ' + o.date : ''),
            el('a', { href: o.source, target: '_blank', rel: 'noopener' }, 'source ↗')));
        setTimeout(() => { if (gen !== this.gen) return; this.busy = false; this.advance(o.next); }, 1300);
    },

    // --- walkout: the President insults the anchor and leaves the set ---
    walkout() {
        if (!this.current) return;
        this.busy = true; this.skip(); this.gen++; this.optionEls = []; $('walkout-btn').hidden = true;
        const line = CORE.walkouts[Math.floor(Math.random() * CORE.walkouts.length)];
        Audio.boo(); Audio.alarm(); Audio.setMode('title'); Audio.stopCrowd();
        this.setTopic('Broadcast interrupted');
        const n = this.history.length;
        $('content').replaceChildren(el('div', { class: 'walkout' },
            el('div', { class: 'wo-tag' }, '\u{1F4FA} Broadcast interrupted'),
            el('blockquote', { class: 'wo-quote' }, line.text),
            el('a', { class: 'src-line', href: line.source, target: '_blank', rel: 'noopener' }, 'The President, on the record \u2197 ' + line.date),
            el('h2', {}, 'We appear to have lost the President'),
            el('p', {}, 'He has removed his microphone and left the set. We now return you to the studio.'),
            el('div', { class: 'wo-stats' },
                el('div', { class: 'wo-stat' }, el('b', {}, String(n)), el('span', {}, n === 1 ? 'question answered' : 'questions answered')),
                el('div', { class: 'wo-stat' }, el('b', {}, this.pct() + '%'), el('span', {}, 'fascism meter'))),
            el('button', { class: 'btn', onclick: () => this.toStudio() }, 'Return to studio')));
    },
    toStudio() {
        this.current = null; this.busy = false; this.optionEls = [];
        this.setTopic(''); Object.assign(this, { score: 0, history: [] }); this.updateMeter();
        $('content').innerHTML = this.introHTML;
        $('start-btn').onclick = () => this.start();
    },

    // --- results ---
    results() {
        this.gen++; this.optionEls = []; this.current = null;
        $('walkout-btn').hidden = true;
        Audio.setMode('title'); Audio.sting(); Audio.stopCrowd(); Audio.applause(.6);
        this.setTopic('Post-interview analysis');
        const pct = this.pct(), ending = CORE.endings.find(e => pct >= e.min);
        const cats = {}; let total = 0;
        for (const h of this.history) { cats[h.option.cat] = (cats[h.option.cat] || 0) + h.option.score; total += h.option.score; }
        const catEls = Object.entries(cats).sort((a, b) => b[1] - a[1]).map(([c, v]) => el('div', { class: 'cat' },
            el('div', { class: 'cat-top' }, el('span', {}, CAT_LABELS[c] || c), el('span', {}, v + ' pts')),
            el('div', { class: 'cat-bar' }, el('i', { style: 'width:' + (total ? v / total * 100 : 0) + '%' }))));
        const entries = this.history.map((h, i) => el('div', { class: 'entry' },
            el('div', { class: 'q' }, 'Q' + (i + 1) + ' • ' + (h.topic ? TOPICS[h.topic].title : 'Opening') + ' — ' + h.prompt),
            el('div', { class: 'a' }, h.option.text),
            el('div', { class: 'meta' }, el('span', { class: 'chip ' + tier(h.option.score) }, '+' + h.option.score), el('span', {}, CAT_LABELS[h.option.cat]),
                h.option.date ? el('span', {}, h.option.date) : null, el('a', { href: h.option.source, target: '_blank', rel: 'noopener' }, 'source ↗'))));
        const share = el('button', { class: 'btn secondary', onclick: () => this.shareImage(pct, ending, share) }, 'Copy results');
        $('content').replaceChildren(el('div', { class: 'results' },
            el('div', { class: 'results-head' },
                el('div', { class: 'signal' }, ending.signal), el('h2', {}, ending.title),
                el('div', { class: 'score' }, pct + '%', el('small', {}, 'Fascism Meter')),
                el('p', {}, ending.text)),
            el('h3', {}, 'Where the points came from'), el('div', { class: 'cats' }, ...catEls),
            el('h3', {}, 'Your answers, on the record'), el('div', { class: 'timeline' }, ...entries),
            el('div', { class: 'results-actions' }, el('button', { class: 'btn', onclick: () => this.start() }, 'Watch again'), share)));
        $('content').scrollTop = 0;
    },
    // Draws a compact, shareable summary of the run: verdict, meter, category split and the
    // worst thing the player said. 1080x1350 (4:5) so it posts without cropping.
    shareCard(pct, ending) {
        const W = 1080, H = 1350, PAD = 72, MID = W / 2, CW = W - PAD * 2;
        const c = el('canvas', { width: W, height: H }), x = c.getContext('2d');
        const C = { bg: '#0b0e1e', line: '#2a3060', text: '#f3f4fa', muted: '#9aa1bd', gold: '#f2c14e', red: '#e11d3c', track: '#1b1f3a' };
        const SANS = "'Helvetica Neue', Helvetica, Arial, sans-serif", SERIF = "Georgia, 'Times New Roman', serif";
        const box = (X, Y, w, h, r, fill) => { x.beginPath(); x.roundRect ? x.roundRect(X, Y, w, h, r) : x.rect(X, Y, w, h); x.fillStyle = fill; x.fill(); };
        // letter-spaced text needs manual placement; everything else uses textAlign
        const write = (t, X, Y, { font, fill = C.text, align = 'left', track = 0 } = {}) => {
            x.font = font; x.fillStyle = fill; x.textAlign = track ? 'left' : align;
            if (!track) return x.fillText(t, X, Y);
            const chars = [...t], w = chars.reduce((s, ch) => s + x.measureText(ch).width + track, -track);
            let cx = align === 'center' ? X - w / 2 : align === 'right' ? X - w : X;
            for (const ch of chars) { x.fillText(ch, cx, Y); cx += x.measureText(ch).width + track; }
        };
        const wrap = (t, font, width, maxLines) => {
            x.font = font; const out = []; let line = '', clipped = false;
            for (const word of t.split(' ')) {
                const test = line ? line + ' ' + word : word;
                if (x.measureText(test).width > width && line) {
                    if (out.length + 1 === maxLines) { clipped = true; break; }
                    out.push(line); line = word;
                } else line = test;
            }
            if (line) out.push(line);
            if (clipped) out[out.length - 1] = out[out.length - 1].replace(/[,.;:\s]*$/, '') + '\u2026\u201D';
            return out;
        };

        const bg = x.createLinearGradient(0, 0, 0, H);
        bg.addColorStop(0, '#1a1f47'); bg.addColorStop(.55, C.bg); bg.addColorStop(1, '#07080f');
        x.fillStyle = bg; x.fillRect(0, 0, W, H);
        x.fillStyle = 'rgba(255,255,255,.02)'; for (let y = 0; y < H; y += 4) x.fillRect(0, y, W, 2);

        // header
        box(PAD, PAD, 96, 96, 18, C.red);
        write('ANN', PAD + 48, PAD + 62, { font: '900 34px ' + SANS, align: 'center' });
        write('AMERICAN NEWS NETWORK', PAD + 124, PAD + 44, { font: '800 30px ' + SANS, track: 2 });
        write('POST-INTERVIEW ANALYSIS', PAD + 124, PAD + 82, { font: '700 22px ' + SANS, fill: C.gold, track: 3 });
        x.fillStyle = C.line; x.fillRect(PAD, 232, CW, 2);

        // verdict, then the number, then the meter -- each block advances the cursor
        write(ending.signal, MID, 338, { font: '84px ' + SANS, align: 'center' });
        let y = 424;
        const title = wrap(ending.title, 'bold 74px ' + SERIF, CW, 2);
        for (const l of title) { write(l, MID, y, { font: 'bold 74px ' + SERIF, align: 'center' }); y += 80; }
        y += 130;
        write(pct + '%', MID, y, { font: 'bold 186px ' + SERIF, align: 'center' });
        y += 66;
        write('FASCISM METER', MID, y, { font: '700 26px ' + SANS, fill: C.muted, align: 'center', track: 6 });
        y += 40;
        box(PAD, y, CW, 26, 13, C.track);
        const grad = x.createLinearGradient(PAD, 0, PAD + CW, 0);
        grad.addColorStop(0, '#3ddc84'); grad.addColorStop(.5, '#ffb020'); grad.addColorStop(1, C.red);
        x.save(); x.beginPath();
        const fw = Math.max(CW * pct / 100, 26);
        x.roundRect ? x.roundRect(PAD, y, fw, 26, 13) : x.rect(PAD, y, fw, 26); x.clip();
        x.fillStyle = grad; x.fillRect(PAD, y, CW, 26); x.restore();
        y += 84;

        // where the points came from
        const cats = {}; for (const h of this.history) cats[h.option.cat] = (cats[h.option.cat] || 0) + h.option.score;
        const top = Object.entries(cats).sort((a, b) => b[1] - a[1]).slice(0, 4);
        const most = top.length ? top[0][1] : 1;
        for (const [cat, v] of top) {
            write(CAT_LABELS[cat] || cat, PAD, y, { font: '600 28px ' + SANS });
            write(v + ' pts', W - PAD, y, { font: '600 28px ' + SANS, fill: C.muted, align: 'right' });
            box(PAD, y + 14, CW, 10, 5, C.track);
            box(PAD, y + 14, Math.max(CW * v / most, 10), 10, 5, C.gold);
            y += 64;
        }

        // the worst thing said, in whatever room is left above the footer
        const FOOT = H - 130;
        const worst = [...this.history].sort((a, b) => b.option.score - a.option.score)[0];
        if (worst) {
            const room = FOOT - (y + 30), max = Math.max(1, Math.min(3, Math.floor(room / 42)));
            const lines = wrap('\u201C' + worst.option.text + '\u201D', 'italic 31px ' + SERIF, CW - 40, max);
            let qy = FOOT - lines.length * 42 + 10;
            x.fillStyle = C.red; x.fillRect(PAD, qy - 28, 5, lines.length * 42);
            for (const l of lines) { write(l, PAD + 28, qy, { font: 'italic 31px ' + SERIF, fill: C.text }); qy += 42; }
        }

        // footer
        const n = this.history.length;
        write('LIVE FROM THE OVAL OFFICE', PAD, H - 76, { font: '800 28px ' + SANS, fill: C.gold, track: 2 });
        write(n + (n === 1 ? ' question' : ' questions') + ' answered', W - PAD, H - 76, { font: '600 24px ' + SANS, fill: C.muted, align: 'right' });
        write('Every answer is a real quote \u00B7 shawn-makes-stuff.github.io/live-from-the-oval-office', PAD, H - 36, { font: '500 22px ' + SANS, fill: C.muted });
        return c;
    },
    // Put the card on the clipboard where the browser allows it (Chrome, secure context),
    // otherwise save it as a file. Text is only a last resort.
    async shareImage(pct, ending, btn) {
        const label = btn.dataset.label || (btn.dataset.label = btn.textContent);
        const done = t => { btn.textContent = t; setTimeout(() => btn.textContent = label, 2500); };
        let blob;
        try { blob = await new Promise(r => this.shareCard(pct, ending).toBlob(r, 'image/png')); } catch { }
        if (!blob) { try { await navigator.clipboard.writeText(this.shareText(pct, ending)); done('Copied as text'); } catch { done('Copy failed'); } return; }
        try {
            if (!navigator.clipboard?.write || !window.ClipboardItem) throw 0;
            await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
            done('Copied!');
        } catch {
            try {
                const url = URL.createObjectURL(blob);
                const a = el('a', { href: url, download: 'live-from-the-oval-office.png' });
                document.body.append(a); a.click(); a.remove();
                setTimeout(() => URL.revokeObjectURL(url), 10000);
                done('Image saved');
            } catch { done('Copy failed'); }
        }
    },
    shareText(pct, ending) {
        return `Live from the Oval Office — Fascism Meter: ${pct}% (${ending.title})\n` +
            this.history.map((h, i) => `${i + 1}. [+${h.option.score}] "${h.option.text}"`).join('\n') + '\n\nPlay: https://shawn-makes-stuff.github.io/live-from-the-oval-office/';
    }
};
