//Anonymous
const sayHi = function() {
    return "Hi" 
}

console.log(sayHi());
//Converted to Arrow
const sayHello = () => {
    return "Hello"
}

console.log(sayHello());
//with Parameters
const sayHiAgain = (name) => {
    return `Hello ${name}`
}

console.log(sayHiAgain("Josh"));