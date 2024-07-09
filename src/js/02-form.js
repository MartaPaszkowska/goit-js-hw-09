'use strict';
const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const storageKey = 'feedback-form-state';

form.addEventListener('input', setLocalStorage);

function setLocalStorage() {
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

form.addEventListener('submit', event => {
  event.preventDefault();

  if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Please complete the form.');
  }

  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  console.log(formData);
  localStorage.removeItem(storageKey);
  form.reset();
});
