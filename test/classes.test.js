const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer.js');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const inquirer = require('inquirer');


describe("Employee", () =>{
    describe("Initialization", () => {
        it('should create an Employee object with the "role" parameter "Employee"', () => {
            const employee = new Employee();

            expect(employee.role).toEqual('Employee');
        });
    });

    describe("Build Functions", () => {
        it('should create parameters for each build function', async () => {
            const employee = new Employee();

            await employee.build();

            expect(employee.email).toBeDefined();
            expect(employee.name).toBeDefined();
            expect(employee.id).toBeDefined();
        });
    });

});

describe("Engineer", () =>{
    describe("Initialization", () => {
        it('should create an Engineer object with the "role" parameter "Engineer"', () => {
            const engi = new Engineer();

            expect(engi.role).toEqual('Engineer');
        });
    });

    describe("Github", () => {
        it('should create a "Github" parameter for the engineer obj', async () => {
            const engi = new Engineer();

            await engi.getGithub();

            expect(engi.github).toBeDefined();
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

    describe("Office", () => {
        it('should create a "Github" parameter for the engineer obj', async () => {
            const manager = new Manager();

            await manager.getOffice();

            expect(manager.office).toBeDefined();
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

    describe("School", () => {
        it('should create a "Github" parameter for the engineer obj', async () => {
            const intern = new Intern();

            await intern.getSchool();

            expect(intern.school).toBeDefined();
        });
    });
});