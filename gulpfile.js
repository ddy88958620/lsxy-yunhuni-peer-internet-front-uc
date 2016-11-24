/**
 * Created by chenjunjia on 2016/11/4.
 */
var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  //所有bower_components文件
  gulp.src('bower_components/**/*')
    .pipe(gulp.dest('./dist/bower_components'));



  //所有js文件
  gulp.src('js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));

  //单独css文件
  gulp.src('js/bootstrap-datepicker/css/**/*')
    .pipe(gulp.dest('./dist/js/bootstrap-datepicker/css'));

  //图片
  gulp.src('images/**/*')
    .pipe(gulp.dest('./dist/images'));

  //css
  gulp.src('css/!**!/!*')
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'));

  //压缩样式
  gulp.src('stylesheets/!**!/!*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/stylesheets'));

  //字体
  gulp.src('fonts/!**/!*')
    .pipe(gulp.dest('./dist/fonts'));

});






