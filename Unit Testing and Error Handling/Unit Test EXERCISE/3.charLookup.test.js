const {expect} = require('chai');
const {lookupChar} = require('./3.charLookup');

describe ('test', () => {

    it ('check index parametars is valid', () => {
      expect(lookupChar(0,0)).to.equal(undefined);
    });
    
    it ('check index parametars is valid', () => {
      expect(lookupChar('k',0.6)).to.equal(undefined);
    });
    
      it ('check string parametars is valid', () => {
        expect(lookupChar('h','k')).to.equal(undefined);
      });
    
      it ('parametar with difrent lenght', () => {
        expect(lookupChar('k',10)).to.equal('Incorrect index');
      });
    
      it ('negativ index', () => {
        expect(lookupChar('k',-10)).to.equal('Incorrect index');
      });
      it ('all is valid', () => {
        expect(lookupChar('hi!!', 1)).to.equal('i');
      });
    
    
    });