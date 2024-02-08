// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'reason',
        message: 'Why did you build this project? (Not including it being homework.)',
    },
    {
        type: 'input',
        name: 'solution',
        message: 'What problem did you solve with this project?',
    },
    {
        type: 'input',
        name: 'learning',
        message: 'What did you learn while building this project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licensing did you use for project?',
        choices: ['MIT', 'Apache 2.0', 'GNU v3', 'Mozilla 2.0', 'BSD 3-Clause', 'No license']
    },
    {
        type: 'input',
        name: 'features',
        message: 'List the features of your project here.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others developers contribute to your project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How do you run tests for your project?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${fileName}`)
  )
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(res => {
            console.log(res);
            writeToFile('README.md', data) 
        })
};

// Function call to initialize app
init();
