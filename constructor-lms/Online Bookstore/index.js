function Author(name, birthYear, nationality){
      this.name = name;
      this.birthYear = birthYear;
      this.nationality = nationality;
}

function Book(title, author, genre, price ){
      this.title = title;
      this.author= author;
      this.genre = genre;
      this.price = price;

      this.getBookInfo = function(){
        console.log(`Book's title : ${this.title}`)
        console.log(`Author's name : ${this.author.name}`)
        console.log(`Genre : ${this.genre}`)
        console.log(` Price : ${this.price}`)
        console.log(`<--------------------------------->`)
      }
}

let author1 = new Author("J.K. Rowling", 1965, "British");
let author2 = new Author("George Orwell", 1903, "British");

let book1 = new Book("Harry Potter and the Philosopher's Stone", author1, "Fantasy", 20);
let book2 = new Book("1984", author2, "Dystopian Fiction", 15);

book1.getBookInfo()
book2.getBookInfo()