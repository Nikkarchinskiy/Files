

//version 1:
let num_1 = prompt("enter first num");
let num_2 = prompt("enter second num");
let num_3 = prompt("enter third2 num");

let arr = [];
arr.push(num_1,num_2,num_3);

let max_num = Math.max.apply(null,arr);
console.log(max_num);





//version 2:
// let numbers = prompt("please enter the number with whitespaces");

// console.log(numbers.split(" "));

// let arr = numbers.split(" ");

// let result = Math.max.apply(null,arr);

// console.log(result);