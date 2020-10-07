/* ============================================= */
/*                   Script.js                   */
/* ============================================= */

//Global Variables
const jobRoleText = document.getElementById('other-title');
const jobRoleMenu = document.getElementById('title');

const designMenu = document.getElementById('design');
const shirtColorsMenu = document.getElementById('shirt-colors');
const shirtColorsInput = document.getElementById('color');

const checkboxes = document.querySelectorAll('.activities input');

const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');


/*============== On load ==============*/

//Hides the Job Role Menu on page load
jobRoleText.style.display = 'none';

//Hides all payment options on page load
creditCard.style.display = 'none';
paypal.style.display = 'none';
bitcoin.style.display = 'none';

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
        shirtColorsInput.children[0].hidden = true;
        shirtColorsInput.children[1].selected = true;
        shirtColorsInput.children[1].hidden = false;
        shirtColorsInput.children[2].hidden = false;
        shirtColorsInput.children[3].hidden = false;
        shirtColorsInput.children[4].hidden = true;
        shirtColorsInput.children[5].hidden = true;
        shirtColorsInput.children[6].hidden = true;
    } else if (designMenu.value === 'heart js') {
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

/*============== Event Listeners ==============*/

//Adds an event listener to the "Job Role" drop-down
//and calls displayJobRole()
jobRoleMenu.addEventListener('click', () => {
    displayJobRole();
});

//Adds an event listener to the "Design" drop-down
//and calls shirtMenuController()
designMenu.addEventListener('click', () => {
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
    console.log(clicked);
    console.log(clickedDateTime);
    for (let i = 0; i < checkboxes.length; i++) {
        let cost = parseInt(checkboxes[i].getAttribute('data-cost'));
        let dateTimeType = checkboxes[i].getAttribute('data-day-and-time');
        if (clickedDateTime === dateTimeType && clicked !== checkboxes[i]) {
            if (clicked.checked) {
                checkboxes[i].disabled = true;
            } else {
                checkboxes[i].disabled = false;
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