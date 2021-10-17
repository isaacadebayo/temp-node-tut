const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
const date = new Date();

writeFileSync('./content/result-sync.txt',
`\r\n ${date.getFullYear()}: Here is the result ${first} and ${second}`,
 {flag:'a'}
)
console.log('done with this task');
console.log('starting the next one');