const assert = require("chai").assert;

const mocha = require("mocha");
const suite = mocha.suite;
const test = mocha.test;
console.clear();

const returnNull = () => null;
const returnNotNull = () => undefined;

suite("Unit Tests", function () {
  // Basic assertion
  suite("Basic Assertion", function () {
    // testing wit null
    test("#isNull", () => {
      assert.isNull(returnNull(), "null is null");
    });

    // testing with not null
    test("#isNotNull", () => {
      assert.isNotNull(returnNotNull(), "This function should not return null");
    });

    // test for undefined and defined
    test("#isDefined, isUndefined", () => {
      assert.isDefined(["x", "y"], "Array is defined");
      assert.isUndefined(undefined, "undefined is not defined");
    });

    // test for isOk and isNotOk
    // isOk(truthy), isNotOk(falsy)
    test("#isOK, isNotOk", () => {
      assert.isOk(true, "true is truthy value and it's OK");
      assert.isOk("Hello", "String is truthy and it's Ok");
      assert.isNotOk(false, "falsy is not OK");
    });
  }); // end of Basic assertion

  // Equality
  suite("Equality", function () {
    // test for equal and not equal
    test("#equal, #notEqual", () => {
      assert.equal(12, "12", "equal uses == to compare things");
      assert.notEqual(1, 2, "These two numbers are not equal");
    });
  }); // end of Equality
});
