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
        choices: ["MIT", "GPL", "Apache"]
    },
    {
        type: "input",
        name: "GithubUser",
        message: "Enter Github username here",
    },
    {
        type: "input",
        name: "Email",
        message: "Enter email address here",
    },
    {
        type: "input",
        name: "description",
        message: "Enter description here",
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "contribution",
        message: "What does the user need to know about contributing to the repo?",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(__dirname, "/examples/", fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    // console.log('hello world')
    inquirer.prompt(questions).then((answers) => {
       console.log(answers)
       writeToFile("README.md",generateMarkdown (answers))
      })
}

// Function call to initialize app
init();