/* Use ES6 class `extends` syntax to construct a Developer class with 
 * preferred language. Use `super` to initialize the firstname and lastname.
 * */

class Person {
    constructor(firstname, lastname) {
        this.fname = firstname;
        this.lname = lastname;
    }
}

class Developer extends Person {
    constructor(firstname, lastname, preferredLanguage) {
        super(firstname, lastname);
        this.preferredLanguage = preferredLanguage
    }
}


let jen = new Developer('Jen', 'Maker', 'Javascript');

console.log(jen.fname); // 'Jen'
console.log(jen.preferredLanguage); // 'Javascript'
