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