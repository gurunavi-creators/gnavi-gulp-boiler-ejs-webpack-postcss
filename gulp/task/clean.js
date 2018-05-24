/*
 * clean
 */
import gulp from 'gulp'
import del from 'del'
import config from '../config'


gulp.task('clean', (callback) => {
  console.log('---------- clean ----------')
  del(config.directory.tmp)
  del(config.directory.dist)
  del(config.directory.dist_test)
  del(config.directory.dist_prod)
  del(config.directory.tmp_dev)
  callback()
})
