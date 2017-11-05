var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');


gulp.task('sass-css', function (){
    gulp.src('app/scss/main.scss')
      .pipe(sass())
      .pipe(gulp.dest('app/css'));
});


gulp.task('finalize', function(){
    gulp.src('app/javascript/javascript.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/javascript'));

    gulp.src('app/css/main.css')
      .pipe(uglifycss())
      .pipe(gulp.dest('dist/css'));

    gulp.src('app/assets/*', { base: 'app' })
      .pipe(gulp.dest('dist'));

    gulp.src('app/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('default',['sass-css', 'finalize']);