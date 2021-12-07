module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "airbnb-typescript/base", "prettier"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [
    "node_modules/",
    "/.eslintrc.js",
    "/src/polyfills.ts",
    "/karma.conf.js",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "no-plusplus": "off",
  },
};
