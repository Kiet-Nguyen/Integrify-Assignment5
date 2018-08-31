/**
 * EXERCISE 1
 **/

/***** Part 1 *****/
let company = 'Integrify Academy';
// 1. a)
console.log(company);
// 1. b)
console.log(company.length);
// 1. c)
const comUpperCase = company.toUpperCase();
console.log(comUpperCase);
// 1. d)
const comLowerCase = company.toLowerCase();
console.log(comLowerCase);
// 1. e)
const companyArr = company.split(' ');
// slice()
const sliceMethod = companyArr.slice(0, 1);
console.log(sliceMethod);
// substring()
const subStrMethod = company.substring(0, 9);
console.log(subStrMethod);
// 1. f)
// String.prototype.includes()
const testIncludesStr = company.includes('Academy');
console.log(testIncludesStr);
// TypedArray.prototype.includes()
const testIncludesArr = companyArr.includes('Academy');
console.log(testIncludesArr);
// 1. g)
console.log(companyArr);
// 1. h)
let replaceStr = /Integrify/gi;
const newCompany = company.replace(replaceStr, 'Microsoft');
console.log(newCompany);
// 1. i)
const character = company.charAt(10);
console.log(character);
// 1. j)
const charCode = company.charCodeAt(10);
console.log(charCode);
// 1. k)
console.log(company.indexOf('e'));
// 1. l)
console.log(company.lastIndexOf('e'));
// 1. m)
const trimStr = ' Integrify Academy ';
console.log(trimStr.trim());
// 1. n)
console.log(company.startsWith('I'));
// 1. o)
console.log(company.endsWith('my'));
// 1. p)
console.log(company.match('a'));

// 2.
const myAge = 25;
const yourAge = 30;
document
  .querySelector('.my-age')
  .insertAdjacentHTML('afterbegin', `I am ${myAge} years old.`);
document
  .querySelector('.your-age')
  .insertAdjacentHTML('afterbegin', `You are ${yourAge} years old.`);

// 3.
/*
let userInput = prompt('Enter your age:');
if (userInput >= 18) {
  alert('You are old enough to drive');
  document
    .querySelector('.part-3')
    .insertAdjacentHTML('afterend', `<p>You are old enough to drive.</p>`);
} else {
  alert(`You are left with ${18 - userInput} years to drive.`);
  document
    .querySelector('.part-3')
    .insertAdjacentHTML(
      'afterend',
      `<p>You are left with ${18 - userInput} years to drive.</p>`
    );
}
*/

// 4.
/*
if (userInput > myAge) {
  alert(`You are ${userInput - myAge} years older than me!`);
  document
    .querySelector('.part-4')
    .insertAdjacentHTML(
      'afterend',
      `<p>You are ${userInput - myAge} years older than me 	&#9786;</p>`
    );
} else if (userInput < myAge) {
  alert(`You are ${myAge - userInput} years younger than me!`);
  document
    .querySelector('.part-4')
    .insertAdjacentHTML(
      'afterend',
      `<p>You are ${myAge - userInput} years younger than me!</p>`
    );
} else if (parseInt(userInput) === myAge) {
  alert('We are at the same age');
  document
    .querySelector('.part-4')
    .insertAdjacentHTML('afterend', `<p>We are at the same age</p>`);
}
*/

// 5.
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'IBM',
  'Apple',
  'Oracle',
  'Amazon'
];
// 5. a)
console.log(itCompanies);
// 5. b)
const numOfCompanies = itCompanies.length;
console.log(numOfCompanies);
// 5. c)
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
// 5. d)
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
// 5. e)
console.log(
  `${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${
    itCompanies[3]
  }, ${itCompanies[4]}, ${itCompanies[5]} and ${
    itCompanies[6]
  } are big IT companies.`
);
// 5. f)
console.log(itCompanies.sort());
console.log(itCompanies.reverse());

// 6.
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
  console.log(itCompanies[i].toUpperCase());
}

// 7. Print items in an array
function printArray(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      str += `and ${arr[arr.length - 1]}.`;
    } else {
      str += `${arr[i]}, `;
    }
  }
  console.log(str);
}
printArray(itCompanies);

// 8. Sum of all Even numbers in a given range
function sumOfEven(num) {
  let sum = 0;
  for (let i = 2; i <= num; i += 2) {
    sum += i;
  }
  return sum;
}
console.log(`Sum of all even numbers is ${sumOfEven(5)}`);

// 9. Counts number of Odd numbers and Even numbers
function evensAndOdds(num) {
  let numOfOdds = 0;
  let numOfEvens = 0;
  for (let i = 0; i <= num; i++) {
    if (i === 1 || i % 2 !== 0) {
      numOfOdds += 1;
    } else if (i % 2 === 0) {
      numOfEvens += 1;
    }
  }
  console.log(`The number of evens are ${numOfEvens}.`);
  console.log(`The number of odds are ${numOfOdds}.`);
}
evensAndOdds(100);

// 10. Generate random Hex color code
function randomHexaNumberGenerator() {
  let hexColorLength = 6;
  let hexColor = '#';

  for (let i = 0; i < hexColorLength; i++) {
    hexColor += Math.round(Math.random() * 16).toString(16);
  }
  return hexColor;
}
console.log(randomHexaNumberGenerator());

// 11. Generate random ID (default id has 7 characters)
function userIdGenerator(idLength = 7) {
  const alphabet =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!€%&/?*#';
  let randomID = '';
  let randomNumber = Math.floor(Math.random() * alphabet.length);

  for (let i = 0; i < idLength; i++) {
    randomID += alphabet[randomNumber];
  }
  return randomID;
}
// console.log(userIdGenerator());

// 12. Generate random ID: receive user's input on number of ID characters and number of IDs
/*
function userIdGeneratedByUser() {
  const alphabet =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!€%&/?*#';
  let idLength = prompt('Please, choose your ID length.');
  let numOfId = prompt('How many ID do you want to generate?');
  
  function randomChar() {
    let randomID = '';
    for (let i = 0; i < idLength; i++) {
      let randomNumber = Math.floor(Math.random() * alphabet.length);
      randomID += alphabet[randomNumber];
    }
    return randomID;
  }

  let numOfIdToInt = parseInt(numOfId); 

  if (numOfIdToInt === 1) {
    console.log(randomChar());
  } else {
    for (let j = 0; j < numOfIdToInt; j++) {
      console.log(randomChar());
    }
  }
}
userIdGeneratedByUser();
*/

// 13. Displays date and time
function displayDateTime() {
  // let options = { day: 'numeric', month: 'numeric', year: 'numeric', 'hour': 'numeric', 'minute': 'numeric'  };
  // let dateFormat = today.toLocaleDateString('en-FI', options);

  let today = new Date();
  let datestring = `${today.toLocaleDateString(
    'en-FI'
  )} ${today.getHours()}:${today.getMinutes()}`;
  console.log(datestring);
}
displayDateTime();

// 14. Generate rgb color
function rgbColorGenerator() {
  let firstRandNumber = Math.round(Math.random() * 255);
  let secondRandNumber = Math.round(Math.random() * 255);
  let thirdRandNumber = Math.round(Math.random() * 255);

  let randomRgbColor = `rgb(${firstRandNumber}, ${secondRandNumber}, ${thirdRandNumber})`;
  return randomRgbColor;
}
console.log(rgbColorGenerator());

// 15. Reverse array
function reverseArray(arr) {
  for (let index = (arr.length - 1); index >= 0; index--) {
    console.log(arr[index]);
  }
}
const myArr = [...company];
reverseArray(myArr);

// 16. Capitalized array
function capitalizeArray(arr) {
  for (let index = 0; index < arr.length; index++) {
    let capElement = arr[index].toUpperCase();
    console.log(capElement);
  }
}
capitalizeArray(myArr);

// 17. Remove item in array
function removeItem(arr) {
  arr.splice(5, 3);
  console.log(arr);
}
removeItem(myArr);

// 17. Remove item in array
function addItem(arr, newItem) {
  arr.push(newItem);
  console.log(arr);
}
addItem(myArr, 'K', 'i');

// 18. Sum of all numbers in a given range
function sumOfNumbers(num) {
  let sum = 0;
  for (let index = 0; index <= num; index++) {
    sum += index;
  }
  console.log(sum);
} 
sumOfNumbers(10);

/***** Part 2 *****/

// 1.
/*
let resultString = '';

for (let index = 0; index < 14; index++) {
  const randomNumber = Math.floor(Math.random() * 10);
  resultString += index === 6 ? `${randomNumber} \n` : `${randomNumber} `;
  // index !== 6 ? resultString += randomNumber : resultString+=randomNumber +'\n';
}
console.log(resultString);
*/

// 2.
/*
function numberOfRows() {
  let rows = prompt('How many rows?');
  let resultString = '';
  
  for (let index = 0; index < rows * 7; index++) {
    const randomNumber = Math.floor(Math.random() * 10);
    resultString += index % 7 === 6 ? `${randomNumber} \n` : `${randomNumber} `;
  }

  return resultString;
}
console.log(numberOfRows());
*/

// 3.
/*
function generateNumbers() {
  let resultArr = new Array(7);
  // add random numbers into array
  for (let index = 0; index < resultArr.length; index++) {
    const randomNumber = Math.floor(Math.random() * 10);
    resultArr[index] = randomNumber;
  }
  // Sort array in asending order
  let sortedArr = [...resultArr];
  sortedArr.sort(function (a, b) {
    return a - b;
  });
  // Joins sorted array
  let joinedArr = sortedArr.join(' ');
  return joinedArr;
}

function lotteryNumRows() {
  let rows = prompt('How many rows?');
  let rowsInt = parseInt(rows);

  // Output rows 
  if (rowsInt === 1) {
    console.log(generateNumbers());
  } else {
    for (let j = 0; j < rowsInt; j++) {
      console.log(generateNumbers());
    }
  }
}
lotteryNumRows()
// console.log(lotteryNumRows());
*/

// 20. OBJECT
const personAccount = {
  firstName: 'John',
  lastName: 'Doe',
  incomes: [
    {
      income: 1000,
      description: 'Win lottery'
    },
    {
      income: 3000,
      description: 'Monthly salary'
    },
    {
      income: 1000,
      description: 'Project'
    },
    {
      income: 100,
      description: 'Birthday gift'
    }
  ],
  expenses: [
    {
      expense: 100,
      description: 'Buy food'
    },
    {
      expense: 2000,
      description: 'Buy new sofa'
    },
    {
      expense: 100,
      description: 'Gift'
    },
    {
      expense: 500,
      description: 'Gas'
    }
  ],
  totalIncome() {
    const totalInc = this.incomes.reduce(
      (acc, curr) => (acc += curr.income),
      0
    );
    return totalInc;
  },
  totalExpense() {
    const totalExp = this.expenses.reduce(
      (acc, curr) => (acc += curr.expense),
      0
    );
    return totalExp;
  },
  accountBalance() {
    let balance = this.totalIncome() - this.totalExpense();
    return balance;
  },
  accountInfo() {
    console.log(`
      Account name: ${this.firstName} ${this.lastName}
      Total incomes: ${this.totalIncome()} 
      Total expenses: ${this.totalExpense()}
      Balance: ${this.accountBalance()}
    `);
  }
};

// Ouput result
// let totalInc = personAccount.totalIncome();
// console.log('Total income:', totalInc);

// let totalExp = personAccount.totalExpense();
// console.log('Total expenses:', totalExp);

// let balance = personAccount.accountBalance();
// console.log('My balance:', balance);

personAccount.accountInfo();