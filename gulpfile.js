var gulp = require('gulp');
var sass = require('gulp-sass');

function scssTask() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'))
}

function defaultTask() {
    gulp.watch('./src/scss/**/*.scss', gulp.series(['scss']));
}

gulp.task('scss', scssTask);

//Watch task
gulp.task('default', defaultTask);