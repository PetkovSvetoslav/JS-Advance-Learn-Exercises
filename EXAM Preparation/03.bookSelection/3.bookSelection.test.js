const {expect} = require('chai');
const {bookSelection} = require('./3.bookSelection');

describe ('test', () => {

    describe ('isGenreSuitable', () => {
  
      it ('happy path', () => {
        expect(bookSelection.isGenreSuitable('Thriller',20)).to.equal(`Those books are suitable`);
        expect(bookSelection.isGenreSuitable('Horror',20)).to.equal(`Those books are suitable`);
        expect(bookSelection.isGenreSuitable('a',20)).to.equal(`Those books are suitable`);
        expect(bookSelection.isGenreSuitable('a',10)).to.equal(`Those books are suitable`);
      });
      it ('age', () => {
          expect(bookSelection.isGenreSuitable('Thriller',10)).to.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
          expect(bookSelection.isGenreSuitable('Horror',10)).to.equal(`Books with Horror genre are not suitable for kids at 10 age`);
        });
        it ('', () => {
          expect(bookSelection.isGenreSuitable('Thriller',12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
          expect(bookSelection.isGenreSuitable('Horror',12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        });
        
});
describe ('isItAffordable', () => {
  
  it ('happy path', () => {
    expect(bookSelection.isItAffordable(1,2)).to.equal(`Book bought. You have 1$ left`);
  });
  it ('happy path2', () => {
      expect(bookSelection.isItAffordable(1,1)).to.equal(`Book bought. You have 0$ left`);
    });
    it ('not enough money', () => {
      expect(bookSelection.isItAffordable(2,1)).to.equal(`You don\'t have enough money`);
    });
    it ('invalid input', () => {
      expect(()=> bookSelection.isItAffordable('1',1)).to.Throw();
      expect(()=> bookSelection.isItAffordable(1,'1')).to.Throw();
      expect(()=> bookSelection.isItAffordable('1','1')).to.Throw();
    });
});
describe ('suitableTitles', () => {
  
  it ('happy path', () => {
    expect(bookSelection.suitableTitles([{title: 'aa', genre: 'a'}],'a')).to.deep.equal(['aa']);
  });
  it ('happy path', () => {
      expect(bookSelection.suitableTitles([{title: 'aa', genre: 'a'},{title: 'ab', genre: 'a'},{title: 'bb', genre: 'b'}],'a')).to.deep.equal(['aa', 'ab']);
    });
    it ('happy path', () => {
      expect(bookSelection.suitableTitles([{title: 'bb', genre: 'b'}],'a')).to.deep.equal([]);
    });
});

});
