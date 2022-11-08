obj = {num: 10}

var ret1 = function(a,b,c) {
    return this.num+a+b+c;
}
using call
console.log(ret1.call(obj,1,2,3));

// using apply for multiple agreements with an array
let arr = [1,2,3]
console.log(ret1.apply(obj,arr));

// using bind
let bound = ret1.bind(obj);
console.log(bound(1,2,3));

//Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.
// Dont pass in args. Read from 'this' and use BIND

let student = {age : 20}

const retage = function(){
    return this.age;
}

let binded = retage.bind(student);
console.log(binded());

currying in js using bind

let multiply = function (x,y) {
    console.log( x * y);
}

let multiplybytwo = multiply.bind(this,2); // or same as
// let multiply = function (y) {
//     let x = 2;
//     console.log( x * y);
// }
multiplybytwo(3);

let multiplybythree = multiply.bind(this,3); // or same as
// let multiply = function (y) {
//     let x = 3;
//     console.log( x * y);
// }
multiplybythree(3);

//currying in js using closures
// Currying transforms a function with multiple arguments into a sequence/series of functions each taking a single argument.

let multiply = function(x) {
    return function (y) {
        console.log(x*y);
    }
}

let multiplybytwo = multiply(2);  // x = 2
multiplybytwo(3); // y = 3






