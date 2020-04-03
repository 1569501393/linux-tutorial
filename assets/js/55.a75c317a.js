(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{347:function(a,t,v){"use strict";v.r(t);var s=v(11),_=Object(s.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"jdk-安装"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jdk-安装"}},[a._v("#")]),a._v(" JDK 安装")]),a._v(" "),v("blockquote",[v("p",[a._v("关键词：JDK, JAVA_HOME, CLASSPATH, PATH")])]),a._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#jdk-%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4"}},[a._v("JDK 安装步骤")])]),a._v(" "),v("li",[v("a",{attrs:{href:"#windows-%E7%B3%BB%E7%BB%9F%E5%AE%89%E8%A3%85%E6%96%B9%E6%B3%95"}},[a._v("Windows 系统安装方法")])]),a._v(" "),v("li",[v("a",{attrs:{href:"#linux-%E7%B3%BB%E7%BB%9F%E5%AE%89%E8%A3%85%E6%96%B9%E6%B3%95"}},[a._v("Linux 系统安装方法")]),a._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#redhat-%E5%8F%91%E8%A1%8C%E7%89%88%E6%9C%AC%E4%BD%BF%E7%94%A8-rpm-%E5%AE%89%E8%A3%85%E6%96%B9%E6%B3%95"}},[a._v("RedHat 发行版本使用 rpm 安装方法")])])])]),a._v(" "),v("li",[v("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[a._v("参考资料")])])]),a._v(" "),v("h2",{attrs:{id:"jdk-安装步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jdk-安装步骤"}},[a._v("#")]),a._v(" JDK 安装步骤")]),a._v(" "),v("p",[a._v("JDK 安装步骤：")]),a._v(" "),v("p",[a._v("（1）下载 JDK")]),a._v(" "),v("p",[a._v("a. 进入 "),v("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java 官网下载页面"),v("OutboundLink")],1),a._v("；")]),a._v(" "),v("p",[a._v("b. 选择需要的版本：")]),a._v(" "),v("p",[v("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20180920181010164121.png!zp",alt:"img"}})]),a._v(" "),v("p",[a._v("c. 选择对应操作系统的安装包：")]),a._v(" "),v("p",[a._v("Windows 系统选择 exe 安装包；Mac 系统选择 dmp 安装包；Linux 系统选择 tar.gz 压缩包（RedHat 发行版可以安装 rpm 包）。")]),a._v(" "),v("p",[v("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20180920181010164308.png!zp",alt:"img"}})]),a._v(" "),v("p",[a._v("（2）运行安装包，按提示逐步安装")]),a._v(" "),v("p",[a._v("（3）配置系统环境变量："),v("code",[a._v("JAVA_HOME")]),a._v(", "),v("code",[a._v("CLASSPATH")]),a._v(", "),v("code",[a._v("PATH")])]),a._v(" "),v("p",[a._v("（4）验证 Java 是否安装成功")]),a._v(" "),v("h2",{attrs:{id:"windows-系统安装方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#windows-系统安装方法"}},[a._v("#")]),a._v(" Windows 系统安装方法")]),a._v(" "),v("p",[a._v("（1）下载 JDK")]),a._v(" "),v("p",[a._v("需要根据 Windows 系统实际情况，选择 exe 安装文件：")]),a._v(" "),v("ul",[v("li",[a._v("32 位计算机选择 Windows x86")]),a._v(" "),v("li",[a._v("64 位计算机选择 Windows x64")])]),a._v(" "),v("p",[a._v("（2）运行安装包，按提示逐步安装")]),a._v(" "),v("p",[a._v("（3）配置系统环境变量")]),a._v(" "),v("p",[a._v('a. 安装完成后，右击"我的电脑"，点击"属性"，选择"高级系统设置"；')]),a._v(" "),v("p",[v("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2013/12/win-java1.png",alt:"img"}})]),a._v(" "),v("p",[a._v('b. 选择"高级"选项卡，点击"环境变量"；')]),a._v(" "),v("p",[v("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2013/12/java-win2.png",alt:"img"}})]),a._v(" "),v("p",[a._v("然后就会出现如下图所示的画面：")]),a._v(" "),v("p",[a._v('在"系统变量"中设置 3 项属性，JAVA_HOME,PATH,CLASSPATH(大小写无所谓),若已存在则点击"编辑"，不存在则点击"新建"。')]),a._v(" "),v("p",[a._v("变量设置参数如下：")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("变量名："),v("strong",[a._v("JAVA_HOME")])])]),a._v(" "),v("li",[v("p",[a._v("变量值："),v("strong",[a._v("C:\\Program Files (x86)\\Java\\jdk1.8.0_91")]),a._v(" // 要根据自己的实际路径配置")])]),a._v(" "),v("li",[v("p",[a._v("变量名："),v("strong",[a._v("CLASSPATH")])])]),a._v(" "),v("li",[v("p",[a._v("变量值："),v("strong",[a._v(".;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar;")]),a._v(' //记得前面有个"."')])]),a._v(" "),v("li",[v("p",[a._v("变量名："),v("strong",[a._v("Path")])])]),a._v(" "),v("li",[v("p",[a._v("变量值："),v("strong",[a._v("%JAVA_HOME%\\bin;%JAVA_HOME%\\jre\\bin;")])])])]),a._v(" "),v("p",[a._v("（4）验证 Java 是否安装成功")]),a._v(" "),v("p",[a._v('a. "开始"->"运行"，键入"cmd"；')]),a._v(" "),v("p",[a._v("b. 键入命令: "),v("strong",[a._v("java -version")]),a._v("、"),v("strong",[a._v("java")]),a._v("、"),v("strong",[a._v("javac")]),a._v(" 几个命令，出现以下信息，说明环境变量配置成功；")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2013/12/java-win9.png",alt:"img"}})]),a._v(" "),v("h2",{attrs:{id:"linux-系统安装方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#linux-系统安装方法"}},[a._v("#")]),a._v(" Linux 系统安装方法")]),a._v(" "),v("p",[a._v("（1）下载 JDK")]),a._v(" "),v("p",[a._v("需要根据 Linux 系统实际情况，选择 tar.gz 压缩包：")]),a._v(" "),v("ul",[v("li",[a._v("32 位计算机选择 Linux x86")]),a._v(" "),v("li",[a._v("64 位计算机选择 Linux x64")])]),a._v(" "),v("p",[a._v("（2）解压压缩包到本地")]),a._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[a._v("$ "),v("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxf jdk-8u162-linux-x64.tar.gz\n")])])]),v("p",[a._v("（3）配置系统环境变量")]),a._v(" "),v("p",[a._v("执行 "),v("code",[a._v("/etc/profile")]),a._v(" 命令，添加以下内容：")]),a._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# JDK 的根路径")]),a._v("\n"),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/opt/java/jdk1.8.0_162\n"),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLASSPATH")]),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),v("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CLASSPATH")]),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),v("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/lib:"),v("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/jre/lib\n"),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token assign-left variable"}},[v("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),v("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/bin:"),v("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/jre/bin:"),v("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v("\n")])])]),v("p",[a._v("执行 "),v("code",[a._v("source /etc/profile")]),a._v(" ，立即生效")]),a._v(" "),v("p",[a._v("（4）验证 Java 是否安装成功")]),a._v(" "),v("p",[a._v("执行 "),v("code",[a._v("java -version")]),a._v(" 命令，验证安装是否成功。")]),a._v(" "),v("h3",{attrs:{id:"redhat-发行版本使用-rpm-安装方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redhat-发行版本使用-rpm-安装方法"}},[a._v("#")]),a._v(" RedHat 发行版本使用 rpm 安装方法")]),a._v(" "),v("p",[a._v("（1）下载 JDK")]),a._v(" "),v("p",[a._v("下载 rpm 安装包")]),a._v(" "),v("p",[a._v("（2）选择一个合适的版本安装")]),a._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[a._v("$ "),v("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -ivh jdk-8u181-linux-x64.rpm\n")])])]),v("p",[a._v("安装成功后，默认安装路径在 "),v("code",[a._v("/usr/local")]),a._v(" 下：")]),a._v(" "),v("p",[a._v("（3）设置环境变量，同压缩包安装。")]),a._v(" "),v("p",[a._v("（4）检验是否安装成功，执行 "),v("code",[a._v("java -version")]),a._v(" 命令")]),a._v(" "),v("h2",{attrs:{id:"更多内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更多内容"}},[a._v("#")]),a._v(" 更多内容")]),a._v(" "),v("ul",[v("li",[v("strong",[a._v("引申")]),a._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://github.com/dunwu/OS",target:"_blank",rel:"noopener noreferrer"}},[a._v("操作系统、运维部署总结系列"),v("OutboundLink")],1)])])]),a._v(" "),v("li",[v("strong",[a._v("引用")])]),a._v(" "),v("li",[a._v("http://www.runoob.com/java/java-environment-setup.html")]),a._v(" "),v("li",[a._v("https://blog.csdn.net/deliciousion/article/details/78046007")])])])}),[],!1,null,null,null);t.default=_.exports}}]);