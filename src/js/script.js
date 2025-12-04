let userName = "Andrew" 
let userAge = 21
 
//console.log("Text", variable) allows you to write to the console 
 
console.log("User Name", userName) 
console.log("User Age", userAge)
console.log("User Name:", userName);
console.log("User Age:", userAge);

let userPets = ["Cat", "Dog"];
let userBalance = 1200;
const EVERY_DAY_SPENDING = 15.3;
let everyDaySpendingPerPet = 6;
let daysSurvived = 0;

console.log("User Pets:", userPets);
console.log("User Balance:", userBalance);
console.log("Every Day Spending Per Pet:", everyDaySpendingPerPet);
while (userBalance > 0) { 
 let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length 
 userBalance -= spending 
 daysSurvived++ 
} 
 
console.log("User have sufficient money for " + daysSurvived + " days") 
userPets.push("Hamster");
userPets.pop();

