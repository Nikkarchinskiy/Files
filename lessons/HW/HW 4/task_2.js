
// version 1: bind
// const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//       console.log(`Adding ${itemName} to inventory`);
//       this.items.push(itemName);
//     },
//     remove(itemName) {
//       console.log(`Removing ${itemName} from inventory`);
//       this.items = this.items.filter(item => item !== itemName);
//     },
//   };

//   const invokeInventoryAction = function(itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     //bind context
//     action.bind(inventory)(itemName);
//   };

//   invokeInventoryAction('Medkit', inventory.add);
//   console.log(inventory.items);
//   invokeInventoryAction("Knife",inventory.remove);
//   console.log(inventory.items);
//   inventory.add("AK-47");
//   console.log(inventory.items);



//===========================================================
// version 2: apply

// const invokeInventoryAction = function(itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   //apply context
//   action.apply(inventory,[itemName]);
// };

// invokeInventoryAction('Medkit', inventory.add);
// console.log(inventory.items);
// invokeInventoryAction("Knife",inventory.remove);
// console.log(inventory.items);
// inventory.add("AK-47");
// console.log(inventory.items);

//=======================================================================
// version 3: call

// const invokeInventoryAction = function(itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   //call context
//   action.call(inventory,itemName);
// };

// invokeInventoryAction('Medkit', inventory.add);
// console.log(inventory.items);
// invokeInventoryAction("Knife",inventory.remove);
// console.log(inventory.items);
// inventory.add("AK-47");
// console.log(inventory.items);




//========================================================
//version 4: student's version;
const inventory = {
  items:["AK-47","Knife"],
  add(itemName) {
    console.log(`${itemName} adding into array`);
    this.items.push(itemName)
  },
  remove(itemName) {
    let index = this.items.indexOf(itemName);
    console.log(`${itemName} removed into array`);
    this.items.splice(index,1);
  },
  show() {
    console.table(this.items);
  }
}

  const invokeInventoryAction = (itemName,action)=> {
    //call
    action.call(inventory,itemName);
    //apply
    // action.apply(inventory,[itemName])
    //bind
    // action.bind(inventory)(itemName);
  }

  inventory.add("YOLO");
  inventory.remove("YOLO");
  inventory.show();
  invokeInventoryAction("Brash",inventory.add);
  inventory.show();
  invokeInventoryAction("AK-47",inventory.remove);
  inventory.show();







  