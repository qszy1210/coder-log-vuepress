(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{403:function(t,r,a){"use strict";a.r(r);var e=a(43),n=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"js-中几个基础函数的研究"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-中几个基础函数的研究"}},[t._v("#")]),t._v(" js 中几个基础函数的研究")]),t._v(" "),a("p",[t._v("主要包括 Function  Array Date String Regex")]),t._v(" "),a("h2",{attrs:{id:"prototype-和-constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prototype-和-constructor"}},[t._v("#")]),t._v(" prototype 和 constructor")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//Function的构造函数仍然是Function\nFunction.prototype === Function.constructor.prototype; //true\n//上边等式成立, 是因为\nFunction.constructor === Function ;//true\n\nArray.constructor === Function;//true\n//Array的就不会成立, typeof Array.prototype 为对象\nArray.prototype === Array.constructor.prototype;\n\n")])])]),a("h2",{attrs:{id:"tostring-和-valueof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tostring-和-valueof"}},[t._v("#")]),t._v(" toString 和 valueOf")]),t._v(" "),a("h3",{attrs:{id:"比较-转换为数字进行比较-除了-date-函数外-其他的有限采用-valueof-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较-转换为数字进行比较-除了-date-函数外-其他的有限采用-valueof-方法"}},[t._v("#")]),t._v(" == 比较, 转换为数字进行比较, 除了 Date 函数外, 其他的有限采用 valueOf 方法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//比如\nnew Date(1561511231864) == 1561511231864 ;// you get false\nnew Date(1561511231864).valueOf() == 1561511231864//you get true\n\n//如果复写Object 的 toString 和 valueOf, 就会发现首先采用 valueOf 进行比较\n//如果valueOf返回的是复杂类型, 那么就采用 toString 进行比较\n[] == "" ;//true\n[] == ![]; //true\n\n')])])]),a("p",[t._v("Date 会首先调用 toString 方法, (toString 和 valueOf 都返回基本类型)\n其他类型, Object, Array, RegExp 都会首先调用 valueOf\nArray的valueOf 默认返回对象(本身), 所以实际走的 toString\nObject的valueOf 默认返回对象类型, 即本身, 所以实际走的 toString\nRegExp的valueOf 默认返回对象(正则), 所以实际走的 toString")]),t._v(" "),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")])])}),[],!1,null,null,null);r.default=n.exports}}]);