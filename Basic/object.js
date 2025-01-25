// Object => a collection of related properties that represent real time world objects
// Method => functions used in an object



const Person1 = {
    name: "Avinash",
    age: 21,
    skills: "Web Developer",
    internship: function(){console.log("Available for work")}
};

console.log(Person1.name);
console.log(Person1.age);
console.log(Person1.skills);
console.log(Person1.internship());





// this don't work with arrow function
const myObject = {
    name: "Avinash",
    greet: function() { console.log(`Hello, my name is ${this.name}`)}
  };
  
  myObject.greet(); 
  


  //constructor => special method for defining properties and methods of an object
function dob(date, month, year){
    this.date = date,
    this.month = month,
    this.year = year
}

const dob1 = new dob(29, 7, 2004);
const dob2 = new dob(29, 7, 2004);

console.log(dob1);