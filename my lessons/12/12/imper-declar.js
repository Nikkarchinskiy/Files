// [].forEach()  Перебор, БЕЗ ВОЗВРАТА


// let fruits = ['pear', 'apple', 'bana', 'melom'];

// fruits.forEach((elem, index, arr) => {
//         console.log(elem);
//         // console.log(index);
//     // console.log(arr);
//     // console.log(`elem: ${elem}  - index ${index}`);
// });

// console.log(friends);


// [].method(function () {})
// [].method(() => {})
// [].method(callback)


// Formula
// friends.forEach( (elem, inde, array) => {})
// friends.forEach( (elem, inde, array) => {
//     console.log(elem);
// });


// =========================
// [].map Перебор, С ВОЗВРАТОМ

// let friendsNames = friends.map((friend) => {
    //     return friend.name;
    // });


    // console.log(friendsNames);





    // let updateUser ='Sara';
    // let updateFriends = friends.map((friend) => {
        //     if (updateUser === friend.name) {
            //         return {
                //             ...friend,
                //             budget: friend.badget + 2000
                //         }
                //     }
                // });

                // console.table(updateFriends);

                // ==========================
                // let vova = {
//     name:'Vova',
//     budget: 3000
// };

// let sara = {
    //     ...vova,
    //     name: 'Sara'
    // };
    // ===========================

    // ================================
    // [].filter() Значение в конце должно быть true или false

    let friends = [
        {id: 1, name: 'Vova', age: 20, budget: 2500, isCompleate: true},
        {id: 2, name: 'Sara', age: 25, budget: 3500, isCompleate: false},
        {id: 3, name: 'Mike', age: 30, budget: 300, isCompleate: true},
        {id: 4, name: 'Bob', age: 18, budget: 200, isCompleate: false}
    ];

    let filterFriends = friends.filter((friend) => {
        return friend.budget === 10000
    });
    console.log(filterFriends);


        // =====================
        // [].find() Возврвщяет первое подходяший елемент

//         const numbers = [10, 20, 30, 40, 50];
// let num = numbers.find((n) => {
//         return n > 20;
// });

// console.log(num);

// let findFriend = friends.concat.find((elem) => {
    //     return elem.name === 'Sveta';
    //     return elem.name === 'Sara';
    // });
    // ======================
    // every and some


    // Every return true Если каждый елемент поподает под условие

    // let friendsBudget = friends.every((friend) => {
        //     return friend.budget > 0;
        // });

        // let friendsAge = friends.every((friend) => {
            //     return friend.age >= 18;
    // });

    // console.log(friendsBudget);
    // console.log(friendsAge);

    // ========================

    // Some return true Если хоть один елемент поподает под условие


    //     let friendsBudget = friends.some((friend) => {
        //         // return friend.budget === 300 && friend.isCompleate;
        //         return friend.isCompleate;
        //     });

        // console.log(friendsBudget);



        // =========================
        // [].sort() сортировать


        // let fruits = ['pear', 'apple', 'bana', 'melom'];

        // let result = '';
        // const numbers = [10, 20, 5, 30, 55, 50, 24];


        // // result = numbers.sort();
        // result = numbers.sort((a, b) => {
//      return a - b;  //по возростанию
//     // return b - a; по убыванию
// })

// console.log(result);


// let fruits = ['pear', 'apple', 'bana', 'melom'];

// result = fruits.sort();
// // result = fruits.sort().reverse();
// console.log(result);




// ===========================
// [].reduce()


// [].reduce(callback, acamulator); --- Formula

// friends.reduce((acc, elem, index, arr) => { }, acc);

// const numbers = [10, 20, 30, 40, 50];

// let totalSum = numbers.reduce((acc, elem, index, arr) => {
//     console.log(`${acc}: ${elem}`);
//     return acc + elem;
// }, 0);

// console.log(totalSum);


// let friendsBudget = friends.reduce((total, friend) => {
//     return total + friend.budget
// }, 0)

// console.log(friendsBudget);



// =====================

let cart = [
    {id: 1, title: 'Samsung', price: 200, qty: 3},
    {id: 2, title: 'Apple', price: 1200, qty: 1},
    {id: 3, title: 'LG', price: 300, qty: 4}
];

let cartSum = cart.reduce((total, item) => {
    return total + item.price * item.qty
}, 0);

console.log(cartSum);


