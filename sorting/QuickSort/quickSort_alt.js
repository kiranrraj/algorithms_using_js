// Author       : Kiran Raj R
// Creation Date: 14/02/2022
// Language Used: JavaScript
// Description  : Quick Sort Algorithm 

function quick_Sort( array ) {
	if ( array.length <= 1 ) { 
		return array;
	} else {

		let left = [], right = [], newArray = [];
		let pivot = array.pop();
		let length = array.length;

		for ( let i = 0; i < length; i++ ) {
			if ( array[i] <= pivot ) {
				left.push( array[i] );
			} else {
				right.push( array[i] );
			}
		}

		return newArray.concat( quick_Sort( left ), pivot, quick_Sort( right ) );
	} 
}

let arr1 = [3, 56, 2, 90, 40, 32, 12, 5, 34];
console.log( quick_Sort( arr1 ) );