// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

// function properties are not supported in structuredClone, but circular references supported.
let clone = structuredClone(user);

//alert( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
//alert(clone.sizes.width); // 50, not related


let calculator = {

  read() {
    this.a = +prompt("a", this.a);
    this.b = +prompt("b", this.b);
  },
  sum() {
    return this.a+this.b;
  },
  mul() {
    return this.a*this.b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

let id = Symbol("id");
alert(id.description); // id

let id2 = Symbol("id");
alert(id2.description); // id


let user1 = { // belongs to another code
  name: "John"
};

let id3 = Symbol("id");

user1[id] = 1;

alert( user1[id] ); // we can access the data using the symbol as the key