// Author       : Kiran Raj R
// Creation Date: 15/01/2022
// Language Used: JavaScript
// Description  : Bubble Sort Algorithm Optimized with flag


function bubbleSort(array){
    let length = array.length;
    
    for(let i=length; i>0; i--){
        let noSwap = true;
        for(let j=0; j<i-1; j++){
            if(array[j]>array[j+1]){
                [array[j], array[j+1]] = [array[j+1],array[j]];
                noSwap = false;
            }
        }
        if(noSwap) break;
        console.log(array);
    }
    console.log(array);
}

bubbleSort([6,5,1,2,3,4]);
