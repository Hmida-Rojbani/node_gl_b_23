const fs = require('fs');

console.log("Begin reading...");
let buffer = fs.readFileSync('file.txt');
console.log('buffer :',buffer);
console.log("Ending ...");