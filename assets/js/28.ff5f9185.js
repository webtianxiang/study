(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{234:function(n,e,t){"use strict";t.r(e);var s=t(0),c=Object(s.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[n._v("#")]),n._v(" nginx")]),n._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[n._v("#")]),n._v(" 简介")]),n._v(" "),t("pre",[t("code",[n._v("1.Nginx 是一款轻量级的 Web 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器，在 BSD-like 协议下发行。其特点是占有内存少，并发能力强，事实上 nginx 的并发能力确实在同类型的网页服务器中表现较好，中国大陆使用 nginx 网站用户有：百度、京东、新浪、网易、腾讯、淘宝等。\n")])]),n._v(" "),t("h2",{attrs:{id:"安装步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤"}},[n._v("#")]),n._v(" 安装步骤")]),n._v(" "),t("pre",[t("code",[n._v("1.安装\n    使用Homebrew安装nginx，命令行终端内输入\n    brew install nginx\n    等待安装完成即可\n2.配置nginx\n    在终端内输入以下命令打开nginx文件夹\n    open /usr/local/etc/nginx/\n    打开 /usr/local/etc/nginx/（nginx文件夹所在的位置）\n    将下边压缩包内的conf、servers文件夹及nginx.conf文件拖到目录内\n    nginx配置文件.zip（公司提供的）\n3.nginx常用命令\n    启动    sudo nginx\n    测试配置文件    sudo nginx -t\n    重启    sudo nginx -s reload\n4.配置反向代理\n    （1）方法一：直接在nginx.conf里面添加\n        ../\n        server {\n            listen 80;\n            listen 443 ssl;\n            server_name cba.com;\n\n            ssl_certificate      /usr/local/etc/nginx/conf/abc.com.crt;\n            ssl_certificate_key  /usr/local/etc/nginx/conf/abc.com.key;\n\n            location / {\n                proxy_pass http://127.0.0.1:9001;\n            }\n        }\n        ../\n    (2)方法二：\n        第一步：在nginx文件夹单独创建一个vhost文件夹，在文件夹下创建www.abc.com.conf文件，在里面编辑加入：\n        server {\n            listen 80;\n            listen 443 ssl;\n            server_name cba.com;\n\n            ssl_certificate      /usr/local/etc/nginx/conf/abc.com.crt;\n            ssl_certificate_key  /usr/local/etc/nginx/conf/abc.com.key;\n\n            location / {\n                proxy_pass http://127.0.0.1:9001;\n            }\n        }\n        第二步：在nginx.conf文件中加入：\n        include vhost/*.conf\n")])])])}),[],!1,null,null,null);e.default=c.exports}}]);