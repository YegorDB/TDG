import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url));


export default {
  mode: 'production',
  entry: './src/browser.js',
  output: {
    filename: 'tdg.min.js',
    path: resolve(__dirname, 'lib'),
  },
};
