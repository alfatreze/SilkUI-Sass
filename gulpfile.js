var gulp = require('gulp');
var sass = require('gulp-sass');
//var concat = require('gulp-concat');
var uglifycss = require('gulp-uglifycss');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function(){
    return gulp
            .src('sass/**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(concat('styles.css'))
            .pipe(uglifycss({
                "maxLineLen": 80,
                "uglyComments": true
            }))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./build/css/'));
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['styles']);
});

gulp.task('default', ['watch']);