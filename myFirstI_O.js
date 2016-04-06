// print the number of newline characters "\n" to the console
var fs = require('fs');
// can pass utf8 as the second arument in readFileSync / readFile and it will return string
var str = fs.readFileSync(process.argv[2]).toString();
var arr = str.split('\n');
var lines = arr.length-1;
console.log(lines);