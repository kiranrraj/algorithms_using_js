// Author       : Kiran Raj R
// Creation Date: 16/01/2022
// Language Used: JavaScript
// Description  : Insertion Sort Algorithm 


function insertionSort(array){

    let currentElement,pos, length = array.length;

    // First element is considered as part of the sorted section so "i" must 
    // start from one, not zero.
    for(let i = 1; i<length; i++){
        let j;
        // Set the second element(first element of unsorted section) as current element and 
        // to keep track of the first element in the unsorted section during each loop.
        currentElement = array[i];

        // "j" should be less than one as we are looking at the sorted section to 
        // inserted the new element and "j" must be greater than or equal to zero. 
        // Also the loop will exit if array[j] has a value greater than currentElement 
        for(j = i-1; j>=0 && array[j] > currentElement; j--){
         
            // Copy the value, which is required to creating a spot to fill the current element 
            array[j + 1] = array[j];
        }
        // console.log("++",array, j);

        // This line sets the current value in right position in sorted section.
        array[j + 1] = currentElement;
        // console.log(array);
    }
    return array;
}


console.log(insertionSort([3,4,2,1,7]));