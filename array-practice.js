// Array
var names = ["Aminul", "Emon", "Tamima", "Ema"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array length
var number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(number1.length); // return 10

// Search array element by indexof
var number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(number1[2]); // return 3

var number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Add an element to the array of the last positon
number2.push(11);
// Add an element to the array of the first positon
number2.unshift(0);
console.log(number2);

var number3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Remove an element to the array of the last position
number3.pop();
// Remove an element to the array of the first position
number3.shift();
console.log(number3);
