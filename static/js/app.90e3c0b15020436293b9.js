webpackJsonp([1],{"+wAI":function(t,e){},0:function(t,e){},GBVi:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i=n("mtWM"),o=n("BAfL"),r={name:"StopTime",mounted:function(){this.getStopData()},data:function(){return{routes:[]}},methods:{convertToJSON:function(t){var e=o.xml2json(t,{compact:!0,spaces:4});return JSON.parse(e).body.predictions},getStopData:function(){this.getCurrentTime();var t=this;i.get("http://webservices.nextbus.com/service/publicXMLFeed?command=predictions&a=ttc&stopId=4175").then(function(e){console.log("Get Stop Data Success!");var n=t.convertToJSON(e.data);t.setRoutes(n)}).catch(function(t){console.log(t)})},setRoutes:function(t){var e=this;t.forEach(function(t){var n=t._attributes,s=e.getNextTimes(t.direction.prediction);e.routes.push({routeTag:n.routeTag,routeTitle:n.routeTitle,stopTitle:n.stopTitle,times:s})}),console.log(this.routes)},getNextTimes:function(t){var e=[];return t.forEach(function(t){e.push(t._attributes.minutes)}),e},getCurrentTime:function(){var t=new Date(Date.now()),e=t.getMinutes(),n=t.getHours(),s=n>11?"pm":"am";n>12?n-=12:0==n&&(n="12"),e<10&&(e="0"+e);return n+":"+e+s}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v("King St. West At Jefferson Ave.")]),t._v(" "),n("h2",[t._v("Last Updated: "+t._s(t.getCurrentTime()))]),t._v(" "),t.routes.length>0?[n("h2",[t._v(t._s(t.routes[0].routeTitle))]),t._v("\n    Next Arrival in "),n("span",{staticClass:"highlight"},[t._v(t._s(t.routes[0].times[0])+" minutes")]),t._v(" and "+t._s(t.routes[0].times[1])+" minutes\n    "),n("h2",[t._v(t._s(t.routes[1].routeTitle))]),t._v("\n    Next Arrival in "),n("span",{staticClass:"highlight"},[t._v(t._s(t.routes[1].times[0])+" minutes")]),t._v(" and "+t._s(t.routes[1].times[1])+" minutes  \n  ")]:[t._v("\n    No Data\n  ")]],2)},staticRenderFns:[]},a={name:"app",components:{StopTime:n("VU/8")(r,u,!1,function(t){n("+wAI")},"data-v-2ce45f34",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("StopTime")],1)},staticRenderFns:[]},p=n("VU/8")(a,c,!1,function(t){n("GBVi")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:p}})}},["NHnr"]);
//# sourceMappingURL=app.90e3c0b15020436293b9.js.map