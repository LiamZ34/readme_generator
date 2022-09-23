// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="MIT") {
    return "![MIT](https://img.shields.io/badge/License-MIT-blue)";
  } else if(license==="GPL") {
    return "![GPL](https://img.shields.io/badge/License-GPL-brightgreen)";
  } else if (license==="Apache") {
    return "![Apache](https://img.shields.io/badge/License-Apache%202.0-yellow)";
  } else {
    return "" 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if(license==="MIT") {
  //   return "![MIT](https://opensource.org/licenses/MIT)";
  // } else if(license==="GPL") {
  //   return "![GPL](https://opensource.org/licenses/gpl-license)";
  // } else if (license==="Apache") {
  //   return "![Apache](https://opensource.org/licenses/Apache-2.0)";
  // } else {
  //   return "" 
  // }
  
  const licenseLink = {
      Apache: "https://opensource.org/licenses/Apache-2.0",
      MIT: "https://opensource.org/licenses/MIT",
      GPL: "https://opensource.org/licenses/gpl-license"
  }
  return licenseLink[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `[${renderLicenseBadge(license)}](${renderLicenseLink(license)})`;
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}

  ## Description 
  ${data.description}


  ## Table Of Contents
  * [License](#license)

  * [Usage](#usage)

  * [Contribution](#contribution)

  * [Tests](#tests)

  * [Installation](#installation)

  * [Questions](#questions)

  ## License
  This project is licensed by ${data.license} license
  
  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Tests 
  To run tests run the following command: ${data.tests}

  ## installation
  To install necessary dependencies please run the following command: ${data.installation}
    
  ## Questions
  If you have any questions, please contact me directly at ${data.Email}. To see more go to [William](https://github.com/${data.GithubUser})
`;
}

module.exports = generateMarkdown;
