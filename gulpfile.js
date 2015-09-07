var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('stylus', function () {
  gulp.src('./public/stylus/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./public/build/css'));
});

gulp.task('watch', function(){
  gulp.watch('./public/stylus/*.styl', ['stylus']);
});

gulp.task('default', ['stylus', 'watch']);