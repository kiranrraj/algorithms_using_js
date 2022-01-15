// Author       : Kiran Raj R
// Creation Date: 15/01/2022
// Language Used: JavaScript
// Description  : Linear Search Algorithm


function linearSearch(array, valueToSearch){
    let length =  array.length;
    for(let i=0; i< length; i++){
        if(array[i] === valueToSearch){
            return i;
        }
    }
    return -1;
}


function display(array, valueToSearch){
    let result = linearSearch(array, valueToSearch);
    if(result === -1){
        console.log(`Value ${valueToSearch} not found in ${array}`);
    }else {
        console.log(`Value ${valueToSearch} found at index ${result}`);
    }
}

display([1,2,3,4,5,6,7,8], 3);
display([1,2,3,4,5,6,7,8], 9);