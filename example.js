'use strict';

const { requireGql } = require('./');

const Book = requireGql('./schema/Book');
const Query = requireGql('./schema/Query.gql');

console.log('Book:', Book);
console.log('Query:', Query);
