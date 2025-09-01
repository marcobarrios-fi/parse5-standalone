import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'node_modules/parse5/dist/index.js',
  output: {
    file: 'dist/parse5-8.0.0.dist.mjs',
    format: 'es',
    sourcemap: false,
  },
  plugins: [
    resolve()
  ]
};