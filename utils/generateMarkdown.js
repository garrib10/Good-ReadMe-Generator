// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![github license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Table of Contents
  * [Installation](#installation)

  ## Installation
  ${data.installation}
`;
}

module.exports = generateMarkdown;
