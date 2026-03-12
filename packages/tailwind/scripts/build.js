import fs from 'fs-extra';
import { execSync } from 'node:child_process';
import { resolve } from 'node:path';

async function build() {
  try {
    console.log('🚀 Starting build...');

    await fs.emptyDir('dist');

    // Run tsup (Compile TS to JS + Types)
    // We use npx to ensure it uses the local version
    execSync(`npx tsup src/plugin.ts --format cjs,esm --dts --minify --define.process.env.ICONS_PATH='"./icons"'`, { stdio: 'inherit' });

    await fs.copy('src/icons.css', 'dist/icons.css');
    await fs.copy('src/base.css', 'dist/base.css');

    await fs.copy('../../icons', 'dist/icons');

    console.log('✅ Build successfully completed in /dist!');
  } catch (err) {
    console.error('❌ Error during the build process:', err);
    process.exit(1);
  }
}

build();
