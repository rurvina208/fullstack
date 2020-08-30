'use strict'

var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');
const { file } = require('grunt');

gulp.task('sass', function () {  
    gulp.src('./css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./css/*.scss', ['sass']);
  });

gulp.task('browser-sync', function() {  
    var files=['./*.html','./css/*.css','./imagenes/*.{png,jpg,gif}','./js/*.js'];
    browserSync.init(files, {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.start('sass:watch');
    //gulp.watch("scss/*.scss", ['sass']);
});

