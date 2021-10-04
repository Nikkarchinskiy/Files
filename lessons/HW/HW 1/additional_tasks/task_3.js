
//version 1:
let num_a = prompt("please enter the first number");
let num_b = prompt("please enter the second number");
let operator = prompt("please enter the operator what you need");
// let result = 0;

num_a = Number(num_a);
num_b = Number(num_b);

if (operator == "*") {
    console.log(`Добуток чисел ${num_a} i ${num_b} = ${num_a * num_b}`);
} else if (operator == "-") {
    console.log(`Різниця чисел ${num_a} i ${num_b} = ${num_a - num_b}`);
} else if (operator == "+") {
    console.log(`Сума чисел ${num_a} i ${num_b} = ${num_a + num_b}`);
} else if (operator == "/") {
    console.log(`Ділення чисел ${num_a} i ${num_b} = ${num_a / num_b}`);
} else if (operator == "%") {
    console.log(`Частка чисел ${num_a} i ${num_b} = ${num_a % num_b}`);
}



//version 2:
// let operations = prompt("enter the number from whitespace");

// let arr = operations.split(" ");

// let result = 0;

// for (let i=0;i<arr.length;i++) {

//     if (arr[i]== '*') {
//         arr.splice(1,1);
//         console.log(arr);
//         result = arr[0] * arr[arr.length-1];
//     }
// }

// if (arr[1] == '*') {

//     result = arr[0]  * arr[arr.length-1];

// } else if (arr[1] == "/") {

//     result = arr[0] / arr[arr.length-1];

// } else if (arr[1] == "-") {

//     result = (arr[0] * 1) - (arr[arr.length-1] * 1);

// } else if (arr[1] == "+") {

//     result = (arr[0] * 1) + (arr[arr.length-1] * 1);

// } else if (arr[1] == "%") {
//     result = arr[0] % arr[arr.length-1];
// }

// console.log(`Результат операции ${arr[0]} ${arr[1]} ${arr[arr.length-1]} = ${result}`);