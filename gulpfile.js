/**
 * Created by yasmine on 11/3/2017.
 */

var gulp = require('gulp');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('autoprefixer');
var uglify = require('gulp-uglify');

var scriptsTask = function () {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build'));
};

var stylesTask = function() {
    return gulp.src('./src/styles/main.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(gulp.dest('./build'));
};

var watchTask = function () {
    gulp.watch('./src/styles/**/*.less', ['less']);
    gulp.watch('./src/scripts/*.js', ['scripts']);
};

gulp.task('styles',stylesTask);

gulp.task('scripts',scriptsTask);

gulp.task('watch',['scripts','styles'], watchTask);

gulp.task('build',['scripts','styles']);

gulp.task('default',['scripts','styles']);