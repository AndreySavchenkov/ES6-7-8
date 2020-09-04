//---------------------------------let const------------------------------------------------------------------------------


// let a = 24;

// if(true) {
//     let a = 42

//     console.log('a', a)
// }
// console.log(a)

//Hoisting
// b=20

// console.log(b)

// let b = 10;

// function hoisted() {
//     age = 26;
// }

// let age
// hoisted()
// console.log(age)

//Const
//const COLOR = '#ffeebb';
// COLOR = '#000';
// console.log(COLOR)

// const array = [1,2,3,5,8]

// console.log(array)
// array.push(13)
// console.log(array)


// ----------------------------------------arrow functions-------------------------------------------------------


// function sum(a,b) {
//     return a + b
// }

// function cube(a) {
//     return a ** 3
// }

// const sum = (a, b) => a + b

// const cube = a => a ** 3

// //setTimeout(() => console.log('After 1 second'), 1000)

// function log() {
//     console.log(this)
// }

// const arrowLog = () => console.log(this)

// const person = {
//     name : 'Elena',
//     age : 20,
//     log: log,
//     arrowLog : arrowLog,
//     delayLog: function() {
//         //const self = this
//         setTimeout(() => {
//             console.log(this.name + ' ' + this.age);
//         }, 500);
//     }
    
// }

// person.delayLog();


//--------------------------------------------------default params----------------------------------------------------------


// const defaultB = 30;
// const getDefault = c => c * 2

// function compute (a = 10, b = getDefault(a)) {
//     return a + b
// }

// console.log(compute(20))



//---------------------------------------------string-------------------------------------------------------------------


// const title = 'Hello';

// const isVisible = () => Math.random() > 0.5

// const template = `
// ${isVisible() ? `<p>Visible</p>` : ' '}
// <h1 id='demo' style="color: red">${title}</h1>
// `;

// console.log(template);

// const str = "Hello";
// console.log(str.startsWith('He'));
// console.log(str.endsWith('o'));

// console.log(str.includes('llo'));

// console.log(str.repeat(3));

// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

// console.log(str.padStart(10, '1234'));
// console.log(str.padEnd(8, 'abc'));

//-----------------------------------------------rest spred---------------------------------------------------------------

//  Rest
//  function average(a, ...args) {
    
//    return args.reduce((acc, i) => acc += i, 0) / args.length
//  }

//  console.log(average(10,20,30,40,50))

//Spread

//const array = [1,2,3,5,8,13]
//console.log(...array)
//console.log(Math.max(...array))

//const fib = [1, ...array]
//console.log(fib)

//Destructuring
//const array = [1, undefined, 3, 5, 8, 13]

// const a = array[0]
// const b = array[1]

//Object
// const address = {
//     contry: 'Russia',
//     city: 'Moscow',
//     street: 'Lenina',
//     concat: function() {
//         return `${this.contry} ${this.city} ${this.street}`
//     }
// }

//const {city, country, street = 'Tverskaya', concat: addressConcat} = address

//console.log(addressConcat.call(address))
//console.log(address.concat())

//const {city, ...rest} = address
//console.log(city)
//console.log(rest)

// const newAddress = {...address, street: 'Tverskaya', code: 123}
// console.log(newAddress)




