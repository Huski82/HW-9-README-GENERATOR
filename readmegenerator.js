
  const inquirer = require('inquirer');
  const fs = require('fs');
  const util = require('util');
  const writeFileAsync = util.promisify(fs.writeFile);
  const promptUser = () =>
    inquirer.prompt([
      {
          type: 'input',
          name: 'appDescription',
          message: 'Name of your Application',
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
        name: 'function2',
        message: 'Input Function 2',
      },
      {
        type: 'input',
        name: 'function3',
        message: 'Input Function 3',
      },
      {
          type: 'input',
          name: 'appLink',
          message: 'Link to Application',
        },
    ]);
  const generateHTML = (answers) =>
  `![](${appLogo})
  ${answers.appDescription}
  [${appTitle} Link](${appLink})
  [Git Repository for the Application ](${appGitRepo})
  ## Table of contents
  * [Title](#Title)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Technologies](#Technologies)
  * [Contributions](#Contributions)
  * [Test](#Test)
  * [License](#License)
  ## Installation
  ${appInstallInstructions}
  * Once the application is downloaded from git, change to the ./js directory
  * run "npm install" to install the required modules
  ## Usage
  The user can use this application to generate a README.md file containing the sections selected. Once the file is created it can me opened and modified using any standard text editor.
  * User changes directory to the ./js path 
  * Executes the "node readmemaker.js" to start the program
  * User selects the sections they want to have in the README.md file
  * User is prompted for questions and when completed file will be generated in ../output directory. User can edit the file or open in preview of web browser to see the formatted output.
  ![](${appGif})
  ## Technologies
  This was developed using a variety of technologies and resources all are open source.
  * VSCode - used to create and edit the application
  * node.js - the js interpreter used to execute the stand alone js
  * npm - node package manager used to install and track dependencies
  * npm modules inquirer,utils and fs
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