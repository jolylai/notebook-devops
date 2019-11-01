(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{203:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),a("h2",{attrs:{id:"登录-docker-hub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录-docker-hub","aria-hidden":"true"}},[s._v("#")]),s._v(" 登录 docker hub")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录docker hub")]),s._v("\n$ docker login -u "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REGISTRY_USER")]),s._v('"')]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REGISTRY_PASS")]),s._v('"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成镜像")]),s._v("\n$ docker build --tag jolylai/notebook "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送镜像到 docker hub")]),s._v("\n$ docker push jolylai/notebook\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node_js\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node_js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" stable\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("sudo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" required\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" docker\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("only")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" master\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("directories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node_modules\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("before_install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" openssl aes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("256"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cbc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("K $encrypted_5fcb8b10af91_key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("iv $encrypted_5fcb8b10af91_iv\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("in id_rsa.enc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("out ~/.ssh/id_rsa "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("d\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" yarn install\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" yarn run docs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("build\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" docker build "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("tag jolylai/notebook .\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("before_deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" docker login "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('u "$REGISTRY_USER" '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('p "$REGISTRY_PASS"\n'),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" script\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docker push jolylai/notebook\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" master\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("after_script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" docker images\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("after_success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" chmod 600 ~/.ssh/id_rsa\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ssh root@106.12.140.131 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o StrictHostKeyChecking=no 'docker pull jolylai/notebook && docker run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("p 80"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("80'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])])])},[],!1,null,null,null);t.default=e.exports}}]);