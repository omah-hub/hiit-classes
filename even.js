//Write a program that takes an array of integers and
//returns the sum of all the even numbers in the array. 
//Use a loop and conditional statements to accomplish this task.

function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;
}

const numbers =[2, 3, 4, 6, 7, 8, 9, 10];
const evenSum = sumEvenNumbers(numbers);
console.log("The sum of even numbers is:", evenSum);