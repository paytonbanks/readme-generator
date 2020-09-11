const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { prompt } = require("inquirer");

// The built-in util package can be used to create Promise-based versions of functions using node style callbacks
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);





// array of questions for user

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
        message: "Installations instructions to follow:"
    },
    {
        type: "input",
        name: "usage ",
        message: "Describe the usage."
    },
    {
        type: "list",
        message: "Select a license",
        name: "License Types",
        choices: [
            "Other1",
            "Other2",
            "Other3",
            "MIT",
            "Other5"
            
        ]
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
        name: "tests",
        message: "Run test here"
    },
    {
        type: "input",
        name: "tests",
        message: "Run test here"
    }
];

function generateMarkdown(data) {
    
    return 


};

// function writeToFile("READMe.md", data) {
//     fs.writeToFile(fileName, data, err => {
//         if (err) console.log(err);
//         console.log("Sucess!");
//     });    
// }

function init() {
    prompt(questions).then(input => {

        const response = generateMarkdown(input);

        fs.writeToFile("READMe.md", response, err => {
            if (err) {
                throw err;

            }    
    
        })
   
    });

}

init();