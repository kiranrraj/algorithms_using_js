// Author       : Kiran Raj R
// Creation Date: 14/01/2022
// Language Used: JavaScript
// Description  : Shell Sort Algorithm 

function shellSort( arr ) {

    let length = arr.length;
    let  interval = length / 2;

    while ( interval > 0 ) {

        for ( i = interval; i < length; i++ ) {
            let  j = i;
            let  temp = arr[ i ];
    
            while ( j >= interval && arr[ j-interval ] > temp ) {
                arr[ j ] = arr[ j-interval ];
                j = j - interval;
            }
    
            arr[ j ] = temp;
        }
    
        if ( interval == 2 ) {
            interval = 1;
        } else {
            interval = parseInt( interval*5 / 11 );
        }
    }
  return arr;
}

let arr1 = [ 23, 45, 20, 14, 90, 50, 33, 39, 16, 5];
console.log( shellSort( arr1 ) );