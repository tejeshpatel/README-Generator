// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What do you want to call your project?'
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please describe your project.'
    },
    {
        type: 'input',
        name: 'projectInstall',
        message: 'Please provide installation instructions for your project'
    },
    {
        type: 'input',
        name: 'projectUse',
        message: 'Please describe what your project is used for.'
    },
    {
        type: 'checkbox',
        name: 'projectLicense',
        message: 'Please choose the license for your project',
        choices: [
            'Academic Free License v3.0',
            'Apache license 2.0',
            'Artistic license 2.0',
            'Boost Software License 1.0',
            'BSD 3-clause Clear license',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'ISC',
            'LaTeX Project Public License v1.3c',
            'Microsoft Public License',
            'MIT',
            'Mozilla Public License 2.0',
            'Open Software License 3.0',
            'PostgreSQL License',
            'SIL Open Font License 1.1',
            'zLib License'
        ]
    },
    {
        type: 'input',
        name: 'projectContributors',
        message: 'Please provide the project contributors.'
    },
    {
        type: 'input',
        name: 'projectTest',
        message: 'How is your project tested?'
    },
    {
        type: 'input',
        name: 'projectGithubUsername',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'projectUserEmail',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            throw err;
        }
    console.log("README file has been generated.")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        inquirerresponses = generateMarkdown(data);
        writeToFile("autoREADME.md", inquirerresponses)
    });
}

// Function call to initialize app
init();
