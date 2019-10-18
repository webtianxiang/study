#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add -A
git commit -m 'deploy'

git push origin master

# 生成静态文件
yarn run docs:build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 httpsre://<USERNAME>.github.io/<REPO>
git push -f git@github.com:webtianxiang/study.git master:gh-pages

cd -
