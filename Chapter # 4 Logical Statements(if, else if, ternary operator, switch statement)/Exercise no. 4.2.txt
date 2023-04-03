
// Practice exercise 4.2

// 1. Create a prompt to ask the user's age.

let age = prompt("Enter you age.");

// 2. Convert the reponse from the prompt to a number.

age = Number(age);

/* 3. Declare a message variable that you will use to hold
 console message for the user.
 */

 let message;

 /* 4. If the input age is equal to or greater than 21, set the
 message variable to fonfirm entry to a venue and the ability to 
 purchase alchol.
*/

if (age >=21){
    message = "You can enter the venue and also can purchase alcohol."

}

/* 5. If the input age is equal to ro greater than 19, set the 
message variable to confirm entry to the venue but deny the 
purchase of alcohol.
*/

else if (age >=19 && age <21 ){
    message = "You can enter the venue but can't but alcohol."
}

/* 6. Provide a default else statement to set the message variable
to deny entry if none are true.
*/

else {
    message = "Sorry! You can't enter the venue."

}

//7. Output the response message variable to the console.
console.log(message);


