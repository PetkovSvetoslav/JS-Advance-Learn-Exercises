const {expect} = require('chai');
const {rgbToHexColor} = require('./6.rGBtoHex')
describe ('rgbToHexColor', () => {

    it ('black', () => {
      expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });
    it ('white', () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
      });
      it ('blue', () => {
        expect(rgbToHexColor(35,68,101)).to.equal('#234465');
      });
      it ('PARAMS', () => {
        expect(rgbToHexColor(0,0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
      });
      it ('PARAMS2', () => {
        expect(rgbToHexColor(-1,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,-1,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,-1)).to.be.undefined;
      });
      it ('PARAMS3', () => {
        expect(rgbToHexColor(256,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,256,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,256)).to.be.undefined;
      });
      it ('PARAMS4', () => {
        expect(rgbToHexColor('256',0,0)).to.be.undefined;
        expect(rgbToHexColor(0,'256',0)).to.be.undefined;
        expect(rgbToHexColor(0,0,'256')).to.be.undefined;
      });
    
    });