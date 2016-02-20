'use strict';

// dependencies
var through = require('through2');
var path = require('path');

module.exports = function(ext, replaceExt) {
	var extension_replace = function(file, encoding, callback) {
		replaceExt = replaceExt || false;

		if (typeof ext === 'string' && ext.length > 0) {
 			ext = ext.indexOf('.') === 0 ? ext : '.' + ext;
			var filePath = path.parse(file.path);
			filePath.base = filePath.base.replace(replaceExt ? replaceExt : path.extname(file.path), ext);
			//Format the path back into an absolue
			file.path = path.format(filePath);
		}

		callback(null, file);
	};

	return through.obj(extension_replace);
};
