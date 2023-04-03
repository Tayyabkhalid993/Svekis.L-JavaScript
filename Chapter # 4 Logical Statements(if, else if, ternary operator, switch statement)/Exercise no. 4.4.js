
// Practice exercise 4.4 

/* 1. Start by setting a variable that gets a random value assigned
 to it. The value is assigned by generating a random number 0-5, for 
 possible results. You can increase this number as you add more results.
*/

let randomNumber = parseInt((Math.random()*5));
console.log(randomNumber);

let answer;

/* 2. Create a prompt that can get a string value input from a user that
you can repeat back in the final output.
*/

let question = prompt("Ask me anyting.");

/* 3. Create 6 responses using the switch statement, each assigned to
a different value from the random number generator.
*/



/*
 4. Create a variable to hold the end response, which should ba a sentence
printed for the user. You can assign different string values for each case, 
assigning new value depending on the results from the random vale.
*/



switch(randomNumber){
    case 0 : 
    answer = "It will work out."
    break;

    case 1 : 
    answer = "Maybe, maybe not."
    break;

    case 2 : 
    answer = "Probably not."
    break;

    case 3 : 
    answer = "Highly likely."
    break;

    case 4 : 
    answer = "This will not work."
    break;

    case 5 :
    answer = "I'm surem This will not work."
    default :
    answer = "I don't know about that."
}

/* 5. Output the user's original question, puls the randomly selected case 
response, to the console after the user enters their question.
*/

console.log("You asked me " + question + " I replied, " + answer);


