const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with the correct object when success is true', function (done) {
    getPaymentTokenFromAPI(true).then(response => {
      // Assertion
      expect(response).to.deep.equal({data: 'Successful response from the API' });
      done(); // Call done to indicate the end of the asynchronous test
    });
  });
});
