# nginx

## 简介

    1.Nginx 是一款轻量级的 Web 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器，在 BSD-like 协议下发行。其特点是占有内存少，并发能力强，事实上 nginx 的并发能力确实在同类型的网页服务器中表现较好，中国大陆使用 nginx 网站用户有：百度、京东、新浪、网易、腾讯、淘宝等。

## 安装步骤

    1.安装
        使用Homebrew安装nginx，命令行终端内输入
        brew install nginx
        等待安装完成即可
    2.配置nginx
        在终端内输入以下命令打开nginx文件夹
        open /usr/local/etc/nginx/
        打开 /usr/local/etc/nginx/（nginx文件夹所在的位置）
        将下边压缩包内的conf、servers文件夹及nginx.conf文件拖到目录内
        nginx配置文件.zip（公司提供的）
    3.nginx常用命令
        启动    sudo nginx
        测试配置文件    sudo nginx -t
        重启    sudo nginx -s reload
    4.配置反向代理
        （1）方法一：直接在nginx.conf里面添加
            ../
            server {
                listen 80;
                listen 443 ssl;
                server_name cba.com;

                ssl_certificate      /usr/local/etc/nginx/conf/abc.com.crt;
                ssl_certificate_key  /usr/local/etc/nginx/conf/abc.com.key;

                location / {
                    proxy_pass http://127.0.0.1:9001;
                }
            }
            ../
        (2)方法二：
            第一步：在nginx文件夹单独创建一个vhost文件夹，在文件夹下创建www.abc.com.conf文件，在里面编辑加入：
            server {
                listen 80;
                listen 443 ssl;
                server_name cba.com;

                ssl_certificate      /usr/local/etc/nginx/conf/abc.com.crt;
                ssl_certificate_key  /usr/local/etc/nginx/conf/abc.com.key;

                location / {
                    proxy_pass http://127.0.0.1:9001;
                }
            }
            第二步：在nginx.conf文件中加入：
            include vhost/*.conf
