/*
********************************************************************************
*Little simple CLI command with gulp for minify JS and CSS for production build*
********************************************************************************
*/



// all library needed
const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const ts = require('gulp-typescript');



// scripts and styles destination
const scriptsDest = 'dist/scripts',stylesDest='dist/styles';



// script paths source
const jsFiles = 'assets/scripts/*.js';
// task for get all the file js and minified to a single script
// cmd run => gulp jsmin
gulp.task('jsmin', function() {
    return gulp.src(jsFiles)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(scriptsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify().on('error', function(error){
            console.log(error);
         }))
        .pipe(gulp.dest(scriptsDest));
});



// style paths source
const cssFiles = 'assets/styles/*.css';
// task for get all the file css and minified to a single style
// cmd run => gulp cssmin
gulp.task('cssmin', function() {
    return gulp.src(cssFiles)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(stylesDest))
        .pipe(rename('styles.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(stylesDest));
});



// style paths source
const scssFiles = 'assets/styles/*.scss';
// task for get all the file scss and minified to a single style
// cmd run => gulp scssmin
gulp.task('scssmin', function() {
    return gulp.src(scssFiles)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(stylesDest))
        .pipe(rename('styles.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(stylesDest));
});



// script paths source
const tsFiles = 'assets/scripts/*.ts';
// ts settings for transpile the code from TS to JS
const tsSettings = {
        noImplicitAny: true,
        target:'ES5',
        removeComments:true,
        outFile: 'scripts.js'
};
// task for get all the file TS and minified to a single JS script
// cmd run => gulp tsmin
gulp.task('tsmin', function () {
    return gulp.src(tsFiles)
        .pipe(ts(tsSettings))
        .pipe(gulp.dest(scriptsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify().on('error', function(error){
            console.log(error);
         }))
        .pipe(gulp.dest(scriptsDest));
});
