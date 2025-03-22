const fs = require('fs/promises');

const outputPath = './src/stories';
const indexPath = `${outputPath}/index.ts`;

function generateContent(exports) {
  let content = "import '../common.css';\nexport * from './types';\n";
  exports.forEach((ex) => {
    content += `${ex}\n`;
  });

  return content;
}

async function buildIndex() {
  const folder = await fs.readdir('./src/stories', 'utf-8');
  const exports = [];
  await Promise.all(
    folder.flatMap(async (folderPath) => {
      try {
        await fs.open(`./src/stories/${folderPath}/index.ts`);
        exports.push(`export * from './${folderPath}';`);
      } catch {
        try {
          await fs.open(`./src/stories/${folderPath}/index.tsx`);
          exports.push(`export * from './${folderPath}';`);
        } catch {}
      }
    }),
  );

  console.log('- Creating file: index.ts', exports);
  await fs.writeFile(indexPath, generateContent(exports), 'utf-8');
}

(function main() {
  console.log('🏗 Building index.ts...');
  new Promise((resolve) => {
    buildIndex();
  }).then(() => console.log('✅ Finished building package.'));
})();
