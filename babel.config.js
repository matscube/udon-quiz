module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "utils": "./src/utils",
        "const": "./src/const",

        "atoms": "./src/components/atoms",
        "molecules": "./src/components/molecules",
        "organisms": "./src/components/organisms",
        "pages": "./src/pages",
      }
    }]
  ]
}
