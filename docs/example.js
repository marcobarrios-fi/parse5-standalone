import { parse, serialize } from '../dist/parse5-8.0.0.dist.min.mjs';

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