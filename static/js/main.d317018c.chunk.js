(this["webpackJsonptip-calculator-app-challenge-hub"]=this["webpackJsonptip-calculator-app-challenge-hub"]||[]).push([[0],[,,function(e,t,a){e.exports={summaryRow:"SummaryRow_summaryRow__q1I_0",informationWrapper:"SummaryRow_informationWrapper__2alDf",value:"SummaryRow_value__3MW52"}},function(e,t,a){e.exports={calculator:"Calculator_calculator__3THIC",inputsPart:"Calculator_inputsPart__2fGMv",tipWrapper:"Calculator_tipWrapper__w75fd"}},,,,function(e,t,a){e.exports={inputWrapper:"InputWrapper_inputWrapper__e6MuF"}},function(e,t,a){e.exports={label:"Label_label__3I-ct"}},function(e,t,a){e.exports={summary:"Summary_summary__wSz-_"}},function(e,t,a){e.exports={radioAsButton:"RadioAsButton_radioAsButton__16IYE"}},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(6),r=a.n(l),s=(a(15),a(16),a(4)),i=a(3),o=a.n(i),u=a(7),j=a.n(u),b=a(8),p=a.n(b),m=a(0),x=function(e){var t=e.labelText,a=e.name,n=void 0===a?"":a;return Object(m.jsx)("label",{className:p.a.label,htmlFor:n,children:t})},d=function(e){var t=e.labelText,a=e.type,n=void 0===a?"text":a,c=e.name,l=e.value,r=e.setValue,s=e.icon;return Object(m.jsxs)("div",{className:j.a.inputWrapper,children:[Object(m.jsx)(x,{labelText:t,name:c}),Object(m.jsxs)("div",{children:[s&&Object(m.jsx)("img",{src:s,alt:"input icon"}),Object(m.jsx)("input",{name:c,type:n,onChange:function(e){r&&r(e.target.value)},value:l,defaultValue:0})]})]})},v=a(9),O=a.n(v),f=a(2),h=a.n(f),_=function(e){var t=e.text,a=e.textSecond,n=e.value;return Object(m.jsxs)("div",{className:h.a.summaryRow,children:[Object(m.jsxs)("div",{className:h.a.informationWrapper,children:[Object(m.jsx)("div",{className:h.a.mainText,children:t}),Object(m.jsx)("div",{className:h.a.secondText,children:a})]}),Object(m.jsx)("span",{className:h.a.value,children:"$".concat(n)})]})},g=function(e){return Math.round(100*(e+Number.EPSILON))/100},T=function(e){var t=e.bill,a=void 0===t?0:t,n=e.numberOfPeople,c=void 0===n?0:n,l=e.tipPercentage,r=g(a*(void 0===l?0:l)/(1|c)),s=g(a/(1|c)+r);return Object(m.jsxs)("div",{className:O.a.summary,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(_,{text:"Tip Amount",textSecond:"/ person",value:r}),Object(m.jsx)(_,{text:"Total",textSecond:"/ person",value:s})]}),Object(m.jsx)("button",{type:"reset",children:"Reset"})]})},P=a(10),y=a.n(P),N=function(e){var t=e.labelText,a=e.name,n=e.value;return Object(m.jsxs)("div",{className:y.a.radioAsButton,children:[Object(m.jsx)("input",{name:a,type:"radio",value:n}),Object(m.jsx)("label",{htmlFor:a,children:t})]})},S=a.p+"static/media/icon-dollar.9f9be353.svg",W=a.p+"static/media/icon-person.65bfd204.svg",w=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),r=Object(s.a)(l,2),i=r[0],u=r[1],j=Object(n.useState)(0),b=Object(s.a)(j,2),p=b[0],v=b[1];return Object(m.jsxs)("form",{onReset:function(){c(0),u(0),v(0)},className:o.a.calculator,onChange:function(e){"tipPercentage"===e.target.name&&v(e.target.value)},children:[Object(m.jsxs)("div",{className:o.a.inputsPart,children:[Object(m.jsx)(d,{labelText:"Bill",type:"text",name:"bill",value:a,setValue:c,icon:S}),Object(m.jsxs)("div",{children:[Object(m.jsx)(x,{labelText:"Select Tip %"}),Object(m.jsxs)("div",{className:o.a.tipWrapper,children:[Object(m.jsx)(N,{labelText:"5%",name:"tipPercentage",value:"0.05"}),Object(m.jsx)(N,{labelText:"10%",name:"tipPercentage",value:"0.10"}),Object(m.jsx)(N,{labelText:"15%",name:"tipPercentage",value:"0.15"}),Object(m.jsx)(N,{labelText:"25%",name:"tipPercentage",value:"0.25"}),Object(m.jsx)(N,{labelText:"50%",name:"tipPercentage",value:"0.50"})]})]}),Object(m.jsx)(d,{labelText:"Number of People",type:"text",name:"numberOfPeople",value:i,setValue:u,icon:W})]}),Object(m.jsx)(T,{bill:a,numberOfPeople:i,tipPercentage:p})]})},C=a.p+"static/media/logo.3cc0528b.svg";var R=function(){return Object(m.jsx)("div",{className:"app",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{className:"logo",src:C,alt:"logo"}),Object(m.jsx)(w,{})]})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root")),I()}],[[18,1,2]]]);
//# sourceMappingURL=main.d317018c.chunk.js.map