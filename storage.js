// Get references to the form inputs
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Load the saved data from local storage and fill in the form
const savedData = localStorage.getItem('contactFormData');
if (savedData) {
  const formData = JSON.parse(savedData);
  nameInput.value = formData.name;
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

// Save the form data to local storage whenever any input changes
function saveFormData() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('contactFormData', JSON.stringify(formData));
}

nameInput.addEventListener('input', saveFormData);
emailInput.addEventListener('input', saveFormData);
messageInput.addEventListener('input', saveFormData);
