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

for (let number = 1; number < 201; number++) {
    let isPrime = true;
    //  console.log("number is ",number);


    //  take the number, countdown from that number to zero, and if any of those numbers divide evenly into
    // the total (hence, modulo is 0, no remainder), it's not prime.  

    
    for (let countBackNum = (number-1); countBackNum > 1; countBackNum--) {
        //  console.log(countBackNum);
        let modulo = number %countBackNum;
        // console.log(modulo);
        if (modulo == 0)
        {
            isPrime = false;
        }
    }
    if (isPrime)
    {
        console.log(number, " is prime!");
    }
}