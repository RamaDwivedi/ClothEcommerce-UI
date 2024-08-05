function saveFormData() {
    const formData = {
        firstName: document.getElementById('first-name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirm-password').value,
        phone: document.getElementById('phone').value,
        dob: document.getElementById('dob').value
    };

    localStorage.setItem('formData', JSON.stringify(formData));
}
