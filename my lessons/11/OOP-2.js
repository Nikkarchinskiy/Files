class Product {
    constructor (brand, price, discount) {
        this.brand = brand,
        this.price = price,
        this.discount = discount
    }

    get name() {
        return this.brand;
    }

    set name() {
        this.brand = newValue;
    }

    getPriceWithDoscount () {
        return (this.price * (100 - this.discount)) / 100;
    }

    showThis () {
        console.group(this);
    }
}