/*
 * imageMin
 */
import fs from 'fs'
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import size from 'gulp-size'
import imagemin from 'gulp-imagemin'
import config from '../config'


gulp.task('imageMin', () => {
  console.log('---------- imageMin ----------')
  const gulpTask = gulp.src(config.directory.img_src + '**/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
    }))
    .pipe(gulp.dest(config.param.dist + 'season-portal/img/'))
  return gulpTask
})
