// Wraps validated topic JSON files as data/topics/<id>.js. Usage: node tools/import.js <dir-with-json>
const fs = require('fs'), path = require('path');
const src = process.argv[2], out = path.join(__dirname, '..', 'data', 'topics');
for (const f of fs.readdirSync(src).filter(f => f.endsWith('.json'))) {
    const t = JSON.parse(fs.readFileSync(path.join(src, f), 'utf8'));
    fs.writeFileSync(path.join(out, t.id + '.js'), 'registerTopic(' + JSON.stringify(t, null, 2) + ');\n');
    console.log('wrote', t.id + '.js', t.nodes.length, 'nodes');
}
