
class Calculator {

    #x;
    #y;

    constructor(x,y) {
        this.#x = x
        this.#y = y;
    }

    returnResult(result) {
        return `Result of this operation is ${result}`
    }

    sum() {
       return typeof this.#x === "number" && typeof this.#y === "number" ? this.returnResult(this.#x + this.#y)  : `Sorry but inputed numbers is not integer`
    }   

    diff() {
        return typeof this.#x === "number" && typeof this.#y === "number" ? this.returnResult(this.#x - this.#y) : `Sorry but inputed numbers is not integer`
    }

    mult() {
        return typeof this.#x === "number" && typeof this.#y === "number" ? this.returnResult(this.#x * this.#y) : `Sorry but inputed numbers is not integer`
    }

    divide() {
        if (this.#y !== 0) {
            return typeof this.#x === "number" && typeof this.#y === "number" ? this.returnResult((this.#x / this.#y).toFixed(2)) : `Sorry but inputed numbers is not integer`
        } else {
            return `Sorry but your second number is equal 0. Division by zero is not possible`
        }
    }

    additional(callback) {
        return this.returnResult(callback(this.#x,this.#y));
    }
}

function degree(x,y) {
    return `degree ${x} to ${y} equal:  ${Math.pow(x,y)}`;
}

function sqrtTo(x,y) {
    let result = x;
    for (let i=0;i<y;i++) {
        result = Math.sqrt(result);
    }
    return `sqrt ${x} to ${y} equal: ${result.toFixed(2)}`;
}

function theoremPythagorean(x,y) {
    let result = Math.pow(x,2) + Math.pow(y,2);
    return `hypotenuse is equal to ${Math.sqrt(result).toFixed(2)}`;
}

const calc = new Calculator(3,4);


//sum
console.log(calc.sum());

//diff
console.log(calc.diff());

//multiply
console.log(calc.mult());

//divide
console.log(calc.divide());

//degree
console.log(calc.additional(degree));

//sqrt
console.log(calc.additional(sqrtTo));

//tyoreme Pyhagoure
console.log(calc.additional(theoremPythagorean));
