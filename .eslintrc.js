const base = require('@sas/nova-scripts/config/eslintrc-base');

base.rules['no-console'] = 'off';

module.exports = {
  ...base,
};
