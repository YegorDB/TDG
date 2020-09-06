const { parallel, src, dest } = require('gulp');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const csso = require('gulp-csso');


function javascript(cb) {
  browserify('src/js/tdg.js')
    .bundle()
    .pipe(source('tdg.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('builds/0.1.0/'));
  cb();
}


function css(cb) {
  src('src/css/*.css')
    .pipe(csso())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('builds/0.1.0/'));
  cb();
}


exports.default = parallel(javascript, css);
