const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

confirmNewMember() {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "new",
          message: "Do you want to add a new team member?"
        }
      ])
      .then(val => {
        // If the user says yes to a new team member take in the team member information
        if (val.new) {
          this.getRole();
        } else {
          this.render();
        }
      });
  }

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

getRole() {

    

}

memberBuild() {
    return inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What is your member's role?",
        // The users guess must be a number or letter         
      }
    ])
    .then(val => {
      // If the user's guess is in the current word, log that they chose correctly
      const didGuessCorrectly = this.currentWord.guessLetter(val.choice);
      if (didGuessCorrectly) {
        console.log(chalk.green("\nCORRECT!!!\n"));

        // Otherwise decrement `guessesLeft`, and let the user know how many guesses they have left
      } else {
        this.guessesLeft--;
        console.log(chalk.red("\nINCORRECT!!!\n"));
        console.log(this.guessesLeft + " guesses remaining!!!\n");
      }
    });
}

}


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
