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
    describe('GET /cart/:id', () => {
        it('should return a correct status code', (done) => {
            request.get('http://localhost:7865/cart/34', (err, res, body) => {
                expect(res.statusCode).to.be.equal(200);
                expect(body).to.be.equal('Payment method for cart: 34');
            })
            request.get('http://localhost:7865/cart/bob)', (err, res, body) => {
                expect(res.statusCode).to.be.equal(404);
                done()
            })
        });
    });
    describe('GET /available_payments', () => {
        it('should return the available payments', (done) => {
            request.get('http://localhost:7865/available_payments', (err, res, body) => {
                expect(res.statusCode).to.be.equal(200);
                expect(body).to.deep.equal(
                    '{"payment_methods":{"credit_cards":true,"paypal":false}}'
                );
                done()
            });
        });
    })
    describe('POST /login', () => {
        it('returns a welcome message with the username', (done) => {
            const reqBody = {userName: 'James Bond'}
            request.post({url: 'http://localhost:7865/login', json: true, body: reqBody}, (err, res, body) => {
                expect(res.statusCode).to.be.equal(201)
                expect(body).to.deep.equal('Welcome James Bond')
            })
            done();
        })
    })
})
