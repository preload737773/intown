(this.webpackJsonpintown=this.webpackJsonpintown||[]).push([[0],{186:function(e,t,n){e.exports=n(283)},280:function(e,t,n){},283:function(e,t,n){"use strict";n.r(t);n(187),n(213),n(215),n(216),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255);var a=n(0),r=n.n(a),s=n(110),o=n.n(s),i=n(16),c=n.n(i),u=n(24),l=n(30),d=n(63),p=n(34),b=n(33),h=n(10),m=(n(56),n(116)),f=n.n(m),E=n(117),S=n.n(E),_=n(14),g=n.n(_),A=n(26),O=function e(){Object(u.a)(this,e)};O.SERVER_API_ADDRESS="https://intown-backend.herokuapp.com/",O.VK_APP_ID=7550756,O.VK_API_VERSION="5.122",O.ONBOARDING_LABELS={SUBSCRIPTIONS_SCREEN_LABEL:"\u041f\u0440\u043e\u0446\u0435\u0441\u0441 \u043f\u0440\u043e\u0441\u0442: \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0448\u044c\u0441\u044f \u043d\u0430 \u043a\u043e\u0433\u043e-\u0442\u043e \u0438\u0437 \u0441\u0432\u043e\u0438\u0445 \u0434\u0440\u0443\u0437\u0435\u0439. \u041a\u0430\u043a \u0440\u0430\u0437 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0438 \u043d\u0443\u0436\u0435\u043d \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0442\u0432\u043e\u0438\u043c \u0434\u0440\u0443\u0437\u044c\u044f\u043c",SUBSCRIPTIONS_BUTTON_LABEL:"\u0414\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0434\u0440\u0443\u0437\u044c\u044f\u043c",GEOLOCATION_SCREEN_LABEL:'\u0414\u0430\u043b\u0435\u0435 \u0437\u0430\u0445\u043e\u0434\u0438\u0448\u044c \u0432 \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044e \u0438 \u0432\u0438\u0434\u0438\u0448\u044c, \u0433\u0434\u0435 \u0442\u0432\u043e\u0438 \u0434\u0440\u0443\u0437\u044c\u044f, \u0435\u0441\u043b\u0438 \u043e\u043d\u0438, \u0432 \u0441\u0432\u043e\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c, \u043d\u0430\u0436\u0430\u043b\u0438 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0433\u0435\u043e\u043f\u043e\u0437\u0438\u0446\u0438\u0435\u0439". \u041f\u043e\u0434\u0435\u043b\u0438\u0441\u044c \u0435\u0439 \u0441\u043e \u0441\u0432\u043e\u0438\u043c\u0438 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438!',GEOLOCATION_BUTTON_LABEL:"\u0414\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u0438",FINAL_SCREEN_LABEL:"\u041d\u0443 \u0432\u043e\u0442 \u0438 \u0432\u0441\u0435, \u0435\u0441\u043b\u0438 \u0432\u0435\u0437\u0434\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u043f\u043e\u043b\u0443\u0447\u0435\u043d, \u043c\u043e\u0436\u043d\u043e \u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c!",FINAL_BUTTON_LABEL:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e"};var y=function e(){Object(u.a)(this,e)};y.getSubscribers=function(){var e=Object(A.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O.SERVER_API_ADDRESS+"user/"+t,{mode:"cors",method:"GET",headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y.getUserSubscribers=function(){var e=Object(A.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O.SERVER_API_ADDRESS+"subscribers/"+t,{mode:"cors",method:"GET",headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y.addSubscriber=function(){var e=Object(A.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O.SERVER_API_ADDRESS+"user/add",{mode:"cors",method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({id:t,subscriber:n})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y.removeSubscriber=function(){var e=Object(A.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O.SERVER_API_ADDRESS+"user/remove",{mode:"cors",method:"DELETE",headers:{"Content-type":"application/json"},body:JSON.stringify({id:t,subscriber:n})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y.getUserLocation=function(){var e=Object(A.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O.SERVER_API_ADDRESS+"location/"+t,{mode:"cors",method:"GET",headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y.addUserLocation=function(){var e=Object(A.a)(g.a.mark((function e(t,n,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O.SERVER_API_ADDRESS+"location/add",{mode:"cors",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,date:(new Date).toLocaleDateString("en-US"),lat:n,long:a})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();var v=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).subscribeToggle=function(){a.state.subscribed?(a.setState({on:"primary",text:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f",subscribed:!1}),y.removeSubscriber(a.props.user_id,a.props.friend_id).then()):(a.setState({on:"secondary",text:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f",subscribed:!0}),y.addSubscriber(a.props.user_id,a.props.friend_id).then())},a.state=a.props.subscribed?{on:"secondary",text:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f",subscribed:!0}:{on:"primary",text:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f",subscribed:!1},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(h.c,null,r.a.createElement(h.b,{mode:this.state.on,onClick:this.subscribeToggle},this.state.text))}}]),n}(r.a.Component),L=n(119),C=n.n(L),k=n(118),N=n.n(k),T=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).searchChange=function(e){a.setState({search:e.target.value})},a.getFriends=function(){var e=Object(A.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.send("VKWebAppCallAPIMethod",{method:"friends.get",request_id:"32test",params:{fields:"id, photo_50",order:"name",access_token:t,v:O.VK_API_VERSION}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={friends:null,user_id:null,subscribers:null,search:"",userSubscribers:null},c.a.send("VKWebAppGetUserInfo",{}).then((function(e){y.getSubscribers(e.id).then((function(t){t.json().then((function(t){y.getUserSubscribers(e.id).then((function(n){n.json().then((function(n){c.a.send("VKWebAppGetAuthToken",{app_id:O.VK_APP_ID,scope:"friends"}).then((function(r){a.getFriends(r.access_token).then((function(r){a.setState({user_id:e.id,subscribers:t.subs,friends:r.response.items,userSubscribers:n.subs})}))}))}))}))}))}),(function(e){console.log(e)}))})),a}return Object(l.a)(n,[{key:"friends",get:function(){var e=this.state.search.toUpperCase();return""!==this.state.search?this.state.friends.filter((function(t){return t.first_name.toUpperCase().indexOf(e)>-1||t.last_name.toUpperCase().indexOf(e)>-1})):this.state.friends}}]),Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(h.e,null,r.a.createElement(h.f,{mode:"secondary",popout:this.state.popout},"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0440\u0443\u0437\u0435\u0439"),r.a.createElement(N.a,{value:this.state.search,onChange:this.searchChange,after:null}),this.state.friends?this.friends.map((function(t){return r.a.createElement(C.a,{key:t.id,before:r.a.createElement(h.a,{size:48,src:t.photo_50}),after:r.a.createElement(v,{user_id:e.state.user_id,friend_id:t.id,subscribed:!!e.state.subscribers&&e.state.subscribers.includes(t.id)}),description:e.state.userSubscribers&&e.state.userSubscribers.indexOf(t.id)>-1?"\u0412\u0430\u0448 \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a":""},t.first_name+" "+t.last_name)})):r.a.createElement(h.j,{size:"regular",style:{marginTop:20}}))}}]),n}(r.a.Component),I=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(h.c,{style:{textAlign:"center",marginTop:"3%"}},r.a.createElement(h.b,{mode:"commerce",size:"xl",onClick:this.props.onClick},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0433\u0435\u043e\u043f\u043e\u0437\u0438\u0446\u0438\u0435\u0439"))}}]),n}(r.a.Component),j=n(64),B=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getGeo=Object(A.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.send("VKWebAppGetGeodata");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),a.sendGeoToServer=Object(A.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getGeo().then((function(e){y.addUserLocation(a.state.user_id,e.lat,e.long)}));case 2:case"end":return e.stop()}}),e)}))),a.getGeoDataFromServer=Object(A.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getGeo().then((function(e){a.setState({geoLocation:{lat:e.lat,long:e.long}})}));case 2:return(t={type:"FeatureCollection",features:[]}).features.push({type:"Feature",id:0,geometry:{type:"Point",coordinates:[a.state.geoLocation.lat,a.state.geoLocation.long]},properties:{balloonContentHeader:"\u0412\u044b",balloonContentBody:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \u0441\u043d\u0438\u0437\u0443, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438!",balloonContentFooter:(new Date).toISOString().split("T")[0]}}),e.next=6,c.a.send("VKWebAppGetUserInfo").then((function(e){a.setState({user_id:e.id}),y.getSubscribers(e.id).then((function(e){e.json().then((function(e){c.a.send("VKWebAppGetAuthToken",{app_id:O.VK_APP_ID,scope:"users"}).then((function(n){c.a.send("VKWebAppCallAPIMethod",{method:"users.get",request_id:"64test",params:{user_ids:e.subs.toString(),fields:"first_name, last_name",v:O.VK_API_VERSION,access_token:n.access_token}}).then((function(e){e.response.forEach((function(e){y.getUserLocation(e.id).then((function(n){n.json().then((function(n){if(""!==n.date){var a={type:"Feature",id:n.id,geometry:{type:"Point",coordinates:[n.lat,n.long]},properties:{balloonContentHeader:e.first_name+" "+e.last_name,balloonContentBody:"\u0412\u0430\u0448 \u0434\u0440\u0443\u0433 \u043f\u043e\u0434\u0435\u043b\u0438\u043b\u0441\u044f \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c!",balloonContentFooter:n.date.toString().split("T")[0]}};t.features.push(a)}}))}))})),a.setState({subscribers:t})}))}))}))}))}));case 6:case"end":return e.stop()}}),e)}))),a.state={geoLocation:null,subscribers:null,user_id:null},a.getGeoDataFromServer(),a}return Object(l.a)(n,[{key:"render",value:function(){return this.state.subscribers?r.a.createElement(h.e,{style:{height:"100%",width:"100%",marginLeft:"auto",marginRight:"auto"}},r.a.createElement(j.c,null,r.a.createElement(j.a,{state:{center:[this.state.geoLocation.lat,this.state.geoLocation.long],zoom:7,controls:["zoomControl"]},modules:["control.ZoomControl"],width:"100%",height:"60vh"},r.a.createElement(j.b,{options:{clusterize:!0,gridSize:32},objects:{openBalloonOnClick:!0,preset:"islands#blueDotIcon"},clusters:{preset:"islands#greenClusterIcons"},defaultFeatures:this.state.subscribers,modules:["objectManager.addon.objectsBalloon","objectManager.addon.objectsHint"]}))),r.a.createElement(I,{onClick:this.sendGeoToServer})):r.a.createElement(h.i,{style:{margin:"75% 0 0 0"},size:"large"})}}]),n}(r.a.Component);B.defaultProps={center:{lat:30,long:30},zoom:7};var R=B,G=n(59),D=n.n(G),x=n(120),w=n.n(x),P=(n(280),n(65)),V=n.n(P),U=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onProceedToAppClick=function(){a.setState({onboarding:!1})},a.onGetAccessTokenClick=function(){c.a.send("VKWebAppGetAuthToken",{app_id:O.VK_APP_ID,scope:"friends"}).then((function(e){e.access_token&&a.setState({gotAccessToken:!0})}))},a.onGetGeoLocationClick=function(){c.a.send("VKWebAppGetGeodata").then((function(e){e.available&&a.setState({gotLocationAccess:!0})}))},a.state={activeStory:"Subs",slideIndex:0,onboarding:!0,gotAccessToken:!1,gotLocationAccess:!1,isThemeDark:!1},a.onStoryChange=a.onStoryChange.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"render",value:function(){return this.state.onboarding?r.a.createElement(h.m,{activePanel:"gallery"},r.a.createElement(h.g,{id:"gallery",style:{width:"100%",height:"100%"}},r.a.createElement(h.h,{separator:!1},"\u0418\u043d\u0442\u0440\u043e"),r.a.createElement(w.a,{slideWidth:"100%",style:{height:"90vh"},bullets:this.state.isThemeDark?"dark":"light"},r.a.createElement("div",{id:"slide0"},r.a.createElement(D.a,{className:"intro-button",mode:"primary",onClick:this.onGetAccessTokenClick},O.ONBOARDING_LABELS.SUBSCRIPTIONS_BUTTON_LABEL),r.a.createElement(V.a,{weight:"medium",className:"intro-label"},O.ONBOARDING_LABELS.SUBSCRIPTIONS_SCREEN_LABEL)),r.a.createElement("div",{id:"slide1"},r.a.createElement(D.a,{className:"intro-button",mode:"primary",onClick:this.onGetGeoLocationClick},O.ONBOARDING_LABELS.GEOLOCATION_BUTTON_LABEL),r.a.createElement(V.a,{weight:"medium",className:"intro-label"},O.ONBOARDING_LABELS.GEOLOCATION_SCREEN_LABEL)),r.a.createElement("div",{id:"slide2"},this.state.gotAccessToken&&this.state.gotLocationAccess?r.a.createElement(D.a,{className:"intro-button",mode:"primary",onClick:this.onProceedToAppClick},O.ONBOARDING_LABELS.FINAL_BUTTON_LABEL):r.a.createElement(D.a,{className:"intro-button",mode:"primary",disabled:!0},O.ONBOARDING_LABELS.FINAL_BUTTON_LABEL),r.a.createElement(V.a,{weight:"medium",className:"intro-label"},O.ONBOARDING_LABELS.FINAL_SCREEN_LABEL))))):r.a.createElement(h.d,{activeStory:this.state.activeStory,tabbar:r.a.createElement(h.k,null,r.a.createElement(h.l,{onClick:this.onStoryChange,selected:"Subs"===this.state.activeStory,"data-story":"Subs",text:"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438"},r.a.createElement(f.a,{fill:"#FF7F50"})),r.a.createElement(h.l,{onClick:this.onStoryChange,selected:"Geo"===this.state.activeStory,"data-story":"Geo",text:"\u0413\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044f"},r.a.createElement(S.a,{fill:"#228B22"})))},r.a.createElement(h.m,{id:"Subs",activePanel:"Subs"},r.a.createElement(h.g,{id:"Subs"},r.a.createElement(h.h,{separator:!1},"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438"),r.a.createElement(T,null))),r.a.createElement(h.m,{id:"Geo",activePanel:"Geo"},r.a.createElement(h.g,{id:"Geo"},r.a.createElement(h.h,{separator:!1},"\u0413\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044f"),r.a.createElement(R,null))))}}]),n}(r.a.Component),F=n(286),K=void 0;F.a({dsn:"https://9abf77e9747a4682861f30d0e9eed388@o435688.ingest.sentry.io/5395412"}),c.a.subscribe((function(e){switch(e.detail.type){case"VKWebAppUpdateConfig":var t=document.createAttribute("scheme");t.value=e.detail.data.scheme?e.detail.data.scheme:"client_light",K.setState({isThemeDark:"space_gray"===e.detail.data.scheme}),document.body.attributes.setNamedItem(t);break;default:console.log(e.detail)}})),c.a.send("VKWebAppInit").then(),o.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[186,1,2]]]);
//# sourceMappingURL=main.fcd43b36.chunk.js.map