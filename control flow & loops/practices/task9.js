// Write code for printing all prime numbers from 2 to 10.
// Result should be: `2,3,5,7`.
// *A prime number is a whole number greater than 1 whose only factors are 1 and itself.*
for (let i = 2; i <= 10; i++) {
    let isPrime = false;
    for (let j = 2; j <= i; j++) {
        if (i % j===0 && j !== i) {
            isPrime = true;
        }
    }
    if (isPrime === false) {
                console.log(i);
    }
}
