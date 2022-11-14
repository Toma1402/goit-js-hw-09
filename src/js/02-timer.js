import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix';

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
      Notify.failure('Please choose a date in the future');
      return;
    }
    startBtnRef.disabled = false;
    startBtnRef.addEventListener('click', () => {
      startBtnRef.disabled = true;
      datePickerRef.disabled = true;
      let timerId = null;

      timerId = setInterval(() => {
        let timeValue = convertMs(chosenDate - Date.parse(new Date()));

        secondsRef.textContent = addLeadingZero(timeValue.seconds);
        minutesRef.textContent = addLeadingZero(timeValue.minutes);
        hoursRef.textContent = addLeadingZero(timeValue.hours);
        daysRef.textContent = addLeadingZero(timeValue.days);
        //console.log(chosenDate - Date.parse(new Date()));
        if (chosenDate - Date.parse(new Date()) === 0) {
          clearInterval(timerId);
        }
      }, 1000);
    });
  },
};

const flatpickrRef = flatpickr(datePickerRef, options);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
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
