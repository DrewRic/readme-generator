const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: "input",
      name: "userName",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "title",
      message: "What is your project's name?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project.",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "Apache License 2.0", "GPL 3.0", "BSD3", "No License"],
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies?",
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
    },
    {
      type: "input",
      name: "contributing",
      message: "Please list any additional contributors to your project.",
    },
  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.info('data:', data);
  return fs.writeFileSync(path.join(process.cwd(),fileName),data);
  }

  async function init() {
    const answers = await
    inquirer.prompt(questions);
    console.log('Created a readme successfully...');

    writeToFile('TESTREADME.md', generateMarkdown(answers));
  }