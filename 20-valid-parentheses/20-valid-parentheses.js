/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var map = {'(':')' , '[':']' , '{':'}'};
    
    for(let i = 0; i < s.length; i++){
        if(stack.length > 0 && map[stack[stack.length - 1]] === s[i]){
            stack.pop();
        } else{
            stack.push(s[i]);
        }
    }
    
    return stack.length === 0;
};