
// ES-5
let arr = [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ];

function Storage(items) {
    this.items = items
}

Storage.prototype.getItems = function()  {
    return `items in storage: ${this.items}`;
}


Storage.prototype.addItem = function(item) {
    return this.items.push(item);
}

Storage.prototype.removeItem = function(item) {
    return this.items.splice(this.items.indexOf(item),1);
}


let storage = new Storage(arr);


// console.log(storage.getItems())
// storage.addItem('Аннигиляторная пушка');
// console.log(storage.getItems())
// storage.removeItem("Нанитоиды");
// // storage.removeItem("Пролонгер");
// console.log(storage.getItems())


//ES-6 extends to functional class
// class StorageClass extends Storage  {
//     constructor(items) {
//         super(items)
//     }
// }


// const storageLondon = new StorageClass(arr);

// console.log(storageLondon.getItems());
// storageLondon.addItem("Medkit");
// storageLondon.removeItem("Железные жупи");
// console.log(storageLondon.getItems());















