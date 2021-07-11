const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor() {
        super();
    }

    async build() {
        await this.getName();
        await this.getID();
        await this.getEmail();
        await this.getGithub();
    }

    async getGithub(){
        await inquirer.prompt({
            type: 'input',
            name: 'github',
            message: 'Github username:'
        }).then(data => {this.github = data.github});
    }
    
    getRole() {
        this.role = 'Engineer'
        return;
    }
}

module.exports = Engineer;