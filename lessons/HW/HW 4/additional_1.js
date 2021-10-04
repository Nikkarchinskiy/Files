

let arr = [1,2,3,4,5];
// let arr = [11,12,13,14,15];


function every(arr,checkValue,callback) {
    let count =0;
    for (let el of arr) {
       if (callback(el,checkValue)) {
           count++;
       } else {
           return false;
       }
    }
    
    if (count === arr.length) {
        return true;
    }
}


function greaterThen(value,checkValue) {
    return value > checkValue ? true: false;
}

function lessThen (value,checkValue) {
    return value < checkValue ? true : false;
}

// greater then
let resultGreater = every(arr,10,greaterThen);
console.log(resultGreater);

// less then
let resultLess = every(arr,10,lessThen);
console.log(resultLess);


//version 2:
// function every() {
//     let count =0;
//     return {
//         greaterThen(arr,checkValue) {
//             for (let el of arr) {
//                 if (el > checkValue) {
//                     count++;
//                 }else {
//                     break;
//                 }
//             }
//             return count === arr.length ? true : false;
//         },
//         lessThen(arr,checkValue) {
//             for (let el of arr) {
//                 if (el < checkValue) {
//                     count++;
//                 } else {
//                     break;
//                 }
//             }
//             return count === arr.length ? true : false;
//         }
//     }
// }

// const everyfunc = every();

// console.log(everyfunc.greaterThen(arr,10));

// console.log(everyfunc.lessThen(arr,10));






