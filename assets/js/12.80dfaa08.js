(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{192:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"react项目部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react项目部署","aria-hidden":"true"}},[s._v("#")]),s._v(" React项目部署")]),s._v(" "),a("p",[s._v("使用docker部署react项目")]),s._v(" "),a("h2",{attrs:{id:"配置-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置 nginx")]),s._v(" "),a("p",[s._v("创建 nginx 配置文件 "),a("code",[s._v("nginx.conf")])]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# auto detects a good number of processes to run")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_processes")]),s._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Provides the configuration file context in which the directives that affect connection processing are specified.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("events")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Sets the maximum number of simultaneous connections that can be opened by a worker process.")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_connections")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Tells the worker to accept multiple connections at a time")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("multi_accept")]),s._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# what times to include")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("types")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# what is the default one")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default_type")]),s._v("  application"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("octet"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Sets the path, format, and configuration for a buffered log write")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("log_format")]),s._v(" compression "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$remote_addr - $remote_user [$time_local] '")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"$request\" $status $upstream_addr '")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"$http_referer" "$http_user_agent"\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# listen on port 80")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# save logs here")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("access"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log compression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# where the root here")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# what file to server as index")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# First attempt to serve request as file, then")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# as directory, then fall back to redirecting to index.html")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try_files")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Media: images, icons, video, audio, HTC")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("jpg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpeg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("gif"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("png"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ico"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("cur"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("gz"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("svg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("svgz"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mp4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ogg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ogv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("webm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("htc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("expires")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_header")]),s._v(" Cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Control "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"public"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Javascript and CSS files")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("css"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try_files")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("expires")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_header")]),s._v(" Cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Control "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"public"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Any route containing a file extension (e.g. /devicesfile.js)")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try_files")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br")])]),a("h2",{attrs:{id:"创建-dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-dockerfile","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建 Dockerfile")]),s._v(" "),a("div",{staticClass:"language-docker line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1.15.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("alpine\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" ./build /var/www\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" nginx.conf /etc/nginx/nginx.conf\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 80\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-g"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"daemon off;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("把打包出来的文件复制到容器内的 "),a("code",[s._v("/var/www")])]),s._v(" "),a("li",[s._v("把 nginx 的配置文件"),a("code",[s._v("nginx.conf")]),s._v("复制到容器内的 "),a("code",[s._v("/etc/nginx/nginx.conf")])])]),s._v(" "),a("h2",{attrs:{id:"创建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker build --rm -f Dockerfile -t docker-react:latest "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"创建容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建容器","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建容器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker run --rm -d -p 80:80 docker-react:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])},[],!1,null,null,null);t.default=e.exports}}]);