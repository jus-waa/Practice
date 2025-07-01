class Person {
    walk() {
        return "Walking";
    }
}
const me = new Person();
console.log(me.walk());

class Bird extends Person{
    fly() {
        return  "Flying";
    }
}

const maya = new Bird(); 

console.log(maya.walk() + maya.fly());