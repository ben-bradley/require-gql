'use strict';

// require using a relative path

const { requireGql } = require('../');

const Book = requireGql('./Book');
const Query = requireGql('./Query.gql');

console.log('Book:', Book);
console.log('Query:', Query);
