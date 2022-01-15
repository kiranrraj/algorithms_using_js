// Author       : Kiran Raj R
// Creation Date: 15/01/2022
// Language Used: JavaScript
// Description  : Jump Search Algorithm 

const { dir } = require("console");


function jumpSearch(array, valueToSearch){

    let start = 0, end = 0;
    let length = array.length;

    // Calculate the jump block size, 
    // optimal jump size is square root of length
    let step = Math.floor(Math.sqrt(length));
    // first block starts from 0 to step
    end = step;

    // Math.min is used to find minimum value in set of provided value If there
    // are 11 elements and the step is 3, then the last step with in the limit
    // is 9, there are elements at position 10 and 11, in order to check those
    // values we use Math.min so as even if the next step after 9 is 12 ( where 
    // 12 exceeds the limit, cause error) any elements between 9 and 12 will be checked 
    while(array[Math.min(end, length)-1] < valueToSearch){

        // console.log(start, end);
        // increment the step start value;
        start = end;
        // increments the step end value;
        end +=step;
        // If the start value go beyond or equal to length, that means the
        // element is not found.
        if(start >= length){
            return -1;
        }
    }

    while(array[start] < valueToSearch){
        // console.log(start, end);

        // Since array[start] is less than the valueToSearch, start is incremented 
        // before any other operations;
        start++;
        
        // Start cannot be more than step or end of the array
        if(start == Math.min(end, length)){
            return -1
        }
        
    }

    if(array[start] == valueToSearch){
        return start
    } else{
        return -1;
    }


}


function display(array, valueToSearch){
    let result = jumpSearch(array, valueToSearch);
    if(result === -1){
        console.log(`Value ${valueToSearch} not found in ${array}`);
    }else {
        console.log(`Value ${valueToSearch} found at index ${result}`);
    }
}

display([1,2,3,4,5,6,7,8], 3);
display([1,2,3,4,5,6,7,8], 8);
display([1,2,3,4,5,6,7,8], 9);
display([1,2,3,4,5,6,7,8], 0);