"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[966],{6420:function(n,t,e){e.d(t,{XT:function(){return o},di:function(){return u},q5:function(){return s},sz:function(){return c},yo:function(){return a}});var r="https://api.themoviedb.org/3/",i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjAxNDhiOTY3NjYyYjdiYzU2YTM5NmRkZGQ3ODViYiIsInN1YiI6IjY0ZWYzZWYxY2FhNTA4MDBjODg2MmU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cJSzQrz_aIhnK8r3fKa3LJujgVKQRqNnRFAtw0Ori3k"}};function c(){var n="".concat(r,"movie/popular");return fetch(n,i).then((function(n){return n.json()}))}function o(n){var t="".concat(r,"movie/").concat(n);return fetch(t,i).then((function(n){return n.json()}))}function u(n){var t="".concat(r,"search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=1");return fetch(t,i).then((function(n){return n.json()}))}function a(n){var t="".concat(r,"movie/").concat(n,"/credits");return fetch(t,i).then((function(n){return n.json()}))}function s(n){var t="".concat(r,"movie/").concat(n,"/reviews");return fetch(t,i).then((function(n){return n.json()}))}},3709:function(n,t,e){e.d(t,{Z:function(){return x}});var r,i,c,o,u=e(1087),a=e(7689),s=e(168),f=e(8547),h=f.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),d=f.ZP.li(i||(i=(0,s.Z)(["\n  width: 225px;\n"]))),l=f.ZP.img(c||(c=(0,s.Z)(["\n  display: block;\n  height: 100%;\n  width: 100%;\n"]))),p=f.ZP.div(o||(o=(0,s.Z)(["\n  height: 339px;\n  width: 226px;\n"]))),j=e(7310),v=e(184),x=function(n){var t=n.arrayOfMovies,e=(0,a.TH)();return(0,v.jsx)(h,{children:t.map((function(n){var t=null;t=n.title?n.title:n.name;var r=j;return n.poster_path&&(r="https://image.tmdb.org/t/p/w500".concat(n.poster_path)),(0,v.jsxs)(d,{children:[(0,v.jsx)(u.rU,{to:"/movies/".concat(n.id),state:{from:e},children:(0,v.jsx)(p,{children:(0,v.jsx)(l,{srcSet:r})})}),(0,v.jsx)("div",{children:(0,v.jsx)(u.OL,{to:"/movies/".concat(n.id),children:t})})]},n.id)}))})}},7966:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,i=e(9439),c=e(8881),o=e(6420),u=e(2791),a=e(3709),s=e(5373),f=e(168),h=e(8547).ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]))),d=e(184),l=function(){var n=(0,u.useState)(null),t=(0,i.Z)(n,2),e=t[0],r=t[1],f=(0,u.useState)(!0),l=(0,i.Z)(f,2),p=l[0],j=l[1];return(0,u.useEffect)((function(){setTimeout((function(){j(!1)}),2e3)}),[]),(0,u.useEffect)((function(){(0,o.sz)().then((function(n){r(n.results)})).catch((function(n){console.error(n)}))}),[]),(0,d.jsx)(d.Fragment,{children:p?(0,d.jsx)(h,{children:(0,d.jsx)(c.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})}):(0,d.jsxs)("div",{children:[!e&&(0,d.jsx)("div",{children:(0,d.jsx)("p",{children:"No results found"})}),e&&(0,d.jsx)(s.Z,{text:"Top films"}),e&&(0,d.jsx)(a.Z,{arrayOfMovies:e})]})})}},5373:function(n,t,e){var r=e(184);t.Z=function(n){var t=n.text;return(0,r.jsx)("h1",{children:t})}},7310:function(n,t,e){n.exports=e.p+"static/media/four-hundred-four.bdcaf959f98b42df624c.jpeg"}}]);
//# sourceMappingURL=966.3eddca8e.chunk.js.map