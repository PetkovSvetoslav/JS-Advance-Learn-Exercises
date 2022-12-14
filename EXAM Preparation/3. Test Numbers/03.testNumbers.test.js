let { expect } = require('chai');
let { testNumbers  } = require("./testNumbers");

describe ('test', () => {

    describe ('sumNumber', () => {
      it ('valid numbers', () => {
                expect(testNumbers.sumNumbers(3,5)).to.equal('8.00');
              });
              it ('negative number', () => {
                  expect(testNumbers.sumNumbers(3,-5)).to.equal('-2.00');
                });
                it ('floating point', () => {
                  expect(testNumbers.sumNumbers(3.5555,5.3333)).to.equal('8.89');
                });
                it ('strings', () => {
                  expect(testNumbers.sumNumbers(3.5555,'5.3333')).to.equal(undefined);
                  expect(testNumbers.sumNumbers('3.5555','5.3333')).to.equal(undefined);
                });
  });

  describe ('numberChecker', () => {
      it ('works with odd value', () => {
                expect(testNumbers.numberChecker(3)).to.equal("The number is odd!");
              });
              it ('works with even value', () => {
                  expect(testNumbers.numberChecker(4)).to.equal("The number is even!");
                });
                it ('works with odd value', () => {
                  expect(testNumbers.numberChecker('3')).to.equal("The number is odd!");
                });
                it ('works with even value', () => {
                    expect(testNumbers.numberChecker('4')).to.equal("The number is even!");
                  });
                it ('invalid', () => {
                  expect(() => testNumbers.numberChecker('a')).to.throw("The input is not a number!");
                });
  });

  describe ('averageSumArray', () => {
      it ('work with integers', () => {
                expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
              });
              it ('work with floats', () => {
                  expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
                });
  });
  });