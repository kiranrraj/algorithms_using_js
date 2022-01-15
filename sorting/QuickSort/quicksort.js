// Author       : Kiran Raj R
// Creation Date: 15/01/2022
// Language Used: JavaScript
// Description  : Quick Sort Algorithm 

// To swap two elements
function swapElements(array, leftIndex, rightIndex){
    let temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}


function arrayPartition(array, left, right){
    // find the pivot element
    let pivot = array[Math.floor((right + left)/2)];
    let start = left;
    let end = right;

    while(start <= end){
        while(array[start] < pivot){
            start++;
        }

        while(array[end] > pivot){
            end--;
        }

        if(start <= end){
            swapElements(array, start, end);
            start++;
            end--;
        }
    }
    return start;
}

function quickSort(array, left, right){
    let pivot;
    if(array.length > 1){
        pivot = arrayPartition(array, left, right);

        if(left < pivot-1){
            quickSort(array, left, pivot - 1);
        }

        if(pivot < right){
            quickSort(array, pivot, right);
        }
    }
    return array;
}

console.log(quickSort([3,6,5,3,2,1,8,6,7], 0, 8));