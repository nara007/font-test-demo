const fs = require('fs');
const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

let file = JSON.parse(fs.readFileSync(__dirname + '/../env_test', 'utf8'));
console.log(file);
file.development.REACT_APP_VERSION = myArgs;

fs.writeFile(__dirname + '/../env_test', JSON.stringify(file), err => {
  if (err) {
    throw err
  }
  console.log('File is written successfully.')
})