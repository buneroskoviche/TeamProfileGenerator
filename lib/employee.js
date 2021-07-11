const inquirer = require("inquirer");

class Employee {
    constructor() {
        this.getRole();
    }

    // Use a builder func becuase the questions are all async
    async build() {
        await this.getName();
        await this.getID();
        await this.getEmail();
    }

    async getName() {
        await inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'Name:'
        }).then(data => {this.name = data.name;});
    }

    async getID() {
        await inquirer.prompt({
            type: 'input',
            name: 'id',
            message: 'ID number:',
        }).then(data => {this.id = data.id});
    }

    async getEmail() {
        await inquirer.prompt({
            type: 'input',
            name: 'email',
            message: 'Email:'
        }).then(data => {this.email = data.email;});
    }

    getRole() {
        this.role = 'Employee';
    }
}

module.exports = Employee;