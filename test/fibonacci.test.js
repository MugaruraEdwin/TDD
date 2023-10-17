const chai = require('chai');
const Fibonacci = require('../javascript/fibonacci');

const myObj = new Fibonacci();

const { assert } = chai;

// Test first
describe('Fibonacci', () => {
  it('1st  Fibonacci value ', () => {
    assert.strictEqual(myObj.fibonacci(0), 0);
  });

  it('2nd  Fibonacci value ', () => {
    assert.strictEqual(myObj.fibonacci(1), 1);
  });

  it('3rd  Fibonacci value ', () => {
    assert.strictEqual(myObj.fibonacci(2), 1);
  });

  it('4th  Fibonacci value ', () => {
    assert.strictEqual(myObj.fibonacci(3), 2);
  });

  it('5th  Fibonacci value ', () => {
    assert.strictEqual(myObj.fibonacci(4), 3);
  });

  it('6th  Fibonacci value ', () => {
    assert.strictEqual(myObj.fibonacci(5), 5);
  });
});
