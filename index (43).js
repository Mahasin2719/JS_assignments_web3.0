// Problem 43

var magicians = ["Magician-1","Magician-2","Magician-3","Magician-4","Magician-5","Magician-6"];
function make_great(array){
    var arr = array.slice();
    for(var i=0;i<arr.length;i++){
    arr[i] = "The Great " + arr[i];
    }
    return arr;
}
var greatMagicians = make_great(magicians);

console.log(magicians)
console.log(greatMagicians)
