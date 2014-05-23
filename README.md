# gulp-ext-replace

Small gulp 3 plugin to change file extensions.

### Update

I removed the `gulpplugin` keyword from the package file so that this plugin doesn't show up on the Gulp website. While I'd prefer to continue using this plugin, the very awesome `gulp-replace` plugin is likely a better choice for you.

## Install

```shell
npm install --save-dev gulp-ext-replace
```

## Usage

```javascript
var ext-replace = require('gulp-ext-replace');

gulp.task('change', function() {
  gulp.src('styles/*.css')
      .pipe(ext-replace('.scss'))
      .pipe(gulp.dest('dist'))
});
```

## Testing

Open a terminal in the directory containing `gulp-ext-replace` and then:

```shell
npm install
npm test
```


## The License (MIT)
Copyright (c) 2014 TJ Eastmond

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
