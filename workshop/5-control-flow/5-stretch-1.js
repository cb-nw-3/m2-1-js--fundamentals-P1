/**
 * PRIME NUMBER GENERATOR
 *
 * Write a program that generates a list of all prime numbers between 1 and 200.
 *
 * A prime number is a number that is ONLY divisible by 1 and itself.
 *
 * 6 -> NOT prime (2 * 3)
 * 7 -> PRIME (can only be divided by 1 and 7, no other numbers)
 * 12 -> NOT prime (3 * 4, 2 * 6)
 * 37 -> PRIME ()
 *
 * NOTE: 1 and 2 are both prime numbers.
 *
 * EXPECTED OUTPUT:
 *
 * [1, 2, 3, 5, 7, 11, 13, ...]
 */

for (let y = 1; y <= 200; y += 1) {
    let prime = true;

    // Is 'y' divided by any number before?
    for(let i = 2; i < y; i++) {
        if(y % i === 0) {
            prime = false;
        }
    }
    if (prime){
        console.log(`Prime ${y}`);
    } else {
        console.log('Not prime');
    }
}