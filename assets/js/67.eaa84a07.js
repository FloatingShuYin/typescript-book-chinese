(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{211:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("毫无疑问，"),e("a",{attrs:{href:"https://github.com/borisyankov/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[t._v("DefinitelyTyped"),e("OutboundLink")],1),t._v(" 是 TypeScript 最大的优势之一，社区已经记录了 90% 的顶级 JavaScript 库。")]),t._v(" "),e("p",[t._v("这意味着，你可以非常高效的使用这些库，而无需在单独的窗口打开相应文档（以确保输入的正确性）。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("安装完之后，不需要特别的配置，你就可以像使用模块一样使用它：")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#types","aria-hidden":"true"}},[this._v("#")]),this._v(" @types")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-types","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 "),s("code",[this._v("@types")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你可以通过 "),s("code",[this._v("npm")]),this._v(" 来安装使用 "),s("code",[this._v("@types")]),this._v("，如下例所示，你可以为 "),s("code",[this._v("jquery")]),this._v(" 添加声明文件：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm install @types/jquery --save-dev\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("@types")]),this._v(" 支持全局和模块类型定义。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"全局-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局-types","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局 "),s("code",[this._v("@types")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("默认情况下，TypeScript 会自动包含支持全局使用的任何定义。例如，对于 jquery，你应该能够在项目中开始全局使用 "),s("code",[this._v("$")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"模块-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块-types","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块 "),s("code",[this._v("@types")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" $ "),e("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'jquery'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("// 现在你可以此模块中任意使用$了 :)")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"控制全局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制全局","aria-hidden":"true"}},[this._v("#")]),this._v(" 控制全局")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("可以看出，对于某些团队而言，拥有允许全局泄漏的定义可能是一个问题。因此，你可以通过配置 "),s("code",[this._v("tsconfig.json")]),this._v(" 的 "),s("code",[this._v("compilerOptions.types")]),this._v(" 选项，引入有意义的类型：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token string"}},[t._v('"compilerOptions"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token string"}},[t._v('"types"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{attrs:{class:"token string"}},[t._v('"jquery"')]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("如上例所示，通过配置 "),e("code",[t._v('compilerOptions.types: [ "jquery" ]')]),t._v(" 后，只允许使用 "),e("code",[t._v("jquery")]),t._v(" 的 "),e("code",[t._v("@types")]),t._v(" 包，即使这个人安装了另一个声明文件，比如 "),e("code",[t._v("npm install @types/node")]),t._v("，它的全局变量（例如 "),e("code",[t._v("process")]),t._v("）也不会泄漏到你的代码中，直到你将它们添加到 tsconfig.json 类型选项。")])}],!1,null,null,null);s.default=n.exports}}]);