
// Problem 32
var current_users = ["Ahsan","Bilal","Nasir","Khurram","Javed"];
var new_users = ["Ahmed","BILAL","Nasir","Kashif","Jojo"];
for(var i=0; i<new_users.length;i++){
    for(var j=0; j<current_users.length;j++){
        if(new_users[i].toLowerCase() === current_users[j].toLowerCase()){
            console.log(new_users[i]+ " You need to enter a new username");
        }
        
    }
 }
