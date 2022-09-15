// Packages
const inquirer = require('inquirer');

// Obtain User Information

// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

const promptUser = () => {
    console.log(`
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    Hello! Welcome to this README.md generator.
    I will begin by asking a series of questions
    for your project, starting with your:
    Name, Email, and GitHub Username.
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    `);
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'Please tell me, what is your name? (Required)',
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
        }
    ]);
};

const promptProject = portfolioData => {
    console.log(`
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    Now, I will ask questions about your
    project in the following order:
        Title, Description, Installation, 
        Usage, License(s), Contribution
        Guidelines, and Tests Instructions,
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  `);
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
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
                type: 'input',
                name: 'contribution',
                message: 'Please explain how to contribute to this project. (Optional: To skip, just press enter.)',
            },
            {
                type: 'input',
                name: 'test',
                message: 'Lastly, feel free to write tests for your application. Be sure to provide examples on how to run them. (Optional: To skip, just press enter.) ',
            }
        ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        });
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

promptUser()
    .then(promptProject);