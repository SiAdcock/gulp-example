const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('main.scss', ['sass']);
});

gulp.task('sass', () => {
  gulp.src('main.scss')
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('build/'))
    .pipe(browserSync.stream());
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
