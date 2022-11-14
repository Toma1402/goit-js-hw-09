import { Notify } from 'notiflix';

const formRef = document.querySelector('.form');
const btnSubmitRef = document.querySelector('button');
console.dir(formRef);
formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const { delay, step, amount } = e.target.elements;

  let delayTime = Number(delay.value);
  btnSubmitRef.disabled = true;
  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, delayTime)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayTime += Number(step.value);
  }
  //e.target.reset();
  setTimeout(() => {
    btnSubmitRef.disabled = false;
  }, delayTime);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
