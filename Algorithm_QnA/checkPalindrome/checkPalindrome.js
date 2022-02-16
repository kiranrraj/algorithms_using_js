const isPalindrome = ( userString ) => {
    let str = userString.trim();
    if ( str === undefined || str.length < 1 ) return 'Enter a valid string.';
    let len = str.length;

    if( len < 2 ) return `Enter a string with length more than 1.` 

    for( let i = 0; i < len/2; i++ ) {
        if ( str[ i ] !== str[ len-1-i ] ) return `${str} is not a palindrome`;
    }
    return `${str} is a palindrome`;
}

console.log( isPalindrome( 'malayalam' ) );
console.log( isPalindrome( 'mom' ) );
console.log( isPalindrome( 'malayali' ) );
console.log( isPalindrome( 'Wookey' ) );
console.log( isPalindrome( '' ) );
console.log( isPalindrome( '   ' ) );
console.log( isPalindrome( '  k ' ) );