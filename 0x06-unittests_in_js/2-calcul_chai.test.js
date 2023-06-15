var expect = require('chai').expect
const calcul = require('./2-calcul_chai')

describe('Calculation', () => {
    describe('Addtion', () => {
        it('should equal 7 when 4.5 is added to 2.4', () => {
            const result = calcul('SUM', 4.5, 2.4)

            expect(result).to.equal(7);
        });
        it('Underflow edge case: small decimals', () => {
            const result1 = calcul('SUM', 0.0000000000000005, 0.00000000000000000004)

            expect(result1).to.equal(0);
        });
        it('Overflow edge case: large decimals', () => {
            const result2 = calcul('SUM', 4000000000000000.3902925, 2000000000000000.40000000)

            expect(result2).to.equal(6000000000000002);
        });        
        it('Non-numeric inputs', () => {

            expect(calcul).to.throw(Error, "Value not integers")
        });
    });
    describe('Subtraction', () => {
        it('should equal 3 when 2.5 is subtracted from 6.4', () => {
            const result = calcul('SUBTRACT', 6.4, 2.5)

            expect(result).to.equal(3);
        });
        it('Underflow edge case: small decimals', () => {
            const result1 = calcul('SUBTRACT', 0.0000000000000005, 0.00000000000000000004)

            expect(result1).to.equal(0);
        });
        it('Overflow edge case: large decimals', () => {
            const result2 = calcul('SUBTRACT', 4000000000000000.3902925, 2000000000000000.40000000)

            expect(result2).to.equal(2000000000000000);
        });        
        it('Non-numeric inputs', () => {

            expect(calcul).to.throw(Error, "Value not integers")
        });
    });
    describe('Division', () => {
        it('should equal 3 when 5.5 is divided by 2.7', () => {
            const result = calcul('DIVIDE', 5.5, 2.7)

            expect(result).to.equal(2);
        });
        it('Underflow edge case: small decimals', () => {
            const result1 = calcul('DIVIDE', 0.0000000000000005, 0.00000000000000000004)

            expect(result1).to.equal("Error");
        });
        it('Overflow edge case: large decimals', () => {
            const result2 = Math.round(
                calcul('DIVIDE', 4000000000000000.3902925, 2000000000000000.40000000)
            )

            expect(result2).to.equal(2);
        });        
        it('Non-numeric inputs', () => {

            expect(calcul).to.throw(Error, "Value not integers")
        });
    });

});