const products = [
    { name: "Рада", price: 1300, quantity: 4 },
    { name: "Сканер", price: 2700, quantity: 3 },
    { name: "Дроид", price: 400, quantity: 7 },
    { name: "Захват", price: 1200, quantity: 2 },
  ];

  const func = function (arr, props) {
      let array = [];
      for (let items of arr) {
    if(items[props]){
        array.push(items[props]);
    } else return [];
}
return array;
  };

  console.log(func(products, "name"));
  console.log(func(products, "quantity"));
  console.log(func(products, "category"));