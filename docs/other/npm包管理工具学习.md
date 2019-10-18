# NPM 包管理工具学习

## 使用介绍

    NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：
    · 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
    · 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
    · 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

## 使用 NPM 命令

    1. npm -v 测试是否安装成功，出现版本提示表示安装成功
    2. sudo npm install npm -g 通过npm命令来升级
       npm install npm -g Windows系统使用此条命令安装
    3. npm install -g cnpm --registry=https://registry.npm.taobao.org 使用淘宝镜像命令
    4. npm install <Moudle Name> 安装Node.js模块语法
    例如：
       npm install express
       安装好之后，express 包就放在了工程目录下的 node_modules 目录中，因此在代码中只需要通过 require('express') 的方式就好，无需指定第三方包路径。
       var express = require('express');
    5. npm install express 本地安装
       npm install express -g 全局安装
       npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是没有-g而已
    6. 本地安装：
       ·将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有           node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
       ·可以通过 require() 来引入本地安装的包。
    7. 全局安装：
       ·将安装包放在 /usr/local 下或者你 node 的安装目录。
       ·可以直接在命令行里使用。
    8. npm list -g 查看全局安装信息

## 使用 package.json

    1. package.json 位于模块的目录下，用于定义包的属性。接下来让我们来看下 express 包的 package.json 文件，位于 node_modules/express/package.json
    2. name - 包名。
       version - 包的版本号。
       description - 包的描述。
       homepage - 包的官网 url 。
       author - 包的作者姓名。
       contributors - 包的其他贡献者姓名。
       dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
       repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
       main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
       keywords - 关键字

## 相关模块操作

    1. npm uninstall express 卸载express
    2. 卸载后，可以到/node_modules/目录下查看包是否还存在
       npm ls
    3. npm update express 更新模块
    4. npm search express 搜索模块
    5. npm init 创建模块，然后根据提示写入
    6. npm publish 发布模块

## npm常用命令

    1. NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
       ·使用npm help <command>可查看某条命令的详细帮助，例如npm help install。
       ·在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
       ·使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
       ·使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。
       ·使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
       ·使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。

## 使用淘宝镜像

    大家都知道国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用淘宝 NPM 镜像。
    淘宝 NPM 镜像是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。
    你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:
      ·npm install -g cnpm --registry=https://registry.npm.taobao.org
      这样就可以使用 cnpm 命令来安装模块了：
      cnpm install [name]
