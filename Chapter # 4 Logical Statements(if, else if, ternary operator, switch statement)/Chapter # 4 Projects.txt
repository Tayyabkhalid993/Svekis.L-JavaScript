

//Chapter Projects 




//1. Evaluating a number game

/*
 Ask the user to enter a number and check whether it's greater
than, equal to or less than a dynamic number value in your code. 
Output the result to the user.
*/






let number = 100;
let input = Number(prompt("Enter any number."));

if (input>number){
    console.log("Given number is greater than dynamic number.");
}

else if (input<number){
    console.log("Given number is less than dynamic number.");
}

else if (input==number){
    console.log("Given number is equal to dynamic number.");
}















// 2. Rock Paper Scissors game



let arr = ["Rock", "Scissors", "Paper"];

let computer = parseInt(Math.random()*3);

let player = Number(prompt("Choose a number, among of these. '0,1,2'"));
console.log("player choice = ",arr[player]);

console.log("computer choice = ",arr[computer]);

if(computer== 0 && player == 1)  {
    console.log("Cmputer won.")
}
else if (computer == 0 && player == 2){
    console.log("Computer won.")
}

else if(computer == 1 && player == 0 ){
    console.log("Player won.")
}

else if(computer == 1 && player == 2 ){
    console.log("Computer won.")
}

else if(computer == 2 && player == 0 ){
    console.log("Player won.")
}

else if(computer == 2 && player == 1 ){
    console.log("Player won.")
}

else{
    console.log("Match draw.");
}



