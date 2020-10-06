const inquirer = require("inquirer");
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")

// Questions // 
// Title // 
// Description  // 
// Table of Contents // 
// Installation // 
// Usage  // 
// License  // 
// Contributing  // 
// Tests  // 

// Questions for the Read Me Generator  // 
const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "user",
    },
    {
        type: "input",
        message: "Whatt is your email address?",
        name: "email",

    },
    {
        type: "input",
        message: "What is the title of your Project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the Project description?",
        name: "description",
    },
    {
        type: "input",
        message: "What are the Table of Contents for this project?",
        name: "contents",
    },
    {
        type: "input",
        message: "What needs to be installed to make this project run properly?",
        name: "installation",
    },
    {
        type: "input",
        message: "How will this application be used?",
        name: "usage",
    },
    {
        type: "list",
        message: "What License will you be using?",
        name: "license",
        choices:["MIT","APACHE","GPL","ISC"]
    },
    {
        type: "input",
        message: "Who are the contributors for this Project?",
        name: "contributors",
    },
    {
        type: "input",
        message: "What is the command to run test?",
        name: "test",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
   
}


// function to initialize program
function init() {
 inquirer.prompt(questions).then(function(answers) {
     console.log(answers)
     writeToFile("README.md", generateMarkdown(answers))
 })
}

// function call to initialize program
init();
