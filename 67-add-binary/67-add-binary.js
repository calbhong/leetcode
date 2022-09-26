/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = "";
    
    let i = a.length - 1;
    let j = b.length - 1;
    let temp = 0;
    
    while(i >= 0 || j >= 0){
        let sum = temp;
        if(i >= 0){
            sum += a[i--] - '0';
        }
        if(j >= 0){
            sum += b[j--] - '0';
        }
        result = sum % 2 + result;
        temp = parseInt(sum/2);
    }
    if(temp > 0){
        result = 1 + result;
    }
    return result;
    
};