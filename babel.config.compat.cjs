module.exports = function configureBabel(api) {
  api.cache(true); // this tells babel to cache it's transformations, it's pretty good at checking file hashes and invalidating it's cache, but if you have problems with changes not being reflected you can set false here.

  const presets = [
    [
      "@babel/preset-env", // this plugin tells babel to transpile your code for a specific runtime environment, we'll use node
      {
        targets: {
          node: "12.13.0", // this means transpile everything that node 12.13 (the version you get in lambda with node12) doesn't support
        },
        modules: "cjs",
      },
    ],
  ];

  const plugins = [
    [
      "search-and-replace",
      {
        rules: [
          {
            search: "p-timeout",
            replace: "p-timeout-compat",
          },
        ],
      },
    ],
    [
      'babel-plugin-replace-import-extension',
      { extMapping: { '.js': '.cjs' } },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
