webpackJsonp([44],{24:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(151);t["default"]=n.Col,e.exports=t["default"]},25:88,274:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.updateChongZhiAct=t.uploadImageAct=t.update=t.remove=t.moreDelete=t.create=t.updateTiXianAct=t.queryTixian=t.query=t.find=void 0;var u=r(146),o=a(u),s=r(35),l=a(s),i=r(148),d=a(i),c=(t.find=function(){var e=(0,d["default"])(l["default"].mark(function t(e){return l["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f.read_Token(f.APIHost+"/order/"+e,f.getAuth("/order/"+e)).then(function(e){return e.json()}).then(function(e){return e}));case 1:case"end":return t.stop()}},t,this)}));return function(t){return e.apply(this,arguments)}}(),t.query=function(){var e=(0,d["default"])(l["default"].mark(function t(e){var r;return l["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.page||(e.page=1),e.size||(e.size=10),r={},!e.startTime&&!e.keyword){t.next=6;break}return r={startDate:f.getTime(e.startTime),endDate:f.getTime(e.endTime),pageNumber:e.page?e.page:"",pageSize:e.size?e.size:"",videoId:e.keyword?e.keyword:""},t.abrupt("return",f.creat_Token(f.APIHost+"/commentFavorite/getCommentList",p.get("token"),(0,o["default"])(r)).then(function(e){return e.json()}).then(function(e){return e}));case 6:return t.abrupt("return",f.creat_Token(f.APIHost+"/commentFavorite/getCommentList",p.get("token"),(0,o["default"])({})).then(function(e){return e.json()}).then(function(e){return e}));case 7:case"end":return t.stop()}},t,this)}));return function(t){return e.apply(this,arguments)}}(),t.queryTixian=function(){var e=(0,d["default"])(l["default"].mark(function t(e){var r;return l["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.page||(e.page=1),e.size||(e.size=10),r={},e.keyword&&(r[e.field]=e.keyword),t.abrupt("return",f.creat_Token(f.APIHost+"/admin/allSafelist/"+e.page+"/"+e.size,f.getAuth("/admin/allSafelist/"+e.page+"/"+e.size),(0,o["default"])({where:r})).then(function(e){return e.json()}).then(function(e){return e}));case 5:case"end":return t.stop()}},t,this)}));return function(t){return e.apply(this,arguments)}}(),t.updateTiXianAct=function(){var e=(0,d["default"])(l["default"].mark(function t(e){return l["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f.creat_Token(f.APIHost+"/admin/updateSafe/"+e.id,f.getAuth("/admin/updateSafe/"+e.id),(0,o["default"])({status:1*e.stateNum})).then(function(e){return e.json()}).then(function(e){return e}));case 1:case"end":return t.stop()}},t,this)}));return function(t){return e.apply(this,arguments)}}(),t.create=function(){var e=(0,d["default"])(l["default"].mark(function t(e){return l["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f.creat_Token(f.APIHost+"/order",f.getAuth("/order"),(0,o["default"])(e)).then(function(e){return e.json()}).then(function(e){return e}));case 1:case"end":return t.stop()}},t,this)}));return function(t){return e.apply(this,arguments)}}(),t.moreDelete=function(){var e=(0,d["default"])(l["default"].mark(function t(e){var r;return l["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={commentIds:e},t.abrupt("return",f.creat_Token(f.APIHost+"/commentFavorite/delComment",p.get("token"),(0,o["default"])(r)).then(function(e){return e.json()}).then(function(e){return e}));case 2:case"end":return t.stop()}},t,this)}));return function(t){return e.apply(this,arguments)}}(),t.remove=function(){var e=(0,d["default"])(l["default"].mark(function t(e){var r;return l["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={commentIds:e},t.abrupt("return",f.creat_Token(f.APIHost+"/commentFavorite/delComment",p.get("token"),(0,o["default"])(r)).then(function(e){return e.json()}).then(function(e){return e}));case 2:case"end":return t.stop()}},t,this)}));return function(t){return e.apply(this,arguments)}}(),t.update=function(){var e=(0,d["default"])(l["default"].mark(function t(e){return l["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f.update_Token(f.APIHost+"/order/"+e.id,f.getAuth("/order/"+e.id),(0,o["default"])(e.data)).then(function(e){return e.json()}).then(function(e){return e}));case 1:case"end":return t.stop()}},t,this)}));return function(t){return e.apply(this,arguments)}}(),t.uploadImageAct=function(){var e=(0,d["default"])(l["default"].mark(function t(e){var r;return l["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=f.APIHost+"/file",t.abrupt("return",f.uploadImg_Token(r,e).then(function(e){return e.json()}).then(function(e){return e}));case 2:case"end":return t.stop()}},t,this)}));return function(t){return e.apply(this,arguments)}}(),t.updateChongZhiAct=function(){var e=(0,d["default"])(l["default"].mark(function t(e){return l["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f.read_Token(f.APIHost+"/user/pay/"+e.id+"/"+e.stateNum,f.getAuth("/user/pay/"+e.id+"/"+e.stateNum)).then(function(e){return e.json()}).then(function(e){return e}));case 1:case"end":return t.stop()}},t,this)}));return function(t){return e.apply(this,arguments)}}(),r(62),r(23)),f=n(c),p=r(55)},308:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(5),o=a(u),s=r(35),l=a(s),i=r(52),d=a(i);r(53);var c=r(274),f=r(149),p=r(23),h=n(p);t["default"]={namespace:"orders",state:{list:[],order:{},loading:!1,seLoading:!1,hasSelected:!1,selectIdDel:[],currentItem:{},modalVisible:!1,modalType:"create",pagination:{showSizeChanger:!0,showQuickJumper:!0,showTotal:function(e){return"\u5171 "+e+" \u6761"},current:1,total:null}},subscriptions:{setup:function(e){var t=e.dispatch,r=e.history;r.listen(function(e){"/orders"===e.pathname?t({type:"query",payload:e.query}):"/order/tixian"===e.pathname?t({type:"queryTixian",payload:e.query}):"/order/order"===e.pathname&&t(e.query.index?{type:"find",payload:e.query.index}:{type:"findSuccess",payload:{order:{}}})})}},effects:{query:l["default"].mark(function m(e,t){var r,n,a=e.payload,u=t.call,o=t.put;return l["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({type:"showLoading"});case 2:return console.log("------------------",a),e.next=5,u(c.query,a);case 5:if(r=e.sent,n=1,a.page&&(n=parseInt(a.page)),200!=r.code){e.next=21;break}if(r.data.list){e.next=15;break}return d["default"].info("\u6682\u65e0\u6570\u636e"),e.next=13,o({type:"querySuccess",payload:{list:[],pagination:{total:0,current:n}}});case 13:e.next=17;break;case 15:return e.next=17,o({type:"querySuccess",payload:{list:r.data.list,pagination:{total:r.total,current:n}}});case 17:return e.next=19,o({type:"querySuccess",payload:{list:r.data.list,pagination:{total:r.total,current:n}}});case 19:e.next=28;break;case 21:if(201!=r.code){e.next=25;break}d["default"].warning("\u767b\u5f55\u5931\u6548\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55",1.5,function(){h.loginOut(),window.location.href="dashboard"}),e.next=28;break;case 25:return d["default"].info("\u64cd\u4f5c\u5931\u8d25"+r.message),e.next=28,o({type:"hideLoading"});case 28:case"end":return e.stop()}},m,this)}),queryTixian:l["default"].mark(function y(e,t){var r,n,a=e.payload,u=t.call,o=t.put;return l["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({type:"showLoading"});case 2:return e.next=4,u(c.queryTixian,(0,f.parse)(a));case 4:if(r=e.sent,n=1,a.page&&(n=parseInt(a.page)),107!=r.code){e.next=10;break}return e.next=10,o({type:"querySuccess",payload:{list:r.resource,pagination:{total:r.sum,current:n}}});case 10:case"end":return e.stop()}},y,this)}),find:l["default"].mark(function g(e,t){var r,n=e.payload,a=t.call,u=t.put;return l["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"showLoading"});case 2:return e.next=4,a(c.find,n);case 4:if(r=e.sent,107!=r.code){e.next=8;break}return e.next=8,u({type:"findSuccess",payload:{order:r.resource}});case 8:case"end":return e.stop()}},g,this)}),"delete":l["default"].mark(function x(e,t){var r,n=e.payload,a=t.call,u=t.put;return l["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"showLoading"});case 2:return e.next=4,a(c.remove,n._id);case 4:if(r=e.sent,200!=r.code){e.next=11;break}return d["default"].info("\u5220\u9664\u6210\u529f"),e.next=9,u({type:"delSuccess",payload:{id:n.id}});case 9:e.next=18;break;case 11:if(201!=r.code){e.next=15;break}d["default"].warning("\u767b\u5f55\u5931\u6548\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55",1.5,function(){h.loginOut(),window.location.href="dashboard"}),e.next=18;break;case 15:return d["default"].info("\u64cd\u4f5c\u5931\u8d25"+r.message),e.next=18,u({type:"hideLoading"});case 18:case"end":return e.stop()}},x,this)}),create:l["default"].mark(function v(e,t){var r,n=e.payload,a=t.call,u=t.put;return l["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"hideModal"});case 2:return e.next=4,u({type:"showLoading"});case 4:return e.next=6,a(c.create,n.data);case 6:if(r=e.sent,200!=r.code){e.next=10;break}return e.next=10,u({type:"createSuccess",payload:{data:r.resource,pagination:{total:r.resource.length,current:1}}});case 10:case"end":return e.stop()}},v,this)}),update:l["default"].mark(function w(e,t){var r,n=e.payload,a=t.call,u=t.put;return l["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"hideModal"});case 2:return e.next=4,u({type:"showLoading"});case 4:return e.next=6,a(c.update,n);case 6:if(r=e.sent,105!=r.code){e.next=10;break}return e.next=10,u({type:"updateSuccess",payload:n});case 10:case"end":return e.stop()}},w,this)}),uploadImage:l["default"].mark(function k(e,t){var r,n=e.payload,a=t.call,u=t.put;return l["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(c.uploadImageAct,n);case 2:if(r=e.sent,105!=r.code){e.next=6;break}return e.next=6,u({type:"uploadImageSuccess",payload:r});case 6:case"end":return e.stop()}},k,this)}),editItemAct:l["default"].mark(function b(e,t){var r,n=e.payload,a=t.call,u=t.put;return l["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"hideModal"});case 2:return e.next=4,u({type:"showLoading"});case 4:return e.next=6,a(c.updateTiXianAct,n);case 6:if(r=e.sent,!r.status){e.next=10;break}return e.next=10,u({type:"uploadTiXianSuccess",payload:n});case 10:case"end":return e.stop()}},b,this)}),editChongZhi:l["default"].mark(function E(e,t){var r,n=e.payload,a=t.call,u=t.put;return l["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"hideModal"});case 2:return e.next=4,u({type:"showLoading"});case 4:return e.next=6,a(c.updateChongZhiAct,n);case 6:if(r=e.sent,!r.status){e.next=10;break}return e.next=10,u({type:"uploadChongZhiSuccess",payload:n});case 10:case"end":return e.stop()}},E,this)})},reducers:{getProduct:function(e,t){return(0,o["default"])({},e,t.payload)},showLoading:function(e){return(0,o["default"])({},e,{loading:!0})},hideLoading:function(e){return(0,o["default"])({},e,{loading:!1})},uploadChongZhiSuccess:function(e,t){var r=t.payload,n=(r.id,r.stateNum,r.index),a=e.list,u=(0,o["default"])({},a[n],{status:t.payload.stateNum});return a.splice(n,1,u),(0,o["default"])({},e,{list:a,loading:!1})},querySuccess:function(e,t){var r=t.payload,n=r.list,a=r.pagination;return(0,o["default"])({},e,{list:n,loading:!1,pagination:(0,o["default"])({},e.pagination,a)})},findSuccess:function(e,t){return(0,o["default"])({},e,t.payload)},createSuccess:function(e,t){var r=t.payload,n=r.data,a=r.pagination,u=e.list;return u.splice(0,0,n),(0,o["default"])({},e,{list:u,loading:!1,pagination:(0,o["default"])({},e.pagination,a)})},delSuccess:function(e,t){var r=t.payload.id,n=e.list;return n.splice(r,1),(0,o["default"])({},e,{list:n,loading:!1})},updateSuccess:function(e,t){var r=t.payload,n=r.key,a=r.user,u=e.list,s=(0,o["default"])({},u[n],a);return u.splice(n,1,s),(0,o["default"])({},e,{list:u,loading:!1})},uploadTiXianSuccess:function(e,t){var r=t.payload,n=(r.id,r.stateNum,r.index),a=e.list,u=(0,o["default"])({},a[n],{status:t.payload.stateNum});return a.splice(n,1,u),(0,o["default"])({},e,{list:a,loading:!1})},showModal:function(e,t){return(0,o["default"])({},e,t.payload,{modalVisible:!0})},onSelectId:function(e,t){return(0,o["default"])({},e,t.payload)},hideSeLoading:function(e,t){return(0,o["default"])({},e,{seLoading:!1})},showSeLoading:function(e,t){return(0,o["default"])({},e,{seLoading:!0})},hideModal:function(e){return(0,o["default"])({},e,{modalVisible:!1})},uploadImageSuccess:function(e,t){}}},e.exports=t["default"]},750:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=e.orders;return{orders:t}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(14),o=n(u),s=r(90),l=n(s),i=r(87),d=n(i),c=r(24),f=n(c),p=r(52),h=n(p),m=r(2),y=n(m),g=r(4),x=n(g),v=r(3),w=n(v);r(17),r(19),r(88),r(25),r(53);var k=r(1),b=n(k),E=r(136),S=r(274),T=r(132),A=function(e){function t(){var r,n,a;(0,y["default"])(this,t);for(var u=arguments.length,o=Array(u),s=0;s<u;s++)o[s]=arguments[s];return r=n=(0,x["default"])(this,e.call.apply(e,[this].concat(o))),n.state={imgUrl:""},a=r,(0,x["default"])(n,a)}return(0,w["default"])(t,e),t.prototype.componentWillReceiveProps=function(e){var t=e.orders;t.order.express?this.refs.express.refs.input.value=t.order.express:"",t.order.expressNumber?this.refs.expressNumber.refs.input.value=t.order.expressNumber:""},t.prototype.onChange=function(e,t,r){this.setState({value:e})},t.prototype.onSubmit=function(){var e=this.props,t=e.orders,r=e.dispatch,n={};this.refs.express.refs.input.value&&(n.express=this.refs.express.refs.input.value,n.status=2),this.refs.expressNumber.refs.input.value&&(n.expressNumber=this.refs.expressNumber.refs.input.value,n.status=2),t.order._id?(0,S.update)({id:t.order._id,data:n}).then(function(e){105==e.statusCode?(h["default"].info(e.message),r(T.routerRedux.goBack())):h["default"].error(e.message)}):(0,S.create)(n).then(function(e){101==e.statusCode?(h["default"].info(e.message),r(T.routerRedux.push({pathname:"/order/orders"}))):h["default"].error(e.message)})},t.prototype.changevolume=function(e){this.setState({volume:e})},t.prototype.switchOnRecom=function(e){e?this.setState({onRecom:1}):this.setState({onRecom:0})},t.prototype.render=function(){var e=this.props.orders;return b["default"].createElement("div",{className:"content-inner"},b["default"].createElement(d["default"],{gutter:16,style:{marginTop:20}},b["default"].createElement(f["default"],{span:8,style:{textAlign:"right"}},b["default"].createElement("h4",null,"\u5546\u54c1\u540d\u79f0\uff1a")),b["default"].createElement(f["default"],{span:8},b["default"].createElement("h4",null,e.order.product?e.order.product.name:""))),b["default"].createElement(d["default"],{gutter:16,style:{marginTop:20}},b["default"].createElement(f["default"],{span:8,style:{textAlign:"right"}},b["default"].createElement("h4",null,"\u5546\u54c1\u4ef7\u683c\uff1a")),b["default"].createElement(f["default"],{span:8},b["default"].createElement("h4",null,e.order.product?e.order.product.goldValue:""))),b["default"].createElement(d["default"],{gutter:16,style:{marginTop:20}},b["default"].createElement(f["default"],{span:8,style:{textAlign:"right"}},b["default"].createElement("h4",null,"\u8d2d\u4e70\u6570\u91cf\uff1a")),b["default"].createElement(f["default"],{span:8},b["default"].createElement("h4",null,e.order.number?e.order.number:""))),b["default"].createElement(d["default"],{gutter:16,style:{marginTop:20}},b["default"].createElement(f["default"],{span:8,style:{textAlign:"right"}},b["default"].createElement("h4",null,"\u8d2d\u4e70\u8005\uff1a")),b["default"].createElement(f["default"],{span:8},b["default"].createElement("h4",null,e.order.userName?e.order.userName:""))),b["default"].createElement(d["default"],{gutter:16,style:{marginTop:20}},b["default"].createElement(f["default"],{span:8,style:{textAlign:"right"}},b["default"].createElement("h4",null,"\u8d2d\u4e70\u8005\u7535\u8bdd\uff1a")),b["default"].createElement(f["default"],{span:8},b["default"].createElement("h4",null,e.order.userMobile?e.order.userMobile:""))),b["default"].createElement(d["default"],{gutter:16,style:{marginTop:20}},b["default"].createElement(f["default"],{span:8,style:{textAlign:"right"}},b["default"].createElement("h4",null,"\u5feb\u9012\u516c\u53f8\uff1a")),b["default"].createElement(f["default"],{span:8},b["default"].createElement(l["default"],{size:"large",style:{width:"100%"},placeholder:"\u5feb\u9012\u516c\u53f8",ref:"express"}))),b["default"].createElement(d["default"],{gutter:16,style:{marginTop:20}},b["default"].createElement(f["default"],{span:8,style:{textAlign:"right"}},b["default"].createElement("h4",null,"\u5feb\u9012\u7f16\u53f7\uff1a")),b["default"].createElement(f["default"],{span:8},b["default"].createElement(l["default"],{size:"large",style:{width:"100%"},placeholder:"\u5feb\u9012\u7f16\u53f7",ref:"expressNumber"}))),b["default"].createElement(d["default"],{type:"flex",justify:"center",gutter:16,style:{marginTop:30}},b["default"].createElement(f["default"],{span:3},b["default"].createElement(o["default"],{style:{width:"100%"},size:"large",type:"primary",onClick:this.onSubmit.bind(this)},"\u63d0\u4ea4"))))},t}(k.Component);t["default"]=(0,E.connect)(a)(A),e.exports=t["default"]}});