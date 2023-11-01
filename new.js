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
console.log(Object.getPrototypeOf(player1));
console.log(Player.prototype);
Player.prototype.sayHello = function() {
  console.log("Hello, I'm a player!");
}

player1.sayHello() // logs "Hello, I'm a player!"
player2.sayHello() // logs "Hello, I'm a player!"

// Don't do this!
player1.__proto__ === Player.prototype // returns true
player2.__proto__ === Player.prototype // returns true


function Books(id,name,pages,year){
  this.id = id
  this.name =name
  this.pages = pages
  this.year = year
}

Books.prototype.info = function(){
  console.log("info: " + this.id + " " + this.name + " " + this.pages + ' ' + this.year)
}

const Book1 = new Books(1,'ido',300,2000)
const Book2 = new Books(2,'idoDo',100,2023)
const arr = [Book1,Book2]

// console.log(arr.length)

for(let i = 0;i<arr.length;i++){
  // console.log(arr.length)
  console.log(arr[i].info())
}
