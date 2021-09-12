"use strict";(self.webpackChunkpptxgenjs_gh_pages=self.webpackChunkpptxgenjs_gh_pages||[]).push([[5347],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9019:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"deprecated",title:"Deprecated"},p=void 0,s={unversionedId:"deprecated",id:"deprecated",isDocsHomePage:!1,title:"Deprecated",description:"Version 3.0 Breaking Changes",source:"@site/docs/deprecated.md",sourceDirName:".",slug:"/deprecated",permalink:"/PptxGenJS/docs/deprecated",tags:[],version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1616114678,formattedLastUpdatedAt:"3/18/2021",frontMatter:{id:"deprecated",title:"Deprecated"},sidebar:"docs",previous:{title:"Text",permalink:"/PptxGenJS/docs/api-text"}},u=[{value:"Version 3.0 Breaking Changes",id:"version-30-breaking-changes",children:[]},{value:"Version 2.0 Breaking Changes",id:"version-20-breaking-changes",children:[{value:"All Users",id:"all-users",children:[]},{value:"Node Users",id:"node-users",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"version-30-breaking-changes"},"Version 3.0 Breaking Changes"),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gitbrent/PptxGenJS/wiki/Version-3.0-Migration-Guide"},"Version 3.0 Migration Guide")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pptx.colors")," is deprecated - use ",(0,i.kt)("inlineCode",{parentName:"li"},"pptx.SchemeColor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pptx.charts")," is deprecated - use ",(0,i.kt)("inlineCode",{parentName:"li"},"pptx.ChartType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pptx.shapes")," is deprecated - use ",(0,i.kt)("inlineCode",{parentName:"li"},"pptx.ShapeType"))),(0,i.kt)("h2",{id:"version-20-breaking-changes"},"Version 2.0 Breaking Changes"),(0,i.kt)("p",null,"Please note that version 2.0.0 enabled some much needed cleanup, but may break your previous code...\n(however, a quick search-and-replace will fix any issues)."),(0,i.kt)("p",null,"While the changes may only impact cosmetic properties, it's recommended you test your solutions thoroughly before upgrading PptxGenJS to the 2.0 version."),(0,i.kt)("h3",{id:"all-users"},"All Users"),(0,i.kt)("p",null,"The library ",(0,i.kt)("inlineCode",{parentName:"p"},"getVersion()")," method is now a property: ",(0,i.kt)("inlineCode",{parentName:"p"},"version")),(0,i.kt)("p",null,"Option names are now caseCase across all methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"font_face")," renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"fontFace")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"font_size")," renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"fontSize")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"line_dash")," renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"lineDash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"line_head")," renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"lineHead")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"line_size")," renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"lineSize")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"line_tail")," renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"lineTail"))),(0,i.kt)("p",null,"Options deprecated in early 1.0 versions (hopefully nobody still uses these):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"marginPt")," renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"margin"))),(0,i.kt)("h3",{id:"node-users"},"Node Users"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Major Change")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"require('pptxgenjs')")," no longer returns a singleton instance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pptx = new PptxGenJS()")," will create a single, unique instance"),(0,i.kt)("li",{parentName:"ul"},"Advantage: Creating ",(0,i.kt)("a",{parentName:"li",href:"#saving-multiple-presentations"},"multiple presentations")," is much easier now - see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gitbrent/PptxGenJS/issues/83"},"Issue #83")," for more).")))}d.isMDXComponent=!0}}]);