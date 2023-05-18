// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
const { resolve } = require('path');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your application? ',
    'Give a brief description of the project describing why it was built and what problem it solves ',
    'How would a user install this application? ',
    'Explain how a user can use this application ',
    'Which license does this application use? ',
    'Describe the contribution guidelines around this project ',
    'Explain how a user could run tests for this project ',
    'What is your GitHub username? ',
    'What is your email address? '
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err? console.error(err) : console.log("Success!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage'
        },
        {
            type: 'list',
            message: questions[4],
            name: 'license',
            choices: ['Apache 2.0', 'BSD 3-Clause', 'GNU GPLv3', 'MIT', 'Mozilla', 'No license'],
            filter: (answers) => {
                if (answers === 'No license') {
                    return ''
                } else {
                    return answers
                }
            }
        },
        {
            type: 'input',
            message: questions[5],
            name: 'contribution'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'tests'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'username'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email'
        }
    ])
    .then((answers) => {
        let dynamicMarkdown = generateMarkdown(answers)
        writeToFile('generatedREADME.md',dynamicMarkdown)

    })
}

// Function call to initialize app
init();
