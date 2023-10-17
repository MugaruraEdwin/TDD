const chai = require('chai');
const Factorial = require('../javascript/factorial');

const myObj = new Factorial();

const { assert } = chai;

describe('Factorial', () => {
  it('0!', () => {
    assert.strictEqual(myObj.factorial(0), 1);
  });

  it('1!', () => {
    assert.strictEqual(myObj.factorial(1), 1);
  });

  it('2!', () => {
    assert.strictEqual(myObj.factorial(2), 2);
  });

  it('3!', () => {
    assert.strictEqual(myObj.factorial(3), 6);
  });

  it('5!', () => {
    assert.strictEqual(myObj.factorial(5), 120);
  });

//   it('-1!', () => {
//     assert.strictEqual(myObj.factorial(-1), 6);
//   });
});
