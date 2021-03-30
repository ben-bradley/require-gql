const fs = require('fs');
const gql = require('graphql-tag');
const { dirname, resolve } = require('path');

const getRequirer = (fn) => {
  const limit = Error.stackTraceLimit;
  const handler = Error.prepareStackTrace;

  Error.stackTraceLimit = Infinity;
  Error.prepareStackTrace = (error, stack) => stack;

  const error = {};

  Error.captureStackTrace(error, fn);

  Error.stackTraceLimit = limit;
  Error.prepareStackTrace = handler;

  const stack = error.stack
    .split(/\n/)
    .reduce((paths, line) => {
      if (!/^\s+at/.test(line))
        return paths;

      const path = line.replace(/^ +at.+[^(]+\(([^:]+):.+/, '$1');

      paths.push(path);

      return paths;
    }, []);

  return stack[0];
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
  const requirer = getRequirer(requireGql);
  const pathWithGql = (/\.gql$/.test(path)) ? path : `${path}.gql`;
  const paths = [
    pathWithGql,
    resolve(dirname(requirer), pathWithGql)
  ];

  const validPath = paths.find((p) => pathExists(p));

  return gql(fs.readFileSync(validPath, 'utf8'));
}

module.exports = {
  requireGql
};
