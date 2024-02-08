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

// function renderFeatures(data) {
//   if (data.featuresConfirm === 'false') {
//     return ''
//   } else
//   return `## Features\n${data.features}`
// };

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  * ${data.motivation}
  * ${data.reason}
  * ${data.solution}
  * ${data.learning}
   
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Credits](#credits)
  [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ${renderLicenseSection(data.license)}

  ## Features
  ${data.features}

  ## How to Contribute
  ${data.contribute}

  ## Tests
  ${data.testing}
`;
}

module.exports = generateMarkdown;
