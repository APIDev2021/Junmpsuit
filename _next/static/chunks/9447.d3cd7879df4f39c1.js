"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9447],{9447:function(e,s,t){t.r(s);var l=t(5893),a=t(7294),c=t(5972),i=t(6187),n=t(9716),x=t(6524),d=t(3213),r=t(7142),o=t(2249),m=t(5050),h=t(794);let p=e=>{let{showWallet:s,showPosition:t}=e,p=(0,i.Os)(),{getBalanceAPT:j,getBalanceLP:N}=(0,r.Z)(),u=(0,o.Z)(),{account:g,network:f}=p,w=g&&g.address,v=!f||"mainnet"===f.name,[b,y]=(0,a.useReducer)((e,s)=>({...e,...s}),{apt:0,lvApt:0,marketLp:0,positions:[]}),{apt:k,lvApt:_,marketLp:L,positions:A}=b;return(0,d.Y)(()=>{w?(j(w,v).then(e=>{y({apt:e})}),N(w,v).then(e=>{y({lvApt:e})}),u.getBalanceLP(w,v).then(e=>{y({marketLp:e})})):y({lvApt:0,apt:0,marketLp:0})},3e3),(0,a.useEffect)(()=>{w&&t&&0===A.length&&u.getBetPositions(w,v).then(e=>{y({positions:e})})},[w,t,v,A]),(0,l.jsxs)(l.Fragment,{children:[x.sq&&(0,l.jsx)(n.Z,{visible:!!f&&"mainnet"!==f.name,close(){},title:"Wrong Network",maxWidth:"max-w-md",children:(0,l.jsxs)("div",{className:"p-2 px-0",children:[(0,l.jsx)("p",{children:"JumpSUIt only operates on Aptos Mainnet. Please switch to the Mainnet to continue using our services"}),(0,l.jsx)("div",{className:"px-2 pt-3",children:(0,l.jsx)("li",{className:"text-sm text-secondary font-semibold",children:"Check your wallet settings and switch the network"})})]})}),(0,l.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-5",children:(0,l.jsxs)("div",{className:"col-span-4",children:[(0,l.jsx)("div",{className:"dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent rounded-t-xl py-2 px-2 sm:px-5 flex flex-row mt-2 sm:mt-6",children:(0,l.jsxs)("div",{className:"mt-auto mb-auto flex flex-row w-full",children:[(0,l.jsx)("div",{className:"mt-auto mb-auto flex pl-2",children:"My wallet"}),(0,l.jsxs)("div",{className:"ml-auto text-white flex pr-2",children:[k.toLocaleString()," APT"]})]})}),(0,l.jsxs)("div",{className:"bg-black/60 rounded-b-xl mb-3.5 pb-2 overflow-y-auto",children:[t&&(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("table",{className:"w-full text-sm sm:text-base text-left",children:[(0,l.jsx)("thead",{className:"text-xs text-secondary",children:(0,l.jsxs)("tr",{children:[(0,l.jsxs)("th",{scope:"col",className:"px-6 py-3",children:["Bet positions (",A.length,")"]}),(0,l.jsx)("th",{scope:"col",className:"px-6 py-3 text-right"})]})}),A.map((e,s)=>{let t=Number((0,h.Z)(e.bet_amount).dividedBy(1e8)),a=Number(e.placing_odds)/1e4;return(0,l.jsxs)("tr",{className:"text-sm",children:[(0,l.jsx)("td",{className:"px-6 py-1.5 pl-4 text-white",children:(0,l.jsxs)("div",{className:" flex flex-row",children:[(0,l.jsxs)(m.Ct,{children:[e.market," (",e.round,")"]}),(0,l.jsxs)(m.El,{children:[1===e.selected_outcome&&"A",2===e.selected_outcome&&"B",3===e.selected_outcome&&"C",4===e.selected_outcome&&"D"]}),(0,l.jsxs)("div",{className:"text-xs px-1 font-semibold my-auto",children:[t.toLocaleString()," APT / ",a.toLocaleString()]})]})}),(0,l.jsx)("td",{scope:"row",className:"px-6 py-1.5 text-white text-right",children:(0,l.jsx)(m.Ct,{children:e.is_open?"not settled":"settled"})})]},s)})]})}),s&&(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("table",{className:"w-full text-sm sm:text-base text-left",children:[(0,l.jsx)("thead",{className:"text-xs text-secondary",children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"col",className:"px-6 py-3",children:"All assets (2)"}),(0,l.jsx)("th",{scope:"col",className:"px-6 py-3 text-right"})]})}),(0,l.jsxs)("tr",{className:"text-sm",children:[(0,l.jsx)("td",{className:"px-6 py-1.5 pl-4 text-white",children:(0,l.jsxs)("div",{className:" flex flex-row",children:[(0,l.jsx)("div",{className:"hidden sm:flex items-center ",children:(0,l.jsx)("img",{className:"h-5 w-5 rounded-full",src:"/assets/images/aptos-logo.png",alt:""})}),(0,l.jsx)("div",{className:" ml-2 flex items-center ",children:"JumpSUIt Vault Token"})]})}),(0,l.jsx)("td",{scope:"row",className:"px-6 py-1.5 text-white text-right",children:_.toFixed(6)})]}),(0,l.jsxs)("tr",{className:"text-sm",children:[(0,l.jsx)("td",{className:"px-6 py-1.5 pl-4 text-white",children:(0,l.jsxs)("div",{className:" flex flex-row",children:[(0,l.jsx)("div",{className:"hidden sm:flex items-center ",children:(0,l.jsx)("img",{className:"h-5 w-5 rounded-full",src:"/assets/images/legato-icon.png",alt:""})}),(0,l.jsx)("div",{className:" ml-2 flex items-center ",children:"Market LP Token"})]})}),(0,l.jsx)("td",{scope:"row",className:"px-6 py-1.5 text-white text-right",children:L.toFixed(6)})]})]})})]}),(0,l.jsx)("div",{className:"py-4 pt-0 sm:pt-2",children:(0,l.jsx)(c.V,{})})]})}),(0,l.jsx)("style",{children:"\n        \n        .wallet-button {\n            width: 100%;\n            z-index: 1;\n\n          } \n\n        \n        \n        "})]})};s.default=p}}]);