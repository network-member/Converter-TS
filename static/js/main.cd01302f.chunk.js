(this["webpackJsonpconverter-ts"]=this["webpackJsonpconverter-ts"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),u=n(6),l=n.n(u),s=n(2),i=n(3),o=(n(13),n(5)),j=n.n(o),f=n(7),b=function(e,t,n){e.value=h(Number(n),t.rate,e.rate),t.value=n},v=function(e,t,n,a){e.tag=n,e.rate=t,e.value="undefined"!==typeof a?h(Number(a.value),a.rate,t):e.value},h=function(e,t,n){return Number((e*t/n).toFixed(3))},O=function(){var e=Object(f.a)(j.a.mark((function e(){var t,n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.cbr-xml-daily.ru/daily_json.js");case 2:return e.next=4,e.sent.json();case 4:return t=e.sent,n=[t.Valute,{RUB:1}],a=n[0],r=n[1],Object.values(a).forEach((function(e){r[e.CharCode]=e.Value/e.Nominal})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n(15);function g(e){var t=e.name,n=e.value,r=e.onChange,c=e.tag;return Object(a.jsxs)("div",{className:"flexBox",children:[Object(a.jsx)("input",{name:t,value:n,onChange:function(e){return r(e)},className:"text",type:"text"}),Object(a.jsx)("div",{children:c})]})}function d(e){var t=e.currentValueLeft,n=e.currentValueRight,r=e.onChange;return Object(a.jsxs)("div",{className:"flexRow",children:[Object(a.jsx)(g,{value:t.value,tag:t.tag,name:"left",onChange:r}),"==",Object(a.jsx)(g,{value:n.value,tag:n.tag,name:"right",onChange:r})]})}function x(e){var t=e.allRates,n=e.onChange,r=e.leftTag,c=e.rightTag,u=Object.keys(t).map((function(e,t){return Object(a.jsx)("option",{value:e,children:e},t)}));return Object(a.jsxs)("div",{className:"flexRow",children:["\u0412\u044b \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442\u0435 \u0438\u0437",Object(a.jsx)("select",{name:"left",onChange:function(e){return n(e)},value:r,children:u}),"\u0432",Object(a.jsx)("select",{name:"right",onChange:function(e){return n(e)},value:c,children:u})]})}function m(){var e=Object(r.useState)({tag:"USD",value:"",rate:1}),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(r.useState)({tag:"RUB",value:"",rate:1}),l=Object(i.a)(u,2),o=l[0],j=l[1],f=Object(r.useState)({}),g=Object(i.a)(f,2),m=g[0],p=g[1];Object(r.useEffect)((function(){O().then((function(e){p(e),c((function(t){return Object(s.a)(Object(s.a)({},t),{},{rate:e.USD})}))}))}),[]);var C=function(e,t){c(t),j(e)};return Object(a.jsx)("div",{className:"mainBoard",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0412\u0430\u043b\u044e\u0442"}),Object(a.jsx)(x,{allRates:m,onChange:function(e){var t=Object(s.a)({},n),a=Object(s.a)({},o),r=e.target,c=r.value,u=r.name,l=m[e.target.value];"left"===u?(a.value=h(Number(t.value),l,a.rate),v(t,l,c)):v(a,l,c,t),C(a,t)},leftTag:n.tag,rightTag:o.tag}),Object(a.jsx)(d,{currentValueLeft:n,currentValueRight:o,onChange:function(e){var t,a=e.target,r=a.value,c=a.name;if(null!==(/(\d+|\.)$/.test(t=r)||""===t?t:null)){var u=Object(s.a)({},n),l=Object(s.a)({},o);"left"===c?b(l,u,r):b(u,l,r),C(l,u)}}}),Object(a.jsx)("div",{className:"flexRow",children:Object(a.jsx)("a",{href:"#",onClick:function(){return C(n,o)},children:"\u041f\u043e\u043c\u0435\u043d\u044f\u0442\u044c \u043c\u0435\u0441\u0442\u0430\u043c\u0438"})})]})})}l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cd01302f.chunk.js.map