import gulp   from 'gulp';
import eslint from 'gulp-eslint';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

gulp.task('scripts', () => {
  return gulp.src(['assets/js/**.js', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(concat('site.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/assets/js'));
});
