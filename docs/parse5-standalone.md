# Parse5 Standalone ES6 Module

This repository provides [Parse5](https://parse5.js.org/) as a standalone ES6 module.

Parse5 is a fast HTML5 parser and serializer. Read the [Parse5 documentation](https://parse5.js.org/modules/parse5.html) for more information.

## Getting Started
Clone the repository and run `npm run build`.

## Files

`/dist/parse5-8.0.0.dist.mjs`

`dist/parse5-8.0.0.dist.min.mjs`

## Example

```javascript
import { parse, serialize } from 'parse5-standalone/dist/parse5-8.0.0.dist.min.mjs';

// Parse HTML document from a string
const document = parse('<!DOCTYPE html><html><head></head><body>Hello world!</body></html>');

// Convert Parse5 abstract syntax tree to JSON
console.log(JSON.stringify(document, function (key, value) {
  // Remove circular references
  if (key === 'parentNode' || key === 'prev' || key === 'next') {
    return undefined;
  }
  return value;
}, 2));

// Serialize the document
const html = serialize(document);

// Display the serialized HTML string
console.log(html);
```