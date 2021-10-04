// REST-серви требует чтобы клиент делал запрос на добавлени, извлечение или измение даных. Запрос обычно состоит из:

// HTTP-метод -- Определяет какую операцию выполнить
// Заголовок -- Позволяет клиенту передавать информацию о запросе
// Путь -- Путь к ресурсу. Доступные пути описываются в документации бэкэнда
// Тело -- Доп блок запроса, содержащий данные

// Информационные 100 - 199
// Успешные 200 - 299
// Перенаправления 300 - 399
// Клиентские ошибки 400 - 499
// Серверные ошибки 500 - 599

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//Simple GET =======================================

    // let URI = 'https://jsonplaceholder.typicode.com/users';

    // fetch(URI)
    // .then(response => {
    //     console.log(response);
    //     if (response.status === 200) {
    //         return response.json();
    //     }
    // })
    // .then(users => console.log(users))
    // .catch(err => console.log(err));

    // ===============================================

    // let options = {
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // };

    // let URI = 'https://jsonplaceholder.typicode.com/todos';

    // fetch(URI, options)
    // .then(res => {
    //     if (res.status === 200) {
    //         return res.json();
    //     }
    // })
    // .then(data => console.log(data));

    // =============================================

    // let url = "http://hn.algolia.com/api/v1/search?query=css&tags=story";
    // fetch(url, {}).then(res => res.json()).then(data => console.log(data));

//=================================================

// newsapi.org

// let opions = {
//     headers: {
//         "X-Api-Key": "c25089efc28040c8b4dc06243e0f7fe6"
//     }
// };

// let opionss = {
//     headers: {
//         "Authorization": "c25089efc28040c8b4dc06243e0f7fe6"
//     }
// };

// let API_KEY = "c25089efc28040c8b4dc06243e0f7fe6";
// let url =`https://newsapi.org/v2/everything?q=Apple&from=2021-08-19&sortBy=popularity&apiKey=${API_KEY}`;

// fetch(url).then(res=>res.json()).then(news => console.log(news));

// =======================================
// pixabay.com

let key = "22997897-076dbfc7fc35bee4ac3dde2f7";
let url = `https://pixabay.com/api/?key=22997897-076dbfc7fc35bee4ac3dde2f7&orientation=horizontal&image_type=photo`;


let root = document.querySelector('#root');
console.log(root);

function createImg (imgObj) {
    return `<img src=${imgObj.webformatURL} alt=${imgObj.tags}/>`;
}

function renderGallery (imgArr) {
    let marcup = imgArr.reduce((acc, el) => {
        return createImg(el) + acc;
    }, "");
    root.insertAdjacentHTML('beforeend', marcup);
}
fetch(url)
.then(res => res.json())
.then(({hits}) => { console.log(hits);
renderGallery(hits);
})
.catch (err => console.log(err));

// renderGallery(imgArr){
//     console.log(imgArr);
// }