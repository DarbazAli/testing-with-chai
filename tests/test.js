const chai = require('chai')
const assert = chai.assert;




// define a test context
suite('Basic Assertion', () => {
    // tests go here
    // first test for null and not null
    test('#isNull, isNotNull', () => {
        assert(null, 'optional error description, e.g: null is null');
        assert(1, '1 is not null')
    })
})