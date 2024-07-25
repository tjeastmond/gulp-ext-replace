const should = require("should");
const path = require("path");
const replaceExtension = require("../index");

describe("replaceExtension", function () {
  it("should replace the extension of a file", function (done) {
    const fakeFile = {
      path: "/path/to/file.txt",
    };

    const stream = replaceExtension(".md");
    stream.write(fakeFile);
    stream.end();

    stream.on("data", function (file) {
      path.extname(file.path).should.equal(".md");
      done();
    });
  });

  it("should keep the same extension if ext is an empty string", function (done) {
    const fakeFile = {
      path: "/path/to/file.txt",
    };

    const stream = replaceExtension("");
    stream.write(fakeFile);
    stream.end();

    stream.on("data", function (file) {
      path.extname(file.path).should.equal(".txt");
      done();
    });
  });

  it("should replace the extension even if replaceExt is provided", function (done) {
    const fakeFile = {
      path: "/path/to/file.txt",
    };

    const stream = replaceExtension(".md", ".txt");
    stream.write(fakeFile);
    stream.end();

    stream.on("data", function (file) {
      path.extname(file.path).should.equal(".md");
      done();
    });
  });

  it("should not change the path if ext is not a string", function (done) {
    const fakeFile = {
      path: "/path/to/file.txt",
    };

    const stream = replaceExtension(123);
    stream.write(fakeFile);
    stream.end();

    stream.on("data", function (file) {
      path.extname(file.path).should.equal(".txt");
      done();
    });
  });
});
