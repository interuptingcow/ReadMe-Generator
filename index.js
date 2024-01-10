const fs = require('fs');
const inquirer = require('inquirer');

const generateReadMe = ({ Title, Description, installation, usage, contribution, tests, License, Features, Github, Email }) =>

`# ${Title}

## Description\n
\`\`\`md
${Description}
\`\`\`

![License](https://img.shields.io/badge/license-${License}-blue.svg)

## Table of Contents
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [License](#license)
* [Contact Me](#contact-me)

## Features\n
\`\`\`md
* ${Features}
\`\`\`

## Installation\n
\`\`\`md
${installation}
\`\`\`

## Usage\n
\`\`\`md
${usage}
\`\`\`

## Constribution\n
\`\`\`md
${contribution}
\`\`\`

## Tests\n
\`\`\`md
${tests}
\`\`\`

## License\n

The license chosen for this project is the ${License} license. For more information about the license, visit https://choosealicense.com/licenses/${License.toLowerCase()}


## Contact Me\n

Questions, Comments, Concerns? => [Github Profile](https://github.com/${Github}) or ${Email}.

`

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is your project called?',
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
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'MPL-2.0', 'Unlicense'],
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
  fs.writeFile('READMEtest.md', ReadmePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created ReadMe.md!')
  );
});