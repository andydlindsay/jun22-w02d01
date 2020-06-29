const assert = require('assert');
const obj = require('../hello');
const sayHello = obj.sayHello;

describe('sayHello function tests', () => {

  it('should return the string "hello there!"', () => {
    const result = sayHello();
    assert.strictEqual(result, 'hello there!');
  });

});
