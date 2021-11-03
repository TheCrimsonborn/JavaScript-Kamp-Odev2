function getPrimes(max) {
    let filter = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!filter[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                filter[j] = true;
            }
        }
    }
    console.log(...primes);
}
getPrimes(1000)