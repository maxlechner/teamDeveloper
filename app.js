const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamList = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//Ask user for manager info
function askUserForManagerInfo() {

    return inquirer.prompt([
        {

            message: "name",
            name: "",
            type: "input"

        }

    ]).then (( managerData ) => {

        // 
        const newManager = new Manager( managerData.name, managerData.id, managerData.email, managerData.officenumber );
        
        teamList.push( newManager );

        //Progresses the application to check for the user
        askUserForEmployeeType();

    });

}

// Ask user for employee type
function askUserForEmployeeType() {
    
    return inquirer.prompt([
        {

            message: "name",
            name: "",
            type: "list"

        }

    ]).then (( managerData ) => {

        // if the engineer is selected
        askUserForEngineerInfo();

        // else if the user seleccted an intern
        askUserForInternInfo();

        //else
        createHtmlFile();


    });


}

//Ask user for engineer info
function askUserForEngineerInfo() {



}

//Ask user for intern information
function askUserForInternInfo() {



}

function createHtmlFile () {

    const htmlContent = render( employeeList );

    //Use fs module to render html file

}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

askUserForManagerInfo();


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
