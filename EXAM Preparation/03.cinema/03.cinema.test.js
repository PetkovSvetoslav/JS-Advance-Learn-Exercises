const {expect} = require('chai');
const {cinema} = require('./03.cinema');

describe ('test', () => {

    describe ('showMovies', () => {
      it ('empty array', () => {
                expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
              });
              it ('full array', () => {
                expect(cinema.showMovies(['fff', 'ggg', 'hhh'])).to.equal('fff, ggg, hhh');
              });
              it ('one movie', () => {
                expect(cinema.showMovies(['fff'])).to.equal('fff');
              });
  });
  describe ('ticketPrice', () => {
    it ('Premiera price', () => {
        expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
      });
      it ('Normal', () => {
        expect(cinema.ticketPrice("Normal")).to.equal(7.50);
      });
      it ('Discount', () => {
        expect(cinema.ticketPrice("Discount")).to.equal(5.50);
      });
      it ('invalid Input', () => {
        expect(() => cinema.ticketPrice("Invalid")).to.throw('Invalid projection type.');
      });
  });
  describe ('swapSeatsInHall', () => {
      it ('1 parametar', () => {
                expect(cinema.swapSeatsInHall(1)).to.equal("Unsuccessful change of seats in the hall.");
            });
            it ('floating number', () => {
                expect(cinema.swapSeatsInHall(1.25, 5)).to.equal("Unsuccessful change of seats in the hall.");
              });
              it ('greater than 20', () => {
                expect(cinema.swapSeatsInHall(25,5)).to.equal("Unsuccessful change of seats in the hall.");
              });
              it ('negative number', () => {
                expect(cinema.swapSeatsInHall(-5,5)).to.equal("Unsuccessful change of seats in the hall.");
              });
              it ('NORMAL EXPECTED', () => {
                expect(cinema.swapSeatsInHall(5,10)).to.equal("Successful change of seats in the hall.");
              });
  });
  });
