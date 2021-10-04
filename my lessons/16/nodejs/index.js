console.log('Hello from node.js');

function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10));

class User {
    greet() {
        console.log('Hello user');
    }
}

let vova = new User();

vova.greet();