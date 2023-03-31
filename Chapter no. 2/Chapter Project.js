

/*
Chapter Project

Miles-to-kilometers converter

Create a variable that contains a value in miles, convert it to kilometers and log the value in kilometers.

*/





let miles = Number(prompt("Etner distance in miles."));

let kilometers = miles * 1.30934;

console.log("The distance of "+kilometers+" kms is equal to "+miles+"miles.");






// BMI calculator

/*
Set values for height in inches and weight in pounds, then convert the 
values to centimeters and kilos, outputting the results to the console:

Output the results. Then, calculate and log the BMI: this is equal to weight
(in kilos) divided by squared heihgt (in meters). Output the result to the console.

*/


let heihgt_inches = Number(prompt("Enter Heihgt in inches."));
let weight_pounds = Number(prompt("Enter weight in pounds."));
let height_cm = heihgt_inches*2.54;
let weight_kg = weight_pounds/2.2046;


console.log("Heihgt in centimeters = ",height_cm);
console.log("Weight in kg = ",weight_kg);

let heihgt=height_cm/100; 
let bmi = weight_kg/(heihgt**2);

console.log("BMI = ",bmi);



