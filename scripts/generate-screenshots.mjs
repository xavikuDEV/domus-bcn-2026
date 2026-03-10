// scripts/generate-screenshots.mjs
import sharp from "sharp";

// Screenshot wide (1280x720) — fondo negro con texto
const wideSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720">
  <rect width="1280" height="720" fill="#000000"/>
  <circle cx="640" cy="300" r="138" fill="#D4AF37"/>
  <text x="640" y="340" font-family="Arial" font-size="150" font-weight="bold" 
        fill="white" text-anchor="middle">D</text>
  <text x="640" y="480" font-family="Arial" font-size="60" fill="#D4AF37" text-anchor="middle">Domus BCN</text>
  <text x="640" y="560" font-family="Arial" font-size="32" fill="white" text-anchor="middle">Encuentra tu hogar ideal en Barcelona</text>
</svg>`;

const mobileSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="390" height="844">
  <rect width="390" height="844" fill="#000000"/>
  <circle cx="195" cy="350" r="120" fill="#D4AF37"/>
  <text x="195" y="395" font-family="Arial" font-size="130" font-weight="bold" 
        fill="white" text-anchor="middle">D</text>
  <text x="195" y="530" font-family="Arial" font-size="48" fill="#D4AF37" text-anchor="middle">Domus BCN</text>
  <text x="195" y="600" font-family="Arial" font-size="26" fill="white" text-anchor="middle">Tu hogar ideal</text>
  <text x="195" y="645" font-family="Arial" font-size="26" fill="white" text-anchor="middle">en Barcelona</text>
</svg>`;

await sharp(Buffer.from(wideSvg)).png().toFile("public/screenshot-wide.png");
await sharp(Buffer.from(mobileSvg))
  .png()
  .toFile("public/screenshot-mobile.png");
console.log("✅ Screenshots generados");
