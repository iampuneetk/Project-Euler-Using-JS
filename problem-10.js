//Summation of Primes
//Problem 10
/*The sum of the primes below 
10 is 2+3+5+7=17.

Find the sum of all the primes below two million.
*/





function sumOfPrimes(limit) {
    if (limit < 2) return 0;
    
    let sum = 2; // Start with 2, the only even prime
    let sieveSize = Math.floor(limit / 2); // Store only odd numbers
    let isPrime = new Uint8Array(sieveSize).fill(1); // Efficient memory use

    let sqrtLimit = Math.sqrt(limit);
    
    for (let i = 1; 2 * i + 1 <= sqrtLimit; i++) {
        if (isPrime[i]) {
            let prime = 2 * i + 1; // Convert index to actual number
            for (let j = (prime * prime - 1) / 2; j < sieveSize; j += prime) {
                isPrime[j] = 0; // Mark multiples as non-prime
            }
        }
    }

    // Sum up all prime numbers
    for (let i = 1; i < sieveSize; i++) {
        if (isPrime[i]) {
            sum += 2 * i + 1; // Convert index to number and add to sum
        }
    }

    return sum;
}

// Set the limit to 2 billion and print the result
let limit = 2_000_000_000;
console.log("Sum of all primes below 2 billion:", sumOfPrimes(limit));


