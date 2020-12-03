module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "rules": {
    "array-bracket-spacing": [ "error", "always" ],
    "arrow-body-style": [ "error", "as-needed" ],
    "arrow-parens": [ "error", "always" ],
    "comma-dangle": [ "error", "never" ],
    "complexity": [ "warn", 10 ],
    "eol-last": [ "error", "always" ],
    "func-call-spacing": [ "error", "never" ],
    "indent": [ "error", 2 ],
    "key-spacing": "error",
    "max-depth": [ "error", 4 ],
    "max-len": [ "error", { "code": 100 } ],
    "max-nested-callbacks": [ "error", 3 ],
    "max-params": [ "error", 4 ],
    "no-trailing-spaces": "error",
    "prefer-const": "error",
    "quotes": [ "error", "double" ],
    "semi-style": ["error", "last" ],
    "space-before-blocks": "error",
    "space-before-function-paren": [ "error", { "asyncArrow": "always" } ]
  }
}
