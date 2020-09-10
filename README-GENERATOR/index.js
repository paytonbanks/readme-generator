// array of questions for user
const questions = [

    {
        type: "input",
        name: "??? ",
        message: " "
    },
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
    },
    
]

// function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
    });
}

// function to initialize program
function init() {
    prompt(questions).then(answers => {

        const response = generatedMarkdown(answers);
        console.log(answers);
    })

}

// function call to initialize program
init();




// READ //
// fs is a Node standard library package for reading and writing files
var fs = require("fs");

// return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile("data.csv", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  console.log(data);

});

// WRITE TO A FILE //

var fs = require("fs");

fs.writeFile("log.txt", process.argv[2], function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("Success!");

});
var fs = require("fs");
const { off } = require("process");

// APPEND //

fs.appendFile("log.txt", process.argv[2] + '\n', function(err) {

    if (err) {
        console.log(err);
    }
    else {
        console.log("Commit logged!");
    }
});