import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtnRef = document.querySelector('button');
const datePickerRef = document.querySelector('#datetime-picker');
const secondsRef = document.querySelector('[data-seconds]');
const minutesRef = document.querySelector('[data-minutes]');
const hoursRef = document.querySelector('[data-hours]');
const daysRef = document.querySelector('[data-days]');

startBtnRef.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const chosenDate = Date.parse(selectedDates[0]);
    if (chosenDate <= new Date().getTime()) {
      window.alert('Please choose a date in the future');
      return;
    }
    startBtnRef.disabled = false;
    startBtnRef.addEventListener('click', () => {
      startBtnRef.disabled = true;
      datePickerRef.disabled = true;
      let timerId = null;

      timerId = setInterval(() => {
        let timeValue = convertMs(chosenDate - Date.parse(new Date()));
        //console.log(timeValue);
        console.log(timeValue.seconds);

        //minutesRef.textContent = changeView(timeValue.minutes);
        //hoursRef.textContent = changeView(timeValue.hours);
        //daysRef.textContent = changeView(timeValue.days);
      }, 1000);
    });
  },
};

const flatpickrRef = flatpickr(datePickerRef, options);

function changeView(arg) {
  arg.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
