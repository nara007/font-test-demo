const fs = require('fs');
const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

const data = 'This is the new content of the file.'
fs.writeFile(__dirname + '/../env_test', data, err => {
  if (err) {
    throw err
  }
  console.log('File is written successfully.')
})