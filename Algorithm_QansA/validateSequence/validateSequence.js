// We are given two arrays, array A and array B we need to check whether
// array B is a sub set of array A, the order of array b should be same 
// as that of array A, i.e. [1, 2, 3, 4, 5] [1, 3, 4] array B is subset
// of array A, but [1, 4, 3,] is not a sub set of array A due to order of
// elements in the sub set.

const validateSubArray = (arr, subArr) => {
    if( !arr || !subArr) return 'Array and sub array should be provided.';
    let arrlength = arr.length,
        subArrLength = subArr.length,
        arrIndex = 0,
        subArrIndex = 0;

    if (arrlength === 0 || subArrLength === 0) return 'Array should not be empty.';
    if (arrlength < subArrLength) return 'Length of array should be greater than length of sub array.';

    while (subArrIndex < subArrLength) {
        for (arrIndex; arrIndex < arrlength; arrIndex++) {

            if (arr[arrIndex] === subArr[subArrIndex]) {
                console.log(arr[arrIndex], subArr[subArrIndex]);
                subArrIndex++;
                if (subArrIndex === subArrLength) return 'String validated';
            }

            if (arrIndex === arrlength - 1) return 'String could not be validated';
        }
    }
    return 'Not Found';
}


let array1 = [-3, 2, 10, 5, -1, 0, 7, 3, 9, 6, 23, 24, 67, 33, 11],
    subArray1 = [2, -1, 9, 0];
console.log(validateSubArray(array1, subArray1));

let array2 = [-3, 2, 10, 5, -1, 0, 7, 3, 9, 6, 23, 24, 67, 33, 11],
    subArray2 = [2, -1, 9, 67];
console.log(validateSubArray(array2, subArray2));

let array3 = [-3, 2, 10, 5, -1, 0, 7, 3, 9, 6, 23, 24, 67, 33, 11],
    subArray3 = [2, -1, 67, 9];
console.log(validateSubArray(array3, subArray3));

console.log(validateSubArray(array3, []));
console.log(validateSubArray([], subArray3));
console.log(validateSubArray( subArray3));