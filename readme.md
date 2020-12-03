# Require GQL

This simple module allows you to "`require`" GQL files in Node.js in much the same way as you would any other `.js` or `.json` file.

## Example

### File structure

```
index.js
schema/
  type-defs.gql
```

### `schema/type-defs.gql`

```graphql
# This "Book" type defines the queryable fields for every book in our data source.
type Book {
  title: String
  author: String
}

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
const typeDefs = requireGql('./schema/type-defs.gql');

console.log(typeDefs);
/*
{
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      description: undefined,
      name: [Object],
      interfaces: [],
      directives: [],
      fields: [Array]
    },
    {
      kind: 'ObjectTypeDefinition',
      description: undefined,
      name: [Object],
      interfaces: [],
      directives: [],
      fields: [Array]
    }
  ],
  loc: { start: 0, end: 468 }
}
 */
```
