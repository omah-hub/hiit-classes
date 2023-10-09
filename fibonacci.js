//Write a program that prints the first 100 Fibonacci numbers.
//Use a loop and conditional statements to accomplish this task.
function Fibonacci(n) {
    const fibonacciNumbers = [0, 1];
    
    for (let i = 2; i < n; i++) {
        const nextFibonacci = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
        fibonacciNumbers.push(nextFibonacci);
    }
    return fibonacciNumbers;
}

const n = 100;
const fibonacciNumbers = Fibonacci(n);

for (let i = 0; i < n; i++) {
    console.log(fibonacciNumbers[i]);
}