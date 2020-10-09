/* ============================================= */
/*                   Script.js                   */
/* ============================================= */

//Global Variables
const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('mail');
const creditField = document.getElementById('cc-num');
const zipField = document.getElementById('zip');
const cvvField = document.getElementById('cvv');

const jobRoleText = document.getElementById('other-title');
const jobRoleMenu = document.getElementById('title');

const designMenu = document.getElementById('design');
const colorMenu = document.getElementById('shirt-colors');
const shirtColorsMenu = document.getElementById('shirt-colors');
const shirtColorsInput = document.getElementById('color');

const checkboxes = document.querySelectorAll('.activities input');
const checkLabels = document.querySelectorAll('.activities label');

const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');


/*============== On load ==============*/

//Hides the Job Role Menu on page load
jobRoleText.style.display = 'none';

//Disables the default menu option on "Payment
//and "Design" menus
designMenu.children[0].hidden = true;
payment.children[0].hidden = true;


//Hides all payment options on page load
creditCard.style.display = 'none';
paypal.style.display = 'none';
bitcoin.style.display = 'none';

if (designMenu.value === 'Select Theme') {
    colorMenu.style.display = 'none';
}

/*============== Functions ==============*/

//Displays the "Job Role" Input when "other" is 
//selected in the "Job Role" Drop-down menu
function displayJobRole() {
    if (jobRoleMenu.value === 'other') {
        jobRoleText.style.display = 'block';
    } else {
        jobRoleText.style.display = 'none';
    }
}

//Controls the "Color" menu based on the selection 
//in the "Design" menu
function shirtMenuController() {
    if (designMenu.value === 'Select Theme') {
        shirtColorsInput.children[0].hidden = false;
        shirtColorsInput.children[0].selected = true;
        shirtColorsInput.children[1].hidden = true;
        shirtColorsInput.children[2].hidden = true;
        shirtColorsInput.children[3].hidden = true;
        shirtColorsInput.children[4].hidden = true;
        shirtColorsInput.children[5].hidden = true;
        shirtColorsInput.children[6].hidden = true;
    } else if (designMenu.value === 'js puns') {
        colorMenu.style.display = 'block';
        shirtColorsInput.children[0].hidden = true;
        shirtColorsInput.children[1].selected = true;
        shirtColorsInput.children[1].hidden = false;
        shirtColorsInput.children[2].hidden = false;
        shirtColorsInput.children[3].hidden = false;
        shirtColorsInput.children[4].hidden = true;
        shirtColorsInput.children[5].hidden = true;
        shirtColorsInput.children[6].hidden = true;
    } else if (designMenu.value === 'heart js') {
        colorMenu.style.display = 'block';
        shirtColorsInput.children[0].hidden = true;
        shirtColorsInput.children[1].hidden = true;
        shirtColorsInput.children[2].hidden = true;
        shirtColorsInput.children[3].hidden = true;
        shirtColorsInput.children[4].selected = true;
        shirtColorsInput.children[4].hidden = false;
        shirtColorsInput.children[5].hidden = false;
        shirtColorsInput.children[6].hidden = false;

    }
}

//Displays payment info based on selection
function paymentSelector() {
    if (payment.value === 'select method') {
        creditCard.style.display = 'none';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    } else if (payment.value === 'credit card') {
        creditCard.style.display = 'block';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    } else if (payment.value === 'paypal') {
        paypal.style.display = 'block';
        creditCard.style.display = 'none';
        bitcoin.style.display = 'none';
    } else if (payment.value === 'bitcoin') {
        creditCard.style.display = 'none';
        paypal.style.display = 'none';
        bitcoin.style.display = 'block'
    }
}

//Validates the Name field
function nameValidator() {
    const value = name.value;
    const errorMessage = document.querySelector('.name-message');
    if (value === '') {
        name.className = 'error';
        errorMessage.style.display = 'inline-block';
        return false;
    } else {
        name.className = '';
        errorMessage.style.display = 'none';
        return true;
    }
}

//Validates the Email field
function emailValidator() {
    const value = email.value;
    const errorMessage = document.querySelector('.email-message');
    const validate = /\w+@\w+\.\w+/g;
    const result = validate.test(value);
    if (result === false) {
        email.className = 'error';
        errorMessage.style.display = 'inline-block';
        return false;
    } else {
        email.className = '';
        errorMessage.style.display = 'none';
        return true;
    }
}

//Checks to see if any checkboxes have been checked
function activityValidator() {
    const total = document.querySelector('.js-total');
    const checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
    const errorMessage = document.querySelector('.activity-message');
    if (checkbox.length === 0) {
        total.style.color = 'red';
        errorMessage.style.display = 'inline-block';
        return false;
    } else {
        total.style.color = '#FFF';
        errorMessage.style.display = 'none';
        return true;
    }
}

//Validates the Card Number Field
function creditValidator() {
    const value = creditField.value;
    const errorMessage = document.querySelector('.card-message');
    const validate = /^\d{13,16}$/g;
    const result = validate.test(value);
    if (creditField.value === '') {
        creditField.className = 'error';
        errorMessage.textContent = 'Please enter a credit card number';
        errorMessage.style.display = 'inline-block';
    } else if (result === false) {
        creditField.className = 'error';
        errorMessage.textContent = 'Must be between 13 and 16 digits and contain only numbers';
        errorMessage.style.display = 'inline-block';
        return false;
    } else {
        creditField.className = '';
        errorMessage.style.display = 'none';
        return true;
    }
}

//Validates the Zip Code Field
function zipValidator() {
    const value = zipField.value;
    const errorMessage = document.querySelector('.zip-message');
    const validate = /^\d{5}$/g;
    const result = validate.test(value);
    if (result === false) {
        zipField.className = 'error';
        errorMessage.style.display = 'inline-block';
        return false;
    } else {
        zipField.className = '';
        errorMessage.style.display = 'none';
        return true;
    }
}

//Validates the CVV Field
function cvvValidator() {
    const value = cvvField.value;
    const errorMessage = document.querySelector('.cvv-message');
    const validate = /^\d{3}$/g;
    const result = validate.test(value);
    if (result === false) {
        cvvField.className = 'error';
        errorMessage.style.display = 'inline-block';
        return false;
    } else {
        cvvField.className = '';
        errorMessage.style.display = 'none';
        return true;
    }
}

//Calls all the validation funtions
function validator() {
    nameValidator();
    emailValidator();
    activityValidator();
    if (payment.value === 'credit card') {
        creditValidator();
        zipValidator();
        cvvValidator();
    }
    if (payment.value === 'credit card' 
    && nameValidator() 
    && emailValidator() 
    && activityValidator() 
    && creditValidator() 
    && zipValidator() 
    && cvvValidator()) {
        return true;
    } else if (payment.value !== 'credit card' 
    && nameValidator() 
    && emailValidator() 
    && activityValidator()) {
        return true;
    } else {
        return false;
    }
}

/*============== Event Listeners ==============*/

//Adds an event listener to the "Job Role" drop-down
//and calls displayJobRole()
jobRoleMenu.addEventListener('click', () => {
    displayJobRole();
});

//Adds an event listener to the "Design" drop-down
//and calls shirtMenuController()
designMenu.addEventListener('click', () => {
    designMenu.children[0].disabled = true;
    shirtMenuController();
});

//Adds an event listener to the "activities" section
//and disables conflicting events when checked
//Also adds the total price of checked events and
//displays it at the bottom
document.querySelector('.activities').addEventListener('click', (e) => {
    const clicked = e.target;
    const clickedDateTime = clicked.getAttribute('data-day-and-time');
    const totalCost = document.querySelector('.js-total');
    let total = 0;
    totalCost.textContent = `$${total.toFixed(2)}`
    for (let i = 0; i < checkboxes.length; i++) {
        let cost = parseInt(checkboxes[i].getAttribute('data-cost'));
        let dateTimeType = checkboxes[i].getAttribute('data-day-and-time');
        if (clickedDateTime === dateTimeType && clicked !== checkboxes[i]) {
            if (clicked.checked) {
                checkboxes[i].disabled = true;
                checkLabels[i].className = 'disabled';
            } else {
                checkboxes[i].disabled = false;
                checkLabels[i].className = '';
            }
        }
        totalCost.textContent = `$${total.toFixed(2)}`
        if (checkboxes[i].checked) {
            total += cost;
            totalCost.textContent = `$${total.toFixed(2)}`
        }
    }
});

//Adds an event listener to the "payment" section
//Disables the "select Method" option
//Calls PaymentSelctor();
payment.addEventListener('click', () => {
    payment.children[0].disabled = true;
    paymentSelector();
});

//Checks validators in real time as the 
//user types
form.addEventListener('input', (e) => {
    if (e.target === name) {
        nameValidator();
    } else if (e.target === email) {
        emailValidator();
    } else if (e.target === creditField) {
        creditValidator();
    } else if (e.target === zipField) {
        zipValidator();
    } else if (e.target === cvvField) {
        cvvValidator();
    }
});

//Event listenser for submit which calls
//The main Validator() function
form.addEventListener('submit', (e) => {
    validator();
    if (validator() === false) {
        e.preventDefault();
    }
});