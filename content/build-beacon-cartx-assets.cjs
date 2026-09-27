const fs = require('fs');
const path = require('path');
const sharp = require('C:/Users/tyh20/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');

const projects = [
  { source: 'E:/作品集/portfolio-site/content/beacon-ppt-preview', output: 'E:/作品集/portfolio-site/assets/beacon/web', slides: {
    18:'hero-restaurant', 7:'optical-tests', 8:'light-effect-studies', 9:'form-development', 12:'height-and-control', 13:'assembly', 14:'manufacturing', 16:'final-render', 17:'ambient-context'
  }},
  { source: 'E:/作品集/portfolio-site/content/cartx-ppt-preview', output: 'E:/作品集/portfolio-site/assets/cartx/web', slides: {
    1:'hero-product', 3:'user-research', 7:'concept-architecture', 8:'product-details', 9:'prototype-process', 10:'service-flow', 11:'qr-pairing', 12:'travel-app', 16:'capacity', 17:'following-mode', 19:'navigation-mode', 20:'mobility-engineering', 21:'battery-system', 23:'prototype-testing', 24:'following-test'
  }}
];

(async () => {
  for (const project of projects) {
    fs.mkdirSync(project.output, { recursive: true });
    for (const [slide, name] of Object.entries(project.slides)) {
      await sharp(path.join(project.source, `幻灯片${slide}.PNG`))
        .resize({ width: 2000, withoutEnlargement: true })
        .webp({ quality: 84, effort: 5 })
        .toFile(path.join(project.output, `${name}.webp`));
    }
  }
  await sharp('E:/作品集/portfolio-site/content/beacon-ppt-preview/幻灯片18.PNG')
    .extract({ left: 0, top: 100, width: 1600, height: 800 })
    .resize({ width: 2000 })
    .webp({ quality: 86, effort: 5 })
    .toFile('E:/作品集/portfolio-site/assets/beacon/web/hero-restaurant.webp');
  await sharp('E:/作品集/portfolio-site/content/cartx-ppt-preview/幻灯片1.PNG')
    .extract({ left: 850, top: 70, width: 750, height: 780 })
    .resize({ width: 1600 })
    .webp({ quality: 86, effort: 5 })
    .toFile('E:/作品集/portfolio-site/assets/cartx/web/hero-product.webp');
})();
