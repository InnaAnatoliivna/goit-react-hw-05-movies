"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{824:function(n,t,r){r.d(t,{Df:function(){return s},V0:function(){return o},fh:function(){return f},tx:function(){return v},u7:function(){return d},zv:function(){return p}});var e=r(861),a=r(757),u=r.n(a),c=r(243),i="b8038f0a7a9d99e63733d790c6805a39";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,e.Z)(u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(n){return"https://image.tmdb.org/t/p/original".concat(n)}},854:function(n,t,r){r(791);var e=r(184);t.Z=function(){return(0,e.jsx)("div",{children:"Loading..."})}},186:function(n,t,r){r.r(t),r.d(t,{default:function(){return h}});var e=r(861),a=r(439),u=r(757),c=r.n(u),i=r(824),s=r(854),o=r(791),f=r(87),p=r(184),v=function(n){var t=n.children,r=n.movieId;return(0,p.jsx)("li",{children:(0,p.jsx)(f.rU,{to:"movies/".concat(r),children:t})},r)},d=function(n){var t=n.arrayResults;return(0,p.jsx)("ul",{children:t.map((function(n){return(0,p.jsx)(v,{movieId:n.id,children:n.title},n.id)}))})},h=function(){var n=(0,o.useState)(null),t=(0,a.Z)(n,2),r=t[0],u=t[1],f=(0,o.useState)(!1),v=(0,a.Z)(f,2),h=v[0],l=v[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.prev=1,n.next=4,(0,i.Df)();case 4:t=n.sent,u(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.message(n.t0);case 11:return n.prev=11,l(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Trending today"}),h&&(0,p.jsx)(s.Z,{}),r&&(0,p.jsx)(d,{arrayResults:r})]})}}}]);
//# sourceMappingURL=186.58a881b2.chunk.js.map