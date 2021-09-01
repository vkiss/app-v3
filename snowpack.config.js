// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  root: "./src",
  mount: {
    /* ... */
  },
  alias: {
    "$": "./src/"
  },
  plugins: [
    [
      "@snowpack/plugin-sass", {
        compilerOptions: {
          style: "compressed"
        }
      },
    ],
    [
      "snowpack-plugin-raw-file-loader", {
        exts: [".txt", ".svg"]
      }
    ],
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    // htmlFragments: false,
    out: "./dist"
  },
  optimize: {
    bundle: true,
    minify: true,
    target: "es2015"
  }
};
