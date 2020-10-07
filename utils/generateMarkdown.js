// function to generate markdown for README
function generateMarkdown(data) {
  const picture = `https://github.com/${data.username}.png?size=50`;
  const gitHub = `https://img.shields.io/badge/Github-${data.username}-blue`;
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
  
  \nWalkthrough Video Link:https://drive.google.com/file/d/1UaBtr0I9ooHa7CiBwW2xWyybpozq3t3Y/view
  
  ## Contributors
  ${data.contributors}

  ## Questions
  \n![Profile Image](${picture})
  \n![badge](${gitHub})
  \nView my Github profile : ${data.url}
  \nYou can contact me at ${data.email}
   
`;
}

module.exports = generateMarkdown;
