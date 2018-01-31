const dollarAmount = 12.18;

const coins = {
    pennies: .01,
    nickles: .05,
    dimes: .10,
    quarters: .25
}
// Converting 12.10 to coins
let convertedPennies = Math.floor(dollarAmount/coins.pennies);//1210
let convertedNickles = Math.floor(dollarAmount/coins.nickles);//241
let convertedDimes = Math.floor(dollarAmount/coins.dimes);//120
let convertedQuarters = Math.floor(dollarAmount/coins.quarters);//48

// Finding how many quarters are in dollarAmount
let quartersInAmount = convertedQuarters;

let remainingAmount = dollarAmount - (quartersInAmount * coins.quarters);

    dimesInAmount = Math.floor(remainingAmount / coins.dimes);

    remainingAmount = remainingAmount - (dimesInAmount * coins.dimes);

    nicklesInAmount = Math.floor(remainingAmount / coins.nickles);

    remainingAmount = remainingAmount - (nicklesInAmount * coins.nickles);

    penniesInAmount = Math.round(remainingAmount / coins.pennies);

    remainingAmount = remainingAmount - (penniesInAmount * coins.pennies);


const piggyBank = {
    pennies: penniesInAmount,
    nickles: nicklesInAmount,
    dimes: dimesInAmount,
    quarters: quartersInAmount 
}

console.log(piggyBank)