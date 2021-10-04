

let temperatureFormat = prompt("Пожалуйста выберите в какой формат вы хотите перевести температуру, введите C если в Цельсии и F если в Фаренгейты");

if (temperatureFormat.toUpperCase() == "C") {

   let tempInFarengate = prompt("Введите температуру в Фаренгейтах");
   let resultCelsium = (tempInFarengate - 32)/1.8;
   console.log(`${resultCelsium.toFixed(2)} ℃`);

} else if (temperatureFormat.toUpperCase() == "F") {

    let tempInCelsium = prompt("Введите температуру в Цельсиях");
    let resultFarengate = (tempInCelsium * 1.8) + 32;

    console.log(`${resultFarengate.toFixed(2)} ℉`)
}
