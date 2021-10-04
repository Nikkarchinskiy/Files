class customerClass {
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    hello = (name, age) => {
        console.log(this.name, this.age);
    }
};

module.exports = customerClass;