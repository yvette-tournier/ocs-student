/* Use `let` to keep x from 'leaking' out of our conditional block.
 * */
let x = 1;

if( x === 1 ) {
  let x = 2;
}

console.log(x); // should output 1
