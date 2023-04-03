

// Chapter projects


// 1. Manipulating an array (Project no.1).


const theList = ['Laurence', 'Svekis', true, 35, null, undefined ];


theList.pop();
theList.shift();
theList.unshift("FIRST");
theList[3] = "hello World";
theList[2] = "MIDDLE";
theList.push("LAST");
console.log(theList);









// 2. Company product catalog (Project no.2).

// 1. Create an array to hold an inventory of store items.

let inventoryItems = [];



// 2. Create three items, each having the properties of names, model, cost and quality.

let item1 = {
    _name : "Tchno",
    model : 2023,
    cost : 30000,
    quality : "Good"
}



let item2 = {
    _name : "Infenix",
    model : 2024,
    cost : 40000,
    quality : "fair"
}



let item3 = {
    _name : "Iphone",
    model : 2025,
    cost : 50000,
    quality : "Excellent"
}


/* 3. Add all three objects to the main array using an array method, and 
then log the inventory array to the console.
*/




inventoryItems.push(item1, item2, item3);



/*
4. Access the quantity element of your third item, and log it to
console. Experiment by adding and accessing more elements within your
data structure.
*/




console.log(inventoryItems[2].quality);


