// Primitive

// 7 types: Strings,Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined
let userEmail1 = undefined; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.table([id, anotherId]);

const bigIntNumber = 456545231326421n



// Reference (Non-Premitive)

// Array, objects, Functions

const heros = ["Saktiman", "nagraj", "doga"]
const myPort = {
    name: "hitesh",
    age: 23
}

const myfunction = function heroes() {
    console.log("hello");
}

console.table([id, anotherId, bigIntNumber, heros, myPort]);



// ++++++++++++++++++++ Memory +++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)


let myYoutubeName = "Devesh"

let anotherName = myYoutubeName
anotherName  = "Garkoti"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    name: "user1",
    email: "user1@gmail.com"
}

let userTwo = userOne

userTwo.email = "google@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);