/* ============================================= */
/*                   Script.js                   */
/* ============================================= */

//Global Variables
const jobRoleText = document.getElementById('other-title');
const jobRoleMenu = document.getElementById('title');
const designMenu = document.getElementById('design');
const shirtColorsMenu = document.getElementById('shirt-colors');
const shirtColorsInput = document.getElementById('color');

//Hides the Job Role Menu on page load
jobRoleText.style.display = 'none';


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

function shirtMenuController() {
    if (designMenu.value === 'Select Theme') {
        let emptyOption = '<option selected hidden>Please select a T-shirt theme</option>';
        shirtColorsInput.insertAdjacentHTML('afterbegin', emptyOption);
    }
}


/*============== Event Listeners ==============*/

//Adds an event listener to the "Job Role" drop-down
//and calls displayJobRole()
jobRoleMenu.addEventListener('click', () => {
    displayJobRole();
});

window.addEventListener('load', () => {
    shirtMenuController();
});

designMenu.addEventListener('click', () => {
    shirtMenuController();
});