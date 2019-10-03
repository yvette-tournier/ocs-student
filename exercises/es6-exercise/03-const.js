/* Use `const` so `x` can't change
 * 
 * Consider renaming to const convention
 * */
const x = 1;

if (true) {
    x = 2; // should raise a TypeError
    console.log(x)
}

console.log(x); // 1
