(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[8],{253:function(e,t,n){"use strict";var a=n(37),l=n(38),c=n(41),r=n(39),o=n(40),i=n(0),u=n.n(i),s=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"onClick",value:function(e,t){e.preventDefault(),document.querySelector(t.getAttribute("href")).scrollIntoView({behavior:"smooth"})}},{key:"componentDidMount",value:function(){var e=this;document.querySelectorAll(".logo-link").forEach((function(t){t.addEventListener("click",(function(n){return e.onClick(n,t)}))}))}},{key:"render",value:function(){return u.a.createElement("button",{className:"logo-btn"},u.a.createElement("div",{className:"logo-outline"},u.a.createElement("div",{className:"logo-side left"}),u.a.createElement("div",{className:"logo-side right"})),u.a.createElement("div",{className:"logo-side left"}),u.a.createElement("a",{className:"logo-link",href:"#landing"},"J"),u.a.createElement("div",{className:"logo-side right"}))}}]),t}(i.Component);t.a=s},294:function(e,t,n){"use strict";n.r(t);var a=n(37),l=n(38),c=n(41),r=n(39),o=n(40),i=n(0),u=n.n(i),s=n(253),m=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"onScroll",value:function(){var e=document.getElementById("navbar"),t=window.scrollY;e.style.opacity=0===t?0:1}},{key:"onClick",value:function(e,t){e.preventDefault(),document.querySelector(t.getAttribute("href")).scrollIntoView({behavior:"smooth"})}},{key:"componentDidMount",value:function(){var e=this;document.getElementById("navbar").style.opacity=0,document.querySelectorAll(".navbar-link").forEach((function(t){t.addEventListener("click",(function(n){return e.onClick(n,t)}))})),window.addEventListener("scroll",(function(){e.onScroll()}))}},{key:"render",value:function(){return u.a.createElement("div",{className:"navbar",id:"navbar"},u.a.createElement(s.a,null),u.a.createElement("nav",{className:"navbar-link-container"},u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("a",{className:"navbar-link",href:"#about"},"About")),u.a.createElement("li",null,u.a.createElement("a",{className:"navbar-link",href:"#projects"},"My Work")),u.a.createElement("li",null,u.a.createElement("a",{className:"navbar-link",href:"#resume"},"Resume")),u.a.createElement("li",null,u.a.createElement("a",{className:"navbar-link",href:"#contact"},"Contact")))))}}]),t}(i.Component);t.default=m}}]);
//# sourceMappingURL=8.7dd7837f.chunk.js.map