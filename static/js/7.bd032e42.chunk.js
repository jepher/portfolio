(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[7],{253:function(e,t,n){"use strict";var a=n(37),r=n(38),l=n(41),c=n(39),o=n(40),i=n(0),s=n.n(i),u=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"onClick",value:function(e,t){e.preventDefault(),document.querySelector(t.getAttribute("href")).scrollIntoView({behavior:"smooth"})}},{key:"componentDidMount",value:function(){var e=this;document.querySelectorAll(".logo-link").forEach((function(t){t.addEventListener("click",(function(n){return e.onClick(n,t)}))}))}},{key:"render",value:function(){return s.a.createElement("button",{className:"logo-btn"},s.a.createElement("div",{className:"logo-outline"},s.a.createElement("div",{className:"logo-side left"}),s.a.createElement("div",{className:"logo-side right"})),s.a.createElement("div",{className:"logo-side left"}),s.a.createElement("a",{className:"logo-link",href:"#landing"},"J"),s.a.createElement("div",{className:"logo-side right"}))}}]),t}(i.Component);t.a=u},295:function(e,t,n){"use strict";n.r(t);var a=n(37),r=n(38),l=n(41),c=n(39),o=n(40),i=n(0),s=n.n(i),u=n(253),m=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={drawerOpen:!1},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"toggleDrawer",value:function(){var e=document.querySelector(".menu-btn"),t=document.querySelector(".drawer-link-container");this.state.drawerOpen?(e.classList.remove("open"),t.classList.remove("open")):(e.classList.add("open"),t.classList.add("open"))}},{key:"onClick",value:function(e){document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth"}),this.toggleDrawer(),this.setState((function(){return{drawerOpen:!1}}))}},{key:"componentDidMount",value:function(){var e=this;document.querySelector(".menu-btn").addEventListener("click",(function(){e.toggleDrawer(),e.setState((function(){return{drawerOpen:!e.state.drawerOpen}}))})),document.querySelectorAll(".drawer-link-container a").forEach((function(t){t.addEventListener("click",(function(n){n.preventDefault(),e.onClick(t)}))}))}},{key:"render",value:function(){return s.a.createElement("nav",{className:"drawer"},s.a.createElement(u.a,null),s.a.createElement("button",{className:"menu-btn"},s.a.createElement("div",{className:"menu-btn-burger"})),s.a.createElement("ul",{className:"drawer-link-container"},s.a.createElement("li",null,s.a.createElement("a",{className:"drawer-link",href:"#about"},"About")),s.a.createElement("li",null,s.a.createElement("a",{className:"drawer-link",href:"#projects"},"My Work")),s.a.createElement("li",null,s.a.createElement("a",{className:"drawer-link",href:"#resume"},"Resume")),s.a.createElement("li",null,s.a.createElement("a",{className:"drawer-link",href:"#contact"},"Contact"))))}}]),t}(i.Component);t.default=m}}]);
//# sourceMappingURL=7.bd032e42.chunk.js.map