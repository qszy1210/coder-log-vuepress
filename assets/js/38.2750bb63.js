(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{387:function(t,a,e){"use strict";e.r(a);var s=e(43),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"一个有趣的js隐式转换的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个有趣的js隐式转换的问题"}},[t._v("#")]),t._v(" 一个有趣的js隐式转换的问题")]),t._v(" "),e("p",[t._v("在chrome的控制台中打印一下表达式")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[] + {} //结果为 [object object]\n")])])]),e("p",[t._v("然后调整顺序打印")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{} + [] //结果为 0\n")])])]),e("p",[t._v("然后将两个表达式组合一下")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{} + [] === [] + {} //true\n")])])]),e("p",[t._v("wtf???")]),t._v(" "),e("p",[t._v("原理解释如下:\n一般的类型转换的时候, 面对 + , 首先调用 valueOf^[1]进行转换, 如果转换的结果不是\n基本类型, 那么采用 toString() 方法进行转换, 所以")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[]+{} //结果Wie [object + object]\n")])])]),e("p",[t._v("但是 {} 在js或者很多语言中是代码块的区别标志, 所以在首位的话, 会被认为是 blank block 而\n"),e("strong",[t._v("忽略")]),t._v(', 所以 +[], 即 +"", 最终的结果会是 0')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{}+[]// 0\n")])])]),e("p",[t._v("而最终的")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{}+[] === [] + {}//true 是因为 chrome 默认在这种判断的外边增加了 括号, 所以两个字符\n//"[object object]" === "[object object]" 自然就是 true 了.\n')])])]),e("p",[t._v("[1] Date除外")])])}),[],!1,null,null,null);a.default=r.exports}}]);