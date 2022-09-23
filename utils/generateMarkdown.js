// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="MIT") {
    return "![MIT](https://img.shields.io/badge/License-MIT-blue)";
  } else if(license==="GPL") {
    return "![GPL](https://img.shields.io/badge/License-GPL-brightgreen)";
  } else if (license==="Apache 2.0") {
    return "![Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-yellow)";
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
 
  ## Description 
  ${data.description}


  ## Table Of Contents
  - [License](#license)

  ## License
  This project is licensed by ${data.license} license
  
  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}}
`;
}

module.exports = generateMarkdown;
