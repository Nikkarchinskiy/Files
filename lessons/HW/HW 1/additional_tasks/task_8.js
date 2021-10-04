
let countOfMinutes = prompt("Please enter the counts of minutes");


let countHours = countOfMinutes / 60;

let countMinutes = countOfMinutes % 60;

console.log(`${Math.floor(countHours)}:${Math.floor(countMinutes)}`);