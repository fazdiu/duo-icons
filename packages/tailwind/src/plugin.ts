import plugin from 'tailwindcss/plugin';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default plugin(({ addComponents, matchUtilities }) => {
  const iconsDir = process.env.ICONS_PATH || path.resolve(__dirname, '../../../icons');

  if (!fs.existsSync(iconsDir)) return;

  const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg'));
  const iconValues: Record<string, string> = {};

  files.forEach(file => {
    const name = file.replace('.svg', '');
    const svg = fs.readFileSync(path.join(iconsDir, file), 'utf8');
    const base64 = Buffer.from(svg).toString('base64');
    
    iconValues[name] = `url('data:image/svg+xml;base64,${base64}')`;
  });

  // Dynamic utility duo-icons-*
  matchUtilities(
    {
      'duo-icons': (value: string) => ({
        'mask-image': value,
      }),
    },
    { values: iconValues }
  );
});
