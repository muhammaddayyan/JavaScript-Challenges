// Q-01

function myFunc(a,b){
  return a + b;
}

console.log(myFunc(1, 8))
//expected : 9
console.log(myFunc(8, 5))
//expected : 13
console.log(myFunc(3, 100))
//expected : 103

// a = 1, b = 8 : output: 9;
// a = 8, b = 5 : output: 13;
// a = 3, b = 100 : output: 103;

// data type: Q-01

// Q-02 

function myFunc(c, d){
  return c === d;
}

console.log(myFunc(2, 3))
//expected : false
console.log(myFunc(1, '1'))
//expected : false
console.log(myFunc('10', '10'))
//expected : true

// a = 2, b = 3 : output: false;
// a = 1, b = '1' : output: false;
// a = '10', b = '10' : output: true;

// data type: Q-02

// Q-03

function getType(value) {
  return typeof value;
}

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

// Q-04

function getCharacter(a, n){
  return a.charAt(n - 1);
}

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

//Q-05

function removeFirstCharacter(a) {
  return a.slice(3);
}

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

// Q-06



function getLastCharacter(b) {
  return b.slice(-3);
}

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

// Q-07


function FirstThreeCharacters(a) {
  return a.slice(0, 3);
}
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

// Q-08

function findThePosition(pos) {
  return pos.indexOf("is");
}

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


// Q-09

function FirstHalf(a) {
  return a.slice(0, Math.ceil(a.length / 2));
}

console.log(FirstHalf("hello")); 
console.log(FirstHalf("Mississippi")); 
console.log(FirstHalf("History begins here")); 
console.log(FirstHalf("This is a test")); 

// expected output: "hel"
// expected output: "Missis"
// expected output: "History be"
// expected output: "This is"

// data type: Q-09


// Q-10

function lastNThree(a) {
  return a.slice(0, -3);
}

console.log(lastNThree("hello"));
console.log(lastNThree("Mississippi"));
console.log(lastNThree("History begins here"));
console.log(lastNThree("This is a test"));

// expected output: "hel"
// expected output: "Mississi"
// expected output: "History begins h"
// expected output: "This is a t"

// data type: Q-10


// Q-11

