(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{188:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github","aria-hidden":"true"}},[s._v("#")]),s._v(" Github")]),s._v(" "),t("h2",{attrs:{id:"提交代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交代码","aria-hidden":"true"}},[s._v("#")]),s._v(" 提交代码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"# NoteBook"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" README.md\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" README.md\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first commit"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://github.com/jolylai/notebook.git\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"将项目托送到远程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将项目托送到远程","aria-hidden":"true"}},[s._v("#")]),s._v(" 将项目托送到远程")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://github.com/jolylai/notebook.git\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"将项目推送到远程-gh-pages-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将项目推送到远程-gh-pages-分支","aria-hidden":"true"}},[s._v("#")]),s._v(" 将项目推送到远程 gh-pages 分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" subtree push --prefix dist origin gh-pages\n// dist 为项目的文件路径\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" subtree push --prefix docs/.vuepress/dist origin gh-pages\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"修改远程地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改远程地址","aria-hidden":"true"}},[s._v("#")]),s._v(" 修改远程地址")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("new url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"ssh-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh-key","aria-hidden":"true"}},[s._v("#")]),s._v(" SSH Key")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成 key")]),s._v("\nssh-keygen -t rsa -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your.email@example.com"')]),s._v(" -b 4096\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 key 复制到黏贴板")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Git Bash on Windows / Windows PowerShell")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_rsa.pub "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" clip\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# macOS")]),s._v("\npbcopy "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ~/.ssh/id_rsa.pub\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Linux")]),s._v("\nxclip -sel clip "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ~/.ssh/id_rsa.pub\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Windows")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("type")]),s._v(" %userprofile%\\.ssh\\id_rsa.pub "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" clip\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])])])},[],!1,null,null,null);a.default=e.exports}}]);