(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(8),n=c.n(a),r=(c(14),c(15),c(7)),i=c(5),l=(c(16),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),d=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],o=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}],j=c(2),h=c.n(j),u=c(0),b=function(e){var t=e.categories,c=e.users,s=e.selectedUsers,a=e.setSelectedUsers,n=e.selectedCategories,r=e.setSelectedCategories,i=e.searchQuery,l=e.setSearchQuery,d=function(e){var t=Object.assign([],s);t.includes(e.target.text)||t.push(e.target.text),a(t)},o=function(e){e.preventDefault();var t=Object.assign([],n);t.includes(e.target.text)||t.push(e.target.text),r(t)};return Object(u.jsx)("div",{className:"block",children:Object(u.jsxs)("nav",{className:"panel",children:[Object(u.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(u.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(u.jsx)("a",{className:h()({"is-active":0===s.length}),"data-cy":"FilterAllUsers",href:"#/",onClick:function(){a([])},children:"All"}),c.map((function(e){return Object(u.jsx)("a",{className:h()({"is-active":s.includes(e.name)}),"data-cy":"FilterUser",href:"#/",onClick:d,children:e.name},e.name)}))]}),Object(u.jsx)("div",{className:"panel-block",children:Object(u.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"SearchField",type:"search",className:"input",placeholder:"Search",value:i,onChange:function(e){l(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),i.length>0&&Object(u.jsx)("span",{className:"icon is-right",children:Object(u.jsx)("button",{onClick:function(){l("")},"data-cy":"ClearButton",type:"button",className:"delete"})})]})}),Object(u.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(u.jsx)("a",{href:"#/","data-cy":"AllCategories",className:h()("button mr-6 is-success",{"is-outlined":0!==n.length}),onClick:function(){r([])},children:"All"}),t.map((function(e){return Object(u.jsx)("a",{"data-cy":"Category",className:h()("button mr-2 my-1",{"is-info":n.includes(e.title)}),href:"#/",onClick:o,children:e.title},e.title)}))]}),Object(u.jsx)("div",{className:"panel-block",children:Object(u.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){r([]),a([])},children:"Reset all filters"})})]})})},x=c(9),m=function(e){var t=e.products,c=e.selectedUsers,s=e.selectedCategories,a=(e.searchQuery,function(e,t,c){var s=Object(x.a)(e);return c.length>0&&(s=s.filter((function(e){return c.join("-").includes(e.category.title)}))),t.length>0&&(s=s.filter((function(e){return t.join("-").includes(e.user.name)}))),s}(t,c,s));return Object(u.jsx)("div",{className:"box table-container",children:a.length>0?Object(u.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(u.jsx)("tbody",{children:a.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"Product",children:[Object(u.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(u.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(u.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(e.category.icon," - ").concat(e.category.title)}),Object(u.jsx)("td",{"data-cy":"ProductUser",className:h()({"has-text-link":"m"===e.user.sex},{"has-text-danger":"f"===e.user.sex}),children:e.user.name})]})}))})]}):Object(u.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"})})},O=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),j=Object(i.a)(n,2),h=j[0],x=j[1],O=Object(s.useState)(""),f=Object(i.a)(O,2),p=f[0],g=f[1],y=o.map((function(e){var t=d.find((function(t){return t.id===e.categoryId})),c=l.find((function(e){return e.id===t.ownerId}));return Object(r.a)(Object(r.a)({},e),{},{category:t,user:c})}));return Object(u.jsx)("div",{className:"section",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"title",children:"Product Categories"}),Object(u.jsx)(b,{categories:d,users:l,selectedUsers:c,setSelectedUsers:a,selectedCategories:h,setSelectedCategories:x,searchQuery:p,setSearchQuery:g}),Object(u.jsx)(m,{products:y,selectedUsers:c,selectedCategories:h,searchQuery:p})]})})};n.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3a0c525e.chunk.js.map