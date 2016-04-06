// module must export a SINGLE function
// function must take three arguments: dir, file ext, and callback func
var fs = require('fs');
var path = require('path');
var fileList = [];
module.exports = function(dir, fileExt, callback) {
	fs.readdir(dir, function(err, list) {
		if (err) {
			return callback(err);
		}
		list.forEach(function(file) {
			if (path.extname(file) === '.' + fileExt) {
				fileList.push(file);
			}
		});
		fileList.join('\n');
		return callback(null, fileList);
	});
}