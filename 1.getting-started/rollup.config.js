// ref: https://rollupjs.org/guide/en/#command-line-reference
module.exports = {
  input: `src/index.js`,
  output: {
    file: `dist/bundle.js`,
    // common js
    format: "cjs"
  }
};
