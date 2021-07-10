(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29b447a1"],{"8bce":function(e,t,a){"use strict";var s=a("937c"),r=a.n(s);r.a},"937c":function(e,t,a){},eece:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",[a("WeeklyMatches")],1)])},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("h3",{attrs:{align:"center"}},[e._v(" Past Matches")]),a("b-table",{attrs:{items:e.items_past,fields:e.fields_past,striped:"",responsive:"sm"},scopedSlots:e._u([{key:"cell(show_details)",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{size:"sm"},on:{click:t.toggleDetails}},[e._v(" "+e._s(t.detailsShowing?"Hide":"Show")+" Events ")])]}},{key:"row-details",fn:function(t){return[a("b-card",[a("b-table",{attrs:{items:t.item.events,fields:e.fields_events,striped:"",responsive:"sm"}},[a("b-button",{attrs:{size:"sm"},on:{click:t.toggleDetails}},[e._v("Hide Events")])],1)],1)]}},{key:"cell(local_team)",fn:function(t){return[a("router-link",{attrs:{to:{name:"team_page_by_id",params:{id:t.item.local_team_id}}}},[e._v(" "+e._s(t.item.local_team))])]}},{key:"cell(visitor_team)",fn:function(t){return[a("router-link",{attrs:{to:{name:"team_page_by_id",params:{id:t.item.visitor_team_id}}}},[e._v(" "+e._s(t.item.visitor_team))])]}}])})],1),a("div",[a("h3",{attrs:{align:"center"}},[e._v(" Future Matches")]),a("b-table",{attrs:{items:e.items_future,fields:e.fields_future,striped:"",responsive:"sm"},scopedSlots:e._u([e.$root.store.username?{key:"cell(add_to_favorites)",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{size:"sm"},on:{click:function(a){return e.addGameToFavorite(t.item.match_id)}}},[e._v(" "+e._s(t.detailsShowing?"Delete":"Add")+" to favorite ")])]}}:{key:"cell(add_to_favorites)",fn:function(){return[a("h7",{staticStyle:{"font-weight":"bold"}},[e._v("only for registered users")])]},proxy:!0},{key:"cell(local_team)",fn:function(t){return[a("router-link",{attrs:{to:{name:"team_page_by_id",params:{id:t.item.local_team_id}}}},[e._v(" "+e._s(t.item.local_team))])]}},{key:"cell(visitor_team)",fn:function(t){return[a("router-link",{attrs:{to:{name:"team_page_by_id",params:{id:t.item.visitor_team_id}}}},[e._v(" "+e._s(t.item.visitor_team))])]}}],null,!0)})],1)])},n=[],o=(a("96cf"),a("1da1")),c={data:function(){return{fields_past:["match_id","local_team","visitor_team","date_game","hour","venue","result","show_details"],fields_future:["match_id","local_team","visitor_team","date_game","hour","venue","add_to_favorites"],fields_events:["minute_event","description_event","hour"],items_past:[],items_future:[]}},methods:{GetWeeklyMatches:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("http://localhost:3000/weekly_matches/");case 3:a=t.sent,e.items_past=[],e.items_future=[],e.items_past=a.data[0],e.items_past._showDetails=!0,e.items_future=a.data[1],t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0.response),alert("Incorrect details !");case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()},addGameToFavorite:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.axios.post("http://localhost:3000/users/addMatchToFavorite",{match_id:e});case 3:s=a.sent,201==s.status&&t.$root.toast("Add game successfully","Game has been added to your favorites successfully","success"),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),t.$root.toast("Error!","This game is already in your favorite","danger");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()}},mounted:function(){this.GetWeeklyMatches()}},l=c,u=a("2877"),_=Object(u["a"])(l,i,n,!1,null,null,null),m=_.exports,d={components:{WeeklyMatches:m},name:"weekly_matches"},f=d,v=(a("8bce"),Object(u["a"])(f,s,r,!1,null,"ce55a69a",null));t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-29b447a1.29128ec8.js.map