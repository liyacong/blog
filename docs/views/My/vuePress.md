---
title: 入门须知
date: 2020-10-09
tags:
  - vuePress
categories:
  - mine
---

## vuePress 简介

VuePress 是 Vue 驱动的静态网站生成器

以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。

<!-- more -->

## 安装

安装 `vuePress` 建议根据项目安装而不是全局安装，可以使用以下命令：

```bash
npm install -g vuepress
```

## 初始化

进入指定项目文件夹，初始化项目

```bash
npm init

# 或

npm init -y（默认yes）
```

## 创建文件夹

```
项目名称
├─── docs
│   ├── README.md  # 配置主页内容
│   └── .vuepress
│       ├── public  # 存放图片等静态文件
│       └── config.js  # vuePress 配置文件
└── package.json 

```

## 在 package.json 文件添加启动命令

```bash
 "scripts": {
    "dev": "vuepress dev docs",
    "docs:dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "docs:build": "vuepress build docs"
  }
```

## 配置网站相关信息

安装主题[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)

```bash
npm install @vuepress-reco/theme-cli -g
```

在 src/.vuepress/config.js文件中配置网站标题、描述、主题等信息

## 运行

```bash
# 开发
npm run dev
# 构建
npm run build
```

## 部署上线

新建仓库一： USERNAME.github.io （不用克隆到本地）
注意：USERNAME 必须是你 Github 的账号名称，要保证和Github账号名一模一样

新建仓库二：随便起一个名字，比如：blog （克隆到本地）。这个仓库是博客相关的文件按上面步骤来即可。

在这个仓库下创建deploy.sh文件{文件中包含github的相关信息（github邮箱一定要写在名字前面，不然映射不到github）及打包相关信息}

在 package.json 文件夹中添加发布命令
"scripts": {
  "deploy": "bash deploy.sh"
}


```bash
打包发布
npm run deploy
```

结果不识别bash命令,呼呼呼````折腾了好久终于解决

安装[Ubuntu子系统](https://www.jianshu.com/p/599ccb570b39)

步骤如下:
开启电脑的开发者模式，具体在设置-安全与更新-针对开发者-开发者选项模式里面；选择开发者模式，会有短暂的加载过程；

打开Windows下Linux子系统这一功能，在win10小娜下搜索“启用或关闭windows功能”，勾选“适用于windows的linux系统”，点击确定，等待电脑更新配置，完成后重启电脑；

下载Ubuntu系统。打开微软商店，搜索ubuntu，根据自己想要的版本点击下载，安装；

安装完成后，打开，会进入一个终端界面，提示自己输入用户名和密码，输入进去后，Ubuntu子系统便安装成功；可以输入一些商用的Ubuntu命令查看

[Ubuntu下安装Node和npm](https://www.cnblogs.com/Hi-blog/p/How-To-Install-Node-And-Npm-On-Ubuntu.html)

```bash

安装node.js
sudo apt install nodejs -y

安装npm
sudo apt install npm -y

查看当前版本
sudo node -v
sudo npm -v

```

这样再进行npm run deploy就没问题啦!!!(根据提示填写github账号和密码)

访问之前新建的仓库一USERNAME.github.io，成功发布



