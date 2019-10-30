# Git 分布式管理系统学习

## 学习网站

+ 菜鸟教程：<https://www.runoob.com/git/git-tutorial.html>
+ 廖雪峰的官方网站：<https://www.liaoxuefeng.com/wiki/896043488029600>
+ 百度百科：<https://baike.baidu.com/item/GIT/12647237?fr=aladdin>
+ git官网：<https://git-scm.com/>

## 学习过程

+ 创建版本库（仓库）

```shell
    # 创建目录
    mkdir learngit
    # 进入目录
    cd learngit
    # 用于显示当前目录
    pwd
```

+ 把这个目录变成Git可以管理的仓库

```shell
    git init
```

+ 把一个文件放到Git仓库

```shell
    # 第一步：用命令git add告诉Git，把文件添加到仓库：
    git add readme.txt
    # 第二步：用命令git commit告诉Git，把文件提交到仓库：
    git commit -m "关于文件的描述或修改信息的描述"
    # 注：git commit 可以一次提交多个文件，所以可以多次add文件，但只需要提交一次

```

+ 显示当前仓库状态：

```shell
    git status
```

+ 查看修改内容（显示的格式是Unix通用的diff格式）

```shell
    # 查看readme.txt的修改
    git diff readme.txt
```

+ 显示从最近到最远的提交日志

```shell
    # 查看提交历史，以便确定回退到那个版本
    git log
    # 美化输出信息格式
    git log --pretty=oneline

```

+ 回退版本

```shell
    # 回退到上一次提交版本
    git reset --hard HEAD^
    # 回退到上三次提交的版本
    git reset --hard HEAD^^^
    # 回退到上100个版本
    git reset --hard HEAD～100
    # 回到版本号前4位位1094a的版本
    git reset --hard HEAD 1094a
    # 查看命令历史，以便确定回到未来那个版本
    git reflog
    # 回退到某个版本，但保留工作区修改
    git reset --soft HEAD 版本号
```

+ 让这个文件回到最近一次git commit或git add时的状态

```shell
    git checkout -- readme.txt
```

+ 把暂存区的修改撤销掉（unstage），重新放回工作区

```shell
    git reset HEAD readme.txt
```

+ 工作区删除文件

```shell
    rm test.txt
    # 工作区误删文件，通过这条命令用版本库中的版本替换工作区的版本
    git checkout -- test.txt
```

+ 把一个已有的本地仓库与github远程库关联

```shell
    git remote add origin git@github.com:webtianxiang/learngit.git

```

+ 把本地库的所有内容推送到远程库上

```shell
    # 把当前分支master推送到远程由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。
    git push -u origin master
```

+ 本地作提交

```shell
    # 把本地master分支的最新修改推送至GitHub
    git push origin master
```

+ 从远程库客克隆

```shell
    git clone git@github.com:michaelliao/gitskills.git
```

+ 分支相关（查看、创建、切换、合并、删除）

```shell
    # 查看当前分支
        # 有*的为当前分支
        git branch
    # 查看分支与远程仓库的联系
        git branch -vv
    # 创建分支
        # git branch issue#1
        git branch <branch-name>
    # 切换分支
        # git checkout issue#1
        git checkout <branch-name>
    # 创建+切换分支
        # git checkout -b issue#1
        git checkout -b <branch-name>
    # 合并某分支到当前分支
        # git merge issue#1
        git merge <branch-name>
     # 合并dev分支，请注意--no-ff参数，表示禁用Fast forward
        # 合并分支时，加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并。
        git merge --no-ff -m "merge with no-ff" dev
        # 当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。
        # 解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交。
    # 删除分支
        # git branch -d issue#1
        git branch -d <branch-name>
    # 强制删除分支
        # git branch -D issue#1
        git branch -D <branch-name>
    # 查看合并分支图
        git log --graph命令可以看到分支合并图。
    # 推送分支
        # 就是吧该分支上的所有本地提交推送到远程库。推送时要指定本地分支，这样Git就会把该分支推送到远程库对应的远程分支上。
        git push origin master
    # 抓取分支，从远程库拉取分支（没有则创建）
        # 创建远程origin的dev分支到本地
        git checkout -b dev origin/dev
        # 把最新的提交从origin/dev抓下来
        git pull
    # 指定本地dev分支与远程origin/dev分支的链接
        git branch --set-upstream-to origin/addFile
        git branch --set-upstream-to=origin/dev dev
```

+ 把当前工作现场“储藏”起来，等以后恢复现场后继续工作

```shell
    git stash
```

+ 恢复工作现场

```shell
    # 恢复的同时也把stash删除了，用git stash list查看就看不到任何内容了。
    git stash pop
    # 恢复，但是恢复后，stash内容并不删除，你需要用git stash drop来删除。
    git stash apply
```

+ 查看远程库的信息

```shell
    git remote
    # 显示远程库的详细信息
    git remote -v
```

+ 把本地未push的分叉提交历史整理成直线

```shell
    git rebase
```

+ 标签相关

```shell
    # 创建标签
        # 查看所有分支
        git branch
        # 切换到需要打标签的分支
        git checkout master
        # 打标签（默认标签是打在最新提交的commit上的）
        git tag v1.0
        # 查看所有标签
        git tag
    # 查看标签信息
        # 用命令git show <tagname>可以看到说明文字
        git show v1.0
    # 创建带有说明的标签，用-a指定标签名，-m指定说明文字，也可以后跟一个commit的id
        git tag -a v0.1 -m "version 0.1 released" 1094adb
    # 删除标签
        git tag -d v1.0
    # 推送某个标签到远程
        git push origin v1.0
        # 一次性推送所有未推送到远程的本地标签
        git push origin --tags
    # 删除已经推送到远程的标签
        # 先从本地删除
        git tag -d v1.0
        # 然后，从远程删除。删除命令也是push，但是格式如下：
        git push origin :refs/tags/v1.0
```

## 实际项目中遇到的问题

+ 本地拉取分支时，远程仓库没有分支

```shell
    # 创建本地分支
        git checkout -b 新分支名
    # 推送本地分支到远程仓库
        git push --set-upstream origin 分支名
```

+ 将远程 git 仓库里的指定分支拉取到本地(本地不存在的分支)

    ```shell
    # 创建一个新的本地分支，并与指定的远程分支关联起来。
        git checkout -b 本地分支名 origin/远程分支名
    ```

+ 建立本地分支与远程分支的映射关系

```shell
    # 建立当前分支与远程分支的映射关系
        git branch -u origin/addFile
    # 或者使用命令
        git branch --set-upstream-to origin/addFile
    # 撤销本地分支与远程分支的映射关系
        git branch --unset-upstream
```

+ 回退版本并提交到远程分支

```shell
    # 直接找到要回退的版本号（这里是：83ff2785）
        git reset --hard 83ff2785
    # reset之后，强行推送到服务器端
        git push -f origin <branch-name>
    # 此时如果有人获取了更新的版本，可能拉取代码不成功，执行以下操作
        # 从远程仓库下载最新版本
        git fetch --all
        # 将本地设为刚获取的最新的内容
        git reset --hard origin/branchname
```
