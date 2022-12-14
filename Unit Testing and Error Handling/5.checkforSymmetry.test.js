const { expect } = require('chai');
const { isSymmetric } = require('./5.checkforSymmetry');

describe ('Test', () => {
    it ('test1', () => {
  expect(isSymmetric([1,2,2,1])).to.be.true;
    });
    it ('test1', () => {
        expect(isSymmetric([1,2,3])).to.be.false;
          });
});
// .........................................................
// const { expect } = require('chai');
// const { isSymmetric } = require('./Unit Testing and Error Handling/5.checkforSymmetry');

describe ('Test', () => {
    it ('test1', () => {
  expect(isSymmetric([1,2,2,1])).to.be.true;
    });
    it ('test2', () => {
        expect(isSymmetric([1,2,3])).to.be.false;
          });
          it ('test3', () => {
            expect(isSymmetric(5)).to.be.false;
              });
              it ('test4', () => {
                expect(isSymmetric([1,2,1])).to.be.true;
                  });
                  it ('test5', () => {
                    expect(isSymmetric(['1','2','2','1'])).to.be.true;
                      });
                      it ('test6', () => {
                        expect(isSymmetric([1,2,2,1])).to.be.true;
                          });
                          it ('test7', () => {
                            expect(isSymmetric(['ABBA'])).to.be.false;
                              });  
                              it ('test8', () => {
                                expect(isSymmetric([1,2,'1'])).to.be.false;
                                  });

});

