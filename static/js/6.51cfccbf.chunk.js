(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[6],{257:function(e,t,n){e.exports=n.p+"static/media/profile_picture.918cf5ff.jpg"},294:function(e,t,n){"use strict";n.r(t);var a=n(37),o=n(38),i=n(41),l=n(39),c=n(40),s=n(0),r=n.n(s),u=n(257),m=n.n(u),d=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).selector=r.a.createRef(),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"onScroll",value:function(){var e=this.selector.current.getBoundingClientRect(),t=document.querySelector("#about-title .section-title-shadow"),n=document.querySelector("#about-title .section-title-glow"),a=document.querySelector("#about-title .section-title-text");e.top<=.3*window.innerHeight?(a.style.textShadow="0 0 20px #0571ff",a.style.color="white",t.style.opacity=1,n.style.opacity=.5):(a.style.textShadow="none",a.style.color="#4a4a4a",t.style.opacity=0,n.style.opacity=0)}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){e.onScroll()}))}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("scroll",(function(){e.onScroll()}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"about",ref:this.selector},r.a.createElement("div",{className:"about-container"},r.a.createElement("div",{className:"section-title",id:"about-title"},r.a.createElement("div",{className:"section-title-glow"}),r.a.createElement("h1",{className:"section-title-shadow"},"About"),r.a.createElement("h1",{className:"section-title-text"},"About")),r.a.createElement("div",{className:"about-body"},r.a.createElement("img",{src:m.a,alt:"Profile"}),r.a.createElement("div",{className:"about-description"},r.a.createElement("p",null,"Hello! I'm Jeffrey, a computer scientist based in Princeton, New Jersey. I am currently an undergraduate at Rutgers University. I enjoy designing and implementing complex applications that tackle all sorts of technological challenges. My primary interests are software engineering, web development, and machine learning. My goal is to use computer science to bring my ideas to life and create products that will improve the lives of others.")))))}}]),t}(s.Component);t.default=d}}]);
//# sourceMappingURL=6.51cfccbf.chunk.js.map