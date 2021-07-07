const Employee = require('./employee');

class Engineer extends Employee {
    constructor(id, email, github) {
        super(id, email);
        this.github = github;
    }
}

module.exports = Engineer;