(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{345:function(t,a,e){"use strict";e.r(a);var s=e(11),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"yapi-运维"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yapi-运维"}},[t._v("#")]),t._v(" YApi 运维")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://github.com/YMFE/yapi",target:"_blank",rel:"noopener noreferrer"}},[t._v("YApi"),e("OutboundLink")],1),t._v(" 是一个可本地部署的、打通前后端及 QA 的、可视化的接口管理平台。")]),t._v(" "),e("p",[t._v("本文目的在于记录 svn 的安装、配置、使用。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/1562814562978.png!zp",alt:"img"}})]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#1-%E6%99%AE%E9%80%9A%E9%83%A8%E7%BD%B2"}},[t._v("1. 普通部署")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#11-%E7%8E%AF%E5%A2%83%E8%A6%81%E6%B1%82"}},[t._v("1.1. 环境要求")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#12-%E9%83%A8%E7%BD%B2"}},[t._v("1.2. 部署")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#13-%E5%8D%87%E7%BA%A7"}},[t._v("1.3. 升级")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#2-docker-%E9%83%A8%E7%BD%B2"}},[t._v("2. Docker 部署")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#21-%E7%8E%AF%E5%A2%83%E8%A6%81%E6%B1%82"}},[t._v("2.1. 环境要求")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#22-%E9%83%A8%E7%BD%B2"}},[t._v("2.2. 部署")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#3-%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[t._v("3. 参考资料")])])]),t._v(" "),e("h2",{attrs:{id:"_1-普通部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-普通部署"}},[t._v("#")]),t._v(" 1. 普通部署")]),t._v(" "),e("h3",{attrs:{id:"_1-1-环境要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-环境要求"}},[t._v("#")]),t._v(" 1.1. 环境要求")]),t._v(" "),e("ul",[e("li",[t._v("nodejs（7.6+)")]),t._v(" "),e("li",[t._v("mongodb（2.6+）")]),t._v(" "),e("li",[t._v("git")])]),t._v(" "),e("h3",{attrs:{id:"_1-2-部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-部署"}},[t._v("#")]),t._v(" 1.2. 部署")]),t._v(" "),e("h4",{attrs:{id:"方式一-可视化部署-推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方式一-可视化部署-推荐"}},[t._v("#")]),t._v(" 方式一. 可视化部署[推荐]")]),t._v(" "),e("p",[t._v("执行 yapi server 启动可视化部署程序，输入相应的配置和点击开始部署，就能完成整个网站的部署。部署完成之后，可按照提示信息，执行 node/{网站路径/server/app.js} 启动服务器。在浏览器打开指定 url, 点击登录输入您刚才设置的管理员邮箱，默认密码(ymfe.org) 登录系统（默认密码可在个人中心修改）。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g yapi-cli --registry https://registry.npm.taobao.org\n$ yapi server\n")])])]),e("h4",{attrs:{id:"方式二-命令行部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方式二-命令行部署"}},[t._v("#")]),t._v(" 方式二. 命令行部署")]),t._v(" "),e("p",[t._v("如果 github 压缩文件无法下载，或需要部署到一些特殊的服务器，可尝试此方法")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" yapi\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" yapi\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/YMFE/yapi.git vendors //或者下载 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" 包解压到 vendors 目录（clone 整个仓库大概 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("140")]),t._v("+ M，可以通过 "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --depth"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" https://github.com/YMFE/yapi.git vendors"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" 命令减少，大概 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("+ M）\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" vendors/config_example.json ./config.json //复制完成后请修改相关配置\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" vendors\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --production --registry https://registry.npm.taobao.org\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run install-server //安装程序会初始化数据库索引和管理员账号，管理员账号名可在 config.json 配置\nnode server/app.js //启动服务器后，请访问 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("config.json配置的端口"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("，初次运行会有个编译的过程，请耐心等候\n")])])]),e("p",[t._v("安装后的目录结构如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("|-- config.json\n|-- init.lock\n|-- log\n`-- vendors\n    |-- CHANGELOG.md\n    |-- LICENSE\n    |-- README.md\n    |-- client\n    |-- common\n    |-- config_example.json\n    |-- doc\n    |-- exts\n    |-- nodemon.json\n    |-- npm-debug.log\n    |-- package.json\n    |-- plugin.json\n    |-- server\n    |-- static\n    |-- test\n    |-- webpack.alias.js\n    |-- yapi-base-flow.jpg\n    |-- ydocfile.js\n    `-- ykit.config.js\n")])])]),e("h3",{attrs:{id:"_1-3-升级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-升级"}},[t._v("#")]),t._v(" 1.3. 升级")]),t._v(" "),e("p",[t._v("升级项目版本是非常容易的，并且不会影响已有的项目数据，只会同步 vendors 目录下的源码文件。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("cd  {项目目录}\nyapi ls //查看版本号列表\nyapi update //升级到最新版本\nyapi update -v v1.1.0 //升级到指定版本\n")])])]),e("h2",{attrs:{id:"_2-docker-部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker-部署"}},[t._v("#")]),t._v(" 2. Docker 部署")]),t._v(" "),e("h3",{attrs:{id:"_2-1-环境要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-环境要求"}},[t._v("#")]),t._v(" 2.1. 环境要求")]),t._v(" "),e("ul",[e("li",[t._v("系统："),e("code",[t._v("CentOS 7.4")])]),t._v(" "),e("li",[t._v("硬件要求："),e("code",[t._v("1 GB RAM minimum")])]),t._v(" "),e("li",[t._v("ip："),e("code",[t._v("http://192.168.1.121")])]),t._v(" "),e("li",[t._v("docker version："),e("code",[t._v("17.12.1-ce, build 7390fc6")])]),t._v(" "),e("li",[t._v("docker-compose version："),e("code",[t._v("1.18.0, build 8dd22a9")])])]),t._v(" "),e("blockquote",[e("p",[t._v("建议部署成 http 站点，因 chrome 浏览器安全限制，部署成 https 会导致测试功能在请求 http 站点时文件上传功能异常。--"),e("a",{attrs:{href:"https://yapi.ymfe.org/devops.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("来源"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"_2-2-部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-部署"}},[t._v("#")]),t._v(" 2.2. 部署")]),t._v(" "),e("ul",[e("li",[t._v("一个好心人的维护："),e("a",{attrs:{href:"https://github.com/branchzero/yapi-docker",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/branchzero/yapi-docker"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("使用方法： - work path："),e("code",[t._v("mkdir -p /opt/git-data")]),t._v(" - clone："),e("code",[t._v("cd /opt/git-data && git clone https://github.com/branchzero/yapi-docker.git")]),t._v(" - permission："),e("code",[t._v("chmod -R 777 /opt/git-data")]),t._v(" - run command："),e("code",[t._v("cd /opt/git-data/yapi-docker && docker-compose up -d")]),t._v(" - open chrome："),e("code",[t._v("http://192.168.1.121:3000")])]),t._v(" "),e("li",[t._v("初始化管理员账号名："),e("code",[t._v("admin@admin.com")]),t._v("，密码："),e("code",[t._v("ymfe.org")])])]),t._v(" "),e("h2",{attrs:{id:"_3-参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-参考资料"}},[t._v("#")]),t._v(" 3. 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/YMFE/yapi",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方 Github"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://yapi.demo.qunar.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网在线演示"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://hellosean1025.github.io/yapi/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方使用手册"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);