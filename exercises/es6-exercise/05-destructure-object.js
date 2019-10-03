/* Use profile destructuring to capture the first and last name of the profile
 * */
let profile = {
  fname: 'Ryan',
  lname: 'Cromwell',
  bday: new Date('1979-01-02')
}

let {fname, lname} = profile

console.log(fname, lname); // Ryan Cromwell
