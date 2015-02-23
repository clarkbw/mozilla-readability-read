var request = require('request');
var fs = require('fs');

var gulp = require('gulp');
var concat = require('gulp-concat');


var READABILITY_JS = "Readability.js";
var READABILITY_CSS = "aboutReader.css";

gulp.task('readability-download', function () {
  var URI = "https://raw.githubusercontent.com/mozilla/readability/master/Readability.js";
  return request(URI).pipe(fs.createWriteStream(READABILITY_JS));
});

gulp.task('readability', ['readability-download'], function () {
  gulp.src([READABILITY_JS, "Readability-node.js"])
    .pipe(concat(READABILITY_JS))
    .pipe(gulp.dest("."));
});

// update the reader css from the fx desktop build s
 
gulp.task('readability-css-download', function () {
  var URI = "http://mxr.mozilla.org/mozilla-central/source/toolkit/themes/windows/global/aboutReader.css?raw=1";
  return request(URI).pipe(fs.createWriteStream(READABILITY_CSS));
});

gulp.task('readability-css', ['readability-css-download'], function () {
  gulp.src([READABILITY_CSS])
    .pipe(gulp.dest("./public/"));
});
