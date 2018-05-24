/*
 * replace
 */
import fs from 'fs'
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import size from 'gulp-size'
import replace from 'gulp-replace'
import config from '../config'


// replace
gulp.task('replace', () => {
  console.log('---------- replace ----------')
  const gulpTask = gulp.src(config.param.dist + 'season-portal/css/*.css')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>'),
    }))
    .pipe(replace(/url\(..\/img\//g, config.param.pathString))
    .pipe(gulp.dest(config.param.dist + 'season-portal/css/'))
  return gulpTask
})
