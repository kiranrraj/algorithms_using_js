
// Author       : Kiran Raj R
// Creation Date: 15/01/2022
// Language Used: JavaScript
// Description  : Selection Sort Algorithm 

function selectionSort(array){

    let length = array.length;
    let minStart;

    // We need to find the "position" of the lowest element and swap it with the 
    // beginning of the array.
    for(let i=0; i<length; i++){

        // On the first loop, set the first position as minStart, as the loop ends 
        // the lowest value is added to the start of the array. The lowest element 
        // in the next loop will be greater than the current lowest element, so the 
        // position of next lowest element will be next position of the right of the 
        // current lowest element and due to this the value of minStart must increase 
        // by 1 after each loop, which is equal to the value of i
        minStart = i;

        // This loop is to find the lowest value 
        for(let j=i+1; j<length; j++){

            // Check for the minimum, by comparing with the current minimun
            if(array[minStart] > array[j]) {

                // get the position of the minimum 
                minStart = j;
            }
        }
        // Swap the current lowest to the first position and the value in the 
        // first position is moved to the current lowest value's position
        [ array[i], array[minStart] ] = [ array[minStart], array[i] ];

        // console.log(array);
    }
    return array;
}

console.log(selectionSort([0,5,6,4,3,7,2,8,1,0]));
console.log(selectionSort([10,5,60,4,35,7,2,8,11,20]));