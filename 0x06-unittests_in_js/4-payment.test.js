const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments and display the message', function () {
    // Create a stub for Utils.calculateNumber
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Create a spy for console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assertion
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

    // Restore the spy and the stub to avoid side effects in other tests
    consoleLogSpy.restore();
    calculateNumberStub.restore();
  });
});
