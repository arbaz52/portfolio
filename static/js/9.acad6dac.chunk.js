(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[9],{24:function(e,t,n){"use strict";var r=n(25),c=n(26),a=n(0),i=n.n(a),o=n(1);t.a=function(e){var t=e.icon,a=Object(c.a)(e,["icon"]),s=i.a.lazy((function(){return n(28)("./".concat(t,".svg"))}));return s?Object(o.jsx)(i.a.Suspense,{fallback:Object(o.jsx)(o.Fragment,{}),children:Object(o.jsx)(s,Object(r.a)({},a))}):Object(o.jsx)(o.Fragment,{})}},25:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return a}))},26:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}n.d(t,"a",(function(){return r}))},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r,c=n(3),a=n(2),i=n(24),o=Object(a.d)(i.a)(r||(r=Object(c.a)(["\n  * {\n    ","\n  }\n"])),(function(e){switch(e.variant){case"stroke":return"\n            stroke: ".concat(e.highlighted?e.theme.colors.text:e.theme.colors.icon,";\n          ");case"fill":default:return"\n            fill: ".concat(e.highlighted?e.theme.colors.text:e.theme.colors.icon,";\n          ")}}))},28:function(e,t,n){var r={"./arrow-down.svg":[35,16],"./briefcase.svg":[36,17],"./camera.svg":[37,18],"./chat-bubbles.svg":[38,19],"./code.svg":[39,20],"./download.svg":[40,21],"./dribbble.svg":[41,22],"./edit.svg":[42,23],"./figma.svg":[43,24],"./github.svg":[44,25],"./hashtag.svg":[45,26],"./heart.svg":[46,27],"./linkedin.svg":[47,28],"./mail-64.svg":[48,29],"./mail.svg":[49,30],"./medium.svg":[50,31],"./moon.svg":[51,32],"./notta.svg":[32,0],"./pen.svg":[52,33],"./person.svg":[53,34],"./planearly.svg":[33,1],"./portrait-grey.svg":[30,2],"./portrait.svg":[31,3],"./sun.svg":[54,35],"./terminal.svg":[55,36],"./tv.svg":[56,37],"./zap.svg":[57,38]};function c(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(r)},c.id=28,e.exports=c},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r,c,a=n(3),i=n(2),o=i.d.div(r||(r=Object(a.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 32px;\n  padding: 8px;\n"]))),s=i.d.a(c||(c=Object(a.a)([""])))},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r,c,a=n(3),i=n(2),o=i.d.span(r||(r=Object(a.a)(["\n  line-height: 24px;\n  letter-spacing: 1px;\n  ",";\n\n  color: ",";\n"])),(function(e){return e.lead&&Object(i.b)(c||(c=Object(a.a)(["\n      font-size: 1.125rem;\n      line-height: 24px;\n    "])))}),(function(e){var t=e.theme.colors,n=t.accent,r=t.text,c=t.secondaryText,a=t.bodyText;switch(e.variant){case"accent":return n;case"highlighted":return r;case"secondary":return c;case"body":default:return a}}))},58:function(e,t,n){"use strict";n(0);var r=n(27),c=n(29),a=n(1);t.a=function(e){var t=e.className,n=e.style;return Object(a.jsxs)(c.b,{style:n,className:t,children:[Object(a.jsx)(c.a,{target:"_blank",title:"Medium Blog",href:"https://arbaz5256.medium.com/",children:Object(a.jsx)(r.a,{icon:"medium",highlighted:!0})}),Object(a.jsx)(c.a,{target:"_blank",title:"Dribbble Shots",href:"https://dribbble.com/zabarsabar",children:Object(a.jsx)(r.a,{icon:"dribbble",variant:"stroke",highlighted:!0})}),Object(a.jsx)(c.a,{target:"_blank",title:"Github",href:"https://github.com/arbaz52",children:Object(a.jsx)(r.a,{icon:"github",variant:"stroke",highlighted:!0})}),Object(a.jsx)(c.a,{target:"_blank",title:"LinkedIn Profile",href:"https://www.linkedin.com/in/arbaz-ajaz/",children:Object(a.jsx)(r.a,{icon:"linkedin",variant:"stroke",highlighted:!0})}),Object(a.jsx)(c.a,{target:"_blank",title:"Business Email",href:"mailto:arbaz5256@gmail.com",children:Object(a.jsx)(r.a,{icon:"mail",variant:"stroke",highlighted:!0})})]})}},60:function(e,t,n){"use strict";var r,c,a,i,o,s,l,u,b,d=n(25),f=n(26),h=(n(0),n(3)),j=n(2),g=n(24),O=j.d.button(r||(r=Object(h.a)(["\n  outline: none;\n  cursor: pointer;\n  border-radius: 8px;\n  font-weight: 400;\n  text-decoration: none;\n  letter-spacing: 2px;\n  /* text-transform: uppercase; */\n  border: 1px solid transparent;\n  background: transparent;\n  color: ",";\n  display: flex;\n  gap: 12px;\n  align-items: center;\n\n  white-space: nowrap;\n  \n  ","\n  ",";\n  background: ",";\n  color: ",";\n"])),(function(e){return e.theme.colors.text}),(function(e){switch(e.size){case"small":return console.log("SMLALL"),Object(j.b)(c||(c=Object(h.a)(["\n          font-size: 0.875rem;\n          line-height: 16px;\n          padding: 8px 16px;\n        "])));case"medium":default:return Object(j.b)(a||(a=Object(h.a)(["\n          font-size: 1rem;\n          line-height: 24px;\n          padding: 16px 32px;\n        "])))}}),(function(e){switch(e.variation){case"outlined":return Object(j.b)(i||(i=Object(h.a)(["\n          background: transparent;\n          border-color: ",";\n          color: ",";\n        "])),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.colors.accent}));case"plain":return Object(j.b)(o||(o=Object(h.a)(["\n          color: ",";\n        "])),(function(e){return e.theme.colors.accent}));case"filled":default:return Object(j.b)(s||(s=Object(h.a)(["\n          background: ",";\n          border-color: ",";\n          color: white;\n        "])),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.colors.accent}))}}),(function(e){return e.background}),(function(e){return e.contentColor})),p=Object(j.d)(g.a)(l||(l=Object(h.a)(["\n  * {\n    fill: ",";\n    ",";\n  }\n"])),(function(e){return e.contentColor||e.theme.colors.text}),(function(e){switch(e.variation){case"outlined":case"plain":return Object(j.b)(u||(u=Object(h.a)(["\n            fill: ",";\n          "])),(function(e){return e.theme.colors.accent}));case"filled":default:return Object(j.b)(b||(b=Object(h.a)(["\n            fill: white;\n          "])))}})),m=n(1);t.a=function(e){var t=e.children,n=e.prefix,r=e.suffix,c=e.as,a=e.href,i=e.target,o=e.download,s=Object(f.a)(e,["children","prefix","suffix","as","href","target","download"]);return Object(m.jsxs)(O,Object(d.a)(Object(d.a)({as:c,href:a,target:i,download:o},s),{},{children:[n&&Object(m.jsx)(p,Object(d.a)(Object(d.a)({},s),{},{icon:n})),t,r&&Object(m.jsx)(p,Object(d.a)(Object(d.a)({},s),{},{icon:r}))]}))}},69:function(e,t,n){"use strict";n.r(t);n(0);var r,c,a=n(27),i=n(60),o=n(34),s=n(3),l=n(2),u=n(6),b=Object(l.d)(u.d)(r||(r=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 32px;\n"]))),d=l.d.div(c||(c=Object(s.a)(["\n  max-width: 450px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  text-align: center;\n"]))),f=n(58),h=n(1);t.default=function(){return Object(h.jsxs)(b,{id:"contact",children:[Object(h.jsx)(a.a,{icon:"mail-64",variant:"stroke",highlighted:!0}),Object(h.jsxs)(d,{children:[Object(h.jsx)("h5",{children:"Let's Get In Touch!"}),Object(h.jsx)(o.a,{variant:"body",children:"I would love to hear from you!."}),Object(h.jsx)(o.a,{variant:"secondary",children:"If you have any questions, or would like to work with me or just want to leave me a message,"})]}),Object(h.jsx)(i.a,{as:"a",href:"https://www.linkedin.com/in/arbaz-ajaz/",size:"small",prefix:"chat-bubbles",target:"_blank",children:"Message me on LinkedIn"}),Object(h.jsx)(f.a,{})]})}}}]);
//# sourceMappingURL=9.acad6dac.chunk.js.map