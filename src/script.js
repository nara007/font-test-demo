const fs = require('fs');
const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

const file = require(__dirname + '/../env_test');
file.development.REACT_APP_VERSION = myArgs;

fs.writeFile(__dirname + '/../env_test', JSON.stringify(file), err => {
  if (err) {
    throw err
  }
  console.log('File is written successfully.')
})