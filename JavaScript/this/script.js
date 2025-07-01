function talk() {
    return this
}

const me = {
    name: "Josh",
    talk
} 

console.log(me.name);
console.log(me.talk());