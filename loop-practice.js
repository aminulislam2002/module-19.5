// var names = ["Aminul", "Emon", "Tamima", "Ema"];
// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for loop
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// add jor sonkha to an array  from number arry
var temp = [];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i < number.length; i++) {
  var subNumber = number[i];
  if (subNumber % 2 == 0) {
    temp.push(subNumber);
  }
  console.log(subNumber);
}
console.log(temp);

// any naam by a loop from array
var names = ["Aminul", "Emon", "Tamima", "Ema"];
for (var j = 0; j < names.length; j++) {
  var namesElemnt = names[j];
  if (namesElemnt == "Tamima") {
    console.log("Tamima");
  }
}

// big Element from a Array

var names = ["Aminuls", "Emon", "Tamima", "Ema"];
var larg = 0;

for (var k = 0; k < names.length; k++) {
  if (names[k] > larg) {
    larg = names[k];
  }
}
console.log(larg);

var array = [333333, 4, 5, 21.15, 21, 9];
var largest = 0;

for (x = 0; x < array.length; x++) {
  if (array[x] > largest) {
    largest = array[x];
  }
}
console.log(largest);
