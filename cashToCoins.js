const dollarAmountInput = 12.10;
var dollarAmount = dollarAmountInput * 100;

const coins = {
    pennies: 1,
    nickles: 5,
    dimes: 10,
    quarters: 25
}
// Converting 12.10 to coins
let convertedQuarters = Math.floor(dollarAmount/coins.quarters);//48

// Finding how many quarters are in dollarAmount
let quartersInAmount = convertedQuarters;

let remainingAmount = dollarAmount  - (quartersInAmount * coins.quarters);

let dimesInAmount = Math.floor(remainingAmount / coins.dimes);

remainingAmount = remainingAmount - (dimesInAmount * coins.dimes);

let nicklesInAmount = Math.floor(remainingAmount / coins.nickles);

remainingAmount = remainingAmount - (nicklesInAmount * coins.nickles);

let penniesInAmount = Math.floor(remainingAmount / coins.pennies);

remainingAmount = remainingAmount - (penniesInAmount * coins.pennies);


const piggyBank = {
    pennies: penniesInAmount,
    nickles: nicklesInAmount,
    dimes: dimesInAmount,
    quarters: quartersInAmount 
}

console.log(piggyBank)