const form = document.getElementById("myform");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

// handle form submission
form.addEventListener('submit', handleSubmit);

// form submission event handler
function handleSubmit(event) {
    event.preventDefault(); // prevent our form from reloading/resubmitting

// validate form inputs
const isValid = validateForm();

if (isValid) {
    console.log("Form was submitted successfully!");
    form.reset();
    nameError.textContent = '';
    emailError.textContent = '';
}
}

// Form Input Validation
function validateForm() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    let isValid = true;

    if(nameValue === "") {
        nameError.textContent = "Name is required.";
       isValid = false;
    } else {
        nameError.textContent = '';
    }

    if(emailValue === "") {
        emailError.textContent = "Email is required.";
       isValid = false;
    } else {
        emailError.textContent = '';
    }
    return isValid;
}