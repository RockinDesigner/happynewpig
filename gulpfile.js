let gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    cssnano         = require('gulp-cssnano'),
    sourcemaps      = require('gulp-sourcemaps'),
    browserSync     = require('browser-sync'),
    autoprefixer    = require('gulp-autoprefixer'),
    concat          = require('gulp-concat'),
    minifyCSS       = require('gulp-minify-css'),
    uglify          = require('gulp-uglifyjs');

    // js

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});


gulp.task('grid', function() {
    return gulp.src('app/libs/sass-grid/grid.scss')
    .pipe(sass().on('grid error', sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest('app/'));
});

gulp.task('sass', function() {
    return gulp.src('app/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['Last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
    gulp.watch('app/sass/**/*.scss', ['sass']);
});