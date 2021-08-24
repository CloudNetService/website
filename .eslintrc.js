module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    // Temporary disabled because eslint is currently not working with "@" imports (e.g. "@theme" by docusaurus) - other eslint import plugins did not fix this issue
    "import/no-unresolved": ["off", { extensions: [".tsx"] }],
    "react/jsx-filename-extension": ["warn", { extensions: [".ts", ".tsx"] }],
  },
  overrides: [
    {
      files: ["*.md", "*.mdx"],
      parser: "eslint-mdx",
      extends: "plugin:mdx/recommended",
    },
  ],
};
