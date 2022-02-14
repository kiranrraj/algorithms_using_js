const firstNonRepeatChar = ( str ) => {

    if (str == undefined || str == "") return "Error: Please enter a string";
    if (str.length == 1) return `First non repeating alphabet is: ${str}`;

    let len = str.length, char, charCount = {};

    for( let i = 0; i < len; i++ ) {
      char = str[ i ];
      if( charCount[char] ) {
        charCount[ char ]++;
      } else
        charCount[ char ] = 1;
    }

    for( let j in charCount ) {
      if( charCount[ j ] == 1 )
         return `First non repeating alphabet is: ${j}`;
    }

    if( charCount !== {} ) {
        for( let alphabet in charCount ) {
            charCount [ alphabet ] > 1 ? flag = false : flag = true;
        }

        if( !flag ) return "No non repeating alphabets found."
    }

  } 

console.log( firstNonRepeatChar( 'kiran' ) );
console.log( firstNonRepeatChar( 'mmmm' ) );
console.log( firstNonRepeatChar( 'eeeel' ) );
console.log( firstNonRepeatChar( 'eeeelllddc' ) );
console.log( firstNonRepeatChar( 'l' ) );
console.log( firstNonRepeatChar( '' ) );
console.log( firstNonRepeatChar() );