
// Practice exercise 3.2




// 1. Create an empty array to use as a shopping list.
let shopping_list = [];

// 2. Add Milk, Bread, and Apples to your list.
shopping_list.push("Milk", "Bread", "Apple");

// 3. Update "Bread" with Banana and Eggs.
shopping_list.splice(1,1,"Banana", "Eggs");


// 4. Remove the last item from the array and output in into the console.
shopping_list.pop();
console.log(shopping_list);

// 5. Sort the list alphabetically.
shopping_list.sort();


// 6. Find and output the index value of Milk.
let find = shopping_list.indexOf("Milk");

// 7. After Bananas, add Carrots and Lettce.
shopping_list.splice(1,0,"Carrots","Lettce");

// 8. Create a new list containing Juice and Pop.
let new_arr = ["Juice","Pop"];

// 9. Combine both lists, adding the new list twice to the end of the first list.
let arr1 = shopping_list.concat(new_arr,new_arr);

// 10. Get the last index value of Pop and output it to the console.
let a = arr1.pop();
console.log(a);

