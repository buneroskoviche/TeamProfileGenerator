// Require dependencies
const inquirer = require('inquirer');
const fileSystem = require('fs');
const Manager = require('./lib/Manager');
// const Employee = require('./lib/Employee');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');

// Create an array to put employees into
const teamArr = [];

// Define a funciton that starts the app
const  init = async () => {
    console.log('Welcome to the Team Profile Generator!\nLet\'s get started by creating the manager position.\n');
    const manager = new Manager();
    await manager.build();
    teamArr.push(manager);
    menuStart();
}

// Define a function that starts the menu
const menuStart = async () => {
    // Log the current employees in the array
    console.log('\nThe team so far:\n===============');
    teamArr.forEach(employee => console.log(`${employee.role}: ${employee.name}`));
    console.log('===============\n');

    // Prompt the user for a menu selection, and apply answer to a variable
    let answer;
    await inquirer.prompt({
        type: 'list',
        name: 'answer',
        message: 'What would you like to do next?',
        choices: [ '1. Add an Engineer', '2. Add an Intern', '3. Write my HTML!'],
    }).then(choice => {answer = choice.answer[0]});

    // Use a switch statement to determine what to do based on the answer
    switch (answer) {
        case '1':
            // Create a new Engineer
            const engineer = new Engineer();
            await engineer.build();
            // Add it to the team array
            teamArr.push(engineer);
            // Go back to the menu
            menuStart();
            break;
        case '2':
            const intern = new Intern();
            await intern.build();
            teamArr.push(intern);
            menuStart();
            break;
        case '3':
            console.log('Writing your HTML...');
            break;
        default:
            break;
    }
}

// Start the app
init();
