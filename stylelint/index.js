module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order',
    'stylelint-config-prettier'
  ],
  plugins: ['stylelint-order', 'stylelint-scss', 'stylelint-config-rational-order/plugin'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['layer']
      }
    ],
    'order/properties-order': [],
    'plugin/rational-order': [true],
    'selector-class-pattern': null
  }
};
