/*
 * postcss
 */
import fs from 'fs'
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import size from 'gulp-size'
import rename from 'gulp-rename'
import postcss from 'gulp-postcss'
import stylelint from 'stylelint'
import precss from 'precss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import config from '../config'
const version = require('../version.json')


// precss(scss like)
gulp.task('precss', () => {
  console.log('---------- css ----------')
  const gulpTask = gulp.src(config.directory.css_src + '**/*.css')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>'),
    }))
    .pipe(postcss([
      stylelint({
        "extends": "stylelint-config-standard",
        "rules": {
          "at-rule-no-unknown": [true, {
            "ignoreAtRules": ["if", "else", "mixin", "content", "include", "for"]
          }],
          "property-no-unknown": [true, {
            "checkPrefixed": true
          }],
          "no-duplicate-selectors": null,
          "selector-list-comma-newline-after": null,
          "rule-empty-line-before": ["always", {"ignore": ["after-comment", "inside-block"]}],
          "length-zero-no-unit": null,
          "declaration-empty-line-before": null
        }
      }),
      precss(),
    ]))
    .pipe(gulp.dest(config.directory.tmp + 'css/'))
  return gulpTask
})

// rename
gulp.task('renamecss', () => {
  const gulpTask = gulp.src(config.directory.tmp + 'css/common/import.css')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>'),
    }))
    .pipe(rename('common-' + version.css.common + '.css'))
    .pipe(gulp.dest(config.directory.tmp + 'css/'))
  return gulpTask
})

// postcss
gulp.task('postcss', () => {
  const gulpTask = gulp.src(config.directory.tmp + 'css/*.css')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>'),
    }))
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 2 version', 'ie >= 11'],
        grid: true,
        cascade: false
      }),
      cssnano({
        minifyFontValues: {
          removeQuotes: false,
        },
      }),
    ]))
    .pipe(gulp.dest(config.param.dist + 'season-portal/css/'))
    .pipe(size({ title: 'size : css' }))
  return gulpTask
})
