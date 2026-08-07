// Genera cursos.html a partir de los archivos markdown en cursos/.
// Uso: npm install && node scripts/build-cursos.js
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = path.join(__dirname, '..');
const CURSOS_DIR = path.join(ROOT, 'cursos');
const OUT_FILE = path.join(ROOT, 'cursos.html');
const TEMPLATE_FILE = path.join(__dirname, 'cursos-template.html');

marked.setOptions({ gfm: true, breaks: false });

const LEVEL_ORDER = ['Principiante', 'Intermedio', 'Avanzado', 'Experto'];
const LEVEL_EMOJI = { Principiante: '🟢', Intermedio: '🟡', Avanzado: '🟠', Experto: '🔴' };
const LEVEL_COLOR_CLASS = { Principiante: 'lvl-green', Intermedio: 'lvl-yellow', Avanzado: 'lvl-coral', Experto: 'lvl-pink' };

function parseCourse(filename) {
  const raw = fs.readFileSync(path.join(CURSOS_DIR, filename), 'utf8');
  const lines = raw.split('\n');

  let i = 0;
  while (lines[i] !== undefined && !lines[i].startsWith('# ')) i++;
  const title = lines[i].replace(/^#\s+/, '').trim();
  i++;

  while (lines[i] !== undefined && lines[i].trim() === '') i++;
  let description = '';
  if (lines[i] !== undefined && lines[i].startsWith('> ')) {
    description = lines[i].replace(/^>\s+/, '').trim();
    i++;
  }

  while (lines[i] !== undefined && !/\*\*Nivel:\*\*/.test(lines[i])) i++;
  const metaLine = lines[i] || '';
  const levelMatch = metaLine.match(/\*\*Nivel:\*\*\s*([^|]+)\|/);
  const durMatch = metaLine.match(/\*\*Duración:\*\*\s*([^\n]+)/);
  const level = levelMatch ? levelMatch[1].trim() : 'Sin nivel';
  const duracion = durMatch ? durMatch[1].trim() : '';
  i++;

  while (lines[i] !== undefined && lines[i].trim() !== '---') i++;
  i++;

  const body = lines.slice(i).join('\n').trim();
  const bodyHtml = marked.parse(body);

  const order = parseInt(filename.match(/^(\d+)/)[1], 10);

  return { filename, order, title, description, level, duracion, bodyHtml };
}

const files = fs.readdirSync(CURSOS_DIR)
  .filter(f => /^\d{2}-.*\.md$/.test(f) && f !== '00-mapa-de-cursos.md')
  .sort();

const courses = files.map(parseCourse);

const byLevel = {};
for (const c of courses) {
  if (!byLevel[c.level]) byLevel[c.level] = [];
  byLevel[c.level].push(c);
}
for (const lvl in byLevel) byLevel[lvl].sort((a, b) => a.order - b.order);

function slugId(filename) {
  return filename.replace(/\.md$/, '');
}

let accordionHtml = '';
for (const level of LEVEL_ORDER) {
  const items = byLevel[level];
  if (!items) continue;
  const colorClass = LEVEL_COLOR_CLASS[level];
  accordionHtml += `
<section class="level-group">
  <div class="wrap">
    <h2 class="level-heading ${colorClass}"><span class="level-emoji">${LEVEL_EMOJI[level]}</span> Nivel ${level}</h2>
    <div class="accordion">
`;
  for (const c of items) {
    accordionHtml += `
      <details class="course-item ${colorClass}" id="${slugId(c.filename)}">
        <summary>
          <span class="course-summary-main">
            <span class="course-title">${c.title}</span>
            <span class="course-desc">${c.description}</span>
          </span>
          <span class="course-meta mono">${c.duracion}</span>
        </summary>
        <div class="course-body">
${c.bodyHtml}
        </div>
      </details>
`;
  }
  accordionHtml += `
    </div>
  </div>
</section>
`;
}

const template = fs.readFileSync(TEMPLATE_FILE, 'utf8');
const finalHtml = template.replace('<!--ACCORDION_CONTENT-->', accordionHtml);

fs.writeFileSync(OUT_FILE, finalHtml);
console.log('Wrote', OUT_FILE, 'with', courses.length, 'courses across', Object.keys(byLevel).length, 'levels');
