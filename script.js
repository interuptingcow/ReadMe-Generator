const fs = require('fs');
const fs = require('inquirer');

const generateReadMe = ({ Title, Description, installation, usage, contribution, tests, License, Features, Github, Email }) =>

``

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is your rpoject called',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Please describe your project a little.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Any special installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is this meant to be used?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please proivde contribution guidelines.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are some tests for your application?',
    },
    {
      type: 'list',
      name: 'License',
      message: 'What license would you like to use?',
      choices: ['MIT', 'Apache 2.0', 'GNU Public 3.0', 'Mozilla Public', 'the Unlicense'],
      default: 'MIT'
    },
    {
      type: 'input',
      name: 'Features',
      message: 'Please list the features of your project.',
    },
    {
      type: 'input',
      name: 'Github',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'Email',
      message: 'What is your email?',
    },
    
])
.then((answers) => {
  const ReadmePageContent = generateReadMe(answers);

  fs.writeFile('README.md', ReadmePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
});