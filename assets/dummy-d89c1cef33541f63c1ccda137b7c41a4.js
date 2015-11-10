"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,r){var l;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),a["default"](l,r["default"].modulePrefix),e["default"]=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP,r=a.name,l=a.version;e["default"]=t["default"].extend({version:l,name:r})}),define("dummy/components/vu-meter",["exports","ember-cli-vu-meter/components/vu-meter"],function(e,t){e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/index",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({values:[.5,.9],channelCount:2,redLimit:.85,yellowLimit:.65,peak:!0,peakWidth:2,min:0,max:1,timerRunning:!0,channelNames:t["default"].computed("channelCount",function(){return["left","right","add1","add2"].slice(0,this.get("channelCount"))}),nextValues:function(){for(var e=[],n=0,a=this.get("channelCount");a>n;n++)e.push(Math.random());this.set("values",e),this.get("timerRunning")&&t["default"].run.later(this,this.nextValues,30)},actions:{startStop:function(){var e=this.toggleProperty("timerRunning");e&&this.nextValues()}}})}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){var a=n["default"].APP,r=a.name,l=a.version;e["default"]={name:"App Version",initialize:t["default"](r,l)}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("dummy/routes/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({setupController:function(e,t){this._super(e,t),e.nextValues()}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2");e.setAttribute(n,"id","title");var a=e.createTextNode("Ember UV meters");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,2,2,n),a},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:20,column:28}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("button");e.setAttribute(n,"class","btn btn-default");var a=e.createTextNode("\n    start/stop\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("    \n");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n\nChannel count: ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode(" ");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\nYellow limit: ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode(" ");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\nRed limit: ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode(" ");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("label"),a=e.createTextNode("Peaks ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode(" width: ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode(" ");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n\nMin: ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode(" ");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\nMax: ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode(" ");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n\n\n");e.appendChild(t,n);var n=e.createElement("hr");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("small"),a=e.createTextNode("(random data)");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=new Array(9);return r[0]=e.createElementMorph(a),r[1]=e.createMorphAt(t,5,5,n),r[2]=e.createMorphAt(t,9,9,n),r[3]=e.createMorphAt(t,13,13,n),r[4]=e.createMorphAt(e.childAt(t,[17]),1,1),r[5]=e.createMorphAt(t,19,19,n),r[6]=e.createMorphAt(t,23,23,n),r[7]=e.createMorphAt(t,27,27,n),r[8]=e.createMorphAt(t,33,33,n),r},statements:[["element","action",["startStop"],[],["loc",[null,[2,32],[2,54]]]],["inline","input",[],["type","number","value",["subexpr","@mut",[["get","channelCount",["loc",[null,[7,43],[7,55]]]]],[],[]],"min","1","max","4"],["loc",[null,[7,15],[7,73]]]],["inline","input",[],["type","number","value",["subexpr","@mut",[["get","yellowLimit",["loc",[null,[8,42],[8,53]]]]],[],[]],"min","0.05","max","0.9","step","0.05"],["loc",[null,[8,14],[8,88]]]],["inline","input",[],["type","number","value",["subexpr","@mut",[["get","redLimit",["loc",[null,[9,39],[9,47]]]]],[],[]],"min","0.5","max","0.95","step","0.05"],["loc",[null,[9,11],[9,82]]]],["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","peak",["loc",[null,[11,45],[11,49]]]]],[],[]]],["loc",[null,[11,13],[11,51]]]],["inline","input",[],["type","number","value",["subexpr","@mut",[["get","peakWidth",["loc",[null,[11,95],[11,104]]]]],[],[]],"min","1","max","4"],["loc",[null,[11,67],[11,123]]]],["inline","input",[],["type","number","value",["subexpr","@mut",[["get","min",["loc",[null,[13,33],[13,36]]]]],[],[]],"min",0,"max",.45,"step","0.05"],["loc",[null,[13,5],[13,67]]]],["inline","input",[],["type","number","value",["subexpr","@mut",[["get","max",["loc",[null,[14,33],[14,36]]]]],[],[]],"min",.5,"max",2,"step","0.05"],["loc",[null,[14,5],[14,67]]]],["inline","vu-meter",[],["values",["subexpr","@mut",[["get","values",["loc",[null,[18,18],[18,24]]]]],[],[]],"channelNames",["subexpr","@mut",[["get","channelNames",["loc",[null,[18,38],[18,50]]]]],[],[]],"red",["subexpr","@mut",[["get","redLimit",["loc",[null,[18,55],[18,63]]]]],[],[]],"yellow",["subexpr","@mut",[["get","yellowLimit",["loc",[null,[18,71],[18,82]]]]],[],[]],"peak",["subexpr","@mut",[["get","peak",["loc",[null,[18,88],[18,92]]]]],[],[]],"peakWidth",["subexpr","@mut",[["get","peakWidth",["loc",[null,[18,103],[18,112]]]]],[],[]],"min",["subexpr","@mut",[["get","min",["loc",[null,[18,117],[18,120]]]]],[],[]],"max",["subexpr","@mut",[["get","max",["loc",[null,[18,125],[18,128]]]]],[],[]]],["loc",[null,[18,0],[18,130]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-vu-meter",version:"0.0.1+7ca5d510"});