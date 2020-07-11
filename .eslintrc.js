module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["prettier"],
  rules: {
    "no-console": 0,
    "prettier/prettier": ["error", { semi: false, printWidth: 100 }],
    "comma-dangle": 0
  }
}
