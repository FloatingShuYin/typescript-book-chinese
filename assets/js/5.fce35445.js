(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{223:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),n("p",[t._v("下面是简化的代码片段，用于演示如何工作：")]),t._v(" "),t._m(12),t._m(13),t._v(" "),n("p",[t._v("如下函数会打印 AST 节点详细信息：")]),t._v(" "),t._m(14),n("p",[t._v("我们进一步讨论解析器时会看到该函数的使用示例。")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),n("p",[t._v("这是个"),n("router-link",{attrs:{to:"./../typings/enums.html#常量枚举"}},[t._v("常量枚举")]),t._v("，方便"),n("em",[t._v("内联")]),t._v("（例如："),n("code",[t._v("ts.SyntaxKind.EndOfFileToken")]),t._v(" 会变为 "),n("code",[t._v("1")]),t._v("），这样在使用 AST 时就不会有处理引用的额外开销。但编译时需要使用 --preserveConstEnums 编译标志，以便枚举"),n("em",[t._v("在运行时仍可用")]),t._v("。JavaScript 中你也可以根据需要使用 "),n("code",[t._v("ts.SyntaxKind.EndOfFileToken")]),t._v("。另外，可以用以下函数，将枚举成员转化为可读的字符串：")],1),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),n("p",[t._v("展示这些 API 前，你需要理解以下内容：")]),t._v(" "),t._m(21),t._v(" "),n("p",[t._v("通常：")]),t._v(" "),t._m(22),t._v(" "),n("p",[t._v("对于文件中的前导（leading）和结束（ending）注释：")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),n("p",[t._v("注释在多数基本使用中，都是让人关注的杂项。节点的注释可以通过以下函数获取：")]),t._v(" "),t._m(25),t._v(" "),n("p",[t._v("假设下面是某个源文件的一部分：")]),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._v(" "),n("p",[t._v('节点有所谓的 "token start" 和 "full start" 位置。')]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"抽象语法树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#抽象语法树","aria-hidden":"true"}},[this._v("#")]),this._v(" 抽象语法树")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"node-节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-节点","aria-hidden":"true"}},[this._v("#")]),this._v(" Node 节点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("节点是抽象语法树（AST） 的基本构造块。语法上，通常 "),s("code",[this._v("Node")]),this._v(" 表示非末端（non-terminals）节点。但是，有些末端节点，如：标识符和文字也会保留在树中。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("AST 节点文档由两个关键部分构成。一是节点的 "),s("code",[this._v("SyntaxKind")]),this._v(" 枚举，用于标识 AST 中的类型。二是其接口，即实例化 AST 时节点提供的 API。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这里是 "),s("code",[this._v("interface Node")]),this._v(" 的一些关键成员：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("TextRange")]),this._v(" 标识该节点在源文件中的起止位置。")]),this._v(" "),s("li",[s("code",[this._v("parent?: Node")]),this._v(" 当前节点（在 AST 中）的父节点")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Node")]),this._v(" 还有一些其他的成员，标志（flags）和修饰符（modifiers）等。你可以在源码中搜索 "),s("code",[this._v("interface Node")]),this._v(" 来查看，而上面提到对节点的遍历是非常重要的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"sourcefile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sourcefile","aria-hidden":"true"}},[this._v("#")]),this._v(" SourceFile")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("SyntaxKind.SourceFile")])]),this._v(" "),s("li",[s("code",[this._v("interface SourceFile")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("每个 "),s("code",[this._v("SourceFile")]),this._v(" 都是一棵 AST 的顶级节点，它们包含在 "),s("code",[this._v("Program")]),this._v(" 中。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"ast-技巧：访问子节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ast-技巧：访问子节点","aria-hidden":"true"}},[this._v("#")]),this._v(" AST 技巧：访问子节点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("有个工具函数 "),s("code",[this._v("ts.forEachChild")]),this._v("，可以用来访问 AST 任一节点的所有子节点。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" forEachChild"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token constant"}},[t._v("T")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Node"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cbNode"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Node"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("T")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cbNodeArray"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nodes"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Node"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("T")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("node"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kind"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" SyntaxKind"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BinaryExpression"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("visitNode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cbNode"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("BinaryExpression"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("node"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v("\n                "),n("span",{attrs:{class:"token function"}},[t._v("visitNode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cbNode"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("BinaryExpression"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("node"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("operatorToken"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v("\n                "),n("span",{attrs:{class:"token function"}},[t._v("visitNode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cbNode"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("BinaryExpression"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("node"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" SyntaxKind"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IfStatement"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("visitNode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cbNode"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("IfStatement"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("node"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expression"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v("\n                "),n("span",{attrs:{class:"token function"}},[t._v("visitNode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cbNode"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("IfStatement"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("node"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("thenStatement"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v("\n                "),n("span",{attrs:{class:"token function"}},[t._v("visitNode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cbNode"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("IfStatement"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("node"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elseStatement"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// .... 更多")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("该函数主要检查 "),n("code",[t._v("node.kind")]),t._v(" 并据此判断 node 的接口，然后在其子节点上调用 "),n("code",[t._v("cbNode")]),t._v("。但是，要注意该函数不会为"),n("em",[t._v("所有")]),t._v("子节点调用 "),n("code",[t._v("visitNode")]),t._v("（例如：SyntaxKind.SemicolonToken）。想获得某 AST 节点的"),n("em",[t._v("所有")]),t._v("子节点，只要调用该节点的成员函数 "),n("code",[t._v(".getChildren")]),t._v("。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("printAllChildren")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ts"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Node"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" depth "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token builtin"}},[t._v("console")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Array")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("depth "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("join")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'----'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ts"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("syntaxKindToName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kind"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" node"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pos"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" node"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("end"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  depth"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  node"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getChildren")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("forEach")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("printAllChildren")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" depth"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"ast-技巧：syntaxkind-枚举"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ast-技巧：syntaxkind-枚举","aria-hidden":"true"}},[this._v("#")]),this._v(" AST 技巧：SyntaxKind 枚举")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("SyntaxKind")]),this._v(" 被定义为一个常量枚举，如下所示：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" SyntaxKind "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Unknown"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    EndOfFileToken"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    SingleLineCommentTrivia"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// ... 更多")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("syntaxKindToName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kind"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ts"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SyntaxKind"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token builtin"}},[t._v("any")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("ts"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SyntaxKind"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kind"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"ast-杂项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ast-杂项","aria-hidden":"true"}},[this._v("#")]),this._v(" AST 杂项")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("杂项（Trivia）是指源文本中对正常理解代码不太重要的部分，例如：空白，注释，冲突标记。（为了保持轻量）杂项"),s("em",[this._v("不会存储")]),this._v("在 AST 中。但是可以"),s("em",[this._v("视需要")]),this._v("使用一些 "),s("code",[this._v("ts.*")]),this._v(" API 来获取。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"杂项的所有权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#杂项的所有权","aria-hidden":"true"}},[this._v("#")]),this._v(" 杂项的所有权")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("token 拥有它后面 "),s("em",[this._v("同一行")]),this._v(" 到下一个 token 之前的所有杂项")]),this._v(" "),s("li",[this._v("该行之后的注释都与下个的 token 相关")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("源文件中的第一个 token 拥有所有开始的杂项")]),this._v(" "),s("li",[this._v("而文件最后的一些列杂项则附加到文件结束符上，该 token 长度为 0")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"杂项-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#杂项-api","aria-hidden":"true"}},[this._v("#")]),this._v(" 杂项 API")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("函数")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",[t._v("ts.getLeadingCommentRanges")])]),t._v(" "),n("td",[t._v("给定源文本及其位置，返回给定位置后第一个换行符到 token 本身之间的注释范围（可能需要结合 "),n("code",[t._v("ts.Node.getFullStart")]),t._v(" 使用）。")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("ts.getTrailingCommentRanges")])]),t._v(" "),n("td",[t._v("给定源文本及其位置，返回给定位置后第一个换行符之前的注释范围（可能需要结合 "),n("code",[t._v("ts.Node.getEnd")]),t._v(" 使用）。")])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("debugger")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{attrs:{class:"token comment"}},[t._v("/*hello*/")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("//bye")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("/*hi*/")]),t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("对 "),n("code",[t._v("function")]),t._v(" 而言，"),n("code",[t._v("getLeadingCommentRanges")]),t._v(" 仅返回最后的两个注释 "),n("code",[t._v("//bye")]),t._v(" 和 "),n("code",[t._v("/*hi*/")]),t._v("。\n另外，而在 "),n("code",[t._v("debugger")]),t._v(" 语句结束位置调用 "),n("code",[t._v("getTrailingCommentRanges")]),t._v(" 会得到注释 "),n("code",[t._v("/*hello*/")]),t._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"token-start-和-full-start-位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token-start-和-full-start-位置","aria-hidden":"true"}},[this._v("#")]),this._v(" Token Start 和 Full Start 位置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Token Start：比较自然的版本，即文件中一个 token 的文本开始的位置。")]),this._v(" "),s("li",[this._v("Full Start：是指扫描器从上一个重要 token 开始扫描的位置。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("AST 节点有 "),s("code",[this._v("getStart")]),this._v(" 和 "),s("code",[this._v("getFullStart")]),this._v(" API 用于获取以上两种位置，还是这个例子：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("debugger")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{attrs:{class:"token comment"}},[t._v("/*hello*/")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("//bye")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("/*hi*/")]),t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("对 "),n("code",[t._v("function")]),t._v(" 而言，token start 即 "),n("code",[t._v("function")]),t._v(" 的位置，而 "),n("em",[t._v("full")]),t._v(" start 是 "),n("code",[t._v("/*hello*/")]),t._v(" 的位置。要注意，full start 甚至会包含前一节点拥有的杂项。")])}],!1,null,null,null);s.default=e.exports}}]);