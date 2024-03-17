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


let time0 = performance.now();
for(let i = 1; i < 100; i++){
    setTimeout(countPrimeNumbers, 0)
}
let time1 = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${time1 - time0} milliseconds.`);