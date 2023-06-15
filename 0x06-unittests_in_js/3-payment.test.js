var expect = require('chai').expect
const Utils = require('./utils')
var sinon = require('sinon')
const sendPaymentRequestToApi = require('./3-payment')


describe('Calculation', () => {
    describe('Making Payment', () => {
        it('spy the sendPaymentRequestToApi method', () => {
            const spy = sinon.spy(Utils)

            sendPaymentRequestToApi(4.5, 2.4)
            expect(spy.calculateNumber.calledWith('SUM', 4.5, 2.4)).to.be.true
            expect(spy.calculateNumber.callCount).to.be.equal(1)
            spy.calculateNumber.restore()
        });
    });

});