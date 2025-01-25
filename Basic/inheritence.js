/* inheritence => allow a class to inherit the properties from an 
                  exisiting class (parent => child) helps in code reusability */

/* super => used to call the constructor to access properties 
            and method of parent class */


class Animal {

    constructor(){
    }
}

class Rabbit extends Animal{
    constructor(name, age, speed){
        super();
        this.name = name;
        this.age = age;
        this.speed = speed;
    }
}

class Fish extends Animal{
    constructor(name, age, speed){
        super();
        this.name = name;
        this.age = age;
        this.speed = speed;
    }
}

const rabbit = new Rabbit("Charlie" , 2, 0.5);
const fish = new Fish("Charla", 5, 3);

console.log(rabbit.speed)
console.log(fish.age);