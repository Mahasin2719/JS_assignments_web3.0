// Problem 15
var guests = ["Meer","Fahad","Zaid"];
console.log("Dear "+guests[0]+"! you are invited on dinner tonight at my place");
console.log("Dear "+guests[1]+"! you are invited on dinner tonight at my place");
console.log("Dear "+guests[2]+"! you are invited on dinner tonight at my place");
console.log("Ohhhh... I just heard from "+guests[1]+" that he won't be able to come today!");
guests.splice(1,1);
guests.push("Danish");
console.log("Dear "+guests[0]+"! you are invited on dinner tonight at my place");
console.log("Dear "+guests[1]+"! you are invited on dinner tonight at my place");
console.log("Dear "+guests[2]+"! you are invited on dinner tonight at my place");


