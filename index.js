const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');

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
        message: "Waht is your email address?",
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
        type: "input",
        message: "What License will you be using?",
        name: "license",
    },
    {
        type: "input",
        message: "Who are the contributors for this Project?",
        name: "contributors",
    },
    {
        type: "checkbox",
        message: "Are you ready to run the test?",
        choices: ["Yes", "No"],
        name: "test",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, utf8, function (err) {
        if (err) {
            return err;
        }
        console.log("You have successfullly generated your ReadMe")
    });
}


// function to initialize program
function init() {

}

// function call to initialize program
init();
