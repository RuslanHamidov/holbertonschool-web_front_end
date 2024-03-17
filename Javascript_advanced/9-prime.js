function countPrimeNumbers() {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }

        return true;
    }

    let count = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count;
}
    const time0 = performance.now();
    countPrimeNumbers();
    const time1 = performance.now();
    const NUMER_OF_MILISECONDS = time1 - time0;

    console.log(`Execution time of printing countPrimeNumbers was ${NUMER_OF_MILISECONDS} milliseconds.`);
 