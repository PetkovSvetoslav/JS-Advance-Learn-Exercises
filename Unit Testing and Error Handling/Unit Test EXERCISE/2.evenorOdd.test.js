const {expect} = require('chai');
const {isOddOrEven} = require('./2.evenorOdd');

describe ('test', () => {

    it ('should be undefiened if number', () => {
      expect(isOddOrEven(2)).to.be.undefined;
    });
    
      it ('should be undefiened if array', () => {
        expect(isOddOrEven([])).to.be.undefined;
      });
    
      it ('should be undefiened if object', () => {
        expect(isOddOrEven({})).to.be.undefined;
      });
    
      it ('should return odd', () => {
        expect(isOddOrEven('hi!')).to.equal('odd');
      });
      it ('should return even', () => {
        expect(isOddOrEven('hi!!')).to.equal('even');
      });
    
    
    });