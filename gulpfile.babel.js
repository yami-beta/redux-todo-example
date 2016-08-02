import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import licensify from 'licensify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

const bundleJS = (isWatch, isUglify) => {
  const src = 'src/js/app.js';
  const bundler = browserify(src, {
    debug: true,
    cache: {},
    packageCache: {},
  });

  bundler.transform(babelify);
  bundler.plugin(licensify);

  const bundle = () => {
    return bundler.bundle()
      .on('error', (err) => {
        $.util.log('browserify error', err);
      })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(isUglify ? $.sourcemaps.init({loadMaps: true}) : $.util.noop())
      .pipe(isUglify ? $.uglify({ preserveComments: 'license' }) : $.util.noop())
      .pipe(isUglify ? $.sourcemaps.write() : $.util.noop())
      .pipe(gulp.dest('dest/js'));
  };

  if (isWatch) {
    bundler.plugin(watchify);
    bundler.on('update', bundle);
  }

  bundler.on('log', $.util.log);

  return bundle();
};

gulp.task('js:dev', () => {
  bundleJS(false, false);
});

gulp.task('js', () => {
  bundleJS(false, true)
});

gulp.task('watch', () => {
  bundleJS(true, true);
});
