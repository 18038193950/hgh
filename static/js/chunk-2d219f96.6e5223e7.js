(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d219f96"],{ba12:function(n,e,t){"use strict";t.r(e);var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container"},[t("el-collapse",{model:{value:n.activeNames,callback:function(e){n.activeNames=e},expression:"activeNames"}},[t("el-collapse-item",{attrs:{title:"css",name:"1"}},[t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n._v("              "),t("code",{staticClass:"js"},[n._v("\n                滚动条的设计\n              ï 整体部分，::-webkit-scrollbar;\n              ï 两端按钮，::-webkit-scrollbar-button;\n              ï外层轨道，::-webkit-scrollbar-track; \n              ï 内层轨道，::-webkit-scrollbar-track-piece; \n              ï 滚动滑块，::-webkit-scrollbar-thumb;\n              ï 边角，::-webkit-scrollbar-corner。 \n\n              文本垂直居中对齐\n              vertical-align ：center  -25%;\n\n              边框透明\n              border-color: transparent;\n\n\n              隐藏属性\n                •\tvisibility:hidden \u2028\n              margin:auto 加绝对定位  可以保持居中\n\n              导入字体\n              @font-face {\n                    font-family: ICON;\n                    src: url('icon.eot') format('eot');\n                    src: local('☺'),\n                        url('icon.woff2') format(\"woff2\")\n                        url('icon.woff') format(\"woff\"),\n                        url('icon.ttf') format(\"typetrue\");\n              } \n\n              letter-spacing 与字符间距 \n              ‘\n              换行\n              word-wrap \n\n              文本两端对齐\n              .justify {\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n              }   \n\n                CSS实现单行、多行文本溢出显示省略号（…）\n\n                overflow: hidden;\n                text-overflow:ellipsis;\n                white-space: nowrap;\n\n                多行\n                display: -webkit-box;\n                -webkit-box-orient: vertical;\n                -webkit-line-clamp: 3;\n                overflow: hidden;\n\n                -webkit-overflow-scrolling:touch;\n              ")]),n._v("\n              ")])])],1)],1)},a=[],r={data:function(){return{activeNames:[]}}},o=r,l=t("2877"),c=Object(l["a"])(o,i,a,!1,null,"26e97822",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d219f96.6e5223e7.js.map