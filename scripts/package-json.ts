import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'url';

const dirname = fileURLToPath(new URL('.', import.meta.url));

const file = readFileSync(`${dirname}/../package.json`, 'utf8');

const {
  name, version, description, homepage, bugs,
} = JSON.parse(file.toString());

const pkg = JSON.stringify(
  {
    name,
    version,
    description,
    homepage,
    bugs,
    module: 'commonjs',
  },
  null,
  2,
);

writeFileSync(`${dirname}/../dist/cjs/package.json`, pkg);
