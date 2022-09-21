/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let result = [];
    
    for(let i = 0; i < queries.length; i++){
        //queries[i][0] -> val;
        //queries[i][1] -> index;
        let val = queries[i][0];
        let index = queries[i][1];
        let sum = 0;
        
        nums[index] = nums[index] + val;
        
        for(let j = 0; j < nums.length; j++){
            if(nums[j] % 2 === 0){
                sum = sum + nums[j];
            }    
        }
        result.push(sum);
    }
    return result;
};


