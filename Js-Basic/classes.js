// static => anything which is created belong to class itself and 
// we don't need to use this to access it 

class avinash {
    constructor(age, year){
        this.age = age;
        this.year = year;
    }

    displayage(){
        console.log(`Year is: ${this.age}`);
        console.log(`age is: ${age}`);
    }
}

const person1 = new avinash(21, 2025);
person1.displayage();