var mealCost = 104.38;
var tip = 0.2;
var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;
var numOfPeople = 2;

console.log(
  `Your meal cost is $${mealCost}, and with tip, it comes to $${total.toFixed(
    2
  )}. Your share is $${(total / numOfPeople).toFixed(
    2
  )}. Hope it was delicious!`
);
