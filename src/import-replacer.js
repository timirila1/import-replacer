var map = require('map-stream');
var fs = require('fs');

var importReplacer = function() {

	return map(function (file, cb) {

		fs.readFile(file.path, function(err, data) {
			if (err) {
				cb(null, file);
			} else {
				console.log(data.toString('utf-8'));

				// Here we go to write our replacement code

			}
		})

		
	});

}


module.exports = importReplacer;