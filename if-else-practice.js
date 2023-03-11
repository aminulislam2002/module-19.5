// If Else statement
var names = "Aminul";
if (names == "Emon") {
  console.log("This is Emon");
} else if (names == "Islam") {
  console.log("This is Islam");
} else {
  console.log("This is Aminul");
}

// Multiple if else statement
var num1 = 200;
var num2 = 30;
if (num1 == 20 && num2 == 30) {
  console.log("This is 20");
} else if (num1 == 100 || num2 == 200) {
  console.log("This is 100");
} else {
  console.log("Wrong!");
}
var num5 = 100;
if (num5 > 100) {
  console.log("This is bigger than 100");
} else if (num5 < 100) {
  console.log("This is smaller than 100");
} else {
  console.log("This is equal 100");
}

// search bigest number using if, if else

var numA = 100;
var numB = 200;
var numC = 300;

if (numA > numB && numA > numC) {
  console.log("The higest number is A");
} else if (numB > numC) {
  console.log("The higest number is B");
} else {
  console.log("The higest number is C");
}

// search string by a number

var number = "30";

if (number == 30) {
  if (typeof number == "string") {
    console.log("This is 30. And it is  a string number ");
  } else {
    console.log("This is 30. But is not a string number ");
  }
} else {
  console.log("Wrong!");
}

// number odd or even search by if/ else if

var oddEven = 100;
if (oddEven % 2 == 1) {
  console.log("This is odds number");
} else {
  console.log("This is evens number");
}

// grade solving
// 0-32=F
// 33-49=D
// 50-59=C
// 60-69=B
// 70-79=A
// 80-89=A+
// 90-100=Golden

var result = 33;

if (result > 100) {
  console.log("This is so very much!");
} else if (result <= 100 && result > 0) {
  if (result >= 0 && result < 33) {
    console.log("F");
  } else if (result >= 33 && result < 50) {
    console.log("D");
  } else if (result >= 50 && result < 60) {
    console.log("C");
  } else if (result >= 60 && result < 70) {
    console.log("B");
  } else if (result >= 70 && result < 80) {
    console.log("A");
  } else if (result >= 80 && result < 90) {
    console.log("A+");
  } else {
    console.log("Congratulations! You have got Golden A+!")
  }
} else {
  console.log("This is very poor!");
}

