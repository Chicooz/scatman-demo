const assert = require('assert');

// Example test
assert.strictEqual(1 + 1, 2, 'Basic arithmetic test failed');

// Main module test
function main() {
  return 'Hello, World!';
}
assert.strictEqual(main(), 'Hello, World!', 'Main module test failed');

const assert = require('assert');

// Example test
assert.strictEqual(1 + 1, 2, 'Basic arithmetic test failed');

console.log('All tests passed');