"use strict";(self.webpackChunkcharlesancheta_com=self.webpackChunkcharlesancheta_com||[]).push([[4884],{9613:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>g});var n=o(9496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(o),g=r,u=m["".concat(c,".").concat(g)]||m[g]||b[g]||a;return o?n.createElement(u,l(l({ref:t},s),{},{components:o})):n.createElement(u,l({ref:t},s))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9450:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=o(665),r=(o(9496),o(9613));const a={title:"Dev Log: Boboman - Day 3",authors:"cbebe",slug:"dev-log/boboman/day3",tags:["dev-log","love","lua"]},l=void 0,i={permalink:"/v2/blog/dev-log/boboman/day3",editUrl:"https://github.com/cbebe/v2/edit/master/blog/dev-log/boboman/2022-07-05-day3.md",source:"@site/blog/dev-log/boboman/2022-07-05-day3.md",title:"Dev Log: Boboman - Day 3",description:"Feeling good today. I got to fix the collision bug that was happening yesterday. It actually had to do with the",date:"2022-07-05T00:00:00.000Z",formattedDate:"July 5, 2022",tags:[{label:"dev-log",permalink:"/v2/blog/tags/dev-log"},{label:"love",permalink:"/v2/blog/tags/love"},{label:"lua",permalink:"/v2/blog/tags/lua"}],readingTime:.685,hasTruncateMarker:!1,authors:[{name:"Charles Ancheta",title:"Computer Engineering Student",url:"https://github.com/cbebe",imageURL:"https://github.com/cbebe.png",key:"cbebe"}],frontMatter:{title:"Dev Log: Boboman - Day 3",authors:"cbebe",slug:"dev-log/boboman/day3",tags:["dev-log","love","lua"]},prevItem:{title:"Dev Log: Boboman - Day 4",permalink:"/v2/blog/dev-log/boboman/day4"},nextItem:{title:"Dev Log: Boboman - Day 2",permalink:"/v2/blog/dev-log/boboman/day2"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p};function b(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Feeling good today. I got to fix the collision bug that was happening yesterday. It actually had to do with the\ncollision lifecycle, so to make the player detectable, I decoupled the check from the lifecycle of the bomb. Because of\nthis, I could revert the player's bomb timer to normal. Moving away from a project and letting your brain sit on a\nproblem for a while really does wonders."),(0,r.kt)("p",null,"I also created an enemy entity based off the player asset and make that and the box entities destructible by explosions.\nI thought I lost my commit progress on it after mashing a few keys on ",(0,r.kt)("inlineCode",{parentName:"p"},"lazygit"),", but I got it back after a ",(0,r.kt)("inlineCode",{parentName:"p"},"git reflog"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"git cherry-pick")," combo."),(0,r.kt)("p",null,"Overall, I'm making pretty good progress, and shaping the game more by adding stuff to the TODO."))}b.isMDXComponent=!0}}]);