// import uglify from "rollup-plugin-uglify-es";
import { terser } from "rollup-plugin-terser";

// ref: https://rollupjs.org/guide/en/#command-line-reference
let config = {
  // input setup
  input: `src/index.js`,
  // output setup
  output: {
    file: `dist/bundle.js`,
    // common js
    format: "cjs",
    compact: true
  },
  // list of plugins
  plugins: []
};

// production
if (process.env.NODE_ENV == "production") {
  // minify on production build
  config.plugins.push(terser());
  // iffe is : Immediately invoked function expression
  // config.output.format = "iffe";
}

module.exports = config;
