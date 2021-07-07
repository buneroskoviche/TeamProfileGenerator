const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'Employee name:'
        }).then(data => {return data.name;});
    }

    getID() {
        return;
    }

    getEmail() {
        inquirer.prompt({
            type: 'input',
            name: 'email',
            message: 'Employee email:'
        }).then(data => {return data.email;});
    }

    getRole() {

    }
}

module.exports = Employee;