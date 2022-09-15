 // draft description with optional screenshot
 const optionalScreenshot = optionals => {
    screenshotContent = ``;
    if (optionals.confirmScreenshot) { screenshotContent+= `![Screenshot](${optionals.screenshot})`};
    return screenshotContent;
 };

 // draft table of contents based on options
 const tableofcontentDraft = optionals => {
    tableofcontentContent = `## Table of Contents`;
    if (optionals.confirmInstall) { tableofcontentContent += `
    [Installation](#installation)`};
    if (optionals.confirmUsage) { tableofcontentContent += `
    [Usage](#usage)`};
    if (optionals.license !== '') { tableofcontentContent += `
    [License(s)](#licenses)`};
    if (optionals.confirmContribution) { tableofcontentContent += `
    [How to Contribute](#contribution)`};
    if (optionals.confirmTests) { tableofcontentContent += `
    [Tests](#tests)`};
    console.log(tableofcontentContent);
    return tableofcontentContent;
 }

 // draft readme template based on optionals
 const readmeDraft = optionals => {
    readmeOptionalContent = ``;
    if (optionals.confirmInstall) { readmeOptionalContent += `## Installation <a href="installation"></a>
    ${optionals.install}`};
    if (optionals.confirmUsage) { readmeOptionalContent += `## Usage <a href="usage"></a>
    ${optionals.usage}`};
    if (optionals.license !== '') { readmeOptionalContent += `## License(s) <a href="licenses"></a>
    ${optionals.license}`};
    if (optionals.confirmContribution) { readmeOptionalContent += `## How to Contribute <a href="contribution"></a>
    ${optionals.contribution}`};
    if (optionals.confirmTests) { readmeOptionalContent += `## Test <a href="tests"></a>
    ${optionals.tests}`};
 };

let generateReadMe = readmeData => {
    console.log(readmeData);
    // destructure projects and about data from templateData based on property key names
    const { name, email, github, portfolioName, description, ...optionals } = readmeData;

    return `
        # ${portfolioName}

        ## Description
        ${description}
        ${optionalScreenshot(optionals)}

        ${tableofcontentDraft(optionals)}
        [Questions](#questions)

        ${readmeDraft(optionals)}

        ## Questions <a href = "questions"></a>
        My name is ${name}, the creator of this project. If you have any issues, comments, concerns, or questions regarding this project, feel free to contact me at ${email}.

        If you would like to check out my other projects, feel free to explore my !(GitHub Page)[https://github.com/${github}/].
    `;
};

module.exports = generateReadMe