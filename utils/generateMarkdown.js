// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![github license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#usage)
  * [Tests](#tests)
  * [Contributors](#contributors)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License
  ${data.license}
  

  ## Tests
  ${data.tests}

  ## Contributors
  ${data.contributors}

  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
