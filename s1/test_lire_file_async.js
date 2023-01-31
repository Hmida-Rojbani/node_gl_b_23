const fs = require('fs');

console.log("Begin reading...");
fs.readFile('file.txt',function (err,res) {
    console.log('buffer :',res);
});

console.log("Ending ...");