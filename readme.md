# Require GQL

This simple module allows you to "`require`" GQL files in Node.js in much the same way as you would any other `.js` or `.json` file.

## Change Log

- v1.0.0 - Initial release
- v1.1.0
  - Allow specifying GQL path relative to requiring (parent) module
  - Allow for omitting `.gql` extension in path argument

## Example

### File structure

```
index.js
schema/
  Book.gql
  Query.gql
```

### `schema/Book.gql`

```graphql
# This "Book" type defines the queryable fields for every book in our data source.
type Book {
  title: String
  author: String
}
```

### `schema/Query.gql`

```
# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
  books: [Book]
}
```

### `index.js`

```js
'use strict';

const { requireGql } = require('require-gql');
const Book = requireGql('./schema/Book.gql');
const Query = requireGql('./schema/Query.gql');

console.log('Book:', Book);
console.log('Query:', Query);
/*
Book: {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      description: undefined,
      name: [Object],
      interfaces: [],
      directives: [],
      fields: [Array]
    }
  ],
  loc: { start: 0, end: 212 }
}
Query: {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      description: undefined,
      name: [Object],
      interfaces: [],
      directives: [],
      fields: [Array]
    }
  ],
  loc: { start: 0, end: 255 }
}
 */
```
