
//randomize
let rand = Math.floor(Math.random() * (11-1) +1 );

//rand number
console.log(` if you need the check ${rand}`);

//question from user
let checkNum = prompt("Please guess the number");

//version 1:
    // if (checkNum == rand) {
    //    alert(`Вітаю ви вгадали число ${rand}`);
    // } else {
    //     alert(`Ви програли, компютер загадав ${rand}`);
    // }

//version 2:
    checkNum === rand ? alert(`Вітаю ви вгадали число ${rand}`) : alert(`Ви програли, компютер загадав ${rand}`);





