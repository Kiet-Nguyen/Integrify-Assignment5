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

  // By default, generator generates 5 divs with random background colors, when the input field has a value lower than 5.
  inputValue <= 5 ? (inputValue = 5) : (inputValue = elements.inputField.value);

  items.innerHTML = ' ';
  for (let index = 0; index < inputValue; index++) {
    items.insertAdjacentHTML('afterbegin', markup);
  }
}

function setBgColor(item) {
  const pararaph = item.children[0];
  pararaph.textContent = item.style.backgroundColor = randomHexaNumberGenerator();
  // Hide or display copy button
  const copyBtn = item.children[1];
  if (copyBtn.classList.contains('hide')) {
    copyBtn.classList.remove('hide');
  }
}

/*************************
 * Change background color for each div randomly
 **/
function changeBgColor() {
  const items = elements.itemsContainer;
  let itemsArr = Array.from(items.children);

  itemsArr.forEach((item, itemIndex) => {
    // Clears interval before set new
    if (intervalID[itemIndex]) {
      clearInterval(intervalID[itemIndex]);
    }
    intervalID[itemIndex] = setInterval(() => setBgColor(item), 2000);

    // Stops generate random bg color for selected div
    item.addEventListener('mouseover', () =>
      clearInterval(intervalID[itemIndex])
    );

    // Click button to copy hexadecimal color code
    clickToCopy(item);
  });
}

/*************************
 * Copy to clipboard
 **/
function copyToClipboard(str) {
  if (window.clipboardData && window.clipboardData.setData) {
    // IE specific code path to prevent textarea being shown while dialog is visible.
    return clipboardData.setData('Text', str);
  } else if (
    document.queryCommandSupported &&
    document.queryCommandSupported('copy')
  ) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    try {
      document.execCommand('copy');
    } catch (error) {
      console.warn('Copy to clipboard failed.', error);
      return false;
    } finally {
      document.body.removeChild(el);
    }
  }
}

function stopInterval() {
  Object.values(intervalID).forEach(curr => {
    clearInterval(curr);
  });
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

function clickToCopy(item) {
  item.children[1].addEventListener('click', () => {
    let str = item.children[0].textContent;
    copyToClipboard(str);
    alert('Your required hexadecimal color is copied to clipboard.');
  });
}
