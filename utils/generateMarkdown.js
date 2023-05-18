// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.txt)';    
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://www.mozilla.org/en-US/MPL/2.0/)';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GNU GPLv3':
      return  '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3-Clause':
      return  '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return ''
  }
   
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0.txt';    
    case 'Mozilla':
      return 'https://www.mozilla.org/en-US/MPL/2.0/';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'GNU GPLv3':
      return  'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD 3-Clause':
      return  'https://opensource.org/licenses/BSD-3-Clause';
    default:
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === '') {
    return ''
  }

  let licenseLink = renderLicenseLink(license)

  return `
  ## License
  Please refer to the [${license}](${licenseLink}) license found in the repo.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let licenseText = renderLicenseSection(data.license)
  let licenseBadge = renderLicenseBadge(data.license)
  let licenseTOC

  if (licenseText == '') {
    licenseTOC = ''
  } else {
    licenseTOC = `
  * [License](#License)`
  }

  return `# ${data.title} - ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)${licenseTOC}
  * [Contributions](#Contributions)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  ${licenseText}
  ## Contributions
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.username}
  ${data.email}
  `
}

module.exports = generateMarkdown;
