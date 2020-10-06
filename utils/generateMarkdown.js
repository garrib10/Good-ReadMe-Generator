// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  
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
  
  ![github license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  

  ## Tests
  ${data.test}
  
  
  ## Contributors
  ${data.contributors}

  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
