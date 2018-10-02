/*
********************************************************************************
*Little simple CLI command with gulp for minify JS and CSS for production build*
********************************************************************************
*/

const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');


//script paths => script destination
const jsFiles = 'assets/scripts/*.js',jsDest = 'dist/scripts';

// task for get all the file js and minified to a single script
// run gulp jsmin
gulp.task('jsmin', function() {
    return gulp.src(jsFiles)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify().on('error', function(error){
            console.log(error);
         }))
        .pipe(gulp.dest(jsDest));
});

//style paths => styles destination
const cssFiles = 'assets/styles/*.css',cssDest = 'dist/styles';

// task for get all the file css and minified to a single style
// run gulp jsmin
gulp.task('cssmin', function() {
    return gulp.src(cssFiles)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(cssDest))
        .pipe(rename('styles.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(cssDest));
});