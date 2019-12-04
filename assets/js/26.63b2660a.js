(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{229:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git-分布式管理系统学习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-分布式管理系统学习"}},[t._v("#")]),t._v(" Git 分布式管理系统学习")]),t._v(" "),e("h2",{attrs:{id:"学习网站"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#学习网站"}},[t._v("#")]),t._v(" 学习网站")]),t._v(" "),e("ul",[e("li",[t._v("菜鸟教程："),e("a",{attrs:{href:"https://www.runoob.com/git/git-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.runoob.com/git/git-tutorial.html"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("廖雪峰的官方网站："),e("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.liaoxuefeng.com/wiki/896043488029600"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("百度百科："),e("a",{attrs:{href:"https://baike.baidu.com/item/GIT/12647237?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://baike.baidu.com/item/GIT/12647237?fr=aladdin"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("git官网："),e("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-scm.com/"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"学习过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#学习过程"}},[t._v("#")]),t._v(" 学习过程")]),t._v(" "),e("ul",[e("li",[t._v("创建版本库（仓库）")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    # 创建目录\n    mkdir learngit\n    # 进入目录\n    cd learngit\n    # 用于显示当前目录\n    pwd\n")])])]),e("ul",[e("li",[t._v("把这个目录变成Git可以管理的仓库")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    git init\n")])])]),e("ul",[e("li",[t._v("把一个文件放到Git仓库")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('    # 第一步：用命令git add告诉Git，把文件添加到仓库：\n    git add readme.txt\n    # 第二步：用命令git commit告诉Git，把文件提交到仓库：\n    git commit -m "关于文件的描述或修改信息的描述"\n    # 注：git commit 可以一次提交多个文件，所以可以多次add文件，但只需要提交一次\n\n')])])]),e("ul",[e("li",[t._v("显示当前仓库状态：")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    git status\n")])])]),e("ul",[e("li",[t._v("查看修改内容（显示的格式是Unix通用的diff格式）")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    # 查看readme.txt的修改\n    git diff readme.txt\n")])])]),e("ul",[e("li",[t._v("显示从最近到最远的提交日志")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    # 查看提交历史，以便确定回退到那个版本\n    git log\n    # 美化输出信息格式\n    git log --pretty=oneline\n\n")])])]),e("ul",[e("li",[t._v("回退版本")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    # 回退到上一次提交版本\n    git reset --hard HEAD^\n    # 回退到上三次提交的版本\n    git reset --hard HEAD^^^\n    # 回退到上100个版本\n    git reset --hard HEAD～100\n    # 回到版本号前4位位1094a的版本\n    git reset --hard HEAD 1094a\n    # 查看命令历史，以便确定回到未来那个版本\n    git reflog\n    # 回退到某个版本，但保留工作区修改\n    git reset --soft HEAD 版本号\n")])])]),e("ul",[e("li",[t._v("让这个文件回到最近一次git commit或git add时的状态")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    git checkout -- readme.txt\n")])])]),e("ul",[e("li",[t._v("把暂存区的修改撤销掉（unstage），重新放回工作区")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    git reset HEAD readme.txt\n")])])]),e("ul",[e("li",[t._v("工作区删除文件")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    rm test.txt\n    # 工作区误删文件，通过这条命令用版本库中的版本替换工作区的版本\n    git checkout -- test.txt\n")])])]),e("ul",[e("li",[t._v("把一个已有的本地仓库与github远程库关联")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    git remote add origin git@github.com:webtianxiang/learngit.git\n\n")])])]),e("ul",[e("li",[t._v("把本地库的所有内容推送到远程库上")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    # 把当前分支master推送到远程由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。\n    git push -u origin master\n")])])]),e("ul",[e("li",[t._v("本地作提交")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    # 把本地master分支的最新修改推送至GitHub\n    git push origin master\n")])])]),e("ul",[e("li",[t._v("从远程库客克隆")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    git clone git@github.com:michaelliao/gitskills.git\n")])])]),e("ul",[e("li",[t._v("分支相关（查看、创建、切换、合并、删除）")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('    # 查看当前分支\n        # 有*的为当前分支\n        git branch\n    # 查看分支与远程仓库的联系\n        git branch -vv\n    # 创建分支\n        # git branch issue#1\n        git branch <branch-name>\n    # 切换分支\n        # git checkout issue#1\n        git checkout <branch-name>\n    # 创建+切换分支\n        # git checkout -b issue#1\n        git checkout -b <branch-name>\n    # 合并某分支到当前分支\n        # git merge issue#1\n        git merge <branch-name>\n     # 合并dev分支，请注意--no-ff参数，表示禁用Fast forward\n        # 合并分支时，加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并。\n        git merge --no-ff -m "merge with no-ff" dev\n        # 当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。\n        # 解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交。\n    # 删除分支\n        # git branch -d issue#1\n        git branch -d <branch-name>\n    # 强制删除分支\n        # git branch -D issue#1\n        git branch -D <branch-name>\n    # 查看合并分支图\n        git log --graph命令可以看到分支合并图。\n    # 推送分支\n        # 就是吧该分支上的所有本地提交推送到远程库。推送时要指定本地分支，这样Git就会把该分支推送到远程库对应的远程分支上。\n        git push origin master\n    # 抓取分支，从远程库拉取分支（没有则创建）\n        # 创建远程origin的dev分支到本地\n        git checkout -b dev origin/dev\n        # 把最新的提交从origin/dev抓下来\n        git pull\n    # 指定本地dev分支与远程origin/dev分支的链接\n        git branch --set-upstream-to origin/addFile\n        git branch --set-upstream-to=origin/dev dev\n')])])]),e("ul",[e("li",[t._v("把当前工作现场“储藏”起来，等以后恢复现场后继续工作")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    git stash\n")])])]),e("ul",[e("li",[t._v("恢复工作现场")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    # 恢复的同时也把stash删除了，用git stash list查看就看不到任何内容了。\n    git stash pop\n    # 恢复，但是恢复后，stash内容并不删除，你需要用git stash drop来删除。\n    git stash apply\n")])])]),e("ul",[e("li",[t._v("查看远程库的信息")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    git remote\n    # 显示远程库的详细信息\n    git remote -v\n")])])]),e("ul",[e("li",[t._v("把本地未push的分叉提交历史整理成直线")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    git rebase\n")])])]),e("ul",[e("li",[t._v("标签相关")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('    # 创建标签\n        # 查看所有分支\n        git branch\n        # 切换到需要打标签的分支\n        git checkout master\n        # 打标签（默认标签是打在最新提交的commit上的）\n        git tag v1.0\n        # 查看所有标签\n        git tag\n    # 查看标签信息\n        # 用命令git show <tagname>可以看到说明文字\n        git show v1.0\n    # 创建带有说明的标签，用-a指定标签名，-m指定说明文字，也可以后跟一个commit的id\n        git tag -a v0.1 -m "version 0.1 released" 1094adb\n    # 删除标签\n        git tag -d v1.0\n    # 推送某个标签到远程\n        git push origin v1.0\n        # 一次性推送所有未推送到远程的本地标签\n        git push origin --tags\n    # 删除已经推送到远程的标签\n        # 先从本地删除\n        git tag -d v1.0\n        # 然后，从远程删除。删除命令也是push，但是格式如下：\n        git push origin :refs/tags/v1.0\n')])])]),e("h2",{attrs:{id:"实际项目中遇到的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实际项目中遇到的问题"}},[t._v("#")]),t._v(" 实际项目中遇到的问题")]),t._v(" "),e("ul",[e("li",[t._v("本地拉取分支时，远程仓库没有分支")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    # 创建本地分支\n        git checkout -b 新分支名\n    # 推送本地分支到远程仓库\n        git push --set-upstream origin 分支名\n")])])]),e("ul",[e("li",[e("p",[t._v("将远程 git 仓库里的指定分支拉取到本地(本地不存在的分支)")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 创建一个新的本地分支，并与指定的远程分支关联起来。\n    git checkout -b 本地分支名 origin/远程分支名\n")])])])]),t._v(" "),e("li",[e("p",[t._v("建立本地分支与远程分支的映射关系")])])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    # 建立当前分支与远程分支的映射关系\n        git branch -u origin/addFile\n    # 或者使用命令\n        git branch --set-upstream-to origin/addFile\n    # 撤销本地分支与远程分支的映射关系\n        git branch --unset-upstream\n")])])]),e("ul",[e("li",[t._v("回退版本并提交到远程分支")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    # 直接找到要回退的版本号（这里是：83ff2785）\n        git reset --hard 83ff2785\n    # reset之后，强行推送到服务器端\n        git push -f origin <branch-name>\n    # 此时如果有人获取了更新的版本，可能拉取代码不成功，执行以下操作\n        # 从远程仓库下载最新版本\n        git fetch --all\n        # 将本地设为刚获取的最新的内容\n        git reset --hard origin/branchname\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);