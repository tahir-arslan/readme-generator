# README.md Generator

## Description
![Screenshot](/assets/images/screenshot.png)

A good project requires a detailed README.md with information about the app. Since every application is different, every README requires certain information to let the user know how the app works. It should include details on how to use/install the application, how to contribute to the project, and how to report any issues.

With a series of command-line questions, a user is able to automatically generate a README file based on the responses given. The user will also be able to include a screenshot of the application if desired. Following that choice, since every project is different, not all questions are required! This will automatically generate a markdown file based on the information the user provides.

This generator is powered by Node.js.

## Table of Contents
[Installation](#installation)
[Usage](#usage)
[Licenses](#licenses)
[Questions](#questions)

## Installation <a href="installation"></a>
To generate your own README, `git clone` the repo down to your local so you have the Node project on your local.

Run `npm install` in order to install the following npm package dependencies as specified in the `package.json`:

  * [`inquirer`](https://www.npmjs.com/package/inquirer) will prompt you for your inputs from the command line.

The application will start by running `node index.js` in the command line.

Answer the prompts in your command line to generate the README.

After answering all the prompts, your README file will be named 'README.md' and will be ready for you in the filepath `./dist/`.

## Usage <a href="usage"></a>
When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub and about your project.

From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts (so, if you don't answer the optional questions, such as Contributions, a Contributions section will not be included in your README).

## Licenses <a href="usage"></a>
MIT

## Contact <a href="contact"></a>
If you utilize this app to generaet a README for a project, don't hesitate to show it to me! Feel free to contact me with examples or any questions from my information below:

Arslan Tahir (Full Stack Developer)
GitHub: [@tahir-arslan](https://github.com/users/tahir-arslan)
Email: tahir.arslan@gmail.com
