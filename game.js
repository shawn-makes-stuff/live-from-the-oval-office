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
        this.current = node; this.busy = true;
        const q = el('div', { class: 'question' });
        const bubble = el('div', { class: 'bubble', onclick: () => this.skip() },
            el('div', { class: 'speaker-label' }, 'Sarah Chen • Anchor'), q,
            el('div', { class: 'skip-hint' }, 'Enter / tap to skip'));
        const opts = el('div', { class: 'options' });
        // Show at most 4 answers, always spanning the range: one <= 3 and one >= 7 when the node has them.
        const pool = shuffle(node.options), pick = [];
        const lo = pool.find(o => o.score <= 3), hi = pool.find(o => o.score >= 7);
        for (const o of [lo, hi]) if (o && !pick.includes(o)) pick.push(o);
        for (const o of pool) if (pick.length < 4 && !pick.includes(o)) pick.push(o);
        this.optionEls = shuffle(pick).map((o, i) => {
            const card = el('button', { class: 'option', onclick: () => this.choose(o, card) },
                el('span', { class: 'num' }, String(i + 1)), o.text,
                el('a', { class: 'src', href: o.source, target: '_blank', rel: 'noopener', title: 'Source' + (o.date ? ' (' + o.date + ')' : ''), onclick: e => e.stopPropagation() }, '\u{1F517}'));
            opts.append(card); return card;
        });
        $('walkout-btn').hidden = false;
        $('content').replaceChildren(el('div', { class: 'speaker' }, el('div', { class: 'avatar' }, '\u{1F469}‍\u{1F4BC}'), bubble), opts);
        $('content').scrollTop = 0;
        await this.type(q, node.prompt);
        bubble.querySelector('.skip-hint').remove();
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
        if (e.key === 'Enter' || e.key === ' ') { if (this.current && this.busy) { e.preventDefault(); this.skip(); } return; }
        const n = +e.key;
        if (n >= 1 && n <= 4 && !this.busy && this.optionEls?.[n - 1]) this.optionEls[n - 1].click();
    },
    choose(o, card) {
        if (this.busy) return;
        this.busy = true; Audio.confirm(); Audio.crowd(o.score);
        this.score += o.score;
        this.history.push({ prompt: this.current.prompt, option: o, topic: this.current.topic });
        this.updateMeter();
        this.optionEls.forEach(c => { c.disabled = true; if (c !== card) c.style.opacity = .35; });
        card.style.borderColor = 'var(--gold)';
        const t = tier(o.score);
        $('content').append(el('div', { class: 'toast' },
            el('span', { class: 'chip ' + t }, (o.score > 0 ? '+' : '') + o.score + ' pts'),
            el('span', {}, el('b', {}, 'On the record'), o.date ? ' • ' + o.date : ''),
            el('a', { href: o.source, target: '_blank', rel: 'noopener' }, 'source ↗')));
        setTimeout(() => { this.busy = false; this.advance(o.next); }, 1300);
    },

    // --- walkout: the President insults the anchor and leaves the set ---
    walkout() {
        if (!this.current) return;
        this.busy = true; this.skip(); $('walkout-btn').hidden = true;
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
        const copy = el('button', { class: 'btn secondary', onclick: () => { navigator.clipboard?.writeText(this.shareText(pct, ending)); copy.textContent = 'Copied!'; } }, 'Copy results');
        $('content').replaceChildren(el('div', { class: 'results' },
            el('div', { class: 'results-head' },
                el('div', { class: 'signal' }, ending.signal), el('h2', {}, ending.title),
                el('div', { class: 'score' }, pct + '%', el('small', {}, 'Fascism Meter')),
                el('p', {}, ending.text)),
            el('h3', {}, 'Where the points came from'), el('div', { class: 'cats' }, ...catEls),
            el('h3', {}, 'Your answers, on the record'), el('div', { class: 'timeline' }, ...entries),
            el('div', { class: 'results-actions' }, el('button', { class: 'btn', onclick: () => this.start() }, 'Watch again'), copy)));
        $('content').scrollTop = 0;
    },
    shareText(pct, ending) {
        return `Live from the Oval Office — Fascism Meter: ${pct}% (${ending.title})\n` +
            this.history.map((h, i) => `${i + 1}. [+${h.option.score}] "${h.option.text}"`).join('\n') + '\n\nPlay: https://shawn-makes-stuff.github.io/live-from-the-oval-office/';
    }
};
