/**
 * EXERCISE 1
 **/

/***** Part 1 *****/
let company = 'Integrify Academy';
/*
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
*/

// 2.
/*
const myAge = 25;
const yourAge = 30;
document
  .querySelector('.my-age')
  .insertAdjacentHTML('afterbegin', `I am ${myAge} years old.`);
document
  .querySelector('.your-age')
  .insertAdjacentHTML('afterbegin', `You are ${yourAge} years old.`);
*/

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
/*
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
*/

// 6.
/*
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
  console.log(itCompanies[i].toUpperCase());
}
*/

// 7. Print items in an array
/*
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
*/

// 8. Sum of all Even numbers in a given range
/*
function sumOfEven(num) {
  let sum = 0;
  for (let i = 2; i <= num; i += 2) {
    sum += i;
  }
  return sum;
}
console.log(`Sum of all even numbers is ${sumOfEven(5)}`);
*/

// 9. Counts number of Odd numbers and Even numbers
/*
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
*/

// 10. Generate random Hex color code
/*
function randomHexaNumberGenerator() {
  let hexColorLength = 6;
  let hexColor = '#';

  for (let i = 0; i < hexColorLength; i++) {
    hexColor += Math.round(Math.random() * 16).toString(16);
  }
  return hexColor;
}
console.log(randomHexaNumberGenerator());
*/

// 11. Generate random ID (default id has 7 characters) - version 1
/*
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
*/

// Generate random ID - version 2
/*
function generateUUID(idLength = 10) {
  let id = new Array(idLength);

  // Generate random number or character
  let uuidArr = [...id].map(curr => {
    let randomNum = Math.floor(Math.random() * 36);
    let randomNumToStr = randomNum.toString(36);
    let isUppercase = Math.random() > 0.5;

    return curr = isUppercase ? randomNumToStr.toUpperCase() : randomNumToStr;
  });

  // Join the uuid array 
  let uuid = uuidArr.join('');

  return uuid;
}
console.log(generateUUID());
*/

// 12. Generate random ID: receive user's input on number of ID characters and number of IDs
/*
function userIdGeneratedByUser() {
  let idLength = prompt('Please, choose your ID length.');
  let idLengthToInt = parseInt(idLength);
  let numOfId = prompt('How many ID do you want to generate?');
  let numOfIdToInt = parseInt(numOfId); 

  if (numOfIdToInt === 1) {
    console.log('Your ID is:', generateUUID(idLengthToInt));
  } else {
    for (let index = 0; index < numOfIdToInt; index++) {
      console.log('ID:', generateUUID(idLengthToInt));
    }
  }
}
userIdGeneratedByUser();
*/

// 13. Displays date and time
/*
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
*/

// 14. Generate rgb color
/*
function rgbColorGenerator() {
  let firstRandNumber = Math.round(Math.random() * 255);
  let secondRandNumber = Math.round(Math.random() * 255);
  let thirdRandNumber = Math.round(Math.random() * 255);

  let randomRgbColor = `rgb(${firstRandNumber}, ${secondRandNumber}, ${thirdRandNumber})`;
  return randomRgbColor;
}
console.log(rgbColorGenerator());
*/

// 15. Reverse array
/*
function reverseArray(arr) {
  for (let index = (arr.length - 1); index >= 0; index--) {
    console.log(arr[index]);
  }
}
const myArr = [...company];
reverseArray(myArr);
*/

// 16. Capitalized array
/*
let myArr = [...company];
function capitalizeArray(arr) {
  const capitalizedElementArr = [];
  arr.forEach( curr => capitalizedElementArr.push(curr.toUpperCase()) );

  return (result = capitalizedElementArr.join(''));
}
console.log('Capitalized string', capitalizeArray(myArr));
*/

// 17. Remove item in array
/*
function removeItem(arr) {
  arr.splice(5, 3);
  return arr;
}
console.log('Remove items in an array', removeItem(myArr));
*/

// 17. Remove item in array
/*
function addItem(arr, newItem) {
  arr.push(newItem);
  return arr;
}
console.log('Add items into an array', addItem(myArr, 'K', 'i'));
*/

// 18. Sum of all numbers in a given range
/*
function sumOfANumber(num) {
  let sum = 0;
  for (let index = 0; index <= num; index++) {
    sum += index;
  }
  return sum;
} 
console.log('Sum of a number:', sumOfANumber(10));
*/

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
/*
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
      (acc, curr) => (acc += curr.income)
      , 0
    );
    return totalInc;
  },
  printEachIncome() {
    let joinIncome = this.incomes.reduce( (acc, inc, index) => 
      acc += `Income ${index + 1}: ${inc.income} `
      , '' 
    );
    return joinIncome;
  },
  totalExpense() {
    const totalExp = this.expenses.reduce(
      (acc, curr) => (acc += curr.expense)
      , 0
    );
    return totalExp;
  },
  printEachExpense() {
    let joinExpense = this.expenses.reduce( (acc, exp, index) => 
      acc += `Expense ${index + 1}: ${exp.expense} `
      , '' 
    );
    return joinExpense;
  },
  accountBalance() {
    let balance = this.totalIncome() - this.totalExpense();
    return balance;
  },
  addIncome(inc, des) {
    // incStr = prompt('Income value');
    // inc = parseFloat(incStr);
    // des = prompt('Income description');

    this.incomes.push( {income: inc, description: des} );
  },
  addExpence(exp, des) {
    // expStr = prompt('Expense value');
    // exp = parseFloat(expStr);
    // des = prompt('Expense description');

    this.expenses.push({ expense: exp, description: des });
  },
  accountInfo() {
    console.log(`
      Account name: ${this.firstName} ${this.lastName}
      All incomes: ${this.printEachIncome()}
      Total incomes: ${this.totalIncome()} 
      All expenses: ${this.printEachExpense()}
      Total expenses: ${this.totalExpense()}
      Balance: ${this.accountBalance()}
    `);
  }
};

personAccount.accountInfo();
// personAccount.addIncome();
// personAccount.addExpence();

// console.log('Incomes', personAccount.incomes);
// console.log('Expenses', personAccount.expenses);
*/

// 21. Calculate annual income by Regular expression
/*
const myIncomes = {
  myStr: 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.',
  annualIncome() {
    const reg = /\d+/gi;
    const numArr = this.myStr.match(reg);
    
    const totalIncome = numArr.reduce( (acc, curr) => {
      let strToNum = parseFloat(curr);
      return acc += strToNum;
    }, 0);
    return totalIncome;
  }
};
console.log('My annual income: ', myIncomes.annualIncome());
*/

// 22. 
const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas"
  , "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands"
  , "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica"
  , "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea"
  , "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana"
  , "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India"
  , "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia"
  , "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania"
  , "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia"
  , "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal"
  , "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles"
  , "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan"
  , "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia"
  , "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay"
  , "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

// a. Returns array only with string items.
const randomArr = ['hello', 1, 2, 'world', 3];
function getStringLists(arr) {
  let newArr = arr.filter( curr => {
    if (typeof (curr) === 'string') {
      return curr;
    }
  } );
  return newArr;
}
console.log(getStringLists(randomArr));

// b. Return an array of ten countries
function getFirstTenCountries(arr) {
  const firstTenCountries = arr.slice(0, 10);
  return firstTenCountries;
}
console.log('First ten countries array:', getFirstTenCountries(countries));

// c. Return an array of ten countries
function getLastTenCountries(arr) {
  const lastTenCountries = arr.slice((arr.length - 10), arr.length);
  return lastTenCountries;
}
console.log('Last ten countries array:', getLastTenCountries(countries));

// d. 
function categorizeCountries(arr, startChar, endChar) {
  let commonStartWith = arr.filter( (curr) => {
    const currUpperCase = curr.toUpperCase();
    const startCharUpperCase = startChar.toUpperCase();
    const endCharUpperCase = endChar.toUpperCase();
    const length = curr.length;

    const start = currUpperCase.startsWith(startCharUpperCase);
    const end = currUpperCase.endsWith(endCharUpperCase);
    if (start && end && length >= 8) {
      return curr;
    }
  } );
  return commonStartWith;
}
console.log(
  'Common countries start with A, end with A and have more than 8 characters are',
  categorizeCountries(countries, 'A', 'A')
);

// e. Find out how many initial letter in countries array
function printCount(arr) {
  Object.entries(arr).forEach(([key, value]) =>
    console.log(`The array has ${value} countries start with ${key}`)
  );
}

function startCharOfAllContries(arr) {
  const count = {};
  
  // Array of initial letters of all countries
  const charArr = arr.map( curr => curr.charAt(0) );
  
  // Count all initial letters that have same value
  charArr.forEach( currInitialLetter => {
    count[currInitialLetter] = (count[currInitialLetter] || 0) + 1;
  } );
  
  // print count's key and value to console
  printCount(count);
}

startCharOfAllContries(countries);
