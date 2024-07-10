const fs = require('fs') ; //used for file ystem operations
const path =  require('path') ; //used for handling file paths

let operation = process.argv[2]
let file=process.argv[3]
let content=process.argv[4]


// Helper function to handle errors
function handleError(err) {
    if (err) {
      console.error('Error:', err.message);
      process.exit(1);
    }
  }
  
  // Function to read a file
  function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      handleError(err);
      console.log('File contents:');
      console.log(data);
    });
  }
  
  // Function to delete a file
  function deleteFile(filePath) {2  
    fs.unlink(filePath, (err) => {
      handleError(err);
      console.log(File `${filePath} deleted`);
    });
  }
  
  // Function to create a file
  function createFile(filePath) {
    fs.writeFile(filePath, '', (err) => {
      handleError(err);
      console.log(File `${filePath} created`);
    });
  }
  
  // Function to append content to a file
  function appendToFile(filePath, content) {
    fs.appendFile(filePath, content + '\n', (err) => {
      handleError(err);
      console.log(Content `appended to the file ${filePath}`);
    });
  }
  
  // Function to rename a file
  function renameFile(oldPath, newPath) {
    fs.rename(oldPath, newPath, (err) => {
      handleError(err);
      console.log(File `${oldPath} renamed to ${newPath}`);
    });
  }
  
  // Function to list files and directories in a directory
  function listDirectory(dirPath) {
    fs.readdir(dirPath, (err, files) => {
      handleError(err);
      console.log('Directory contents:');
      files.forEach(file => {
        console.log(file);
      });
    });
  }
  

// Switch statement to handle different operations
switch (operation) {
    // complete the fillowing function.
    case 'read':
        if (!file) {
          console.log('Please provide a file to read');
        } else {
          readFile(path.resolve(file));
        }
        break;

        case 'delete':
            if (!file) {
              console.log('Please provide a file to delete');
            } else {
              deleteFile(path.resolve(file));
            }
            break;

            case 'create':
                if (!file) {
                  console.log('Please provide a file to create');
                } else {
                  createFile(path.resolve(file));
                }
                break;

                case 'append':
                    if (!file || !content) {
                      console.log('Please provide a file to append');
                    } else {
                      appendToFile(path.resolve(file),content);
                    }
                    break;

                    case 'rename':
                        if (!file || !content)  {
                          console.log('Please provide a file to rename');
                        } else {
                        renameFile(path.resolve(file), path.resolve(content));
                        }
                        break;

                        case 'list':
                            listDirectory(path.resolve(file || '.'));
                            break;
                             
                            default:
                                console.log(`Invalid operation ${operation}`);
  }