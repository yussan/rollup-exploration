// minify on production
import uglify from "rollup-plugin-uglify-es";
// to use babel
import babel from "rollup-plugin-babel";
// resolve from node_modules
import resolve from "rollup-plugin-node-resolve";
// some module using commonjs of es6
import commonjs from "rollup-plugin-commonjs";
// replace process.env
import replace from "@rollup/plugin-replace";

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
  // externals
  // external: ["react"],
  // list of plugins
  plugins: [
    babel({
      exclude: "node_modules/**"
      // presets: ["@babel/env", "@babel/preset-react"]
    }),
    resolve(),
    commonjs(),
    replace({
      "process.env.NODE_ENV": process.env.NODE_ENV
    })
  ]
};

// production
if (process.env.NODE_ENV == "production") {
  // minify on production build
  config.plugins.push(terser());
  // iffe is : Immediately invoked function expression
  // config.output.format = "iffe";
}

module.exports = config;
