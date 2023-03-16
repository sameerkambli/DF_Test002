var gulp    = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    concat  = require('gulp-concat'),
    config  = module.exports;

// SCSS & CSS Path
config.sassSrcDir    = './scss';
config.cssPath       = './css';

// Main CSS Function
gulp.task('main-css', done => {
    var baseStream = gulp.src(config.sassSrcDir + '/main.scss')
        .pipe(sass({
            sourceComments: 'map',
            outputStyle: 'expanded' // expanded or compressed
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(config.cssPath))
    done();
});

// Gulp Task Function
gulp.task('build-scss', gulp.series(
    gulp.parallel('main-css')
));

gulp.task('build-scss:watch', () => {
    gulp.watch('./scss/*.scss*',  (done) => {
        gulp.series(
            gulp.parallel('main-css')
        )
        (done);
    });
});
