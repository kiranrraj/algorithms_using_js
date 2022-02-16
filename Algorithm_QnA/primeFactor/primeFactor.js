const primeFactors = ( num ) => {
    if( num === undefined ) {
        return `Please enter a number.`;
    }

    if( num === 0 || num === 1 ) {
        return `Please enter a value above 2.`;
    }

    let factors = [], divisor = 2, original = num;

    while ( num > 2) {
        if ( num % divisor == 0 ) {
            factors.push( divisor );
            num = num / divisor;
        } else {
            divisor++;
        }
    }
    return `Factors of number ${original} is ${factors}.`;
}

console.log( primeFactors( 10 ) );
console.log( primeFactors( 100 ) );
console.log( primeFactors( 9 ) );
console.log( primeFactors( 1 ) );
console.log( primeFactors( 0 ) );
console.log( primeFactors( 30 ) );
