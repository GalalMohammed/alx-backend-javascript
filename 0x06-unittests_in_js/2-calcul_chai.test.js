const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should perform SUM operation', function () {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1, 3.2)).to.equal(4);
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });

  it('should perform SUBTRACT operation', function () {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1, 3.2)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });
  
  it('should perform DIVIDE operation', function () {
    expect(calculateNumber('DIVIDE', 1, 3)).to.equal(1 / 3);
    expect(calculateNumber('DIVIDE', 1, 3.2)).to.equal(1 / 3);
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(1 / 4);
    expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(1 / 4);
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(2 / 4);
  });
  
  it('should handle division by zero and return "Error"', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
