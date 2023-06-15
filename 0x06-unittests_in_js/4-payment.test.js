var expect = require('chai').expect
const Utils = require('./utils')
var sinon = require('sinon')
const sendPaymentRequestToApi = require('./4-payment');


describe('Calculation', () => {
    describe('Making Payment', () => {
        it('stub the sendPaymentRequestToApi method', () => {
            const spy = sinon.spy(console)
            const stubFunction = sinon.stub(Utils, "calculateNumber")

            stubFunction.returns(10)
            sendPaymentRequestToApi(100, 20)
            expect(spy.log.calledWith('The total is: 10')).to.be.true
            expect(spy.log.callCount).to.be.equal(1)

            expect(stubFunction.calledWith()).to.be.true
            expect(stubFunction.callCount).to.be.equal(1)

            stubFunction.reset()
            spy.log.restore()
        });
    });

});