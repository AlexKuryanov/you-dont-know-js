// find out how many phones we can buy
const TAX_RATE = 0.02;
let phonePrice = prompt('Enter phone price:');
let accessoryPrice = prompt('Enter accessory price:');
let bankBalance = prompt("Enter your bank balance:");
//let bankBalance = 500;
let sum = 0;
let counter = 0;

// leave some money for a taxi home
let spendingLimit = Number(bankBalance) - Number(bankBalance) * 0.1;

// calculate the total price with tax
function calculateTax(sum) {  
  sum = sum * TAX_RATE;
  return sum;
}

// format the sum to string with "$"
function formatSum(sum) {
  return '$' + sum.toFixed(2);
}

// do our shopping
while(sum < Number(bankBalance)) {
  sum = sum + Number(phonePrice);
  counter++;
  if(sum < spendingLimit) {
    sum = sum + Number(accessoryPrice);
  } else {
    sum = sum - Number(phonePrice);
    counter--;
    break;
  }
}

sum = sum + calculateTax(sum);

console.log(`Your balance is: ${Number(bankBalance)}$`);
console.log(`Phone price is: ${phonePrice}`);
console.log(`Total price with tax is: ${formatSum(sum)}`);

if(sum < Number(bankBalance)) {
  console.log(`Your purchase on: ${formatSum(sum)}. You can buy ${counter} phones with accessories`);
} else {
  console.log('You cannot afford this purchase');
}