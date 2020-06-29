const assert = require('assert');
const obj = require('./hello');
const sayHello = obj.sayHello;

// console.log(sayHello.toString());
const result = sayHello();

assert.strictEqual(result, 'hello there');
