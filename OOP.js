// problem 1
function TestObject() {};

TestObject.prototype.pluralize = function(str) {
  if(str.charAt(str.length - 1) === 'y' || str.charAt(str.length - 1) === 'Y') {
    return str.substring(0, str.indexOf('y')) + 'ies';
  } else {
    return str + 's';
  }
};

// problem 2
// a)
function Book(obj) {
  this.title = obj.title;
  this.quantity = obj.quantity;
  this.price = obj.price;
};

Book.prototype.getSubtotal = function() {
  return this.quantity * this.price;
}

var bookTest = new Book({ title: 'Object Oriented JavaScript', quantity: 2, price: 10 });
// console.log(bookTest.title);
// console.log(bookTest.quantity);
// console.log(bookTest.price);
// console.log(bookTest.getSubtotal());

var book1 = new Book({ title: 'Object Oriented JavaScript', quantity: 1, price: 10 });
var book2 = new Book({ title: 'JavaScript Web Applications', quantity: 2, price: 15 });
var book3 = new Book({ title: 'PHP Object Oriented Solutions', quantity: 1, price: 20 });
var book4 = new Book({ title: 'Head First Java', quantity: 5, price: 20 });

// b)
function ShoppingCart(arrayOfBooks) {
  this.arrayOfBooks = arrayOfBooks;
};

ShoppingCart.prototype.add = function(bookObj) {
  this.arrayOfBooks.push(bookObj);
}

ShoppingCart.prototype.getTotal = function() {
  return this.arrayOfBooks.reduce(function(prevTotal, bookItem) {
    var product = bookItem.price * bookItem.quantity;
    return prevTotal + product;
  }, 0)
};

var cart = new ShoppingCart([book1, book2]);
cart.add(book3);
cart.add(book4);
var subtotal = cart.getTotal();
console.log(subtotal); // 160
console.log(cart.arrayOfBooks); // obj

// problem 2
// a)
function Book(obj) {
  this.title = obj.title;
  this.quantity = obj.quantity;
  this.price = obj.price;
};

Book.prototype.getSubtotal = function() {
  return this.quantity * this.price;
};

var bookTest = new Book({ title: 'Object Oriented JavaScript', quantity: 2, price: 10 });
console.log(bookTest.title);
console.log(bookTest.quantity);
console.log(bookTest.price);
console.log(bookTest.getSubtotal());

var book1 = new Book({ title: 'Object Oriented JavaScript', quantity: 1, price: 10 });
var book2 = new Book({ title: 'JavaScript Web Applications', quantity: 2, price: 15 });
var book3 = new Book({ title: 'PHP Object Oriented Solutions', quantity: 1, price: 20 });
var book4 = new Book({ title: 'Head First Java', quantity: 5, price: 20 });

// b)
function ShoppingCart(arrayOfBooks) {
  this.arrayOfBooks = arrayOfBooks;
};

ShoppingCart.prototype.add = function(bookObj) {
  this.arrayOfBooks.push(bookObj);
};

ShoppingCart.prototype.getTotal = function() {
  return this.arrayOfBooks.reduce(function(prevTotal, bookItem) {
    var product = bookItem.price * bookItem.quantity;
    return prevTotal + product;
  }, 0)
};

var cart = new ShoppingCart([book1, book2]);
cart.add(book3);
cart.add(book4);
var subtotal = cart.getTotal();
console.log(subtotal); // 160
console.log(cart.arrayOfBooks); // obj



// problem 3
var numbers = [1, 2, 3, 4, 5];
var numbersDoubled = numbers.map2(function(number) {
  return number * 2;
});
console.log(numbersDoubled); // should equal [2, 4, 6, 8, 10]

Array.prototype.map2 = function(callbackFunc) {
  var newArray = [];
  for(var i = 0; i < this.length; i ++) {
    newArray.push(callbackFunc(this[i]));
  };
  return newArray;
};

