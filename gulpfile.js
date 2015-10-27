// Load Gulp
var gulp    = require('gulp'),
    gutil   = require('gulp-util');
    plugins = require('gulp-load-plugins')();
var sourcemaps = require('gulp-sourcemaps');

// Start Watching: Run "gulp"
gulp.task('default', ['watch']);

// Minify jQuery: Run manually with: "gulp squish-jquery"
gulp.task('squish-libs', function() {
  return gulp.src('assets/js/libs/**/*.js')
      .pipe(sourcemaps.init())
    .pipe(plugins.uglify())
    .pipe(plugins.concat('plugins.min.js'))
      .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/js'));
});

// Minify Custom JS: Run manually with: "gulp build-js"
gulp.task('build-js', function() {
  return gulp.src('assets/js/*.js')
	.pipe(sourcemaps.init())
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.uglify())
    .pipe(plugins.concat('scripts.min.js'))
	.pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/js'));
});

// Less to CSS: Run manually with: "gulp build-css"
gulp.task('build-css', function() {
    return gulp.src('assets/less/app.less')
		.pipe(sourcemaps.init())
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .on('error', function (err) {
            gutil.log(err);
            this.emit('end');
        })
        .pipe(plugins.autoprefixer(
            {
                browsers: [
                    '> 1%',
                    'last 2 versions',
//                    'firefox >= 4',
                    'safari 7',
                    'safari 8',
                    'IE 8',
                    'IE 9',
                    'IE 10',
                    'IE 11'
                ],
                cascade: false
            }
        ))
        .pipe(plugins.cssmin())
		.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('build/css')).on('error', gutil.log);
});

gulp.task('css-preloader',function(){
    return gulp.src('assets/less/preloader.less')
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .on('error', function (err) {
            gutil.log(err);
            this.emit('end');
        })
        .pipe(plugins.autoprefixer(
            {
                browsers: [
                    '> 1%',
                    'last 2 versions',
//                    'firefox >= 4',
                    'safari 7',
                    'safari 8',
                    'IE 8',
                    'IE 9',
                    'IE 10',
                    'IE 11'
                ],
                cascade: false
            }
        ))
        .pipe(plugins.cssmin())
        .pipe(gulp.dest('build/css')).on('error', gutil.log);
});

// Default task
gulp.task('watch', function() {
    gulp.watch('assets/js/libs/**/*.js', ['squish-libs']);
    gulp.watch('assets/js/*.js', ['build-js']);
    gulp.watch('assets/less/**/*.less', ['build-css','css-preloader']);
});

// Default task
gulp.task('build', ['squish-libs','build-js','build-css','css-preloader']);