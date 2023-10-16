const chai = require('chai');
const Multiply = require('../javascript/multiply');

const myObj = new Multiply();

const { assert } = chai;

describe('Multilpy test', () => {
  // First Test
  it('It should multiply two arguments', () => {
    assert.strictEqual(myObj.multiply(1, 1), 1);
  });

  // Second Test
  it('It should multiply two arguments', () => {
    assert.strictEqual(myObj.multiply(2, 2), 4);
  });

  // Third Test
  it('It should multiply two arguments', () => {
    assert.strictEqual(myObj.multiply(3, 3), 9);
  });

  // Fourth Test
  it('It should multiply two arguments', () => {
    assert.strictEqual(myObj.multiply(4, 4), 16);
  });

  // Fifth Test
  it('It should multiply two arguments', () => {
    assert.strictEqual(myObj.multiply(23, 45), 23 * 45);
  });
});
