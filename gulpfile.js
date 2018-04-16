var
    gulp            = require('gulp'),
    browserSync     = require('browser-sync').create(),
    webpackStream   = require('webpack-stream')
    webpack         = require('webpack')
;

//
//
//
var webpackConfig = require('./webpack.config.js');

gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('js-watch', ['js'], function() {
    browserSync.reload();
});

//
// Static Server + watching scss/html files
//
gulp.task('serve', ['js'], function() {
    browserSync.init({
        server: {
            baseDir: './',
            port: 6666
        }
    });
    gulp.watch("*.html").on('change',  browserSync.reload);
    gulp.watch("src/js/*.js",  ['js-watch']);
    gulp.watch("dist/js/*.js", browserSync.reload);
});

//
gulp.task('default',  ['serve']);
