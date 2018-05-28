/*
 * config
 */

// directory
const directory = {
  src: 'src/',
  dist: 'dist/',
  dist_test: 'dist-test/',
  dist_prod: 'dist-prod/',
  tmp: 'tmp/',
  html_src: 'src/html/',
  css_src: 'src/css/',
  js_src: 'src/js/',
  img_src: 'src/img/'
}

// stat path
const pathStat = {
  local: '../',
  test_x: '//sample/',
  prod_x: '//sample/',
}

// css path string
const pathString = {
  local: 'url\(..\/img\/',
  test_x: 'url(' + pathStat.test_x + 'img/',
  prod_x: 'url(' + pathStat.prod_x + 'img/',
}

// js parts
const jsPart = {
  common: [
    directory.js_src + 'common/common.js',
  ],
}

// build用動的パラメータ
let param = {
  // 出力ディレクトリ
  dist: directory.dist,
  // Statパス
  pathStat: pathStat.local,
  // css Stringパス
  pathString: pathString.local
}

// export
export default {
  directory,
  pathStat,
  pathString,
  jsPart,
  param
}
