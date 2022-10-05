// Problem 17
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
console.log("Hey guys I have found a bigger dinner table so, I am inviting three more friends");
guests.unshift("Waqar");
guests.splice(2,0,"Zubair");
guests.push("Kamran");
console.log("Dear "+guests[0]+"! you are invited on dinner tonight at my place");
console.log("Dear "+guests[1]+"! you are invited on dinner tonight at my place");
console.log("Dear "+guests[2]+"! you are invited on dinner tonight at my place");
console.log("Dear "+guests[3]+"! you are invited on dinner tonight at my place");
console.log("Dear "+guests[4]+"! you are invited on dinner tonight at my place");
console.log("Dear "+guests[5]+"! you are invited on dinner tonight at my place");
console.log("I am sorry to inform all of you that new Dinner Table won't come in time. So I will have space for two persons only")
console.log("Dear "+guests.pop()+" Sorry to inform that you are not invited today due to certain reasons");
console.log("Dear "+guests.pop()+" Sorry to inform that you are not invited today due to certain reasons");
console.log("Dear "+guests.pop()+" Sorry to inform that you are not invited today due to certain reasons");
console.log("Dear "+guests.pop()+" Sorry to inform that you are not invited today due to certain reasons");
console.log(guests);
console.log(guests[0]+", You are still invited today")
console.log(guests[1]+", You are still invited today")
guests.pop();
guests.pop();
console.log(guests);
