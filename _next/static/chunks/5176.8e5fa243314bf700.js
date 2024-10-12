"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5176],{6384:function(e,t,s){var a=s(5893);let n=e=>{let{showPanel:t,children:s}=e;return(0,a.jsx)("div",{className:"bg-black/90 rounded-t-lg  ".concat(!t&&" rounded-b-lg","  px-2 py-3 border border-transparent  "),children:s})};t.Z=n},5176:function(e,t,s){s.r(t),s.d(t,{default:function(){return S}});var a,n,i=s(5893),l=s(7294),c=s(4509),o=s(6384),r=s(7434),d=s(2802),u=s(1085),m=s(3824),x=s(9506),h=s(9434);let p=()=>{let e=(0,c.Os)(),t=(0,l.useCallback)(async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=new u.uY({url:(0,m.I)(t?"testnet":"mainnet")}),a=await s.getAllCoins({owner:e}),n=a.data;for(;a.hasNextPage;)(a=await s.getAllCoins({owner:e,cursor:a.nextCursor})).data.length>0&&(n=n.concat(a.data));return n.reduce((e,t)=>{if(e.find(e=>e.coinType===t.coinType)){let s=e.indexOf(e.find(e=>e.coinType===t.coinType));e[s].objects.push({coinObjectId:t.coinObjectId,balance:t.balance})}else e.push({coinType:t.coinType,objects:[{coinObjectId:t.coinObjectId,balance:t.balance}]});return e},[])},[]),s=(0,l.useCallback)(async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=new u.uY({url:(0,m.I)(t?"testnet":"mainnet")}),a=await s.getCoinMetadata({coinType:e});return a&&"SUI"===a.symbol&&(a.iconUrl="/assets/images/sui-sui-logo.svg"),!a&&(a=h.find(t=>t.coinType===e))&&a.icon&&(a.iconUrl=a.icon),a},[]),a=(0,l.useCallback)(async t=>{let s=t[0].coinObjectId,a=t.filter((e,t)=>0!==t).map(e=>e.coinObjectId),n=new x.a;n.mergeCoins(s,a);let i=await e.signAndExecuteTransactionBlock({transactionBlock:n});return i.digest},[e]),n=(0,l.useCallback)(async function(t,s){let a,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{account:i}=e,l=i&&(null==i?void 0:i.address),c=t.coinObjectId,o=new x.a;if(n){let[r]=o.splitCoins(o.gas,["".concat(s)]);o.transferObjects([r],o.pure(l));let d=await e.signAndExecuteTransactionBlock({transactionBlock:o});a=d.digest}else{let[u]=o.splitCoins(c,["".concat(s)]);o.transferObjects([u],o.pure(l));let m=await e.signAndExecuteTransactionBlock({transactionBlock:o});a=m.digest}return a},[e]);return{getCoinMetadata:s,getAllCoins:t,merge:a,split:n}};var b=s(1966);let f=e=>{var t;let{object:s,isTestnet:a,onClick:n,disabled:c=!1}=e,[o,r]=(0,l.useState)(),{getCoinMetadata:d}=p();return(0,l.useEffect)(()=>{s&&d(s.coinType,a).then(r)},[s,a]),(0,i.jsx)("div",{children:(0,i.jsxs)("div",{onClick:n,className:"overflow-y-auto min-w-[480px]  gap-5 grid  grid-cols-12 group hover:bg-[#141F32] text-sm  px-4 py-2  border border-transparent cursor-pointer ",children:[(0,i.jsx)("div",{className:"col-span-7 flex ",children:(0,i.jsxs)("div",{className:"mt-auto mb-auto flex flex-row",children:[(0,i.jsx)("div",{className:"mt-auto mb-auto hidden sm:flex ",children:(0,i.jsx)("img",{className:"h-6 w-6 rounded-full",src:o&&o.iconUrl?o.iconUrl:"/assets/images/question-mark.png",alt:""})}),(0,i.jsxs)("div",{className:"mt-auto mb-auto flex flex-col pl-2.5",children:[(0,i.jsx)("h2",{className:"text-xs text-white sm:text-base mb-0 tracking-tight ",children:o&&o.symbol?o.symbol:"Unknown"}),(0,i.jsx)("p",{children:(t=s.coinType).substring(t.indexOf("::")+2)?(0,b.sC)(t.substring(t.indexOf("::")+2),14,-6):"UNKNOWN"})]})]})}),(0,i.jsx)("div",{className:"col-span-2 flex ",children:(0,i.jsx)("div",{className:"mt-auto ml-auto text-xs text-right sm:text-sm mb-auto font-bold flex flex-row",children:(0,i.jsxs)("p",{children:[s.objects.length," items"]})})}),(0,i.jsx)("div",{className:"col-span-3 flex",children:!c&&(0,i.jsxs)("div",{className:"ml-auto flex items-center gap-2.5 text-xs sm:text-sm font-bold text-secondary",children:["view items",(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"duration-300 group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2",children:(0,i.jsx)("path",{d:"M1 7.5H3.1875M15 7.5L9.75 2.25M15 7.5L9.75 12.75M15 7.5H5.8125",stroke:"currentcolor",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"round"})})]})})]})})};var g=s(794),j=s(5533),v=s(9716),y=s(9737),w=s(4855),N=s(7303),k=s(9244);let T=e=>{let{open:t,panel:s,showPanel:a,objects:n,isTestnet:c,increaseTick:u}=e,{merge:m}=p(),{updateTx:x}=(0,l.useContext)(N.y),[h,T]=(0,l.useState)(),[C,O]=(0,l.useState)([]),[S,E]=(0,l.useState)(!1),[I,Z]=(0,l.useState)(!1),A=n.reduce((e,t)=>(t.objects.length>1&&0!==Number(t.objects.reduce((e,t)=>e.plus((0,g.Z)(t.balance)),(0,g.Z)(0)))&&(t.objects=t.objects.sort(function(e,t){return(0,g.Z)(t.balance).minus((0,g.Z)(e.balance))}),e.push(t)),e),[]).sort(function(e,t){return t.objects.length-e.objects.length}),U=()=>{T(void 0),O([])},H=A.reduce((e,t)=>(t.objects.length>1&&(e+=1),e),0),M=(0,l.useCallback)(e=>{let t=Number(e.target.value);(null==C?void 0:C.includes(t))?O(C.filter(e=>e!=t)):O(C.concat([t]))},[C]),P=(0,l.useCallback)(async()=>{if(Z(void 0),C.length<2){Z("At least two items must be selected.");return}E(!0);try{let e=h.objects.filter((e,t)=>C.includes(t));if(e.length<2)return;let t=await m(e);x(t),U(),setTimeout(()=>{u()},3e3)}catch(s){console.log(s),Z("".concat(s.message))}E(!1)},[h,C,m]),L=h?h.objects.filter((e,t)=>C.includes(t)).reduce((e,t)=>e+Number(t.balance),0):0;return(0,i.jsxs)("div",{className:"py-1.5",children:[(0,i.jsx)(v.Z,{title:"Select Multiple Items to Merge",visible:void 0!==h,close:()=>U(),maxWidth:"max-w-xl",children:h&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"w-full flex flex-col ",children:[(0,i.jsxs)("div",{className:"py-2 pb-0 mb-1 text-sm truncate mx-auto flex flex-row",children:[(0,i.jsx)("span",{className:"font-bold mr-2",children:"Coin Type:"}),(0,i.jsx)(w.CopyToClipboard,{text:h.coinType,children:(0,i.jsxs)("div",{className:"  mt-auto mb-1  flex flex-row cursor-pointer text-white text-sm hover:text-white/80",children:[h.coinType.length>18?(0,b.sC)(h.coinType,18,-16):(0,i.jsx)(i.Fragment,{children:h.coinType}),(0,i.jsx)(y.Z,{size:14,className:"ml-1 mt-0.5"})]})})]}),(0,i.jsx)("div",{className:" overflow-y-auto",children:(0,i.jsxs)("table",{className:"w-full text-sm sm:text-base text-left",children:[(0,i.jsx)("thead",{className:"text-xs uppercase ",children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"col",className:"px-6 py-3",children:"#"}),(0,i.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Object ID"}),(0,i.jsx)("th",{scope:"col",className:"px-6 py-3 text-right",children:"Value"})]})}),h.objects.map((e,t)=>(0,i.jsxs)("tr",{className:"text-sm ",children:[(0,i.jsx)("td",{className:"px-6 py-1.5 pl-4 text-white",children:(0,i.jsx)("input",{type:"checkbox",className:"cursor-pointer w-4 h-4",checked:null==C?void 0:C.includes(t),value:t,onChange:M})}),(0,i.jsx)("td",{scope:"row",className:"px-6 py-1.5 text-white ",children:(0,i.jsx)(w.CopyToClipboard,{text:e.coinObjectId,children:(0,i.jsxs)("div",{className:"  mt-auto mb-1  flex flex-row cursor-pointer text-white text-sm hover:text-white/80",children:[(0,b.sC)(e.coinObjectId,10,-8),(0,i.jsx)(y.Z,{size:14,className:"ml-1 mt-0.5"})]})})}),(0,i.jsx)("td",{scope:"row",className:"px-6 py-1.5 text-white text-right",children:e.balance})]},t))]})}),(0,i.jsx)("div",{className:"mt-1 mb-2 flex",children:(0,i.jsxs)("div",{className:"py-2 mx-auto pb-0 text-sm truncate flex flex-row",children:[(0,i.jsx)("span",{className:"font-bold mr-2",children:"Output Amount:"}),(0,i.jsx)("div",{className:"  mt-auto mb-1  flex flex-row  text-white text-sm",children:L})]})}),(0,i.jsx)("hr",{className:"my-2 h-0.5 border-t-0 bg-white/10"}),(0,i.jsx)("div",{className:"col-span-2",children:(0,i.jsxs)("div",{className:"mt-4",children:[(0,i.jsx)("button",{onClick:P,disabled:S,type:"button",className:"btn mx-auto w-full rounded-md bg-white py-3 px-5 text-xs",children:S?(0,i.jsx)(j.BR,{stroke:"#000",className:"w-3 h-3 mx-auto"}):(0,i.jsxs)(i.Fragment,{children:["Merge (",C.length,")"]})}),I&&(0,i.jsx)("div",{className:"text-gray-400 mt-2 text-xs sm:text-sm font-medium text-center w-full ",children:(0,i.jsx)("div",{className:"p-2 pb-0 text-secondary",children:I})})]})})]})})}),(0,i.jsx)(o.Z,{showPanel:a,children:(0,i.jsxs)("div",{onClick:()=>t(s),className:"flex flex-row cursor-pointer",children:[(0,i.jsx)("div",{className:"mt-auto mb-auto flex flex-row",children:(0,i.jsxs)("div",{className:"mt-auto mb-auto flex pl-3.5",children:[(0,i.jsx)("h2",{className:"text-base lg:text-xl tracking-tight font-semibold text-white",children:"Merge"}),(0,i.jsx)("div",{className:"text-xs lg:text-base mt-auto mb-0.5 ml-2 lg:ml-4",children:"merge multiple coin objects into one coin"})]})}),(0,i.jsx)("div",{className:" ml-auto flex pr-2 text-white",children:(0,i.jsx)("div",{className:"m-auto mr-0",children:a?(0,i.jsx)(d.Z,{}):(0,i.jsx)(r.Z,{})})})]})}),(0,i.jsx)(k.Z,{duration:600,height:a?"auto":0,children:(0,i.jsxs)("div",{className:"bg-black/60 rounded-b-xl pb-2 overflow-y-auto",children:[(0,i.jsx)("div",{className:"flex flex-row text-sm",children:(0,i.jsxs)("div",{className:"px-6 py-3 text-secondary",children:["Available to merge (",H,")"]})}),A.map((e,t)=>(0,i.jsx)("div",{children:(0,i.jsx)(f,{object:e,isTestnet:c,onClick:()=>T(e),disabled:e.objects.length<2})},t))]})})]})},C=e=>{let{open:t,panel:s,showPanel:a,objects:n,isTestnet:c,increaseTick:u}=e,{split:m}=p(),{updateTx:x}=(0,l.useContext)(N.y),[h,T]=(0,l.useState)(),[C,O]=(0,l.useState)(),[S,E]=(0,l.useState)(!1),[I,Z]=(0,l.useState)(!1),[A,U]=(0,l.useState)(0),H=n.reduce((e,t)=>(t.objects.length>0&&0!==Number(t.objects.reduce((e,t)=>e.plus((0,g.Z)(t.balance)),(0,g.Z)(0)))&&(t.objects=t.objects.sort(function(e,t){return(0,g.Z)(t.balance).minus((0,g.Z)(e.balance))}),e.push(t)),e),[]).sort(function(e,t){return t.objects.length-e.objects.length}),M=()=>{T(void 0),O(void 0)},P=(0,l.useCallback)(e=>{let t=Number(e.target.value);C===t?O(void 0):O(t)},[C]),L=(0,l.useCallback)(e=>{if(h){let t=h.objects[C];if(t&&t.balance){let s=(0,g.Z)(t.balance).multipliedBy((0,g.Z)(e));U(Number(Number("".concat(s)).toFixed(0)))}}},[C,h]),D=(0,l.useCallback)(async()=>{if(Z(void 0),void 0===C){Z("No item selected.");return}if(A<9999){Z("Invalid amount.");return}E(!0);try{let e=h.objects[C],t=h.coinType.includes("::sui::SUI"),s=await m(e,A,t);M(),x(s),setTimeout(()=>{u()},3e3)}catch(a){console.log(a),Z("".concat(a.message))}E(!1)},[C,h,A,m]);return(0,i.jsxs)("div",{className:"py-1.5",children:[(0,i.jsx)(v.Z,{title:"Select One Item to Split",visible:void 0!==h,close:()=>M(),maxWidth:"max-w-xl",children:h&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"w-full flex",children:(0,i.jsxs)("div",{className:"py-2 mx-auto text-sm truncate flex flex-row",children:[(0,i.jsx)("span",{className:"font-bold mr-2",children:"Coin Type:"}),(0,i.jsx)(w.CopyToClipboard,{text:h.coinType,children:(0,i.jsxs)("div",{className:"  mt-auto mb-1  flex flex-row cursor-pointer text-white text-sm hover:text-white/80",children:[h.coinType.length>18?(0,b.sC)(h.coinType,18,-16):(0,i.jsx)(i.Fragment,{children:h.coinType}),(0,i.jsx)(y.Z,{size:14,className:"ml-1 mt-0.5"})]})})]})}),(0,i.jsx)("div",{className:"overflow-y-auto",children:(0,i.jsxs)("table",{className:"w-full text-sm sm:text-base text-left",children:[(0,i.jsx)("thead",{className:"text-xs uppercase ",children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"col",className:"px-6 py-3",children:"#"}),(0,i.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Object ID"}),(0,i.jsx)("th",{scope:"col",className:"px-6 py-3 text-right",children:"Value"})]})}),h.objects.map((e,t)=>(0,i.jsxs)("tr",{className:"text-sm ",children:[(0,i.jsx)("td",{className:"px-6 py-1.5 pl-4 text-white",children:(0,i.jsx)("input",{type:"checkbox",className:"cursor-pointer w-4 h-4",checked:C===t,value:t,onChange:P})}),(0,i.jsx)("td",{scope:"row",className:"px-6 py-1.5 text-white ",children:(0,i.jsx)(w.CopyToClipboard,{text:e.coinObjectId,children:(0,i.jsxs)("div",{className:"  mt-auto mb-1  flex flex-row cursor-pointer text-white text-sm hover:text-white/80",children:[(0,b.sC)(e.coinObjectId,10,-8),(0,i.jsx)(y.Z,{size:14,className:"ml-1 mt-0.5"})]})})}),(0,i.jsx)("td",{scope:"row",className:"px-6 py-1.5 text-white text-right",children:e.balance})]},t))]})}),(0,i.jsx)("div",{className:"flex mt-2",children:(0,i.jsxs)("div",{className:"py-2 mx-auto w-[75%] text-sm flex flex-row",children:[(0,i.jsx)("div",{className:"font-bold flex w-[140px] mr-2",children:(0,i.jsx)("div",{className:"mt-auto mb-auto",children:"Split Amount:"})}),(0,i.jsx)("div",{className:"w-full",children:(0,i.jsx)("input",{value:A,onChange(e){U(Number(e.target.value))},type:"number",id:"input-asset",className:"block w-full p-2  text-sm bg-[#141F32] border border-gray/30   placeholder-gray text-white focus:outline-none"})})]})}),(0,i.jsx)("div",{className:"flex mb-6",children:(0,i.jsxs)("div",{className:"w-[200px] px-2 mx-auto flex flex-row justify-between font-bold",children:[(0,i.jsx)("button",{onClick:()=>L(.1),className:"my-auto btn cursor-pointer bg-white hover:underline mx-auto rounded-md px-3 py-1 text-xs",children:"10%"}),(0,i.jsx)("button",{onClick:()=>L(.25),className:"my-auto btn cursor-pointer bg-white hover:underline mx-auto rounded-md px-3 py-1 text-xs",children:"25%"}),(0,i.jsx)("button",{onClick:()=>L(.5),className:"my-auto btn cursor-pointer bg-white hover:underline mx-auto rounded-md px-3 py-1 text-xs",children:"50%"})]})}),(0,i.jsx)("hr",{className:"my-4 h-0.5 border-t-0 bg-white/10"}),(0,i.jsx)("button",{onClick:D,disabled:S,type:"button",className:"btn mx-auto w-full mt-1 rounded-md bg-white py-3 px-5 text-xs",children:S?(0,i.jsx)(j.BR,{stroke:"#000",className:"w-3 h-3 mx-auto"}):(0,i.jsx)(i.Fragment,{children:"Split"})}),I&&(0,i.jsx)("div",{className:"text-gray-400 mt-2 text-sm font-medium text-center w-full ",children:(0,i.jsx)("div",{className:"p-2 pb-0 text-secondary",children:I})})]})}),(0,i.jsx)(o.Z,{showPanel:a,children:(0,i.jsxs)("div",{onClick:()=>t(s),className:"flex flex-row cursor-pointer",children:[(0,i.jsx)("div",{className:"mt-auto mb-auto flex flex-row",children:(0,i.jsxs)("div",{className:"mt-auto mb-auto flex pl-3.5",children:[(0,i.jsx)("h2",{className:"text-base lg:text-xl tracking-tight font-semibold text-white",children:"Split"}),(0,i.jsx)("div",{className:"text-xs lg:text-base mt-auto mb-0.5 ml-2 lg:ml-4",children:"split a coin object into multiple coins"})]})}),(0,i.jsx)("div",{className:" ml-auto flex pr-2 text-white",children:(0,i.jsx)("div",{className:"m-auto mr-0",children:a?(0,i.jsx)(d.Z,{}):(0,i.jsx)(r.Z,{})})})]})}),(0,i.jsx)(k.Z,{duration:600,height:a?"auto":0,children:(0,i.jsxs)("div",{className:"bg-black/60 rounded-b-xl pb-2 overflow-y-auto",children:[(0,i.jsx)("div",{className:"flex flex-row text-sm",children:(0,i.jsxs)("div",{className:"px-6 py-3 text-secondary",children:["Available to split (",H.length,")"]})}),H.map((e,t)=>(0,i.jsx)("div",{children:(0,i.jsx)(f,{object:e,isTestnet:c,onClick:()=>T(e)})},t))]})})]})};(a=n||(n={}))[a.NONE=0]="NONE",a[a.MERGE=1]="MERGE",a[a.SPLIT=2]="SPLIT",a[a.DEPLOY=3]="DEPLOY";let O=()=>{let{getAllCoins:e}=p(),t=(0,c.Os)(),[s,a]=(0,l.useState)(0),[o,r]=(0,l.useState)([]),{account:d,connected:u}=t,m=d&&(null==d?void 0:d.address),x=!!u&&!!d&&!!d.chains&&"sui:testnet"===d.chains[0],[h,b]=(0,l.useState)(n.NONE),f=(0,l.useCallback)(e=>{b(e!==h?e:n.NONE)},[h]),g=(0,l.useCallback)(()=>{a(s+1)},[s]);return(0,l.useEffect)(()=>{m&&e(m,x).then(r)},[x,m,s]),(0,i.jsxs)("div",{children:[(0,i.jsx)(T,{open:f,panel:n.MERGE,showPanel:h===n.MERGE,objects:o,isTestnet:x,increaseTick:g}),(0,i.jsx)(C,{open:f,panel:n.SPLIT,showPanel:h===n.SPLIT,objects:o,isTestnet:x,increaseTick:g})]})};var S=O},2802:function(e,t,s){var a=s(7294),n=s(5697),i=s.n(n);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}var c=(0,a.forwardRef)(function(e,t){var s=e.color,n=e.size,i=void 0===n?24:n,c=function(e,t){if(null==e)return{};var s,a,n=function(e,t){if(null==e)return{};var s,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)s=i[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)s=i[a],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}(e,["color","size"]);return a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===s?"currentColor":s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),a.createElement("polyline",{points:"18 15 12 9 6 15"}))});c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="ChevronUp",t.Z=c},9244:function(e,t,s){var a=s(7294),n=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>t.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(s[a[n]]=e[a[n]]);return s};function i(e){return"string"==typeof e&&"%"===e[e.length-1]&&function(e){let t=parseFloat(e);return!isNaN(t)&&isFinite(t)}(e.substring(0,e.length-1))}function l(e,t){0===t&&(null==e?void 0:e.style)&&(e.style.display="none")}let c={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function o(e,t){return[e.static,0===t&&e.staticHeightZero,t>0&&e.staticHeightSpecific,"auto"===t&&e.staticHeightAuto].filter(e=>e).join(" ")}let r=e=>{var{animateOpacity:t=!1,animationStateClasses:s={},applyInlineTransitions:r=!0,children:d,className:u="",contentClassName:m,delay:x=0,duration:h=500,easing:p="ease",height:b,onHeightAnimationEnd:f,onHeightAnimationStart:g,style:j}=e,v=n(e,["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style"]);let y=(0,a.useRef)(b),w=(0,a.useRef)(null),N=(0,a.useRef)(),k=(0,a.useRef)(),T=(0,a.useRef)(Object.assign(Object.assign({},c),s)),C="undefined"!=typeof window,O=(0,a.useRef)(!!C&&!!window.matchMedia&&window.matchMedia("(prefers-reduced-motion)").matches),S=O.current?0:x,E=O.current?0:h,I=b,Z="visible";"number"==typeof I?(I=b<0?0:b,Z="hidden"):i(I)&&(I="0%"===b?0:b,Z="hidden");let[A,U]=(0,a.useState)(I),[H,M]=(0,a.useState)(Z),[P,L]=(0,a.useState)(!1),[D,R]=(0,a.useState)(o(T.current,b));(0,a.useEffect)(()=>{l(w.current,A)},[]),(0,a.useEffect)(()=>{if(b!==y.current&&w.current){var e;let t,s;e=w.current,0===y.current&&(null==e?void 0:e.style)&&(e.style.display=""),w.current.style.overflow="hidden";let a=w.current.offsetHeight;w.current.style.overflow="";let n=E+S,c="hidden",r="auto"===y.current;"number"==typeof b?s=t=b<0?0:b:i(b)?s=t="0%"===b?0:b:(t=a,s="auto",c=void 0),r&&(s=t,t=a);let d=[T.current.animating,("auto"===y.current||b<y.current)&&T.current.animatingUp,("auto"===b||b>y.current)&&T.current.animatingDown,0===s&&T.current.animatingToHeightZero,"auto"===s&&T.current.animatingToHeightAuto,s>0&&T.current.animatingToHeightSpecific].filter(e=>e).join(" "),u=o(T.current,s);U(t),M("hidden"),L(!r),R(d),clearTimeout(k.current),clearTimeout(N.current),r?(k.current=setTimeout(()=>{U(s),M(c),L(!0),null==g||g(s)},50),N.current=setTimeout(()=>{L(!1),R(u),l(w.current,s),null==f||f(s)},n)):(null==g||g(t),k.current=setTimeout(()=>{U(s),M(c),L(!1),R(u),"auto"!==b&&l(w.current,t),null==f||f(t)},n))}return y.current=b,()=>{clearTimeout(k.current),clearTimeout(N.current)}},[b]);let F=Object.assign(Object.assign({},j),{height:A,overflow:H||(null==j?void 0:j.overflow)});P&&r&&(F.transition=`height ${E}ms ${p} ${S}ms`,(null==j?void 0:j.transition)&&(F.transition=`${j.transition}, ${F.transition}`),F.WebkitTransition=F.transition);let B={};t&&(B.transition=`opacity ${E}ms ${p} ${S}ms`,B.WebkitTransition=B.transition,0===A&&(B.opacity=0));let $=void 0!==v["aria-hidden"],_=$?v["aria-hidden"]:0===b;return a.createElement("div",Object.assign({},v,{"aria-hidden":_,className:`${D} ${u}`,style:F}),a.createElement("div",{className:m,style:B,ref:w},d))};t.Z=r},9434:function(e){e.exports=JSON.parse('[{"name":"Sui","symbol":"SUI","decimals":9,"network":"sui-testnet","icon":"/assets/images/sui-sui-logo.svg","coinType":"0x2::sui::SUI"},{"name":"Sui","symbol":"SUI","decimals":9,"network":"sui","icon":"/assets/images/sui-sui-logo.svg","coinType":"0x2::sui::SUI"},{"name":"JumpSUIt","symbol":"JumpSUIt","decimals":8,"network":"sui-testnet","icon":"/assets/images/legato-icon.png","coinType":"0x547cf6fede9391de49d71fe134a1c19824467f5826f0cc1843669f26264af5e9::mock_legato::MOCK_LEGATO"},{"name":"USDC","symbol":"USDC","decimals":6,"network":"sui-testnet","isMock":true,"icon":"/assets/images/usdc-icon.svg","coinType":"0x547cf6fede9391de49d71fe134a1c19824467f5826f0cc1843669f26264af5e9::mock_usdc::MOCK_USDC","objectId":"0x8373d87323042cb589390adda6e9fc03bc24525b78fc580d02f8d24cb2c5eef8"},{"name":"USDC","symbol":"USDC","decimals":6,"network":"sui","icon":"/assets/images/usdc-icon.svg","coinType":"0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN"},{"name":"Navi Protocol","symbol":"NAVX","decimals":9,"network":"sui","icon":"/assets/images/navx.png","coinType":"0xa99b8952d4f7d947ea77fe0ecdcc9e5fc0bcab2841d6e2a5aa00c3044e5544b5::navx::NAVX"},{"name":"Cetus","symbol":"CETUS","decimals":9,"network":"sui","icon":"/assets/images/cetus.png","coinType":"0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b::cetus::CETUS"},{"name":"Aptos Fungible Asset","symbol":"APTOS","decimals":8,"network":"aptos-testnet","icon":"/assets/images/aptos-logo.png","metadataAddress":"0xA"},{"name":"Mock USDC","symbol":"USDC","decimals":6,"network":"aptos-testnet","icon":"/assets/images/usdc-icon.svg","metadataAddress":"0x2b86e4c8ca0921f8caf693ff98603cbab1002224f3dde51a65c819ba452344b","prefix":"0x4ff2dae2ed7e9df56074c2e5f17ce407279dc308400b80dad069fa7eaa0612c5::mock_usdc_fa"},{"name":"Hilarious Coin","symbol":"HIL","decimals":8,"network":"aptos-testnet","icon":"/assets/images/lol-icon.png","metadataAddress":"0x7bafce172c3f93321f5e40bd7fee058c82d4e909e1d9a3ba9589fb2aaccd3259"}]')}}]);