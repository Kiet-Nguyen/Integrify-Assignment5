let intervalID;

// Generate random hexadecimal
function randomHexaNumberGenerator() {
  let hexColor = '#';

  let hexCode = Array(6)
    .fill()
    .map(code => {
      let hexRandomNumber = Math.round(Math.random() * 16).toString(32);
      return (code = hexRandomNumber);
    });

  return (hexColor += hexCode.join(''));
}

const markup = `
  <div class="js-bg-color generated-item">
    <p class="js-hex-code"></p>
    <button class="btn btn-copy js-copy">Copy</button>
  </div>
`;

function addElement() {
  const items = document.querySelector('.generated-items');
  const inputValue = document.getElementById('js-input').value;

  for (let index = 0; index < inputValue; index++) {
    items.insertAdjacentHTML('afterbegin', markup);
    changeBgColor();
  }
}

function setBgColor() {
  const bgColorList = document.querySelectorAll('.js-bg-color');

  bgColorList.forEach(bgColor => {
    bgColor.children[0].textContent = bgColor.style.backgroundColor = randomHexaNumberGenerator();
  });
}

function changeBgColor() {
  intervalID = setInterval(setBgColor, 2000);
}

function stopInterval() {
  clearInterval(intervalID);
}

document.querySelector('.js-generate').addEventListener('click', addElement);

document.querySelector('.js-stop').addEventListener('click', stopInterval);
