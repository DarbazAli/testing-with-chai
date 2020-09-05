const assert = require("chai").assert;

const mocha = require("mocha");
const suite = mocha.suite;
const test = mocha.test;
console.clear();

const returnNull = () => null;
const returnNotNull = () => undefined;

suite("Unit Tests", function () {

  // testing wit null
  test("#isNull", () => {
    assert.isNull(returnNull(), "null is null");
  });

  // testing with not null
  test('#isNotNull', () => {
    assert.isNotNull(returnNotNull(), 'This function should not return null')
  })


  // test for undefined and defined
  test('#isDefined, isUndefined', () => {
    assert.isDefined(['x', 'y'], 'Array is defined')
    assert.isUndefined(undefined, 'undefined is not defined')
  })
  
  
});


