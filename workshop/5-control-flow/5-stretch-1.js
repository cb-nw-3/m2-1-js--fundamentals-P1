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

//Solution

//prime numbers are always divisble by 1 and by itself (no remainders)


for (x = 1; x <= 100; x++) {
    isPrime = true;
    //test if number is divisible by any previous numbers before it
    //if there is a factor, then it is not prime
    for (y = 2; y < x; y++) {
        if (x % y == 0) {
            isPrime = false;
        }
    }
    // only print prime numbers
    if (isPrime){
        console.log(x);
    }
}