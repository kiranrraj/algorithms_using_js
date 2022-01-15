// Author       : Kiran Raj R
// Creation Date: 15/01/2022
// Language Used: JavaScript
// Description  : Bubble Sort Algorithm 


function bubbleSort(array){
    let length = array.length;
    for(let i=0; i<length; i++){
        for(let j=0; j<length-(i+1); j++){
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
        console.log(array);
    }
    console.log(array);
}

bubbleSort([34,12,5,78,9,1]);
// bubbleSort([1,12,5,78,9,10,34,0,-2]);