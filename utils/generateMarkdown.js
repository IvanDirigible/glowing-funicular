function renderLicenseBadge(license) {
  var svgColor = ''
  if (license !== 'No license') {
   if (license === 'MIT') {
    svgColor = 'MIT-yellow'
  } else if (license === 'Apache-2.0') {
    svgColor = 'Apache_2.0-yellowgreen'
  } else if (license === 'GPL-3.0') {
    svgColor = 'GPLv3-blue'
  } else if (license === 'MPL-2.0') {
    svgColor = 'MPL_2.0-brightgreen'
  } else if (license === 'BSD-3-Clause') {
    svgColor = 'BSD_3--Clause-orange'
  }
  return `[![License: ${license}](https://img.shields.io/badge/License-${svgColor}.svg)]`
  } return ''
};

function renderLicenseLink(license) {
  if (license === 'No license') {
    return ''
  } else
  return `https://opensource.org/licenses/${license}`
};

function renderLicenseSection(license) {
  if (license === 'No license') {
    return ''
  } else
  return `## License\nThis project is licensed under the ${license} license.\nLicense Link\n${renderLicenseLink(license)}\n${renderLicenseBadge(license)}`
};

function renderFeatures(data) {
  if (`${data.featuresConfirm}` === 'true') {
    return `## Features\n${data.features}`
  } else
  return ''
};

function renderContribute(data) {
  if (`${data.contributeConfirm}` === 'true') {
    return `## How to Contribute\n${data.contribute}`
  } else
  return ''
};

function renderTesting(data) {
  if (`${data.testingConfirm}` === 'true') {
    return `## Tests\n${data.testing}`
  } else
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
