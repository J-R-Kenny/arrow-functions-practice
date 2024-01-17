/**
 * @param { string } name The name of person to greet.
 * @returns {void} Doesn't return anything useful. */
// function sayHello(name) {
//     console.log("Hello, " + name + "!");
// }

// const sayHello = (name) =>{
//     console.log("Hello, " + name + "!");
// }

// const sayHello = (name) => console.log("Hello, " + name + "!");

const sayHello = name => console.log(`Hello, ${name}!`);
//Prettier has a setting to add in parentheses to sole parameters in arrow functions which needed to be disabled. 


export { sayHello };
