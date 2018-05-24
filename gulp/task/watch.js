/*
 * watch
 */
import gulp from 'gulp'
import runSequence from 'run-sequence'
import browserSync from 'browser-sync'
import config from '../config'


// BrowserSync
gulp.task('serve', (callback) => {
  const syncOption = {
    port: 8051,
    ui: {
      port: 8052,
    },
    server: {
      baseDir: config.directory.dist,
    },
  }
  browserSync(syncOption)
  callback()
})


// watch
gulp.task('watch', (callback) => {
  console.log('---------- watch ----------')
  gulp.watch(config.directory.css_src + '**/*.css', ['build:css']).on('change', browserSync.reload)
  gulp.watch(config.directory.js_src + '**/*.js', ['build:js']).on('change', browserSync.reload)
  gulp.watch(config.directory.html_src + '**/*.{ejs,json}', ['build:html']).on('change', browserSync.reload)
  gulp.watch(config.directory.img_src + '**/*.{png,jpg}', ['build:image']).on('change', browserSync.reload)
  gulp.watch('gulpfile.js', ['build']).on('change', browserSync.reload)
  callback()
})
