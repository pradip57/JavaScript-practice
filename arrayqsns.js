//write a function that takes the array of strings and returns a new string where  letters of string are capitalized

const fruits = ["apple", "banana", "cherry", "mango", "orange"];

const fFruits = fruits.map((currentValue) => {
  return currentValue.toUpperCase();
});

console.log(fFruits);

//using map method write a function that takes an array of numbers and return sa new array where each number is squared but only if its an even number

const numbs = [3, 2, 4, 1, 7, 8, 9];

const finalNums = numbs.map((currentElem) => {
  if (currentElem % 2 == 0) {
    currentElem = currentElem * currentElem;
  }
  return currentElem;
});

console.log(finalNums);

//using the map method write a functions that takes the array of names and retuns a new array where each name is prefix with Mr.

const users = ["Pradip", "Ram", "Shayam", "Hari"];

const result = users.map((currElem) => {
  return (currElem = "Mr." + currElem);
});

console.log(result);
