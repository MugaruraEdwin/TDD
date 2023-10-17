class Factorial {
  factorial(n) {
    if (n === 0) {
      return 1;
    }
    if (n < 0) {
      return 'Undefined (Factorial is not defined for negative numbers)';
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

module.exports = Factorial;
