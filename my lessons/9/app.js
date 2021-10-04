// arrow function

let getSum = (a, b) => {
    console.log(a + b);
};
getSum(5, 10);

(getSum(5.5, 6.5));

//==============================

// Callback

const fn = function (a) {
    (a);
}

fn(callback);

function callback() {
    console.log('Callback');
}

//==============================

// function sum(a, b) { return a + b };
let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let mult = (a, b) => a * b;
let div = (a, b) => a / b;

function calculator (a, b, callback) {
    return callback(a, b);
}

let result = calculator (10, 10, div)

console.log(result);