/**
 * gulp-boiler
 *
 * ** 開発開始手順
 *
 * $ npm i
 *
 * ** 開発開始 with watchコマンド
 *
 * $ gulp start
 *
 * ** local用 buildコマンド
 *
 * $ gulp
 *
 * ** test preview用 build コマンド
 *
 * $ gulp build:test
 *
 * ** 本番デプロイ用 build コマンド
 *
 * $ gulp build:prod
 *
 * ** dist、tmp削除コマンド
 *
 * $ gulp clean
 *
 * ---------------------------------------------------------------------- */

import requireDir from 'require-dir'

requireDir('./gulp/task', { recurse: true })
