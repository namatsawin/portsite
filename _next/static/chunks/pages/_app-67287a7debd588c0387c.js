_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{0:function(t,n,e){e("GcxT"),t.exports=e("nOHt")},"1TCz":function(t,n,e){"use strict";e.r(n);var r=e("q1tI"),o=e.n(r),c=(e("zPlV"),e("q4sD"),e("vOnD")),a=e("/MKj"),u=e("vDqi"),i=e.n(u),s=e("i7Pf"),p=e("59Q4"),f=e("v721"),d=Object(s.a)({reducer:{userReducer:p.a,portReducer:f.a}}),_=o.a.createElement;i.a.get("/api/user/currentUser").then((function(t){return d.dispatch(Object(p.b)(t.data))})).catch((function(t){return console.error(t.message)}));n.default=function(t){var n=t.Component,e=t.pageProps;return _(a.a,{store:d},_(c.a,{theme:{colors:{primary:"#0070f3",secondary:"#ff3267"}}},_(n,e)))}},GcxT:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e("1TCz")}])},q4sD:function(t,n,e){},v721:function(t,n,e){"use strict";e.d(n,"b",(function(){return c}));var r=e("i7Pf"),o=Object(r.b)({name:"port",initialState:{port:null},reducers:{setPort:function(t,n){t.port=n.payload}}}),c=o.actions.setPort;n.a=o.reducer},zPlV:function(t,n,e){}},[[0,1,2,0,3]]]);