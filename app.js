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

            message: "What is your manager's name?",
            name: "name",
            type: "input"
        },
        {
            message: "What is your manager's id?",
            name: "id",
            type: "input"
        },
        {
            message: "What is your manager's email?",
            name: "email",
            type: "input"
        },
        {
            message: "What is your manager's office number?",
            name: "officeNumber",
            type: "input"
            
        }

    ]).then (( managerData ) => {

        // 
        const newManager = new Manager( managerData.name, managerData.id, managerData.email, managerData.officeNumber );
        
        teamList.push( newManager );
        console.log(teamList);

        //Progresses the application to check for the user
        askUserForEmployeeType();

    });

}

// Ask user for employee type
function askUserForEmployeeType() {
    
    return inquirer.prompt([
        {

            message: "What type of employee would you like to add?",
            name: "role",
            type: "list",
            choices: [ "Engineer", "Intern", "No more employees" ]

        }

    ]).then (( roleType ) => {

        // if the engineer is selected
        if ( roleType.role === "Engineer" ) {

            askUserForEngineerInfo();

        } else if ( roleType.role === "Intern" ){

            // else if the user seleccted an intern
            askUserForInternInfo();

        } else {

            //else No more employees
            createHtmlFile();

        }
    });
}

//Ask user for engineer info
function askUserForEngineerInfo() {
    
    return inquirer.prompt([
        {

            message: "What is the engineer's name?",
            name: "name",
            type: "input"
        },
        {
            message: "What is your engineer's id?",
            name: "id",
            type: "input"
        },
        {
            message: "What is your engineer's email?",
            name: "email",
            type: "input"
        },
        {
            message: "What is your engineer's github?",
            name: "github",
            type: "input"
            
        }

    ]).then (( engineerData ) => {

        // 
        const newEngineer = new Engineer( engineerData.name, engineerData.id, engineerData.email, engineerData.github );
        
        teamList.push( newEngineer );
        console.log(teamList);

        //Progresses the application to check for the user
        askUserForEmployeeType();

    });



}

//Ask user for intern information
function askUserForInternInfo() {

    return inquirer.prompt([
        {

            message: "What is the intern's name?",
            name: "name",
            type: "input"
        },
        {
            message: "What is your intern's id?",
            name: "id",
            type: "input"
        },
        {
            message: "What is your intern's email?",
            name: "email",
            type: "input"
        },
        {
            message: "What is your intern's school?",
            name: "school",
            type: "input"
            
        }

    ]).then (( internData ) => {

        // 
        const newIntern = new Intern( internData.name, internData.id, internData.email, internData.school );
        
        teamList.push( newIntern );

        console.log(teamList);

        //Progresses the application to check for the user
        askUserForEmployeeType();

    });


}

function createHtmlFile () {

    const htmlContent = render( teamList );

    //Use fs module to render html file
    fs.writeFile('index.html', htmlContent, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// start app
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
