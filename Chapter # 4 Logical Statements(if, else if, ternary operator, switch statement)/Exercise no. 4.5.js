
// Practice exercise 4.5

/* 1. Create a variable called prize and use a prompt to ask the user to 
set the value by selecting a number between 0 to 10.
*/

// 2. Convert the prompt response to a number data type.

let prize = parseInt(prompt("Enter any number between 0 and 10."))
 

/* 3. Create a variable to use for the output message containing the value 
"My Selection:" 
*/

let output = "My Selection";

/* 4. Using the switch statement, provide a response back regarding  a
 prize that is awarded depending on what number is selected.
 */

 /* 5. Use the switch break to add combined results for prizes.
 */

switch(prize){
        case 0 :
        output = "Gold";
        break;

        case 1 :
        output = "silver";
        break;

        case 2 :
        output = "coin";
        break;

        case 3 :
        output = "Gold Medal ";
        break;


        case 4 :
        output = "big Trophy";
        break;

        case 5 :
        output = "Small Trophy";
        break;


        case 6 :
        output = "Smalles Trophy";
        break;


        case 7 :
        output = "Mystery Box";
        break;

        case 8 :
        output = "Mystery Box";
        break;

        case 9 :
        output = "Mystery Box";
        break;

        case 10 :
        output = "Mystery Box";
        break;

        default :
        output = "I don't know about this prize."
        break;
}



/* 6. Output the message back to the user by concatenating your 
prize variable strings and output message string.
*/

console.log(output);


