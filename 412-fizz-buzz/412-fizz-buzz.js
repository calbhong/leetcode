/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let output = [];
    for (let i = 1; i <= n; i++){
        let temp = '';
        if(i % 3 === 0){
            temp += 'Fizz';
        }
        if(i % 5 === 0){
           temp += 'Buzz';
        }
        output.push(temp.length ? temp : i.toString());
    }
    return output;
};