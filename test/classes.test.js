const Engineer = require('../lib/Engineer.js');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const inquirer = require('inquirer');


describe("Engineer", () =>{
    describe("Initialization", () => {
        it('should create an Engineer object with the "role" parameter "Engineer"', () => {
            const engi = new Engineer();

            expect(engi.role).toEqual('Engineer');
        });
    });

});

describe("Manager", () =>{
    describe("Initialization", () => {
        it('should create an Manager object with the "role" parameter "Manager"', () => {
            const manager = new Manager();

            expect(manager.role).toEqual('Manager');
        });
    });
});

describe("Intern", () =>{
    describe("Initialization", () => {
        it('should create an Intern object with the "role" parameter "Intern"', () => {
            const intern = new Intern();

            expect(intern.role).toEqual('Intern');
        });
    });
});