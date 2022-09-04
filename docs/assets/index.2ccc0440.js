import{o as c,c as d,a as u,r as _,b as v,d as r,t as m,F as g,e as y,p as $,f as x,g as k,h as F}from"./vendor.99e1d882.js";const w=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};w();var I="/logo_.png";var l=(a,o)=>{const s=a.__vccOpts||a;for(const[n,e]of o)s[n]=e;return s};const N={},S={class:"navbar navbar-expand-sm navbar-dark p-0 pt-2"},C=u('<div class="container-960 container-lg align-items-center" data-v-40883939><div class="logo navbar-brand d-flex align-items-center" data-v-40883939><img src="'+I+'" alt="Logo mccrush apps" width="48" height="48" class="m-0 mt-1 me-2" data-v-40883939><span class="fw-bold pb-1" data-v-40883939>mccrush apps</span></div><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-v-40883939><span class="navbar-toggler-icon" data-v-40883939></span></button><div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" data-v-40883939><ul class="navbar-nav" data-v-40883939><li class="nav-item m-auto" data-v-40883939><a class="nav-link active" href="#services" data-v-40883939>\u0423\u0441\u043B\u0443\u0433\u0438</a></li><li class="nav-item m-auto" data-v-40883939><a class="nav-link active" href="#contacts" data-v-40883939>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a></li></ul></div></div>',1),L=[C];function O(a,o,s,n,e,t){return c(),d("nav",S,L)}var P=l(N,[["render",O],["__scopeId","data-v-40883939"]]),j="/images/1f/pair-programming.svg";const A={},B={class:"present container-960 d-flex align-items-center justify-content-around m-auto row"},V=u('<div class="present-left d-flex align-items-center justify-content-center h-100 col-12 col-sm-6" data-v-62ed9ec2><div class="fade-in-bottom pb-5 mb-5" data-v-62ed9ec2><h1 class="display-5 fw-bold lh-1" data-v-62ed9ec2>\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430<br data-v-62ed9ec2>\u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439</h1><div class="font-monospace mt-4" data-v-62ed9ec2><span class="border border-warning rounded-3 p-1 ps-2 pe-2 me-2" data-v-62ed9ec2>JavaScript</span><span class="border border-success rounded-3 p-1 ps-2 pe-2 me-2" data-v-62ed9ec2>Vue.js</span></div></div></div><div class="fade-in-top present-right d-none d-sm-flex align-items-center h-100 col-sm-6" data-v-62ed9ec2><img src="'+j+'" alt="mccrush apps - \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439" class="mb-5" data-v-62ed9ec2></div>',2),E=[V];function T(a,o){return c(),d("div",B,E)}var q=l(A,[["render",T],["__scopeId","data-v-62ed9ec2"]]);const D={components:{Navbar:P,Present:q}},G={class:"f1 row vh-100 m-0 p-0"};function H(a,o,s,n,e,t){const i=_("Navbar"),p=_("Present");return c(),d("div",G,[v(i),v(p)])}var J=l(D,[["render",H],["__scopeId","data-v-72381101"]]);const K=[{title:"",description:"\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439",alias:"",link:"#",type:""},{title:"",description:"\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\xAD\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u043E\u0432",alias:"",link:"#",type:""},{title:"",description:"\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439",alias:"",link:"#",type:""}];const M={props:{app:{type:Object}}},z={class:"col-12 col-sm-6 col-lg-4 text-start mt-4 ps-1 pe-1"},Q={class:"my-card d-block rounded shadow h-100"},R={class:"my-card-body rounded-top h-75 p-3"},U={class:"color-c"},W={class:"card-text color-c lh-sm"},X={class:"my-card-footer rounded-bottom text-center p-2"},Y={key:0,class:"color-c font-monospace"},Z={key:1,class:"color-c font-monospace"};function ee(a,o,s,n,e,t){return c(),d("div",z,[r("div",Q,[r("div",R,[r("h5",U,m(s.app.title),1),r("p",W,m(s.app.description),1)]),r("div",X,[s.app.alias?(c(),d("span",Y,m(s.app.alias),1)):(c(),d("span",Z,"\xA0"))])])])}var te=l(M,[["render",ee],["__scopeId","data-v-3d56ff0f"]]);const ae={components:{Card:te},data(){return{services:K}}},h=a=>($("data-v-3d6906cb"),a=a(),x(),a),se={class:"f3"},oe={class:"container-960 row text-center m-0 m-auto ps-2 pt-5 pe-2 pb-5"},ce=h(()=>r("h3",{id:"services"},"\u0423\u0441\u043B\u0443\u0433\u0438",-1)),ne=h(()=>r("p",{class:"m-0"}," \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433: \u043D\u0430 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\xAD\u043D\u043E\u0439 \u043E\u0441\u043D\u043E\u0432\u0435 \u043E\u0442 7500 \u0440/\u043C\u0435\u0441\u044F\u0446, \u0441\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u043E\u0442 1000 \u0440/\u0447\u0430\u0441 ",-1)),re={class:"col-12 m-0 p-0"},de={class:"row m-0 p-0"};function ie(a,o,s,n,e,t){const i=_("Card");return c(),d("div",se,[r("div",oe,[ce,ne,r("div",re,[r("div",de,[(c(!0),d(g,null,y(e.services,p=>(c(),k(i,{key:p.alias,app:p},null,8,["app"]))),128))])])])])}var le=l(ae,[["render",ie],["__scopeId","data-v-3d6906cb"]]);const pe={components:{}},_e={class:"f5"},ve=u('<div class="container-960 row text-center m-0 m-auto ps-2 pt-5 pe-2 pb-5" data-v-564813dc><h3 id="contacts" data-v-564813dc>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</h3><div class="col-12 col-sm-4 col-md-4 p-2" data-v-564813dc><div class="rounded-top my-border-blue border-bottom-0 p-1" data-v-564813dc> Telegram </div><div class="rounded-bottom my-border-blue font-monospace p-1" data-v-564813dc><a class="link-git" href="https://t.me/mccrush" target="_blank" title="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C\u0435" data-v-564813dc>mccrush</a></div></div><div class="col-12 col-sm-4 col-md-4 p-2" data-v-564813dc><div class="rounded-top my-border-yellow border-bottom-0 p-1" data-v-564813dc> Email </div><div class="rounded-bottom my-border-yellow font-monospace p-1" data-v-564813dc><a class="link-git" href="mailto:mccrush@mail.ru" target="_blank" title="\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E" data-v-564813dc>mccrush@mail.ru</a></div></div><div class="col-12 col-sm-4 col-md-4 p-2" data-v-564813dc><div class="rounded-top my-border-gray border-bottom-0 p-1" data-v-564813dc>GitHub</div><div class="rounded-bottom my-border-gray font-monospace p-1" data-v-564813dc><a class="link-git" href="https://github.com/mccrush" target="_blank" title="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435" data-v-564813dc>mccrush</a></div></div></div>',1),me=[ve];function ue(a,o,s,n,e,t){return c(),d("div",_e,me)}var fe=l(pe,[["render",ue],["__scopeId","data-v-564813dc"]]);const he={components:{F1:J,F3:le,F5:fe}},be={class:"container-fluid p-0"};function ge(a,o,s,n,e,t){const i=_("F1"),p=_("F3"),b=_("F5");return c(),d("div",be,[v(i),v(p),v(b)])}var ye=l(he,[["render",ge]]);let f;f||(f=F(ye).mount("#app"));
