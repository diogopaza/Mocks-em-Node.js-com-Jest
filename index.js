const { file } = require('@babel/types');
const fs = require('fs');

exports = function findTestTxt() {
    const files = fs.readdirSync('./');
    console.log(files);
    return files.some(f => f === 'test.txt');
}

console.log(findTestTxt());