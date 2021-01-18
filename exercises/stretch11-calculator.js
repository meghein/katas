// Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.

const calculateChange = function(total, cash) {
  let diff = cash - total;
  let element = {}, change = [];
  if (diff >= 2000) {
    element.twentyDollar = Math.floor(diff / 2000);
    diff = diff % 2000;
  }
  if (diff < 2000 && diff >= 1000) {
    element.tenDollar = Math.floor(diff / 1000);
    diff = diff % 1000;
  }
  if (diff < 1000 && diff >= 500) {
    element.fiveDollar = Math.floor(diff / 500);
    diff = diff % 500;
  }
  if (diff < 500 && diff >= 200) {
    element.twoDollar = Math.floor(diff / 200);
    diff = diff % 200;
  }
  if (diff < 200 && diff >= 100) {
    element.oneDollar = Math.floor(diff / 100);
    diff = diff % 100;
  }
  if (diff < 100 && diff >= 25) {
    element.quarter = Math.floor(diff / 25);
    diff = diff % 25;
  }
  if (diff < 25 && diff >= 10) {
    element.dime = Math.floor(diff / 10);
    diff = diff % 10;
  }
  if (diff < 10 && diff >= 5) {
    element.nickle = Math.floor(diff / 5);
    diff = diff % 5;
  }
  if (diff < 5 && diff >= 1) {
    element.penny = Math.floor(diff / 1);
    diff = diff % 1;
  }
  change.push(element)
  return change
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(500, 1000));

