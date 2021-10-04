

const sizes = {
    big : { price: 25, cal: 100, time: 15 },
    small : { price : 15, cal: 50, time: 7 },
    medium : { price : 15, cal: 50, time: 7 }
}


const stuffing = {
    cheese: { price : 6.5, cal: 45, time: 2 },
    beacon: { price : 10, cal: 70, time: 6 },
    tomato: { price : 12.1, cal: 4, time: 5 },
    chicken: { price : 9.3, cal: 30, time: 5.1 }
}

const sauces = {
    mustard : { price : 3, cal: 5, time: 1 },
    ketchup : { price : 4.2, cal: 20, time: 1.5 },
    bolongnese : { price : 7.5, cal: 50, time: 3 }
}


let pizza = {
    size: [],
    stuffing:[],
    sauces:[],
};


//check before adding
function checkExistionAdding(ingredient,additive) {
    let keys = Object.keys(additive);

    if (!keys.includes(ingredient)) {
        return true;
    }
}

//check values before removing
function checkExistionRemoving(additive,arrIngridients) {
    if(arrIngridients.includes(additive)) {
        let index = arrIngridients.indexOf(additive);
        arrIngridients.splice(index,1);
        return true;
    } 
    return false;
}

//add size of pizza
function addSizes(size) {
    if(checkExistionAdding(size,sizes)) {
        return `Sorry but this size doesn't exists`
    }

    for(let key in sizes) {
        if(key === size) {
            pizza.size.push(key);
        }
    }

    return `size of pizza succesfully added`
}

//add stuffing of pizza
function addAdditive(additive) {

    if (checkExistionAdding(additive,stuffing)) {
        return `Sorry but this stuff doesn't exists`;
    }

    for (let key in stuffing) {
        if (key === additive) {
            pizza.stuffing.push(key)
        }
    }

    return "additive succesfully added"
}


//add sauces of pizza
function addSauces(sauce) {
    
    if (checkExistionAdding(sauce,sauces)) {
        return `Sorry but this sauce doesn't exists`;
    }

    for (let key in sauces) {
        if (key === sauce) {
            pizza.sauces.push(key);
        }
    }
    return "sauce succesfully added"
}

//removing additive of pizza
function removeAdditive(additive) {
    return checkExistionRemoving(additive,pizza.stuffing) ? `Ingridient succesfully removed` : `Sorry but this ingridient doesn't exists in your pizza`
}
// removing additive of pizza
function removeSauce(sauce) {
    return checkExistionRemoving(sauce,pizza.sauces) ? `Sauce succesfully removed` : `Sorry but this sauce doesn't exists`
}

function removeSize(size) {
    return checkExistionRemoving(size,pizza.size) ? `Size succesfully removed` : `Sorry but this size doesn't exists`
}

function getSum(ingredients,arrIndridients) {
    let total = 0;

    for(let key in ingredients) {
        for(let value of arrIndridients) {
           if(key === value) {
             total+= ingredients[key].price
           }
        }
    }

    return total;
}

function getCallories(ingredients,arrIndridients) {
    let totalCallories = 0;

    for(let key in ingredients) {
        for(let value of arrIndridients) {
           if(key === value) {
                totalCallories += ingredients[key].cal;
           }
        }
    }

    return totalCallories;
}


function getTime(ingredients,arrIndridients) {
    let totalTime = 0;

    for(let key in ingredients) {
        for(let value of arrIndridients) {
           if(key === value) {
                totalTime += ingredients[key].time;
           }
        }
    }

    return totalTime;
}

function returnTotalPrice() {
    let total = 0;

    //return all price of sizes pizza
    total+=getSum(sizes,pizza.size);
    // return all price ingridients
    total += getSum(stuffing,pizza.stuffing);
    // return all price of sauces
    total += getSum(sauces,pizza.sauces);

    return total.toFixed(2);
}

function returnTotalCallories() {
    let totalCallories = 0;

    //get callories of pizza sizes
    totalCallories += getCallories(sizes,pizza.size);
    //get callories of pizza stuffing
    totalCallories += getCallories(stuffing,pizza.stuffing);
    //get callories of pizza sauces
    totalCallories += getCallories(sauces,pizza.sauces);

    return totalCallories;
}

function returnTotalTimes() {
    let totalTime = 0;

    //get cooked time of pizza sizes
    totalTime += getTime(sizes,pizza.size)
    //get cooked time of pizza stuffing
    totalTime += getTime(stuffing,pizza.stuffing)
    //get cooked time of pizza sauces
    totalTime += getTime(sauces,pizza.sauces)

    return totalTime;

}

function validatePizzas() {
    if(pizza.size.length >= 1 && pizza.stuffing.length >= 1 && pizza.sauces.length >= 1) {
        return true;
    }
    return false;
}

function returnTotalInfoPizza(totalPrice,totalCallories,totalTime) {
    if(validatePizzas()) {
        return `the price of pizza is ${totalPrice} ,and callories of pizza: ${totalCallories} , and time of cooking pizza: ${totalTime} min`;
    } else {
        return `Sorry but in your order each ingridients is more than 1`
    }
}

function changeSizePizza(newSize) {
    return pizza.size[0] = newSize;
}


//add to pizza

console.log(addSizes("big"))

console.log(addAdditive("cheese"));
console.log(addAdditive("tomato"));
console.log(addSauces("bolongnese"));
console.log(addSauces("ketchup"));

//remove from pizza
// console.log(removeAdditive("cheese"));
console.log(removeSauce("ketchup"))
// console.log(removeSize("big"))
// console.log(removeSauce("bolongnese"))
// console.log(returnTotalPrice())
// console.log(returnTotalCallories())
// console.log(returnTotalTimes())

changeSizePizza("medium");

console.log(returnTotalInfoPizza(returnTotalPrice(),returnTotalCallories(),returnTotalTimes()))
console.log(pizza)
