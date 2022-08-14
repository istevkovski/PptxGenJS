"use strict";(self.webpackChunkpptxgenjs_gh_pages=self.webpackChunkpptxgenjs_gh_pages||[]).push([[2772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,u=m["".concat(p,".").concat(d)]||m[d]||h[d]||o;return n?r.createElement(u,s(s({ref:t},l),{},{components:n})):r.createElement(u,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={id:"shapes-and-schemes",title:"Shapes and Schemes"},s=void 0,c={unversionedId:"shapes-and-schemes",id:"shapes-and-schemes",title:"Shapes and Schemes",description:"PowerPoint Shape Types",source:"@site/docs/shapes-and-schemes.md",sourceDirName:".",slug:"/shapes-and-schemes",permalink:"/PptxGenJS/docs/shapes-and-schemes",draft:!1,tags:[],version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1651944302,formattedLastUpdatedAt:"May 7, 2022",frontMatter:{id:"shapes-and-schemes",title:"Shapes and Schemes"},sidebar:"docs",previous:{title:"Slide Sections",permalink:"/PptxGenJS/docs/sections"},next:{title:"Speaker Notes",permalink:"/PptxGenJS/docs/speaker-notes"}},p={},i=[{value:"PowerPoint Shape Types",id:"powerpoint-shape-types",level:2},{value:"PowerPoint Scheme Colors",id:"powerpoint-scheme-colors",level:2}],l={toc:i};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"powerpoint-shape-types"},"PowerPoint Shape Types"),(0,a.kt)("p",null,"The library comes with over 180 built-in PowerPoint shapes (thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ziv-Barber/officegen"},"officegen project"),")."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use inline typescript definitions to view available shapes"),(0,a.kt)("li",{parentName:"ul"},"or see ",(0,a.kt)("inlineCode",{parentName:"li"},"ShapeType")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gitbrent/PptxGenJS/blob/master/types/index.d.ts"},"index.d.ts")," for the complete list")),(0,a.kt)("h2",{id:"powerpoint-scheme-colors"},"PowerPoint Scheme Colors"),(0,a.kt)("p",null,"Scheme color is a variable that changes its value whenever another scheme palette is selected. Using scheme colors, design consistency can be easily preserved throughout the presentation and viewers can change color theme without any text/background contrast issues."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use inline typescript definitions to view available colors"),(0,a.kt)("li",{parentName:"ul"},"or see ",(0,a.kt)("inlineCode",{parentName:"li"},"SchemeColor")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gitbrent/PptxGenJS/blob/master/types/index.d.ts"},"index.d.ts")," for the complete list")),(0,a.kt)("p",null,"To use a scheme color, set a color constant as a property value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"slide.addText(\"Scheme Color 'text1'\", { color: pptx.SchemeColor.text1 });\n")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://gitbrent.github.io/PptxGenJS/demo/#shapes"},"Shapes Demo")," for Scheme Colors demo"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Scheme Demo",src:n(9409).Z,width:"720",height:"405"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export enum SchemeColor {\n    "text1" = "tx1",\n    "text2" = "tx2",\n    "background1" = "bg1",\n    "background2" = "bg2",\n    "accent1" = "accent1",\n    "accent2" = "accent2",\n    "accent3" = "accent3",\n    "accent4" = "accent4",\n    "accent5" = "accent5",\n    "accent6" = "accent6",\n}\n')))}h.isMDXComponent=!0},9409:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/demo-scheme-181c7b8076de1e6badd759f437741022.png"}}]);