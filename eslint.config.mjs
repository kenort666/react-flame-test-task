import antfu from '@antfu/eslint-config';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';

export default antfu({
  typescript: true,
  react: true,
  jsx: true,
  stylistic: true
}, {
  name: 'kenort/my-rules',
  rules: {
    'antfu/curly': 'off',
    'antfu/if-newline': 'off',
    'antfu/top-level-function': 'off',
    'no-console': 'warn'
  }
}, {
  name: 'kenort/eslint-plugin-react',
  plugins: {
    'eslint-plugin-react': pluginReact
  },
  rules: {
    ...Object.entries(pluginReact.configs.recommended.rules).reduce((acc, [key, value]) => {
      acc[key.replace('react', 'eslint-plugin-react')] = value;
      return acc;
    }, {}),
    'eslint-plugin-react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function'],
        unnamedComponents: 'arrow-function'
      }
    ],
    'eslint-plugin-react/prop-types': 'off',
    'eslint-plugin-react/react-in-jsx-scope': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}, {
  name: 'kenort/eslint-plugin-jsx-a11y',
  plugins: {
    'eslint-plugin-jsx-a11y': pluginJsxA11y
  },
  rules: {
    ...Object.entries(pluginJsxA11y.flatConfigs.recommended.rules).reduce(
      (acc, [key, value]) => {
        acc[key.replace('jsx-a11y', 'eslint-plugin-jsx-a11y')] = value;
        return acc;
      },
      {}
    )
  }
}, {
  name: 'kenort/formatter',
  rules: {
    'style/arrow-parens': ['error', 'always'],
    'style/brace-style': 'off',
    'style/comma-dangle': ['error', 'never'],
    'style/indent': ['error', 2, { SwitchCase: 1 }],
    'style/jsx-curly-newline': 'off',
    'style/jsx-one-expression-per-line': 'off',
    'style/jsx-quotes': ['error', 'prefer-single'],
    'style/linebreak-style': ['error', 'unix'],
    'style/max-len': [
      'error',
      100,
      2,
      { ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true }
    ],
    'style/member-delimiter-style': 'off',
    'style/multiline-ternary': 'off',
    'style/no-tabs': 'error',
    'style/operator-linebreak': 'off',
    'style/quote-props': 'off',
    'style/quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'style/semi': ['error', 'always']
  }
});
