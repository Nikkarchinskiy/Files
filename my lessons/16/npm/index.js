console.log("Hello from NPM and NODEJS");
console.log("моя папка", __dirname);
console.log("123");
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
console.log(uuidv4());
console.log(uuidv4());
console.log(uuidv4());