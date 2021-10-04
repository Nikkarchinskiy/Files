const ordersA = [
    { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
    { name: 'Computer', price: 230000, deliveryProgress: 100, type: 1 },
    { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2},
];

// const ordersB = [
//     { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
//     { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2},
// ]


function showDeliveryStatus(orders,callback) {
    for (let order of orders) {
        console.log(callback(order.deliveryProgress))
    }
}


function checkDeliveryStatus(deliveryProgress) {
    return deliveryProgress === 100 ? `Done` : deliveryProgress == null ? `Ready for delivery` : deliveryProgress < 100  ? `In progress` : null;

    // if (deliveryProgress === 100) {
    //     return `Done`
    // }
    // if (deliveryProgress === null) {
    //     return `Ready for delivery`
    // }
    // if (deliveryProgress < 100) {
    //     return `In progress`;
    // }
}
//orders A
let deliveryStatus = showDeliveryStatus(ordersA,checkDeliveryStatus);

//orders B
// let deliveryStatus_orderB = showDeliveryStatus(ordersB,checkDeliveryStatus);










