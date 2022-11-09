// this in various types
// 1. this in global scope
// 2. this inside an object
// 3. this inside a method
// 4. this inside a function
// 5. this inside inner fuction
// 6. this inside a constructor
// 7. this inside a class

// this in global scope - here this refers to window
this.table = "window table"
console.log(this.table);
this.garage = {
    table: "garage table"
}
console.log(this.garage.table);

// this inside an object - here this refers to object itself
let johnsroom = {
    table: "johnstable"
}
console.log(johnsroom.table);

// this inside a method - here this referes object calling method
let johnsroom1 = {
    table: "johnstable1",
    cleantable() {
        console.log(`cleaning on ${this.table}`)
    }
}
johnsroom1.cleantable();

// this inside function  - have to use call 

const cleantable = function() {
    console.log(`cleaning on ${this.table}`)
}

cleantable.call(this); // this referes to global
cleantable.call(this.garage); // this refers to global
cleantable.call(johnsroom); // this referes to johnsroom
cleantable.call(johnsroom1); // this refers to johnsroom1


// this inside inner function -- implemented in three ways
// way-1
const outerfunc1 = function(){
    let that =  this;
    const innerfunc = function(){
        console.log(that.table)
    }
    innerfunc();
}
// way-2
const outerfunc2 = function(){
    const innerfunc = function(){
        console.log(this.table)
    }
    innerfunc.bind(this);
}
// way-3 using arrow function takes this from outer func
const outerfunc3 = function(){
    const innerfunc = () => {
        console.log(this.table)
    }
}
// calling is same as above


// this inside constructor- use constructor to create objects and use objects to call variable. this referes to object called.

let createroom = function(name){
    this.table = `${name}s table`
}

const jillsroom = new createroom("jills");
const hohnsroom = new createroom("hohns");

console.log(jillsroom.table);
console.log(hohnsroom.table);

// this inside class

class createroom1 {
    constructor(name){
        this.table = `${name}s table`
    }
    cleantable(){
        console.log(`cleaning ${this.table}`)
    }
}

const jillsroom1 = new createroom1("jills");
const hohnsroom1 = new createroom1("hohns");

console.log(jillsroom1.cleantable());
console.log(hohnsroom1.cleantable());


// Design pattern problem
console.log("")
console.log("Design pattern problem:")
console.log("")

// design in 2 ways to check eleigibility and count objects
// way 1: function inside class
// class Student{
//    static count = 0
//     constructor(name,age,ph,bmarks){
//         this.Name = name
//         this.age = age
//         this.ph = ph
//         this.board_marks = bmarks
//         Student.count++;
//     }
//     eligibility(){
//         if (this.board_marks > 40){
//             return "eligible"
//         }
//         else {
//             return "not eligible"
//         }
//     }
// }

// const st1 = new Student("sai",20,"9963740988",41);
// const st2 = new Student("sourav",20,"9963740988",38);
// const st3 = new Student("krishna",20,"9963740988",91);
// const st4 = new Student("kiran",20,"9963740988",58);
// const st5 = new Student("kumar",20,"9963740988",21);

// console.log(st1.eligibility());
// console.log(st2.eligibility());
// console.log(st3.eligibility());
// console.log(st4.eligibility());
// console.log(st5.eligibility());
// console.log(Student.count);


// way2- outer function using call
class Student{
    static count = 0
    constructor(name,age,ph,bmarks){
        this.Name = name
        this.age = age
        this.ph = ph
        this.board_marks = bmarks
        Student.count++ ;
    }
}
const st1 = new Student("sai",20,"9963740988",41);
const st2 = new Student("sourav",23,"9963740988",38);
const st3 = new Student("krishna",25,"9963740988",91);
const st4 = new Student("kiran",19,"9963740988",58);
const st5 = new Student("kumar",26,"9963740988",21);

function eligibility(){
    if (this.board_marks > 40){
        return "eligible"
    }
    else {
        return "not eligible"
    }
}

console.log(eligibility.call(st1));
console.log(eligibility.call(st2));
console.log(eligibility.call(st3));
console.log(eligibility.call(st4));
console.log(eligibility.call(st5));
console.log(Student.count);

// fat arrow functions

console.log("")
console.log("fat arrow functions:")


// var geta = function(a) {
//     return a;
// }
// // using arrow
// let geta = a => a;
// or
let geta = (a) => {return a};  //optimal

// calling
console.log(geta(1));

// why arrows uses widely for inner function to get this from outerfunction.

// var x = function() {
//     console.log(arguments[0])
// }

// x(1,2,3);

//or
var x = (...n) => {
    console.log(n[0])
}

x(1,2,3);

///////
console.log("")
console.log("eligible_for_placements:")

function eligible_for_placements(){
    return () => {
       if (this.board_marks > 40 && this.age > 23){
          return true
       }
       else {
          return false
       }
    }
}
std_arr = [st1,st2,st3,st4,st5];
for(let i=0; i<std_arr.length; i++){
    if (eligible_for_placements.call(std_arr[i])() === true){
        console.log(`${std_arr[i].Name} is eligible for placements`)
    }
}

// console.log(eligible_for_placements.call(st1)());
// console.log(eligible_for_placements.call(st2)());
// console.log(eligible_for_placements.call(st3)());
// console.log(eligible_for_placements.call(st4)());
// console.log(eligible_for_placements.call(st5)());