var map = require('map-stream');
var fs = require('fs');

var importReplacer = function() {

	return map(function (file, cb) {

		fs.readFile(file.path, function(err, data) {
			if (err) {
				cb(new Error(null));
			} else {
				var fileString = data.toString();
				var replacer = function(src, varName, path) {
					return '///<reference path="' + path + '"> public ' + varName + ';\n';
				}

				var fileString = fileString.replace(/import \* as (\w+) from [\'\"](.+)[\'\"]/ig, replacer);
				file.buffer = new Buffer(fileString)
		
				cb(null, file);
			}
		});

	});

}


module.exports = importReplacer;