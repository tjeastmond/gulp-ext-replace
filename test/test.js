var gulp = require('gulp'),
	gutil = require('gulp-util'),
	replace = require('../index'),
	should = require('should');

var fakeFile = function(filename) {
	return new gutil.File({
		path: "fixtures/" + filename,
		base: "fixtures",
		cwd: "test/",
		contents: new Buffer("body { background:#000; }")
	});
};

describe('gulp-file-extension', function() {
	it('should change the extension', function(done) {
		var stream = replace('.scss'),
			file = fakeFile('styles.css');

		stream.on('error', done);

		stream.on('data', function(file) {
			should.exist(file);
			file.path.should.equal('fixtures/styles.scss');
			file.relative.should.equal('styles.scss');
			done();
		});

		stream.write(file);
	});

	it('should change the tricky extension', function(done) {
		var stream = replace('.scss'),
			file = fakeFile('styles.min.css');

		stream.on('error', done);

		stream.on('data', function(file) {
			should.exist(file);
			file.path.should.equal('fixtures/styles.min.scss');
			file.relative.should.equal('styles.min.scss');
			done();
		});

		stream.write(file);
	});

	it('should not change the extension', function(done) {
		var stream = replace('.css'),
			file = fakeFile('styles.css');

		stream.on('error', done);

		stream.on('data', function(file) {
			should.exist(file);
			file.path.should.equal('fixtures/styles.css');
			file.relative.should.equal('styles.css');
			done();
		});

		stream.write(file);
	});
});