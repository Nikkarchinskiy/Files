let mainBtn = document.querySelector('.js-main_btn');
let addBtn = document.querySelector('.js-add_btn');
let remuveBtn = document.querySelector('.js-remuve_btn');
// console.log(mainBtn);
// console.log(addBtn);
// console.log(remuveBtn);




//  remuveBtn.addEventListener('сlick', () => {
//      mainBtn.removeEventListener();
//  });



// function doOnClick(event) {
//     console.log("Click!!!");
//     document.body.style.backgroundColor = 'green';
// }

// addBtn.addEventListener('click', (event) => {
//     console.log(event);
// });

addBtn.addEventListener('click', () => {
    console.log("Обрабочик навешен");
    mainBtn.addEventListener('click', doOnClick);
});

remuveBtn.addEventListener('click', () => {
    console.log("Снять обработчик");
    mainBtn.removeEventListener('click', doOnClick);
})

function doOnClick () {
    console.log('Click!!!');
};
