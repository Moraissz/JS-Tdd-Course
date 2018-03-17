import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('FizzBuzz', () => {
  it('Should return ´Fizz´ when multiple of 3', () => {
    expect(FizzBuzz(12)).to.be.equal('Fizz');
  });

  it('Should return ´Buzz´ when multiple of 5', () => {
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('Should return ´FizzBuzz´ when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('Should return same number when no multiple of 3 and 5', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });

  it('Should return 0 when the number equals 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
