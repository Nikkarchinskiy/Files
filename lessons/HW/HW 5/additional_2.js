
class Library {
    #books = [];
    #favorites = [];
    #totalPrice = 0;

    buy(bookName,price) {
        if (this.#books.includes(bookName)) {
            return `This book has already been purchased`;
        } else {
            this.#books.push(bookName);
            this.#totalPrice += price;
            return this.getLibrary();
        }
        
    }

    sell(bookName,price) {
        if (this.#books.includes(bookName)) {
            let index = this.#books.indexOf(bookName);
            this.#books.splice(index,1);
            this.#totalPrice -= price;
            return this.getLibrary(); 
        } else {
            return `Sorry but this book doesn't exists in your library`;
        }
    }

    addToFavorite(bookName) {
        if(this.#books.includes(bookName) && !this.#favorites.includes(bookName)) {
            this.#favorites.push(bookName)
            return this.getLibraryFavorite();
        } else {
            return `You can't add to your favorites because you don't have this book`
        }
    }

    removeFromFavorite(bookName) {
        if(this.#books.includes(bookName) && this.#favorites.includes(bookName)) {
            let index = this.#favorites.indexOf(bookName);
            this.#favorites.splice(index,1);
            return this.getLibraryFavorite();
        } else {
            return `Sorry but this book doesn't exists in your favorites library`;
        }
    }

    get totalCost() {
        return `Total Cost of Books is equal: ${this.#totalPrice}`
    }

    get countFromFavourite() {
        return `Count: ${this.#favorites.length}`;
    }


    getLibrary() {
        return `Library: ${this.#books}`;
    }

    getLibraryFavorite() {
        return `Library favorite: ${this.#favorites}`;
    }
}

const library = new Library();

//buy and sell books
// console.log(library.buy("1984",100));
// console.log(library.buy("Burmese Days",240));
// console.log(library.buy("Outsider",190));
// console.log(library.buy("Animal Farm",95));
// // console.log(library.sell("1984",25));

// //add to favorites and remove to favorites
// console.log(library.addToFavorite("1984"))
// console.log(library.addToFavorite("Burmese Days"))

// console.log(library.removeFromFavorite("1984"))


// console.log(library.countFromFavourite);
// console.log(library.totalCost);



class Book {
    #author; 
    #title; 
    #price;
    #totalPages;
    #currentPage;

    constructor(bookObj) {
        let {author,title,price,totalPages,currentPage} = bookObj
        this.#author = author;
        this.#title = title;
        this.#price = price;
        this.#totalPages = totalPages;
        this.#currentPage = currentPage
    }

    read(countReadPages) {
        this.#currentPage = countReadPages
        return this.#currentPage;
    }

    get bookProgress() {
        return `${(this.#currentPage * 100 / this.#totalPages).toFixed(2)} %` ;
    }

    set bookProgress(percent) {
        this.#currentPage = percent / 100 * this.#totalPages;
    }

    get bookPages() {
        return `You read ${this.#currentPage} pages of ${this.#totalPages} pages`
    }

}


let OrwellObj = {
    author:"George Orwell",
    title:"Burmese Days",
    price: 240,
    totalPages: 300,
    currentPage:0
}

let KafkaObj = {
    author:"France Kafka",
    title:"Conversion",
    price:123,
    totalPages:240,
    currentPage:0
}

let CamusObj = {
    author:"Albert Camus",
    title:"Outsider",
    price:200,
    totalPages:200,
    currentPage:0
}

const orwell = new Book(OrwellObj);

orwell.read(150);
// console.log(orwell.bookProgress);

// orwell.bookProgress = 40;
// console.log(orwell.bookProgress);
console.log(orwell.bookPages);


const kafka = new Book(KafkaObj);

// kafka.read(200);
// console.log(kafka.bookProgress);
kafka.bookProgress = 25;
console.log(kafka.bookPages);

const camus = new Book(CamusObj);

camus.read(24);
// console.log(camus.bookProgress);
console.log(camus.bookPages)













