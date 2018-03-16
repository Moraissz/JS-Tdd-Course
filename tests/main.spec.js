const { expect } = require('chai');
const {
  sum, sub, mult, div,
} = require('../src/main.js');

describe('Calc', () => {
  describe('Smoke test', () => {
    it('should exist the method sum', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });
    it('should exist the method sub', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });
    it('should exist the method mult', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });
    it('should exist the method div', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });
});
describe('Sum', () => {
  it('should return 4 when "sum(2,2)"', () => {
    expect(sum(2, 2)).to.be.equal(4);
  });
});
describe('Sub', () => {
  it('should return 0 when "sub(2,2)"', () => {
    expect(sub(2, 2)).to.be.equal(0);
  });
});
describe('Mult', () => {
  it('should return 4 when "mult(2,2)"', () => {
    expect(mult(2, 2)).to.be.equal(4);
  });
});
describe('Div', () => {
  it('should return 1 when "div(2,2)"', () => {
    expect(div(2, 2)).to.be.equal(1);
  });
  it('should return the message " Não é possivel dividir por 0", when divide by 0', () => {
    expect(div(1, 0)).to.be.equal('Não é possivel dividir por 0');
  });
});
