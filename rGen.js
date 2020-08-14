//dependencies
const inquirer = require("inquirer");
const fs = require('fs');

//ask questions to determine README content
inquirer.prompt([
    {
        type: "input",
        message: "Project Title:",
        name: "title",
    },
    {
        type: "input",
        message: "Github Repo Address:",
        name: "repo",
    },
    {
        type: "input",
        message: "Github Username:",
        name: "username",
    },
    {
        type: "input",
        message: "E-Mail Address:",
        name: "email",
    },
    {
        type: "editor",
        message: "Description:",
        name: "description",
    },
    {
        type: "input",
        message: "Installation Instructions:",
        name: "install",
    },
    {
        type: "input",
        message: "Usage Info:",
        name: "usage",
    },
    {
        type: "input",
        message: "Contributing:",
        name: "contrib",
    },
    {
        type: "input",
        message: "Testing Instructions:",
        name: "test",
    },

    {
        type: "list",
        message: "Please choose a license for your project.",
        choices: ["MIT", "Apache License 2.0", "GNU", "BSD 2-Clause 'Simplified'", "BSD 3-Clause 'New'", "None"],
        name: "license",
    }
    //fswritefile (expects name, data and callback)
]).then(function (response) {
//use template literal to layout and write the README
    fs.writeFile("README.md",
`# ${response.title}

## Description:
${response.description}

## Installation Instructions:
${response.install}

## Usage Info:
${response.usage}

## Contributing:
${response.contrib}

## Testing Instructions:
${response.test}

## Contact Me!
Github Repo: ${response.repo}

View my Github at github.com/${response.username}/

Have a question? E-mail me at ${response.email}

This README was generated with my rGen CLI app!
    
## Licensing Info:
${response.license}`,
    function (err) {
        if (err) return console.log(err);
        console.log("success");
    }
)});

