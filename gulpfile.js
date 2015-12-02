var gulp = require('gulp'),
 gutil = require('gulp-util'),
 less = require('gulp-less'),
 coffee = require('gulp-coffee'),
 watch = require('gulp-watch');


 gulp.task('coffee', function() {
   gulp.src('./scripts/coffee/*.coffee')
     .pipe(coffee({bare: true}).on('error', gutil.log))
     .pipe(gulp.dest('./scripts/js'))
 });

gulp.task('watch', function(){
 gulp.watch('scripts/coffee/*.coffee', ['coffee']);
})
