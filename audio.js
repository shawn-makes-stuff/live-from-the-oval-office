// Procedural audio: speech blips, UI clicks, crowd ambience and reactions, and a breaking-news music loop. No asset files.
const Audio = (() => {
    let ctx, master, speech, music, sfx, crowdBus, musicOn = false, nextBeat = 0, beat = 0, timer, mode = 'title', pendingMode = null;
    let noiseBuf;
    const settings = { speech: .5, music: .35, sfx: .6, muted: false };

    function init() {
        if (ctx) return;
        try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch { return; }
        master = ctx.createGain(); master.connect(ctx.destination);
        speech = ctx.createGain(); speech.connect(master);
        music = ctx.createGain(); music.connect(master);
        sfx = ctx.createGain(); sfx.connect(master);
        crowdBus = ctx.createGain(); crowdBus.connect(sfx);
        apply();
    }
    function apply() {
        if (!ctx) return;
        master.gain.value = settings.muted ? 0 : 1;
        speech.gain.value = settings.speech;
        music.gain.value = settings.music;
        sfx.gain.value = settings.sfx;
    }
    function set(patch) { Object.assign(settings, patch); apply(); }
    function resume() { init(); if (ctx && ctx.state === 'suspended') ctx.resume(); }
    const rnd = (a, b) => a + Math.random() * (b - a);

    // --- primitives ---
    function tone(dest, { freq, type = 'sine', t = ctx.currentTime, dur = .1, vol = .2, attack = .005, glide, lp }) {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = type; o.frequency.setValueAtTime(freq, t);
        if (glide) o.frequency.exponentialRampToValueAtTime(glide, t + dur);
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(vol, t + attack);
        g.gain.exponentialRampToValueAtTime(.001, t + dur);
        let node = o;
        if (lp) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = lp; o.connect(f); node = f; }
        node.connect(g); g.connect(dest);
        o.start(t); o.stop(t + dur + .02);
    }
    function noiseBuffer() {
        if (noiseBuf) return noiseBuf;
        const len = ctx.sampleRate * 2, b = ctx.createBuffer(1, len, ctx.sampleRate), d = b.getChannelData(0);
        for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
        return noiseBuf = b;
    }
    // Filtered noise burst with its own envelope and stereo position.
    function burst(dest, { t = ctx.currentTime, dur = .05, vol = .1, type = 'highpass', freq = 4000, q = 1, pan = 0, attack = .002 }) {
        const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain(), p = ctx.createStereoPanner();
        s.buffer = noiseBuffer(); s.loop = true; s.playbackRate.value = rnd(.85, 1.15);
        f.type = type; f.frequency.value = freq; f.Q.value = q; p.pan.value = pan;
        g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(.0005, t + dur);
        s.connect(f); f.connect(g); g.connect(p); p.connect(dest); s.start(t); s.stop(t + dur + .05);
    }

    // --- UI / speech ---
    const blip = () => { if (!ctx) return; tone(speech, { freq: 320 + Math.random() * 180, type: 'square', dur: .045, vol: .12 }); };
    const click = () => { if (!ctx) return; tone(sfx, { freq: 900, glide: 500, dur: .07, vol: .25 }); burst(sfx, { dur: .03, vol: .15 }); };
    const confirm = () => { if (!ctx) return; const t = ctx.currentTime; tone(sfx, { freq: 660, t, dur: .08, vol: .2 }); tone(sfx, { freq: 990, t: t + .07, dur: .12, vol: .2 }); };
    const sting = () => {
        if (!ctx) return; const t = ctx.currentTime;
        [[220, 0], [330, .18], [440, .36]].forEach(([f, d]) => tone(sfx, { freq: f, type: 'sawtooth', t: t + d, dur: .35, vol: .18, lp: 1800 }));
        tone(sfx, { freq: 55, t, dur: .5, vol: .3, glide: 40 });
    };
    const alarm = () => { if (!ctx) return; const t = ctx.currentTime; for (let i = 0; i < 4; i++) tone(sfx, { freq: i % 2 ? 620 : 830, type: 'square', t: t + i * .12, dur: .1, vol: .12, lp: 2500 }); };

    // --- crowd ---
    // Applause: a swell of many short band-passed claps spread across the room, over a soft noise bed.
    function applause(strength = 1) {
        if (!ctx) return; const t = ctx.currentTime, total = 1.6 + strength * .8, n = Math.round(90 * strength) + 40;
        burst(crowdBus, { t, dur: total, vol: .03 * strength, type: 'bandpass', freq: 1800, q: .6, attack: .3 });
        for (let i = 0; i < n; i++) {
            const at = t + Math.pow(Math.random(), .8) * total;           // ramps in, thins out
            const env = Math.sin(Math.PI * (at - t) / total);            // louder in the middle
            burst(crowdBus, { t: at, dur: rnd(.012, .03), vol: (.025 + rnd(0, .04)) * env * strength, type: 'bandpass', freq: rnd(1200, 4200), q: rnd(1.5, 4), pan: rnd(-.9, .9) });
        }
    }
    // Boo: several low detuned voices sliding down under a murmur swell.
    function boo() {
        if (!ctx) return; const t = ctx.currentTime;
        murmurSwell(.9, 1.6);
        for (let i = 0; i < 8; i++) { const f = rnd(140, 240); tone(crowdBus, { freq: f, glide: f * .8, type: 'sawtooth', t: t + rnd(0, .3), dur: rnd(1, 1.5), vol: .02, attack: .3, lp: 500 }); }
    }
    // --- murmur: synthesized talkers. Each voice = low sawtooth with drifting pitch -> two moving formant filters,
    //     gated at syllable rate, behind a lowpass so the room sounds distant. ---
    let room, roomIn, talkers = [];
    function ensureRoom() {
        if (room) return;
        roomIn = ctx.createGain(); roomIn.gain.value = 1;
        const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1600;
        room = ctx.createGain(); room.gain.value = 0;
        roomIn.connect(lp); lp.connect(room); room.connect(crowdBus);
    }
    function talker(vol, life) {
        ensureRoom();
        const base = rnd(85, 210), t0 = ctx.currentTime;
        const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = base;
        const f1 = ctx.createBiquadFilter(), f2 = ctx.createBiquadFilter(); f1.type = f2.type = 'bandpass'; f1.Q.value = 6; f2.Q.value = 8;
        f1.frequency.value = rnd(350, 800); f2.frequency.value = rnd(1000, 2200);
        const g = ctx.createGain(), p = ctx.createStereoPanner(); g.gain.value = 0; p.pan.value = rnd(-.85, .85);
        o.connect(f1); o.connect(f2); f1.connect(g); f2.connect(g); g.connect(p); p.connect(roomIn); o.start();
        const v = { o, f1, f2, g, vol, base, timer: null, stop() { clearInterval(v.timer); g.gain.setTargetAtTime(0, ctx.currentTime, .15); setTimeout(() => o.stop(), 600); } };
        // syllables: every 90-260 ms pick a new loudness (with pauses), drift the pitch and the vowel
        const syl = () => {
            const t = ctx.currentTime, talking = Math.random() < .72;
            g.gain.setTargetAtTime(talking ? vol * rnd(.4, 1) : 0, t, .04);
            o.frequency.setTargetAtTime(base * rnd(.9, 1.12), t, .08);
            f1.frequency.setTargetAtTime(rnd(300, 900), t, .06); f2.frequency.setTargetAtTime(rnd(900, 2400), t, .06);
        };
        v.timer = setInterval(syl, rnd(90, 260));
        if (life) setTimeout(v.stop, life * 1000);
        return v;
    }
    function murmurSwell(strength = .6, dur = 1.4) {
        if (!ctx) return; ensureRoom();
        const n = Math.round(6 * strength) + 2;
        for (let i = 0; i < n; i++) setTimeout(() => talker(.02 + .02 * strength, dur), rnd(0, 300));
        const t = ctx.currentTime; room.gain.cancelScheduledValues(t);
        room.gain.setTargetAtTime(Math.max(room.gain.value, 1) * (1 + strength), t, .15); room.gain.setTargetAtTime(bed ? 1 : 0, t + dur, .6);
    }
    const cough = () => { if (!ctx) return; const t = ctx.currentTime, pan = rnd(-.9, .9); burst(crowdBus, { t, dur: .12, vol: .03, type: 'lowpass', freq: 900, pan, attack: .004 }); if (Math.random() < .5) burst(crowdBus, { t: t + .22, dur: .1, vol: .025, type: 'lowpass', freq: 900, pan, attack: .004 }); };
    // Room ambience while the interview is on: a handful of quiet talkers, the odd cough, an occasional extra voice.
    let bed = false, murmurTimer, coughTimer;
    function startCrowd() {
        resume(); if (!ctx || bed) return; bed = true; ensureRoom();
        room.gain.setTargetAtTime(1, ctx.currentTime, 1.2);
        for (let i = 0; i < 7; i++) talkers.push(talker(.011));
        const extra = () => { if (!bed) return; talker(.02, rnd(1, 3)); murmurTimer = setTimeout(extra, rnd(2500, 7000)); };
        const hack = () => { if (!bed) return; cough(); coughTimer = setTimeout(hack, rnd(14000, 32000)); };
        murmurTimer = setTimeout(extra, 2500); coughTimer = setTimeout(hack, rnd(6000, 15000));
    }
    function stopCrowd() {
        clearTimeout(murmurTimer); clearTimeout(coughTimer); bed = false;
        if (room) room.gain.setTargetAtTime(0, ctx.currentTime, .5);
        setTimeout(() => { talkers.forEach(v => v.stop()); talkers = []; }, 1500);
    }
    const crowd = score => score <= 3 ? applause(score <= 1 ? 1.2 : .8) : score >= 7 ? boo() : murmurSwell(.5, 1.2);

    // --- music: two modes over one clock; 'title' = full breaking-news intensity, 'interview' = sparse underscore ---
    const BPM = 124, SPB = 60 / BPM;
    const CHORDS = [[110, 130.81, 164.81], [87.31, 110, 130.81], [73.42, 87.31, 110], [82.41, 103.83, 123.47]]; // Am F Dm E
    const MOTIF = [440, 659.25, 698.46, 659.25, 587.33, 523.25, 493.88, 440];
    function setMode(m) { if (m !== mode) pendingMode = m; }
    function schedule(b, t) {
        const bar = Math.floor(b / 4) % 8, step = b % 4, chord = CHORDS[Math.floor(bar / 2)];
        if (step === 0 && pendingMode) { mode = pendingMode; pendingMode = null; }
        if (mode === 'interview') {
            for (let e = 0; e < 2; e++) tone(music, { freq: chord[0] / 2, type: 'sawtooth', t: t + e * SPB / 2, dur: SPB / 2 * .9, vol: .14, lp: 300 });
            burst(music, { t, dur: .03, vol: .04, freq: 6000 });
            if (step === 0) tone(music, { freq: 65, glide: 45, t, dur: .5, vol: .2 });
            if (step === 0) chord.forEach(f => tone(music, { freq: f * 2, type: 'triangle', t, dur: SPB * 4, vol: .04, attack: .4 }));
            if (bar === 7 && step === 2) tone(music, { freq: 440, type: 'sawtooth', t, dur: SPB * 1.5, vol: .05, lp: 1800, attack: .1 });
            return;
        }
        for (let e = 0; e < 2; e++) tone(music, { freq: chord[0] / 2, type: 'sawtooth', t: t + e * SPB / 2, dur: SPB / 2 * .9, vol: .22, lp: 400 });
        for (let e = 0; e < 2; e++) burst(music, { t: t + e * SPB / 2, dur: .03, vol: e ? .05 : .08, freq: 6000 });
        if (step === 1 || step === 3) burst(music, { t, dur: .12, vol: .12, freq: 1500 });
        if (step === 0) tone(music, { freq: 65, glide: 45, t, dur: .5, vol: .35 });
        if (step === 0) chord.forEach(f => tone(music, { freq: f * 2, type: 'triangle', t, dur: SPB * 4, vol: .05, attack: .3 }));
        if (step === 0 && bar % 2 === 0) chord.forEach(f => tone(music, { freq: f * 2, type: 'sawtooth', t, dur: SPB * .9, vol: .07, lp: 2400, attack: .01 }));
        if (bar === 4 || bar === 6) for (let e = 0; e < 2; e++) tone(music, { freq: MOTIF[step * 2 + e], type: 'sawtooth', t: t + e * SPB / 2, dur: SPB / 2 * .8, vol: .09, lp: 2200, attack: .02 });
        if (bar === 7 && step === 3) tone(music, { freq: 880, type: 'sawtooth', t, dur: SPB, vol: .12, lp: 2600, attack: .05 });
    }
    function loop() {
        if (!musicOn) return;
        while (nextBeat < ctx.currentTime + .3) { schedule(beat, nextBeat); nextBeat += SPB; beat++; }
        timer = setTimeout(loop, 100);
    }
    function startMusic(m) { resume(); if (m) { mode = m; pendingMode = null; } if (!ctx || musicOn) return; musicOn = true; nextBeat = ctx.currentTime + .05; beat = 0; loop(); }
    function stopMusic() { musicOn = false; clearTimeout(timer); }

    return { init, resume, set, settings, blip, click, confirm, sting, alarm, crowd, applause, boo, murmurSwell, startCrowd, stopCrowd, startMusic, stopMusic, setMode };
})();
