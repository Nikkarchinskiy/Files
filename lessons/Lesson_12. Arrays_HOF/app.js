let num = [10, 20, 30, 40, 50];

let totalSum = num.reduce((acc, elem, index, arr) => {
    console.log(`${acc}: ${index}`);
}, 10);