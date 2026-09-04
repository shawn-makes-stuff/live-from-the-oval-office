// Generates the game's data files from the editable JSON in .work/topics.
//   <topic>.json  -> data/topics/<id>.js   (registerTopic(...))
//   _core.json    -> data/core.js          (openers/finals/meltdown; walkouts and endings kept)
// Usage: node tools/import.js <dir-with-json>
const fs = require('fs'), path = require('path'), vm = require('vm');
const src = process.argv[2], root = path.join(__dirname, '..');
const out = path.join(root, 'data', 'topics');

for (const f of fs.readdirSync(src).filter(f => f.endsWith('.json') && !f.startsWith('_'))) {
    const t = JSON.parse(fs.readFileSync(path.join(src, f), 'utf8'));
    fs.writeFileSync(path.join(out, t.id + '.js'), 'registerTopic(' + JSON.stringify(t, null, 2) + ');\n');
    console.log('wrote', t.id + '.js', t.nodes.length, 'nodes');
}

const corePath = path.join(src, '_core.json');
if (fs.existsSync(corePath)) {
    const dest = path.join(root, 'data', 'core.js'), sb = {};
    vm.runInNewContext(fs.readFileSync(dest, 'utf8') + '; this.CORE = CORE;', sb);
    const nodes = JSON.parse(fs.readFileSync(corePath, 'utf8')).nodes;
    sb.CORE.openings = nodes.filter(n => n.id.startsWith('open_'));
    sb.CORE.finals = nodes.filter(n => n.id.startsWith('final_'));
    sb.CORE.meltdown = nodes.find(n => n.id === 'meltdown_interrupt');
    fs.writeFileSync(dest,
        '// Openings, finals, the meltdown interrupt, walk-out lines, and endings. Same option schema as topics.\n' +
        '// Endings: highest matching `min` wins; percent = points / (questions * 10).\n' +
        'const CORE = ' + JSON.stringify(sb.CORE, null, 4) + ';\n');
    console.log('wrote core.js', sb.CORE.openings.length, 'openings,', sb.CORE.finals.length, 'finals');
}
