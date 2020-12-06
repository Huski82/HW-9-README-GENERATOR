const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const promptUser = () =>
  inquirer.prompt([
    {
        type: "input",
        name: "appTitle",
        message: "Name of your Application",
      },
      {
        type: "input",
        name: "useCase",
        message: "Use Case for your application ",
      },
    {
      type: "input",
      name: "function1",
      message: "Input Function 1 ",
    },
    {
      type: "input",
      name: "function2",
      message: "Input Function 2",
    },
    {
      type: "input",
      name: "function3",
      message: "Input Function 3",
    },
    {
        type: "input",
        name: "appLink",
        message: "Link to Application",
      },
  ]);
const generateHTML = (answers) =>
`<## Table of contents
* [Use Case](#use-case)
* [Application Objective](#application-objective)
* [Functionality](#functionality)
* [Setup](#setup)
* [Technologies Used](#technologies-used)
* [Developers](#developers)
## Use Case
${answers.useCase}
----
## Application Objective
The goal of the project was to create a website that searches for recipes and music depending on what cuisine of your choice so that the user is provide a playlist from that same ethnic culture. Thus giving the User a full immersed experience and feeling of that culture.
[${answers.appTitle} Link](${answers.appLink})
## Functionality
The user will have the ability to:
* ${answers.function1}
* ${answers.function2}
* ${answers.function3}
`;
promptUser()
  .then((answers) => writeFileAsync("README.md", generateHTML(answers)))
  .then(() => console.log("Successfully wrote to README.md"))
  .catch((err) => console.error(err));






  