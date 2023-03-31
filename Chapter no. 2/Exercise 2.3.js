

// Practice exercise 2.3
/* 
 Write some code to calculate the hypotenuse of a triangle using
 the Pythagorean theorem when given the values of the other two sides.
 The theorem specifies that the relation between the sides of a 
 right-angled triangle is (a**a)+(b**b) = c**c

*/



let a = Number(prompt("Enter 1st value."));
let b = Number(prompt("Enter 2nd value."));

let result = ((a**a)+(b**b))**0.5;

console.log(result);


