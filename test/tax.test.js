const chai = require('chai');
const Tax= require('../javascript/tax');

const myObj = new Tax();

const { assert } = chai;

//test first
describe("Tax calculator",()=> {
    it("Less than 12000",()=> {
        var salary = 11000;
        tax = salary * 0;
        assert.equal(myObj.tax(salary),tax)
    })

    it("Greater than 12000 but less than 36000",()=> {
        var salary = 35000;
        tax = salary * 0.2;
        assert.equal(myObj.tax(salary),tax)
    })

    it("Greater than 36000",()=> {
        var salary = 42000;
        tax = salary * 0.4;
        assert.equal(myObj.tax(salary),tax)
    })


})