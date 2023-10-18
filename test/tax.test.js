const chai = require('chai');
const Tax= require('../javascript/tax');

const myObj = new Tax();

const { assert } = chai;

//test first
describe("Tax calculator",()=> {
    it("Taxes paid",()=> {
        assert.equal(myObj.tax(12000),0)
    })
})