//test:
let arr = [1,2,3,23,5];
// let arr = [12,45,67,34];


//version 1:
function some(arr,checkValue,callback) {
    for (let el of arr) {
        if(callback(el,checkValue)) {
            return true;
        }
    }
    return false;
};

function greaterThen(value,checkValue) {
    return value > checkValue ? true : false;
}

function lessThen(value,checkValue) {
    return value < checkValue ? true : false
}

let resultGreater = some(arr,10,greaterThen);
console.log(resultGreater)

let resultLess = some(arr,10,lessThen);
console.log(resultLess);



//version 2:
// function some (arr,callback) {
//     let filtered = arr.filter(callback);
//     if (filtered.length >= 1) {
//         return true;
//     } else {
//        return false;
//     }
// }

// function greaterThen(value) { 
//     return value >= 10;
// }

// function lessThen(value) {
//     return value <= 10;
// }


// let resultGreater = some(arr,greaterThen);
// console.log(resultGreater);
// let resultLess = some(arr,lessThen);
// console.log(resultLess);


//version 3:
// function some(arr,checkValue) {
//     return {
//         greaterThen() {
//             for (let el of arr) {
//                 if (el > checkValue) {
//                     return true;
//                 }
//             }
//             return false;
//         },
//         lessThen() {
//             for (let el of arr) {
//                 if (el < checkValue) {
//                     return true;
//                 }
//                 return false;
//             }
//         }
//     }
// }


// const somefunc = some(arr,10);

// console.log(somefunc.greaterThen());
// console.log(somefunc.lessThen());

