// We are given an array of unique numbers and a number
// we need to find two elements in the array when added
// will be equal to given number
// There will be only one pair that will be equal to the
// given number.

let arr = [24, 14, 30, 16, -3, -1, 7, -2, 1, 2, 8, 21, 15]
let targetValue = 10;

const getPair = (arr, target) => {
    if( !arr || !target ) return 'Enter both values.';
    if ( arr.length < 2 ) return 'Length should be atleast 2.';
    if ( typeof target !== 'number' ) return 'The target value should be a number.';
    
    let sortedArray = arr.sort((a, b) => a - b);
    let x = 0,
        y = arr.length - 1,
        leftPoint = arr[x],
        rightPoint = arr[y];
    // console.log( sortedArray, leftPoint, rightPoint );

    while ( leftPoint <= rightPoint) {

        if ( leftPoint + rightPoint === target ) {
            return [leftPoint, rightPoint];
        }

        if ( leftPoint + rightPoint < target ) {
            leftPoint = arr[x++];
        } else {
            rightPoint = arr[y--];
        }
        console.log(leftPoint, rightPoint);
    }
    return 'Not found';
}

console.log(getPair(arr, targetValue));
console.log(getPair([], targetValue));
console.log(getPair(arr));
console.log(getPair(arr, 'a'));

let arr2 = [24, 14, 30, 16, -3, -1, 7, -2, 1, 2, 8, 21, 15]
let targetValue2 = 20;
console.log(getPair(arr2, targetValue2));