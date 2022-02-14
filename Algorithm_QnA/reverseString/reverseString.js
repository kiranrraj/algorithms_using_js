const reverseString = (str) => {

    let revArr = [], strLen = 0;
    str = str.trim();
    if (str == undefined || str == "") return "Error: Please enter a string";
    if (str.length == 1) return str;

    for (let i = str.length - 1; i >= 0; i--) {
        revArr.push(str[i]);
        strLen++;
    }

    return revArr.join('');

}

console.log(reverseString('kiran raj r'));
console.log(reverseString('  '));
console.log(reverseString('r'));
console.log(reverseString('   r'));
console.log(reverseString('roney'));
