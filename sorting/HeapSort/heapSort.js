// Author       : Kiran Raj R
// Creation Date: 14/02/2022
// Language Used: JavaScript
// Description  : Heap Sort Algorithm 

let length;

const swap_element = ( arr, pos1, pos2 ) => {
    [ arr[ pos1 ], arr[ pos2 ] ] = [ arr[ pos2 ], arr[ pos1 ] ];
}

const heap_root = (arr, i) => {
    let left = 2 * i + 1, right = 2 * i + 2, max = i;

    if ( left < length && arr[left] > arr[max] ) max = left;

    if ( right < length && arr[right] > arr[max] ) max = right;
    
    if ( max != i ) {
        swap_element(arr, i, max);
        heap_root(arr, max);
    }
}


function heapSort(arr) {
    
    length = arr.length;

    for ( let i = Math.floor( length / 2 ); i >= 0; i -= 1 )      {
        heap_root(arr, i);
    }

    for ( let j = arr.length - 1; j > 0; j-- ) {
        swap_element(arr, 0, j);
        length--;
        heap_root(arr, 0);
    }
}


let arr1 = [ 23, 45, 20, 14, 90, 50, 33, 39, 16, 5];
heapSort( arr1 ); 
console.log( arr1 );