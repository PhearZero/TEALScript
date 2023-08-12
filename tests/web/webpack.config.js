// Generated using webpack-cli https://github.com/webpack/webpack-cli

import path from 'path';
import * as url from 'url';
import Module from 'node:module';

const require = Module.createRequire(import.meta.url);
const dirname = url.fileURLToPath(new URL('.', import.meta.url));

const config = {
  entry: './tests/web/index.ts',
  output: {
    path: path.resolve(dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        // resolve: 'ts-jest-resolver',
        exclude: ['/node_modules/'],
      },
    ],
    noParse: [require.resolve('typescript/lib/typescript.js')],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    extensionAlias: { '.js': ['.ts', '.js'] },
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
    },
  },
};

const wpCofnig = () => {
  config.mode = 'development';

  return config;
};

export default wpCofnig;
