const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const errorMessage = document.createElement('span');
errorMessage.classList.add('error');
errorMessage.textContent = 'Please enter your email in lowercase.';
errorMessage.style.display = 'none';
errorMessage.style.color = 'red';

form.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.style.display = 'block';
    form.insertBefore(errorMessage, form.submit);
  } else {
    errorMessage.style.display = 'none';
  }
});
