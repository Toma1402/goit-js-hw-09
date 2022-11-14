function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
let timerId = null;

stopBtnRef.disabled = true;
startBtnRef.addEventListener('click', onStartClick);
stopBtnRef.addEventListener('click', onStopClick);
function onStartClick() {
  bodyRef.style.backgroundColor = getRandomHexColor(); //immediately starting changing color
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
    console.log(1);
  }, 1000);
}
console.dir(startBtnRef);
function onStopClick() {
  startBtnRef.disabled = false;
  stopBtnRef.disabled = true;
  clearTimeout(timerId);
}
