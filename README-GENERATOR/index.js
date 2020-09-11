const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

const { prompt } = require("inquirer");

console.log('PLEASE BEGIN BY ANSWERING THE FIRST QUESTION');

const questions = [

    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the instructions to follow?"
    },
    {
        type: "input",
        name: "usage ",
        message: "Describe the usage."
    },
    {
        type: "list",
        name: "license",
        choices: [
            "APACHE",
            "Other2",
            "Other3",
            "MIT",
            "Other5"
        ],
        message: "Select a license from below"
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the rules for contributing?"
    },
    {
        type: "input",
        name: "authors",
        message: "Who are the authors? "
    },
    {
        type: "input",
        name: "test",
        message: "How do you run test on the project?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email in Github?"
    }

];


///// THIS WAS THE GENERATOR MARKDOWN JS //
function generateMarkdown(data) {

    return `
    
    # ${data.title}

    > ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Installation](#usage)
    * [Installation](#license)
    * [Installation](#contributing)
    * [Installation](#tests)
    * [Installation](#questions)
   
    # Installation
    ${data.installation}
   
    ## Usage
    ${data.usage}
   
    ## Licensing
    ${data.license}   

    ## Contribution
    ${data.contributing}
   
    ## Testing
    ${data.tests}

    ${data.questions}
    
    ## Badges
    
    ## Contact Info
    [GitHub](http://github.com-${data.email}!)

`};

function init() {
    prompt(questions).then(input => {

        const response = generateMarkdown(input);
        console.log(input.description);

        fs.writeFile("README.md", response, err => {
            if (err) {
                throw err;
                console.log(`Successful`)
            }

        })
    });
}

init();