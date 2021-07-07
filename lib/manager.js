const Employee = require('./employee');

class Manager extends Employee {
    constructor(id, email, office) {
        super(id, email);
        this.office = office;
    }
}

module.exports = Manager;