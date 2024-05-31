// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

function getLength(numbers) {
  return numbers.length;
}

function getSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function getMean(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / (numbers.length - 1);
}

function getMin(numbers) {
  // let min = Math.min(...numbers);
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
  }
  return min;
}

function getMax(numbers) {
  // return Math.max(...numbers);
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) max = numbers[i];
  }
  return max;
}

function getRange(numbers) {
  return Math.max(...numbers) - Math.min(...numbers);
  // return getMax(numbers) - getMin(numbers);
}

function getEvens(numbers) {
  let evens = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) evens.push(numbers[i]);
  }
  return evens;
}

function getOdds(numbers) {
  let odds = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) odds.push(numbers[i]);
  }
  return odds;
}
