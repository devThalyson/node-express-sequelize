// eslint.config.mjs

import { Linter } from "eslint";

export default [
  {
    // Configurações do ambiente
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    // Extensões de regras
    extends: [
      "eslint:recommended",
      "airbnb-base" // Ou "standard" ou "google", dependendo da sua escolha
    ],
    // Opções do parser
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    // Regras personalizadas
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "single"],
      semi: ["error", "always"],
    },
  },
];