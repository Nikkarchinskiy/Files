

let numBologna = prompt("please enter the number in the Bologna format");

if (numBologna <= 20 && numBologna >= 0) {
    console.log("F");
} else if (numBologna > 20 && numBologna <= 44) {
    console.log("E");
} else if (numBologna >= 45 && numBologna <= 59) {
    console.log("D");
} else if (numBologna >= 60 && numBologna <= 74) {
    console.log("C");
} else if (numBologna >= 75 && numBologna <= 88) {
    console.log("B");
} else  if (numBologna >= 89 && numBologna <= 100) {
    console.log("A");
}