(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n,i=a(8),r=a.n(i),s=a(2),c=a(6),o=a(7),l=(a(14),a(1)),d=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],u=a(9),m=a.n(u),j=(a(15),a(0)),b=function(e){var t=e.user;return Object(j.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},h=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(j.jsxs)("article",{"data-id":a,className:m()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(j.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(j.jsx)(b,{user:r})]})},O=function(e){var t=e.todos;return Object(j.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(j.jsx)(h,{todo:e},e.id)}))})},f=(n=d,[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:n.find((function(t){return t.id===e.userId}))||null})}))),p=d,x=function(){var e=Object(l.useState)("0"),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(!1),r=Object(s.a)(i,2),o=r[0],d=r[1],u=Object(l.useState)(!1),m=Object(s.a)(u,2),b=m[0],h=m[1],x=Object(l.useState)(""),v=Object(s.a)(x,2),y=v[0],S=v[1],N=Object(l.useState)(f),I=Object(s.a)(N,2),g=I[0],C=I[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault();var t=p.find((function(e){return e.name===a}))||null;if(t||d(!0),y.length||h(!0),t&&y){var i=function(e,t,a){return{id:Math.max.apply(Math,Object(c.a)(a.map((function(e){return e.id}))))+1,title:t,completed:!1,userId:e.id,user:e}}(t,y,f);C((function(e){return[].concat(Object(c.a)(e),[i])})),S(""),n("0")}},children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("label",{children:["Title: ",Object(j.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:y,onChange:function(e){h(!1);var t=e.target.value;S(t)}})]}),b&&Object(j.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("label",{children:["User: ",Object(j.jsxs)("select",{"data-cy":"userSelect",value:a,onChange:function(e){d(!1);var t=e.target.value;n(t)},children:[Object(j.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),p.map((function(e){return Object(j.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]}),o&&Object(j.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(j.jsx)("section",{className:"TodoList",children:Object(j.jsx)(O,{todos:g})})]})};r.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2d4814ad.chunk.js.map