import tseslint from "typescript-eslint";
import eslintJS from "@eslint/js";
import globals from "globals";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginPromise from "eslint-plugin-promise";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: ["node_modules", "dist", "public", "**/*.d.ts", "next.config.ts"],
  },
  eslintJS.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat["jsx-runtime"],
  eslintPluginPromise.configs["flat/recommended"],
  eslintPluginImport.flatConfigs.recommended,
  eslintPluginImport.flatConfigs.react,
  eslintPluginImport.flatConfigs.typescript,
  eslintPluginJsxA11y.flatConfigs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.json"],
        sourceType: "module",
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        typescript: {
          project: true,
          alwaysTryTypes: true,
        },
      },
      "jsx-a11y": {
        polymorphicPropName: "as",
        components: {
          // CustomButton: 'button',
        },
        attributes: {
          for: ["htmlFor", "for"],
        },
      },
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      "no-empty": "warn",
      "prefer-const": "warn",
      "@typescript-eslint/array-type": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/consistent-indexed-object-style": "warn",
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/no-dynamic-delete": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-invalid-void-type": "warn",
      "@typescript-eslint/no-misused-promises": "warn",
      "@typescript-eslint/no-misused-spread": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/no-unnecessary-template-expression": "warn",
      "@typescript-eslint/no-unnecessary-type-arguments": "warn",
      "@typescript-eslint/no-unnecessary-type-constraint": "warn",
      "@typescript-eslint/no-unnecessary-type-parameters": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/prefer-optional-chain": "warn",
      "@typescript-eslint/prefer-reduce-type-parameter": "warn",
      "@typescript-eslint/prefer-regexp-exec": "warn",
      "@typescript-eslint/restrict-template-expressions": [
        "warn",
        {
          allowBoolean: true,
          allowNumber: true,
        },
      ],
      "@typescript-eslint/require-await": "warn",
      "@typescript-eslint/use-unknown-in-catch-callback-variable": "warn",
      "react/display-name": "warn",
      "react/prop-types": "off",
      "react-hooks/exhaustive-deps": "warn",
      "promise/always-return": "warn",
      "promise/catch-or-return": "warn",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/label-has-associated-control": [
        "warn",
        {
          controlComponents: ["ReactDatePicker", "DatePicker"],
          labelAttributes: ["label"],
          depth: 3,
        },
      ],
      "jsx-a11y/no-autofocus": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "warn",
      "jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",
      "jsx-a11y/no-static-element-interactions": "warn",
    },
  },
  eslintConfigPrettier,
);
