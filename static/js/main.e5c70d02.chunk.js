(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(e,t,a){e.exports={affairsBlock:"Affairs_affairsBlock__1L5U7",btn:"Affairs_btn__1EheS",btnRow:"Affairs_btnRow__kZ8tr",textRow:"Affairs_textRow__2W8bj",affair:"Affairs_affair__1fI0z",constRow:"Affairs_constRow__YOnEg",btnDelete:"Affairs_btnDelete__-eBtg"}},,,,function(e,t,a){e.exports={post:"TelegramMessage_post__WpGtN",avatarIcon:"TelegramMessage_avatarIcon__KtoSU",message:"TelegramMessage_message__3g7xr",messageBlock:"TelegramMessage_messageBlock__2D459",nameOfWriter:"TelegramMessage_nameOfWriter__2eTM4",textMessage:"TelegramMessage_textMessage__2ilGs",sentTime:"TelegramMessage_sentTime__3V0W9"}},,,,,function(e,t,a){e.exports={Drawer:"Drawer_Drawer__sRKTi",close:"Drawer_close__ErSpZ",active:"Drawer_active__3x8lE"}},function(e,t,a){e.exports={body:"MyInitialsOutput_body__SV5_p",MyFullName:"MyInitialsOutput_MyFullName__AclR1",text:"MyInitialsOutput_text__1cOnE"}},,function(e,t,a){e.exports={HelloName:"HelloName_HelloName__2G2He",count:"HelloName_count__20DyA"}},function(e,t,a){e.exports={InputNya:"InputNya_InputNya__P0t5W",errorMessage:"InputNya_errorMessage__xhVFO"}},,,,function(e,t,a){e.exports={MenuToggle:"MenuToggle_MenuToggle__3Tyj5",open:"MenuToggle_open__xDXgD"}},,,,,function(e,t,a){e.exports={PreJunior:"PreJunior_PreJunior__1_4U2"}},function(e,t,a){e.exports={ButtonNya:"ButtonNya_ButtonNya__2WIvl",primary:"ButtonNya_primary__3lBKD"}},function(e,t,a){e.exports={Junior:"Junior_Junior__L1HUy"}},function(e,t,a){e.exports={EditableSpan:"EditableSpan_EditableSpan__1W869"}},function(e,t,a){e.exports={JuniorPlus:"JuniorPlus_JuniorPlus__v3TtS"}},function(e,t,a){e.exports={Layout:"Layout_Layout__2Q7IO"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__2rijp"}},,function(e,t,a){e.exports={HomeScreens:"HomeScreen_HomeScreens__3slBB"}},,,function(e,t,a){e.exports=a(47)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),l=a.n(o),c=(a(40),a(41),a(24)),i=a.n(c),s=a(5),u=a(2),m=a.n(u);var f=function(e){var t=e.affairs.map((function(t){return r.a.createElement("li",{className:m.a.textRow,key:t.id},r.a.createElement("span",{className:m.a.affair}," ",r.a.createElement("span",{className:m.a.constRow},"Name: ")," ",t.name),r.a.createElement("span",{className:m.a.affair}," ",r.a.createElement("span",{className:m.a.constRow},"Priority:")," ",t.priority),r.a.createElement("button",{className:m.a.btnDelete,onClick:function(){return e.removeAffair(t.id)}},"x"))}));return r.a.createElement("div",null,r.a.createElement("ul",null,t),r.a.createElement("div",{className:m.a.btnRow},r.a.createElement("button",{className:m.a.btn,onClick:function(){return e.changeFilter("all")}},"ALL"),r.a.createElement("button",{className:m.a.btn,onClick:function(){return e.changeFilter("high")}},"HIGH"),r.a.createElement("button",{className:m.a.btn,onClick:function(){return e.changeFilter("middle")}},"MIDDLE"),r.a.createElement("button",{className:m.a.btn,onClick:function(){return e.changeFilter("low")}},"LOW")))};var _=function(){var e=Object(n.useState)([{id:1,name:"Studying",priority:" high "},{id:2,name:"Relaxing",priority:" middle "},{id:3,name:"Working",priority:" middle "},{id:4,name:"Playing",priority:" low "}]),t=Object(s.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)("all"),c=Object(s.a)(l,2),i=c[0],u=c[1],_=a;return"high"===i&&(_=a.filter((function(e){return" high "===e.priority}))),"middle"===i&&(_=a.filter((function(e){return" middle "===e.priority}))),"low"===i&&(_=a.filter((function(e){return" low "===e.priority}))),"all"===i&&(_=a.filter((function(e){return a}))),r.a.createElement("div",{className:m.a.affairsBlock},r.a.createElement(f,{affairs:_,removeAffair:function(e){var t=a.filter((function(t){return t.id!==e}));o(t)},changeFilter:function(e){u(e)}}))},p=a(6),E=a.n(p),g=function(){return r.a.createElement("img",{className:E.a.avatarIcon,src:"https://avatarfiles.alphacoders.com/855/85557.png",alt:"avatar"})},d=function(e){var t=(new Date).toLocaleTimeString();return r.a.createElement("div",{className:E.a.message},r.a.createElement("div",{className:E.a.nameOfWriter},e.name),r.a.createElement("div",{className:E.a.textMessage},e.text),r.a.createElement("div",{className:E.a.sentTime},t))},v=function(){return r.a.createElement("div",{className:E.a.post},r.a.createElement("div",{className:E.a.messageBlock},r.a.createElement(g,null),r.a.createElement(d,{name:"Dmitry",text:"Hi, how'r u doing? One of the most common problems that I run into when using Redux is trying to figure out why an action is not being captured by a reducer. For someone just getting starting with Redux, debugging this issue can be especially overwhelming because of how Redux manages data flow. So before you start pouring over configuration code, or the logic contained in your action creators and reducers, please, make sure your action types are defined and spelled correctly."})))},b=a(33),y=a(14),N=a.n(y),h=a(49),x=a(25),O=a.n(x),w=function(e){var t=Object.assign({},e);return r.a.createElement("button",Object.assign({},t,{className:O.a.ButtonNya}))},k=a(34),j=a(15),S=a.n(j),J=function(e){var t=e.onEnter,a=e.error,n=Object(k.a)(e,["onEnter","error"]);return r.a.createElement("div",null,r.a.createElement("input",Object.assign({className:S.a.InputNya},n,{type:"text",onKeyPress:function(e){return 13===e.charCode&&t()}})),r.a.createElement("br",null),r.a.createElement("span",{className:S.a.errorMessage},a))};var M=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)([]),c=Object(s.a)(l,2),i=c[0],u=c[1],m=Object(n.useState)(""),f=Object(s.a)(m,2),_=f[0],p=f[1],E=i.length,g=function(){""!==a.trim()?(alert("Hello, "+a),function(e){var t={id:Object(h.a)(),name:e};u([t].concat(Object(b.a)(i)))}(a),o("")):(p("Field is required!"),o(""))};return r.a.createElement("div",{className:N.a.HelloName},r.a.createElement(J,{onEnter:g,placeholder:"Enter your name here",value:a,onChange:function(e){o(e.currentTarget.value),p("")},error:_}),r.a.createElement(w,{onClick:g},"+"),r.a.createElement("span",{className:N.a.count},"Names amount:",r.a.createElement("br",null),E))};function T(){alert("hello")}var B=function(){return r.a.createElement("div",{className:i.a.PreJunior},r.a.createElement("h1",null,"The result of my homework \u2116 1-4"),r.a.createElement(v,null),r.a.createElement(_,null),r.a.createElement(M,null),r.a.createElement(J,{onEnter:T}),r.a.createElement(w,null,"Hi"))},D=a(26),C=a.n(D),I=a(27),P=a.n(I);var H=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),o=a[0],l=a[1],c=function(){l(!1)};return r.a.createElement("div",null,o?r.a.createElement(J,{onEnter:c,onBlur:c,autoFocus:!0}):r.a.createElement("span",{className:P.a.EditableSpan,onDoubleClick:function(){l(!0)}},e.title),r.a.createElement(w,{onClick:function(){!function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}("test",{x:e.title,y:22})}},"Set title"),r.a.createElement(w,{onClick:function(){var e=function(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}("test",{x:"",y:0});alert(Object.values(e).join(" ")),console.log(e)}},"Get title"))};var R=function(){return r.a.createElement("div",{className:C.a.Junior},r.a.createElement("h1",null,"Junior"),r.a.createElement(H,{title:"Hello"}))},F=a(28),W=a.n(F);var A=function(){return r.a.createElement("div",{className:W.a.JuniorPlus},r.a.createElement("h1",null,"JuniorPlus"))},L=a(1),G=a(20),K=a(29),U=a.n(K),V=a(11),Z=a.n(V),q=a(30),z=a.n(q);var Q=function(e){return r.a.createElement("div",{className:z.a.Backdrop,onClick:e.onClick})},X=a(8),Y=[{to:"/",label:"Home",exact:!0},{to:"/PreJunior",label:"PreJunior",exact:!1},{to:"/Junior",label:"Junior",exact:!1},{to:"/JuniorPlus",label:"JuniorPlus",exact:!1}];var $=function(e){var t=function(){e.onClose()},a=[Z.a.Drawer];return e.isOpen||a.push(Z.a.close),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:a.join(" ")},r.a.createElement("ul",null,Y.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(X.b,{to:e.to,exact:e.exact,activeClassName:Z.a.active,onClick:t},e.label))})))),e.isOpen?r.a.createElement(Q,{onClick:e.onClose}):null)},ee=a(19),te=a.n(ee);var ae=function(e){var t=[te.a.MenuToggle,"fa"];return e.isOpen?(t.push("fa-times"),t.push(te.a.open)):t.push("fa-bars"),r.a.createElement("i",{className:t.join(" "),onClick:e.onToggle})};var ne=function(e){var t=Object.assign({},e),a=Object(n.useState)({menu:!1}),o=Object(s.a)(a,2),l=o[0],c=o[1];return r.a.createElement("div",{className:U.a.Layout},r.a.createElement($,{isOpen:l.menu,onClose:function(){l.menu=!1,c(Object(G.a)({},l))}}),r.a.createElement(ae,{onToggle:function(){l.menu=!l.menu,c(Object(G.a)({},l))},isOpen:l.menu}),r.a.createElement("main",t,t.children))},re=a(32),oe=a.n(re),le=a(12),ce=a.n(le),ie=function(){return r.a.createElement("div",{className:ce.a.MyFullName},r.a.createElement(se,{text:"Demid"}),r.a.createElement(se,{text:"Dmitry"}),r.a.createElement(se,{text:"Viktorovich"}))},se=function(e){return r.a.createElement("div",{className:ce.a.text},e.text)},ue=function(){return r.a.createElement("div",{className:ce.a.body},r.a.createElement("img",{src:"https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png",alt:"avatar"}),r.a.createElement(ie,null))};var me=function(){return r.a.createElement("div",{className:oe.a.HomeScreens},r.a.createElement(ue,null))};var fe=function(){return r.a.createElement(ne,null,r.a.createElement(L.c,null,r.a.createElement(L.a,{path:"/PreJunior",component:B}),r.a.createElement(L.a,{path:"/Junior",component:R}),r.a.createElement(L.a,{path:"/JuniorPlus",component:A}),r.a.createElement(L.a,{path:"/",component:me})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _e=r.a.createElement(X.a,null,r.a.createElement(fe,null));l.a.render(r.a.createElement(r.a.StrictMode,null,_e),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.e5c70d02.chunk.js.map