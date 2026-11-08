// Builds public/og.png (1200×630), the link preview image for LinkedIn, WhatsApp, etc.
// Run: node scripts/og-image.mjs (only needed when the name or title changes).
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0e0f12"/>
  <rect x="80" y="120" width="12" height="390" fill="#e0a458"/>
  <text x="130" y="230" font-family="Segoe UI, Arial, sans-serif" font-size="34" fill="#9aa0a6" letter-spacing="4">CLOUD &amp; PLATFORM ENGINEER</text>
  <text x="130" y="340" font-family="Segoe UI, Arial, sans-serif" font-size="96" font-weight="700" fill="#f6f4f0">Namoussi Yayaoui</text>
  <text x="130" y="420" font-family="Segoe UI, Arial, sans-serif" font-size="34" fill="#c9c6c0">Infrastructures critiques 24/7 · Kubernetes · AWS · Ansible · GitOps</text>
  <text x="130" y="490" font-family="Consolas, monospace" font-size="30" fill="#e0a458">namoussi.yayaoui.com · Toulouse</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('public/og.png written');
