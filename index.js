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

];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, utf8, function (err){
  if (err){
    throw err;
  }
   console.log("You have successfullly generated your ReadMe")
});
}


// function to initialize program
function init() {

}

// function call to initialize program
init();
