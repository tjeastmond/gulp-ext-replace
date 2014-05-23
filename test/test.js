var gulp = require('gulp');
var gutil = require('gulp-util');
var replace = require('../index');
var should = require('should');

var fakeFile = function(filename) {
	return new gutil.File({
		path: "fixtures/" + filename,
		base: "fixtures",
		cwd: "test/",
		contents: new Buffer("body { background:#000; }")
	});
};

var testChange = function(options, done) {
	var stream = replace(options.newExt);
	var file = fakeFile(options.filename);

	stream.on('error', done);

	stream.on('data', function(file) {
		should.exist(file);
		file.path.should.equal('fixtures/' + options.newFilename);
		file.relative.should.equal(options.newFilename);
		done();
	});

	stream.write(file);
};

describe('gulp-file-extension', function() {
	it('should change the extension', function(done) {
		var options = { filename: 'styles.scss', newFilename: 'styles.css', newExt: '.css'};
		testChange(options, done);
	});

	it('should change the tricky extension', function(done) {
		var options = { filename: 'styles.min.css', newFilename: 'styles.min.scss', newExt: '.scss'};
		testChange(options, done);
	});

	it('should not change the extension', function(done) {
		var options = { filename: 'styles.css', newFilename: 'styles.css', newExt: '.css'};
		testChange(options, done);
	});

	it('should work with numbers too', function(done) {
		var options = { filename: 'styles.mp4', newFilename: 'styles.mp3', newExt: '.mp3'};
		testChange(options, done);
	});
});
