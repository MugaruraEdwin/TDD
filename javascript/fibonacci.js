// class Fibonacci{
//     fibonacci(num){
//         if (num === 0 ){
//             return 1;
//         }
//         else if (num === 1){
//             // let result = 0;
//             // for(let i = 0 ; i < num; i++ ){
//             //     result + = 1;
//             // }
//             return 1;
//         }
//         else if (num >= 2){
//             let result = 1;
//             for(let i = 1 ; i <= num; i++ ){
//                 result = result + i;
//             }
//             return result;
//         }
//     }
// }

// class Fibonacci {
//     fibonacci(num) {
//       if (num <= 1) {
//         return num;
//       } else {
//         return this.fibonacci(num - 1) + this.fibonacci(num - 2);
//       }
//     }
//   }

// const fibonacci = new Fibonacci();
// const nextFibonacciNumber = fibonacci.fibonacci(5);
//   // Print the next Fibonacci number
// console.log(nextFibonacciNumber);

// function nextFibonacci(n) {
//     return Math.round((n * Math.sqrt(5) + 0.5));
// }

// console.log(nextFibonacci(0));

// Mugarura Edwin Musumba + Nakamatte Winfred Claire

class Fibonacci {
  fibonacci(n) {
    const phi = (1 + Math.sqrt(5)) / 2;
    const result = Math.round((phi ** n - (1 - phi) ** n) / Math.sqrt(5));
    return result;
  }
}

module.exports = Fibonacci;
