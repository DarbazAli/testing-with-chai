const assert = require("chai").assert;

const mocha = require("mocha");
const suite = mocha.suite;
const test = mocha.test;
console.clear();

const returnNull = () => null;
const returnNotNull = () => undefined;

suite("Unit Test", function () {
  test("#isNull", () => {
    assert.isNull(returnNull(), "null is null");
  });
});
