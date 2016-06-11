const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('sass:watch', () => {
  gulp.watch('main.scss', ['sass']);
});
gulp.task('sass', () => {
  gulp.src('main.scss')
    .pipe(sass())
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('build/'));
});

/*
gulp.task('default', 'hello-world');
gulp.task('hello-world', ['hello', 'world']);
gulp.task('hello', () => {
  console.log('hello');
});
gulp.task('world', () => {
  console.log('world');
});
*/
