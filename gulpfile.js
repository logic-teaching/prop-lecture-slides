'use strict';

var pkg = require('./package.json'),
  autoprefixer = require('gulp-autoprefixer'),
  browserify = require('browserify'),
  buffer = require('vinyl-buffer'),
  connect = require('gulp-connect'),
  csso = require('gulp-csso'),
  del = require('del'),
  ghpages = require('gh-pages'),
  gulp = require('gulp'),
  path = require('path'),
  log = require('fancy-log'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  source = require('vinyl-source-stream'),
  stylus = require('gulp-stylus'),
  through = require('through'),
  uglify = require('gulp-uglify'),
  isDist = process.argv.indexOf('serve') === -1,
  // browserifyPlumber fills the role of plumber() when working with browserify
  browserifyPlumber = function(e) {
    if (isDist) throw e;
    log(e.stack);
    this.emit('end');
  };

gulp.task('js', gulp.series(clean_js, function() {
  // see https://wehavefaces.net/gulp-browserify-the-gulp-y-way-bb359b3f9623
  return browserify('src/scripts/main.js').bundle()
    .on('error', browserifyPlumber)
    .pipe(source('src/scripts/main.js'))
    .pipe(buffer())
    .pipe(isDist ? uglify() : through())
    .pipe(rename('build.js'))
    .pipe(gulp.dest('dist/build'))
    .pipe(connect.reload());
}));

gulp.task('html', gulp.series(clean_html, function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
}));

gulp.task('css', gulp.series(clean_css, function() {
  return gulp.src('src/styles/main.styl')
    .pipe(isDist ? through() : plumber())
    .pipe(stylus({ 'include css': true, paths: ['./node_modules'] }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(isDist ? csso() : through())
    .pipe(rename('build.css'))
    .pipe(gulp.dest('dist/build'))
    .pipe(connect.reload());
}));

gulp.task('images', gulp.series(clean_images, function() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload());
}));

gulp.task('fonts', gulp.series(clean_fonts, function() {
  return gulp.src('src/fonts/*')
    .pipe(gulp.dest('dist/fonts'))
    .pipe(connect.reload());
}));

function clean_html () { return del('dist/*.html'); };

function clean_js () { return del('dist/build/build.js'); };

function clean_css () { return del('dist/build/build.css'); };

function clean_images () { return del('dist/images'); };

function clean_fonts () { return del('dist/fonts'); };

gulp.task('build',  gulp.parallel('js', 'html', 'css', 'images', 'fonts'));

gulp.task('connect', gulp.series('build', function() {
  connect.server({ root: 'dist', port: process.env.PORT || 8080, livereload: true });
}));

gulp.task('watch', function() {
  gulp.watch('src/**/*.html', gulp.series('html'));
  gulp.watch('src/scripts/**/*.js', gulp.series('js'));
  gulp.watch('src/styles/**/*.styl', gulp.series('css'));
  gulp.watch('src/images/**/*', gulp.series('images'));
  gulp.watch('src/fonts/*', gulp.series('fonts'));
});

gulp.task('publish', gulp.series('build', function(done) {
  ghpages.publish(path.join(__dirname, 'dist'), { logger: log }, done);
}));

// old alias for publishing on gh-pages
gulp.task('deploy', gulp.series('publish'));

gulp.task('serve', gulp.parallel('connect', 'watch'));

gulp.task('default', gulp.series('build'));
