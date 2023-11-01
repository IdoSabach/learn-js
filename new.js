// // example one
// function Book(id,name,year){
//   this.id = id
//   this.name = name
//   this.year = year
//   this.info = function(){
//     console.log("num of book: " + id + "," + "name: " + name + ',')
//   }
// }

// const book1 = new Book(1,'ido',2000)
// const book2 = new Book(2,'idodo',2010)
// const book3 = new Book(3,'idodi',2020)
// console.log(book1.name)
// console.log(book1,book2,book3)
// console.log(book1.info())
// Object.getPrototypeOf(book1) === Book.prototype // returns true
// Object.getPrototypeOf(book2) === Book.prototype // returns true

function Player(name, marker) {
  this.name = name
  this.marker = marker
}

const player = new Player('steve', 'X')
console.log(player.name) // 'steve'

function Player(name, marker) {
  this.name = name
  this.marker = marker
  this.sayName = function() {
    console.log(name)
  }
}

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
player1.sayName() // logs 'steve'
player2.sayName() // logs 'also steve'

// theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
// console.log(theHobbit.info());
Object.getPrototypeOf(player1) === Player.prototype // returns true
Object.getPrototypeOf(player2) === Player.prototype // returns true
Player.prototype.sayHello = function() {
  console.log("Hello, I'm a player!");
}

player1.sayHello() // logs "Hello, I'm a player!"
player2.sayHello() // logs "Hello, I'm a player!"

// Don't do this!
player1.__proto__ === Player.prototype // returns true
player2.__proto__ === Player.prototype // returns true