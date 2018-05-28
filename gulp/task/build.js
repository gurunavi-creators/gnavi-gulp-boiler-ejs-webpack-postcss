/*
 * task manage
*/
import gulp from 'gulp'
import runSequence from 'run-sequence'
import config from '../config'


// build:css
gulp.task('build:css', (cb) => {
  runSequence('precss', 'renamecss', 'postcss', cb)
})

// build:js
gulp.task('build:js', (cb) => {
  runSequence('webpack', cb)
})

// build:html
gulp.task('build:html', (cb) => {
  runSequence('ejs', cb)
})

// build:image
gulp.task('build:image', (cb) => {
  runSequence('imageMin', cb)
})

// build
gulp.task('build', (cb) => {
  console.log('━━━━━━━━━━ build local ━━━━━━━━━━')
  runSequence(
    'build:css', 'build:js', 'build:html', 'build:image', cb,
  )
})

// default
gulp.task('default', () => {
  runSequence('build')
})


/*
 * option task
 */
// start
gulp.task('start', () => runSequence(
  'clean', 'build', 'watch', 'serve',
))

// testx
gulp.task('build:test', () => {
  console.log('━━━━━━━━━━ build test x ━━━━━━━━━━')
  config.param.dist = config.directory.dist_test
  config.param.pathStat = config.pathStat.test_x
  config.param.pathString = config.pathString.test_x
  runSequence(
    'build:css', 'build:js', 'build:html', 'build:image', 'replace'
  )
})

// prod-x
gulp.task('build:prod', () => {
  console.log('━━━━━━━━━━ build prod x ━━━━━━━━━━')
  config.param.dist = config.directory.dist_prod
  config.param.pathStat = config.pathStat.prod_x
  config.param.pathString = config.pathString.prod_x
  runSequence(
    'build:css', 'build:js', 'build:html', 'build:image', 'replace'
  )
})
