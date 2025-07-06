let pizza;

//order pizza
function orderPizza(callback) {
    console.log("Order pizza!")
    setTimeout(() => {
        pizza = "Pizzaaaa...";
        callback(pizza);
    }, 7000);
}

//eat when ready
function pizzaReady(pizza) {
    setTimeout(() => {
        console.log("Pizza has been delivered.")
    }, 1000);
    setTimeout(() => {
        console.log(`Eat ${pizza}`);
    }, 1500);
}

//pizza takes 20mins so do other stuff
function doOtherStuff() {
    setTimeout(() => {
        console.log("Do other stuff first since pizza takes 20mins...");
    }, 1000);
    setTimeout(() => {
        console.log("Do dishes");
    }, 2000);
    setTimeout(() => {
        console.log("Do the laundry");
    }, 4000);
    setTimeout(() => {
        console.log("Watch TV");
    }, 6000);
}

orderPizza(pizzaReady);
doOtherStuff();