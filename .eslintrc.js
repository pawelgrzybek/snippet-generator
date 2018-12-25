// Apply best pratices by enabling eslint:recommended
// Never repeat rules that eslint:recommended sets as a default
// Explicitly add more rules categorized in categories taken from official docs

module.exports = {
  parser: 'babel-eslint',
  extends: 'eslint:recommended',

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      impliedStrict: true
    }
  },

  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jquery: true,
    mongo: true,
    applescript: true,
    serviceworker: true
  },

  plugins: [
    'react'
  ],

  rules: {
    // Possible Errors
    'no-console': 1,
    'no-template-curly-in-string': 2,

    // Best Practices
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'consistent-return': 2,
    curly: 2,
    'default-case': 2,
    'dot-notation': 2,
    eqeqeq: [
      2,
      'smart'
    ],
    'no-alert': 1,
    'no-caller': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-function': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-floating-decimal': 2,
    'no-global-assign': 2,
    'no-implied-eval': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-proto': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-void': 2,
    'no-with': 2,
    radix: 2,
    'wrap-iife': [
      2,
      'inside'
    ],
    yoda: [
      2,
      'never'
    ],

    // Strict Mode
    strict: 2,

    // Variables
    'init-declarations': [
      2,
      'always'
    ],
    'no-label-var': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-use-before-define': 2,

    // Stylistic Issues
    'array-bracket-spacing': [
      1,
      'never'
    ],
    'block-spacing': [
      2,
      'always'
    ],
    'brace-style': [
      2,
      'stroustrup',
      {
        allowSingleLine: true
      }
    ],
    camelcase: 2,
    'comma-dangle': [
      2,
      'only-multiline'
    ],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [
      2,
      'last'
    ],
    'computed-property-spacing': [
      2,
      'never'
    ],
    'eol-last': 2,
    'func-call-spacing': [
      2,
      'never'
    ],
    'func-names': [
      1,
      'always'
    ],
    indent: [
      2,
      2
    ],
    'jsx-quotes': [
      2,
      'prefer-double'
    ],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': 2,
    'line-comment-position': [
      2,
      {
        position: 'above'
      }
    ],
    'linebreak-style': [
      2,
      'unix'
    ],
    'lines-around-directive': [
      2,
      'always'
    ],
    'max-depth': 2,
    'new-parens': 2,
    'no-lonely-if': 2,
    'no-nested-ternary': 2,
    'no-tabs': 2,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 2,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [
      2,
      'always'
    ],
    'object-property-newline': 2,
    'one-var-declaration-per-line': [
      2,
      'always'
    ],
    'one-var': [
      2,
      'never'
    ],
    'operator-assignment': [
      2,
      'always'
    ],
    'quote-props': [
      2,
      'as-needed'
    ],
    quotes: [
      2,
      'single'
    ],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    semi: [
      2,
      'always'
    ],
    'space-before-blocks': 2,
    'space-before-function-paren': [
      2,
      'never'
    ],
    'space-in-parens': [
      2,
      'never'
    ],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': [
      2,
      'always'
    ],

    // ECMAScript 6
    'arrow-parens': [
      2,
      'as-needed'
    ],
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'generator-star-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'no-confusing-arrow': 2,
    'no-const-assign': 2,
    'no-duplicate-imports': 2,
    'no-restricted-imports': 2,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-destructuring': [
      2,
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      }
    ],
    'prefer-template': 2,
    'require-yield': 2,
    'template-curly-spacing': [
      2,
      'never'
    ],

    // React plugin specific rules
    'react/no-direct-mutation-state': 2,
    'react/no-multi-comp': 2,
    'react/no-string-refs': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': 2,
    'react/prefer-stateless-function': 2,
    'react/react-in-jsx-scope': 2,
    'react/prop-types': 2,
    'react/require-default-props': 2,
    'react/self-closing-comp': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-spacing': [
      2,
      {
        when: 'never',
      }
    ],
    'react/jsx-indent': [
      2,
      2
    ],
    'react/jsx-no-bind': [
      2,
      {
        'ignoreRefs': true,
        'allowArrowFunctions': true,
        'allowBind': false,
      }
    ],
    'react/jsx-key': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': [
      2,
    ],
    'react/jsx-tag-spacing': [
      2,
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never'
      }
    ],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 2,
  }
};
