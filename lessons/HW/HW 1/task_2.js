// Задание 1
// Объяви две переменные хранящие название и цену товара: name и price Присвой переменным следующие характеристики товара (сразу при 
// объявлении) название: Генератор защитного поля цена: 1000 Используя шаблонную строку выведи в консоль информацию о товаре, получится: 
// 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'. Присвой товару новую цену - 2000 Используя шаблонную строку выведи в 
// консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.


const total = 100;
const ordered = 50;

//version 1:
ordered < total ? console.log("Заказ оформлен, с вами свяжется менеджер") : console.log("На складе недостаточно твоаров!");

//version 2:
// if (ordered < total) {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//     console.log("На складе недостаточно твоаров!");
// }
