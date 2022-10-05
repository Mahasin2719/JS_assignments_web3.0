// Problem 38
function describe_city(city, country="Pakistan"){
    var city = city ;
    if(city == "Karachi" || city == "Lahore"){
        console.log(`${city} is in Pakistan.`)
    }

    else{
        console.log(`${city} is not in Pakistan.`)
    }
    
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York");
