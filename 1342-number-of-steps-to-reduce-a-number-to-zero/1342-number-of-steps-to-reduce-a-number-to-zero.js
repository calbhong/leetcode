/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count = 0;
    while(num > 0){
        if(num % 2 === 0){
            count++;
            num /= 2;
        } else{
            count++;
            num--;
        }
    }
    return count;
};