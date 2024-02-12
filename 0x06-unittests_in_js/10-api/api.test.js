const request = require('request');
const { expect } = require('chai');

describe('Index page', function () {
  it('should return correct status code and message for GET /', function (done) {
    request.get('http://localhost:7865', (_err, response, body) => {
      // Assertion
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart Page', function () {
  it('should return correct status code and message when :id is a number', function (done) {
    request.get('http://localhost:7865/cart/123', (_err, response, body) => {
      // Assertion
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should return 404 status code when :id is NOT a number', function (done) {
    request.get('http://localhost:7865/cart/hello', (_err, response) => {
      // Assertion
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments', function () {
  it('should return correct JSON structure for GET /available_payments', function (done) {
    request.get('http://localhost:7865/available_payments', (_err, response, body) => {
      // Assertion
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login endpoint', function () {
  it('should return correct message for POST /login', function (done) {
    // Send a POST request with a JSON body
    request.post({
      url: 'http://localhost:7865/login',
      json: { userName: 'GalalMohammed' }
    }, (_err, response, body) => {
      // Assertion
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome GalalMohammed');
      done();
    });
  });
});
