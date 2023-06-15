var assert = require('assert')
const calcul = require('./0-calcul')

describe('Calculation', () => {
    describe('Addtion', () => {
        it('should equal 7 when 4.5 is added to 2.4', () => {
            const result = calcul(4.5, 2.4)

            assert.equal(result, 7);
        });
        it('Underflow edge case: small decimals', () => {
            const result1 = calcul(0.0000000000000005, 0.00000000000000000004)

            assert.equal(result1, 0);
        });
        it('Overflow edge case: large decimals', () => {
            const result2 = calcul(4000000000000000.3902925, 2000000000000000.40000000)

            assert.equal(result2, 6000000000000002);
        });        
        it('Non-numeric inputs', () => {

            assert.throws(calcul, Error, "Value not integers");
        });
    });
})