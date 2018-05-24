/*
 * js
 */
import fs from 'fs'
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import size from 'gulp-size'
import rename from 'gulp-rename'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import babel from 'gulp-babel'
import concat from 'gulp-concat-util'
import uglify from 'gulp-uglify'
import config from '../config'
const version = require('../version.json')


// webpack
gulp.task('webpack', () => {
  console.log('---------- js ----------')
  const gulpTask = gulp.src(config.jsPart.common)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>'),
    }))
    .pipe(gulpWebpack({
      mode: 'production',
      entry: './src/js/common/index.js',
      output: {
        filename: 'common-' + version.js.common + '.js'
      }
    }, webpack))
    .pipe(gulp.dest(config.param.dist + 'season-portal/js/'))
    .pipe(size({ title: 'size : js common' }))
  return gulpTask
})
