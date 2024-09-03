document.getElementById('submit-btn').addEventListener('click', (e) => {
    e.preventDefault();
    if (document.getElementById('submit-btn').disabled) {
        return; 
    }

    
    document.getElementsByTagName('form')[0].style.display = 'none';

    
    document.getElementById('success-message').style.display = 'block';
});

function validateField(inputId, validationFunction, errorIndex) {
    const input = document.getElementById(inputId);

    if (input.value === '' || !validationFunction(input.value)) {
        input.style.borderColor = 'red';
        document.getElementsByTagName('div')[errorIndex].style.display = 'block';
        input.style.marginBottom = '10px';
        document.getElementById('msg-' + errorIndex).style.marginBottom = '27px';
    } else {
        input.style.borderColor = 'green';
        document.getElementsByTagName('div')[errorIndex].style.display = 'none';
        input.style.marginBottom = '37px';
    }

    validateForm();
}

document.getElementById('firstname').addEventListener('change', () => {
    validateField('firstname', value => value.length > 0 && value.length < 10, 0);
});

document.getElementById('lastname').addEventListener('change', () => {
    validateField('lastname', value => value.length > 0 && value.length < 10, 1);
});

document.getElementById('password').addEventListener('change', () => {
    validateField('password', value => value.length > 7 && hasLower(value) && hasUpper(value) && hasSymbol(value) && hasNumber(value), 2);
});

document.getElementById('confirmpassword').addEventListener('change', () => {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;

    if (password !== confirmPassword) {
        document.getElementById('confirmpassword').style.borderColor = 'red';
        document.getElementsByTagName('div')[3].style.display = 'block';
        document.getElementById('confirmpassword').style.marginBottom = '10px';
        document.getElementById('msg-3').style.marginBottom = '27px';
    } else {
        document.getElementById('confirmpassword').style.borderColor = 'green';
        document.getElementsByTagName('div')[3].style.display = 'none';
        document.getElementById('confirmpassword').style.marginBottom = '37px';
    }

    validateForm();
});

document.getElementById('email').addEventListener('change', () => {
    validateField('email', isValidEmail, 4);
});

document.getElementById('phonenumber').addEventListener('change', () => {
    validateField('phonenumber', isValidMobileNumber, 5);
});

document.getElementById('cv').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileName = file.name;
    const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

    if (!allowedExtensions.exec(fileName)) {
        document.getElementsByTagName('div')[6].style.display = 'block';
        document.getElementById('cv').style.marginBottom = '10px';
        document.getElementById('msg-6').style.marginBottom = '27px';
        e.target.value = '';
    } else {
        document.getElementsByTagName('div')[6].style.display = 'none';
        document.getElementById('cv').style.marginBottom = '37px';
    }

    validateForm();
});

function validateForm() {
    const firstnameValid = document.getElementById('firstname').style.borderColor === 'green';
    const lastnameValid = document.getElementById('lastname').style.borderColor === 'green';
    const passwordValid = document.getElementById('password').style.borderColor === 'green';
    const confirmPasswordValid = document.getElementById('confirmpassword').style.borderColor === 'green';
    const emailValid = document.getElementById('email').style.borderColor === 'green';
    const phoneNumberValid = document.getElementById('phonenumber').style.borderColor === 'green';
    const cvValid = document.getElementsByTagName('div')[6].style.display === 'none';

    document.getElementById('submit-btn').disabled = !(firstnameValid && lastnameValid && passwordValid && confirmPasswordValid && emailValid && phoneNumberValid && cvValid);
}
