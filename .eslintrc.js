/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');

module.exports = {
  extends: ['@cleartax'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /** We're using Typescript for main type-checking. Run-time checks can be added as required. */
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
    // /** We need to make this a warning as a lot of the keys from gst-backend are in snake case */
    // same rule from the root has no effect in hive so adding it here as well
    'react/jsx-props-no-spreading': 'off',
    /** https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md#options */
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.{ts,tsx}', '**/*/test-helpers/*.{ts,tsx}', '**/*/jest.setup.ts'],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          /* Required for CTGrid nested row data */
          '__children',

          /** Required for mocking GraphQL responses in tests
           * @see https://graphql.org/learn/queries/#meta-fields
           */
          '__typename',
        ],
      },
    ],
    'class-methods-use-this': ['error', { exceptMethods: ['render', 'componentDidCatch'] }],
  },
  settings: {
    'react': {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        directory: resolve(__dirname, 'tsconfig.json'),
      },
    },
  },
};
