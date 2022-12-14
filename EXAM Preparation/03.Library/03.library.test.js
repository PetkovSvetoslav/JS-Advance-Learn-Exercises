const { expect } = require('chai');
const { library } = require('./03.library');


describe ('test', () => {

    describe ('calcPriceOfBook', () => {
      it ('invalid input-name', () => {
                expect(() => library.calcPriceOfBook(5,5)).to.throw();
              });
              it ('invalid input-name', () => {
                  expect(() => library.calcPriceOfBook('g','g')).to.throw();
                });
              it ('valid input-1980', () => {
                  expect(library.calcPriceOfBook('book',1979)).to.equal('Price of book is 10.00');
                });
                it ('valid input=1980', () => {
                  expect(library.calcPriceOfBook('book',1980)).to.equal('Price of book is 10.00');
                });
                it ('valid input+1980', () => {
                  expect(library.calcPriceOfBook('book',1999)).to.equal('Price of book is 20.00');
                });


  });
  describe ('findBook', () => {
      it ('invalid input', () => {
                expect(() =>library.findBook([],'book')).to.throw();
              });
              it ('valid input', () => {
                  expect(library.findBook(["Troy", "Life Style", "Torronto"],"Troy")).to.equal("We found the book you want.");
                });
                it ('valid input', () => {
                  expect(library.findBook(["Troy", "Life Style", "Torronto"],"book")).to.equal("The book you are looking for is not here!");
                });


  });
  describe ('arrangeTheBook', () => {
      it ('invalid input', () => {
                expect(() => library.arrangeTheBooks('test')).to.throw("Invalid input");
              });
              it ('invalid input', () => {
                  expect(() => library.arrangeTheBooks(-1)).to.throw("Invalid input");
                });
              it ('valid input', () => {
                  expect(library.arrangeTheBooks(10)).to.equal('Great job, the books are arranged.');
                });
                it ('valid input', () => {
                  expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
                });
                it ('valid input', () => {
                  expect(library.arrangeTheBooks(45)).to.equal('Insufficient space, more shelves need to be purchased.');
                });

  });
  });
