(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[5],{269:function(e,t,a){e.exports=a.p+"static/media/dio.43d94aaf.png"},270:function(e,t,a){e.exports=a.p+"static/media/word_of_god.2e66035c.png"},271:function(e,t,a){e.exports=a.p+"static/media/rain_alert.32f7f406.png"},272:function(e,t,a){e.exports=a.p+"static/media/ivi_lab.ed7e4c58.jpg"},273:function(e,t,a){e.exports=a.p+"static/media/dio_game_1.de69f68b.JPG"},274:function(e,t,a){e.exports=a.p+"static/media/dio_game_2.3861869c.JPG"},275:function(e,t,a){e.exports=a.p+"static/media/wog_game_1.6896b4b6.JPG"},276:function(e,t,a){e.exports=a.p+"static/media/wog_game_2.8ba8e770.JPG"},277:function(e,t,a){e.exports=a.p+"static/media/rain_alert_1.bbc94f3d.JPG"},278:function(e,t,a){e.exports=a.p+"static/media/rain_alert_2.8d19be0d.JPG"},279:function(e,t,a){e.exports=a.p+"static/media/traffic_model.4a2d93fd.JPG"},280:function(e,t,a){e.exports=a.p+"static/media/decision_tree.72e2316c.JPG"},297:function(e,t,a){"use strict";a.r(t);var o=a(37),n=a(38),i=a(41),r=a(39),s=a(40),c=a(0),l=a.n(c),d=a(255),m=a.n(d),p=a(269),u=a.n(p),h=a(270),f=a.n(h),g=a(271),v=a.n(g),b=a(272),y=a.n(b),E=a(273),w=a.n(E),j=a(274),N=a.n(j),k=a(275),x=a.n(k),P=a(276),G=a.n(P),_=a(277),A=a.n(_),S=a(278),T=a.n(S),J=a(279),D=a.n(J),I=a(280),B=a.n(I),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).closeModal=function(){a.setState((function(){return{modalOpen:!1}}))},a.state={modalOpen:!1,currentProject:0,projects:[{caption:"Jojo Game",img:u.a,id:"jojo-game",header:"Dio's Bizarre Adventure",tags:["Javascript","Game Development"],code:"https://github.com/jepher/jojo-game",project:null,body:l.a.createElement("div",{className:"modal-body-description"},l.a.createElement("p",null,"Inspired by the anime Jojo's Bizarre Adventure, Dio's Bizarre Adventure is a top down, 2D arcade game focused on the villain of the show. The objective is simple: defeat as many enemies before you die, and the more enemies you defeat, the higher your score."),l.a.createElement("img",{src:w.a,alt:"Game Demo 1"}),l.a.createElement("p",null,"The game features a wide variety of enemies and even has occasional boss fights, and the player has several special abilities they can use to help them defeat these enemies."),l.a.createElement("img",{src:N.a,alt:"Game Demo 2"}),l.a.createElement("p",null,"This game was created in Javascript using the Phaser 3 library. I used sprites, images, and audio clips I found online for the assets of this game."))},{caption:"Word of God",img:f.a,id:"wog-game",header:"Word of God",tags:["Javascript","Game Development"],code:"https://github.com/jepher/word-of-god",project:null,body:l.a.createElement("div",{className:"modal-body-description"},l.a.createElement("p",null,"Violence sucks. That's why as head priest of the God of Peace, you must set out to fight evil with love. Word of God is a 2D adventure game where the player must use their powers to convert enemies into disciples of peace."),l.a.createElement("img",{src:x.a,alt:"Game Demo 1"}),l.a.createElement("p",null,"The game features three levels and a variety of different NPCs. Gather enough allies to defeat the final boss."),l.a.createElement("img",{src:G.a,alt:"Game Demo 2"}),l.a.createElement("p",null,"This game was created in Javascript using the Phaser 3 library. The maps were created using MapMaker. I used sprites, images, and audio clips I found online for the assets of this game."))},{caption:"Rain Alert",img:v.a,id:"rain-alert",header:"Rain Alert",tags:["Java","Android Studio","App Development"],code:"https://github.com/jepher/rain-alert",project:null,body:l.a.createElement("div",{className:"modal-body-description"},l.a.createElement("p",null,"Rain Alert is a simple app that tells you if it will rain later in the day. This was my first app and I used this project to get my first look into app development."),l.a.createElement("img",{src:A.a,alt:"App Demo 1"}),l.a.createElement("p",null,"The app sends scheduled alerts that reports and quantifies the precipitation for the day based on the user's current location."),l.a.createElement("img",{src:T.a,alt:"App Demo 2"}),l.a.createElement("p",null,"This app was made for Android using Android Studio. It uses the free AccuWeather API to get weather data."))},{caption:"Traffic Behavior Model",img:y.a,id:"traffic-simulator",header:"Traffic Behavior Model",tags:["C#","Unity","AI"],code:"https://github.com/jepher/traffic-behavior-model",project:null,body:l.a.createElement("div",{className:"modal-body-description"},l.a.createElement("p",null,"I worked with a post-doctorate researcher in Rutger's IVI Lab to created a 3D traffic behavior model in Unity to simulate driver-driver and driver-pedestrian interactions, specifically pathfinding and collision avoidance behavior."),l.a.createElement("img",{src:D.a,alt:"Traffic Model"}),l.a.createElement("figcaption",null,"Vehicle agents reacting to traffic light"),l.a.createElement("p",null,"I designed a behavior tree based on a decision tree in one of IVI's research papers that describes how a driver that is following another car should behave. The model will be used to study abnormal behavior such as distracted and impaired driving."),l.a.createElement("img",{src:B.a,alt:"Behavior Tree"}),l.a.createElement("figcaption",null,"Behavior tree that controls agent behavior made with xNode"))}]},a.selector=l.a.createRef(),a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"onScroll",value:function(){var e=this.selector.current.getBoundingClientRect(),t=document.querySelectorAll(".spotlight"),a=document.querySelectorAll(".beam-container"),o=document.querySelector("#projects-title .section-title-shadow"),n=document.querySelector("#projects-title .section-title-glow"),i=document.querySelector("#projects-title .section-title-text");e.top<=.3*window.innerHeight?(t.forEach((function(e){e.style.background="white",e.style.boxShadow="0px 0px 35px 50px rgba(255, 255, 255, 0.4)"})),a.forEach((function(e){e.style.opacity=1})),i.style.textShadow="0 0 20px #ff005b",i.style.color="white",o.style.opacity=1,n.style.opacity=.5):(t.forEach((function(e){e.style.background="#4a4a4a",e.style.boxShadow="none"})),a.forEach((function(e){e.style.opacity=0})),i.style.textShadow="none",i.style.color="#4a4a4a",o.style.opacity=0,n.style.opacity=0);var r=document.querySelector(".spotlight-container");window.innerWidth<800&&e.top<0&&e.bottom>.6*window.innerHeight?r.style.top=50+-100*e.top/window.innerHeight+"vh":window.innerWidth>=800&&(r.style.bottom="7%")}},{key:"addTags",value:function(e){var t=[];return e.forEach((function(e){t.push(l.a.createElement("div",{className:"project-tag",key:e},e))})),t}},{key:"renderProjectBtns",value:function(){for(var e=[],t=0;t<this.state.projects.length;t++){var a=this.state.projects[t];e.push(l.a.createElement("div",{className:"project-container",key:a.caption},l.a.createElement("button",{className:"project-btn","data-id":t},l.a.createElement("img",{className:"project-img-fluid",src:a.img,alt:a.caption}),l.a.createElement("div",{className:"project-caption"},a.caption))))}return e}},{key:"renderModalBtns",value:function(e){var t=[],a=null==e.code?"Code unavailable":"View code",o=null==e.code?" unavailable":"";t.push(l.a.createElement("button",{className:"modal-btn"+o,key:"view-source-btn"},l.a.createElement("a",{href:e.code,rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fas fa-code"})),l.a.createElement("div",{className:"btn-caption"},a)));var n=null==e.project?"Project unavailable":"View project",i=null==e.project?" unavailable":"";return t.push(l.a.createElement("button",{className:"modal-btn"+i,key:"view-project-btn"},l.a.createElement("a",{href:e.project,rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fas fa-external-link-alt"})),l.a.createElement("div",{className:"btn-caption"},n))),t}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){e.onScroll()})),document.querySelectorAll(".project-btn").forEach((function(t){t.addEventListener("click",(function(){e.setState((function(){return{modalOpen:!0,currentProject:t.getAttribute("data-id")}}))}))}))}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("scroll",(function(){e.onScroll()}))}},{key:"render",value:function(){var e=this,t=this.state.projects[this.state.currentProject];return l.a.createElement("div",{className:"projects",id:"projects",ref:this.selector},l.a.createElement("div",{className:"section-title",id:"projects-title"},l.a.createElement("div",{className:"section-title-glow"}),l.a.createElement("h1",{className:"section-title-shadow"},"Projects"),l.a.createElement("h1",{className:"section-title-text"},"Projects")),l.a.createElement("div",{className:"projects-grid"},this.renderProjectBtns()),l.a.createElement(m.a,{id:t.id,isOpen:this.state.modalOpen,closeTimeoutMS:500,onRequestClose:function(){return e.closeModal()},style:{overlay:{backgroundColor:"rgba(0, 0, 15, 0.5)"},content:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"80vh"}}},l.a.createElement("div",{className:"modal-header"},l.a.createElement("button",{className:"modal-close-btn",onClick:function(){e.closeModal()}},"\xd7"),l.a.createElement("h1",null,t.header),l.a.createElement("div",{className:"project-info"},l.a.createElement("div",{className:"tag-container"},this.addTags(t.tags)),l.a.createElement("div",{className:"modal-btn-container"},this.renderModalBtns(t)))),l.a.createElement("div",{className:"modal-body"},t.body)),l.a.createElement("div",{className:"spotlight-container"},l.a.createElement("div",{className:"spotlight",style:{transform:"rotate(30deg)"}},l.a.createElement("div",{className:"beam-container"},l.a.createElement("div",{className:"spotlight-beam-1"}),l.a.createElement("div",{className:"spotlight-beam-2"}),l.a.createElement("div",{className:"spotlight-beam-3"}))),l.a.createElement("div",{className:"spotlight",style:{transform:"rotate(-30deg)"}},l.a.createElement("div",{className:"beam-container"},l.a.createElement("div",{className:"spotlight-beam-1"}),l.a.createElement("div",{className:"spotlight-beam-2"}),l.a.createElement("div",{className:"spotlight-beam-3"})))))}}]),t}(c.Component);t.default=M}}]);
//# sourceMappingURL=5.0894af44.chunk.js.map