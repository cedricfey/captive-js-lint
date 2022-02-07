#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

fs.copyFileSync(require.resolve('captive-js-lint/init-config/.eslintrc.js'), './.eslintrc.js');
fs.copyFileSync(require.resolve('captive-js-lint/init-config/.prettierrc.js'), './.prettierrc.js');
fs.copyFileSync(
  require.resolve('captive-js-lint/init-config/.stylelintrc.js'),
  './.stylelintrc.js'
);
