(this["webpackJsonpshafi-ml"]=this["webpackJsonpshafi-ml"]||[]).push([[0],{32:function(e,t,a){e.exports=a(52)},37:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(29),c=(a(37),a(14)),i=a(15),o=a(17),s=a(16),m=a(18),u=a(3);var h=function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"Created by Shafi Rayhan."),l.a.createElement("p",null,"Copyright \xa9 ",(new Date).getFullYear()))};var p=function(){return l.a.createElement("main",{className:"home"},l.a.createElement("h1",null,"Hi! I am Shafi Rayhan."),l.a.createElement("p",null,"I am a Front-End Web Developer from Sylhet."),l.a.createElement("p",null,"I love to code with JavaScript, ReactJS, HTML & CSS."),l.a.createElement("p",null,"I am learning something new about web everyday."),l.a.createElement("a",{href:"mailto:rayhanshafi7@gmail.com",className:"button"},"CONTACT ME"))};var b=function(){return l.a.createElement("h1",null,"Contact")},d=a(12),f=a(23),E=a.n(f);E.a.initializeApp({apiKey:"AIzaSyDu-LWOaRleNlq74rPvO35T73eL5Oh-g2Y",authDomain:"shafi-ml-5a8db.firebaseapp.com",databaseURL:"https://shafi-ml-5a8db.firebaseio.com",projectId:"shafi-ml-5a8db",storageBucket:"shafi-ml-5a8db.appspot.com",messagingSenderId:"211836768789",appId:"1:211836768789:web:daa81c2fe3678962c6741c"});var v=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={posts:[],loaded:!1},n.fetchPosts=n.fetchPosts.bind(Object(d.a)(n)),n}return Object(i.a)(a,[{key:"fetchPosts",value:function(e){for(var t=e.val(),a=Object.keys(t).reverse(),n=[],l=0;l<a.length;l++){var r=a[l];n.push(t[r])}this.setState({posts:n,loaded:!0})}},{key:"componentDidMount",value:function(){E.a.database().ref("posts").on("value",this.fetchPosts)}},{key:"render",value:function(){return l.a.createElement("div",{className:"blog"},this.state.loaded?this.state.posts.map((function(e,t){return l.a.createElement("div",{className:"post",key:t},e.link?l.a.createElement("img",{src:e.link,alt:e.title}):null,l.a.createElement("h1",null,e.title),l.a.createElement("span",{className:"info"},e.time),l.a.createElement("p",null,e.post))})):l.a.createElement("h1",null,"BLOG POSTS LOADING..."))}}]),a}(l.a.Component),g=a(30),O=E.a.database().ref("posts"),y=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={title:"",link:"",post:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.title,n=t.link,l=t.post;O.push().set({title:a,link:n,post:l,time:Intl.DateTimeFormat("en-US",{dateStyle:"full"}).format(new Date)}),alert("POST CREATED \ud83c\udf89")}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.link,n=e.post;return l.a.createElement("main",{className:"create"},l.a.createElement("form",{autoComplete:"off"},l.a.createElement("label",{htmlFor:"title"},"Title:"),l.a.createElement("input",{type:"text",id:"title",value:t,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"link"},"Image URL:"),l.a.createElement("input",{type:"text",id:"link",value:a,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"post"},"Post:"),l.a.createElement("textarea",{id:"post",value:n,onChange:this.handleChange}),l.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"POST")))}}]),a}(l.a.Component),S=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(m.a,null,l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(m.b,{to:"/create"},"S"),"hafi"),l.a.createElement("nav",null,l.a.createElement(m.b,{to:"/"},"Home"),l.a.createElement(m.b,{to:"/blog"},"Blog"),l.a.createElement(m.b,{to:"/contact"},"Contact"))),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/"},l.a.createElement(p,null)),l.a.createElement(u.a,{path:"/blog"},l.a.createElement(v,null)),l.a.createElement(u.a,{path:"/contact"},l.a.createElement(b,null)),l.a.createElement(u.a,{path:"/create"},l.a.createElement(y,null)))),l.a.createElement(h,null))}}]),a}(l.a.Component);Object(r.render)(l.a.createElement(S,null),document.querySelector("#root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.558a9b16.chunk.js.map