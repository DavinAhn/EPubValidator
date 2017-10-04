module.exports = {
  "extends": "@ridi",
  "rules": {
    "global-require": 0,
    "import/extensions": [0, 'always', {}],
    "import/no-extraneous-dependencies": 0,
    "max-len": [1, 300],
    "no-unused-vars": 0,
    "react/forbid-prop-types": 0
  },
  "env": {
    "browser": true,
    "node": true
  }
};