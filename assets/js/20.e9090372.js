(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{369:function(t,e,r){"use strict";r.r(e);var n=r(43),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"android-crash-with-rn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#android-crash-with-rn"}},[t._v("#")]),t._v(" android crash with rn")]),t._v(" "),r("p",[t._v("今天同事遇到一个问题, 在日期选择空间中 如果选择到 2038年以上的话, 点击保存的时候, 会突然崩溃.\n既然是选择到了 2038 年, 所以自然就想到了 2038 年问题.")]),t._v(" "),r("p",[t._v("一搜索一大堆的 2038年问题, 大家说得头头是道, 比如 "),r("a",{attrs:{href:"https://blog.csdn.net/linyt/article/details/52728910",target:"_blank",rel:"noopener noreferrer"}},[t._v("聊聊Linux2038年问题"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("但是这些问题都是集中在 16 位操作系统上的, 对于部分的手机可能也会有, 但是对于我们的安卓机器来说应该不大可能.\n虽然我们认为是这个问题.")]),t._v(" "),r("p",[t._v("但是前边我说道 "),r("em",[t._v("点击保存的时候, 会突然崩溃")]),t._v(", 就是在有了额外操作的时候才会闪退.")]),t._v(" "),r("p",[t._v("所以, 我们经过 "),r("em",[t._v("不断的二分代码注释法")]),t._v("后发现了 toLocaleDateString 的问题, 正好这个问题也只是在 android 机器上出现\n于是万能的 "),r("a",{attrs:{href:"https://stackoverflow.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("SO"),r("OutboundLink")],1),t._v(" 帮助了我. "),r("a",{attrs:{href:"https://github.com/expo/expo/issues/847",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android client crashes when using toLocaleDateString()"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("这个是一个固有bug, 但是只有在 2038年后才会有问题, 所以这个方法应该也是因为16位遗留问题没有进行处理吧.")]),t._v(" "),r("p",[t._v("参考链接:\nhttps://github.com/expo/expo/issues/847")])])}),[],!1,null,null,null);e.default=o.exports}}]);