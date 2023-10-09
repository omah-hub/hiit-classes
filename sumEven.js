//Write a function that takes two numbers as inputs and 
//returns the sum of all the even numbers between them. 
//Use a loop and conditional statements to accomplish this task.

function sumEvenNumbers(num1, num2) {
    let sum = 0;


    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    }

    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    }
    
    for (let i = num1; i<= num2; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
const result =sumEvenNumbers(10, 1);
console.log("sum of even numbers is:", result);
