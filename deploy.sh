#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git config --global user.email "1146587595@qq.com"
git config --global user.name "liyacong"

git init
git add -A
git commit -m 'deploy'



# 填写你需要发布的仓库地址
git push -f https://github.com/liyacong/liyacong.github.io master
# git push -f git@github.com:liyacong/liyacong.github.io.git master

cd -

