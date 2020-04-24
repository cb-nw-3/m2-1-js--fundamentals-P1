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
/* was able to find this in internet but uses function to perform it; wasn't able to come up with a simpler one*/

function printPrime(200) {
    var primes = [];
    for(var i = 1; i < 200; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(200);
    for(var i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < 200; j += i) {
                primes[j] = false;
            }
        }
    }
    for(var i = 2; i < 200; i++) {
        if(primes[i] === true) {
            console.log(i + " " + primes[i]);
        }
    }
}

