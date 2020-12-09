// TODO: Write code to define and export the Engineer class.  
// HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {

    constructor( id, name, email, github ) {

        super( id, name, email );
        this.gitHub = gitHub;

    }

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;

