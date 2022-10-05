




// Problem 44
function itemsInSandwich(...items){
    console.log("The items in your ordered Sandwich:");
    
    for(let i of items){
        console.log(i);
    }

}
itemsInSandwich("egg","sauce","onion");
itemsInSandwich("egg","sauce","onion","potato");
itemsInSandwich("egg","sauce","onion","potato","pickle");

