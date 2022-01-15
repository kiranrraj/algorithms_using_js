// Author       : Kiran Raj R
// Creation Date: 15/01/2022
// Language Used: JavaScript
// Description  : Binary Search Algorithm


function binarySearch(array, valueToSearch){
    let min = 0;
    let max = array.length-1;
    let mid = Math.floor((min+max)/2);
    // min <= max is needed to exit the llop if the element is not in the array
    while(min <= max){
        if(array[mid] === valueToSearch){
            return mid;
        }else if(array[mid] < valueToSearch){
            // (array[mid] < valueToSearch): Since the valueToSearch is greater than  
            // the current middle value we can say that the valueToSearch will not 
            // be present till the current middle value, so we update the min value.
            min = mid + 1;
        } else{
            // (array[mid] > valueToSearch): Since the valueToSearch is less than the 
            // current middle value we can say that the valueToSearch will only be in 
            // between the first value and the value before the current middle value
            // so we update the max value.
            max = mid - 1;
        }
        mid = Math.floor((min+max)/2);
    }
    return -1;
}


function display(array, valueToSearch){
    let result = binarySearch(array, valueToSearch);
    if(result === -1){
        console.log(`Value ${valueToSearch} not found in ${array}`);
    }else {
        console.log(`Value ${valueToSearch} found at index ${result}`);
    }
}

display([1,2,3,4,5,6,7,8], 3);
display([1,2,3,4,5,6,7,8], 8);
display([1,2,3,4,5,6,7,8], 9);
display([1,2,3,4,5,6,7,8], 13);