// 121. Best Time to Buy and Sell Stock : You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


let prices = [7, 6, 4, 3, 1];

let minPrice = prices[0];
let maxProfit = 0;

for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
        minPrice = prices[i]; // Update minimum price
    } else {
        let profit = prices[i] - minPrice;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
}


console.log(maxProfit); // Output: 0 (since prices always go down)
