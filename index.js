// Require dependencies
const inquirer = require('inquirer');
const cheerio = require('cheerio');
const fs = require('fs');
const Manager = require('./lib/Manager');
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
            writeHTML();
            break;
        default:
            break;
    }
}

// Function that writes the html file
const writeHTML = () => {
    console.log('Writing your HTML...');

    // Copy the template HTML into a variable
    const template = fs.readFileSync('./src/template.html', {encoding: 'utf8', flag: 'r'});

    // Load the template into cheerio
    const $ = cheerio.load(template);
    // Cut out the default card into its own variable
    const card = cheerio.load($('#cards').html(), null, false);
    // Remove the default card
    $('#cards').empty();

    // Loop through the team array to create and append cards for each
    teamArr.forEach(employee => {

        // Replace generic areas
        card('#name').text(employee.name);
        card('#role').text(employee.role);
        card('#id').text(`ID: ${employee.id}`);
        card('#email').text(employee.email).attr('href', `mailto:${employee.email}`);

        // If statement determines the wildcard slot
        card('#wildcard').empty();
        if(employee.office) {
            card('#wildcard').text(`Office number: ${employee.office}`);
        } else if(employee.github) {
            card('#wildcard').append(`Github: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a>`);
        } else {
            card('#wildcard').text(`School: ${employee.school}`);
        }

        // Append to the document
        $('#cards').append(card.html());
    });

    // Write the result to file
    const completeHTML = $.html();
    fs.writeFile('./dist/MyTeam.html', completeHTML, error => 
        error ? console.log(error) : console.log('File is done! Check the "dist" folder for your web page.'))

}

// Start the app
init();