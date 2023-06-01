var mealCost = Number(prompt("Cost of meal (ex. 104.38)"));
var tip = Number(prompt("Tip % as a decimal (ex. 0.20 = 20%)"));
var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;
var numOfPeople = Number(prompt("Amount of people (minimum of 1)"));

console.log(
  `Your meal cost is $${mealCost}, and with tip, it comes to $${total.toFixed(
    2
  )}. Your share is $${(total / numOfPeople).toFixed(
    2
  )}. Hope it was delicious!`
);
