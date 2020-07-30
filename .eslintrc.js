module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
  ],
  ignorePatterns: ['react-app-env.d.ts','lambda/'],
  rules: {
    "func-names": "off",
    "no-var-requires": "off",
    "no-shadow": "off",
    "class-methods-use-this": "off",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/jsx-props-no-spreading": "off",
    "no-console": "off",
    "no-plusplus": "off",
    "react/jsx-filename-extension":"off",
    "import/extensions":"off",
    "import/no-unresolved":"off",
    "import/prefer-default-export":"off",
  },
};
