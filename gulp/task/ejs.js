/*
 * html
 */
import fs from 'fs'
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import size from 'gulp-size'
import rename from 'gulp-rename'
import ejs from 'gulp-ejs'
import config from '../config'
const version = require('../version.json')
const timestump = '20180419000000'


// ejs
gulp.task('ejs', () => {
  console.log('---------- html ----------')
  const gulpTask = gulp.src(
      [
        config.directory.html_src + 'html/**/*.ejs',
        '!' + config.directory.html_src + 'html/include/**/*.ejs',
      ],
    )
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>'),
    }))
    .pipe(ejs(
      {
        data: {
          default: JSON.parse(fs.readFileSync(`./${config.directory.html_src}data/common/default.json`, 'utf8')),
          nav: JSON.parse(fs.readFileSync(`./${config.directory.html_src}data/common/nav.json`, 'utf8')),
          sample: JSON.parse(fs.readFileSync(`./${config.directory.html_src}data/module/sample.json`, 'utf8')),
          version,
        },
        timestump,
        pathStat: config.param.pathStat,
      }
    ))
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest(config.param.dist + '/'))
    .pipe(size({ title: 'size : html' }))
  return gulpTask
})
