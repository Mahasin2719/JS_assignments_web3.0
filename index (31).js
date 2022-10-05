// Problem 31


var users = ["admin","user1","user2","user3","user4"];

if(users.length > 0){
for (var i=0; i<users.length ;i++){
    
    
    if(users[i]== "admin"){
        console.log(" Hello admin, would you like to see a status report?");
    }
    else{
        console.log("Welcome Thank you for logging in")
    }

}
}
else{
    console.log("We need to add some users");
}



