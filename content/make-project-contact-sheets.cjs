const fs = require('fs');
const path = require('path');
const sharp = require('C:/Users/tyh20/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');

async function makeSheet(source, output, count) {
  const width = 1280;
  const cellW = 320;
  const cellH = 200;
  const rows = Math.ceil(count / 4);
  const composites = [];
  for (let i = 1; i <= count; i += 1) {
    const input = path.join(source, `幻灯片${i}.PNG`);
    const thumb = await sharp(input).resize(300, 169, { fit: 'cover' }).png().toBuffer();
    const label = Buffer.from(`<svg width="300" height="20"><rect width="300" height="20" fill="white"/><text x="8" y="15" font-family="Arial" font-size="13" fill="black">${String(i).padStart(2, '0')}</text></svg>`);
    composites.push({ input: thumb, left: (i - 1) % 4 * cellW + 10, top: Math.floor((i - 1) / 4) * cellH + 10 });
    composites.push({ input: label, left: (i - 1) % 4 * cellW + 10, top: Math.floor((i - 1) / 4) * cellH + 179 });
  }
  await sharp({ create: { width, height: rows * cellH, channels: 3, background: '#dddddd' } }).composite(composites).jpeg({ quality: 85 }).toFile(output);
}

(async () => {
  await makeSheet('E:/作品集/portfolio-site/content/beacon-ppt-preview', 'E:/作品集/portfolio-site/content/beacon-contact.jpg', 19);
  await makeSheet('E:/作品集/portfolio-site/content/cartx-ppt-preview', 'E:/作品集/portfolio-site/content/cartx-contact.jpg', 24);
})();
