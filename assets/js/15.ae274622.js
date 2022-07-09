(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{286:function(s,t,e){"use strict";e.r(t);var n=e(13),a=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nginx反向代理配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx反向代理配置"}},[s._v("#")]),s._v(" Nginx反向代理配置")]),s._v(" "),t("p",[s._v("服务配置在非80端口，通过域名访问的话，需要配置反向代理。")]),s._v(" "),t("p",[s._v("Nginx监听80端口，接收到请求后转发到代理的URL。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("server {\n\tlisten 80;\n\tserver_name dbssx.com;\t#指定域名\n\tlocation / {\n\t\tproxy_pass http://ip:port;\n\t\tproxy_set_header Host $host:80;\n\t\tproxy_set_header X-Real-IP $remote_addr;\n\t\tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\t}\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("proxy_set_header")]),s._v(" 改变HTTP请求头")]),s._v(" "),t("li",[t("code",[s._v("Host")]),s._v(" 是请求的主机名")]),s._v(" "),t("li",[t("code",[s._v("X-Real-IP")]),s._v("是请求的真是IP")]),s._v(" "),t("li",[t("code",[s._v("X-Forwarded-For")]),s._v(" 表示请求是由谁发起的")])])])}),[],!1,null,null,null);t.default=a.exports}}]);