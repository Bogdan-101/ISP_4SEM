(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(14),i=n.n(s),r=(n(37),n(8)),o=n(2),d=(n(38),n(4)),m=n.p+"static/media/anon.15e7a778.jpg",l=(n(39),n(11)),b=n.n(l),j=n(0),u=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/board/"}).then((function(e){a(e.data)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{className:"welcome",children:[Object(j.jsx)("div",{className:"welcome__img",children:Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"logo of dvach"})}),Object(j.jsx)("span",{className:"welcome__friend",children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c. \u0421\u043d\u043e\u0432\u0430."})]}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsxs)("article",{className:"greeting content__block",children:["\u0414\u0432\u0430.\u0447 - \u044d\u0442\u043e \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0444\u043e\u0440\u0443\u043c\u043e\u0432, \u0433\u0434\u0435 \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0449\u0430\u0442\u044c\u0441\u044f \u0431\u044b\u0441\u0442\u0440\u043e \u0438 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e, \u0433\u0434\u0435 \u043b\u044e\u0431\u0430\u044f \u0442\u043e\u0447\u043a\u0430 \u0437\u0440\u0435\u043d\u0438\u044f \u0438\u043c\u0435\u0435\u0442 \u043f\u0440\u0430\u0432\u043e \u043d\u0430 \u0436\u0438\u0437\u043d\u044c. \u0417\u0434\u0435\u0441\u044c \u043d\u0435\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435 \u043d\u0443\u0436\u043d\u043e, \u0445\u043e\u0442\u044f \u044d\u0442\u043e \u043d\u0435 \u0438\u0437\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u0430\u0441 \u043e\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u0430. \u0412\u0441\u0435 \u0444\u043e\u0440\u0443\u043c\u044b (\u043a\u0440\u043e\u043c\u0435",Object(j.jsx)(r.b,{to:{pathname:"/board/b",fromDashboard:!1},children:" B"}),"\u0440\u0435\u0434\u0430), \u0430 \u0438\u0445 \u0441\u043f\u0438\u0441\u043e\u043a \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0441\u043d\u0438\u0437\u0443, \u0438\u043c\u0435\u044e\u0442 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0447\u0451\u0442\u043a\u043e \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u0443\u044e \u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0443. \u0421\u043b\u043e\u0432\u043e\u043c, \u0432\u0441\u0451, \u0447\u0442\u043e \u043d\u0435 \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0432\u0437\u044f\u0442\u043e\u0433\u043e \u0444\u043e\u0440\u0443\u043c\u0430 \u0438 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043a \u0435\u0433\u043e \u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0435, \u043d\u0430 \u044d\u0442\u043e\u043c \u0444\u043e\u0440\u0443\u043c\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e."]}),Object(j.jsx)("article",{className:"content__block",children:Object(j.jsx)("img",{src:m,alt:"anon",className:"content__anon"})}),Object(j.jsx)("article",{className:"content__block content__threads",children:n?n.map((function(e){return Object(j.jsx)("div",{className:"thread",children:Object(j.jsx)(r.b,{to:{pathname:"/board/".concat(e.id),fromDashboard:!1},className:"thread__link",children:e.name},e.id)})})):Object(j.jsx)("h3",{children:"Loading..."})})]})]})},h=(n(64),n(65),n(66),function(e){var t=e.id,n=Object(c.useState)(""),a=Object(d.a)(n,2),s=a[0],i=a[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={content:s,id:t};console.log("post submitted, data is",n),fetch("http://127.0.0.1:8000/api/comment/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json})).then((function(e){console.log(e,"complete")})).catch((function(e){alert(e)}))},className:"form",children:[Object(j.jsx)("textarea",{value:s,onChange:function(e){i(e.target.value)},placeholder:"Your comment here...",className:"form__textarea"}),Object(j.jsx)("input",{type:"submit",value:"Submit",className:"form__submit"})]})}),x=(n(67),function(){return Object(j.jsx)("div",{className:"thread__noComment",children:"there are no comments yet"})}),f=(n(68),function(e){var t=e.comments,n=e.allComments,c=e.id;return Object(j.jsxs)("div",{className:"thread__comments",children:[t.map((function(e){return Object(j.jsxs)("div",{className:"thread__comment",children:[Object(j.jsxs)("div",{className:"thread__detail",children:["Anon ",new Date(e.pub_date).toLocaleString()]}),Object(j.jsx)("p",{className:"thread__text",children:e.content})]})})),n&&n.length!==t.length&&Object(j.jsx)("div",{className:"thread__allButton",children:Object(j.jsx)(r.b,{to:{pathname:"/thread/".concat(c),fromDashboard:!1},className:"thread__allComments",children:"view all comments"})})]})}),O=(n(69),n(32)),p=n.n(O),E=function(e){return Object(j.jsx)(p.a,{children:Object(j.jsx)("div",{className:"draggable",children:e.render()})})},N=function(e){var t=e.title,n=e.id,a=e.content,s=e.number,i=e.date,r=e.comments,o=e.allComments,m=Object(c.useState)(!1),l=Object(d.a)(m,2),b=l[0],u=l[1];return Object(j.jsxs)("div",{className:"thread",children:[Object(j.jsxs)("div",{className:"thread__main",children:[Object(j.jsxs)("div",{className:"thread__detail",children:["Anon ",i," \u2116",s]}),Object(j.jsx)("h3",{className:"thread__title",children:t}),Object(j.jsx)("p",{className:"thread__text",children:a}),Object(j.jsx)("button",{onClick:function(){u(!b)},className:"thread__allComments thread__allButton",children:"comment"}),b&&Object(j.jsx)(E,{render:function(){return Object(j.jsx)(h,{id:n})}})]}),Object(j.jsx)("div",{className:"thread__comments",children:0!==r.length||b?Object(j.jsx)(f,{comments:r,allComments:o,id:n}):Object(j.jsx)(x,{})})]})},g=(n(74),function(e){var t=e.boardName,n=Object(c.useState)(""),a=Object(d.a)(n,2),s=a[0],i=a[1],r=Object(c.useState)(""),o=Object(d.a)(r,2),m=o[0],l=o[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={board_name:t,title:s,content:m};console.log("post submitted, data is",n),fetch("http://127.0.0.1:8000/api/thread/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json})).then((function(e){console.log(e,"complete")})).catch((function(e){alert(e)}))},className:"form",children:[Object(j.jsx)("input",{value:s,onChange:function(e){i(e.target.value)},placeholder:"Title",className:"form__input"}),Object(j.jsx)("textarea",{value:m,onChange:function(e){l(e.target.value)},placeholder:"Your text here...",className:"form__textarea"}),Object(j.jsx)("input",{type:"submit",value:"Submit",className:"form__submit"})]})}),v=(n(75),function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsx)(r.b,{to:{pathname:"/",fromDashboard:!1},className:"header__link",children:"Main page"})})}),S=function(e){var t=e.match,n=Object(c.useState)([]),a=Object(d.a)(n,2),s=a[0],i=a[1],o=Object(c.useState)({posts:[]}),m=Object(d.a)(o,2),l=m[0],u=m[1],h=t.params.id,x=Object(c.useState)(!1),f=Object(d.a)(x,2),O=f[0],p=f[1];return Object(c.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(h,"/")}).then((function(e){var t=e.data;t.posts.sort((function(e,t){return t.id-e.id})),t.posts.map((function(e){e.comments.sort((function(e,t){return t.id-e.id}))})),u(t)}))}),[h]),Object(c.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/board/"}).then((function(e){i(e.data)}))}),[]),Object(j.jsxs)("div",{className:"board",children:[Object(j.jsx)(v,{}),Object(j.jsxs)("div",{className:"board__header",children:[Object(j.jsx)("h1",{className:"header__boardname",children:l?l.name:"Loading"}),Object(j.jsxs)("div",{className:"board__create",children:[Object(j.jsx)("span",{onClick:function(){p(!O)},children:O?"Close form":"Create thread"}),O&&Object(j.jsx)(g,{boardName:l.name})]})]}),Object(j.jsxs)("div",{className:"board__wrapper",children:[Object(j.jsx)("aside",{className:"board__navigation",children:s.map((function(e){return Object(j.jsx)(r.b,{to:{pathname:"/board/".concat(e.id),fromDashboard:!1},className:"board__threadLink",children:e.name},e.id)}))}),Object(j.jsx)("div",{className:"board__boardsList",children:l&&l.posts.map((function(e){var t=new Date(e.pub_date);return Object(j.jsx)(N,{id:e.id,content:e.content,title:e.title,date:t.toLocaleString(),number:e.slug.slice(e.slug.indexOf("-")+1),comments:e.comments.slice(0,3),allComments:e.comments},e.id)}))})]})]})},C=(n(76),function(e){var t=e.match,n=Object(c.useState)({comments:[]}),a=Object(d.a)(n,2),s=a[0],i=a[1],r=t.params.id;return Object(c.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/thread/".concat(r,"/")}).then((function(e){var t=e.data;t.comments.sort((function(e,t){return t.id-e.id})),console.log(t),i(t)}))}),[r]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{}),s&&Object(j.jsx)("div",{className:"thread__page",children:Object(j.jsx)(N,{content:s.content,title:s.title,date:new Date(s.pub_date).toLocaleString(),number:s.slug,comments:s.comments})})]})});var w=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(r.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",exact:!0,children:Object(j.jsx)(u,{})}),Object(j.jsx)(o.a,{path:"/board/:id",exact:!0,component:S}),Object(j.jsx)(o.a,{path:"/thread/:id",exact:!0,component:C})]})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),U()}},[[77,1,2]]]);
//# sourceMappingURL=main.eed1ee6f.chunk.js.map