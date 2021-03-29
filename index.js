const fs = require('fs');
const gql = require('graphql-tag');
const { dirname, resolve } = require('path');

const getRequirer = () => {
  try {
    throw new Error('Generate call stack');
  } catch (err) {
    const requirer = err.stack
      .split(/\n/)[3]
      .replace(/^[^\(]+\(([^\:]+):.+/, '$1');

    return dirname(requirer);
  }
}

const pathExists = (path) => {
  try {
    fs.accessSync(path);
    return path;
  } catch (e) {
    return false;
  }
}

const requireGql = (path) => {
  const requirer = getRequirer();
  const pathWithGql = (/\.gql$/.test(path)) ? path : `${path}.gql`;
  const paths = [
    pathWithGql,
    resolve(requirer, pathWithGql)
  ];

  const validPath = paths.find((p) => pathExists(p));

  return gql(fs.readFileSync(validPath, 'utf8'));
}

module.exports = {
  requireGql
};
