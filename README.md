# gulp-boiler-ejs-webpack-postcss

- [gulp-boiler-ejs-webpack-postcssリポジトリ](https://github.com/sekiyaeiji/gulp-boiler-ejs-webpack-postcss)

# プレビュー

# ファイルデプロイ先

## テスト

- [sample](sample) 以下

## 本番

- [sample](sample) 以下

# Jenkins

## プレビュー

- [sample](sample)

## 本番 デプロイ

以下の3ステップによりリリースしてください

1.[sample](sample)
2.[sample](sample)


# version

- [version.jsonを参照](https://github.com/sekiyaeiji/gulp-boiler-ejs-webpack-postcss/blob/develop/gulp/version.json)


# package

## package installed

- [package.jsonを参照](https://github.com/sekiyaeiji/gulp-boiler-ejs-webpack-postcss/blob/develop/package.json)


# config

## install

### install

    npm i

## start development with watch

    gulp start

## build command

### for Local

    gulp

### for Test Preview

    gulp build:test

### for Product

    gulp build:prod

## clean dist/、tmp/ command

    gulp clean


# ルートディレクトリ構成

    dist/ ： ローカル開発用出力ディレクトリ
    dist-test/ ： テストプレビュー用出力ディレクトリ
    dist-prod/ ： 本番用出力ディレクトリ
    gulp/ ： gulp Taskファイルディレクトリ
    src/ ： 開発ディレクトリ
    tmp/ ： 中間生成物一時保管ディレクトリ
    .editorconfig
    .eslintignore
    .eslintrc
    .gitignore
    gulpfile.babel.js
    package.json
    README.md


# 開発ディレクトリ構成

編集対象は src/ 以下のみ

    src/
      └ ejs/ ： ejs view
        └ data/ ： data
        └ html/ ： page
        └ include/ ： parts
      └ img/ ： 画像
      └ js/ ： js
        └ common/ ： common.js 素材
      └ css/ ： css
        └ common/ ： common.css
        └ config/ ： 定義ファイル

# CSS開発方針

## 設計方針

- [SMACSS](https://smacss.com/)

## セレクター命名方針

- [MindBEMding](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

