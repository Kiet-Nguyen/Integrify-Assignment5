let intervalID = {};
const elements = {
  inputField: document.getElementById('js-input'),
  itemsContainer: document.querySelector('.generated-items'),
  generateButton: document.querySelector('.js-generate'),
  stopButton: document.querySelector('.js-stop'),
  copyButton: document.querySelector('.js-copy'),
  copyCodeValue: document.querySelector('.js-hex-code')
};

// Generate random hexadecimal
function randomHexaNumberGenerator() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const markup = `
  <div class="js-bg-color generated-item">
    <p class="js-hex-code text-color"></p>
    <button class="btn btn-copy js-copy hide">Copy</button>
  </div>
`;

function addElement() {
  let inputValue = elements.inputField.value;
  const items = elements.itemsContainer;
  items.innerHTML = ' ';

  // By default, generator generates 5 divs with random background colors, when the input field has a value lower than 5.
  inputValue <= 5 ? (inputValue = 5) : (inputValue = elements.inputField.value);

  for (let index = 0; index < inputValue; index++) {
    items.insertAdjacentHTML('afterbegin', markup);
  }
}

function setBgColor(item) {
  item.children[0].textContent = item.style.backgroundColor = randomHexaNumberGenerator();
  if (item.children[1].classList.contains('hide')) {
    item.children[1].classList.remove('hide');
  }
}

function changeBgColor() {
  const items = elements.itemsContainer;
  let itemsArr = Array.from(items.children);

  itemsArr.forEach((item, itemIndex) => {
    // Adds id for each div
    item.setAttribute('id', itemIndex + 1);

    // Clears interval before set new
    if (intervalID[itemIndex]) {
      clearInterval(intervalID[itemIndex]);
    }
    intervalID[itemIndex] = setInterval(() => setBgColor(item), 3000);

    // Stops generate random bg color
    item.addEventListener('mouseover', () => {
      clearInterval(intervalID[itemIndex]);
    });
  });
}

function stopInterval() {
  clearInterval(intervalID);
}

function clearInput() {
  elements.inputField.value = '';
}

/** On initialize **/
function init() {
  if (elements.inputField.value && elements.inputField.value > 0) {
    addElement();
    changeBgColor();
    clearInput();
  } else {
    alert('Please provide a valid number.');
  }
}

// Generates numbers of div with random hexcolor code
elements.generateButton.addEventListener('click', init);

// Stops generate random background color for all divs
elements.stopButton.addEventListener('click', stopInterval);

// Copy hexcode
// elements.copyButton.addEventListener('click', clickToCopy);
