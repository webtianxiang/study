(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{235:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"同步组件和异步组件学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步组件和异步组件学习"}},[t._v("#")]),t._v(" 同步组件和异步组件学习")]),t._v(" "),a("h2",{attrs:{id:"vue组件有两种引入方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue组件有两种引入方式"}},[t._v("#")]),t._v(" vue组件有两种引入方式")]),t._v(" "),a("h3",{attrs:{id:"同步引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步引入"}},[t._v("#")]),t._v(" 同步引入")]),t._v(" "),a("p",[t._v("举个例子：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Demo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/demo'")]),t._v("\n")])])]),a("p",[t._v("同步引入时的生命周期：\n父组件的beforeCreate、created、beforeMount --\x3e 所有子组件的beforeCreate、created、beforeMount --\x3e 所有子组件的mounted --\x3e 父组件的mounted")]),t._v(" "),a("h3",{attrs:{id:"异步引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步引入"}},[t._v("#")]),t._v(" 异步引入")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Demo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/demo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步引入")]),t._v("\n")])])]),a("p",[t._v("异步引入时生命周期顺序：父组件的beforeCreate、created、beforeMount、mounted --\x3e 子组件的beforeCreate、created、beforeMount、mounted")])])}),[],!1,null,null,null);e.default=r.exports}}]);