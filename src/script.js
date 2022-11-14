const fs = require('fs');
const myArgs = process.argv.slice(2)[0].slice(1);
console.log('myArgs: ', myArgs);

let file = JSON.parse(fs.readFileSync(__dirname + '/../env_test', 'utf8'));
console.log(file);
file.development.REACT_APP_VERSION = myArgs;

fs.writeFile(__dirname + '/../env_test', JSON.stringify(file, null, '\t'), err => {
  if (err) {
    throw err
  }
  console.log('File is written successfully.')
})