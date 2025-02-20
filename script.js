// Q-01 Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result

function myFunc(a,b){
  return a + b;
};

console.log(myFunc(1, 8));
//expected : 9
console.log(myFunc(8, 5));
//expected : 13
console.log(myFunc(3, 100));
//expected : 103

// a = 1, b = 8 : output: 9;
// a = 8, b = 5 : output: 13;
// a = 3, b = 100 : output: 103;

// data type: Q-01

// Q-02 Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type

function myFunc(c, d){
  return c === d;
};

console.log(myFunc(2, 3));
//expected : false
console.log(myFunc(1, '1'));
//expected : false
console.log(myFunc('10', '10'));
//expected : true

// a = 2, b = 3 : output: false;
// a = 1, b = '1' : output: false;
// a = '10', b = '10' : output: true;

// data type: Q-02

// Q-03 Write a function that takes a value as argument. Return the type of the value.

function getType(value) {
  return typeof value;
};

console.log(getType(42));    
//expected : "number"    
console.log(getType("Hello"));   
//expected : "string"   
console.log(getType(3.14));      
//expected : "number"    
console.log(getType(true));      
//expected : "boolean"    
console.log(getType(null));      
//expected : "object"    
console.log(getType(undefined)); 
//expected : "undefined"    

// expected output: "number"
// expected output: "string"
// expected output: "number"
// expected output: "boolean"
// expected output: "object"
// expected output: "undefined" 

// data type: Q-03

// Q-04 Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

function getCharacter(a, n){
  return a.charAt(n - 1);
};

console.log(getCharacter("hello", 2));
console.log(getCharacter("hey", 1));
console.log(getCharacter("world", 3));
console.log(getCharacter("helloworld", 4));
console.log(getCharacter("javascript", 5));

// c "e"
// expected output: "h"
// expected output: "r"
// expected output: "l"
// expected output: "s"

// data type: Q-04

//Q-05 Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

function removeFirstCharacter(a) {
  return a.slice(3);
};

console.log(removeFirstCharacter("hello"));
console.log(removeFirstCharacter("Dayyan"));
console.log(removeFirstCharacter("Nabeel"));
console.log(removeFirstCharacter("Arslan"));
console.log(removeFirstCharacter("Hammad"));

// expected output: "lo"
// expected output: "yan"
// expected output: "eel"
// expected output: "lan"
// expected output: "mad"

// data type: Q-05

// Q-06 Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result

function getLastCharacter(b) {
  return b.slice(-3);
};

console.log(getLastCharacter("hello"));
console.log(getLastCharacter("Dayyan"));
console.log(getLastCharacter("Nabeel"));
console.log(getLastCharacter("Arslan"));
console.log(getLastCharacter("Hammad"));

// expected output: "llo"
// expected output: "yan"
// expected output: "eel"
// expected output: "lan"
// expected output: "mad"

// data type: Q-06

// Q-07 Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result


function FirstThreeCharacters(a) {
  return a.slice(0, 3);
};

console.log(FirstThreeCharacters("hello"));
console.log(FirstThreeCharacters("Dayyan"));
console.log(FirstThreeCharacters("Nabeel"));
console.log(FirstThreeCharacters("Hammad"));
console.log(FirstThreeCharacters("Arslan"));

// expected output: "hel"
// expected output: "Day"
// expected output: "Nab"
// expected output: "Ham"
// expected output: "Ars"

// data type: Q-07

// Q-08 Write a function that takes a string as an argument. The string contains the substring 'is'. Return the index of 'is'.

function findThePosition(pos) {
  return pos.indexOf("is");
};

console.log(findThePosition("This is a test")); 
console.log(findThePosition("Javascript is fun")); 
console.log(findThePosition("History begins here")); 
console.log(findThePosition("island")); 
console.log(findThePosition("Mississippi")); 

// expected output: "2"
// expected output: "11"
// expected output: "1"
// expected output: "0"
// expected output: "1"

// data type: Q-08


// Q-09 Write a function that takes a string (a) as argument. Extract the first half of a. Return the result

function FirstHalf(a) {
  return a.slice(0, Math.ceil(a.length / 2));
};

console.log(FirstHalf("hello")); 
console.log(FirstHalf("Mississippi")); 
console.log(FirstHalf("History begins here")); 
console.log(FirstHalf("This is a test")); 

// expected output: "hel"
// expected output: "Missis"
// expected output: "History be"
// expected output: "This is"

// data type: Q-09


// Q-10 Write a function that takes a string (a) as an argument. Remove the last 3 characters of a. Return the result.

function lastNThree(a) {
  return a.slice(0, -3);
};

console.log(lastNThree("hello"));
console.log(lastNThree("Mississippi"));
console.log(lastNThree("History begins here"));
console.log(lastNThree("This is a test"));

// expected output: "hel"
// expected output: "Mississi"
// expected output: "History begins h"
// expected output: "This is a t"

// data type: Q-10


// Q-12 Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then subtract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Hint: mind the order.

function mathOpe(a,b,c,d,e,f){
  let sum = a + b;
  let sub = sum - c;
  let mul = sub * d;
  let divi = mul / e;
  let power = Math.pow(divi,f);

  return power;
};

let res = mathOpe(5,4,7,9,4,8);

console.log(res);

// expected output: "168151.25390625"


// data type: Q-12 

// Q-13 Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation

function twoString(a,b){
  return a.includes(b) ? b + a : a + b;
};

console.log(twoString("kese ho", "Hello"))
console.log(twoString("Hello", "kese ho"))


// expected output: "kese hoHello"
// expected output: "Hellokese ho"

// data type: Q-13

// Q-014 Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false

function even (num){
  return num % 2 === 0;
};

console.log(even(2));
console.log(even(3));
console.log(even(8));

// expected output: "True"
// expected output: "False"
// expected output: "True"

// data type: Q-14

// Q-016 Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.

function whole(a){
  return a % 1 === 0;
};

console.log(whole(10));
console.log(whole(1.8));
console.log(whole(8));
console.log(whole(10.2));

// expected output: "True"
// expected output: "False"
// expected output: "True"
// expected output: "False"

// data type: Q-16

// Q-17 Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value

function calculate(a, b){
  return a < b ? a / b : b * a;
};

console.log(calculate(4,5));
console.log(calculate(5,4));
console.log(calculate(9,8));
console.log(calculate(5,2));

// expected output: "0.8"
// expected output: "20"
// expected output: "72"
// expected output: "10"

