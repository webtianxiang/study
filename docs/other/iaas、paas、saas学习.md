# IAAS、PAAS、SAAS学习

1. 名词解释：
  IaaS：基础设施服务，Infrastructure-as-a-service
  PaaS：平台服务，Platform-as-a-service
  SaaS：软件服务，Software-as-a-service

2. 把软件开发分解为一下这些部分，对于IAAS、PAAS、SAAS进行对比
  Applications                       应用
  Runtimes                           运行时间
  Security & Integeration            安全与集成
  Databases                          数据库
  Servers                            服务器
  Virtualization                     虚拟化
  Server HW                          服务器硬件
  Storage                            保管部
  Networking                         网络

## IAAS

1. you manage
  Applications                       应用
  Runtimes                           运行时间
  Security & Integeration            安全与集成
  Databases                          数据库
2. managed by vendor
  Servers                            服务器
  Virtualization                     虚拟化
  Server HW                          服务器硬件
  Storage                            保管部
  Networking                         网络

## PAAS

1. you manage
  Applications                       应用
2. managed by vendor
  Runtimes                           运行时间
  Security & Integeration            安全与集成
  Databases                          数据库
  Servers                            服务器
  Virtualization                     虚拟化
  Server HW                          服务器硬件
  Storage                            保管部
  Networking                         网络

## SAAS

1. you manage
  无
2. managed by vendor
  Applications                       应用
  Runtimes                           运行时间
  Security & Integeration            安全与集成
  Databases                          数据库
  Servers                            服务器
  Virtualization                     虚拟化
  Server HW                          服务器硬件
  Storage                            保管部
  Networking                         网络

## 区别解释

  you manage：用户决定
  managed by wendor：云服务商决定
  可以看出：
  ·SaaS 模式下用户没有任何自主权，只能使用给定的应用程序；
  ·PaaS 模式下可以自己安装应用程序，但是不能定制操作系统；
  ·IaaS 模式下则是云服务商提供（虚拟的）硬件，从操作系统开始都可以自己选择和定制。

## 案例解释

1.ISSA：IaaS 是云服务的最底层，主要提供一些基础资源。它与 PaaS 的区别是，用户需要自己控制底层，实现基础设施的使用逻辑。下面这些都属于 IaaS。

  ·亚马逊EC2 Amazon EC2
  ·Digital Ocean
  ·RackSpace Cloud

2.PAAS：PaaS 提供软件部署平台（runtime），抽象掉了硬件和操作系统细节，可以无缝地扩展（scaling）。开发者只需要关注自己的业务逻辑，不需要关注底层。下面这些都属于 PaaS。

  ·完全托管的基于容器的云平台 Heroku （是一个完全托管的基于容器的云平台，具有集成的数据服务和强大的生态系统，可用于部署和运行现代应用程序。）
  ·谷歌应用引擎 Google App Engine
  ·容器应用平台 OpenShift

3.SAAS：SaaS 是软件的开发、管理、部署都交给第三方，不需要关心技术问题，可以拿来即用。普通用户接触到的互联网服务，几乎都是 SaaS，下面是一些例子。

  ·客户管理服务 Salesforce
  ·团队协同服务 Google Apps
  ·储存服务 Box
  ·储存服务 Dropbox
  ·社交服务 Facebook / Twitter / Instagram
