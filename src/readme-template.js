// display licenses if selected
const optionalLicenses = licenses => {
    let tag = ``;
    if (licenses.includes("Apache")) { tag += `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) `}
    if (licenses.includes("IBM")) { tag += `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0) `}
    if (licenses.includes("MIT")) { tag += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) `}
    if (licenses.includes("Open Database License")) { tag += `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/) `}
    if (licenses.includes("Public Domain Dedication and License")) { tag += `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/) `}
    return tag;    
}

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
[Installation](#installation)
`};
    if (optionals.confirmUsage) { tableofcontentContent += `
[Usage](#usage)
`};
    if (optionals.license !== '') { tableofcontentContent += `
[License(s)](#licenses)
`};
    if (optionals.confirmContribution) { tableofcontentContent += `
[How to Contribute](#contribution)
`};
    if (optionals.confirmTests) { tableofcontentContent += `
[Tests](#tests)
`};
    return tableofcontentContent;
 }

 // draft readme template based on optionals
 const readmeDraft = optionals => {
    readmeOptionalContent = ``;
    if (optionals.confirmInstall) { readmeOptionalContent += `## Installation
${optionals.install}
`};
    if (optionals.confirmUsage) { readmeOptionalContent += `
## Usage
${optionals.usage}
`};
    if (optionals.license !== '') { readmeOptionalContent += `
## License(s)
${optionals.license}
`};
    if (optionals.confirmContribution) { readmeOptionalContent += `
## How to Contribute
${optionals.contribution}
`};
    if (optionals.confirmTests) { readmeOptionalContent += `
## Test
${optionals.tests}`};
    return readmeOptionalContent;
 };

//  compile and draft final readme template
let generateReadMe = readmeData => {
    // destructure projects and about data from templateData based on property key names
    const { name, email, github, portfolioName, description, ...optionals } = readmeData;
    return `# ${portfolioName}
${optionalLicenses(optionals.license)}

## Description
${description}

#### Screenshot
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