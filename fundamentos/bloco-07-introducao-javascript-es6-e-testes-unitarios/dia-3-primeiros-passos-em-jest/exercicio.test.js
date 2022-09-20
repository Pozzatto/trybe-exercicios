const {sum, myRemove, myFizzBuzz, encode, decode} = require('./exercicio.js');

describe('Test sum a + b', () => {
  it('Adds 4 + 5 to equal 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Adds 4 + "5" to equal Error', () => {
    expect(() => sum(4, '5')).toThrowError();
  });
  it('Test message Error is parameters must be numbers', () => {
    expect(() => { sum(4, '5') }).toThrowError('parameters must be numbers');
  });
});

describe('Test remove array', () => {
  it('Return expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Test FizzBuzz', () => {
  it('Return expected FizzBuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Return expected Fizz', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  it('Return expected Buzz', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });
  it('Return expected num', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  it('Return expected False', () => {
    expect(myFizzBuzz('6')).toBe(false);
  });
});

describe('Test encode', () => {
  it('it is function', () => {
    expect(typeof encode).toEqual('function');
  });
});

describe('Test decode', () => {
  it('it is function', () => {
    expect(typeof decode).toEqual('function');
  });
});