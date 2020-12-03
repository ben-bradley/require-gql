'use strict';

const fs = require('fs');
const gql = require('graphql-tag');

const requireGql = (path) => gql(fs.readFileSync(path, 'utf8'));

module.exports = {
  requireGql
};
