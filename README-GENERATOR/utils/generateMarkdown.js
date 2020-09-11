// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    
  ## Table of Contents
  ${data.description}  
  
  ## Description
  ${data.description}  
  
  ## Installation
  ${data.description}  
  
  ## Usage
  ${data.description}  
  
  ## Contributors
  ${data.description}  
  
  ## Test
  ${data.description}  

  ## Questions
  ${data.description}  

  ## License
  ${data.description}  


};

module.exports = generateMarkdown;