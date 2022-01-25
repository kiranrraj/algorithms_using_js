// Author       : Kiran Raj R
// Creation Date: 25/01/2022
// Language Used: JavaScript
// Description  : Binary Search Algorithm --Using recursion.


let binarySearch = (array, valueToSearch, leftIndex = 0, rightIndex = array.length-1) =>{
    if(leftIndex > rightIndex) return -1;

    let middlePoint = Math.floor((parseInt(leftIndex) + parseInt(rightIndex)) / 2);
    if(array[middlePoint] === valueToSearch) return middlePoint;

    if(valueToSearch > array[middlePoint]) return binarySearch(
        array, valueToSearch, middlePoint + 1, rightIndex);
    return binarySearch(array, valueToSearch, leftIndex, middlePoint - 1);
}

console.log(binarySearch([1,2,3,4,5,6,7,8], 8));
console.log(binarySearch([1,2,3,4,5,6,7,8], 18));
console.log(binarySearch([1,2,3,4,5,6,7,8], 2));
console.log(binarySearch([1,2,3,4,5,6,7,8], 13));