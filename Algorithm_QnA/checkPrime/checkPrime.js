const isPrime = ( number ) => {

    if ( number === undefined ) {
        return `Please enter a number.`;
    }

    if ( number === 0 || number === 1 ) {
        return `${number} is not a prime number.`;
    }

    let divisor = 2;

    while ( number > divisor ) {
        if ( number % divisor == 0 ) {
            return `${number} is not a prime number.`;
        }
        else
            divisor++;
    }
    return `${number} is a prime number.`;
}

console.log(isPrime(1));
console.log(isPrime(10));
console.log(isPrime(3));
console.log(isPrime(45));
console.log(isPrime(101));