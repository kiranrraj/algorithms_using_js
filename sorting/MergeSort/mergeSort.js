// Author       : Kiran Raj R
// Creation Date: 17/01/2022
// Language Used: JavaScript
// Description  : Merge Sort Algorithm 

// This function takes two array compare it an return the sorted array
function merge(array1, array2){
    let result = [];
    let i = 0, j = 0;

    // Compare array elements until there is elements in both array1 and array2
    while(i < array1.length && j < array2.length){

        // Compare the elements of array1 with array2
        if(array1[i] < array2[j]){

            // If array1's element is lowest push the value to the result array
            result.push(array1[i]);
            i++;
        } else{

            // If array2's element is lowest push the value to the result array
            result.push(array2[j]);
            j++
        }
    }

    // If there are any elements still in array1 push the elements to the end
    // of result array
    while(i < array1.length){
        result.push(array1[i]);
        i++;
    }

    // If there are any elements still in array2 push the elements to the end
    // of result array
    while(j < array2.length){
        result.push(array2[j]);
        j++;
    }

    return result;
}

function mergeSort(array){

    // If array's length is 1 or less than 1 just return array.
    if(array.length <= 1) return array;

    // Find the middle of array's length
    let middle = Math.floor(array.length / 2);
    
    // Slice the array which contain elements from 0 to the element before the middle
    let left = mergeSort(array.slice(0, middle));
    
    // Slice the array which contaain elements from middle to the last element.
    let right = mergeSort(array.slice(middle));

    return merge(left, right);
}

console.log(mergeSort([1,102,390,4,56,34,95,56,6]));
// Output : [ 1, 4, 6, 34, 56, 56, 95, 102, 390 ]

console.log(mergeSort([11,2,190,4,56,34,15,506,6]));
// Output : [ 2,  4, 6,  11, 15, 34, 56, 190, 506 ]