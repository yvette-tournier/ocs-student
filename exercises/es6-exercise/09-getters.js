/* Use an ES6 getter to make `fullName` a calculated, readonly property.
 * */
class Person {
  constructor(firstname, lastname) {
    this.fname = firstname;
    this.lname = lastname;
  }

  getFullName(){
    return this.fname + ' ' + this.lname;
  }
}

let jen = new Person('Jen', 'Maker');

console.log(jen.getFullName());
