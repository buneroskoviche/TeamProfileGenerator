const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor() {
        super();
    }

    async build() {
        this.getRole();
        await this.getName();
        await this.getID();
        await this.getEmail();
        await this.getSchool();
    }

    async getSchool() {
        await inquirer.prompt({
            type: 'input',
            name: 'school',
            message: `Intern's current school:`
        }).then(data => {this.school = data.school});
    }

    getRole() {
        this.role = 'Intern'
        return;
    }
}

module.exports = Intern;