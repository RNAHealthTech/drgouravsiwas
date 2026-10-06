const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'logos');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

function createSvgLogo(text, subtext, color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
  <circle cx="60" cy="60" r="56" fill="#ffffff" stroke="${color}" stroke-width="4"/>
  <circle cx="60" cy="60" r="50" fill="none" stroke="${color}" stroke-opacity="0.15" stroke-width="2"/>
  <text x="60" y="56" text-anchor="middle" font-family="Arial, sans-serif" font-weight="900" font-size="20" fill="${color}">${text}</text>
  <text x="60" y="76" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="10" fill="${color}" letter-spacing="1.5">${subtext}</text>
</svg>`;
}

fs.writeFileSync(path.join(dir, 'logo-fessh.svg'), createSvgLogo('FESSH', 'EUROPE', '#0A2540'));
fs.writeFileSync(path.join(dir, 'logo-apsi.svg'), createSvgLogo('APSI', 'INDIA', '#8B1E00'));
fs.writeFileSync(path.join(dir, 'logo-issh.svg'), createSvgLogo('ISSH', 'HAND', '#005F73'));
fs.writeFileSync(path.join(dir, 'logo-mnams.svg'), createSvgLogo('MNAMS', 'ACADEMY', '#4A3328'));

console.log('Logos generated successfully!');
