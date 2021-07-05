const { dest, watch } = require('gulp');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');


function build(cb) {
  browserify('../src/tdg.js')
    .bundle()
    .pipe(source('tdg.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('../lib/'));
  cb();
}


exports.default = function() {
  watch('../src/**/*.js', build);
};
