var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concatCss = require('gulp-concat-css'),
    run = require('gulp-run');

var src = './process',
    app = './app';

/**
* @description : Look for render.js file in
* the ./process file and
* process and convert react code into JS and
* then pipe result to app/js
*/
gulp.task('js', function() {
  return gulp.src( src + '/js/render.js' )
    .pipe(browserify({
      transform: 'reactify',
      extensions: 'browserify-css',
      debug: true
    }))
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest(app + '/js'));
});

gulp.task('html', function() {
  gulp.src( src + '/**/*.html');
});

/**
* @description : Look for .css files in the css folder
* in ./process and concatenate into single .css file in
* app/css
*/
gulp.task('css', function() {
  gulp.src( src + '/css/*.css')
  .pipe(concatCss('app.css'))
  .pipe(gulp.dest(app + '/css'));
});

/**
* @description : Move fonts from node_modules into
* application folder.
*/
gulp.task('fonts', function() {
    gulp.src('node_modules/bootstrap/dist/fonts/**/*')
    .pipe(gulp.dest(app + '/fonts'));
});

/**
* @description : Watch folders and call serve
*/
gulp.task('watch', ['serve'], function() {
  gulp.watch( src + '/js/**/*', ['js']);
  gulp.watch( src + '/css/**/*.css', ['css']);
  gulp.watch([ app + '/**/*.html'], ['html']);
});

/**
* @description : Auto watch and serve up on folder change
*/
gulp.task('serve', ['html', 'js', 'css'], function() {
  run('electron app/main.js').exec();
});

gulp.task('default', ['watch', 'fonts', 'serve']);
