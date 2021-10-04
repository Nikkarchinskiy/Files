// Задание 3
// Напиши скрипт имитирующий авторизацию администратора в панели управления.
// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль 
// через prompt: Если нажали Cancel, записать в message строку 'Отменено пользователем!' В протовном случае, если введен пароль который 
// совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!' В противном случае, то есть если ни одно 
// из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!' После всех проверок вывести в alert 
// значение переменной message. const ADMIN_PASSWORD = 'adminpass'; let message;

const ADMIN_PASSWORD = 'adminpass';

let message = prompt("Please enter your password","");


//version 1:
if (message === null) {
    message = "Отменено пользователем!";
} else if (message === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
} else {
    message = "Доступ запрещен, неверный пароль!";
}
console.log(message);


//version 2:
// (message === null) ? message = "Отменено пользователем!" : (message === ADMIN_PASSWORD) ? message = "Добро пожаловать!" : message = "Доступ запрещен, неверный пароль!";

// console.log(message);

