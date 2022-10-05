


// Problem 45
function carInfo(manufacturer,model,...args){
    
    

    var carObject = {manufacturer: manufacturer, model:model, ...args}
    
    return carObject;

}
console.log(carInfo("Toyota", 2008, {color :'black'}, {twoDoor : "Yes"} , {EV: "No"}));