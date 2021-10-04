let productsPrice = { 
    apple: 20, 
    orange: 5, 
    cheese: 12, 
    pork:45, 
    bread: 23 
}

//total: 55
// let order = {
//     apple:1,
//     cheese:1,
//     bread:1
// }

//total: 181
let order = {
    apple:5,
    cheese:1,
    bread:3
}


function returnPriceOrder(productsPrice,order) {
    let result = 0;
    for (let key_product in productsPrice) {
        for (let key_order in order) {
            if (key_product === key_order) {
                result += productsPrice[key_product] * order[key_order]
            }
        }
    }
    return result;
}


console.log(returnPriceOrder(productsPrice,order))
// console.log(20* 5 + 12 + 23 * 3);



