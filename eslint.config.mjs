import antfu from '@antfu/eslint-config';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';

export default antfu(
  {
    typescript: true,
    react: true,
    jsx: true,
    stylistic: false
  },
  {
    name: 'kenort/my-rules',
    rules: {
      'antfu/curly': 'off',
      'antfu/if-newline': 'off',
      'antfu/top-level-function': 'off',
      'no-console': 'warn'
    }
  },
  {
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
  },
  {
    name: 'kenort/eslint-plugin-jsx-a11y',
    plugins: {
      'eslint-plugin-jsx-a11y': pluginJsxA11y
    },
    rules: {
      ...Object.entries(pluginJsxA11y.flatConfigs.recommended.rules).reduce((acc, [key, value]) => {
        acc[key.replace('jsx-a11y', 'eslint-plugin-jsx-a11y')] = value;
        return acc;
      }, {})
    }
  }
);
