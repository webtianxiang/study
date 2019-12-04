(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{237:function(v,_,t){"use strict";t.r(_);var a=t(0),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"从输入url到页面加载发生了什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从输入url到页面加载发生了什么"}},[v._v("#")]),v._v(" 从输入URL到页面加载发生了什么")]),v._v(" "),t("h2",{attrs:{id:"主要过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主要过程"}},[v._v("#")]),v._v(" 主要过程")]),v._v(" "),t("ol",[t("li",[v._v("DNS解析")]),v._v(" "),t("li",[v._v("TCP连接")]),v._v(" "),t("li",[v._v("发送HTTP请求")]),v._v(" "),t("li",[v._v("服务器处理请求并返回HTTP报文")]),v._v(" "),t("li",[v._v("浏览器解析渲染页面")]),v._v(" "),t("li",[v._v("释放连接")])]),v._v(" "),t("h3",{attrs:{id:"dns解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns解析"}},[v._v("#")]),v._v(" DNS解析")]),v._v(" "),t("p",[t("strong",[v._v("DNS解析")]),v._v("：")]),v._v(" "),t("blockquote",[t("p",[v._v("输入URL后，需要找到这个URL对应的服务器，为了查询服务器地址，第一步需要实现从网址到对应ip的转换，浏览器首先依次查询自身缓存，系统缓存和路由器缓存的")])]),v._v(" "),t("p",[t("strong",[v._v("DNS查询过程")]),v._v("：")]),v._v(" "),t("p",[v._v("1.浏览器查询自身缓存 --\x3e 系统缓存 --\x3e 路由缓存\n2.查询本地host文件\n3.发送域名解析请求查询DNS服务器：")]),v._v(" "),t("ul",[t("li",[v._v("在本地域名服务器中查询 www.baidu.com")]),v._v(" "),t("li",[v._v("向根域名服务器发送查询请求")]),v._v(" "),t("li",[v._v("向com域名服务器查询")]),v._v(" "),t("li",[v._v("向baidu.com域名服务器查询")]),v._v(" "),t("li",[v._v("查询到结果")])]),v._v(" "),t("p",[v._v("4.缓存到本地，以供下次查询")]),v._v(" "),t("p",[t("strong",[v._v("域名系统DNS")]),v._v("：")]),v._v(" "),t("p",[v._v("1.DNS能够将互联网的主机名转换成IP地址，为了减少开销，DNS是以UDP用户数据报的形式发送解析请求的。\n2.域名解析过程中有两种查询方式：")]),v._v(" "),t("ul",[t("li",[v._v("递归查询：\n举个例子：客户端向服务器A发查询请求，若未找到则由服务器A向服务器B发起查询请求，未找到再由服务器B向服务器C发起查询请求，以此类推，最后将查询结果一次经过服务器C、服务器B、服务器A返回给客户端的查询模式。")]),v._v(" "),t("li",[v._v("迭代查询：\n举个例子：服务器A向服务器B发送查询请求，若未找到则将查询结果返回给服务器A，由服务器A继续向服务器C发送查询请求，以此类推，最后得到查询结果的查询模式。")])]),v._v(" "),t("p",[v._v("2.本地域名服务器向根域名服务器的查询方式一般采用迭代查询")]),v._v(" "),t("h3",{attrs:{id:"tcp连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp连接"}},[v._v("#")]),v._v(" TCP连接")]),v._v(" "),t("p",[t("strong",[v._v("TCP连接")]),v._v("：")]),v._v(" "),t("blockquote",[t("p",[v._v("浏览器通过随机端口向服务器指定端口发起TCP连接请求，通过运输层，网络层，数据链路层，物理层到达服务器，经过三次握手后建立TCP连接")])]),v._v(" "),t("p",[t("strong",[v._v("五层协议体系结构")]),v._v("：")]),v._v(" "),t("p",[v._v("1.应用层：以报文的方式通过应用进程间的交互完成特定网络服务。常见的应用层协议有域名系统DNS，HTTP协议等。\n2.运输层：为应用层的报文段或用户数据报提供传输服务。运输层的协议有TCP协议和UDP协议。\n3.网络层：将运输层的报文段或用书数据报封装成分组，以分组（又称IP数据报）的形式在网络中转发。\n4.数据链路层：将网络层的IP数据报封装成帧，在两个相邻节点（路由器或其他IP数据报）的形式在网络中转发。\n5.物理层：在链接各种计算机的传输媒体之间传输数据比特流")]),v._v(" "),t("p",[t("strong",[v._v("TCP和UDP")]),v._v("：")]),v._v(" "),t("p",[v._v("1.TCP：提供面向连接的、可靠的数据传输服务。以报文段的形式传播。\n2.UDP：提供无连接、尽最大努力的数据传输服务。以用户数据报的形式传播。")]),v._v(" "),t("p",[t("strong",[v._v("三次握手")]),v._v("：")]),v._v(" "),t("p",[v._v("1.第一次握手：客户端进程发送连接请求报文段给服务器，客户端进程进入sync-sent（同步发送）状态\n2.第二次握手：服务器收到请求报文段，如果同意建立连接则向客户端发送确认报文段，服务器进程进入sync-rcvd（同步收到）状态\n3.第三次握手：客户端进程收到服务器的确认后，再给服务器进程发送确认")]),v._v(" "),t("blockquote",[t("p",[v._v("第三次握手的原因是为了防止已失效的连接请求报文段突然又传回给服务器进程从而产生错误。假设客户端发送第一次连接请求由于网络滞留了，于是客户端又发送了一次请求并成功建立连接，数据传输完毕后就释放了连接。在释放连接后的某个时间段内客户端的第一次报文段又到达了服务器并被服务器进程确认，如果没有第三次握手，则服务器会一直等待客户端发送数据，从而浪费许多资源。")])]),v._v(" "),t("h3",{attrs:{id:"发送http请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发送http请求"}},[v._v("#")]),v._v(" 发送HTTP请求")]),v._v(" "),t("p",[t("strong",[v._v("发送HTTP请求")]),v._v("：")]),v._v(" "),t("blockquote",[t("p",[v._v("三次握手后，就可以传输数据了，客户端将要发送的内容构建成HTTP请求报文并封装在TCP包中，通过TCP协议发送到服务器指定端口")])]),v._v(" "),t("p",[t("strong",[v._v("HTTP请求报文格式")]),v._v("：")]),v._v(" "),t("p",[v._v("1.HTTP请求报文一般由请求头组成，请求头用来说明报文主体的一些信息。请求报文和响应报文的区别就是开始行的不同。\n2.请求报文中的开始行成为请求行，HTTP请求行只有三个内容，即方法、URL和HTTP版本。\n3.请求方法有：")]),v._v(" "),t("ul",[t("li",[v._v("GET 请求读取URL中的信息")]),v._v(" "),t("li",[v._v("POST 向指定资源提交数据，如提测表单，上传文件等")]),v._v(" "),t("li",[v._v("HEAD 请求URL所标志信息的首部")]),v._v(" "),t("li",[v._v("DELETE 请求服务器删除指定的页面")]),v._v(" "),t("li",[v._v("OPTIONS 允许客户端查看服务器性能")]),v._v(" "),t("li",[v._v("PUT 用从客户端向服务器传送的数据来替换指定文档的内容")]),v._v(" "),t("li",[v._v("CONNECT 用于代理服务器")]),v._v(" "),t("li",[v._v("TRACK 用于测试和诊断")])]),v._v(" "),t("h3",{attrs:{id:"服务器处理请求并返回http报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器处理请求并返回http报文"}},[v._v("#")]),v._v(" 服务器处理请求并返回HTTP报文")]),v._v(" "),t("p",[t("strong",[v._v("HTTP响应报文格式")]),v._v("：")]),v._v(" "),t("p",[v._v("1.HTTP响应报文一般由状态行，响应头和响应报文组成，响应头用来说明报文主体的一些信息。\n2.响应报文中的开始行称为状态行，HTTP状态行只有三个内容，即HTTP版本，状态码和解释状态码的简单短语。\n3.状态码含义：")]),v._v(" "),t("ul",[t("li",[v._v("1xx 服务器收到请求")]),v._v(" "),t("li",[v._v("2xx 请求成功，开始处理")]),v._v(" "),t("li",[v._v("3xx 重定向")]),v._v(" "),t("li",[v._v("4xx 客户端错误")]),v._v(" "),t("li",[v._v("5xx 服务器错误")])]),v._v(" "),t("h3",{attrs:{id:"浏览器解析和渲染页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器解析和渲染页面"}},[v._v("#")]),v._v(" 浏览器解析和渲染页面")]),v._v(" "),t("p",[t("strong",[v._v("浏览器解析和渲染页面")]),v._v("：")]),v._v(" "),t("blockquote",[t("p",[v._v("浏览器根据拿到的响应报文进行解析和页面的渲染")])]),v._v(" "),t("p",[v._v("1.构建DOM树：HTML文档会被解析成一颗以document为根的DOM树，解析过程中如果遇到JavaScript，则会暂停解析并传输下载相应的文件造成阻塞，故推荐将JavaScript脚本放在HTML文件的后面。\n2.构建CSSOM：浏览器根据外部样式，内部样式和内联样式来解析CSS，构建CSSOM树。\n3.构建渲染树和布局：DOM树和CSSOM树构建完毕后会融合成渲染树，然后浏览器会确认页面各元素的位置。\n4.页面绘制和优化：浏览器根据布局结果进行页面的绘制，并优化页面内容，减小CPU消耗。")]),v._v(" "),t("h3",{attrs:{id:"释放连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#释放连接"}},[v._v("#")]),v._v(" 释放连接")]),v._v(" "),t("p",[t("strong",[v._v("TCP四次挥手")]),v._v("：")]),v._v(" "),t("p",[v._v("1.第一次挥手：客户端发送释放连接请求，不再发送数据，但还可以接收数据\n2.第二次挥手：服务器收到连接释放的报文段后即发出确认，这样从客户端到服务器的连接就释放了\n3.第三次挥手：等所有数据传输完毕后，服务器发送终止请求给客户端，标识不再穿输数据给客户端\n4.第四次挥手：最后客户端收到服务端关闭请求后发送确认报文段，完成四次挥手")])])}),[],!1,null,null,null);_.default=s.exports}}]);