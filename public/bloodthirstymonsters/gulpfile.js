var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var watch = require('gulp-watch');

// added the following code from a tutorial on combining webpack assets with gulp workflow.
// only doing this to try an get vue-parallaxy to work?!
// const gulp = require('gulp');
// const webpack = require('webpack');
// const webpackStream = require('webpack-stream');
// const webpackConfig = require('./webpack.config.js');

// gulp.task('js', () => {
//     gulp.src('./src/js/index.js')
//         .pipe(webpackStream(webpackConfig), webpack)
//         .pipe(gulp.dest('./dist/js'));
// });

// end of extra items for webpack/vue-parallaxy.

// gulp.task('stream', function () {
//     // Endless stream mode
//     return watch('css/*.css', { ignoreInitial: false })
//         .pipe(gulp.dest('build'));
// });
//
// gulp.task('callback', function () {
//     // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
//     return watch('css/*.css', function () {
//         gulp.src('css/*.css')
//             .pipe(gulp.dest('build'));
//     });
// });

gulp.task('scss', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist-gulp/css'));
});

gulp.task('css', ['scss'], function () {
    return gulp.src([
            'dist-gulp/css/style.css'
        ])
        .pipe(concat('styles.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist-gulp/css'));
});

gulp.task('js', function () {
    return gulp.src('js/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist-gulp/js'));
});

// gulp.task('webpack', function () {
//     return gulp.src('js/parallax.vue')
//     .pipe(webpackStream(webpackConfig), webpack)
//         .pipe(gulp.dest('js'))
// });

gulp.task('img', function () {
    return gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist-gulp/img'));
});

gulp.task('watchSCSS', function(){
    // /** Watch any changes */
    gulp.watch( "scss/*.scss", ["scss"] );
    return watch('dist-gulp/css/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('dist-gulp/css'));
});

gulp.task('watchJS', function(){
    // /** Watch any changes */
    gulp.watch( "js/*.js", ["js"] );
    return watch('dist-gulp/js/*.js', { ignoreInitial: false })
        .pipe(gulp.dest('dist-gulp/js'));
});

gulp.task('default', ['css', 'js', 'img', 'watchSCSS', 'watchJS'
    // 'stream', 'callback',  'webpack',
]);