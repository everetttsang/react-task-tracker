(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),l=n(3),s=n.n(l),i=(n(8),n(0)),d=function(){return Object(i.jsx)("center",{children:Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:"Dailies Tracker"})})})},a=function(){var e=!0;return Object(i.jsx)("center",{children:Object(i.jsx)("button",{onClick:function(t){var n=document.getElementById("taskTable").insertRow(),c=n.insertCell(0),r=n.insertCell(1);c.style.backgroundColor=e?"AliceBlue":"CornSilk",r.style.backgroundColor=e?"AliceBlue":"CornSilk",e=!e,c.innerHTML='<input type="checkbox" />',r.innerHTML=document.getElementById("textField").value,document.getElementById("textField").value=""},className:"btn",children:" Add Daily "})})},j=function(){return Object(i.jsx)("center",{children:Object(i.jsx)("table",{id:"taskTable",children:Object(i.jsx)("tbody",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{class:"c1"}),Object(i.jsx)("th",{class:"c2",children:" Task"})]})})})})},b=function(){return Object(i.jsx)("center",{children:Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(i.jsxs)("label",{children:["Enter Task Here:",Object(i.jsx)("input",{type:"text",id:"textField"})]})})})},o=function(){return Object(i.jsx)("center",{children:Object(i.jsx)("button",{onClick:function(e){document.getElementById("taskTable").rows.length;var t=document.getElementById("taskTable").rows[0],n=document.getElementById("taskTable").tBodies[0].cloneNode(!1);n.appendChild(t),document.getElementById("taskTable").replaceChild(n,document.getElementById("taskTable").tBodies[0])},className:"btn",children:" Clear "})})};var u=function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(d,{}),Object(i.jsxs)("div",{children:[Object(i.jsx)("center",{children:Object(i.jsxs)("div",{class:"instruction",align:"left",children:['1. Enter a task into the text field and click "Add Daily" to add it to the table. ',Object(i.jsx)("br",{}),"2. Dailies will reset every 24 hours. ",Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]})}),Object(i.jsx)(b,{}),Object(i.jsx)(a,{}),Object(i.jsx)("br",{})]}),Object(i.jsx)(j,{}),Object(i.jsx)(o,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,11)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),l(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),x()},8:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.f92eeea2.chunk.js.map