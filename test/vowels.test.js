const numberOfVowels = require('../vowels');
// const assert = require('assert');
const chai = require('chai');
const assert = chai.assert;
// const assert = require('chai').assert;

describe('numberOfVowels tests', () => {

  it('should return 3 given "orange"', () => {
    const result = numberOfVowels('orange');
    assert.strictEqual(result, 3);
  });

  it('should return 5 given "lighthouse labs"', () => {
    const result = numberOfVowels('lighthouse labs');
    assert.strictEqual(result, 5);
  });

  it('should return 5 given "aeiou"', () => {
    const result = numberOfVowels('aeiou');
    assert.strictEqual(result, 5);
  });

  it('should return 0 given empty string', () => {
    const result = numberOfVowels('');
    assert.strictEqual(result, 0);
  });

});
