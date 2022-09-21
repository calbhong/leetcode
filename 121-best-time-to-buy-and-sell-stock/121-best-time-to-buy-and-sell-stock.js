/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    /*
    let maxProf = 0;
    for(let buy = 0; buy < prices.length; buy++){
        for(let sell = buy + 1; sell < prices.length; sell++){
            let profit = prices[sell] - prices[buy];
            maxProf = Math.max(maxProf, profit)
        }
    }
    return maxProf
    */
    
    let maxProfit = 0;
    let minPrice = prices[0];
    for(let sell = 0; sell < prices.length; sell++){
        let sellPrice = prices[sell];
        let profit = sellPrice - minPrice;
        maxProfit = Math.max(maxProfit, profit);
        if(sellPrice < minPrice){
            minPrice = sellPrice;
        }
    }
    
    return maxProfit;
    
    
};