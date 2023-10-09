//Write a program that takes an array of integers 
//and returns a new array with only the even numbers. 
//Use a loop and conditional statements to accomplish this task.
function filterEvenNumbers(arr) {
    const evenNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers
}
    const numbers = [2, 3, 4, 5, 7, 9, 10];
    const evenNumbersArray = filterEvenNumbers(numbers);
    console.log("Even numbers in the array:", evenNumbersArray);
