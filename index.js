// Require dependencies
const inquirer = require('inquirer');
const fileSystem = require('fs');
const Manager = require('./lib/manager');

// Define a funciton that starts the app
const init = () => {
    console.log('getting started');
    const manager = new Manager;
}

// Start the app
init();