define("components/jashkenas/backbone/backbone",["underscore","jashkenas/underscore","components/jquery"],function(t,e){(function(n,i){if("function"===typeof define&&define.amd)define(["underscore","jquery","exports"],function(t,e,r){n.Backbone=i(n,r,t,e)});else if("undefined"!==typeof e){var r=t("underscore");i(n,e,r)}else n.Backbone=i(n,{},n._,n.jQuery||n.Zepto||n.ender||n.$)})(this,function(t,e,n,i){var r=t.Backbone,o=[];o.push;var s=o.slice;o.splice;e.VERSION="1.1.2";e.$=i;e.noConflict=function(){t.Backbone=r;return this};e.emulateHTTP=!1;e.emulateJSON=!1;var a=e.Events={on:function(t,e,n){if(!u(this,"on",t,[e,n])||!e)return this;this._events||(this._events={});var i=this._events[t]||(this._events[t]=[]);i.push({callback:e,context:n,ctx:n||this});return this},once:function(t,e,i){if(!u(this,"once",t,[e,i])||!e)return this;var r=this,o=n.once(function(){r.off(t,o);e.apply(this,arguments)});o._callback=e;return this.on(t,o,i)},off:function(t,e,i){var r,o,s,a,l,c,h,f;if(!this._events||!u(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events=void 0;return this}a=t?[t]:n.keys(this._events);for(l=0,c=a.length;l<c;l++){t=a[l];if(s=this._events[t]){this._events[t]=r=[];if(e||i)for(h=0,f=s.length;h<f;h++){o=s[h];(e&&e!==o.callback&&e!==o.callback._callback||i&&i!==o.context)&&r.push(o)}r.length||delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!u(this,"trigger",t,e))return this;var n=this._events[t],i=this._events.all;n&&c(n,e);i&&c(i,arguments);return this},stopListening:function(t,e,i){var r=this._listeningTo;if(!r)return this;var o=!e&&!i;i||"object"!==typeof e||(i=this);t&&((r={})[t._listenId]=t);for(var s in r){t=r[s];t.off(e,i,this);(o||n.isEmpty(t._events))&&delete this._listeningTo[s]}return this}},l=/\s+/,u=function(t,e,n,i){if(!n)return!0;if("object"===typeof n){for(var r in n)t[e].apply(t,[r,n[r]].concat(i));return!1}if(l.test(n)){for(var o=n.split(l),s=0,a=o.length;s<a;s++)t[e].apply(t,[o[s]].concat(i));return!1}return!0},c=function(t,e){var n,i=-1,r=t.length,o=e[0],s=e[1],a=e[2];switch(e.length){case 0:for(;++i<r;)(n=t[i]).callback.call(n.ctx);return;case 1:for(;++i<r;)(n=t[i]).callback.call(n.ctx,o);return;case 2:for(;++i<r;)(n=t[i]).callback.call(n.ctx,o,s);return;case 3:for(;++i<r;)(n=t[i]).callback.call(n.ctx,o,s,a);return;default:for(;++i<r;)(n=t[i]).callback.apply(n.ctx,e);return}},h={listenTo:"on",listenToOnce:"once"};n.each(h,function(t,e){a[e]=function(e,i,r){var o=this._listeningTo||(this._listeningTo={}),s=e._listenId||(e._listenId=n.uniqueId("l"));o[s]=e;r||"object"!==typeof i||(r=this);e[t](i,r,this);return this}});a.bind=a.on;a.unbind=a.off;n.extend(e,a);var f=e.Model=function(t,e){var i=t||{};e||(e={});this.cid=n.uniqueId("c");this.attributes={};e.collection&&(this.collection=e.collection);e.parse&&(i=this.parse(i,e)||{});i=n.defaults({},i,n.result(this,"defaults"));this.set(i,e);this.changed={};this.initialize.apply(this,arguments)};n.extend(f.prototype,a,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return n.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return n.escape(this.get(t))},has:function(t){return null!=this.get(t)},set:function(t,e,i){var r,o,s,a,l,u,c,h;if(null==t)return this;if("object"===typeof t){o=t;i=e}else(o={})[t]=e;i||(i={});if(!this._validate(o,i))return!1;s=i.unset;l=i.silent;a=[];u=this._changing;this._changing=!0;if(!u){this._previousAttributes=n.clone(this.attributes);this.changed={}}h=this.attributes,c=this._previousAttributes;this.idAttribute in o&&(this.id=o[this.idAttribute]);for(r in o){e=o[r];n.isEqual(h[r],e)||a.push(r);n.isEqual(c[r],e)?delete this.changed[r]:this.changed[r]=e;s?delete h[r]:h[r]=e}if(!l){a.length&&(this._pending=i);for(var f=0,p=a.length;f<p;f++)this.trigger("change:"+a[f],this,h[a[f]],i)}if(u)return this;if(!l)for(;this._pending;){i=this._pending;this._pending=!1;this.trigger("change",this,i)}this._pending=!1;this._changing=!1;return this},unset:function(t,e){return this.set(t,void 0,n.extend({},e,{unset:!0}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,n.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!n.isEmpty(this.changed):n.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?n.clone(this.changed):!1;var e,i=!1,r=this._changing?this._previousAttributes:this.attributes;for(var o in t)n.isEqual(r[o],e=t[o])||((i||(i={}))[o]=e);return i},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return n.clone(this._previousAttributes)},fetch:function(t){t=t?n.clone(t):{};void 0===t.parse&&(t.parse=!0);var e=this,i=t.success;t.success=function(n){if(!e.set(e.parse(n,t),t))return!1;i&&i(e,n,t);e.trigger("sync",e,n,t)};L(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,o,s,a=this.attributes;if(null==t||"object"===typeof t){r=t;i=e}else(r={})[t]=e;i=n.extend({validate:!0},i);if(r&&!i.wait){if(!this.set(r,i))return!1}else if(!this._validate(r,i))return!1;r&&i.wait&&(this.attributes=n.extend({},a,r));void 0===i.parse&&(i.parse=!0);var l=this,u=i.success;i.success=function(t){l.attributes=a;var e=l.parse(t,i);i.wait&&(e=n.extend(r||{},e));if(n.isObject(e)&&!l.set(e,i))return!1;u&&u(l,t,i);l.trigger("sync",l,t,i)};L(this,i);o=this.isNew()?"create":i.patch?"patch":"update";"patch"===o&&(i.attrs=r);s=this.sync(o,this,i);r&&i.wait&&(this.attributes=a);return s},destroy:function(t){t=t?n.clone(t):{};var e=this,i=t.success,r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(n){(t.wait||e.isNew())&&r();i&&i(e,n,t);e.isNew()||e.trigger("sync",e,n,t)};if(this.isNew()){t.success();return!1}L(this,t);var o=this.sync("delete",this,t);t.wait||r();return o},url:function(){var t=n.result(this,"urlRoot")||n.result(this.collection,"url")||N();return this.isNew()?t:t.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(t){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},n.extend(t||{},{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=n.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return!0;this.trigger("invalid",this,i,n.extend(e,{validationError:i}));return!1}});var p=["keys","values","pairs","invert","pick","omit"];n.each(p,function(t){f.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return n[t].apply(n,e)}});var d=e.Collection=function(t,e){e||(e={});e.model&&(this.model=e.model);void 0!==e.comparator&&(this.comparator=e.comparator);this._reset();this.initialize.apply(this,arguments);t&&this.reset(t,n.extend({silent:!0},e))},v={add:!0,remove:!0,merge:!0},g={add:!0,remove:!1};n.extend(d.prototype,a,{model:f,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,n.extend({merge:!1},e,g))},remove:function(t,e){var i=!n.isArray(t);t=i?[t]:n.clone(t);e||(e={});var r,o,s,a;for(r=0,o=t.length;r<o;r++){a=t[r]=this.get(t[r]);if(a){delete this._byId[a.id];delete this._byId[a.cid];s=this.indexOf(a);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;a.trigger("remove",a,this,e)}this._removeReference(a,e)}}return i?t[0]:t},set:function(t,e){e=n.defaults({},e,v);e.parse&&(t=this.parse(t,e));var i=!n.isArray(t);t=i?t?[t]:[]:n.clone(t);var r,o,s,a,l,u,c,h=e.at,p=this.model,d=this.comparator&&null==h&&e.sort!==!1,g=n.isString(this.comparator)?this.comparator:null,m=[],y=[],b={},w=e.add,$=e.merge,x=e.remove,_=!d&&w&&x?[]:!1;for(r=0,o=t.length;r<o;r++){l=t[r]||{};s=l instanceof f?a=l:l[p.prototype.idAttribute||"id"];if(u=this.get(s)){x&&(b[u.cid]=!0);if($){l=l===a?a.attributes:l;e.parse&&(l=u.parse(l,e));u.set(l,e);d&&!c&&u.hasChanged(g)&&(c=!0)}t[r]=u}else if(w){a=t[r]=this._prepareModel(l,e);if(!a)continue;m.push(a);this._addReference(a,e)}a=u||a;!_||!a.isNew()&&b[a.id]||_.push(a);b[a.id]=!0}if(x){for(r=0,o=this.length;r<o;++r)b[(a=this.models[r]).cid]||y.push(a);y.length&&this.remove(y,e)}if(m.length||_&&_.length){d&&(c=!0);this.length+=m.length;if(null!=h)for(r=0,o=m.length;r<o;r++)this.models.splice(h+r,0,m[r]);else{_&&(this.models.length=0);var k=_||m;for(r=0,o=k.length;r<o;r++)this.models.push(k[r])}}c&&this.sort({silent:!0});if(!e.silent){for(r=0,o=m.length;r<o;r++)(a=m[r]).trigger("add",a,this,e);(c||_&&_.length)&&this.trigger("sort",this,e)}return i?t[0]:t},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++)this._removeReference(this.models[i],e);e.previousModels=this.models;this._reset();t=this.add(t,n.extend({silent:!0},e));e.silent||this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,n.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){return this.add(t,n.extend({at:0},e))},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(){return s.apply(this.models,arguments)},get:function(t){return null==t?void 0:this._byId[t]||this._byId[t.id]||this._byId[t.cid]},at:function(t){return this.models[t]},where:function(t,e){return n.isEmpty(t)?e?void 0:[]:this[e?"find":"filter"](function(e){for(var n in t)if(t[n]!==e.get(n))return!1;return!0})},findWhere:function(t){return this.where(t,!0)},sort:function(t){if(!this.comparator)throw Error("Cannot sort a set without a comparator");t||(t={});n.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(n.bind(this.comparator,this));t.silent||this.trigger("sort",this,t);return this},pluck:function(t){return n.invoke(this.models,"get",t)},fetch:function(t){t=t?n.clone(t):{};void 0===t.parse&&(t.parse=!0);var e=t.success,i=this;t.success=function(n){var r=t.reset?"reset":"set";i[r](n,t);e&&e(i,n,t);i.trigger("sync",i,n,t)};L(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?n.clone(e):{};if(!(t=this._prepareModel(t,e)))return!1;e.wait||this.add(t,e);var i=this,r=e.success;e.success=function(t,n){e.wait&&i.add(t,e);r&&r(t,n,e)};t.save(null,e);return t},parse:function(t){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof f)return t;e=e?n.clone(e):{};e.collection=this;var i=new this.model(t,e);if(!i.validationError)return i;this.trigger("invalid",this,i.validationError,e);return!1},_addReference:function(t){this._byId[t.cid]=t;null!=t.id&&(this._byId[t.id]=t);t.collection||(t.collection=this);t.on("all",this._onModelEvent,this)},_removeReference:function(t){this===t.collection&&delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,n,i){if("add"!==t&&"remove"!==t||n===this){"destroy"===t&&this.remove(e,i);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];null!=e.id&&(this._byId[e.id]=e)}this.trigger.apply(this,arguments)}}});var m=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];n.each(m,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return n[t].apply(n,e)}});var y=["groupBy","countBy","sortBy","indexBy"];n.each(y,function(t){d.prototype[t]=function(e,i){var r=n.isFunction(e)?e:function(t){return t.get(e)};return n[t](this.models,r,i)}});var b=e.View=function(t){this.cid=n.uniqueId("view");t||(t={});n.extend(this,n.pick(t,$));this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},w=/^(\S+)\s*(.*)$/,$=["model","collection","el","id","attributes","className","tagName","events"];n.extend(b.prototype,a,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,n){this.$el&&this.undelegateEvents();this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0];n!==!1&&this.delegateEvents();return this},delegateEvents:function(t){if(!t&&!(t=n.result(this,"events")))return this;this.undelegateEvents();for(var e in t){var i=t[e];n.isFunction(i)||(i=this[t[e]]);if(i){var r=e.match(w),o=r[1],s=r[2];i=n.bind(i,this);o+=".delegateEvents"+this.cid;""===s?this.$el.on(o,i):this.$el.on(o,s,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_ensureElement:function(){if(this.el)this.setElement(n.result(this,"el"),!1);else{var t=n.extend({},n.result(this,"attributes"));this.id&&(t.id=n.result(this,"id"));this.className&&(t["class"]=n.result(this,"className"));var i=e.$("<"+n.result(this,"tagName")+">").attr(t);this.setElement(i,!1)}}});e.sync=function(t,i,r){var o=_[t];n.defaults(r||(r={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var s={type:o,dataType:"json"};r.url||(s.url=n.result(i,"url")||N());if(null==r.data&&i&&("create"===t||"update"===t||"patch"===t)){s.contentType="application/json";s.data=JSON.stringify(r.attrs||i.toJSON(r))}if(r.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(r.emulateHTTP&&("PUT"===o||"DELETE"===o||"PATCH"===o)){s.type="POST";r.emulateJSON&&(s.data._method=o);var a=r.beforeSend;r.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",o);return a?a.apply(this,arguments):void 0}}"GET"===s.type||r.emulateJSON||(s.processData=!1);"PATCH"===s.type&&x&&(s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var l=r.xhr=e.ajax(n.extend(s,r));i.trigger("request",i,l,r);return l};var x="undefined"!==typeof window&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent),_={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var k=e.Router=function(t){t||(t={});t.routes&&(this.routes=t.routes);this._bindRoutes();this.initialize.apply(this,arguments)},C=/\((.*?)\)/g,T=/(\(\?)?:\w+/g,E=/\*\w+/g,j=/[\-{}\[\]+?.,\\\^$|#\s]/g;n.extend(k.prototype,a,{initialize:function(){},route:function(t,i,r){n.isRegExp(t)||(t=this._routeToRegExp(t));if(n.isFunction(i)){r=i;i=""}r||(r=this[i]);var o=this;e.history.route(t,function(n){var s=o._extractParameters(t,n);o.execute(r,s);o.trigger.apply(o,["route:"+i].concat(s));o.trigger("route",i,s);e.history.trigger("route",o,i,s)});return this},execute:function(t,e){t&&t.apply(this,e)},navigate:function(t,n){e.history.navigate(t,n);return this},_bindRoutes:function(){if(this.routes){this.routes=n.result(this,"routes");for(var t,e=n.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(C,"(?:$1)?").replace(T,function(t,e){return e?t:"([^/?]+)"}).replace(E,"([^?]*?)");return RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return n.map(i,function(t,e){return e===i.length-1?t||null:t?decodeURIComponent(t):null})}});var S=e.History=function(){this.handlers=[];n.bindAll(this,"checkUrl");if("undefined"!==typeof window){this.location=window.location;this.history=window.history}},A=/^[#\/]|\s+$/g,P=/^\/+|\/+$/g,O=/msie [\w.]+/,I=/\/$/,D=/#.*$/;S.started=!1;n.extend(S.prototype,a,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(null==t)if(this._hasPushState||!this._wantsHashChange||e){t=decodeURI(this.location.pathname+this.location.search);var n=this.root.replace(I,"");t.indexOf(n)||(t=t.slice(n.length))}else t=this.getHash();return t.replace(A,"")},start:function(t){if(S.started)throw Error("Backbone.history has already been started");S.started=!0;this.options=n.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==!1;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var i=this.getFragment(),r=document.documentMode,o=O.exec(navigator.userAgent.toLowerCase())&&(!r||r<=7);this.root=("/"+this.root+"/").replace(P,"/");if(o&&this._wantsHashChange){var s=e.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=s.hide().appendTo("body")[0].contentWindow;this.navigate(i)}this._hasPushState?e.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!o?e.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval));this.fragment=i;var a=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){this.fragment=this.getFragment(null,!0);this.location.replace(this.root+"#"+this.fragment);return!0}if(this._hasPushState&&this.atRoot()&&a.hash){this.fragment=this.getHash().replace(A,"");this.history.replaceState({},document.title,this.root+this.fragment)}}return this.options.silent?void 0:this.loadUrl()},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);this._checkUrlInterval&&clearInterval(this._checkUrlInterval);S.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(){var t=this.getFragment();t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe)));if(t===this.fragment)return!1;this.iframe&&this.navigate(t);this.loadUrl()},loadUrl:function(t){t=this.fragment=this.getFragment(t);return n.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return!0}})},navigate:function(t,e){if(!S.started)return!1;e&&e!==!0||(e={trigger:!!e});var n=this.root+(t=this.getFragment(t||""));t=t.replace(D,"");if(this.fragment!==t){this.fragment=t;""===t&&"/"!==n&&(n=n.slice(0,-1));if(this._hasPushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){e.replace||this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}return e.trigger?this.loadUrl(t):void 0}},_updateHash:function(t,e,n){if(n){var i=t.href.replace(/(javascript:|#).*$/,"");t.replace(i+"#"+e)}else t.hash="#"+e}});e.history=new S;var B=function(t,e){var i,r=this;i=t&&n.has(t,"constructor")?t.constructor:function(){return r.apply(this,arguments)};n.extend(i,r,e);var o=function(){this.constructor=i};o.prototype=r.prototype;i.prototype=new o;t&&n.extend(i.prototype,t);i.__super__=r.prototype;return i};f.extend=d.extend=k.extend=b.extend=S.extend=B;var N=function(){throw Error('A "url" property or function must be specified')},L=function(t,e){var n=e.error;e.error=function(i){n&&n(t,i,e);t.trigger("error",t,i,e)}};return e})});