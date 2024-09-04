// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "Apache 2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "BSD3") {
      return "[![License: BSD3](https://img.shields.io/badge/License-BSD3-purple.svg)](https://opensource.org/license/bsd-3-clause)";
    } else if (license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "GPL 3.0") {
      return "[![License: GPL 3.0](https://img.shields.io/badge/License-GPL_3.0-green.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)";
    } else {
      return "";
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === 'None'){
      return ''
    }
    return ' [License](#license)'
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== "None") {
     
      return `## License
      
      This application is covered under the ${license} license`
    } else {
      return '';
    }
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
    ${renderLicenseBadge(data.license)}
  
    ## Description
  
    ${data.description}
  
    ## Table of Contents
  
    [Installation](#Installation)<br>
    [Contributing](#Contributing)<br>
   ${renderLicenseLink(data.license)}<br>
    [Tests](#Tests)<br>
    [Questions](#Questions)<br>
  
    ## Installation
  
    To install the necessary dependencies for this application, please run the following command: 
  
    ${data.installation}
  
    ## Contributing
  
    ${data.contributing}
  
    ${renderLicenseSection(data.license)}
  
    ## Tests
  
    ${data.test}
  
    ## Questions
  
    If you have any questions regarding this application, please email me at ${data.email}<br>
    More of my creations can be found by visiting http://github.com/${data.userName}. 
  `;
  }
  
  module.exports = generateMarkdown;