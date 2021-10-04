let arr = [1,0,'', null, 'Hello'];


function checkBool(arr,callback) {
    let filtred = arr.filter(callback);
    return filtred;
} 

function checkFalsy (value){
    if (value != false && value != null) {
        return value;
    }
}


let result = checkBool(arr,checkFalsy);

console.log(result);


//version 2:
// function checkBool(arr) {
//     let filtred = arr.filter(function (value) {
//         if(value !== false && value !== null) {
//             return value;
//         }
//     });
//     return filtred;
// }


// let resultBool = checkBool(arr);

// console.log(resultBool);