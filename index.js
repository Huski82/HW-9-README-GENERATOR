
  const inquirer = require('inquirer');
  const fs = require('fs');
  const util = require('util');
  const writeFileAsync = util.promisify(fs.writeFile);
  
  const promptUser = () =>
    inquirer.prompt([
      {
          type: 'input',
          name: 'appDescription',
          message: 'Application Name',
        }, 
        {
          type: 'input',
          name: 'appLogo',
          message: 'Please add your application logo here:',
        },
        {
          type: 'input',
          name: 'appLink',
          message: 'Input the url for your application: ',
        },
      {
        type: 'input',
        name: 'appGitRepo',
        message: 'Input the github url for your application: ',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repository?',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repository?',
      },
      {
          type: 'input',
          name: 'appLink',
          message: 'Link to Application',
        },
    ]);
  //end of prompt
  const generateHTML = (answers) =>
  
  `![https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJsuRnxauc5CtVxNv3CIKAPg43yDDlG-bLRA&usqp=CAU](${answers.appLogo})
  
  


# Generator Maker$

## Description

This project is a command line application that automatically generates a professional README markdown file for a repository based on answers from the user. 
When the application runs, it presents a series of prompts to the user to fill in sections in the README. 
Then the README markdown file with the user information is saved inside the output folder.

### Demonstration

Application Demonstration: [README Generator Demo]


## Table of contents
  * [Title](#Title)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Technologies](#Technologies)
  * [Contributions](#Contributions)
  * [Test](#Test)
  * [License](#License)
  
  ## Installation
  
  * Once the application is downloaded from git, change to the ./js directory
  * run "npm install" to install the required modules
  
  ## Usage
  The user can use this application to generate a README.md file containing the sections selected. Once the file is created it can me opened and modified using any standard text editor.
  * User changes directory to the ./js path 
  * Executes the "node readmemaker.js" to start the program
  * User selects the sections they want to have in the README.md file
  * User is prompted for questions and when completed file will be generated in ../output directory. User can edit the file or open in preview of web browser to see the formatted output.

    
  
  ## Technologies
  This was developed using a variety of technologies and resources all are open source.
  * [Node.js](https://nodejs.org/)
  * [Inquirer.js](https://www.npmjs.com/package/inquirer)
  
  ## Contributions
  
  Contributors helped in development:
  * Kathleen & Lucah 
  
  ## Test
  No testing is available at this time
  
  ## License
  MIT`;
  
  promptUser()
    .then((answers) => writeFileAsync('README.md', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));








