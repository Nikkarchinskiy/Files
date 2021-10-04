let obj = {}



//version 1:
function isObjectEmpty (obj) {
    let keys = Object.keys(obj);
    if (keys.length === 0) {
        return true
    } else {
        return false;
    }
}


//version 2:
// function isObjectEmpty (obj) {
//     for (let key in obj) {
//         return false;
//     } 
//     return true;
// }

console.log(isObjectEmpty(obj));