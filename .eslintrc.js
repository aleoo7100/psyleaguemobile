module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    "react-hooks/exhaustive-deps": "off",
    "react-hooks/rules-of-hooks": "error",
    "react/react-in-jsx-scope": "off",
  },
};
