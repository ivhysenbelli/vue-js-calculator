var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    watchSass = require("gulp-watch-sass"),
    autoprefixer = require("gulp-autoprefixer");

gulp.task('default', function () {
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
});


gulp.task("sass:watch", () => watchSass([
  "./*.scss"
])
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./")));