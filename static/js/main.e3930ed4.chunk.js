(this.webpackJsonpartvitrage=this.webpackJsonpartvitrage||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"headingRu":"\u041e\u0431\u043e \u043c\u043d\u0435","headingEn":"About"}')},21:function(e){e.exports=JSON.parse('[{"id":"1","headingRu":"\u0413\u043b\u0430\u0432\u043d\u0430\u044f","headingEn":"Home","link":"","titleRu":"","titleEn":""},{"id":"2","headingRu":"\u041e\u0431\u043e \u043c\u043d\u0435","headingEn":"About","link":"About","titleRu":"\u041e\u0431\u043e \u043c\u043d\u0435","titleEn":"About"},{"id":"3","headingRu":"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435","headingEn":"Vitraj","link":"Vitraj","titleRu":"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435","titleEn":"Vitraj"},{"id":"4","headingRu":"\u0413\u0430\u043b\u043b\u0435\u0440\u0435\u044f","headingEn":"Gallery","link":"Gallery","titleRu":"\u041c\u043e\u0438 \u0440\u0430\u0431\u043e\u0442\u044b","titleEn":"My work"},{"id":"5","headingRu":"\u0412\u0438\u0434\u0435\u043e","headingEn":"Video","link":"Video","titleRu":"\u041c\u043b\u0438 \u0432\u0438\u0434\u0435\u043e","titleEn":"My video"},{"id":"6","headingRu":"\u0412\u0438\u0434\u0435\u043e\u0431\u043b\u043e\u0433","headingEn":"Videoblog","link":"Videoblog","titleRu":"\u041c\u043e\u0439 \u0432\u0438\u0434\u0435\u043e\u0431\u043b\u043e\u0433","titleEn":"My videoblog"},{"id":"7","headingRu":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b","headingEn":"Contact","link":"Contact","titleRu":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b","titleEn":"Contact"}]')},22:function(e,t,n){e.exports=n(33)},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(19),l=n.n(r),c=n(9),o=n(10),u=n(12),g=n(11),m=(n(27),n(1)),d=n(7);var E=function(e){var t=e.name,n=e.link;return i.a.createElement("li",null,i.a.createElement(d.b,{to:n},t))},h=function(){return i.a.createElement("h1",{style:{textAlign:"center"}},"HomePage")},s=n(13),p=function(e){var t=s.headingRu.heading;return console.log({heading:t}),"Ru"===e.data?t=s.headingRu:"En"===e.data&&(t=s.headingEn),i.a.createElement("h1",{style:{textAlign:"center"}},t)},f=function(){return i.a.createElement("h1",{style:{textAlign:"center"}},"VitrajPage")},R=function(){return i.a.createElement("h1",{style:{textAlign:"center"}},"GalleryPage")},b=function(){return i.a.createElement("h1",{style:{textAlign:"center"}},"VideoPage")},y=function(){return i.a.createElement("h1",{style:{textAlign:"center"}},"VideoblogPage")},v=function(){return i.a.createElement("h1",{style:{textAlign:"center"}},"ContactPage")},k=function(){return i.a.createElement("h1",{style:{textAlign:"center"}},"Sorry, page not found ",i.a.createElement("span",{role:"img","aria-label":"emoji"}))},j=function(e){Object(u.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={nameLang:"headingRu"},e.editLang=function(t){if(t){if("lang_Ru"===t.target.alt)return e.setState({nameLang:"Ru"});if("lang_En"===t.target.alt)return e.setState({nameLang:"En"})}},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.nameLang;return i.a.createElement(a.Fragment,null,i.a.createElement("header",null,i.a.createElement("div",null,i.a.createElement("img",{src:"../image/language/ru.png",alt:"lang_Ru",onClick:this.editLang}),i.a.createElement("img",{src:"../image/language/en.png",alt:"lang_En",onClick:this.editLang})),i.a.createElement("nav",null,i.a.createElement("ul",null,this.props.list.map((function(t){var n=t.id,a=t.headingRu,r=t.headingEn,l=t.link;return i.a.createElement(E,{key:n,name:"Ru"===e?a:r,link:l})}))))),i.a.createElement("div",{className:"header"}),i.a.createElement(m.c,null,i.a.createElement(m.a,{path:"/",exact:!0,component:h}),i.a.createElement(m.a,{path:"/Vitraj",component:f}),i.a.createElement(m.a,{path:"/Gallery",component:R}),i.a.createElement(m.a,{path:"/Video",component:b}),i.a.createElement(m.a,{path:"/Videoblog",component:y}),i.a.createElement(m.a,{path:"/Contact",component:v}),i.a.createElement(m.a,{path:"/About",render:function(t){return i.a.createElement(p,Object.assign({},t,{data:e}))}}),i.a.createElement(m.a,{component:k})))}}]),n}(a.Component),A=n(21),V=function(e){Object(u.a)(n,e);var t=Object(g.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement(j,{list:A})}}]),n}(a.Component);l.a.render(i.a.createElement(d.a,null,i.a.createElement(V,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.e3930ed4.chunk.js.map