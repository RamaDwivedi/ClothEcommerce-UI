
function validateName(nameField)
{
    const errorElement = document.getElementById(`${nameField.id}-error`);
    const namePattern = /^[A-Za-z]{1,8}$/;
    let errorMessage = '';

    if (nameField.value.trim() === '') {
        errorMessage = 'Name must not be blank';
    } else if (!namePattern.test(nameField.value)) {
        errorMessage = 'Name must include only characters and be at most 8 characters long';
    }

    errorElement.textContent = errorMessage;
    return errorMessage === '';
  
}

function validateEmail(emailField) {
    const errorElement = document.getElementById(`${emailField.id}-error`);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errorMessage = '';

    if (emailField.value.trim() === '') {
        errorMessage = 'Email must not be blank';
    } else if (!emailPattern.test(emailField.value)) {
        errorMessage = 'Must be a valid email';
    }

    errorElement.textContent = errorMessage;
    return errorMessage === '';
}

function validatePassword(passwordField) {
    const errorElement = document.getElementById(`${passwordField.id}-error`);
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let errorMessage = '';

    if (passwordField.value.trim() === '') {
        errorMessage = 'Password must not be blank';
    } else if (!passwordPattern.test(passwordField.value)) {
        errorMessage = 'Must be valid password (8 chars, alphanumeric, capital & small letter)';
    }

    errorElement.textContent = errorMessage;
    return errorMessage === '';
}

function validateConfirmPassword(confirmPasswordField) {
    const errorElement = document.getElementById(`${confirmPasswordField.id}-error`);
    const passwordField = document.getElementById('password');
    let errorMessage = '';

    if (confirmPasswordField.value.trim() === '') {
        errorMessage = 'Confirm Password must not be blank';
    } else if (confirmPasswordField.value !== passwordField.value) {
        errorMessage = 'Passwords do not match';
    }

    errorElement.textContent = errorMessage;
    return errorMessage === '';
}

function validatePhone(phoneField) {
    const errorElement = document.getElementById(`${phoneField.id}-error`);
    const phonePattern = /^[0-9]+$/;
    let errorMessage = '';

    if (phoneField.value.trim() === '') {
        errorMessage = 'Phone must not be blank';
    } else if (!phonePattern.test(phoneField.value)) {
        errorMessage = 'Phone must be numeric';
    }

    errorElement.textContent = errorMessage;
    return errorMessage === '';
}

function validateDOB(dobField) {
    const errorElement = document.getElementById(`${dobField.id}-error`);
    let errorMessage = '';

    if (dobField.value.trim() === '') {
        errorMessage = 'Date of Birth must not be blank';
    } else {
        const dobDate = new Date(dobField.value);
        if (isNaN(dobDate.getTime())) {
            errorMessage = 'Must be a valid date';
        }
    }

    errorElement.textContent = errorMessage;
    return errorMessage === '';
}

function validateForm() {
    const firstNameField = document.getElementById('first-name');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');
    const phoneField = document.getElementById('phone');
    const dobField = document.getElementById('dob');


    const isFirstNameValid = validateName(firstNameField);
    const isEmailValid = validateEmail(emailField);
    const isPasswordValid = validatePassword(passwordField);
    const isConfirmPasswordValid = validateConfirmPassword(confirmPasswordField);
    const isPhoneValid = validatePhone(phoneField);
    const isDOBValid = validateDOB(dobField);



return isFirstNameValid && isEmailValid &&isPasswordValid&&isConfirmPasswordValid&&isPhoneValid&&isDOBValid; 
}
