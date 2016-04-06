var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function(err, contents) {
	var str = contents;
	var arr = str.split('\n');
	var lines = arr.length-1;
	console.log(lines);
});