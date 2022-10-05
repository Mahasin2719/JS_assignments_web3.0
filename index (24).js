// Problem 24
// Tests for equality and inequality with strings
let animal = "Tiger"
console.log(animal == "Tiger");

let score = "130"
console.log(score === 130);


// Tests using the lower case function
let teamName = "GLADIATORS"
console.log("gladiators" == teamName.toLowerCase());
console.log("GLADIATORS" == teamName.toLowerCase());


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(150 === 150);
console.log(150 < 100);
console.log(151 > 200);
console.log(150 <= 151);
console.log(150 >= 150);


// Tests using "and" and "or" operators
let age3 = 50
console.log("Is age3 OK ?")
console.log(age3>18 && age3<50);
console.log(age3>18 || age3<50);


// Test whether an item is in a array ---- //Test whether an item is not in a array
let results = [50,34,35,56]
let result = 50;
console.log(Array.isArray(results));
console.log(Array.isArray(result));

