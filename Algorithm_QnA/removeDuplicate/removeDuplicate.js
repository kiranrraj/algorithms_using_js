const removeDuplicate = ( arr ) => {
    let elements = {}, element
        noDuplicateArray = [];
  
    for( let i =0; i<arr.length; i++ ) {
        element = arr[i];
        if( !elements[ element ] ) {
            noDuplicateArray.push( element );
            elements[ element ] = true;
        }
    }
    return `${arr} without duplicates: ${noDuplicateArray}`;
}

console.log( removeDuplicate( [2,2,4,5,6,7,5,4,3] ) );
console.log( removeDuplicate( [2,2,4,5,6,7,5,4,3,0,0,9,9,9] ) );