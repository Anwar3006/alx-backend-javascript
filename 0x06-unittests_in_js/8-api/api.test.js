var {expect} = require('chai')
const request = require('request')

describe('Testing the index page', () => {

    describe('GET /', () => {
        it('should return a status code of 200', (done) => {
            request.get('http://localhost:7865/', (err, res, body) => {
                expect(res.statusCode).to.be.equal(200);
                expect(body).to.be.equal('Welcome to the payment system');
                done()
            })

        });
    });
})
