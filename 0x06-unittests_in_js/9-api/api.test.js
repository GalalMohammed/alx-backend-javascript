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
