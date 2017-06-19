define("components/jashkenas/underscore/underscore",[],function(t,e,n){(function(){var t=this,i=t._,o={},r=Array.prototype,s=Object.prototype,a=Function.prototype,l=r.push,u=r.slice,c=r.concat,p=s.toString,f=s.hasOwnProperty,h=r.forEach,d=r.map,v=r.reduce,m=r.reduceRight,g=r.filter,y=r.every,b=r.some,w=r.indexOf,$=r.lastIndexOf,x=Array.isArray,C=Object.keys,k=a.bind,T=function(t){if(t instanceof T)return t;if(!(this instanceof T))return new T(t);this._wrapped=t;return void 0};if("undefined"!==typeof e){"undefined"!==typeof n&&n.exports&&(e=n.exports=T);e._=T}else t._=T;T.VERSION="1.6.0";var E=T.each=T.forEach=function(t,e,n){if(null==t)return t;if(h&&t.forEach===h)t.forEach(e,n);else if(t.length===+t.length){for(var i=0,r=t.length;i<r;i++)if(e.call(n,t[i],i,t)===o)return}else for(var s=T.keys(t),i=0,r=s.length;i<r;i++)if(e.call(n,t[s[i]],s[i],t)===o)return;return t};T.map=T.collect=function(t,e,n){var i=[];if(null==t)return i;if(d&&t.map===d)return t.map(e,n);E(t,function(t,o,r){i.push(e.call(n,t,o,r))});return i};var j="Reduce of empty array with no initial value";T.reduce=T.foldl=T.inject=function(t,e,n,i){var o=arguments.length>2;null==t&&(t=[]);if(v&&t.reduce===v){i&&(e=T.bind(e,i));return o?t.reduce(e,n):t.reduce(e)}E(t,function(t,r,s){if(o)n=e.call(i,n,t,r,s);else{n=t;o=!0}});if(!o)throw new TypeError(j);return n};T.reduceRight=T.foldr=function(t,e,n,i){var o=arguments.length>2;null==t&&(t=[]);if(m&&t.reduceRight===m){i&&(e=T.bind(e,i));return o?t.reduceRight(e,n):t.reduceRight(e)}var r=t.length;if(r!==+r){var s=T.keys(t);r=s.length}E(t,function(a,l,u){l=s?s[--r]:--r;if(o)n=e.call(i,n,t[l],l,u);else{n=t[l];o=!0}});if(!o)throw new TypeError(j);return n};T.find=T.detect=function(t,e,n){var i;_(t,function(t,o,r){if(e.call(n,t,o,r)){i=t;return!0}});return i};T.filter=T.select=function(t,e,n){var i=[];if(null==t)return i;if(g&&t.filter===g)return t.filter(e,n);E(t,function(t,o,r){e.call(n,t,o,r)&&i.push(t)});return i};T.reject=function(t,e,n){return T.filter(t,function(t,i,o){return!e.call(n,t,i,o)},n)};T.every=T.all=function(t,e,n){e||(e=T.identity);var i=!0;if(null==t)return i;if(y&&t.every===y)return t.every(e,n);E(t,function(t,r,s){return(i=i&&e.call(n,t,r,s))?void 0:o});return!!i};var _=T.some=T.any=function(t,e,n){e||(e=T.identity);var i=!1;if(null==t)return i;if(b&&t.some===b)return t.some(e,n);E(t,function(t,r,s){return i||(i=e.call(n,t,r,s))?o:void 0});return!!i};T.contains=T.include=function(t,e){return null==t?!1:w&&t.indexOf===w?-1!=t.indexOf(e):_(t,function(t){return t===e})};T.invoke=function(t,e){var n=u.call(arguments,2),i=T.isFunction(e);return T.map(t,function(t){return(i?e:t[e]).apply(t,n)})};T.pluck=function(t,e){return T.map(t,T.property(e))};T.where=function(t,e){return T.filter(t,T.matches(e))};T.findWhere=function(t,e){return T.find(t,T.matches(e))};T.max=function(t,e,n){if(!e&&T.isArray(t)&&t[0]===+t[0]&&t.length<65535)return Math.max.apply(Math,t);var i=-1/0,o=-1/0;E(t,function(t,r,s){var a=e?e.call(n,t,r,s):t;if(a>o){i=t;o=a}});return i};T.min=function(t,e,n){if(!e&&T.isArray(t)&&t[0]===+t[0]&&t.length<65535)return Math.min.apply(Math,t);var i=1/0,o=1/0;E(t,function(t,r,s){var a=e?e.call(n,t,r,s):t;if(a<o){i=t;o=a}});return i};T.shuffle=function(t){var e,n=0,i=[];E(t,function(t){e=T.random(n++);i[n-1]=i[e];i[e]=t});return i};T.sample=function(t,e,n){if(null==e||n){t.length!==+t.length&&(t=T.values(t));return t[T.random(t.length-1)]}return T.shuffle(t).slice(0,Math.max(0,e))};var A=function(t){return null==t?T.identity:T.isFunction(t)?t:T.property(t)};T.sortBy=function(t,e,n){e=A(e);return T.pluck(T.map(t,function(t,i,o){return{value:t,index:i,criteria:e.call(n,t,i,o)}}).sort(function(t,e){var n=t.criteria,i=e.criteria;if(n!==i){if(n>i||void 0===n)return 1;if(n<i||void 0===i)return-1}return t.index-e.index}),"value")};var S=function(t){return function(e,n,i){var o={};n=A(n);E(e,function(r,s){var a=n.call(i,r,s,e);t(o,a,r)});return o}};T.groupBy=S(function(t,e,n){T.has(t,e)?t[e].push(n):t[e]=[n]});T.indexBy=S(function(t,e,n){t[e]=n});T.countBy=S(function(t,e){T.has(t,e)?t[e]++:t[e]=1});T.sortedIndex=function(t,e,n,i){n=A(n);for(var o=n.call(i,e),r=0,s=t.length;r<s;){var a=r+s>>>1;n.call(i,t[a])<o?r=a+1:s=a}return r};T.toArray=function(t){return t?T.isArray(t)?u.call(t):t.length===+t.length?T.map(t,T.identity):T.values(t):[]};T.size=function(t){return null==t?0:t.length===+t.length?t.length:T.keys(t).length};T.first=T.head=T.take=function(t,e,n){return null==t?void 0:null==e||n?t[0]:e<0?[]:u.call(t,0,e)};T.initial=function(t,e,n){return u.call(t,0,t.length-(null==e||n?1:e))};T.last=function(t,e,n){return null==t?void 0:null==e||n?t[t.length-1]:u.call(t,Math.max(t.length-e,0))};T.rest=T.tail=T.drop=function(t,e,n){return u.call(t,null==e||n?1:e)};T.compact=function(t){return T.filter(t,T.identity)};var D=function(t,e,n){if(e&&T.every(t,T.isArray))return c.apply(n,t);E(t,function(t){T.isArray(t)||T.isArguments(t)?e?l.apply(n,t):D(t,e,n):n.push(t)});return n};T.flatten=function(t,e){return D(t,e,[])};T.without=function(t){return T.difference(t,u.call(arguments,1))};T.partition=function(t,e){var n=[],i=[];E(t,function(t){(e(t)?n:i).push(t)});return[n,i]};T.uniq=T.unique=function(t,e,n,i){if(T.isFunction(e)){i=n;n=e;e=!1}var o=n?T.map(t,n,i):t,r=[],s=[];E(o,function(n,i){if(e?!i||s[s.length-1]!==n:!T.contains(s,n)){s.push(n);r.push(t[i])}});return r};T.union=function(){return T.uniq(T.flatten(arguments,!0))};T.intersection=function(t){var e=u.call(arguments,1);return T.filter(T.uniq(t),function(t){return T.every(e,function(e){return T.contains(e,t)})})};T.difference=function(t){var e=c.apply(r,u.call(arguments,1));return T.filter(t,function(t){return!T.contains(e,t)})};T.zip=function(){for(var t=T.max(T.pluck(arguments,"length").concat(0)),e=Array(t),n=0;n<t;n++)e[n]=T.pluck(arguments,""+n);return e};T.object=function(t,e){if(null==t)return{};for(var n={},i=0,o=t.length;i<o;i++)e?n[t[i]]=e[i]:n[t[i][0]]=t[i][1];return n};T.indexOf=function(t,e,n){if(null==t)return-1;var i=0,o=t.length;if(n){if("number"!=typeof n){i=T.sortedIndex(t,e);return t[i]===e?i:-1}i=n<0?Math.max(0,o+n):n}if(w&&t.indexOf===w)return t.indexOf(e,n);for(;i<o;i++)if(t[i]===e)return i;return-1};T.lastIndexOf=function(t,e,n){if(null==t)return-1;var i=null!=n;if($&&t.lastIndexOf===$)return i?t.lastIndexOf(e,n):t.lastIndexOf(e);for(var o=i?n:t.length;o--;)if(t[o]===e)return o;return-1};T.range=function(t,e,n){if(arguments.length<=1){e=t||0;t=0}n=arguments[2]||1;for(var i=Math.max(Math.ceil((e-t)/n),0),o=0,r=Array(i);o<i;){r[o++]=t;t+=n}return r};var P=function(){};T.bind=function(t,e){var n,i;if(k&&t.bind===k)return k.apply(t,u.call(arguments,1));if(!T.isFunction(t))throw new TypeError;n=u.call(arguments,2);return i=function(){if(!(this instanceof i))return t.apply(e,n.concat(u.call(arguments)));P.prototype=t.prototype;var o=new P;P.prototype=null;var r=t.apply(o,n.concat(u.call(arguments)));return Object(r)===r?r:o}};T.partial=function(t){var e=u.call(arguments,1);return function(){for(var n=0,i=e.slice(),o=0,r=i.length;o<r;o++)i[o]===T&&(i[o]=arguments[n++]);for(;n<arguments.length;)i.push(arguments[n++]);return t.apply(this,i)}};T.bindAll=function(t){var e=u.call(arguments,1);if(0===e.length)throw Error("bindAll must be passed function names");E(e,function(e){t[e]=T.bind(t[e],t)});return t};T.memoize=function(t,e){var n={};e||(e=T.identity);return function(){var i=e.apply(this,arguments);return T.has(n,i)?n[i]:n[i]=t.apply(this,arguments)}};T.delay=function(t,e){var n=u.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)};T.defer=function(t){return T.delay.apply(T,[t,1].concat(u.call(arguments,1)))};T.throttle=function(t,e,n){var i,o,r,s=null,a=0;n||(n={});var l=function(){a=n.leading===!1?0:T.now();s=null;r=t.apply(i,o);i=o=null};return function(){var u=T.now();a||n.leading!==!1||(a=u);var c=e-(u-a);i=this;o=arguments;if(c<=0){clearTimeout(s);s=null;a=u;r=t.apply(i,o);i=o=null}else s||n.trailing===!1||(s=setTimeout(l,c));return r}};T.debounce=function(t,e,n){var i,o,r,s,a,l=function(){var u=T.now()-s;if(u<e)i=setTimeout(l,e-u);else{i=null;if(!n){a=t.apply(r,o);r=o=null}}};return function(){r=this;o=arguments;s=T.now();var u=n&&!i;i||(i=setTimeout(l,e));if(u){a=t.apply(r,o);r=o=null}return a}};T.once=function(t){var e,n=!1;return function(){if(n)return e;n=!0;e=t.apply(this,arguments);t=null;return e}};T.wrap=function(t,e){return T.partial(e,t)};T.compose=function(){var t=arguments;return function(){for(var e=arguments,n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}};T.after=function(t,e){return function(){return--t<1?e.apply(this,arguments):void 0}};T.keys=function(t){if(!T.isObject(t))return[];if(C)return C(t);var e=[];for(var n in t)T.has(t,n)&&e.push(n);return e};T.values=function(t){for(var e=T.keys(t),n=e.length,i=Array(n),o=0;o<n;o++)i[o]=t[e[o]];return i};T.pairs=function(t){for(var e=T.keys(t),n=e.length,i=Array(n),o=0;o<n;o++)i[o]=[e[o],t[e[o]]];return i};T.invert=function(t){for(var e={},n=T.keys(t),i=0,o=n.length;i<o;i++)e[t[n[i]]]=n[i];return e};T.functions=T.methods=function(t){var e=[];for(var n in t)T.isFunction(t[n])&&e.push(n);return e.sort()};T.extend=function(t){E(u.call(arguments,1),function(e){if(e)for(var n in e)t[n]=e[n]});return t};T.pick=function(t){var e={},n=c.apply(r,u.call(arguments,1));E(n,function(n){n in t&&(e[n]=t[n])});return e};T.omit=function(t){var e={},n=c.apply(r,u.call(arguments,1));for(var i in t)T.contains(n,i)||(e[i]=t[i]);return e};T.defaults=function(t){E(u.call(arguments,1),function(e){if(e)for(var n in e)void 0===t[n]&&(t[n]=e[n])});return t};T.clone=function(t){return T.isObject(t)?T.isArray(t)?t.slice():T.extend({},t):t};T.tap=function(t,e){e(t);return t};var O=function(t,e,n,i){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return t===e;t instanceof T&&(t=t._wrapped);e instanceof T&&(e=e._wrapped);var o=p.call(t);if(o!=p.call(e))return!1;switch(o){case"[object String]":return t==e+"";case"[object Number]":return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object RegExp]":return t.source==e.source&&t.global==e.global&&t.multiline==e.multiline&&t.ignoreCase==e.ignoreCase}if("object"!=typeof t||"object"!=typeof e)return!1;for(var r=n.length;r--;)if(n[r]==t)return i[r]==e;var s=t.constructor,a=e.constructor;if(s!==a&&!(T.isFunction(s)&&s instanceof s&&T.isFunction(a)&&a instanceof a)&&"constructor"in t&&"constructor"in e)return!1;n.push(t);i.push(e);var l=0,u=!0;if("[object Array]"==o){l=t.length;u=l==e.length;if(u)for(;l--&&(u=O(t[l],e[l],n,i)););}else{for(var c in t)if(T.has(t,c)){l++;if(!(u=T.has(e,c)&&O(t[c],e[c],n,i)))break}if(u){for(c in e)if(T.has(e,c)&&!l--)break;u=!l}}n.pop();i.pop();return u};T.isEqual=function(t,e){return O(t,e,[],[])};T.isEmpty=function(t){if(null==t)return!0;if(T.isArray(t)||T.isString(t))return 0===t.length;for(var e in t)if(T.has(t,e))return!1;return!0};T.isElement=function(t){return!(!t||1!==t.nodeType)};T.isArray=x||function(t){return"[object Array]"==p.call(t)};T.isObject=function(t){return t===Object(t)};E(["Arguments","Function","String","Number","Date","RegExp"],function(t){T["is"+t]=function(e){return p.call(e)=="[object "+t+"]"}});T.isArguments(arguments)||(T.isArguments=function(t){return!(!t||!T.has(t,"callee"))});T.isFunction=function(t){return"function"===typeof t};T.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))};T.isNaN=function(t){return T.isNumber(t)&&t!=+t};T.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"==p.call(t)};T.isNull=function(t){return null===t};T.isUndefined=function(t){return void 0===t};T.has=function(t,e){return f.call(t,e)};T.noConflict=function(){t._=i;return this};T.identity=function(t){return t};T.constant=function(t){return function(){return t}};T.property=function(t){return function(e){return e[t]}};T.matches=function(t){return function(e){if(e===t)return!0;for(var n in t)if(t[n]!==e[n])return!1;return!0}};T.times=function(t,e,n){for(var i=Array(Math.max(0,t)),o=0;o<t;o++)i[o]=e.call(n,o);return i};T.random=function(t,e){if(null==e){e=t;t=0}return t+Math.floor(Math.random()*(e-t+1))};T.now=Date.now||function(){return(new Date).getTime()};var B={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};B.unescape=T.invert(B.escape);var L={escape:RegExp("["+T.keys(B.escape).join("")+"]","g"),unescape:RegExp("("+T.keys(B.unescape).join("|")+")","g")};T.each(["escape","unescape"],function(t){T[t]=function(e){return null==e?"":(""+e).replace(L[t],function(e){return B[t][e]})}});T.result=function(t,e){if(null==t)return void 0;var n=t[e];return T.isFunction(n)?n.call(t):n};T.mixin=function(t){E(T.functions(t),function(e){var n=T[e]=t[e];T.prototype[e]=function(){var t=[this._wrapped];l.apply(t,arguments);return M.call(this,n.apply(T,t))}})};var I=0;T.uniqueId=function(t){var e=++I+"";return t?t+e:e};T.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var F=/(.)^/,N={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},q=/\\|'|\r|\n|\t|\u2028|\u2029/g;T.template=function(t,e,n){var i;n=T.defaults({},n,T.templateSettings);var o=RegExp([(n.escape||F).source,(n.interpolate||F).source,(n.evaluate||F).source].join("|")+"|$","g"),r=0,s="__p+='";t.replace(o,function(e,n,i,o,a){s+=t.slice(r,a).replace(q,function(t){return"\\"+N[t]});n&&(s+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'");i&&(s+="'+\n((__t=("+i+"))==null?'':__t)+\n'");o&&(s+="';\n"+o+"\n__p+='");r=a+e.length;return e});s+="';\n";n.variable||(s="with(obj||{}){\n"+s+"}\n");s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{i=Function(n.variable||"obj","_",s)}catch(a){a.source=s;throw a}if(e)return i(e,T);var l=function(t){return i.call(this,t,T)};l.source="function("+(n.variable||"obj")+"){\n"+s+"}";return l};T.chain=function(t){return T(t).chain()};var M=function(t){return this._chain?T(t).chain():t};T.mixin(T);E(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=r[t];T.prototype[t]=function(){var n=this._wrapped;e.apply(n,arguments);"shift"!=t&&"splice"!=t||0!==n.length||delete n[0];return M.call(this,n)}});E(["concat","join","slice"],function(t){var e=r[t];T.prototype[t]=function(){return M.call(this,e.apply(this._wrapped,arguments))}});T.extend(T.prototype,{chain:function(){this._chain=!0;return this},value:function(){return this._wrapped}});"function"===typeof define&&define.amd&&define("underscore",[],function(){return T})}).call(this)});