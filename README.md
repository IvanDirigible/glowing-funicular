# Professional README Generator

This is a command-line application for generating professional README files. A high-quality README file should explain what your application does, why you chose to construct it the way you did, and how it works for the user.

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Installation and Use

This application is not deployed in the typical manner. Instead, the folder will have to be accessed with your code editor of choice. VS Code is recommended.
1. Download or clone the repository from GitHub with the link below.
2. In the terminal, install the necessary packages. Such as:
```bash
  npm install
```
3. Then, start the application up:
```bash
  node index.js
```
4. Answer all of the questions, only pressing the Enter key when you are finished with your response. You will need to type 'Y' for "Yes" and 'n' for "No" for some questions.
5. Once you have answered all of the questions, you can find the newly generated README file in the main application folder.

## Links

* GitHub: https://ivandirigible.github.io/glowing-funicular/

The following link demonstrates the application generating a README file:

* Screencastify: 

## License
This project is licensed under the MIT license.  
License Link  
https://opensource.org/licenses/MIT   
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]