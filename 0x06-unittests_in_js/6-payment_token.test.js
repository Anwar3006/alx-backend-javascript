const getPaymentTokenFromAPI = require('./6-payment_token')
var { expect } = require('chai')

describe('Testing Async', () => {
    it('Test for success = true', async () => {
        const success = true
        const XpectedResponse = {data: 'Successful response from the API'}

        getPaymentTokenFromAPI(success)
        .then((res) => {
            expect(res).to.be.equal(XpectedResponse)
        })
    });
    it('Test for success = false', async () => {
        const success = false
        const XpectedResponse = {data: 'Successful response from the API'}

        getPaymentTokenFromAPI(success)
        .then((res) => {
            expect(res).toBeInstanceOf(Promise)
            expect(res).to.not.equal(XpectedResponse)
        })
    });
})
