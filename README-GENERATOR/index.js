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
        name: "usage",
        message: "Describe the usage."
    },
    {
        type: "list",
        name: "license",
        choices: [
            "APACHE",
            "BSD",
            "MIT",
            "SDI"
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

// _______ README MARKDOWN DESIGN ___________ //

function generateMarkdown(data) {

return `
    
# ${data.title}
================

## DESCRIPTION
${data.description}

## TABLE OF CONTENTS
-----
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributing)
* [Test](#tests)
* [Questions](#questions)

## INSTALLASTION
${data.installation}

## USAGE
${data.usage}

## LICENSING
${data.license}   
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## CONTRIBUTION
${data.contributing}

## TESTING
${data.test}


## BADGES
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)


## CONTACT INFO
${data.name}
>email: ${data.email}
>github: http://github.com/${data.email}


`
};

function init() {
    prompt(questions).then(input => {

        const response = generateMarkdown(input);
        console.log("Enjoy the README. Please use us again!");

        fs.writeFile("README.md", response, err => {
            if (err) {
                throw err;
                console.log(`Successful`)
            }

        })
    });
}

init();