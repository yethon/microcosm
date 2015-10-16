var gulp         = require('gulp');
var concatCss    = require('gulp-concat-css');
var minifyCSS    = require('gulp-minify-css');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// compile scss files and concat all subsequent css
// minify css and copy to 'dist' folder
gulp.task('styles', function () {
  return gulp.src(['assets/styles/**.css', 'assets/styles/**.scss'])
  .pipe(sass())
  .pipe(autoprefixer( {
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(concatCss('site.min.css'))
  .pipe(minifyCSS({debug: true}))
  .pipe(gulp.dest('./dist/assets'))
  .pipe(browserSync.stream());
});
