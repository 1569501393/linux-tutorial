(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{315:function(s,e,t){"use strict";t.r(e);var a=t(11),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"expect-shell-脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expect-shell-脚本"}},[s._v("#")]),s._v(" expect shell 脚本")]),s._v(" "),t("h2",{attrs:{id:"expect-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expect-简介"}},[s._v("#")]),s._v(" expect 简介")]),s._v(" "),t("p",[t("code",[s._v("expect")]),s._v(" 是一个自动化交互套件，主要应用于执行命令和程序时，系统以交互形式要求输入指定字符串，实现交互通信。")]),s._v(" "),t("p",[s._v("在实际工作中，我们运行命令、脚本或程序时，这些命令、脚本或程序都需要从终端输入某些继续运行的指令，而这些输入都需要人为的手工进行。而利用 "),t("code",[s._v("expect")]),s._v("，则可以根据程序的提示，模拟标准输入提供给程序，从而实现自动化交互执行。这就是 "),t("code",[s._v("expect")]),s._v(" 。")]),s._v(" "),t("p",[s._v("expect 自动交互流程：")]),s._v(" "),t("ol",[t("li",[s._v("spawn 启动指定进程")]),s._v(" "),t("li",[s._v("expect 获取指定关键字")]),s._v(" "),t("li",[s._v("send 向指定程序发送指定字符")]),s._v(" "),t("li",[s._v("执行完成退出")])]),s._v(" "),t("h2",{attrs:{id:"expect-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expect-安装"}},[s._v("#")]),s._v(" expect 安装")]),s._v(" "),t("h3",{attrs:{id:"yum-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum-安装"}},[s._v("#")]),s._v(" yum 安装")]),s._v(" "),t("p",[s._v("执行命令：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v("\n")])])]),t("h3",{attrs:{id:"手动安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动安装"}},[s._v("#")]),s._v(" 手动安装")]),s._v(" "),t("p",[s._v("expect 依赖 tcl，所以需要先安装 tcl：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://nchc.dl.sourceforge.net/project/tcl/Tcl/8.6.9/tcl8.6.9-src.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf tcl8.6.9-src.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" tcl8.6.9/unix/\n./configure "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),t("p",[s._v("再安装 expect：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://nchc.dl.sourceforge.net/project/expect/Expect/5.45.4/expect5.45.4.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf expect5.45.4.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./expect5.45.4\n./configure "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),t("h2",{attrs:{id:"expect-参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expect-参数"}},[s._v("#")]),s._v(" expect 参数")]),s._v(" "),t("p",[s._v("启用选项：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-c")]),s._v(" - 执行脚本前先执行的命令，可多次使用。")]),s._v(" "),t("li",[t("code",[s._v("-d")]),s._v(" - debug 模式，可以在运行时输出一些诊断信息，与在脚本开始处使用 "),t("code",[s._v("exp_internal 1")]),s._v(" 相似。")]),s._v(" "),t("li",[t("code",[s._v("-D")]),s._v(" - 启用交换调式器，可设一整数参数。")]),s._v(" "),t("li",[t("code",[s._v("-f")]),s._v(" - 从文件读取命令，仅用于使用 "),t("code",[s._v("#!")]),s._v(" 时。如果文件名为 "),t("code",[s._v("-")]),s._v("，则从 stdin 读取(使用 "),t("code",[s._v("./-")]),s._v(" 从文件名为-的文件读取)。")]),s._v(" "),t("li",[t("code",[s._v("-i")]),s._v(" - 交互式输入命令，使用 "),t("code",[s._v("exit")]),s._v(" 或 "),t("code",[s._v("EOF")]),s._v(" 退出输入状态。")]),s._v(" "),t("li",[t("code",[s._v("--")]),s._v(" - 标示选项结束(如果你需要传递与 "),t("code",[s._v("expect")]),s._v(" 选项相似的参数给脚本时)，可放到 "),t("code",[s._v("#!")]),s._v(" 行： "),t("code",[s._v("#!/usr/bin/expect --")]),s._v(" 。")]),s._v(" "),t("li",[t("code",[s._v("-v")]),s._v(" - 显示 "),t("code",[s._v("expect")]),s._v(" 版本信息。")])]),s._v(" "),t("h2",{attrs:{id:"expect-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expect-命令"}},[s._v("#")]),s._v(" expect 命令")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("spawn")]),s._v(" - 命令用来启动新的进程，"),t("code",[s._v("spawn")]),s._v("后的"),t("code",[s._v("send")]),s._v("和"),t("code",[s._v("expect")]),s._v("命令都是和使用"),t("code",[s._v("spawn")]),s._v("打开的进程进行交互。")]),s._v(" "),t("li",[t("code",[s._v("expect")]),s._v(" - 获取匹配信息，匹配成功则执行 "),t("code",[s._v("expect")]),s._v(" 后面的程序动作。\n"),t("ul",[t("li",[t("code",[s._v("exp_continue")]),s._v(" - 在 "),t("code",[s._v("expect")]),s._v(" 中多次匹配就需要用到。")])])]),s._v(" "),t("li",[t("code",[s._v("send")]),s._v(" - 命令接收一个字符串参数，并将该参数发送到进程。\n"),t("ul",[t("li",[t("code",[s._v("send exp_send")]),s._v(" - 用于发送指定的字符串信息。")])])]),s._v(" "),t("li",[t("code",[s._v("interact")]),s._v(" - 命令用的其实不是很多，一般情况下使用"),t("code",[s._v("spawn")]),s._v("、"),t("code",[s._v("send")]),s._v("和"),t("code",[s._v("expect")]),s._v("命令就可以很好的完成我们的任务；但在一些特殊场合下还是需要使用"),t("code",[s._v("interact")]),s._v("命令的，"),t("code",[s._v("interact")]),s._v("命令主要用于退出自动化，进入人工交互。比如我们使用"),t("code",[s._v("spawn")]),s._v("、"),t("code",[s._v("send")]),s._v("和"),t("code",[s._v("expect")]),s._v("命令完成了 ftp 登陆主机，执行下载文件任务，但是我们希望在文件下载结束以后，仍然可以停留在 ftp 命令行状态，以便手动的执行后续命令，此时使用"),t("code",[s._v("interact")]),s._v("命令就可以很好的完成这个任务。")]),s._v(" "),t("li",[t("code",[s._v("send_user")]),s._v(" - 用来打印输出 相当于 shell 中的 echo")]),s._v(" "),t("li",[t("code",[s._v("set")]),s._v(" - 定义变量。\n"),t("ul",[t("li",[t("code",[s._v("set timeout")]),s._v(" - 设置超时时间。")])])]),s._v(" "),t("li",[t("code",[s._v("puts")]),s._v(" - 输出变量。")]),s._v(" "),t("li",[t("code",[s._v("exit")]),s._v(" - 退出 expect 脚本")]),s._v(" "),t("li",[t("code",[s._v("eof")]),s._v(" - expect 执行结束，退出。")])]),s._v(" "),t("h2",{attrs:{id:"示例场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例场景"}},[s._v("#")]),s._v(" 示例场景")]),s._v(" "),t("p",[s._v("远程登录")]),s._v(" "),t("p",[s._v("（1）ssh 登录远程主机执行命令，执行方法 "),t("code",[s._v("expect 1.sh")]),s._v(" 或者 "),t("code",[s._v("source 1.sh")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/expect")]),s._v("\n\nspawn "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" saneri@192.168.56.103 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -Th\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*password"')]),s._v("\nsend "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" eof\n")])])]),t("p",[s._v("（2）ssh 远程登录主机执行命令，在 shell 脚本中执行 expect 命令,执行方法 sh 2.sh、bash 2.sh 或./2.sh 都可以执行.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('#!/bin/bash\n\npasswd=\'123456\'\n\n/usr/bin/expect <<-EOF\n\nset time 30\nspawn ssh saneri@192.168.56.103 df -Th\nexpect {\n"*yes/no" { send "yes\\r"; exp_continue }\n"*password:" { send "$passwd\\r" }\n}\nexpect eof\nEOF\n')])])]),t("p",[s._v("（3）expect 执行多条命令")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('#!/usr/bin/expect -f\n\nset timeout 10\n\nspawn sudo su - root\nexpect "*password*"\nsend "123456\\r"\nexpect "#*"\nsend "ls\\r"\nexpect "#*"\nsend "df -Th\\r"\nsend "exit\\r"\nexpect eof\n')])])]),t("p",[s._v("（4）创建 ssh key，将 id_rsa 和 id_rsa.pub 文件分发到各台主机上面。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断id_rsa密钥文件是否存在")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -f ~/.ssh/id_rsa "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n ssh-keygen -t rsa -P "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" -f ~/.ssh/id_rsa\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id_rsa has created ..."')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#分发到各个节点,这里分发到host文件中的主机中.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" line\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $line "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ip")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $line "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("passwd")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $line "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n      set timeout 10\n      spawn ssh-copy-id "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ip")]),s._v('\n      expect {\n        "yes/no" { send "yes'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('";exp_continue }\n        "password" { send "'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$passwd")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('" }\n      }\n     expect "password" { send "'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$passwd")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('" }\nEOF')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("  hosts\n")])])]),t("p",[s._v("（5）shell 调用 expect 执行多行命令.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('#!/bin/bash\nip=$1\nuser=$2\npassword=$3\n\nexpect <<EOF\n    set timeout 10\n    spawn ssh $user@$ip\n    expect {\n        "yes/no" { send "yes\\n";exp_continue }\n        "password" { send "$password\\n" }\n    }\n    expect "]#" { send "useradd hehe\\n" }\n    expect "]#" { send "touch /tmp/test.txt\\n" }\n    expect "]#" { send "exit\\n" } expect eof\n EOF\n #./ssh5.sh 192.168.1.10 root 123456\n')])])]),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/u010820857/article/details/89925274",target:"_blank",rel:"noopener noreferrer"}},[s._v("linux expect 自动交互脚本用法"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);