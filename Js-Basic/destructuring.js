/*Destructuring :- extract values from arrays and objects and then assign them to variables in a convineint way
                   [] => to perform array destructuring
                   {} => to perfoem object destructuring  */


// Swap values
let a = 1, b = 2;
[a, b] = [b, a];
console.log(b);

const colours = ["red", "blue", "green","yellow"];
[colours[0], colours[3]] = [colours[4], colours[0]];


const [first, second, third, ...extracolours] = colours;
console.log(first);
console.log(extracolours);