(this.webpackJsonpintown=this.webpackJsonpintown||[]).push([[0],{169:function(e,t,n){e.exports=n(266)},266:function(e,t,n){"use strict";n.r(t);n(170),n(196),n(198),n(199),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238);var a=n(0),r=n.n(a),o=n(26),s=n.n(o),c=n(25),i=n.n(c),l=n(21),u=n(22),d=n(47),m=n(24),h=n(23),b=n(11),p=(n(41),n(99)),f=n.n(p),g=n(100),y=n.n(g),v=n(38),E=n.n(v),j=n(48),k=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).subscribeToggle=function(){a.state.subscribed?a.setState({on:"primary",text:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f",subscribed:!1}):a.setState({on:"secondary",text:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f",subscribed:!0})},a.state=a.props.subscribed?{on:"secondary",text:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f",subscribed:!0}:{on:"primary",text:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f",subscribed:!1},a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(b.c,null,r.a.createElement(b.b,{mode:this.state.on,onClick:this.subscribeToggle},this.state.text))}}]),n}(r.a.Component),O=n(67),S=n.n(O),C=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getFriends=Object(j.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppCallAPIMethod",{method:"friends.get",request_id:"32test",params:{fields:"id, photo_50",order:"name",access_token:a.state.access_token,v:"5.122"}}).then((function(e){a.setState({friends:e.response.items}),console.log(e)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),a.state={access_token:null,friends:null},i.a.send("VKWebAppGetAuthToken",{app_id:7550756,scope:"friends"}).then((function(e){a.setState({access_token:e.access_token}),a.getFriends()})),a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(b.e,null,r.a.createElement(b.f,{mode:"secondary"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0440\u0443\u0437\u0435\u0439"),this.state.friends?this.state.friends.map((function(e){return r.a.createElement(S.a,{before:r.a.createElement(b.a,{size:48,src:e.photo_50}),after:r.a.createElement(k,{subscribed:!1}),description:e.id},e.first_name+" "+e.last_name)})):r.a.createElement(S.a,null,"Loading"))}}]),n}(r.a.Component),x=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(b.c,{style:{textAlign:"center",marginTop:"3%"}},r.a.createElement(b.b,{mode:"commerce",size:"xl",onClick:this.props.onClick},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0433\u0435\u043e\u043f\u043e\u0437\u0438\u0446\u0438\u0435\u0439"))}}]),n}(r.a.Component),L=n(101),G={position:"absolute",top:"50%",left:"50%",width:"15px",height:"15px",backgroundColor:"#0cb",border:"2px solid #fff",borderRadius:"40%",userSelect:"none",transform:"translate(-50%, -50%)"},_={width:"500px",transform:"translate(-10%, 0)",fontSize:"15pt"},w=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:G},r.a.createElement("p",{style:_},this.props.name))}}]),n}(r.a.Component),A=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getGeo=Object(j.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetGeodata").then((function(e){a.setState({geoLocation:{lat:e.lat,lng:e.long}})}));case 2:case"end":return e.stop()}}),e)}))),a.state={geoLocation:null},a}return Object(u.a)(n,[{key:"render",value:function(){return this.state.geoLocation&&(this.FriendsCoordinates=[{name:"Michael Porotkin",lat:this.state.geoLocation.lat-1,lng:this.state.geoLocation.lng},{name:"Some One",lat:this.state.geoLocation.lat,lng:this.state.geoLocation.lng+1}]),r.a.createElement(b.e,{style:{height:"65vh",width:"95%",marginLeft:"auto",marginRight:"auto"}},r.a.createElement(L.a,{bootstrapURLKeys:{key:"AIzaSyCA-CWX9xnTnxGmzIxkH_WIsGUrdeRI444"},center:this.state.geoLocation?this.state.geoLocation:this.props.center,zoom:this.props.zoom},this.state.geoLocation?r.a.createElement(w,{lat:this.state.geoLocation.lat,lng:this.state.geoLocation.lng,name:"Artem Buslaev"}):"",this.FriendsCoordinates?this.FriendsCoordinates.map((function(e){return r.a.createElement(w,{lat:e.lat,lng:e.lng,name:e.name})})):""),r.a.createElement(x,{onClick:this.getGeo}))}}]),n}(r.a.Component);A.defaultProps={center:{lat:30,lng:30},zoom:11};var z=A,F=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={activeStory:"Subs",friends:null},a.onStoryChange=a.onStoryChange.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"render",value:function(){return r.a.createElement(b.d,{activeStory:this.state.activeStory,tabbar:r.a.createElement(b.i,null,r.a.createElement(b.j,{onClick:this.onStoryChange,selected:"Subs"===this.state.activeStory,"data-story":"Subs",text:"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438"},r.a.createElement(f.a,{fill:"#FF7F50"})),r.a.createElement(b.j,{onClick:this.onStoryChange,selected:"Geo"===this.state.activeStory,"data-story":"Geo",text:"\u0413\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044f"},r.a.createElement(y.a,{fill:"#228B22"})))},r.a.createElement(b.k,{id:"Subs",activePanel:"Subs"},r.a.createElement(b.g,{id:"Subs"},r.a.createElement(b.h,{separator:!1},"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438"),r.a.createElement(C,null))),r.a.createElement(b.k,{id:"Geo",activePanel:"Geo"},r.a.createElement(b.g,{id:"Geo"},r.a.createElement(b.h,{separator:!1},"\u0413\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044f"),r.a.createElement(z,null))))}}]),n}(r.a.Component);i.a.send("VKWebAppInit").then(),s.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.b32e7a4e.chunk.js.map