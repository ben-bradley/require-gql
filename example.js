'use strict';

const { requireGql } = require('./');

const typeDefs = requireGql('./schema/type-def.gql');

console.log(typeDefs);
