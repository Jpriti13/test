// Demo JavaScript File
// Created on 2026-02-13

console.log('Welcome to the Demo File!');

// Example 1: Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('User'));

// Example 2: Arrow Function
const add = (a, b) => a + b;
console.log('5 + 3 =', add(5, 3));

// Example 3: Object
const person = {
  name: 'John Doe',
  age: 30,
  city: 'New York',
  introduce: function() {
    return `Hi, I'm ${this.name} from ${this.city}`;
  }
};

console.log(person.introduce());

// Example 4: Array Operations
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubled);

// Example 5: Class
class Calculator {
  constructor(name) {
    this.name = name;
  }

  multiply(a, b) {
    return a * b;
  }
}

const calc = new Calculator('MyCalc');
console.log('6 * 7 =', calc.multiply(6, 7));

// Export for module usage (Node.js)
module.exports = { greet, add, person, Calculator };