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

for (let i = 0; i <= 200; i++) {
    console.log("Calculating" + i)
    for (let j = 0; j <= 200; j++) {
        let k = 0;
        while (k < 2) {
            if (i < j && i % j === 0) {
                k++;
            } else {
                return;
            }
        }
        if (k === 0) {
            console.log(i);
        }
    }
}