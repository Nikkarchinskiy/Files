

let userSelect = prompt("Будь-ласка виберіть камінь ножиці чи папір");
let arr = ["камінь","ножиці","папір"];

let item = arr[Math.floor(Math.random() * arr.length)];


if ((userSelect == "камінь" && item == "ножиці") || (userSelect == "ножиці" && item == "папір") || (userSelect == "папір" && item == "камінь")) {
    alert(`Ви перемогли!!! Тому що ви вибрали ${userSelect} а комп'ютер вибрав ${item}`)
} else if ((userSelect == "камінь" && item == "папір") || (userSelect == "ножиці" && item == "камінь") || (userSelect == "папір" && item == "ножиці")) {
    alert(`Ви програли!!! Тому що ви вибрали ${userSelect} а комп'ютер вибрав ${item}`)
} else if (userSelect === null || userSelect == "") {
    alert("Нажаль ви забули що за гра і програли");
} else {
    alert(`Нічия!!! Тому що ви вибрали ${userSelect} а комп'ютер вибрав ${item}`)
}