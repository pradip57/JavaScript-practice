var userInput;
var filteredNumber;

do{
    userInput = prompt("Enter any number");
    filteredNumber = parseInt(userInput);
    
   
}
while(isNaN(filteredNumber)||filteredNumber.toString().length!=10)

console.log("You have entered valid number. Thank You.");

// filteredNumber = parseInt(userInput);
// console.log(filteredNumber);
// let filteredNumberLength = filteredNumber.toString().length;
// console.log(filteredNumberLength);