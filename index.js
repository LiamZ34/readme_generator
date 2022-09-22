// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs/promises');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        name: "title",
        message: "Enter project title here",
    },
    {
        type: "list",
        name: "license",
        message: "Select license here",
        choices: ["MIT", "GPL", "Apache 2.0"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(__dirname, "/examples/", fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    console.log('hello world')
    inquirer.prompt(questions).then((answers) => {
       console.log(answers)
       writeToFile("README.md",generateMarkdown (answers))
      })
}

// Function call to initialize app
init();