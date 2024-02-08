// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No license') {
    return ''
  } else
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)]`
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'No license') {
    return ''
  } else
  return `https://opensource.org/licenses/${license}`
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'No license') {
    return ''
  } else
  return `## License\nThis project is licensed under the ${license} license.\nLicense Link\n${renderLicenseLink(license)}\n${renderLicenseBadge(license)}`
};

function renderFeatures(data) {
  if (`${data.featuresConfirm}` === 'true') {
    console.log("This is getting a true features boolean.")
    return `## Features\n${data.features}`
  } else
  console.log("This is getting a false features boolean.")
  return ''
};

function renderContribute(data) {
  if (`${data.contributeConfirm}` === 'true') {
    console.log("This is getting a true contribute boolean.")
    return `## How to Contribute\n${data.contribute}`
  } else
  console.log("This is getting a false contribute boolean.")
  return ''
};

function renderTesting(data) {
  if (`${data.testingConfirm}` === 'true') {
    console.log("This is getting a true testing boolean.")
    return `## Tests\n${data.testing}`
  } else
  console.log("This is getting a false testing boolean.")
  return ''
};

function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  * ${data.reason}
  * ${data.solution}
  * ${data.learning}
   
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Repository Link
  * GitHub: https://${data.username}.github.io/${data.repoName}/

  ## Credits
  ${data.credits}

  ${renderLicenseSection(data.license)}

  ${renderFeatures(data)}

  ${renderContribute(data)}

  ${renderTesting(data)}
`;
}

module.exports = generateMarkdown;
