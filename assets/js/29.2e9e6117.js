(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{378:function(t,a,e){"use strict";e.r(a);var s=e(43),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git代码统计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git代码统计"}},[t._v("#")]),t._v(" git代码统计")]),t._v(" "),e("p",[t._v("查看git上个人代码量")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('git log --author="张青松" --pretty=tformat: --numstat | awk \'{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\\n", add, subs, loc }\' -\n')])])]),e("p",[t._v("统计每一个人的代码量")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('git log --format=\'%aN\' | sort -u | while read name; do echo -en "$name\\t"; git log --author="$name" --pretty=tformat: --numstat | awk \'{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\\n", add, subs, loc }\' -; done\n')])])]),e("p",[t._v("查看仓库提交者排名前5")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git log --pretty='%aN' | sort | uniq -c | sort -k1 -n -r | head -n 5\n")])])]),e("p",[t._v("贡献值统计")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git log --pretty='%aN' | sort -u | wc -l\n")])])]),e("p",[t._v("提交数统计")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git log --oneline | wc -l\n")])])]),e("p",[t._v("添加或修改的代码行数：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git log --stat|perl -ne 'END { print $c } $c += $1 if /(\\d+) insertions/'\n")])])]),e("p",[t._v("参考地址:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000008542123",target:"_blank",rel:"noopener noreferrer"}},[t._v("git代码统计"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);