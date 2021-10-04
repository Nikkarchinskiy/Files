// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами 
// нижнего регистра, а к примеру 'кИтАЙ'.
// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить 
// [цена] кредитов'. Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.
// Ниже приведен список стран и стоимость доставки.
// Китай - 150 кредитов Чили - 250 кредитов Австралия - 165 кредитов Индия - 90 кредитов Ямайка - 130 кредитов


let countries = {
    "Китай": 150,
    "Чили":250,
    "Австралия":165,
    "Индия":90,
    "Ямайка":130
}

// version 1:
let destinationCountry= prompt("What is your destination country").toLowerCase();
switch (destinationCountry) {
    case "китай":
        console.log(`Доставка в ${Object.keys(countries)[0]} будет стоить ${countries.Китай} кредитов`)
        break;
    case "чили":
        console.log(`Доставка в ${Object.keys(countries)[1]} будет стоить ${countries.Чили} кредитов`)
        break;
    case "австралия":
        console.log(`Доставка в ${Object.keys(countries)[2]} будет стоить ${countries.Австралия} кредитов`)
        break;
    case "индия":
        console.log(`Доставка в ${Object.keys(countries)[3]} будет стоить ${countries.Индия} кредитов`)
        break;
    case "ямайка":
        console.log(`Доставка в ${Object.keys(countries)[4]} будет стоить ${countries.Ямайка} кредитов`)
        break;
    default: 
        alert("В вашей стране доставка не доступна");
}




//version 2:
//  try {
//     let destinationCountry= prompt("What is your destination country").toLowerCase();

//     switch (destinationCountry) {
//         case "китай":
//             console.log(`Доставка в ${Object.keys(countries)[0]} будет стоить ${countries.Китай} кредитов`)
//             break;
//         case "чили":
//             console.log(`Доставка в ${Object.keys(countries)[1]} будет стоить ${countries.Чили} кредитов`)
//             break;
//         case "австралия":
//             console.log(`Доставка в ${Object.keys(countries)[2]} будет стоить ${countries.Австралия} кредитов`)
//             break;
//         case "индия":
//             console.log(`Доставка в ${Object.keys(countries)[3]} будет стоить ${countries.Индия} кредитов`)
//             break;
//         case "ямайка":
//             console.log(`Доставка в ${Object.keys(countries)[4]} будет стоить ${countries.Ямайка} кредитов`)
//             break;  
//         default:
//             alert("В вашей стране доставка не доступна");          
//     }
//  } catch(err) {
//     console.log("you click on \"cancel\" please refresh the page and try again");
//  } 


   

//version 3:
    // try {
    //     let destinationCountry= prompt("What is your destination country");
    //     let count = 0;

    //     for (let key in countries) {
    //         if (key.toLowerCase() === destinationCountry.toLowerCase()) {
    //             console.log(`Доставка в ${key} будет стоить ${countries[key]} кредитов`);
    //         } else {
    //             count++;
    //         }

    //         count >=Object.keys(countries).length ?  alert("В вашей стране доставка не доступна") : null;
    //     }
    // } catch (err) {
    //     console.log("you click on \"cancel\" please refresh the page and try again");
    // }






