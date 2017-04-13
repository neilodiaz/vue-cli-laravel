var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');

function handleError (error) {
    console.log(error.toString())
    this.emit('end')
}

gulp.task('sass', function(){
    return gulp.src('./assets/scss/style.scss')
        .pipe(sass())
        .on('error', handleError)
        .pipe(minifyCSS())
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function(){
    gulp.watch('./assets/scss/**/*.scss', ['sass']);
})

gulp.task('default', [ 'sass' ]);