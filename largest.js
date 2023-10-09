//Write a program that takes an array of integers and 
//returns the largest number in the array. 
//Use a loop and conditional statements to accomplish this task.
function largestNumber(Array) {
    if (Array.length === 0) {
        return null;
    }
    let largest = Array[0]
    
    for (let i = 1; i < Array.length; i++) {
        if (Array[i] > largest) {
            largest = Array[i];
        }
    } 
    return largest;
}

const numbers = [12, 3, 7, 17, 9];
const largest = largestNumber(numbers);
console.log("The largest number is:", largest);