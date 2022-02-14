// Author       : Kiran Raj R
// Creation Date: 17/01/2022
// Language Used: JavaScript
// Description  : Quick Sort Algorithm 


function getPivot(arr, start = 0, end = arr.length-1){

    // Set the first element as the pivot element.
    let pivot = arr[start];

    // Set the swap index to start. Swap index keep track of how many
    // elements are less than the pivot element.
    let swapIndex = start;

    // Loop to check each element, whether the elemenet is greater than 
    // pivot element, the loop sarts from second element as first element
    // is the pivot element.
    for(let i = start + 1; i < arr.length; i++){

        // if the element is greater than pivot element 
        if(pivot > arr[i]){

            // increment the swap index by 1.
            swapIndex++;

            // Swap the element with the element in the swap index
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }
    // Swap the pivot element(element at the start position) to the
    // element at the swap index. So that all elements to the left
    // of the pivot element will be less than the pivot element and
    // all the element to the right will be higher than the pivot element.
    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];
    return swapIndex;
}

// Main function
function quickSort(array, left = 0, right = array.length-1){

    // The condition fails when left = right, i.e. when the array is
    // left with only one element.
    if( left < right){ 

        // Get the pivot index
        let pivot = getPivot(array, left, right);

        // Recursive call to quick sort the left side element.
        quickSort(array, left, pivot - 1);

        // Recursive call to quick sort the right side element.
        quickSort(array, pivot + 1, right);
 
    }
    return array;
}

console.log(quickSort([3,-6,5,-3,2,21,8,16,7]));
// [ -6, -3,  2,  3, 5, 7,  8, 16, 21 ]
console.log(quickSort([12,6,2,13,2,-21,44,1,7]));
// [ -21,  1,  2,  2, 6, 7, 12, 13, 44 ]