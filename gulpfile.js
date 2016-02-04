/**
 * Created by Adebola on 04/02/2016.
 */
// assign the module to a local variable
var del = require('del');
var gulp = require('gulp');
var babel = require("gulp-babel");
var rename = require('gulp-rename');
var header = require('gulp-header');
var uglify = require('gulp-uglify');
var bower = require('gulp-bower');

var onError = function (err) {
    console.log(err);
};

/*
 * Variables
 */
var distDir = './dist';
// using data from package.json
var pkg = require('./package.json');
var banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''].join('\n');

// Clear
gulp.task('clear', function () {
    del.sync([distDir]);
});


//bower
gulp.task('bower', function () {
    return bower({cmd: "install"});
});

// Javascript
gulp.task('js', function () {
    gulp.src('./src/*.js')
        .pipe(babel())
        .pipe(header(banner, {pkg: pkg}))       // add header banner

        // Original
        .pipe(rename({basename: 'vue-tooltip'}))
        .pipe(gulp.dest(distDir + '/js/'))

        // Minified
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(distDir + '/js/'));
});

//css-copy
gulp.task('css-copy', function () {
    gulp.src('./bower_components/tether-tooltip/dist/css/*.css')
        .pipe(gulp.dest(distDir + '/css/'));
});

// Defaults
gulp.task('build', ['bower', 'js', 'css-copy']);
gulp.task('default', ['build']);