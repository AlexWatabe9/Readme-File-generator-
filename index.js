// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter title of application'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter description of code/ web application and what it does'
    },
    {
        type: 'input',
        name: 'user story',
        message: 'Enter User story here'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if (err){
            console.error(err);
        }
         else{
            console.log('Created Readme file')
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((response) => {
        const generateMarkdown = require('./generateMarkdown');
        const markdown = generateMarkdown(response);
        writeToFile('README.md', markdown);
      });
  }
  
  init();