const {expect} = require('chai');
const {mathEnforcer} = require('./4.mathEnforcer');

describe ('test', () => {

    describe ('addFive', () => {
  
      it ('If the parameter is NOT a number', () => {
        expect(mathEnforcer.addFive('5')).to.equal(undefined);
      });
      
      it ('correct result with possitive number', () => {
        expect(mathEnforcer.addFive(10)).to.equal(15);
      });
      it ('correct result with negative number', () => {
        expect(mathEnforcer.addFive(-5)).to.equal(0);
      });
  
      it ('correct result with floating point number', () => {
        expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5, 0.01);
      });
  
      });
  
      describe ('subtractTen', () => {
        it ('If the parameter is NOT a number', () => {
          expect(mathEnforcer.subtractTen('5')).to.equal(undefined);
        });
        
        it ('correct result with possitive number', () => {
          expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });
        it ('correct result with negative number', () => {
          expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });
    
        it ('correct result with floating point number', () => {
          expect(mathEnforcer.subtractTen(15.5)).to.be.closeTo(5.5, 0.01);
        });
        });
  
        describe ('sum', () => {
          it ('If the first parameter is invalid param', () => {
            expect(mathEnforcer.sum('5', 5)).to.equal(undefined);
          });
          it ('If the second parameter is invalid param', () => {
            expect(mathEnforcer.sum(5,'5')).to.equal(undefined);
          });
          it ('correct', () => {
            expect(mathEnforcer.sum(5,5)).to.equal(10);
          });
          it ('correct2', () => {
            expect(mathEnforcer.sum(5.5,5.5)).to.equal(11);
          });
          });
  });