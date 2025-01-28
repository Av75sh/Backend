/* Fundamentals of javascript
arrays and objects 
functions return 
async js coding
*/

// foreach map filter  find indexOf reduce callback()

var arr = [1,2,3, "hey", {}, true, function(){}, []];
var arr1 = [1,2,3,4];

// forEach()    => make changes in the smae array
arr1.forEach(function(val){
    console.log(val + "Hello");
})

// map() => return a new array
var avinash = arr1.map(function(val){
    return 13;
})
console.log(avinash);


// filter() => return a new array but with some changes 
var aviansh1 = arr1.filter(function(val){
    if(val > 2){
        return true;
    }
})
console.log(aviansh1);


// find()  => return the first element only
var aviansh2 = arr1.filter(function(val){
    if(val == 2){
        return val;
    }
})
console.log(aviansh2);



// timeout
setTimeout( () => console.log("Aviansh"), 3000);
const numbers = [1,2,3,4,5];
const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);