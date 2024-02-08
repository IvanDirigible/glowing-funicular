// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'repoName',
        message: 'What is the exact name of your repository you are making this README for?'
    },
    {
        type: 'input',
        name: 'reason',
        message: 'Explain why you built this project. What was your motivation?',
    },
    {
        type: 'input',
        name: 'solution',
        message: 'Explain what problem you solved with this project.',
    },
    {
        type: 'input',
        name: 'learning',
        message: 'Explain what you learned while building this project, and how you grew as a software developer.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
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
        choices: ['MIT',
        {value: 'Apache-2.0', name: 'Apache 2.0'},
        {value: 'GPL-3.0', name: 'GNU v3'},
        {value: 'MPL-2.0', name: 'Mozilla 2.0'},
        {value: 'BSD-3-Clause', name: 'BSD 3-Clause'},
        'No license',
        ]
    },
    {
        type: 'confirm',
        name: 'featuresConfirm',
        message: 'Are there additional features you would like to list?',
    },
    {
        type: 'input',
        name: 'features',
        message: 'List the features of your project here.',
        when: (answers) => answers.featuresConfirm,
    },
    {
        type: 'confirm',
        name: 'contributeConfirm',
        message: 'Do you want to let other developers know how they can contribute to your project?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Describe how others developers can contribute to your project.',
        when: (answers) => answers.contributeConfirm,
    },
    {
        type: 'confirm',
        name: 'testingConfirm',
        message: 'Have you written tests for your project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How do you run tests for your project?',
        when: (answers) => answers.testingConfirm,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
//     fs.writeFile(fileName, JSON.stringify(data, null, 4), (err) =>
//     err ? console.error(err) : console.info(`\nData written to ${fileName}`)
//   )

// fs.writeFileSync(fileName, JSON.stringify(data.data));
// console.log("File written successfully\n");
// console.log("The written has the following contents:");
// console.log(fs.readFileSync(fileName, "utf8"));
fs.writeFile(fileName, data, err => {
    if (err) {
        throw err
    };
    console.log('Your README file has been successfully generated!')
})
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            console.log(data);
            writeToFile('README-Example.md', generateMarkdown(data)) 
        })
};

// Function call to initialize app
init();
