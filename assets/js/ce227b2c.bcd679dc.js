"use strict";(self.webpackChunkpptxgenjs_gh_pages=self.webpackChunkpptxgenjs_gh_pages||[]).push([[6370],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),k=o(a),c=r,N=k["".concat(p,".").concat(c)]||k[c]||m[c]||l;return a?n.createElement(N,i(i({ref:t},s),{},{components:a})):n.createElement(N,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9482:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={id:"masters",title:"Masters and Placeholders"},i=void 0,d={unversionedId:"masters",id:"masters",title:"Masters and Placeholders",description:"Slide Masters",source:"@site/docs/masters.md",sourceDirName:".",slug:"/masters",permalink:"/PptxGenJS/docs/masters",draft:!1,tags:[],version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1651944302,formattedLastUpdatedAt:"May 7, 2022",frontMatter:{id:"masters",title:"Masters and Placeholders"},sidebar:"docs",previous:{title:"HTML-to-PowerPoint",permalink:"/PptxGenJS/docs/html-to-powerpoint"},next:{title:"Slide Sections",permalink:"/PptxGenJS/docs/sections"}},p={},o=[{value:"Slide Masters",id:"slide-masters",level:2},{value:"Properties",id:"properties",level:2},{value:"Slide Master Props (<code>SlideMasterProps</code>)",id:"slide-master-props-slidemasterprops",level:3},{value:"Background Props (<code>BackgroundProps</code>)",id:"background-props-backgroundprops",level:3},{value:"SlideNumber Props (<code>SlideNumberProps</code>)",id:"slidenumber-props-slidenumberprops",level:3},{value:"NOTES",id:"notes",level:3},{value:"Examples",id:"examples",level:2},{value:"Slide Master Example",id:"slide-master-example",level:3},{value:"Slide Master Example Output",id:"slide-master-example-output",level:3},{value:"Placeholders",id:"placeholders",level:2},{value:"Placeholder Types",id:"placeholder-types",level:3},{value:"Placeholder Example",id:"placeholder-example",level:3},{value:"Placeholder Example Output",id:"placeholder-example-output",level:3},{value:"More Examples and Demos",id:"more-examples-and-demos",level:2}],s={toc:o};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"slide-masters"},"Slide Masters"),(0,r.kt)("p",null,"Generating sample slides like those shown in the Examples section are great for demonstrating library features,\nbut the reality is most of us will be required to produce presentations that have a certain design or\ncorporate branding."),(0,r.kt)("p",null,"PptxGenJS allows you to define Slide Master Layouts via objects that can then be used to provide branding\nfunctionality. This enables you to easily create a Master Slide using code."),(0,r.kt)("p",null,"Slide Masters are created by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"defineSlideMaster()")," method along with an options object\n(same style used in Slides). Once defined, you can pass the Master title to ",(0,r.kt)("inlineCode",{parentName:"p"},"addSlide()")," and that Slide will\nuse the Layout previously defined. See the demo under /examples for several working examples."),(0,r.kt)("p",null,"The defined Masters become first-class Layouts in the exported PowerPoint presentation and can be changed\nvia View > Slide Master and will affect the Slides created using that layout."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"slide-master-props-slidemasterprops"},"Slide Master Props (",(0,r.kt)("inlineCode",{parentName:"h3"},"SlideMasterProps"),")"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Reqd?"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Layout title/name"),(0,r.kt)("td",{parentName:"tr",align:null},"unique name for this Master")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"background")),(0,r.kt)("td",{parentName:"tr",align:"left"},"BackgroundProps"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"background props"),(0,r.kt)("td",{parentName:"tr",align:null},"(see ",(0,r.kt)("a",{parentName:"td",href:"#background-props-backgroundprops"},"Background Props"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"margin")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Slide margins"),(0,r.kt)("td",{parentName:"tr",align:null},"(inches) 0.0 through Slide.width")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"margin")),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Slide margins"),(0,r.kt)("td",{parentName:"tr",align:null},"(inches) array of numbers in TRBL order. Ex: ",(0,r.kt)("inlineCode",{parentName:"td"},"[0.5, 0.75, 0.5, 0.75]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"objects")),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Objects for Slide"),(0,r.kt)("td",{parentName:"tr",align:null},"object with type and options.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"slideNumber")),(0,r.kt)("td",{parentName:"tr",align:"left"},"SlideNumberProps"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Slide numbers"),(0,r.kt)("td",{parentName:"tr",align:null},"(see ",(0,r.kt)("a",{parentName:"td",href:"#slidenumber-props-slidenumberprops"},"SlideNumber Props"),")")))),(0,r.kt)("h3",{id:"background-props-backgroundprops"},"Background Props (",(0,r.kt)("inlineCode",{parentName:"h3"},"BackgroundProps"),")"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"color")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"000000")),(0,r.kt)("td",{parentName:"tr",align:"left"},"color"),(0,r.kt)("td",{parentName:"tr",align:"left"},"hex color code or ",(0,r.kt)("a",{parentName:"td",href:"/PptxGenJS/docs/shapes-and-schemes"},"scheme color constant"),". Ex: ",(0,r.kt)("inlineCode",{parentName:"td"},"{line:'0088CC'}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"transparency")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"transparency"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Percentage: 0-100")))),(0,r.kt)("h3",{id:"slidenumber-props-slidenumberprops"},"SlideNumber Props (",(0,r.kt)("inlineCode",{parentName:"h3"},"SlideNumberProps"),")"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"horizontal location (inches)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0-n OR 'n%'. (Ex: ",(0,r.kt)("inlineCode",{parentName:"td"},"{x:'50%'}")," will place object in the middle of the Slide)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"vertical location (inches)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0-n OR 'n%'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"w")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"width (inches)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0-n OR 'n%'. (Ex: ",(0,r.kt)("inlineCode",{parentName:"td"},"{w:'50%'}")," will make object 50% width of the Slide)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"h")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"height (inches)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0-n OR 'n%'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"align")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"left")),(0,r.kt)("td",{parentName:"tr",align:"left"},"alignment"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"left")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"center")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"right"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"color")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"000000")),(0,r.kt)("td",{parentName:"tr",align:"left"},"color"),(0,r.kt)("td",{parentName:"tr",align:"left"},"hex color code or ",(0,r.kt)("a",{parentName:"td",href:"/PptxGenJS/docs/shapes-and-schemes"},"scheme color constant"),". Ex: ",(0,r.kt)("inlineCode",{parentName:"td"},"{line:'0088CC'}"))))),(0,r.kt)("h3",{id:"notes"},"NOTES"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Slide Number: more props are available that shown above - ",(0,r.kt)("inlineCode",{parentName:"li"},"SlideNumberProps")," inherits from ",(0,r.kt)("a",{parentName:"li",href:"/PptxGenJS/docs/api-text"},"TextProps")),(0,r.kt)("li",{parentName:"ul"},"Pre-encode your images (base64) and add the string as the optional data key/val (see ",(0,r.kt)("inlineCode",{parentName:"li"},"bkgd")," above)")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"slide-master-example"},"Slide Master Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let pptx = new PptxGenJS();\npptx.layout = "LAYOUT_WIDE";\n\npptx.defineSlideMaster({\n title: "MASTER_SLIDE",\n background: { color: "FFFFFF" },\n objects: [\n  { line: { x: 3.5, y: 1.0, w: 6.0, line: { color: "0088CC", width: 5 } } },\n  { rect: { x: 0.0, y: 5.3, w: "100%", h: 0.75, fill: { color: "F1F1F1" } } },\n  { text: { text: "Status Report", options: { x: 3.0, y: 5.3, w: 5.5, h: 0.75 } } },\n  { image: { x: 11.3, y: 6.4, w: 1.67, h: 0.75, path: "images/logo.png" } },\n ],\n slideNumber: { x: 0.3, y: "90%" },\n});\n\nlet slide = pptx.addSlide({ masterName: "MASTER_SLIDE" });\nslide.addText("How To Create PowerPoint Presentations with JavaScript", { x: 0.5, y: 0.7, fontSize: 18 });\n\npptx.writeFile();\n')),(0,r.kt)("h3",{id:"slide-master-example-output"},"Slide Master Example Output"),(0,r.kt)("p",null,"Using the 'MASTER_SLIDE' defined above to produce a Slide:\n",(0,r.kt)("img",{alt:"Master Slide Demo Presentation",src:a(5217).Z,width:"1024",height:"606"})),(0,r.kt)("h2",{id:"placeholders"},"Placeholders"),(0,r.kt)("p",null,"Placeholders are supported in PptxGenJS."),(0,r.kt)("p",null,"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"placeholder")," object to a Master Slide using a unique name, then reference that placeholder\nname when adding text or other objects."),(0,r.kt)("h3",{id:"placeholder-types"},"Placeholder Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:"left"},"slide title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"body")),(0,r.kt)("td",{parentName:"tr",align:"left"},"body area")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"image")),(0,r.kt)("td",{parentName:"tr",align:"left"},"image")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"chart")),(0,r.kt)("td",{parentName:"tr",align:"left"},"chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"table")),(0,r.kt)("td",{parentName:"tr",align:"left"},"table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"media")),(0,r.kt)("td",{parentName:"tr",align:"left"},"audio/video")))),(0,r.kt)("h3",{id:"placeholder-example"},"Placeholder Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let pptx = new PptxGenJS();\npptx.layout = "LAYOUT_WIDE";\n\npptx.defineSlideMaster({\n title: "PLACEHOLDER_SLIDE",\n background: { color: "FFFFFF" },\n objects: [\n  { rect: { x: 0, y: 0, w: "100%", h: 0.75, fill: { color: "F1F1F1" } } },\n  { text: { text: "Status Report", options: { x: 0, y: 0, w: 6, h: 0.75 } } },\n  {\n   placeholder: {\n    options: { name: "body", type: "body", x: 0.6, y: 1.5, w: 12, h: 5.25 },\n    text: "(custom placeholder text!)",\n   },\n  },\n ],\n slideNumber: { x: 0.3, y: "95%" },\n});\n\nlet slide = pptx.addSlide({ masterName: "PLACEHOLDER_SLIDE" });\n\n// Add text, charts, etc. to any placeholder using its `name`\nslide.addText("Body Placeholder here!", { placeholder: "body" });\n\npptx.writeFile();\n')),(0,r.kt)("h3",{id:"placeholder-example-output"},"Placeholder Example Output"),(0,r.kt)("p",null,"Using the 'PLACEHOLDER_SLIDE' defined above to produce a Slide:\n",(0,r.kt)("img",{alt:"Placeholder Demo Presentation",src:a(2706).Z,width:"994",height:"576"})),(0,r.kt)("h2",{id:"more-examples-and-demos"},"More Examples and Demos"),(0,r.kt)("p",null,"There are several Master Slides defined in the Demo: ",(0,r.kt)("inlineCode",{parentName:"p"},"demos/browser/index.html")," including examples using placeholders.\n",(0,r.kt)("img",{alt:"PptxGenJS Master Slide Demo",src:a(5079).Z,width:"2712",height:"1586"})))}m.isMDXComponent=!0},5079:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ex-master-slide-demo-1971d25b1bd3ecf6769148aee5a65c15.png"},5217:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ex-master-slide-output-13dd09a91096b04349c74c7b99ff7362.png"},2706:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ex-master-slide-placeholder-output-733284de799696fca3273da8640eb109.png"}}]);