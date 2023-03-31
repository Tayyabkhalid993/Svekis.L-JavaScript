

// Practice exercise 2.4

/*

Create variables for three numbers: a,b, and c. Update these variables with
the follwoing actions using the assignment operators:
1. Add b to a
2. divide a by c
3. Replace the value of c with the modulus of c and b
4. Print all three number to the console

*/



let a = 24;
let b = 6;
let c = 12;

// 1. Add to a 


a = a+b;

// 2. Divide a by c

 let result = a/c;

// 3. Replace the value of c with the modulus of c and b

c = c%b;


console.log("Addition of a and b = ",a);
console.log("Divide a by c = ", result);
console.log("Remainder c and b = ",c);


