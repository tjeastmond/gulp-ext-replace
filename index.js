'use strict';

// dependencies
const through = require('through2');
const path = require('path');

module.exports = function (ext, replaceExt) {
	const extension_replace = function (file, encoding, callback) {
		replaceExt = replaceExt || false;

		if (typeof ext === 'string' && ext.length > 0) {
			ext = ext.indexOf('.') === 0 ? ext : '.' + ext;
			let filePath = path.parse(file.path);
			filePath.base = filePath.base.replace(replaceExt ? replaceExt : path.extname(file.path), ext);
			// format the path back into an absolue
			file.path = path.format(filePath);
		}

		callback(null, file);
	};

	return through.obj(extension_replace);
};
