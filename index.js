// Require dependencies
const inquirer = require('inquirer');
const fileSystem = require('fs');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');

// Create an array to put employees into
const employeesArr = [];

// Define a funciton that starts the app
const  init = async () => {
    console.log('Welcome to the Team Profile Generator!\nLet\'s get started by creating the manager position.')
    const manager = new Manager();
    await manager.build();
    employeesArr.push(manager);
}

// Define a function that starts the menu
const menuStart = async () => {
    console.log('menu start');
    // await inquirer.prompt({
    // });
}

// Start the app
init();