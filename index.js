'use strict';

const fs = require('fs');
const gql = require('graphql-tag');
const { resolve } = require('path');

const exists = (path) => {
  try {
    fs.accessSync(path);
    return true;
  } catch (e) {
    return false;
  }
}

const requireGql = (path) => {
  const pathWithGql = (/\.gql$/.test(path)) ? path : `${path}.gql`;
  const paths = [
    pathWithGql,
    resolve(module.parent.path, pathWithGql),
  ];

  const validPath = paths.find((p) => exists(p));

  if (!validPath) {
    throw new Error(`GQL file not found. Tried these paths: ${paths}`)
  }

  return gql(fs.readFileSync(validPath, 'utf8'));
}

module.exports = {
  requireGql
};
