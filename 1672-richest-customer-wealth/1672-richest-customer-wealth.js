/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var maxWealth = 0;
    
    for (let i = 0; i < accounts.length; i++){
        let temp = 0;
        for(let j = 0; j < accounts[i].length; j++){
            temp = temp + accounts[i][j];
        }
        maxWealth = Math.max(maxWealth,temp);
        /*if(temp > maxWealth){
            maxWealth = temp;
        }*/
    }
    return maxWealth;
};
//O(n x m)
//O(1)