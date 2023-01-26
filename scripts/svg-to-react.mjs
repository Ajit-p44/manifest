import camelCase from 'camelcase';
import fs from 'fs-extra';
import path from 'path';
import { optimize } from 'svgo';

const ROOT_DIR = process.cwd();
const SOURCE_DIR = path.join(ROOT_DIR, 'icons');
const OUT_DIR = path.join(ROOT_DIR, 'src');

async function getFiles() {
  const files = await fs.readdir(SOURCE_DIR);

  return files.filter((file) => /.+\.svg/gm.test(file));
}

function svgToReact(svg, name) {
  // Grab the children of the svg to plug into our react component.
  const [, children] = /<svg.*?>(.*)<\/svg>/gms.exec(svg);

  // Convert path attributes to react friendly props.
  const paths = children
    .replace(/"\/>/g, '" />')
    .replace(/fill-opacity=/g, 'fillOpacity=')
    .replace(/xlink:href=/g, 'xlinkHref=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/fill-rule=/g, 'fillRule=');

  return `// THIS IS AN AUTOGENERATED FILE. DO NOT MODIFY.
import { createIcon } from '@project44-manifest/react-icon';

export const ${name} = createIcon(<>${paths}</>);
  `;
}

async function handler() {
  const files = await getFiles();

  const componentNames = new Set();

  await Promise.all(
    files.map(async (file) => {
      const svgPath = path.join(SOURCE_DIR, file);
      const fileName = path.basename(file, '.svg');
      const componentName = camelCase(fileName, { pascalCase: true });

      const raw = await fs.readFile(svgPath, 'utf8');
      const result = await optimize(raw, {
        floatPrecision: 4,
        multipass: true,
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: ['path:(fill|stroke)', 'fill'],
            },
          },
        ],
      });

      await fs.writeFile(svgPath, result.data, 'utf-8');

      const component = await svgToReact(result.data, componentName);

      await fs.ensureDirSync(OUT_DIR);
      await fs.writeFile(path.join(OUT_DIR, `${componentName}.tsx`), component, 'utf-8');

      componentNames.add(componentName);
    }),
  );

  const indexFile = Array.from(componentNames).map((name) => `export * from './${name}';`);

  await fs.writeFile(path.join(OUT_DIR, 'index.ts'), indexFile.join('\n'), 'utf-8');
}

await handler();