let {expect} = require ('chai');
let { StringBuilder} = require ('./13.stringBuilder');
describe ('test', () => {

    describe ('constructor', () => {
      it ('empty array', () => {
          let sb = new StringBuilder(undefined);
                expect(sb.toString()).to.equal('');
              });

              it ('non string error', () => {
                        expect(() => new StringBuilder(1.23)).to.throw(TypeError);
                        expect(() => new StringBuilder(null)).to.throw(TypeError);
                      });

                      it (' string ', () => {
                          let sb = new StringBuilder('fdgd');
                          expect(sb.toString()).to.equal('fdgd');
                        });

                        it ('TypeError', () => {
                          let sb = new StringBuilder();
                          expect(() => sb.append(true)).to.throw(TypeError);
                          let sb1 = new StringBuilder("www");
                          expect(() => sb1.append(123)).to.throw(TypeError);
                          let expected = '123';
                          let sb2 = new StringBuilder();
                          sb2.append(expected);
                          expect(sb2.toString()).to.equal('123');
                              });

                              it ('TypeError', () => {
                                  let sb = new StringBuilder();
                                  expect(() => sb.insertAt(true, 0)).to.throw(TypeError);
                                  let sb1 = new StringBuilder("www");
                                  expect(() => sb1.prepend(123, 1)).to.throw(TypeError);
                                      });                                

                                      it ('ok', () => {
                                          let input = "fast ";
                                          let input2 = "car";
                                          let expected = "fast car";
                                          let sb = new StringBuilder();
                                          sb.append(input);
                                          sb.append(input2);
                                          expect(sb.toString()).to.equal(expected);
                                              });  

                                              it ('ok', () => {
                                                  let sb = new StringBuilder("fast car");
                                                  sb.remove(5,1);
                                                  expect(sb.toString()).to.equal("fast ar");
                                                      }); 

                                                      it ('toString', () => {
                                                          let sb = new StringBuilder('fdghdfgsg');
                                                          expect(sb.toString()).to.equal("fdghdfgsg");
                                                              });  
                                                               

  });
  });