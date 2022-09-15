// Packages
const inquirer = require('inquirer');
const generateReadMe = require('./src/readme-template');

// Obtain User Information

// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

const promptData = readmeData => {
    console.log(`
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    Hello! Welcome to this README.md generator. I will begin by asking a series of questions
    for your project, starting with your name, email, and GitHub username.

    I will then ask details about your project, for which only some feilds are required.
    These questions (in the following order) include: 
    Title, Description, Screenshot, Installation, Usage, License(s), Contribution Guidelines, and Tests Instructions,
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    `);
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'To begin, please tell me what is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'portfolioName',
            message: 'Now, what is the name of your project? (Required)',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: projectDescriptionInput => {
                if (projectDescriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmScreenshot',
            message: 'Would you like to include a screenshot of the project?',
            default: false
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'Enter the filepath of your screenshot without any quotations or paranthesis. For example: ./assets/images/screenshot.png',
            validate: projectScreenshotInput => {
                if (projectScreenshotInput) {
                    return true;
                } else {
                    console.log("You forgot to enter the filepath! Please enter the filepath of the screenshot to continue.")
                    return false;
                }
            },
            when: ({ confirmScreenshot }) => confirmScreenshot
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Does the project require installation instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please explain how to install your project.',
            validate: projectInstallInput => {
                if (projectInstallInput) {
                    return true;
                } else {
                    console.log("You didn't explain anything! Please explain how to install your project")
                    return false;
                }
            },
            when: ({ confirmInstall }) => confirmInstall
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Do you need to explain how to use the application?',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please explain how to use this application.',
            validate: projectUsageInput => {
                if (projectUsageInput) {
                    return true;
                } else {
                    console.log("You didn't explain anything! Please explain how to use your project")
                    return false;
                }
            },
            when: ({ confirmUsage }) => confirmUsage
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose the appropriate license(s) for this project:',
            choices: ['Apache', 'IBM', 'MIT', 'Open Database License', 'Public Domain Dedication and License']
        },
        {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Would you like to let the world know how to contribute to this project?',
            default: false
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please explain how someone can contribute to this project..',
            validate: confirmContribution => {
                if (confirmContribution) {
                    return true;
                } else {
                    console.log("Don't be shy! Let people know how they can help contribute to this project.")
                    return false;
                }
            },
            when:({ confirmContribution }) => confirmContribution
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Lastly, would you like to an explanation as to how the application can be tested?',
            default: false
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Be sure to provide examples on how to run the tests as well.',
            validate: projectTestInput => {
                if (projectTestInput) {
                    return true;
                } else {
                    console.log("You forgot to explain how to test the application! Don't forget to include how to run the test as well.")
                    return false;
                }
            },
            when:({ confirmTests }) => confirmTests
        }
    ])
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

promptData()
    .then(readmeData => {return generateReadMe(readmeData)})
