const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor() {
        super();
    }

    async build() {
        await this.getName();
        await this.getID();
        await this.getEmail();
        await this.getOffice();
    }

    async getOffice() {
        await inquirer.prompt({
            type: 'input',
            name: 'office',
            message: 'Office number:'
        }).then(data => {this.office = data.office});
    }
    
    getRole() {
        this.role = 'Manager'
        return;
    }
}

module.exports = Manager;