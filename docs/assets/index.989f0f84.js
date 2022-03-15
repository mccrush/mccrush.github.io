import{o as c,c as n,a as m,r as p,b as v,d,t as f,F as g,e as y,p as $,f as x,g as k,h as F}from"./vendor.0e84d79c.js";const w=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}};w();var I="/logo_.png";var l=(a,o)=>{const s=a.__vccOpts||a;for(const[r,t]of o)s[r]=t;return s};const N={},S={class:"navbar navbar-expand-sm navbar-dark p-0 ps-2 pt-2"},C=m('<div class="nav container-960 container-lg align-items-center" data-v-2f58d1f2><div class="logo navbar-brand d-flex align-items-center" data-v-2f58d1f2><img src="'+I+'" alt="Logo mccrush apps" width="48" height="48" class="m-0 ms-2 mt-1 me-2" data-v-2f58d1f2><span class="fw-bold pb-1" data-v-2f58d1f2>mccrush apps</span></div><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-v-2f58d1f2><span class="navbar-toggler-icon" data-v-2f58d1f2></span></button><div class="navigation collapse navbar-collapse justify-content-end" id="navbarSupportedContent" data-v-2f58d1f2><ul class="navbar-nav" data-v-2f58d1f2><li class="nav-item" data-v-2f58d1f2><a class="nav-link active" href="#services" data-v-2f58d1f2>\u0423\u0441\u043B\u0443\u0433\u0438</a></li><li class="nav-item" data-v-2f58d1f2><a class="nav-link active" href="#contacts" data-v-2f58d1f2>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a></li></ul></div></div>',1),L=[C];function O(a,o){return c(),n("nav",S,L)}var P=l(N,[["render",O],["__scopeId","data-v-2f58d1f2"]]),j="/images/1f/pair-programming.svg";const A={},B={class:"present container-960 d-flex align-items-center justify-content-around m-auto row"},V=m('<div class="present-left d-flex align-items-center justify-content-center h-100 col-12 col-sm-6" data-v-6b6afdd4><div class="fade-in-bottom pb-5 mb-5" data-v-6b6afdd4><h1 class="display-5 fw-bold lh-1" data-v-6b6afdd4>\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430<br data-v-6b6afdd4>\u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439</h1><div class="font-monospace mt-4" data-v-6b6afdd4><span class="border border-warning rounded-3 p-1 ps-2 pe-2 me-2" data-v-6b6afdd4>JavaScript</span><span class="border border-success rounded-3 p-1 ps-2 pe-2 me-2" data-v-6b6afdd4>Vue.js</span></div></div></div><div class="fade-in-top present-right d-none d-sm-flex align-items-center h-100 col-sm-6" data-v-6b6afdd4><img src="'+j+'" alt="mccrush apps - \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439" class="mb-5" data-v-6b6afdd4></div>',2),E=[V];function T(a,o){return c(),n("div",B,E)}var q=l(A,[["render",T],["__scopeId","data-v-6b6afdd4"]]);const D={components:{Navbar:P,Present:q}},G={class:"f1 row vh-100 m-0 p-0"};function H(a,o,s,r,t,e){const i=p("Navbar"),_=p("Present");return c(),n("div",G,[v(i),v(_)])}var J=l(D,[["render",H],["__scopeId","data-v-72381101"]]);const K=[{title:"",description:"\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u043E\u0432 \u0438 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439",alias:"",link:"#",type:""},{title:"",description:"\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\xAD\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u043E\u0432",alias:"",link:"#",type:""},{title:"",description:"\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439",alias:"",link:"#",type:""}];const M={props:{app:{type:Object}}},z={class:"col-12 col-sm-6 col-lg-4 text-start mt-4 ps-1 pe-1"},Q={class:"my-card d-block rounded shadow h-100"},R={class:"my-card-body rounded-top h-75 p-3"},U={class:"color-c"},W={class:"card-text color-c lh-sm"},X={class:"my-card-footer rounded-bottom text-center p-2"},Y={key:0,class:"color-c font-monospace"},Z={key:1,class:"color-c font-monospace"};function tt(a,o,s,r,t,e){return c(),n("div",z,[d("div",Q,[d("div",R,[d("h5",U,f(s.app.title),1),d("p",W,f(s.app.description),1)]),d("div",X,[s.app.alias?(c(),n("span",Y,f(s.app.alias),1)):(c(),n("span",Z,"\xA0"))])])])}var et=l(M,[["render",tt],["__scopeId","data-v-3d56ff0f"]]);const at={components:{Card:et},data(){return{services:K}}},b=a=>($("data-v-3d6906cb"),a=a(),x(),a),st={class:"f3"},ot={class:"container-960 row text-center m-0 m-auto ps-2 pt-5 pe-2 pb-5"},ct=b(()=>d("h3",{id:"services"},"\u0423\u0441\u043B\u0443\u0433\u0438",-1)),dt=b(()=>d("p",{class:"m-0"}," \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433: \u043D\u0430 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\xAD\u043D\u043E\u0439 \u043E\u0441\u043D\u043E\u0432\u0435 \u043E\u0442 7500 \u0440/\u043C\u0435\u0441\u044F\u0446, \u0441\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u043E\u0442 1000 \u0440/\u0447\u0430\u0441 ",-1)),nt={class:"col-12 m-0 p-0"},rt={class:"row m-0 p-0"};function it(a,o,s,r,t,e){const i=p("Card");return c(),n("div",st,[d("div",ot,[ct,dt,d("div",nt,[d("div",rt,[(c(!0),n(g,null,y(t.services,_=>(c(),k(i,{key:_.alias,app:_},null,8,["app"]))),128))])])])])}var lt=l(at,[["render",it],["__scopeId","data-v-3d6906cb"]]);const _t={components:{}},pt={class:"f5"},vt=m('<div class="container-960 row text-center m-0 m-auto ps-2 pt-5 pe-2 pb-5" data-v-564813dc><h3 id="contacts" data-v-564813dc>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</h3><div class="col-12 col-sm-4 col-md-4 p-2" data-v-564813dc><div class="rounded-top my-border-blue border-bottom-0 p-1" data-v-564813dc> Telegram </div><div class="rounded-bottom my-border-blue font-monospace p-1" data-v-564813dc><a class="link-git" href="https://t.me/mccrush" target="_blank" title="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C\u0435" data-v-564813dc>mccrush</a></div></div><div class="col-12 col-sm-4 col-md-4 p-2" data-v-564813dc><div class="rounded-top my-border-yellow border-bottom-0 p-1" data-v-564813dc> Email </div><div class="rounded-bottom my-border-yellow font-monospace p-1" data-v-564813dc><a class="link-git" href="mailto:mccrush@mail.ru" target="_blank" title="\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E" data-v-564813dc>mccrush@mail.ru</a></div></div><div class="col-12 col-sm-4 col-md-4 p-2" data-v-564813dc><div class="rounded-top my-border-gray border-bottom-0 p-1" data-v-564813dc>GitHub</div><div class="rounded-bottom my-border-gray font-monospace p-1" data-v-564813dc><a class="link-git" href="https://github.com/mccrush" target="_blank" title="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435" data-v-564813dc>mccrush</a></div></div></div>',1),ft=[vt];function mt(a,o,s,r,t,e){return c(),n("div",pt,ft)}var ut=l(_t,[["render",mt],["__scopeId","data-v-564813dc"]]);const bt={components:{F1:J,F3:lt,F5:ut}},ht={class:"container-fluid p-0"};function gt(a,o,s,r,t,e){const i=p("F1"),_=p("F3"),h=p("F5");return c(),n("div",ht,[v(i),v(_),v(h)])}var yt=l(bt,[["render",gt]]);let u;u||(u=F(yt).mount("#app"));
