# Submodule学习

## 学习

**1.背景**
工作中，可能会遇到在一个Git仓库中添加其他Git仓库的场景。比如，在项目中引用第三方库。或者在模块化开发中，某些公共的模块是需要单独维护的，使用单独的仓库比较方便，但是在项目中需要引用，就会出现这样的场景。这里使用Git的`git submodule`命令为一个git项目添加子git项目。

可以使用`git submodule --help`查看所有相关命令。

为了方便说明，这里在主项目 nintendo 中加两个子模块lib_a和lib_b.
**2.添加子模块**

```shell
git clone git@git.shuiditech.com:belllabs/cloud/nintendo.git
cd nintendo/
git submodule add git@git.shuiditech.com:frontend/devops/common.git src/common
```

使用 `git submodule add git@git.shuiditech.com:frontend/devops/common.git src/common` 添加 common 子模块。文件夹 common 为新增加的子模块目录。

>.gitmodules文件：保存项目 URL 与已经拉取的本地目录之间的映射，有多个子模块则含有多条记录，会随着版本控制一起被拉去和推送的。

**3.更新子模块**
（1）方法一

```shell
cd common/
git fetch
git merge origin/master
```

（2）方法二

```shell
git config -f .gitmodules submodule.common.branch dev
git submodule update --remote
```

>这里对 .gitmodules 加了 -f 参数，修改提交后对所有用户有效。

**4.删除子模块**
在日常开发中，有添加，当然也会有删除 子模块的需求。

+ 使用 git rm --cached liba 将liba 从版本控制中删除（本地仍保留有），若不需要可不带 --cached进行完全删除。
+ 使用 vim .gitmodules 可打开vim编辑,删除对应的内容
+ 使用 vim .git/config 可打开vim编辑,删除对应的内容
+ 使用 rm -rf .git/modules/common, 删除.git下的缓存模块，最后提交项目。

**5.克隆含子模块的仓库**
若需要克隆含有子模块的仓库，直接进行克隆是无法拉取之子模块的代码，可加上 `--recursive` 参数，如下：

```shell
git clone --recursive https://github.com/imtianx/MainProject.git
```

或者使用下面的三部操作：

```shell
git clone  git@git.shuiditech.com:belllabs/cloud/nintendo.git
cd nintendo/
git submodule init
git submodule update
```

## 工作中遇到的问题
