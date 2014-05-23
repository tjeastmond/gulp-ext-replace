'use strict';

var gutil = require('gulp-util');
var through = require('through2');

module.exports = function(ext) {
	var extension_replace = function(file, encoding, callback) {
		if (typeof ext === 'undefined') {
			gutil.log('You failed to supply a new extension so nothing will be changed');
		} else {
			file.path = file.path.replace(/\.\w+$/gi, ext);
		}

		callback(null, file);
	};

	return through.obj(extension_replace);
};
