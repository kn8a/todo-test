(()=>{"use strict";var e={159:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),d=n.n(i)()(o());d.push([e.id,".card {\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    height: min-content;\r\n    width: 300px;\r\n    padding: 1vh;\r\n    border-radius: 15px;\r\n    background-color: white;\r\n\r\n    border: rgb(180, 180, 180) 2px solid;\r\n}\r\n\r\n.card p {\r\n    font-weight: 100;\r\n    font-size: smaller;\r\n}\r\n\r\n.card-bar {\r\n    display: flex;\r\n    padding-left: 1vh;\r\n    padding-right: 1vh;\r\n    height: 3vh;\r\n    justify-content: space-between;\r\n    border: 0px purple solid;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.priority-high, .priority-medium, .priority-low {\r\n    font-weight: 200;\r\n    font-size: x-small;\r\n    border-radius: 50px;\r\n\r\n}\r\n\r\n.priority-high {\r\n    color: red;\r\n    border: 1px red solid;\r\n    padding: 4px;\r\n}\r\n\r\n.priority-medium {\r\n    color: orange;\r\n    border: 1px orange solid;\r\n    padding: 4px;\r\n}\r\n\r\n.priority-low {\r\n    color: grey;\r\n    border: 1px grey solid;\r\n    padding: 4px;\r\n}\r\n\r\n.task-actions {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 1vh;\r\n}\r\n\r\n.task-action {\r\n    padding: 1vh;\r\n    border-radius: 50px;\r\n    border: 1px grey solid;\r\n    font-size: x-small;\r\n    cursor: pointer;\r\n}\r\n\r\n.new-card {\r\n    display: flex;\r\n    align-items: center;\r\n    align-content: center;\r\n}\r\n\r\n.add-card {\r\n    background-color: lightblue;\r\n    padding: 2vh;\r\n    border-radius: 200px;\r\n    font-size: 6vh;\r\n    color: white;\r\n    cursor: pointer;\r\n}",""]);const a=d},694:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),d=n.n(i)()(o());d.push([e.id,'.newCardBtn {\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 100%;\r\n    background-color: lightblue;\r\n    color: #FFFCF2;\r\n    border: 0;\r\n    font-size: xx-large;\r\n    transition: transform 100ms ease-in;\r\n    cursor: pointer;\r\n}\r\n\r\n.newCardBtn:hover {\r\n    transform: scale(1.2) rotate(90deg);\r\n}\r\n\r\n.newCardBtn:active {\r\n    transform: scale(1) rotate(180deg);\r\n}\r\n\r\n#popupForm, #updateFormDiv {\r\n    display: none;\r\n    position: fixed;\r\n    left: 50%;\r\n    top: 5%;\r\n    transform: translate(-50%, 5%);\r\n    border: 2px solid lightblue;\r\n    border-radius: 3vh;\r\n    z-index: 9;\r\n    background-color: #ffffff;\r\n    padding: 3vh;\r\n    color: #403D39;\r\n    box-shadow: 1px 1px 14px -1px lightblue;\r\n\r\n}\r\n\r\n#entryForm, #updateForm {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.buttonCont {\r\n    display: flex;\r\n    justify-content: right;\r\n}\r\n\r\n.formButton {\r\n    margin-top: 2vh;\r\n    padding-top: 0.5vh;\r\n    padding-bottom: 0.5vh;\r\n    width: 70px;\r\n    height: 70px;\r\n    align-self: center;\r\n    background-color:lightgreen;\r\n    color:white ;\r\n    margin: 0.5vh;\r\n    border-radius: 3vh;\r\n    cursor: pointer;\r\n    font-weight: 500;\r\n    font-size: larger;\r\n    border: 0;\r\n    transition: transform 80ms ease-in;\r\n    box-shadow: 1px 14px 17px -13px rgba(0,0,0,0.75);\r\n    -webkit-box-shadow: 1px 14px 17px -13px rgba(0,0,0,0.75);\r\n    -moz-box-shadow: 1px 14px 17px -13px rgba(0,0,0,0.75);\r\n}\r\n\r\n.formButtonClose {\r\n    padding-top: 0.5vh;\r\n    padding-bottom: 0.5vh;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color:lightcoral;\r\n    color:#FFFCF2 ;\r\n    margin: 0.5vh;\r\n    align-self: center;\r\n    border-radius: 3vh;\r\n    cursor: pointer;\r\n    font-weight: 500;\r\n    font-size: large;\r\n    border: 0;\r\n    transition: transform 80ms ease-in;\r\n\r\n}\r\n\r\n.formButton:hover {\r\n    transform: scale(1.03);\r\n}\r\n\r\n.formButton:active {\r\n    transform: scale(0.98);\r\n}\r\n\r\nlabel {\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\ninput[type="text"], input[type="number"], textarea, input[type="date"], select{\r\n    border:1px lightblue solid;\r\n    outline:none;\r\n    height:34px;  \r\n    bottom:14px;\r\n    right:9px;\r\n    border-radius:22px;\r\n    width:220px;\r\n    box-sizing:border-box;\r\n    padding:0 18px; \r\n    margin: 1vh;\r\n  }\r\n\r\n  textarea {\r\n      min-height: 8vh;\r\n  }\r\n\r\n\r\n  .new-project-form {\r\n      display: none;\r\n      flex-direction: column;\r\n  }\r\n\r\n  .project-buttons {\r\n    padding-top: 0.5vh;\r\n    padding-bottom: 0.5vh;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-color:lightcoral;\r\n    color:#FFFCF2 ;\r\n    margin: 0.5vh;\r\n    border-radius: 3vh;\r\n    cursor: pointer;\r\n    font-weight: 500;\r\n    font-size: large;\r\n    border: 0;\r\n    transition: transform 80ms ease-in;\r\n}\r\n\r\n.add {\r\n    background-color:lightgreen;\r\n}\r\n\r\n\r\n\r\n.project-item-btn {\r\n    padding: 8px;\r\n    background-color: white;\r\n    border-radius: 20px;\r\n    width: 85%;\r\n    border: 1px lightblue solid\r\n\r\n    \r\n\r\n}\r\n\r\n.project-item-btn:hover {\r\n    background-color: lightblue;\r\n}\r\n\r\n.activeProject {\r\n    background-color: lightgreen;\r\n}',""]);const a=d},426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),d=n.n(i)()(o());d.push([e.id,"body {\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    height: 100vh;\r\n    background-color: white;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.sidebar {\r\n    padding-top: 2vh;\r\n    width: 300px;\r\n    border: 0px blue solid;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    border-right: 2px lightsalmon solid;\r\n}\r\n\r\n.sidebar h3 {\r\n    border-bottom: 2px lightpink solid;\r\n    padding: 4px;\r\n\r\n}\r\n\r\n.sidebar h3.active {\r\n\r\n\r\n}\r\n\r\n.projects-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 8px;\r\n    align-items: center;\r\n    margin-bottom: 2vh;\r\n}\r\n\r\n.title {\r\n    \r\n    font-weight: 800;\r\n    font-size: 48px;\r\n    color: lightblue;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.right-pane {\r\n    flex:5;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.main {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-content: flex-start;\r\n    border: 0px red solid;\r\n    row-gap: 2vh;\r\n    column-gap: 2vh;\r\n    padding: 2vh;\r\n}\r\n\r\n.new-card {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding-bottom: 2vh;\r\n    padding-right: 2vh;\r\n    padding-left: 2vh;\r\n}\r\n\r\n\r\n\r\n",""]);const a=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(d[l]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&d[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},d=[],a=0;a<e.length;a++){var l=e[a],c=r.base?l[0]+r.base:l[0],s=i[c]||0,u="".concat(c," ").concat(s);i[c]=s+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var g=o(m,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:g,references:1})}d.push(u)}return d}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var a=n(i[d]);t[a].references--}for(var l=r(e,o),c=0;c<i.length;c++){var s=n(i[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{let e=[],t=[];function r(t,n,r,o,i){this.id=e.length+1,this.title=""==t?"untitled":t,this.text=n,this.date=""==r?"anytime":r,this.priority=""==o?"low":o,this.project=i,this.status="active"}function o(t){const n=e.findIndex((function(e){return e.id==t}));e[n].id="",e[n].project="",e[n].title="",e[n].text="",e[n].date="",e[n].priority="",e[n].status="",i(e)}function i(e){void 0!==window.localStorage?localStorage.setItem("tasks",JSON.stringify(e)):console.log("localstorage unsupported")}function d(e){void 0!==window.localStorage?localStorage.setItem("projects",JSON.stringify(e)):console.log("localstorage unsupported")}function a(e,t){for(let n=0;n<e.length;n++)e[n].project==t&&(l(e[n]),c(t));c(t)}function l(t){const n=document.getElementById("main"),r=document.createElement("div");r.classList.add("card"),r.id=t.id,n.appendChild(r);const d=document.createElement("h4");d.textContent=t.title,r.appendChild(d);const a=document.createElement("p");a.textContent=t.text,r.appendChild(a);const l=document.createElement("p");l.textContent=`Due date: ${t.date}`,r.appendChild(l);const c=document.createElement("div");c.classList.add("card-bar"),r.appendChild(c);const u=document.createElement("div");u.classList.add(`priority-${t.priority}`),u.textContent=`${t.priority} priority`,c.appendChild(u),u.id=`priority-${t.id}`;const p=document.createElement("div");p.classList.add("task-actions"),c.appendChild(p);const m=document.createElement("div");m.classList.add("task-action"),m.setAttribute("data-done",t.id),m.textContent="✔️",p.appendChild(m),m.id=`done-${t.id}`,m.addEventListener("click",(()=>{s(t.id),function(t,n){const r=e.findIndex((function(e){return e.id==t}));e[r].status="done",i(e)}(t.id)}));const g=document.createElement("div");g.classList.add("task-action"),g.setAttribute("data-edit",t.id),g.textContent="🖊️",p.appendChild(g),g.id=`edit-${t.id}`,g.addEventListener("click",(()=>{document.getElementById("updateFormDiv").style.display="block",document.getElementById("update-id").value=t.id,document.getElementById("title-update").value=t.title,document.getElementById("text-update").textContent=t.text,document.getElementById("date-update").value=t.date,document.getElementById("update-priority-label").textContent=`Currently set to ${t.priority} priority`,document.getElementById("update-project").value=t.project}));const h=document.createElement("div");h.classList.add("task-action"),h.setAttribute("data-del",t.id),h.textContent="❌",p.appendChild(h),h.addEventListener("click",(()=>{var e;e=t.id,document.getElementById("main").removeChild(document.getElementById(e)),o(t.id)})),"done"==t.status&&s(t.id)}function c(e){const t=document.getElementById("showForm");t.removeAttribute("data-project"),t.setAttribute("data-project",e),document.getElementById("delete-project").value=e}function s(e){document.getElementById(e).style.border="2px lightgreen solid";const t=document.getElementById(`priority-${e}`);t.textContent="Completed",t.style.color="green",t.style.border="1px green solid",document.getElementById(`done-${e}`).style.display="none",document.getElementById(`edit-${e}`).style.display="none",document.getElementById(e).style.color="grey"}const u=e=>{for(;e.lastChild;)e.removeChild(e.lastChild)};function p(){document.getElementById("popupForm").style.display="none",document.getElementById("entryForm").reset(),showForm.style.backgroundColor="lightblue",showForm.style.color="#FFFCF2",showForm.style.cursor="pointer"}function m(){document.getElementById("updateFormDiv").style.display="none",document.getElementById("updateForm").reset(),showForm.style.backgroundColor="lightblue",showForm.style.color="#FFFCF2",showForm.style.cursor="pointer"}function g(t){const n=document.getElementById("projects-list"),r=document.createElement("button");r.textContent=t,r.value=t,r.id=`project-id-unique-XsTQ-${t}`,r.classList.add("project-item-btn"),n.appendChild(r),r.addEventListener("click",(()=>{document.querySelectorAll(".project-item-btn").forEach((e=>{e.classList.remove("activeProject")})),r.classList.add("activeProject"),u(document.getElementById("main")),a(e,t),document.getElementById("delete-project").value="",document.getElementById("delete-project").value=t,document.getElementById("delete-project").style.display="inline",document.getElementById("showForm").style.display="inline"}))}var h=n(379),y=n.n(h),f=n(795),v=n.n(f),x=n(569),b=n.n(x),E=n(565),w=n.n(E),I=n(216),B=n.n(I),j=n(589),C=n.n(j),k=n(426),F={};F.styleTagTransform=C(),F.setAttributes=w(),F.insert=b().bind(null,"head"),F.domAPI=v(),F.insertStyleElement=B(),y()(k.Z,F),k.Z&&k.Z.locals&&k.Z.locals;var L=n(159),S={};S.styleTagTransform=C(),S.setAttributes=w(),S.insert=b().bind(null,"head"),S.domAPI=v(),S.insertStyleElement=B(),y()(L.Z,S),L.Z&&L.Z.locals&&L.Z.locals;var A=n(694),T={};T.styleTagTransform=C(),T.setAttributes=w(),T.insert=b().bind(null,"head"),T.domAPI=v(),T.insertStyleElement=B(),y()(A.Z,T),A.Z&&A.Z.locals&&A.Z.locals,function(){if(null!=localStorage.getItem("tasks")){let t=localStorage.getItem("tasks");null!=t&&(t=JSON.parse(t),e=t)}else{let t=new r("Demo","This is a demo task","anytime","low","Demo project");e.push(t),i(e)}}(),function(){if(null!=localStorage.getItem("projects")||null!=localStorage.getItem("projects")){let e=localStorage.getItem("projects");null!=e&&(e=JSON.parse(e),t=e)}else t.push("Demo project"),d(t)}(),function(e){for(let t=0;t<e.length;t++)g(e[t])}(t),a(e,t[0]),document.getElementById("clear-storage").addEventListener("click",(()=>{confirm("This will delete ALL projects and tasks. Are you sure?")&&(localStorage.clear(),window.location.reload(!0))})),document.getElementById("new-project-btn").addEventListener("click",(()=>{document.getElementById("new-project-form").style.display="flex"})),document.querySelectorAll(".project-item-btn")[0].classList.add("activeProject"),document.getElementById("entryForm").onsubmit=function(t){let n=new r(document.getElementById("title").value,document.getElementById("text").value,document.getElementById("date").value,document.getElementById("priority").value,document.getElementById("showForm").getAttribute("data-project"));e.push(n),i(e),p(),t.preventDefault(),this.reset(),l(e[e.length-1])},document.getElementById("form-close-btn").addEventListener("click",(()=>{p()})),document.getElementById("updateForm").onsubmit=function(t){let n=document.getElementById("title-update").value,r=document.getElementById("text-update").value,o=document.getElementById("date-update").value,d=document.getElementById("priority-update").value,l=document.getElementById("update-id").value,c=document.getElementById("update-project").value;!function(t,n,r,o,d){const a=e.findIndex((function(e){return e.id==t}));e[a].title=n,e[a].text=r,e[a].date=o,e[a].priority=d,i(e)}(l,n,r,o,d),i(e),m(),t.preventDefault(),this.reset(),u(document.getElementById("main")),a(e,c)},document.getElementById("form-update-close-btn").addEventListener("click",(()=>{m()}));const Z=document.getElementById("showForm");Z.onclick=function(){document.getElementById("popupForm").style.display="block",Z.style.backgroundColor="transparent",Z.style.color="transparent",Z.style.cursor="default"},document.getElementById("project-cancel-button").addEventListener("click",(function(e){e.preventDefault(),document.getElementById("new-project-form").style.display="none",document.getElementById("new-project-name").value=""})),document.getElementById("add-project").onsubmit=function(e){let n=document.getElementById("new-project-name").value;t.push(n),d(t),document.getElementById("new-project-form").style.display="none",document.getElementById("add-project").reset(),e.preventDefault(),this.reset(),g(n)};const D=document.getElementById("delete-project");D.onclick=function(n){const r=D.value;var a;console.log(r),"yes"==(a=r,confirm(`This will also delete ALL tasks in ${a}. Are you sure?`)?(function(n){for(let t=0;t<e.length;t++)e[t].project==n&&o(e[t].id);i(e);const r=t.filter((e=>e!=n));t=r,d(t)}(a),"yes"):"no")&&(document.getElementById(`project-id-unique-XsTQ-${r}`).remove(),n.preventDefault(),Z.style.display="none",D.style.display="none")}})()})();