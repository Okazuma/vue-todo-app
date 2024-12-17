import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginPrettier from "eslint-plugin-prettier"; // Prettierプラグインのインポート
import configPrettier from "eslint-config-prettier"; // Prettierの設定を無効化するための設定

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    plugins: {
      prettier: pluginPrettier, // Prettierプラグインをオブジェクト形式で指定
    },
    rules: {
      "prettier/prettier": "error", // Prettierのルールを適用
      ...configPrettier.rules, // Prettierの設定を無効化するルールを適用
      "no-unused-vars": ["error", { args: "none" }], // 未使用変数のルール
    },
  },
];
