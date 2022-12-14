function extendProrotype(proto) {

  proto.prototype.species = 'Human';
  proto.prototype.toSpeciesString = function (){
return `I am a ${this.species}. ${this.toString()}`
  };
}

function Person (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.toString = function() {
    return  `To string ${this.name}`;
}

extendProrotype(Person.prototype);

const person = new Person('Peter', 35);
// console.log(person.toSpecoesString());