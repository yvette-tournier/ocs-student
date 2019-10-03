/* Use an ES6 Class to construct a Person instance.
 * */


class Person {

    constructor(firstName, lastName) {
        this.fname = firstName;
        this.lname = lastName;
    }

    printName(){
      console.log(`Name: ${this.lname}, ${this.fname}`);
    }
}

let john = new Person('John', 'Doe');
let jack = new Person('Jack', 'Doe');

console.log(john); // Person { fname: 'John', lname: 'Doe' }
console.log(john.fname); // John

jack.printName();
