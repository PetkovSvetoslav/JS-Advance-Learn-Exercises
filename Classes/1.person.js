class Person {
    constructor(firstName, lastName, age, email){
// this.firstName = firstName;
// this.lastName = lastName;
// this.age = age;
// this.email = email;
Object.assign(this, {firstName, lastName, age, email});
    }
   
    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}
//  const guy = new Person('John', 'Smith',' 23', 'john@smith.com');
//  console.log(guy);