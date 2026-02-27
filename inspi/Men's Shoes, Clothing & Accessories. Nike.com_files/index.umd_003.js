/*! For license information please see index.umd.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["React","ReactDOM"],t):"object"==typeof exports?exports["bellotti-playcard"]=t(require("React"),require("ReactDOM")):e["bellotti-playcard"]=t(e.React,e.ReactDOM)}(self,(e,t)=>(()=>{var n={35:(e,t)=>{function n(e,r,o,i,a,c){var s=Math.floor((r-e)/2)+e,l=a(o,i[s],!0);return 0===l?s:l>0?r-s>1?n(s,r,o,i,a,c):c==t.LEAST_UPPER_BOUND?r<i.length?r:-1:s:s-e>1?n(e,s,o,i,a,c):c==t.LEAST_UPPER_BOUND?s:e<0?-1:e}t.GREATEST_LOWER_BOUND=1,t.LEAST_UPPER_BOUND=2,t.search=function(e,r,o,i){if(0===r.length)return-1;var a=n(-1,r.length,e,r,o,i||t.GREATEST_LOWER_BOUND);if(a<0)return-1;for(;a-1>=0&&0===o(r[a],r[a-1],!0);)--a;return a}},54:(e,t,n)=>{"use strict";n.r(t),n.d(t,{focusable:()=>w,getTabIndex:()=>p,isFocusable:()=>O,isTabbable:()=>E,tabbable:()=>x});var r=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],o=r.join(","),i="undefined"==typeof Element,a=i?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=!i&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},s=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},l=function(e,t,n){if(s(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(o));return t&&a.call(e,o)&&r.unshift(e),r.filter(n)},d=function e(t,n,r){for(var i=[],c=Array.from(t);c.length;){var l=c.shift();if(!s(l,!1))if("SLOT"===l.tagName){var d=l.assignedElements(),u=e(d.length?d:l.children,!0,r);r.flatten?i.push.apply(i,u):i.push({scopeParent:l,candidates:u})}else{a.call(l,o)&&r.filter(l)&&(n||!t.includes(l))&&i.push(l);var p=l.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(l),m=!s(p,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(l));if(p&&m){var f=e(!0===p?l.children:p.children,!0,r);r.flatten?i.push.apply(i,f):i.push({scopeParent:l,candidates:f})}else c.unshift.apply(c,l.children)}}return i},u=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},p=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!u(e)?0:e.tabIndex},m=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},f=function(e){return"INPUT"===e.tagName},h=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},g=function(e,t){return!(t.disabled||s(t)||function(e){return f(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=a.call(e,"details>summary:first-of-type")?e.parentElement:e;if(a.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return h(e)}else{if("function"==typeof r){for(var i=e;e;){var s=e.parentElement,l=c(e);if(s&&!s.shadowRoot&&!0===r(s))return h(e);e=e.assignedSlot?e.assignedSlot:s||l===e.ownerDocument?s:l.host}e=i}if(function(e){var t,n,r,o,i=e&&c(e),a=null===(t=i)||void 0===t?void 0:t.host,s=!1;if(i&&i!==e)for(s=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!s&&a;){var l,d,u;s=!(null===(d=a=null===(l=i=c(a))||void 0===l?void 0:l.host)||void 0===d||null===(u=d.ownerDocument)||void 0===u||!u.contains(a))}return s}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some(function(e){return"SUMMARY"===e.tagName})}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!a.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},b=function(e,t){return!(function(e){return function(e){return f(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||c(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)}(t)||p(t)<0||!g(e,t))},y=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},v=function e(t){var n=[],r=[];return t.forEach(function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,c=function(e,t){var n=p(e);return n<0&&t&&!u(e)?0:n}(a,i),s=i?e(t.candidates):a;0===c?i?n.push.apply(n,s):n.push(a):r.push({documentOrder:o,tabIndex:c,item:t,isScope:i,content:s})}),r.sort(m).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(n)},x=function(e,t){var n;return n=(t=t||{}).getShadowRoot?d([e],t.includeContainer,{filter:b.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:y}):l(e,t.includeContainer,b.bind(null,t)),v(n)},w=function(e,t){return(t=t||{}).getShadowRoot?d([e],t.includeContainer,{filter:g.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):l(e,t.includeContainer,g.bind(null,t))},E=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==a.call(e,o)&&b(t,e)},C=r.concat("iframe").join(","),O=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==a.call(e,C)&&g(t,e)}},65:(e,t,n)=>{t.SourceMapGenerator=n(945).SourceMapGenerator,t.SourceMapConsumer=n(606).SourceMapConsumer,t.SourceNode=n(171).SourceNode},83:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(326),t)},139:function(e,t,n){var r,o,i;!function(){"use strict";o=[n(263),n(887),n(885)],r=function(e,t,n){var r={filter:function(e){return-1===(e.functionName||"").indexOf("StackTrace$$")&&-1===(e.functionName||"").indexOf("ErrorStackParser$$")&&-1===(e.functionName||"").indexOf("StackTraceGPS$$")&&-1===(e.functionName||"").indexOf("StackGenerator$$")},sourceCache:{}},o=function(){try{throw new Error}catch(e){return e}};function i(e,t){var n={};return[e,t].forEach(function(e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n}),n}function a(e){return e.stack||e["opera#sourceloc"]}function c(e,t){return"function"==typeof t?e.filter(t):e}return{get:function(e){var t=o();return a(t)?this.fromError(t,e):this.generateArtificially(e)},getSync:function(n){n=i(r,n);var s=o();return c(a(s)?e.parse(s):t.backtrace(n),n.filter)},fromError:function(t,o){o=i(r,o);var a=new n(o);return new Promise(function(n){var r=c(e.parse(t),o.filter);n(Promise.all(r.map(function(e){return new Promise(function(t){function n(){t(e)}a.pinpoint(e).then(t,n).catch(n)})})))}.bind(this))},generateArtificially:function(e){e=i(r,e);var n=t.backtrace(e);return"function"==typeof e.filter&&(n=n.filter(e.filter)),Promise.resolve(n)},instrument:function(e,t,n,r){if("function"!=typeof e)throw new Error("Cannot instrument non-function object");if("function"==typeof e.__stacktraceOriginalFn)return e;var o=function(){try{return this.get().then(t,n).catch(n),e.apply(r||this,arguments)}catch(e){throw a(e)&&this.fromError(e).then(t,n).catch(n),e}}.bind(this);return o.__stacktraceOriginalFn=e,o},deinstrument:function(e){if("function"!=typeof e)throw new Error("Cannot de-instrument non-function object");return"function"==typeof e.__stacktraceOriginalFn?e.__stacktraceOriginalFn:e},report:function(e,t,n,r){return new Promise(function(o,i){var a=new XMLHttpRequest;if(a.onerror=i,a.onreadystatechange=function(){4===a.readyState&&(a.status>=200&&a.status<400?o(a.responseText):i(new Error("POST to "+t+" failed with status: "+a.status)))},a.open("post",t),a.setRequestHeader("Content-Type","application/json"),r&&"object"==typeof r.headers){var c=r.headers;for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&a.setRequestHeader(s,c[s])}var l={stack:e};null!=n&&(l.message=n),a.send(JSON.stringify(l))})}}},void 0===(i=r.apply(t,o))||(e.exports=i)}()},171:(e,t,n)=>{var r=n(945).SourceMapGenerator,o=n(835),i=/(\r?\n)/,a="$$$isSourceNode$$$";function c(e,t,n,r,o){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==n?null:n,this.name=null==o?null:o,this[a]=!0,null!=r&&this.add(r)}c.fromStringWithSourceMap=function(e,t,n){var r=new c,a=e.split(i),s=function(){return a.shift()+(a.shift()||"")},l=1,d=0,u=null;return t.eachMapping(function(e){if(null!==u){if(!(l<e.generatedLine)){var t=(n=a[0]).substr(0,e.generatedColumn-d);return a[0]=n.substr(e.generatedColumn-d),d=e.generatedColumn,p(u,t),void(u=e)}p(u,s()),l++,d=0}for(;l<e.generatedLine;)r.add(s()),l++;if(d<e.generatedColumn){var n=a[0];r.add(n.substr(0,e.generatedColumn)),a[0]=n.substr(e.generatedColumn),d=e.generatedColumn}u=e},this),a.length>0&&(u&&p(u,s()),r.add(a.join(""))),t.sources.forEach(function(e){var i=t.sourceContentFor(e);null!=i&&(null!=n&&(e=o.join(n,e)),r.setSourceContent(e,i))}),r;function p(e,t){if(null===e||void 0===e.source)r.add(t);else{var i=n?o.join(n,e.source):e.source;r.add(new c(e.originalLine,e.originalColumn,i,t,e.name))}}},c.prototype.add=function(e){if(Array.isArray(e))e.forEach(function(e){this.add(e)},this);else{if(!e[a]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},c.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e[a]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},c.prototype.walk=function(e){for(var t,n=0,r=this.children.length;n<r;n++)(t=this.children[n])[a]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},c.prototype.join=function(e){var t,n,r=this.children.length;if(r>0){for(t=[],n=0;n<r-1;n++)t.push(this.children[n]),t.push(e);t.push(this.children[n]),this.children=t}return this},c.prototype.replaceRight=function(e,t){var n=this.children[this.children.length-1];return n[a]?n.replaceRight(e,t):"string"==typeof n?this.children[this.children.length-1]=n.replace(e,t):this.children.push("".replace(e,t)),this},c.prototype.setSourceContent=function(e,t){this.sourceContents[o.toSetString(e)]=t},c.prototype.walkSourceContents=function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t][a]&&this.children[t].walkSourceContents(e);var r=Object.keys(this.sourceContents);for(t=0,n=r.length;t<n;t++)e(o.fromSetString(r[t]),this.sourceContents[r[t]])},c.prototype.toString=function(){var e="";return this.walk(function(t){e+=t}),e},c.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},n=new r(e),o=!1,i=null,a=null,c=null,s=null;return this.walk(function(e,r){t.code+=e,null!==r.source&&null!==r.line&&null!==r.column?(i===r.source&&a===r.line&&c===r.column&&s===r.name||n.addMapping({source:r.source,original:{line:r.line,column:r.column},generated:{line:t.line,column:t.column},name:r.name}),i=r.source,a=r.line,c=r.column,s=r.name,o=!0):o&&(n.addMapping({generated:{line:t.line,column:t.column}}),i=null,o=!1);for(var l=0,d=e.length;l<d;l++)10===e.charCodeAt(l)?(t.line++,t.column=0,l+1===d?(i=null,o=!1):o&&n.addMapping({source:r.source,original:{line:r.line,column:r.column},generated:{line:t.line,column:t.column},name:r.name})):t.column++}),this.walkSourceContents(function(e,t){n.setSourceContent(e,t)}),{code:t.code,map:n}},t.SourceNode=c},187:function(e,t){!function(){"use strict";var n={version:"3.0.1",x86:{},x64:{}};function r(e,t){return(65535&e)*t+(((e>>>16)*t&65535)<<16)}function o(e,t){return e<<t|e>>>32-t}function i(e){return e=r(e^=e>>>16,2246822507),(e=r(e^=e>>>13,3266489909))^e>>>16}function a(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]+t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]+t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]+t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]+t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function c(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]*t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]*t[3],n[1]+=n[2]>>>16,n[2]&=65535,n[2]+=e[3]*t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]*t[3],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[2]*t[2],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[3]*t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function s(e,t){return 32==(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])}function l(e,t){return 0==(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]}function d(e,t){return[e[0]^t[0],e[1]^t[1]]}function u(e){return e=d(e,[0,e[0]>>>1]),e=d(e=c(e,[4283543511,3981806797]),[0,e[0]>>>1]),d(e=c(e,[3301882366,444984403]),[0,e[0]>>>1])}n.x86.hash32=function(e,t){t=t||0;for(var n=(e=e||"").length%4,a=e.length-n,c=t,s=0,l=3432918353,d=461845907,u=0;u<a;u+=4)s=r(s=255&e.charCodeAt(u)|(255&e.charCodeAt(u+1))<<8|(255&e.charCodeAt(u+2))<<16|(255&e.charCodeAt(u+3))<<24,l),s=r(s=o(s,15),d),c=r(c=o(c^=s,13),5)+3864292196;switch(s=0,n){case 3:s^=(255&e.charCodeAt(u+2))<<16;case 2:s^=(255&e.charCodeAt(u+1))<<8;case 1:s=r(s^=255&e.charCodeAt(u),l),c^=s=r(s=o(s,15),d)}return(c=i(c^=e.length))>>>0},n.x86.hash128=function(e,t){t=t||0;for(var n=(e=e||"").length%16,a=e.length-n,c=t,s=t,l=t,d=t,u=0,p=0,m=0,f=0,h=597399067,g=2869860233,b=951274213,y=2716044179,v=0;v<a;v+=16)u=255&e.charCodeAt(v)|(255&e.charCodeAt(v+1))<<8|(255&e.charCodeAt(v+2))<<16|(255&e.charCodeAt(v+3))<<24,p=255&e.charCodeAt(v+4)|(255&e.charCodeAt(v+5))<<8|(255&e.charCodeAt(v+6))<<16|(255&e.charCodeAt(v+7))<<24,m=255&e.charCodeAt(v+8)|(255&e.charCodeAt(v+9))<<8|(255&e.charCodeAt(v+10))<<16|(255&e.charCodeAt(v+11))<<24,f=255&e.charCodeAt(v+12)|(255&e.charCodeAt(v+13))<<8|(255&e.charCodeAt(v+14))<<16|(255&e.charCodeAt(v+15))<<24,u=o(u=r(u,h),15),c=o(c^=u=r(u,g),19),c=r(c+=s,5)+1444728091,p=o(p=r(p,g),16),s=o(s^=p=r(p,b),17),s=r(s+=l,5)+197830471,m=o(m=r(m,b),17),l=o(l^=m=r(m,y),15),l=r(l+=d,5)+2530024501,f=o(f=r(f,y),18),d=o(d^=f=r(f,h),13),d=r(d+=c,5)+850148119;switch(u=0,p=0,m=0,f=0,n){case 15:f^=e.charCodeAt(v+14)<<16;case 14:f^=e.charCodeAt(v+13)<<8;case 13:f=r(f^=e.charCodeAt(v+12),y),d^=f=r(f=o(f,18),h);case 12:m^=e.charCodeAt(v+11)<<24;case 11:m^=e.charCodeAt(v+10)<<16;case 10:m^=e.charCodeAt(v+9)<<8;case 9:m=r(m^=e.charCodeAt(v+8),b),l^=m=r(m=o(m,17),y);case 8:p^=e.charCodeAt(v+7)<<24;case 7:p^=e.charCodeAt(v+6)<<16;case 6:p^=e.charCodeAt(v+5)<<8;case 5:p=r(p^=e.charCodeAt(v+4),g),s^=p=r(p=o(p,16),b);case 4:u^=e.charCodeAt(v+3)<<24;case 3:u^=e.charCodeAt(v+2)<<16;case 2:u^=e.charCodeAt(v+1)<<8;case 1:u=r(u^=e.charCodeAt(v),h),c^=u=r(u=o(u,15),g)}return c^=e.length,c+=s^=e.length,c+=l^=e.length,s+=c+=d^=e.length,l+=c,d+=c,c=i(c),c+=s=i(s),c+=l=i(l),s+=c+=d=i(d),l+=c,d+=c,("00000000"+(c>>>0).toString(16)).slice(-8)+("00000000"+(s>>>0).toString(16)).slice(-8)+("00000000"+(l>>>0).toString(16)).slice(-8)+("00000000"+(d>>>0).toString(16)).slice(-8)},n.x64.hash128=function(e,t){t=t||0;for(var n=(e=e||"").length%16,r=e.length-n,o=[0,t],i=[0,t],p=[0,0],m=[0,0],f=[2277735313,289559509],h=[1291169091,658871167],g=0;g<r;g+=16)p=[255&e.charCodeAt(g+4)|(255&e.charCodeAt(g+5))<<8|(255&e.charCodeAt(g+6))<<16|(255&e.charCodeAt(g+7))<<24,255&e.charCodeAt(g)|(255&e.charCodeAt(g+1))<<8|(255&e.charCodeAt(g+2))<<16|(255&e.charCodeAt(g+3))<<24],m=[255&e.charCodeAt(g+12)|(255&e.charCodeAt(g+13))<<8|(255&e.charCodeAt(g+14))<<16|(255&e.charCodeAt(g+15))<<24,255&e.charCodeAt(g+8)|(255&e.charCodeAt(g+9))<<8|(255&e.charCodeAt(g+10))<<16|(255&e.charCodeAt(g+11))<<24],p=s(p=c(p,f),31),o=a(o=s(o=d(o,p=c(p,h)),27),i),o=a(c(o,[0,5]),[0,1390208809]),m=s(m=c(m,h),33),i=a(i=s(i=d(i,m=c(m,f)),31),o),i=a(c(i,[0,5]),[0,944331445]);switch(p=[0,0],m=[0,0],n){case 15:m=d(m,l([0,e.charCodeAt(g+14)],48));case 14:m=d(m,l([0,e.charCodeAt(g+13)],40));case 13:m=d(m,l([0,e.charCodeAt(g+12)],32));case 12:m=d(m,l([0,e.charCodeAt(g+11)],24));case 11:m=d(m,l([0,e.charCodeAt(g+10)],16));case 10:m=d(m,l([0,e.charCodeAt(g+9)],8));case 9:m=c(m=d(m,[0,e.charCodeAt(g+8)]),h),i=d(i,m=c(m=s(m,33),f));case 8:p=d(p,l([0,e.charCodeAt(g+7)],56));case 7:p=d(p,l([0,e.charCodeAt(g+6)],48));case 6:p=d(p,l([0,e.charCodeAt(g+5)],40));case 5:p=d(p,l([0,e.charCodeAt(g+4)],32));case 4:p=d(p,l([0,e.charCodeAt(g+3)],24));case 3:p=d(p,l([0,e.charCodeAt(g+2)],16));case 2:p=d(p,l([0,e.charCodeAt(g+1)],8));case 1:p=c(p=d(p,[0,e.charCodeAt(g)]),f),o=d(o,p=c(p=s(p,31),h))}return o=a(o=d(o,[0,e.length]),i=d(i,[0,e.length])),i=a(i,o),o=a(o=u(o),i=u(i)),i=a(i,o),("00000000"+(o[0]>>>0).toString(16)).slice(-8)+("00000000"+(o[1]>>>0).toString(16)).slice(-8)+("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)},e.exports&&(t=e.exports=n),t.murmurHash3=n}()},216:(e,t,n)=>{"use strict";n.r(t),n.d(t,{createFocusTrap:()=>R});var r=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=r.join(","),i="undefined"==typeof Element,a=i?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=!i&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},s=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(o));return t&&a.call(e,o)&&r.unshift(e),r.filter(n)},l=function e(t,n,r){for(var i=[],c=Array.from(t);c.length;){var s=c.shift();if("SLOT"===s.tagName){var l=s.assignedElements(),d=e(l.length?l:s.children,!0,r);r.flatten?i.push.apply(i,d):i.push({scope:s,candidates:d})}else{a.call(s,o)&&r.filter(s)&&(n||!t.includes(s))&&i.push(s);var u=s.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(s),p=!r.shadowRootFilter||r.shadowRootFilter(s);if(u&&p){var m=e(!0===u?s.children:u.children,!0,r);r.flatten?i.push.apply(i,m):i.push({scope:s,candidates:m})}else c.unshift.apply(c,s.children)}}return i},d=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},u=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},p=function(e){return"INPUT"===e.tagName},m=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},f=function(e,t){return!(t.disabled||function(e){return p(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=a.call(e,"details>summary:first-of-type")?e.parentElement:e;if(a.call(o,"details:not([open]) *"))return!0;var i=c(e).host,s=(null==i?void 0:i.ownerDocument.contains(i))||e.ownerDocument.contains(e);if(n&&"full"!==n){if("non-zero-area"===n)return m(e)}else{if("function"==typeof r){for(var l=e;e;){var d=e.parentElement,u=c(e);if(d&&!d.shadowRoot&&!0===r(d))return m(e);e=e.assignedSlot?e.assignedSlot:d||u===e.ownerDocument?d:u.host}e=l}if(s)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some(function(e){return"SUMMARY"===e.tagName})}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!a.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},h=function(e,t){return!(function(e){return function(e){return p(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||c(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)}(t)||d(t)<0||!f(e,t))},g=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},b=function e(t){var n=[],r=[];return t.forEach(function(t,o){var i=!!t.scope,a=i?t.scope:t,c=d(a,i),s=i?e(t.candidates):a;0===c?i?n.push.apply(n,s):n.push(a):r.push({documentOrder:o,tabIndex:c,item:t,isScope:i,content:s})}),r.sort(u).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(n)},y=function(e,t){var n;return n=(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:h.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:g}):s(e,t.includeContainer,h.bind(null,t)),b(n)},v=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==a.call(e,o)&&h(t,e)},x=r.concat("iframe").join(","),w=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==a.call(e,x)&&f(t,e)};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach(function(t){O(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k,S=(k=[],{activateTrap:function(e){if(k.length>0){var t=k[k.length-1];t!==e&&t.pause()}var n=k.indexOf(e);-1===n||k.splice(n,1),k.push(e)},deactivateTrap:function(e){var t=k.indexOf(e);-1!==t&&k.splice(t,1),k.length>0&&k[k.length-1].unpause()}}),A=function(e){return setTimeout(e,0)},N=function(e,t){var n=-1;return e.every(function(e,r){return!t(e)||(n=r,!1)}),n},_=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return"function"==typeof e?e.apply(void 0,n):e},P=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},R=function(e,t){var n,r=(null==t?void 0:t.document)||document,o=C({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},a=function(e,t,n){return e&&void 0!==e[t]?e[t]:o[n||t]},c=function(e){return i.containerGroups.findIndex(function(t){var n=t.container,r=t.tabbableNodes;return n.contains(e)||r.find(function(t){return t===e})})},d=function(e){var t=o[e];if("function"==typeof t){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];t=t.apply(void 0,i)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var c=t;if("string"==typeof t&&!(c=r.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return c},u=function(){var e=d("initialFocus");if(!1===e)return!1;if(void 0===e)if(c(r.activeElement)>=0)e=r.activeElement;else{var t=i.tabbableGroups[0];e=t&&t.firstTabbableNode||d("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},p=function(){if(i.containerGroups=i.containers.map(function(e){var t,n,r=y(e,o.tabbableOptions),i=(t=e,(n=(n=o.tabbableOptions)||{}).getShadowRoot?l([t],n.includeContainer,{filter:f.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):s(t,n.includeContainer,f.bind(null,n)));return{container:e,tabbableNodes:r,focusableNodes:i,firstTabbableNode:r.length>0?r[0]:null,lastTabbableNode:r.length>0?r[r.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=i.findIndex(function(t){return t===e});if(!(n<0))return t?i.slice(n+1).find(function(e){return v(e,o.tabbableOptions)}):i.slice(0,n).reverse().find(function(e){return v(e,o.tabbableOptions)})}}}),i.tabbableGroups=i.containerGroups.filter(function(e){return e.tabbableNodes.length>0}),i.tabbableGroups.length<=0&&!d("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},m=function e(t){!1!==t&&t!==r.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!o.preventScroll}),i.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(u()))},h=function(e){var t=d("setReturnFocus",e);return t||!1!==t&&e},g=function(e){var t=P(e);c(t)>=0||(_(o.clickOutsideDeactivates,e)?n.deactivate({returnFocus:o.returnFocusOnDeactivate&&!w(t,o.tabbableOptions)}):_(o.allowOutsideClick,e)||e.preventDefault())},b=function(e){var t=P(e),n=c(t)>=0;n||t instanceof Document?n&&(i.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),m(i.mostRecentlyFocusedNode||u()))},x=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==_(o.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=P(e);p();var n=null;if(i.tabbableGroups.length>0){var r=c(t),a=r>=0?i.containerGroups[r]:void 0;if(r<0)n=e.shiftKey?i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:i.tabbableGroups[0].firstTabbableNode;else if(e.shiftKey){var s=N(i.tabbableGroups,function(e){var n=e.firstTabbableNode;return t===n});if(s<0&&(a.container===t||w(t,o.tabbableOptions)&&!v(t,o.tabbableOptions)&&!a.nextTabbableNode(t,!1))&&(s=r),s>=0){var l=0===s?i.tabbableGroups.length-1:s-1;n=i.tabbableGroups[l].lastTabbableNode}}else{var u=N(i.tabbableGroups,function(e){var n=e.lastTabbableNode;return t===n});if(u<0&&(a.container===t||w(t,o.tabbableOptions)&&!v(t,o.tabbableOptions)&&!a.nextTabbableNode(t))&&(u=r),u>=0){var f=u===i.tabbableGroups.length-1?0:u+1;n=i.tabbableGroups[f].firstTabbableNode}}}else n=d("fallbackFocus");n&&(e.preventDefault(),m(n))}(e)},E=function(e){var t=P(e);c(t)>=0||_(o.clickOutsideDeactivates,e)||_(o.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},O=function(){if(i.active)return S.activateTrap(n),i.delayInitialFocusTimer=o.delayInitialFocus?A(function(){m(u())}):m(u()),r.addEventListener("focusin",b,!0),r.addEventListener("mousedown",g,{capture:!0,passive:!1}),r.addEventListener("touchstart",g,{capture:!0,passive:!1}),r.addEventListener("click",E,{capture:!0,passive:!1}),r.addEventListener("keydown",x,{capture:!0,passive:!1}),n},k=function(){if(i.active)return r.removeEventListener("focusin",b,!0),r.removeEventListener("mousedown",g,!0),r.removeEventListener("touchstart",g,!0),r.removeEventListener("click",E,!0),r.removeEventListener("keydown",x,!0),n};return(n={get active(){return i.active},get paused(){return i.paused},activate:function(e){if(i.active)return this;var t=a(e,"onActivate"),n=a(e,"onPostActivate"),o=a(e,"checkCanFocusTrap");o||p(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=r.activeElement,t&&t();var c=function(){o&&p(),O(),n&&n()};return o?(o(i.containers.concat()).then(c,c),this):(c(),this)},deactivate:function(e){if(!i.active)return this;var t=C({onDeactivate:o.onDeactivate,onPostDeactivate:o.onPostDeactivate,checkCanReturnFocus:o.checkCanReturnFocus},e);clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,k(),i.active=!1,i.paused=!1,S.deactivateTrap(n);var r=a(t,"onDeactivate"),c=a(t,"onPostDeactivate"),s=a(t,"checkCanReturnFocus"),l=a(t,"returnFocus","returnFocusOnDeactivate");r&&r();var d=function(){A(function(){l&&m(h(i.nodeFocusedBeforeActivation)),c&&c()})};return l&&s?(s(h(i.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(){return i.paused||!i.active||(i.paused=!0,k()),this},unpause:function(){return i.paused&&i.active?(i.paused=!1,p(),O(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return i.containers=t.map(function(e){return"string"==typeof e?r.querySelector(e):e}),i.active&&p(),this}}).updateContainerElements(e),n}},238:(e,t,n)=>{var r=n(835);function o(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}o.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},o.prototype.add=function(e){var t,n,o,i,a,c;n=e,o=(t=this._last).generatedLine,i=n.generatedLine,a=t.generatedColumn,c=n.generatedColumn,i>o||i==o&&c>=a||r.compareByGeneratedPositionsInflated(t,n)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},o.prototype.toArray=function(){return this._sorted||(this._array.sort(r.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},t.P=o},263:function(e,t,n){var r,o,i;!function(){"use strict";o=[n(343)],void 0===(i="function"==typeof(r=function(e){var t=/(^|@)\S+:\d+/,n=/^\s*at .*(\S+:\d+|\(native\))/m,r=/^(eval@)?(\[native code])?$/;return{parse:function(e){if(void 0!==e.stacktrace||void 0!==e["opera#sourceloc"])return this.parseOpera(e);if(e.stack&&e.stack.match(n))return this.parseV8OrIE(e);if(e.stack)return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object")},extractLocation:function(e){if(-1===e.indexOf(":"))return[e];var t=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g,""));return[t[1],t[2]||void 0,t[3]||void 0]},parseV8OrIE:function(t){return t.stack.split("\n").filter(function(e){return!!e.match(n)},this).map(function(t){t.indexOf("(eval ")>-1&&(t=t.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var n=t.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),r=n.match(/ (\(.+\)$)/);n=r?n.replace(r[0],""):n;var o=this.extractLocation(r?r[1]:n),i=r&&n||void 0,a=["eval","<anonymous>"].indexOf(o[0])>-1?void 0:o[0];return new e({functionName:i,fileName:a,lineNumber:o[1],columnNumber:o[2],source:t})},this)},parseFFOrSafari:function(t){return t.stack.split("\n").filter(function(e){return!e.match(r)},this).map(function(t){if(t.indexOf(" > eval")>-1&&(t=t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),-1===t.indexOf("@")&&-1===t.indexOf(":"))return new e({functionName:t});var n=/((.*".+"[^@]*)?[^@]*)(?:@)/,r=t.match(n),o=r&&r[1]?r[1]:void 0,i=this.extractLocation(t.replace(n,""));return new e({functionName:o,fileName:i[0],lineNumber:i[1],columnNumber:i[2],source:t})},this)},parseOpera:function(e){return!e.stacktrace||e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length?this.parseOpera9(e):e.stack?this.parseOpera11(e):this.parseOpera10(e)},parseOpera9:function(t){for(var n=/Line (\d+).*script (?:in )?(\S+)/i,r=t.message.split("\n"),o=[],i=2,a=r.length;i<a;i+=2){var c=n.exec(r[i]);c&&o.push(new e({fileName:c[2],lineNumber:c[1],source:r[i]}))}return o},parseOpera10:function(t){for(var n=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,r=t.stacktrace.split("\n"),o=[],i=0,a=r.length;i<a;i+=2){var c=n.exec(r[i]);c&&o.push(new e({functionName:c[3]||void 0,fileName:c[2],lineNumber:c[1],source:r[i]}))}return o},parseOpera11:function(n){return n.stack.split("\n").filter(function(e){return!!e.match(t)&&!e.match(/^Error created at/)},this).map(function(t){var n,r=t.split("@"),o=this.extractLocation(r.pop()),i=r.shift()||"",a=i.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^)]*\)/g,"")||void 0;i.match(/\(([^)]*)\)/)&&(n=i.replace(/^[^(]+\(([^)]*)\)$/,"$1"));var c=void 0===n||"[arguments not available]"===n?void 0:n.split(",");return new e({functionName:a,args:c,fileName:o[0],lineNumber:o[1],columnNumber:o[2],source:t})},this)}}})?r.apply(t,o):r)||(e.exports=i)}()},326:(e,t)=>{"use strict";var n,r,o,i,a,c,s,l,d,u,p,m;Object.defineProperty(t,"__esModule",{value:!0}),t.DISABLE_GUEST_SESSION_IFRAME=t.DEFAULT_USER_LOCATION_DATA=t.DEFAULT_LOCALE_DATA=t.DEFAULT_WEB_SHELL_CLIENT_INFO=t.ANALYTICS_SCRIPT=t.PRIVACY_CORE_SCRIPT=t.CN_GUEST_SESSION_SCRIPT=t.DATA_CAPTURE_SCRIPT=t.MODAL_ROOT_ID=t.VENDOR_SCRIPT_REACT_DOM_URL=t.VENDOR_SCRIPT_REACT_URL=t.HOST_NAME=t.V3=t.NAV_VERSION=t.ENABLE_ASYNC_CHAT=t.KEEPALIVE=t.PRE_FETCH_DEPENDENCIES=void 0,t.PRE_FETCH_DEPENDENCIES={REACT:"React",REACT_DOM:"ReactDOM",REMOTE:"Remote"},t.KEEPALIVE={HTTP_KEEPALIVE_TIMEOUT:61e3,HTTP_HEADERS_TIMEOUT:65e3},t.ENABLE_ASYNC_CHAT=null!==(r=null!==(n={RECO_ASSET_PREFIX:"//www.nike.com/static/bellotti/playcard"}.NEXT_PUBLIC_ENABLE_ASYNC_CHAT)&&void 0!==n?n:{RECO_ASSET_PREFIX:"//www.nike.com/static/bellotti/playcard"}.ENABLE_ASYNC_CHAT)&&void 0!==r?r:"false",t.NAV_VERSION="navVersion",t.V3="v3",t.HOST_NAME=null!==(i=null!==(o={RECO_ASSET_PREFIX:"//www.nike.com/static/bellotti/playcard"}.WS_HOST_NAME)&&void 0!==o?o:{RECO_ASSET_PREFIX:"//www.nike.com/static/bellotti/playcard"}.NEXT_PUBLIC_HOST_NAME)&&void 0!==i?i:{RECO_ASSET_PREFIX:"//www.nike.com/static/bellotti/playcard"}.HOST_NAME,t.VENDOR_SCRIPT_REACT_URL=`https://${t.HOST_NAME}/assets/vendor/react/18.3.1/react.production.min.js`,t.VENDOR_SCRIPT_REACT_DOM_URL=`https://${t.HOST_NAME}/assets/vendor/react-dom/18.3.1/react-dom.production.min.js`,t.MODAL_ROOT_ID="modal-root",t.DATA_CAPTURE_SCRIPT=null!==(c=null!==(a={RECO_ASSET_PREFIX:"//www.nike.com/static/bellotti/playcard"}.WS_DATA_CAPTURE_SCRIPT)&&void 0!==a?a:{RECO_ASSET_PREFIX:"//www.nike.com/static/bellotti/playcard"}.NEXT_PUBLIC_DATA_CAPTURE_SCRIPT)&&void 0!==c?c:{RECO_ASSET_PREFIX:"//www.nike.com/static/bellotti/playcard"}.DATA_CAPTURE_SCRIPT,t.CN_GUEST_SESSION_SCRIPT=null!==(s={RECO_ASSET_PREFIX:"//www.nike.com/static/bellotti/playcard"}.NEXT_PUBLIC_CN_GUEST_SESSION_SCRIPT)&&void 0!==s?s:{RECO_ASSET_PREFIX:"//www.nike.com/static/bellotti/playcard"}.CN_GUEST_SESSION_SCRIPT,t.PRIVACY_CORE_SCRIPT=null!==(l={RECO_ASSET_PREFIX:"//www.nike.com/static/bellotti/playcard"}.PRIVACY_CORE_SCRIPT)&&void 0!==l?l:`https://${t.HOST_NAME}/static/privacy-core/public/privacy-core.js`,t.ANALYTICS_SCRIPT=null!==(u=null!==(d={RECO_ASSET_PREFIX:"//www.nike.com/static/bellotti/playcard"}.WS_ANALYTICS_SCRIPT)&&void 0!==d?d:{RECO_ASSET_PREFIX:"//www.nike.com/static/bellotti/playcard"}.NEXT_PUBLIC_ANALYTICS_SCRIPT)&&void 0!==u?u:{RECO_ASSET_PREFIX:"//www.nike.com/static/bellotti/playcard"}.ANALYTICS_SCRIPT,t.DEFAULT_WEB_SHELL_CLIENT_INFO={identityProvider:null},t.DEFAULT_LOCALE_DATA={cloudUrlFragment:"",country:"us",countryName:"United States",countryNames:{en:"United States"},currency:"USD",currencySymbol:"$",default:!0,hreflang:"en-US",intl:"en-US",langRegion:"en-US",language:"en",urlParam:"en",translationsLanguage:"en-US"},t.DEFAULT_USER_LOCATION_DATA={country:"",state:"",latitude:"",longitude:""},t.DISABLE_GUEST_SESSION_IFRAME=null!==(m=null!==(p={RECO_ASSET_PREFIX:"//www.nike.com/static/bellotti/playcard"}.NEXT_PUBLIC_DISABLE_GUEST_SESSION_IFRAME)&&void 0!==p?p:{RECO_ASSET_PREFIX:"//www.nike.com/static/bellotti/playcard"}.DISABLE_GUEST_SESSION_IFRAME)&&void 0!==m?m:"false"},343:function(e,t){var n,r,o;!function(){"use strict";r=[],void 0===(o="function"==typeof(n=function(){function e(e){return e.charAt(0).toUpperCase()+e.substring(1)}function t(e){return function(){return this[e]}}var n=["isConstructor","isEval","isNative","isToplevel"],r=["columnNumber","lineNumber"],o=["fileName","functionName","source"],i=n.concat(r,o,["args"],["evalOrigin"]);function a(t){if(t)for(var n=0;n<i.length;n++)void 0!==t[i[n]]&&this["set"+e(i[n])](t[i[n]])}a.prototype={getArgs:function(){return this.args},setArgs:function(e){if("[object Array]"!==Object.prototype.toString.call(e))throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof a)this.evalOrigin=e;else{if(!(e instanceof Object))throw new TypeError("Eval Origin must be an Object or StackFrame");this.evalOrigin=new a(e)}},toString:function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",n=this.getColumnNumber()||"",r=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+n+")":"[eval]:"+t+":"+n:r?r+" ("+e+":"+t+":"+n+")":e+":"+t+":"+n}},a.fromString=function(e){var t=e.indexOf("("),n=e.lastIndexOf(")"),r=e.substring(0,t),o=e.substring(t+1,n).split(","),i=e.substring(n+1);if(0===i.indexOf("@"))var c=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i,""),s=c[1],l=c[2],d=c[3];return new a({functionName:r,args:o||void 0,fileName:s,lineNumber:l||void 0,columnNumber:d||void 0})};for(var c=0;c<n.length;c++)a.prototype["get"+e(n[c])]=t(n[c]),a.prototype["set"+e(n[c])]=function(e){return function(t){this[e]=Boolean(t)}}(n[c]);for(var s=0;s<r.length;s++)a.prototype["get"+e(r[s])]=t(r[s]),a.prototype["set"+e(r[s])]=function(e){return function(t){if(n=t,isNaN(parseFloat(n))||!isFinite(n))throw new TypeError(e+" must be a Number");var n;this[e]=Number(t)}}(r[s]);for(var l=0;l<o.length;l++)a.prototype["get"+e(o[l])]=t(o[l]),a.prototype["set"+e(o[l])]=function(e){return function(t){this[e]=String(t)}}(o[l]);return a})?n.apply(t,r):n)||(e.exports=o)}()},556:(e,t,n)=>{e.exports=n(694)()},606:(e,t,n)=>{var r=n(835),o=n(35),i=n(671).C,a=n(860),c=n(737).g;function s(e){var t=e;return"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,""))),null!=t.sections?new u(t):new l(t)}function l(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=r.getArg(t,"version"),o=r.getArg(t,"sources"),a=r.getArg(t,"names",[]),c=r.getArg(t,"sourceRoot",null),s=r.getArg(t,"sourcesContent",null),l=r.getArg(t,"mappings"),d=r.getArg(t,"file",null);if(n!=this._version)throw new Error("Unsupported version: "+n);o=o.map(String).map(r.normalize).map(function(e){return c&&r.isAbsolute(c)&&r.isAbsolute(e)?r.relative(c,e):e}),this._names=i.fromArray(a.map(String),!0),this._sources=i.fromArray(o,!0),this.sourceRoot=c,this.sourcesContent=s,this._mappings=l,this.file=d}function d(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function u(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=r.getArg(t,"version"),o=r.getArg(t,"sections");if(n!=this._version)throw new Error("Unsupported version: "+n);this._sources=new i,this._names=new i;var a={line:-1,column:0};this._sections=o.map(function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var t=r.getArg(e,"offset"),n=r.getArg(t,"line"),o=r.getArg(t,"column");if(n<a.line||n===a.line&&o<a.column)throw new Error("Section offsets must be ordered and non-overlapping.");return a=t,{generatedOffset:{generatedLine:n+1,generatedColumn:o+1},consumer:new s(r.getArg(e,"map"))}})}s.fromSourceMap=function(e){return l.fromSourceMap(e)},s.prototype._version=3,s.prototype.__generatedMappings=null,Object.defineProperty(s.prototype,"_generatedMappings",{get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),s.prototype.__originalMappings=null,Object.defineProperty(s.prototype,"_originalMappings",{get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),s.prototype._charIsMappingSeparator=function(e,t){var n=e.charAt(t);return";"===n||","===n},s.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},s.GENERATED_ORDER=1,s.ORIGINAL_ORDER=2,s.GREATEST_LOWER_BOUND=1,s.LEAST_UPPER_BOUND=2,s.prototype.eachMapping=function(e,t,n){var o,i=t||null;switch(n||s.GENERATED_ORDER){case s.GENERATED_ORDER:o=this._generatedMappings;break;case s.ORIGINAL_ORDER:o=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var a=this.sourceRoot;o.map(function(e){var t=null===e.source?null:this._sources.at(e.source);return null!=t&&null!=a&&(t=r.join(a,t)),{source:t,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}},this).forEach(e,i)},s.prototype.allGeneratedPositionsFor=function(e){var t=r.getArg(e,"line"),n={source:r.getArg(e,"source"),originalLine:t,originalColumn:r.getArg(e,"column",0)};if(null!=this.sourceRoot&&(n.source=r.relative(this.sourceRoot,n.source)),!this._sources.has(n.source))return[];n.source=this._sources.indexOf(n.source);var i=[],a=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",r.compareByOriginalPositions,o.LEAST_UPPER_BOUND);if(a>=0){var c=this._originalMappings[a];if(void 0===e.column)for(var s=c.originalLine;c&&c.originalLine===s;)i.push({line:r.getArg(c,"generatedLine",null),column:r.getArg(c,"generatedColumn",null),lastColumn:r.getArg(c,"lastGeneratedColumn",null)}),c=this._originalMappings[++a];else for(var l=c.originalColumn;c&&c.originalLine===t&&c.originalColumn==l;)i.push({line:r.getArg(c,"generatedLine",null),column:r.getArg(c,"generatedColumn",null),lastColumn:r.getArg(c,"lastGeneratedColumn",null)}),c=this._originalMappings[++a]}return i},t.SourceMapConsumer=s,l.prototype=Object.create(s.prototype),l.prototype.consumer=s,l.fromSourceMap=function(e){var t=Object.create(l.prototype),n=t._names=i.fromArray(e._names.toArray(),!0),o=t._sources=i.fromArray(e._sources.toArray(),!0);t.sourceRoot=e._sourceRoot,t.sourcesContent=e._generateSourcesContent(t._sources.toArray(),t.sourceRoot),t.file=e._file;for(var a=e._mappings.toArray().slice(),s=t.__generatedMappings=[],u=t.__originalMappings=[],p=0,m=a.length;p<m;p++){var f=a[p],h=new d;h.generatedLine=f.generatedLine,h.generatedColumn=f.generatedColumn,f.source&&(h.source=o.indexOf(f.source),h.originalLine=f.originalLine,h.originalColumn=f.originalColumn,f.name&&(h.name=n.indexOf(f.name)),u.push(h)),s.push(h)}return c(t.__originalMappings,r.compareByOriginalPositions),t},l.prototype._version=3,Object.defineProperty(l.prototype,"sources",{get:function(){return this._sources.toArray().map(function(e){return null!=this.sourceRoot?r.join(this.sourceRoot,e):e},this)}}),l.prototype._parseMappings=function(e,t){for(var n,o,i,s,l,u=1,p=0,m=0,f=0,h=0,g=0,b=e.length,y=0,v={},x={},w=[],E=[];y<b;)if(";"===e.charAt(y))u++,y++,p=0;else if(","===e.charAt(y))y++;else{for((n=new d).generatedLine=u,s=y;s<b&&!this._charIsMappingSeparator(e,s);s++);if(i=v[o=e.slice(y,s)])y+=o.length;else{for(i=[];y<s;)a.decode(e,y,x),l=x.value,y=x.rest,i.push(l);if(2===i.length)throw new Error("Found a source, but no line and column");if(3===i.length)throw new Error("Found a source and line, but no column");v[o]=i}n.generatedColumn=p+i[0],p=n.generatedColumn,i.length>1&&(n.source=h+i[1],h+=i[1],n.originalLine=m+i[2],m=n.originalLine,n.originalLine+=1,n.originalColumn=f+i[3],f=n.originalColumn,i.length>4&&(n.name=g+i[4],g+=i[4])),E.push(n),"number"==typeof n.originalLine&&w.push(n)}c(E,r.compareByGeneratedPositionsDeflated),this.__generatedMappings=E,c(w,r.compareByOriginalPositions),this.__originalMappings=w},l.prototype._findMapping=function(e,t,n,r,i,a){if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return o.search(e,t,i,a)},l.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(t.generatedLine===n.generatedLine){t.lastGeneratedColumn=n.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},l.prototype.originalPositionFor=function(e){var t={generatedLine:r.getArg(e,"line"),generatedColumn:r.getArg(e,"column")},n=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",r.compareByGeneratedPositionsDeflated,r.getArg(e,"bias",s.GREATEST_LOWER_BOUND));if(n>=0){var o=this._generatedMappings[n];if(o.generatedLine===t.generatedLine){var i=r.getArg(o,"source",null);null!==i&&(i=this._sources.at(i),null!=this.sourceRoot&&(i=r.join(this.sourceRoot,i)));var a=r.getArg(o,"name",null);return null!==a&&(a=this._names.at(a)),{source:i,line:r.getArg(o,"originalLine",null),column:r.getArg(o,"originalColumn",null),name:a}}}return{source:null,line:null,column:null,name:null}},l.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(e){return null==e})},l.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;if(null!=this.sourceRoot&&(e=r.relative(this.sourceRoot,e)),this._sources.has(e))return this.sourcesContent[this._sources.indexOf(e)];var n;if(null!=this.sourceRoot&&(n=r.urlParse(this.sourceRoot))){var o=e.replace(/^file:\/\//,"");if("file"==n.scheme&&this._sources.has(o))return this.sourcesContent[this._sources.indexOf(o)];if((!n.path||"/"==n.path)&&this._sources.has("/"+e))return this.sourcesContent[this._sources.indexOf("/"+e)]}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},l.prototype.generatedPositionFor=function(e){var t=r.getArg(e,"source");if(null!=this.sourceRoot&&(t=r.relative(this.sourceRoot,t)),!this._sources.has(t))return{line:null,column:null,lastColumn:null};var n={source:t=this._sources.indexOf(t),originalLine:r.getArg(e,"line"),originalColumn:r.getArg(e,"column")},o=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",r.compareByOriginalPositions,r.getArg(e,"bias",s.GREATEST_LOWER_BOUND));if(o>=0){var i=this._originalMappings[o];if(i.source===n.source)return{line:r.getArg(i,"generatedLine",null),column:r.getArg(i,"generatedColumn",null),lastColumn:r.getArg(i,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},u.prototype=Object.create(s.prototype),u.prototype.constructor=s,u.prototype._version=3,Object.defineProperty(u.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var n=0;n<this._sections[t].consumer.sources.length;n++)e.push(this._sections[t].consumer.sources[n]);return e}}),u.prototype.originalPositionFor=function(e){var t={generatedLine:r.getArg(e,"line"),generatedColumn:r.getArg(e,"column")},n=o.search(t,this._sections,function(e,t){return e.generatedLine-t.generatedOffset.generatedLine||e.generatedColumn-t.generatedOffset.generatedColumn}),i=this._sections[n];return i?i.consumer.originalPositionFor({line:t.generatedLine-(i.generatedOffset.generatedLine-1),column:t.generatedColumn-(i.generatedOffset.generatedLine===t.generatedLine?i.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},u.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(e){return e.consumer.hasContentsOfAllSources()})},u.prototype.sourceContentFor=function(e,t){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(e,!0);if(r)return r}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},u.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var n=this._sections[t];if(-1!==n.consumer.sources.indexOf(r.getArg(e,"source"))){var o=n.consumer.generatedPositionFor(e);if(o)return{line:o.line+(n.generatedOffset.generatedLine-1),column:o.column+(n.generatedOffset.generatedLine===o.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},u.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var o=this._sections[n],i=o.consumer._generatedMappings,a=0;a<i.length;a++){var s=i[a],l=o.consumer._sources.at(s.source);null!==o.consumer.sourceRoot&&(l=r.join(o.consumer.sourceRoot,l)),this._sources.add(l),l=this._sources.indexOf(l);var d=o.consumer._names.at(s.name);this._names.add(d),d=this._names.indexOf(d);var u={source:l,generatedLine:s.generatedLine+(o.generatedOffset.generatedLine-1),generatedColumn:s.generatedColumn+(o.generatedOffset.generatedLine===s.generatedLine?o.generatedOffset.generatedColumn-1:0),originalLine:s.originalLine,originalColumn:s.originalColumn,name:d};this.__generatedMappings.push(u),"number"==typeof u.originalLine&&this.__originalMappings.push(u)}c(this.__generatedMappings,r.compareByGeneratedPositionsDeflated),c(this.__originalMappings,r.compareByOriginalPositions)}},671:(e,t,n)=>{var r=n(835),o=Object.prototype.hasOwnProperty;function i(){this._array=[],this._set=Object.create(null)}i.fromArray=function(e,t){for(var n=new i,r=0,o=e.length;r<o;r++)n.add(e[r],t);return n},i.prototype.size=function(){return Object.getOwnPropertyNames(this._set).length},i.prototype.add=function(e,t){var n=r.toSetString(e),i=o.call(this._set,n),a=this._array.length;i&&!t||this._array.push(e),i||(this._set[n]=a)},i.prototype.has=function(e){var t=r.toSetString(e);return o.call(this._set,t)},i.prototype.indexOf=function(e){var t=r.toSetString(e);if(o.call(this._set,t))return this._set[t];throw new Error('"'+e+'" is not in the set.')},i.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},i.prototype.toArray=function(){return this._array.slice()},t.C=i},694:(e,t,n)=>{"use strict";var r=n(925);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},708:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}var s=n(883),l=n(845),d=n(556),u=n(216).createFocusTrap,p=n(54).isFocusable,m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(f,e);var t,n,d,u,m=(d=f,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=c(d);if(u){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}(this,e)});function f(e){var t,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),o=function(e){var t,n=null!==(t=this.internalOptions[e])&&void 0!==t?t:this.originalOptions[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];n=n.apply(void 0,o)}if(!0===n&&(n=void 0),!n){if(void 0===n||!1===n)return n;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var a,c=n;if("string"==typeof n&&!(c=null===(a=this.getDocument())||void 0===a?void 0:a.querySelector(n)))throw new Error("`".concat(e,"` as selector refers to no known node"));return c},(r="getNodeForOption")in(n=a(t=m.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t.handleDeactivate=t.handleDeactivate.bind(a(t)),t.handlePostDeactivate=t.handlePostDeactivate.bind(a(t)),t.handleClickOutsideDeactivates=t.handleClickOutsideDeactivates.bind(a(t)),t.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:t.handleDeactivate,onPostDeactivate:t.handlePostDeactivate,clickOutsideDeactivates:t.handleClickOutsideDeactivates},t.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var i=e.focusTrapOptions;for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&("returnFocusOnDeactivate"!==c&&"onDeactivate"!==c&&"onPostDeactivate"!==c&&"checkCanReturnFocus"!==c&&"clickOutsideDeactivates"!==c?t.internalOptions[c]=i[c]:t.originalOptions[c]=i[c]);return t.outsideClick=null,t.focusTrapElements=e.containerElements||[],t.updatePreviousElement(),t}return t=f,(n=[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||("undefined"!=typeof document?document:void 0)}},{key:"getReturnFocusNode",value:function(){var e=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return e||!1!==e&&this.previouslyFocusedElement}},{key:"updatePreviousElement",value:function(){var e=this.getDocument();e&&(this.previouslyFocusedElement=e.activeElement)}},{key:"deactivateTrap",value:function(){this.focusTrap&&this.focusTrap.active&&this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(e){var t="function"==typeof this.originalOptions.clickOutsideDeactivates?this.originalOptions.clickOutsideDeactivates.call(null,e):this.originalOptions.clickOutsideDeactivates;return t&&(this.outsideClick={target:e.target,allowDeactivation:t}),t}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var e=this,t=function(){var t=e.getReturnFocusNode(),n=!(!e.originalOptions.returnFocusOnDeactivate||null==t||!t.focus||e.outsideClick&&(!e.outsideClick.allowDeactivation||p(e.outsideClick.target,e.internalOptions.tabbableOptions))),r=e.internalOptions.preventScroll,o=void 0!==r&&r;n&&t.focus({preventScroll:o}),e.originalOptions.onPostDeactivate&&e.originalOptions.onPostDeactivate.call(null),e.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(t,t):t()}},{key:"setupFocusTrap",value:function(){if(!this.focusTrap){var e=this.focusTrapElements.map(l.findDOMNode);e.some(Boolean)&&(this.focusTrap=this.props._createFocusTrap(e,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(e){if(this.focusTrap){e.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var t=!e.active&&this.props.active,n=e.active&&!this.props.active,r=!e.paused&&this.props.paused,o=e.paused&&!this.props.paused;if(t&&(this.updatePreviousElement(),this.focusTrap.activate()),n)return void this.deactivateTrap();r&&this.focusTrap.pause(),o&&this.focusTrap.unpause()}else e.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var e=this,t=this.props.children?s.Children.only(this.props.children):void 0;if(t){if(t.type&&t.type===s.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");return s.cloneElement(t,{ref:function(n){var r=e.props.containerElements;t&&("function"==typeof t.ref?t.ref(n):t.ref&&(t.ref.current=n)),e.focusTrapElements=r||[n]}})}return null}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(s.Component),f="undefined"==typeof Element?Function:Element;m.propTypes={active:d.bool,paused:d.bool,focusTrapOptions:d.shape({document:d.object,onActivate:d.func,onPostActivate:d.func,checkCanFocusTrap:d.func,onDeactivate:d.func,onPostDeactivate:d.func,checkCanReturnFocus:d.func,initialFocus:d.oneOfType([d.instanceOf(f),d.string,d.bool,d.func]),fallbackFocus:d.oneOfType([d.instanceOf(f),d.string,d.func]),escapeDeactivates:d.oneOfType([d.bool,d.func]),clickOutsideDeactivates:d.oneOfType([d.bool,d.func]),returnFocusOnDeactivate:d.bool,setReturnFocus:d.oneOfType([d.instanceOf(f),d.string,d.bool,d.func]),allowOutsideClick:d.oneOfType([d.bool,d.func]),preventScroll:d.bool,tabbableOptions:d.shape({displayCheck:d.oneOf(["full","non-zero-area","none"]),getShadowRoot:d.oneOfType([d.bool,d.func])})}),containerElements:d.arrayOf(d.instanceOf(f)),children:d.oneOfType([d.element,d.instanceOf(f)])},m.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:u},e.exports=m},737:(e,t)=>{function n(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function r(e,t,o,i){if(o<i){var a=o-1;n(e,(d=o,u=i,Math.round(d+Math.random()*(u-d))),i);for(var c=e[i],s=o;s<i;s++)t(e[s],c)<=0&&n(e,a+=1,s);n(e,a+1,s);var l=a+1;r(e,t,o,l-1),r(e,t,l+1,i)}var d,u}t.g=function(e,t){r(e,t,0,e.length-1)}},769:(e,t,n)=>{n(187)},835:(e,t)=>{t.getArg=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var n=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,r=/^data:.+\,.+$/;function o(e){var t=e.match(n);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function i(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function a(e){var n=e,r=o(e);if(r){if(!r.path)return e;n=r.path}for(var a,c=t.isAbsolute(n),s=n.split(/\/+/),l=0,d=s.length-1;d>=0;d--)"."===(a=s[d])?s.splice(d,1):".."===a?l++:l>0&&(""===a?(s.splice(d+1,l),l=0):(s.splice(d,2),l--));return""===(n=s.join("/"))&&(n=c?"/":"."),r?(r.path=n,i(r)):n}t.urlParse=o,t.urlGenerate=i,t.normalize=a,t.join=function(e,t){""===e&&(e="."),""===t&&(t=".");var n=o(t),c=o(e);if(c&&(e=c.path||"/"),n&&!n.scheme)return c&&(n.scheme=c.scheme),i(n);if(n||t.match(r))return t;if(c&&!c.host&&!c.path)return c.host=t,i(c);var s="/"===t.charAt(0)?t:a(e.replace(/\/+$/,"")+"/"+t);return c?(c.path=s,i(c)):s},t.isAbsolute=function(e){return"/"===e.charAt(0)||!!e.match(n)},t.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)};var c=!("__proto__"in Object.create(null));function s(e){return e}function l(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var n=t-10;n>=0;n--)if(36!==e.charCodeAt(n))return!1;return!0}function d(e,t){return e===t?0:e>t?1:-1}t.toSetString=c?s:function(e){return l(e)?"$"+e:e},t.fromSetString=c?s:function(e){return l(e)?e.slice(1):e},t.compareByOriginalPositions=function(e,t,n){var r=e.source-t.source;return 0!==r||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)||n||0!==(r=e.generatedColumn-t.generatedColumn)||0!==(r=e.generatedLine-t.generatedLine)?r:e.name-t.name},t.compareByGeneratedPositionsDeflated=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r||0!==(r=e.generatedColumn-t.generatedColumn)||n||0!==(r=e.source-t.source)||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)?r:e.name-t.name},t.compareByGeneratedPositionsInflated=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n||0!==(n=e.generatedColumn-t.generatedColumn)||0!==(n=d(e.source,t.source))||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)?n:d(e.name,t.name)}},845:e=>{"use strict";e.exports=t},860:(e,t,n)=>{var r=n(900);t.encode=function(e){var t,n="",o=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&o,(o>>>=5)>0&&(t|=32),n+=r.encode(t)}while(o>0);return n},t.decode=function(e,t,n){var o,i,a,c,s=e.length,l=0,d=0;do{if(t>=s)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(i=r.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));o=!!(32&i),l+=(i&=31)<<d,d+=5}while(o);n.value=(c=(a=l)>>1,1&~a?c:-c),n.rest=t}},883:t=>{"use strict";t.exports=e},885:function(e,t,n){var r,o,i;!function(){"use strict";o=[n(65),n(343)],void 0===(i="function"==typeof(r=function(e,t){function n(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.open("get",e),r.onerror=n,r.onreadystatechange=function(){4===r.readyState&&(r.status>=200&&r.status<300||"file://"===e.substr(0,7)&&r.responseText?t(r.responseText):n(new Error("HTTP status: "+r.status+" retrieving "+e)))},r.send()})}function r(e){if("undefined"!=typeof window&&window.atob)return window.atob(e);throw new Error("You must supply a polyfill for window.atob in this environment")}function o(e){if("object"!=typeof e)throw new TypeError("Given StackFrame is not an object");if("string"!=typeof e.fileName)throw new TypeError("Given file name is not a String");if("number"!=typeof e.lineNumber||e.lineNumber%1!=0||e.lineNumber<1)throw new TypeError("Given line number must be a positive integer");if("number"!=typeof e.columnNumber||e.columnNumber%1!=0||e.columnNumber<0)throw new TypeError("Given column number must be a non-negative integer");return!0}return function i(a){if(!(this instanceof i))return new i(a);a=a||{},this.sourceCache=a.sourceCache||{},this.sourceMapConsumerCache=a.sourceMapConsumerCache||{},this.ajax=a.ajax||n,this._atob=a.atob||r,this._get=function(e){return new Promise(function(t,n){var r="data:"===e.substr(0,5);if(this.sourceCache[e])t(this.sourceCache[e]);else if(a.offline&&!r)n(new Error("Cannot make network requests in offline mode"));else if(r){var o=e.match(/^data:application\/json;([\w=:"-]+;)*base64,/);if(o){var i=o[0].length,c=e.substr(i),s=this._atob(c);this.sourceCache[e]=s,t(s)}else n(new Error("The encoding of the inline sourcemap is not supported"))}else{var l=this.ajax(e,{method:"get"});this.sourceCache[e]=l,l.then(t,n)}}.bind(this))},this._getSourceMapConsumer=function(t,n){return new Promise(function(r){if(this.sourceMapConsumerCache[t])r(this.sourceMapConsumerCache[t]);else{var o=new Promise(function(r,o){return this._get(t).then(function(t){"string"==typeof t&&(t=function(e){if("undefined"!=typeof JSON&&JSON.parse)return JSON.parse(e);throw new Error("You must supply a polyfill for JSON.parse in this environment")}(t.replace(/^\)\]\}'/,""))),void 0===t.sourceRoot&&(t.sourceRoot=n),r(new e.SourceMapConsumer(t))}).catch(o)}.bind(this));this.sourceMapConsumerCache[t]=o,r(o)}}.bind(this))},this.pinpoint=function(e){return new Promise(function(t,n){this.getMappedLocation(e).then(function(e){function n(){t(e)}this.findFunctionName(e).then(t,n).catch(n)}.bind(this),n)}.bind(this))},this.findFunctionName=function(e){return new Promise(function(n,r){o(e),this._get(e.fileName).then(function(r){var o=e.lineNumber,i=e.columnNumber,a=function(e,t){for(var n=[/['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/,/function\s+([^('"`]*?)\s*\(([^)]*)\)/,/['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/,/\b(?!(?:if|for|switch|while|with|catch)\b)(?:(?:static)\s+)?(\S+)\s*\(.*?\)\s*\{/,/['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*\(.*?\)\s*=>/],r=e.split("\n"),o="",i=Math.min(t,20),a=0;a<i;++a){var c=r[t-a-1],s=c.indexOf("//");if(s>=0&&(c=c.substr(0,s)),c){o=c+o;for(var l=n.length,d=0;d<l;d++){var u=n[d].exec(o);if(u&&u[1])return u[1]}}}}(r,o);n(a?new t({functionName:a,args:e.args,fileName:e.fileName,lineNumber:o,columnNumber:i}):e)},r).catch(r)}.bind(this))},this.getMappedLocation=function(e){return new Promise(function(n,r){(function(){if("function"!=typeof Object.defineProperty||"function"!=typeof Object.create)throw new Error("Unable to consume source maps in older browsers")})(),o(e);var i=this.sourceCache,a=e.fileName;this._get(a).then(function(r){var o=function(e){for(var t,n,r=/\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/gm;n=r.exec(e);)t=n[1];if(t)return t;throw new Error("sourceMappingURL not found")}(r),c="data:"===o.substr(0,5),s=a.substring(0,a.lastIndexOf("/")+1);return"/"===o[0]||c||/^https?:\/\/|^\/\//i.test(o)||(o=s+o),this._getSourceMapConsumer(o,s).then(function(r){return function(e,n,r){return new Promise(function(o,i){var a=n.originalPositionFor({line:e.lineNumber,column:e.columnNumber});if(a.source){var c=n.sourceContentFor(a.source);c&&(r[a.source]=c),o(new t({functionName:a.name||e.functionName,args:e.args,fileName:a.source,lineNumber:a.line,columnNumber:a.column}))}else i(new Error("Could not get original source for given stackframe and source map"))})}(e,r,i).then(n).catch(function(){n(e)})})}.bind(this),r).catch(r)}.bind(this))}}})?r.apply(t,o):r)||(e.exports=i)}()},887:function(e,t,n){var r,o,i;!function(){"use strict";o=[n(343)],r=function(e){return{backtrace:function(t){var n=[],r=10;"object"==typeof t&&"number"==typeof t.maxStackSize&&(r=t.maxStackSize);for(var o=arguments.callee;o&&n.length<r&&o.arguments;){for(var i=new Array(o.arguments.length),a=0;a<i.length;++a)i[a]=o.arguments[a];/function(?:\s+([\w$]+))+\s*\(/.test(o.toString())?n.push(new e({functionName:RegExp.$1||void 0,args:i})):n.push(new e({args:i}));try{o=o.caller}catch(e){break}}return n}}},void 0===(i=r.apply(t,o))||(e.exports=i)}()},900:(e,t)=>{var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");t.encode=function(e){if(0<=e&&e<n.length)return n[e];throw new TypeError("Must be between 0 and 63: "+e)},t.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}},904:e=>{!function(){function t(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function n(e){this.g=document.createElement("div"),this.g.setAttribute("aria-hidden","true"),this.g.appendChild(document.createTextNode(e)),this.h=document.createElement("span"),this.i=document.createElement("span"),this.m=document.createElement("span"),this.j=document.createElement("span"),this.l=-1,this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.h.appendChild(this.m),this.i.appendChild(this.j),this.g.appendChild(this.h),this.g.appendChild(this.i)}function r(e,t){e.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+t+";"}function o(e){var t=e.g.offsetWidth,n=t+100;return e.j.style.width=n+"px",e.i.scrollLeft=n,e.h.scrollLeft=e.h.scrollWidth+100,e.l!==t&&(e.l=t,!0)}function i(e,n){function r(){var e=i;o(e)&&null!==e.g.parentNode&&n(e.l)}var i=e;t(e.h,r),t(e.i,r),o(e)}function a(e,t,n){t=t||{},n=n||window,this.family=e,this.style=t.style||"normal",this.weight=t.weight||"normal",this.stretch=t.stretch||"normal",this.context=n}var c=null,s=null,l=null,d=null;function u(e){return null===d&&(d=!!e.document.fonts),d}function p(e,t){var n=e.style,r=e.weight;if(null===l){var o=document.createElement("div");try{o.style.font="condensed 100px sans-serif"}catch(e){}l=""!==o.style.font}return[n,r,l?e.stretch:"","100px",t].join(" ")}a.prototype.load=function(e,t){var o=this,a=e||"BESbswy",l=0,d=t||3e3,m=(new Date).getTime();return new Promise(function(e,t){if(u(o.context)&&!function(e){return null===s&&(u(e)&&/Apple/.test(window.navigator.vendor)?(e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),s=!!e&&603>parseInt(e[1],10)):s=!1),s}(o.context)){var f=new Promise(function(e,t){!function n(){(new Date).getTime()-m>=d?t(Error(d+"ms timeout exceeded")):o.context.document.fonts.load(p(o,'"'+o.family+'"'),a).then(function(t){1<=t.length?e():setTimeout(n,25)},t)}()}),h=new Promise(function(e,t){l=setTimeout(function(){t(Error(d+"ms timeout exceeded"))},d)});Promise.race([h,f]).then(function(){clearTimeout(l),e(o)},t)}else!function(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t),e()}):document.attachEvent("onreadystatechange",function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),e())})}(function(){function s(){var t;(t=-1!=g&&-1!=b||-1!=g&&-1!=y||-1!=b&&-1!=y)&&((t=g!=b&&g!=y&&b!=y)||(null===c&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),c=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=c&&(g==v&&b==v&&y==v||g==x&&b==x&&y==x||g==w&&b==w&&y==w)),t=!t),t&&(null!==E.parentNode&&E.parentNode.removeChild(E),clearTimeout(l),e(o))}var u=new n(a),f=new n(a),h=new n(a),g=-1,b=-1,y=-1,v=-1,x=-1,w=-1,E=document.createElement("div");E.dir="ltr",r(u,p(o,"sans-serif")),r(f,p(o,"serif")),r(h,p(o,"monospace")),E.appendChild(u.g),E.appendChild(f.g),E.appendChild(h.g),o.context.document.body.appendChild(E),v=u.g.offsetWidth,x=f.g.offsetWidth,w=h.g.offsetWidth,function e(){if((new Date).getTime()-m>=d)null!==E.parentNode&&E.parentNode.removeChild(E),t(Error(d+"ms timeout exceeded"));else{var n=o.context.document.hidden;!0!==n&&void 0!==n||(g=u.g.offsetWidth,b=f.g.offsetWidth,y=h.g.offsetWidth,s()),l=setTimeout(e,50)}}(),i(u,function(e){g=e,s()}),r(u,p(o,'"'+o.family+'",sans-serif')),i(f,function(e){b=e,s()}),r(f,p(o,'"'+o.family+'",serif')),i(h,function(e){y=e,s()}),r(h,p(o,'"'+o.family+'",monospace'))})})},e.exports=a}()},925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},945:(e,t,n)=>{var r=n(860),o=n(835),i=n(671).C,a=n(238).P;function c(e){e||(e={}),this._file=o.getArg(e,"file",null),this._sourceRoot=o.getArg(e,"sourceRoot",null),this._skipValidation=o.getArg(e,"skipValidation",!1),this._sources=new i,this._names=new i,this._mappings=new a,this._sourcesContents=null}c.prototype._version=3,c.fromSourceMap=function(e){var t=e.sourceRoot,n=new c({file:e.file,sourceRoot:t});return e.eachMapping(function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=o.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)}),e.sources.forEach(function(t){var r=e.sourceContentFor(t);null!=r&&n.setSourceContent(t,r)}),n},c.prototype.addMapping=function(e){var t=o.getArg(e,"generated"),n=o.getArg(e,"original",null),r=o.getArg(e,"source",null),i=o.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,i),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=i&&(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:i})},c.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=o.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[o.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[o.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},c.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var a=this._sourceRoot;null!=a&&(r=o.relative(a,r));var c=new i,s=new i;this._mappings.unsortedForEach(function(t){if(t.source===r&&null!=t.originalLine){var i=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=i.source&&(t.source=i.source,null!=n&&(t.source=o.join(n,t.source)),null!=a&&(t.source=o.relative(a,t.source)),t.originalLine=i.line,t.originalColumn=i.column,null!=i.name&&(t.name=i.name))}var l=t.source;null==l||c.has(l)||c.add(l);var d=t.name;null==d||s.has(d)||s.add(d)},this),this._sources=c,this._names=s,e.sources.forEach(function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=o.join(n,t)),null!=a&&(t=o.relative(a,t)),this.setSourceContent(t,r))},this)},c.prototype._validateMapping=function(e,t,n,r){if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},c.prototype._serializeMappings=function(){for(var e,t,n,i,a=0,c=1,s=0,l=0,d=0,u=0,p="",m=this._mappings.toArray(),f=0,h=m.length;f<h;f++){if(e="",(t=m[f]).generatedLine!==c)for(a=0;t.generatedLine!==c;)e+=";",c++;else if(f>0){if(!o.compareByGeneratedPositionsInflated(t,m[f-1]))continue;e+=","}e+=r.encode(t.generatedColumn-a),a=t.generatedColumn,null!=t.source&&(i=this._sources.indexOf(t.source),e+=r.encode(i-u),u=i,e+=r.encode(t.originalLine-1-l),l=t.originalLine-1,e+=r.encode(t.originalColumn-s),s=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=r.encode(n-d),d=n)),p+=e}return p},c.prototype._generateSourcesContent=function(e,t){return e.map(function(e){if(!this._sourcesContents)return null;null!=t&&(e=o.relative(t,e));var n=o.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null},this)},c.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},c.prototype.toString=function(){return JSON.stringify(this.toJSON())},t.SourceMapGenerator=c}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return n[e].call(i.exports,i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";o.r(i),o.d(i,{default:()=>Ss});var e,t=o(883),n=o.n(t);!function(e){e[e.CONTINUE=0]="CONTINUE",e[e.STOP=1]="STOP"}(e||(e={}));class r{constructor(){this.maxAttempts=10,this.interval=50,this.exponentRate=1.5}static run(t){const n=Object.assign(new r,t),{onTick:o,onError:i,onTimeout:a,interval:c,exponentRate:s,maxAttempts:l}=n,d=(t=0)=>{if((t=>{try{return o(t)}catch(t){return i(t instanceof Error?t:new Error("Unknown error occurred")),e.STOP}})(t)===e.STOP)return;if(t+1>=l)return void a();const n=c*Math.pow(t+1,s);setTimeout(()=>{d(t+1)},n)};return d(),n}static runAsync(t,n={}){return new Promise((o,i)=>{r.run({...n,onTick:()=>{const n=t();return n?(o(n),e.STOP):e.CONTINUE},onError:i,onTimeout:()=>{o(null)}})})}}function a(e,t){const n=e instanceof Error?e:new Error(String(e));if(t)for(const[e,r]of Object.entries(t))Object.defineProperty(n,e,{value:r,enumerable:!0,writable:!0,configurable:!0});return n}function c(){try{return"development"==={RECO_ASSET_PREFIX:"//www.nike.com/static/bellotti/playcard"}.MODE||window.location.search.includes("at_cjs_version")||window.location.search.includes("exp_debug")||window.location.search.includes("previewExperience")}catch(e){return console.error("Error determining if logs should be displayed:",e),!1}}const s={info:(...e)=>{c()&&console.info(...e)},debug:(...e)=>{c()&&console.debug(...e)},warn:(...e)=>{c()&&console.warn(...e)},error:(...e)=>{c()&&console.error(...e)},log:(...e)=>{c()&&console.log(...e)}};var l,d;o(769),Math.pow(2,32),(d=l||(l={})).DB_NOT_AVAILABLE="DB_NOT_AVAILABLE",d.CONNECTION_FAILED="CONNECTION_FAILED",d.DB_BLOCKED="DB_BLOCKED",d.DB_UPGRADE_NEEDED="DB_UPGRADE_NEEDED",d.DB_VERSION_ERROR="DB_VERSION_ERROR",d.DB_NAME_REQUIRED="DB_NAME_REQUIRED",d.DB_VERSION_REQUIRED="DB_VERSION_REQUIRED",d.DB_TIMEOUT="DB_TIMEOUT",d.STORE_NAME_REQUIRED="STORE_NAME_REQUIRED",d.STORE_NOT_FOUND="STORE_NOT_FOUND",d.STORE_ALREADY_EXISTS="STORE_ALREADY_EXISTS",d.TRANSACTION_FAILED="TRANSACTION_FAILED",d.TRANSACTION_ABORTED="TRANSACTION_ABORTED",d.READ_ONLY_TRANSACTION_WRITE_ATTEMPT="READ_ONLY_TRANSACTION_WRITE_ATTEMPT",d.INVALID_KEY="INVALID_KEY",d.KEY_ALREADY_EXISTS="KEY_ALREADY_EXISTS",d.DATA_REQUIRED="DATA_REQUIRED",d.INVALID_DATA_TYPE="INVALID_DATA_TYPE",d.DATA_CLONE_ERROR="DATA_CLONE_ERROR",d.DATA_ERROR="DATA_ERROR",d.INSERT_FAILED="INSERT_FAILED",d.UPDATE_FAILED="UPDATE_FAILED",d.GET_FAILED="GET_FAILED",d.DELETE_FAILED="DELETE_FAILED",d.CURSOR_FAILED="CURSOR_FAILED",d.TTL_CLEANUP_FAILED="TTL_CLEANUP_FAILED",d.EXPIRED_DATA_STORE_CLEANUP_FAILED="EXPIRED_DATA_STORE_CLEANUP_FAILED",d.EXPIRED_DATA="EXPIRED_DATA",d.INVALID_DB_INSTANCE="INVALID_DB_INSTANCE",d.DB_REQUIRED="DB_REQUIRED",d.QUOTA_EXCEEDED="QUOTA_EXCEEDED",d.UNKNOWN_ERROR="UNKNOWN_ERROR",d.INVALID_CURSOR_ITERATOR="INVALID_CURSOR_ITERATOR",d.INVALID_CURSOR_QUERY="INVALID_CURSOR_QUERY",d.INVALID_CURSOR_DIRECTION="INVALID_CURSOR_DIRECTION",o.g.Error;const u=["/ae/en/","/ar/es/","/at/de/","/at/en/","/au/en/","/be/nl/","/be/de/","/be/en/","/be/fr/","/bg/en/","/ca/en/","/ca/fr/","/ch/de/","/ch/en/","/ch/fr/","/ch/it/","/cl/es/","/cn/zh/","/cz/cs/","/cz/en/","/de/de/","/dk/da/","/dk/en/","/eg/en/","/es/es/","/es/ca/","/fi/en/","/fr/fr/","/gb/en/","/gr/el/","/hr/en/","/hu/hu/","/hu/en/","/id/en/","/ie/en/","/il/en/","/in/en/","/it/it/","/jp/ja/","/jp/en/","/kr/ko/","/kr/en/","/lu/fr/","/lu/de/","/lu/en/","/ma/fr/","/ma/en/","/mx/es/","/my/en/","/nl/nl/","/nl/en/","/no/no/","/no/en/","/nz/en/","/ph/en/","/pl/pl/","/pr/es/","/pt/pt/","/pt/en/","/ro/en/","/ru/ru/","/sa/en/","/se/sv/","/se/en/","/sg/en/","/si/en/","/sk/en/","/th/th/","/tr/tr/","/tw/zh/","/us/en/","/us/es/","/uy/es/","/vn/en/","/za/en/","/xl/es/"];var p=o(139);function m(e,t){return{[`${e.toLowerCase()}_version`]:t}}function f(e,t){const n=m(e,t);return window.experimentation?.platformsVersions&&Array.isArray(window.experimentation.platformsVersions)?window.experimentation.platformsVersions.reduce((e,{platform:t,version:n})=>({...e,...m(t,n)}),n):n}class h{constructor(e,t){this.config=e,this.logSink=t,this.getStackTrace=e=>0===e.length?"Stack trace unavailable":`FILE: ${String(e[0].fileName)} LINE: ${String(e[0].lineNumber)} Column: ${String(e[0].columnNumber)} FUNCTION: ${String(e[0].functionName)}`}getReporterParams(){return[this.config,this.logSink]}extractErrorMetadata(e,t){const n=Object.getOwnPropertyNames(e).filter(e=>"name"!==e&&"message"!==e&&"stack"!==e).reduce((t,n)=>(t[n]=e[n],t),{});return{errorMessage:e.message||"Unknown error message",...n,errorStack:this.getStackTrace(t)}}async debug(e,t,n){if(n instanceof Error){const e=n;try{const t=await p.fromError(e);n=this.extractErrorMetadata(e,t)}catch{n=this.extractErrorMetadata(e,[])}}if(n?.error){const{error:e,...t}=n;if(e instanceof Error)try{const r=await p.fromError(e),o=this.extractErrorMetadata(e,r);n={...t,...o}}catch{const r=this.extractErrorMetadata(e,[]);n={...t,...r}}}const r={severity:e,logMessage:t,...n,...f(this.config.platform,this.config.version)};s[e](this.config.platform,r),this.logSink.log(this.config.platform,r)}info(e,t){this.debug("info",e,t)}error(e,t){this.debug("error",e,t)}log(e,t){this.debug("log",e,t)}warn(e,t){this.debug("warn",e,t)}}class g{constructor(e,t=8e3,n=100){this.loggerProvider=e,this.timeoutMs=t,this.checkIntervalMs=n,this._queue=[],this.loggerFn=null,this.isReady=!1,this.hasTimedOut=!1,this.checkInterval=null,this.timeoutTimer=null,this.startChecking()}startChecking(){this.checkLogger(),this.checkInterval=setInterval(()=>{this.checkLogger()},this.checkIntervalMs),this.timeoutTimer=setTimeout(()=>{this.handleTimeout()},this.timeoutMs)}checkLogger(){if(this.isReady||this.hasTimedOut)return;const e=this.loggerProvider();e&&(this.loggerFn=e,this.isReady=!0,this.flushQueue(),this.cleanup())}handleTimeout(){this.isReady||(this.hasTimedOut=!0,this._queue=[],this.cleanup())}flushQueue(){if(this.loggerFn&&0!==this._queue.length){for(const{eventName:e,data:t}of this._queue)this.loggerFn(e,t);this._queue=[]}}cleanup(){this.checkInterval&&(clearInterval(this.checkInterval),this.checkInterval=null),this.timeoutTimer&&(clearTimeout(this.timeoutTimer),this.timeoutTimer=null)}log(e,t){this.hasTimedOut||(this.isReady&&this.loggerFn?this.loggerFn(e,t):this._queue.push({eventName:e,data:t}))}get ready(){return this.isReady}get timedOut(){return this.hasTimedOut}get queue(){return this._queue}}function b(e){var t,n;t=e.platform,n=e.version,window.experimentation||(window.experimentation={}),window.experimentation.platformsVersions||(window.experimentation.platformsVersions=[]),window.experimentation.platformsVersions.push({platform:t,version:n});const r=new g(()=>{const e=function(){if(window.location.href.includes("gs-checkout")){const e=window.experimentation.newrelic;if(e&&"function"==typeof e.addPageAction)return e;!function(){const e=(e,t)=>{const n=function(e){if("object"!=typeof e||null===e)return{};const t={};for(const[n,r]of Object.entries(e))if(null!=r)if("string"==typeof r||"number"==typeof r||"boolean"==typeof r)t[n]=r;else if(Array.isArray(r)||"object"==typeof r)try{t[n]=JSON.stringify(r)}catch(e){s.warn(`Failed to serialize attribute "${n}":`,e),t[n]=String(r)}else t[n]=String(r);return t}(t),r={eventType:"PageAction",actionName:e,...function(){const e={appName:"eshopworld",currentUrl:window.location.href,referrerUrl:document.referrer||""},t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);e.deviceType=t?"Mobile":"Desktop";const n=navigator.userAgent;return n.includes("Chrome")&&!n.includes("Edg")?e.userAgentName="Chrome":n.includes("Safari")&&!n.includes("Chrome")?e.userAgentName="Safari":n.includes("Firefox")?e.userAgentName="Firefox":n.includes("Edg")?e.userAgentName="Edge":e.userAgentName="Unknown",n.includes("Windows")?e.userAgentOS="Windows":n.includes("Android")?e.userAgentOS="Android":n.includes("iPhone")||n.includes("iPad")?e.userAgentOS="iPhone":n.includes("Mac")?e.userAgentOS="Mac":n.includes("Linux")?e.userAgentOS="Linux":e.userAgentOS="Unknown",e}(),...n};fetch("https://insights-collector.newrelic.com/v1/accounts/714737/events",{method:"POST",headers:{"Content-Type":"application/json","X-Insert-Key":"2lrxTiTBk6-5ot3iFiVRFwzX40tQTtw7"},body:JSON.stringify(r)}).catch(e=>{s.error("Failed to send event to New Relic:",e)})};window.experimentation||(window.experimentation={}),window.experimentation.newrelic={addPageAction:(t,n)=>{e(t,n)},noticeError:(t,n)=>{const r={errorMessage:t.message,errorStack:t.stack,"error.class":t.name,...n};e("JavaScriptError",r)},loader_config:{licenseKey:"f6e2d580c7"}}}();const t=window.experimentation.newrelic;return t&&"function"==typeof t.addPageAction?t:void s.warn("[experimentation-utils] Failed to create mock New Relic agent")}const e=window.newrelic;if(e&&"function"==typeof e.addPageAction)return e}();return e?.addPageAction?e.addPageAction.bind(e):void 0});return new h(e,r)}let y=function(e){return e.PLAYMAKER_FALLBACK_GET_ACTIVATIONS="PLAYMAKER_FALLBACK_GET_ACTIVATIONS",e.PLAYCARD_INITIALIZED="PLAYCARD_INITIALIZED",e.PLAYCARD_COMPONENT_MOUNTED="PLAYCARD_COMPONENT_MOUNTED",e.PLAYCARD_COMPONENT_ACTIVATED="PLAYCARD_COMPONENT_ACTIVATED",e}({}),v=function(e){return e.PLAYCARD_EXCEPTION="PLAYCARD_EXCEPTION",e.PLAYCARD_MODAL_NOT_ALLOWED="PLAYCARD_MODAL_NOT_ALLOWED",e.PLAYMAKER_NOT_AVAILABLE="PLAYMAKER_NOT_AVAILABLE",e.FAILED_TO_RETRIEVE_PLAYMAKER_INSTANCE="FAILED_TO_RETRIEVE_PLAYMAKER_INSTANCE",e.USE_PLAYMAKER_OUTSIDE_PROVIDER="USE_PLAYMAKER_OUTSIDE_PROVIDER",e}({});const x=(0,t.createContext)(void 0);function w(e){let{children:r}=e;const[o,i]=(0,t.useState)();return(0,t.useEffect)(()=>{(async()=>{try{const e=await b({version:"2.4.4-rc.5",platform:"BELLOTTI_PLAYCARD"});e&&(e.info(y.PLAYCARD_INITIALIZED),i(e))}catch(e){s.error("Failed to create logger:",e)}})()},[]),n().createElement(x.Provider,{value:o},r)}function E(){return(0,t.useContext)(x)}const C="search-bar-container",O="search-opened",k="confirmation--modalcontainer";const S=(0,t.createContext)({activeActivations:[],dismissActivation:()=>{}});async function A(){const e=await r.runAsync(()=>{var e;return null===(e=window.bellotti)||void 0===e?void 0:e.playmaker});if(!e){const e=new Error("Playmaker is not available.");throw a(e,{playmakerContext:"window.bellotti?.playmaker"}),e}return e}const N=e=>{let{children:r}=e;const o=E(),[i,a]=(0,t.useState)([]),c=(0,t.useCallback)(e=>{let t=[];var n,r;e.getActiveActivationsData?t=null!==(n=e.getActiveActivationsData())&&void 0!==n?n:[]:(t=(null!==(r=e.getActiveActivations())&&void 0!==r?r:[]).map(t=>e.getActivationById(t)),null==o||o.info(y.PLAYMAKER_FALLBACK_GET_ACTIVATIONS,"Playmaker version does not support getActiveActivationsData, falling back to getActiveActivations and getActivationById."));a(t)},[]);return(0,t.useEffect)(()=>{A().then(e=>{c(e),e.onActivationStatusChanged(()=>{c(e)})}).catch(e=>{null==o||o.error(v.PLAYMAKER_NOT_AVAILABLE,e)})},[]),n().createElement(S.Provider,{value:{activeActivations:i,dismissActivation:e=>{a(t=>t.filter(t=>t.id!==e))}}},r)};var _=o(83);const P=(0,t.createContext)(_.DEFAULT_LOCALE_DATA),R=({locale:e,children:t})=>{if("undefined"!=typeof window){const{locale:r}=window.webShellClient,o=null!=e?e:r.get();return n().createElement(P.Provider,{value:o},t)}return n().createElement(P.Provider,{value:null!=e?e:_.DEFAULT_LOCALE_DATA},t)},T=()=>(0,t.useContext)(P);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var I=function(){return"undefined"!==("undefined"==typeof window?"undefined":j(window))};function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o,i,a,c,s,l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){a=[],c=!0,s=!1;try{if(o=(l=l.call(e)).next,0===t){if(Object(l)!==l)return;c=!1}else for(;!(c=(n=o.call(l)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=l.return&&(i=l.return(),Object(i)!==i))return}finally{if(s)throw r}}return a}}(e,t)||function(e,t){var n;if(e)return"string"==typeof e?M(e,t):("Object"===(n={}.toString.call(e).slice(8,-1))&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){var n,r;for((null==t||t>e.length)&&(t=e.length),n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).defaultMatch,r=void 0!==n&&n,o=!(!I()||!window.matchMedia),i=(0,t.useMemo)(function(){return o?window.matchMedia("string"===L(e)?e.replace("@media","").trim():""):{matches:r}},[r,o,e]),a=D((0,t.useState)(i.matches),2),c=a[0],s=a[1];return(0,t.useEffect)(function(){var e;if(o)return e=function(e){s(e.matches)},s(i.matches),i.addListener(e),function(){return i.removeListener(e)}},[i,o]),c};const $={podiumCdsBreakpointXs:"320px",podiumCdsBreakpointS:"600px",podiumCdsBreakpointM:"960px",podiumCdsBreakpointL:"1440px",podiumCdsBreakpointXl:"1920px"};function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var z=function(e,t){if(!t)return"";var n=$["podiumCdsBreakpoint".concat(function(e){return"string"!==F(e)?e:e[0]?e[0].toUpperCase()+e.slice(1):e}(t))];if(!n)return"";var r=parseInt(n,10),o={lt:r-1,lte:r,gte:r,gt:r+1},i={lt:"max-width",lte:"max-width",gte:"min-width",gt:"min-width"};return i[e]&&o[e]?"@media (".concat(String(i[e]),": ").concat(String(o[e]),"px)"):""},U=(0,t.createContext)({}),G=function(e){var r=e.children,o=e.lang,i=(e.themeExtension,function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["children","lang","themeExtension"])),a=(0,t.useMemo)(function(){return Object.assign({language:o},i)},[o,i]);return n().createElement(U.Provider,{value:a},r)},W=function(e){var r=e.children,o=e.lang,i=void 0===o?"en-us":o,a=e.themeExtension,c=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["children","lang","themeExtension"]);return(0,t.useEffect)(function(){window.document&&function(e){var t,n;e&&((n=null!==(t=document.getElementById("custom-podium-css-extension"))&&void 0!==t?t:document.createElement("style")).setAttribute("id","custom-podium-css-extension"),n.innerHTML="\n    :root {\n      ".concat(Object.keys(e).map(function(t){var n=t.replace(/[A-Z]/g,function(e){return"-".concat(e.toLowerCase())}).replace(/[0-9]\d+/g,function(e){return"-".concat(e)});return"--".concat(n,": ").concat(e[t],";\n")}).join(""),"\n    }\n  "),document.head.appendChild(n))}(a)},[a]),n().createElement(G,Object.assign({lang:i,themeExtension:a},c),r)};const H=(0,t.createContext)(_.DEFAULT_LOCALE_DATA),Y=({locale:e,children:t})=>{if("undefined"!=typeof window){const{locale:r}=window.webShellClient,o=null!=e?e:r.get();return n().createElement(H.Provider,{value:o},t)}return n().createElement(H.Provider,{value:null!=e?e:_.DEFAULT_LOCALE_DATA},t)},V={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let K;const X=new Uint8Array(16);function q(){if(!K&&(K="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!K))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return K(X)}const Q=[];for(let e=0;e<256;++e)Q.push((e+256).toString(16).slice(1));const Z=function(e,t,n){if(V.randomUUID&&!t&&!e)return V.randomUUID();const r=(e=e||{}).random||(e.rng||q)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return function(e,t=0){return Q[e[t+0]]+Q[e[t+1]]+Q[e[t+2]]+Q[e[t+3]]+"-"+Q[e[t+4]]+Q[e[t+5]]+"-"+Q[e[t+6]]+Q[e[t+7]]+"-"+Q[e[t+8]]+Q[e[t+9]]+"-"+Q[e[t+10]]+Q[e[t+11]]+Q[e[t+12]]+Q[e[t+13]]+Q[e[t+14]]+Q[e[t+15]]}(r)};class J{constructor(e=!1){this.highPriority=!1,this.dialogId="",this.dialogId=Z(),this.highPriority=e}}class ee extends Event{constructor(e,t){super(e),this.dialog=t}}class te extends EventTarget{constructor(){super(),this.debugMode=!1,this.debug=(e=!0)=>{this.debugMode=e},this.debugMessage=e=>{this.debugMode&&console.log(e)},this.onInitialize=async()=>this.initialized,this.closeDialogInQueue=(e,t)=>{if(t.length){if(t[0].dialogId!==e.dialogId){const n=t.findIndex(t=>t.dialogId===e.dialogId);return-1===n?void this.debugMessage(`cannot close dialog: ${e.dialogId}, it is not in the queue`):void t.splice(n,1)}t.shift(),this.dispatchEvent(new ee(te.DIALOG_CLOSED,e)),this.showTopDialogInQueue(t)}else this.debugMode&&this.debugMessage(`cannot close dialog: ${e.dialogId}, the queue is empty`)},this.openDialogInQueue=(e,t)=>{if(!t.includes(e)){if(e.highPriority&&t.length){const n=t[0];this.dispatchEvent(new ee(te.DIALOG_DISPLACED,n)),t.unshift(e)}else t.push(e);this.showTopDialogInQueue(t)}},this.initialized=new Promise(e=>{this.debugMessage(`${this.constructor.name} initialized`),e()})}showTopDialogInQueue(e){e.length&&this.dispatchEvent(new ee(te.DIALOG_OPENED,e[0]))}}var ne;te.DIALOG_OPENED="dialogOpened",te.DIALOG_CLOSED="dialogClosed",te.DIALOG_DISPLACED="dialogDisplaced";class re extends te{static getInstance(){return"undefined"!=typeof window?(window.modalManager||(window.modalManager=new ne),window.modalManager):new ne}constructor(){if(super(),this.modalQueue=[],this.__clearModalQueue__=()=>{this.modalQueue=[]},this.closeModal=e=>{this.closeDialogInQueue(e,this.modalQueue),this.modalQueue.length||(this.debugMessage("removing aria-hidden from siblings"),[...document.body.querySelectorAll(`:scope > [aria-hidden="true"][${ne.ARIA_HIDDEN_BY}]`)].forEach(e=>{this.debugMessage(`removing aria-hidden from ${e}`),e.removeAttribute("aria-hidden"),e.removeAttribute(ne.ARIA_HIDDEN_BY)}))},this.openModal=e=>{this.openDialogInQueue(e,this.modalQueue),this.debugMessage("setting aria-hidden on #modal-root siblings"),[...document.body.querySelectorAll(ne.SIBLING_SELECTOR)].forEach(e=>{this.debugMessage(`setting aria-hidden on ${e}`),e.setAttribute("aria-hidden","true"),e.setAttribute(ne.ARIA_HIDDEN_BY,"true")}),ne.ERRANT_MODAL_SELECTORS.forEach(e=>{[...document.body.querySelectorAll(e)].forEach(e=>{e.remove()})})},"undefined"!=typeof window&&!window.document.getElementById("modal-root")){this.debugMessage("adding #modal-root to the body");const e=window.document.createElement("div");e.id="modal-root",window.document.body.appendChild(e)}}}ne=re,re.ERRANT_MODAL_SELECTORS=Array(),re.ARIA_HIDDEN_EXEMPT="data-shell-aria-hidden-exempt",re.ROOT_SELECTOR="#modal-root",re.SIBLING_SELECTOR=`:scope > :not(${ne.ROOT_SELECTOR}):not([aria-hidden="true"]):not([${ne.ARIA_HIDDEN_EXEMPT}]):not(script)`,re.ARIA_HIDDEN_BY="data-shell-aria-hidden-by-dialog";const oe=re.getInstance();function ie(e=!1){const[n,r]=(0,t.useState)(!1),[o]=(0,t.useState)(new J(e));let i=()=>{},a=()=>{},c=()=>{},s=()=>{};const l=()=>(s(),oe.closeModal(o),!0);return(0,t.useEffect)(()=>{const e=e=>{e.dialog.dialogId===o.dialogId&&(r(!0),a())};oe.addEventListener(re.DIALOG_OPENED,e);const t=e=>{e.dialog.dialogId===o.dialogId&&(r(!1),c())};oe.addEventListener(re.DIALOG_DISPLACED,t);const n=e=>{e.dialog.dialogId===o.dialogId&&(r(!1),i())};return oe.addEventListener(re.DIALOG_CLOSED,n),()=>{oe.removeEventListener(re.DIALOG_OPENED,e),oe.removeEventListener(re.DIALOG_DISPLACED,t),oe.removeEventListener(re.DIALOG_CLOSED,n),l()}},[]),{isOpen:n,openModal:()=>(oe.openModal(o),!0),closeModal:l,onAfterClose:e=>{i=e},onAfterOpen:e=>{a=e},onAfterDisplaced:e=>{c=e},onRequestClose:e=>{s=e}}}const ae="SHOWN",ce="CLICK_PRIMARY_CTA";function se(e){var{appearances:r,logger:o,component:i}=e,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["appearances","logger","component"]);const[c,s]=(0,t.useState)(!1),{data:l,l10n:d,onCloseModal:u,onCtaEvents:p}=a,{openModal:m,closeModal:f,isOpen:h}=ie(),g=window.webShellClient.locale.get(),b=B(z("gte","m")),y=B(z("lte","s")),[v,x]=function(e,n,r,o,i){return(0,t.useMemo)(()=>{var t;if(!o)return e.warn("No data provided for component",{data:o}),[null,null];const a=null!==(t=o.appearance)&&void 0!==t?t:"default";if(!(i&&Object.keys(i).length>0))return e.warn("No localization data provided for component",{data:o}),[null,null];const c=r[a];return c?[c,{data:o,l10n:i,testID:`bellotti-${n}-${a}`}]:(e.error(`No component found for given appearance: ${a}`),[null,null])},[n,o,i])}(o,i,r,l,d),w=(0,t.useCallback)(()=>{f()&&u()},[f,u]),E=(0,t.useCallback)(({eventType:e},t)=>{f()&&(p({eventType:e}),t&&t())},[f,p]);return(0,t.useEffect)(()=>{c||!y&&!b||(s(!0),m()&&p({eventType:ae}))},[c,b,y,p,m]),v&&x&&(y||b)?n().createElement(Y,{locale:g},n().createElement(W,{lang:g.language},n().createElement(v,Object.assign({},x,{isOpen:h,onCloseModal:w,onCtaEvents:E})))):null}function le(e){return le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(e)}function de(e,t,n){return(t=function(e){var t=function(e){if("object"!=le(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=le(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==le(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const ue=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}};var pe=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;const me=ue(function(e){return pe.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91});function fe(e,t){return fe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},fe(e,t)}function he(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,fe(e,t)}var ge=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t,n=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(n,t),this.tags.push(n)}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var o=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{var i=105===e.charCodeAt(1)&&64===e.charCodeAt(0);o.insertRule(e,i?0:o.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}();const be=function(e){function t(e,r,s,l,p){for(var m,f,h,g,x,E=0,C=0,O=0,k=0,S=0,T=0,I=h=m=0,M=0,L=0,B=0,$=0,F=s.length,z=F-1,U="",G="",W="",H="";M<F;){if(f=s.charCodeAt(M),M===z&&0!==C+k+O+E&&(0!==C&&(f=47===C?10:47),k=O=E=0,F++,z++),0===C+k+O+E){if(M===z&&(0<L&&(U=U.replace(u,"")),0<U.trim().length)){switch(f){case 32:case 9:case 59:case 13:case 10:break;default:U+=s.charAt(M)}f=59}switch(f){case 123:for(m=(U=U.trim()).charCodeAt(0),h=1,$=++M;M<F;){switch(f=s.charCodeAt(M)){case 123:h++;break;case 125:h--;break;case 47:switch(f=s.charCodeAt(M+1)){case 42:case 47:e:{for(I=M+1;I<z;++I)switch(s.charCodeAt(I)){case 47:if(42===f&&42===s.charCodeAt(I-1)&&M+2!==I){M=I+1;break e}break;case 10:if(47===f){M=I+1;break e}}M=I}}break;case 91:f++;case 40:f++;case 34:case 39:for(;M++<z&&s.charCodeAt(M)!==f;);}if(0===h)break;M++}if(h=s.substring($,M),0===m&&(m=(U=U.replace(d,"").trim()).charCodeAt(0)),64===m){switch(0<L&&(U=U.replace(u,"")),f=U.charCodeAt(1)){case 100:case 109:case 115:case 45:L=r;break;default:L=R}if($=(h=t(r,L,h,f,p+1)).length,0<j&&(x=c(3,h,L=n(R,U,B),r,N,A,$,f,p,l),U=L.join(""),void 0!==x&&0===($=(h=x.trim()).length)&&(f=0,h="")),0<$)switch(f){case 115:U=U.replace(w,a);case 100:case 109:case 45:h=U+"{"+h+"}";break;case 107:h=(U=U.replace(b,"$1 $2"))+"{"+h+"}",h=1===P||2===P&&i("@"+h,3)?"@-webkit-"+h+"@"+h:"@"+h;break;default:h=U+h,112===l&&(G+=h,h="")}else h=""}else h=t(r,n(r,U,B),h,l,p+1);W+=h,h=B=L=I=m=0,U="",f=s.charCodeAt(++M);break;case 125:case 59:if(1<($=(U=(0<L?U.replace(u,""):U).trim()).length))switch(0===I&&(m=U.charCodeAt(0),45===m||96<m&&123>m)&&($=(U=U.replace(" ",":")).length),0<j&&void 0!==(x=c(1,U,r,e,N,A,G.length,l,p,l))&&0===($=(U=x.trim()).length)&&(U="\0\0"),m=U.charCodeAt(0),f=U.charCodeAt(1),m){case 0:break;case 64:if(105===f||99===f){H+=U+s.charAt(M);break}default:58!==U.charCodeAt($-1)&&(G+=o(U,m,f,U.charCodeAt(2)))}B=L=I=m=0,U="",f=s.charCodeAt(++M)}}switch(f){case 13:case 10:47===C?C=0:0===1+m&&107!==l&&0<U.length&&(L=1,U+="\0"),0<j*D&&c(0,U,r,e,N,A,G.length,l,p,l),A=1,N++;break;case 59:case 125:if(0===C+k+O+E){A++;break}default:switch(A++,g=s.charAt(M),f){case 9:case 32:if(0===k+E+C)switch(S){case 44:case 58:case 9:case 32:g="";break;default:32!==f&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===k+C+E&&(L=B=1,g="\f"+g);break;case 108:if(0===k+C+E+_&&0<I)switch(M-I){case 2:112===S&&58===s.charCodeAt(M-3)&&(_=S);case 8:111===T&&(_=T)}break;case 58:0===k+C+E&&(I=M);break;case 44:0===C+O+k+E&&(L=1,g+="\r");break;case 34:case 39:0===C&&(k=k===f?0:0===k?f:k);break;case 91:0===k+C+O&&E++;break;case 93:0===k+C+O&&E--;break;case 41:0===k+C+E&&O--;break;case 40:0===k+C+E&&(0===m&&(2*S+3*T==533||(m=1)),O++);break;case 64:0===C+O+k+E+I+h&&(h=1);break;case 42:case 47:if(!(0<k+E+O))switch(C){case 0:switch(2*f+3*s.charCodeAt(M+1)){case 235:C=47;break;case 220:$=M,C=42}break;case 42:47===f&&42===S&&$+2!==M&&(33===s.charCodeAt($+2)&&(G+=s.substring($,M+1)),g="",C=0)}}0===C&&(U+=g)}T=S,S=f,M++}if(0<($=G.length)){if(L=r,0<j&&void 0!==(x=c(2,G,L,e,N,A,$,l,p,l))&&0===(G=x).length)return H+G+W;if(G=L.join(",")+"{"+G+"}",0!==P*_){switch(2!==P||i(G,2)||(_=0),_){case 111:G=G.replace(v,":-moz-$1")+G;break;case 112:G=G.replace(y,"::-webkit-input-$1")+G.replace(y,"::-moz-$1")+G.replace(y,":-ms-input-$1")+G}_=0}}return H+G+W}function n(e,t,n){var o=t.trim().split(h);t=o;var i=o.length,a=e.length;switch(a){case 0:case 1:var c=0;for(e=0===a?"":e[0]+" ";c<i;++c)t[c]=r(e,t[c],n).trim();break;default:var s=c=0;for(t=[];c<i;++c)for(var l=0;l<a;++l)t[s++]=r(e[l]+" ",o[c],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function o(e,t,n,r){var a=e+";",c=2*t+3*n+4*r;if(944===c){e=a.indexOf(":",9)+1;var s=a.substring(e,a.length-1).trim();return s=a.substring(0,e).trim()+s+";",1===P||2===P&&i(s,1)?"-webkit-"+s+s:s}if(0===P||2===P&&!i(a,1))return a;switch(c){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(S,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(s=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+s+a;case 1005:return m.test(a)?a.replace(p,":-webkit-")+a.replace(p,":-moz-")+a:a;case 1e3:switch(t=(s=a.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=a.replace(x,"tb");break;case 232:s=a.replace(x,"tb-rl");break;case 220:s=a.replace(x,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+s+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(t=(a=e).length-10,c=(s=(33===a.charCodeAt(t)?a.substring(0,t):a).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:a=a.replace(s,"-webkit-"+s)+";"+a;break;case 207:case 102:a=a.replace(s,"-webkit-"+(102<c?"inline-":"")+"box")+";"+a.replace(s,"-webkit-"+s)+";"+a.replace(s,"-ms-"+s+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return s=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+s+"-ms-flex-"+s+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(C,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(C,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===k.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?o(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):a.replace(s,"-webkit-"+s)+a.replace(s,"-moz-"+s.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,211===n+r&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(f,"$1-webkit-$2")+a}return a}function i(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),I(2!==t?r:r.replace(O,"$1"),n,t)}function a(e,t){var n=o(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(E," or ($1)").substring(4):"("+t+")"}function c(e,t,n,r,o,i,a,c,s,d){for(var u,p=0,m=t;p<j;++p)switch(u=T[p].call(l,e,m,n,r,o,i,a,c,s,d)){case void 0:case!1:case!0:case null:break;default:m=u}if(m!==t)return m}function s(e){return void 0!==(e=e.prefix)&&(I=null,e?"function"!=typeof e?P=1:(P=2,I=e):P=0),s}function l(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<j){var o=c(-1,n,r,r,N,A,0,0,0,0);void 0!==o&&"string"==typeof o&&(n=o)}var i=t(R,r,n,0,0);return 0<j&&void 0!==(o=c(-2,i,r,r,N,A,i.length,0,0,0))&&(i=o),_=0,A=N=1,i}var d=/^\0+/g,u=/[\0\r\f]/g,p=/: */g,m=/zoo|gra/,f=/([,: ])(transform)/g,h=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,v=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,C=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,k=/stretch|:\s*\w+\-(?:conte|avail)/,S=/([^-])(image-set\()/,A=1,N=1,_=0,P=1,R=[],T=[],j=0,I=null,D=0;return l.use=function e(t){switch(t){case void 0:case null:j=T.length=0;break;default:if("function"==typeof t)T[j++]=t;else if("object"==typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else D=0|!!t}return e},l.set=s,void 0!==e&&s(e),l};var ye="/*|*/",ve=ye+"}";function xe(e){e&&we.current.insert(e+"}")}var we={current:null},Ee=function(e,t,n,r,o,i,a,c,s,l){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return we.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===c)return t+ye;break;case 3:switch(c){case 102:case 112:return we.current.insert(n[0]+t),"";default:return t+(0===l?ye:"")}case-2:t.split(ve).forEach(xe)}};function Ce(e,t,n){var r="";return n.split(" ").forEach(function(n){void 0!==e[n]?t.push(e[n]):r+=n+" "}),r}var Oe=function(e,t,n){var r=e.key+"-"+t.name;if(!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles),void 0===e.inserted[t.name]){var o=t;do{e.insert("."+r,o,e.sheet,!0),o=o.next}while(void 0!==o)}};const ke=function(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)},Se={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var Ae=/[A-Z]|^ms/g,Ne=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_e=function(e){return 45===e.charCodeAt(1)},Pe=function(e){return null!=e&&"boolean"!=typeof e},Re=ue(function(e){return _e(e)?e:e.replace(Ae,"-$&").toLowerCase()}),Te=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(Ne,function(e,t,n){return Ie={name:t,styles:n,next:Ie},t})}return 1===Se[e]||_e(e)||"number"!=typeof t||0===t?t:t+"px"};function je(e,t,n,r){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return Ie={name:n.name,styles:n.styles,next:Ie},n.name;if(void 0!==n.styles){var o=n.next;if(void 0!==o)for(;void 0!==o;)Ie={name:o.name,styles:o.styles,next:Ie},o=o.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=je(e,t,n[o],!1);else for(var i in n){var a=n[i];if("object"!=typeof a)null!=t&&void 0!==t[a]?r+=i+"{"+t[a]+"}":Pe(a)&&(r+=Re(i)+":"+Te(i,a)+";");else if(!Array.isArray(a)||"string"!=typeof a[0]||null!=t&&void 0!==t[a[0]]){var c=je(e,t,a,!1);switch(i){case"animation":case"animationName":r+=Re(i)+":"+c+";";break;default:r+=i+"{"+c+"}"}}else for(var s=0;s<a.length;s++)Pe(a[s])&&(r+=Re(i)+":"+Te(i,a[s])+";")}return r}(e,t,n);case"function":if(void 0!==e){var i=Ie,a=n(e);return Ie=i,je(e,t,a,r)}}if(null==t)return n;var c=t[n];return void 0===c||r?n:c}var Ie,De=/label:\s*([^\s;\n{]+)\s*;/g,Me=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,o="";Ie=void 0;var i=e[0];null==i||void 0===i.raw?(r=!1,o+=je(n,t,i,!1)):o+=i[0];for(var a=1;a<e.length;a++)o+=je(n,t,e[a],46===o.charCodeAt(o.length-1)),r&&(o+=i[a]);De.lastIndex=0;for(var c,s="";null!==(c=De.exec(o));)s+="-"+c[1];return{name:ke(o)+s,styles:o,next:Ie}};const Le=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Me(t)};var Be=(0,t.createContext)("undefined"!=typeof HTMLElement?function(e){void 0===e&&(e={});var t,n=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var r,o=new be(t),i={};r=e.container||document.head;var a,c=document.querySelectorAll("style[data-emotion-"+n+"]");Array.prototype.forEach.call(c,function(e){e.getAttribute("data-emotion-"+n).split(" ").forEach(function(e){i[e]=!0}),e.parentNode!==r&&r.appendChild(e)}),o.use(e.stylisPlugins)(Ee),a=function(e,t,n,r){var i=t.name;we.current=n,o(e,t.styles),r&&(s.inserted[i]=!0)};var s={key:n,sheet:new ge({key:n,container:r,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:i,registered:{},insert:a};return s}():null),$e=(0,t.createContext)({}),Fe=(Be.Provider,function(e){return(0,t.forwardRef)(function(n,r){return(0,t.createElement)(Be.Consumer,null,function(t){return e(n,t,r)})})});Object.prototype.hasOwnProperty;var ze=Fe(function(e,n){var r=e.styles;if("function"==typeof r)return(0,t.createElement)($e.Consumer,null,function(e){var o=Me([r(e)]);return(0,t.createElement)(Ue,{serialized:o,cache:n})});var o=Me([r]);return(0,t.createElement)(Ue,{serialized:o,cache:n})}),Ue=function(e){function t(t,n,r){return e.call(this,t,n,r)||this}he(t,e);var n=t.prototype;return n.componentDidMount=function(){this.sheet=new ge({key:this.props.cache.key+"-global",nonce:this.props.cache.sheet.nonce,container:this.props.cache.sheet.container});var e=document.querySelector("style[data-emotion-"+this.props.cache.key+'="'+this.props.serialized.name+'"]');null!==e&&this.sheet.tags.push(e),this.props.cache.sheet.tags.length&&(this.sheet.before=this.props.cache.sheet.tags[0]),this.insertStyles()},n.componentDidUpdate=function(e){e.serialized.name!==this.props.serialized.name&&this.insertStyles()},n.insertStyles=function(){if(void 0!==this.props.serialized.next&&Oe(this.props.cache,this.props.serialized.next,!0),this.sheet.tags.length){var e=this.sheet.tags[this.sheet.tags.length-1].nextElementSibling;this.sheet.before=e,this.sheet.flush()}this.props.cache.insert("",this.props.serialized,this.sheet,!1)},n.componentWillUnmount=function(){this.sheet.flush()},n.render=function(){return null},t}(t.Component),Ge=function(){var e=Le.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},We=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(null!=i){var a=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))a=e(i);else for(var c in a="",i)i[c]&&c&&(a&&(a+=" "),a+=c);break;default:a=i}a&&(o&&(o+=" "),o+=a)}}return o};Fe(function(e,n){return(0,t.createElement)($e.Consumer,null,function(t){var r=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=Me(t,n.registered);return Oe(n,o,!1),n.key+"-"+o.name},o={css:r,cx:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return function(e,t,n){var r=[],o=Ce(e,r,n);return r.length<2?n:o+t(r)}(n.registered,r,We(t))},theme:t};return e.children(o)})});var He=me,Ye=function(e){return"theme"!==e&&"innerRef"!==e},Ve=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?He:Ye};function Ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}const Xe=function e(n,r){var o,i,a;void 0!==r&&(o=r.label,a=r.target,i=n.__emotion_forwardProp&&r.shouldForwardProp?function(e){return n.__emotion_forwardProp(e)&&r.shouldForwardProp(e)}:r.shouldForwardProp);var c=n.__emotion_real===n,s=c&&n.__emotion_base||n;"function"!=typeof i&&c&&(i=n.__emotion_forwardProp);var l=i||Ve(s),d=!l("as");return function(){var u=arguments,p=c&&void 0!==n.__emotion_styles?n.__emotion_styles.slice(0):[];if(void 0!==o&&p.push("label:"+o+";"),null==u[0]||void 0===u[0].raw)p.push.apply(p,u);else{p.push(u[0][0]);for(var m=u.length,f=1;f<m;f++)p.push(u[f],u[0][f])}var h=Fe(function(e,n,r){return(0,t.createElement)($e.Consumer,null,function(o){var c=d&&e.as||s,u="",m=[],f=e;if(null==e.theme){for(var h in f={},e)f[h]=e[h];f.theme=o}"string"==typeof e.className?u=Ce(n.registered,m,e.className):null!=e.className&&(u=e.className+" ");var g=Me(p.concat(m),n.registered,f);Oe(n,g,"string"==typeof c),u+=n.key+"-"+g.name,void 0!==a&&(u+=" "+a);var b=d&&void 0===i?Ve(c):l,y={};for(var v in e)d&&"as"===v||b(v)&&(y[v]=e[v]);return y.className=u,y.ref=r||e.innerRef,(0,t.createElement)(c,y)})});return h.displayName=void 0!==o?o:"Styled("+("string"==typeof s?s:s.displayName||s.name||"Component")+")",h.defaultProps=n.defaultProps,h.__emotion_real=h,h.__emotion_base=s,h.__emotion_styles=p,h.__emotion_forwardProp=i,Object.defineProperty(h,"toString",{value:function(){return"."+a}}),h.withComponent=function(t,n){return e(t,void 0!==n?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ke(n,!0).forEach(function(t){de(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ke(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},r||{},{},n):r).apply(void 0,p)},h}};function qe(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=qe(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}const Qe=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=qe(e))&&(r&&(r+=" "),r+=t);return r};function Ze(e){return(Ze="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Je(e,t,n){return(t=function(e){var t=function(e){if("object"!=Ze(e)||!e)return e;var t,n=e[Symbol.toPrimitive];if(void 0!==n){if("object"!=Ze(t=n.call(e,"string")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Ze(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var et={body1:"p",body2:"p",body3:"p",body4:"p",body1Strong:"p",body2Strong:"p",body3Strong:"p",body4Strong:"p",body1Link:"a",body2Link:"a",body3Link:"a",body4Link:"a",legal:"p",editorialBody1:"p",editorialBody1Strong:"p",oversize1:"p",oversize2:"p",oversize3:"p",display1:"h1",display2:"h2",display3:"h3",display4:"h4",title1:"h1",title2:"h2",title3:"h3",title4:"h4",conversation1:"p",conversation2:"p",conversation3:"p",conversation4:"p"},tt=(0,t.forwardRef)(function(e,t){var r=e.Component,o=e.align,i=void 0===o?"inherit":o,a=e.appearance,c=void 0===a?"body1":a,s=e.bold,l=void 0!==s&&s,d=e.className,u=e.color,p=void 0===u?"primary":u,m=e.display,f=void 0===m?"initial":m,h=e.strikethrough,g=void 0!==h&&h,b=e.weight,y=void 0===b?"regular":b,v=e.uppercase,x=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["Component","align","appearance","bold","className","color","display","strikethrough","weight","uppercase"]),w=Qe("nds-text",d,Je(Je(Je(Je(Je(Je(Je(Je({},"text-align-".concat(i),"inherit"!==i),"appearance-".concat(c),!0),"bold",l),"color-".concat(p),!0),"display-".concat(f),"initial"!==f),"weight-".concat(y),!0),"strikethrough",g),"uppercase",v)),E=r||et[c];return E||(E="p"),n().createElement(E,Object.assign({className:w},x,{ref:t}))}),nt="@media not all and (min-resolution: 0.001dpcm)",rt="@media (pointer: coarse)",ot=("@media (max-width: ".concat(parseInt($.podiumCdsBreakpointM)-1,"px)"),{primary:"var(--podium-cds-color-text-primary)",primaryInverse:"var(--podium-cds-color-text-primary-inverse)",secondary:"var(--podium-cds-color-text-secondary)",secondaryInverse:"var(--podium-cds-color-text-secondary-inverse)",disabled:"var(--podium-cds-color-text-disabled)",error:"var(--podium-cds-color-text-critical)",success:"var(--podium-cds-color-text-success)"}),it={body1:"--podium-cds-typography-body1",body2:"--podium-cds-typography-body2",body3:"--podium-cds-typography-body3",body4:"--podium-cds-typography-body4",body1Strong:"--podium-cds-typography-body1-strong",body2Strong:"--podium-cds-typography-body2-strong",body3Strong:"--podium-cds-typography-body3-strong",body4Strong:"--podium-cds-typography-body4-strong",legal:"--podium-cds-typography-legal"},at=function(e,t){return e&&!t?"@media (min-width: ".concat(e,")"):!e&&t?"@media (max-width: ".concat(t,")"):"@media (min-width: ".concat(e,") and (max-width: ").concat(t,")")},ct={name:"f3vz0n",styles:"font-weight:500"},st={name:"1vg6q84",styles:"font-weight:700;"},lt=Xe(tt,{target:"e1yhcai00"})(function(e){var t,n=e.align,r=e.appearance,o=e.bold,i=e.color,a=e.display,c=e.strikethrough,s=e.weight,l=e.uppercase;return Le(function(e){var t,n;if(e){if("body"===e.substr(0,4)&&!e.includes("Link")||"legal"===e)return"font: var(".concat(it[e],");");if(e.includes("Link"))return t=e.substr(0,5),"font: var(".concat(it[t],"); text-decoration: underline; text-underline-offset: 1px;");switch(!0){case e.includes("display"):return"\n        font: var(--podium-cds-typography-960-to-1919-".concat(e,");\n        ").concat(at(null,"959px"),"{\n          font: var(--podium-cds-typography-320-to-959-").concat(e,");\n        }\n        ").concat(at("1920px"),"{\n          font: var(--podium-cds-typography-1920-plus-").concat(e,");\n        }\n      ");case e.includes("oversize"):return"\n        font: var(--podium-cds-typography-320-to-959-".concat(e,");\n        ").concat(at("960px","1439px"),"{\n          font: var(--podium-cds-typography-960-to-1439-").concat(e,");\n        }\n        ").concat(at("1440px","1919px"),"{\n          font: var(--podium-cds-typography-1440-to-1919-").concat(e,");\n        }\n        ").concat(at("1920px"),"{\n          font: var(--podium-cds-typography-1920-plus-").concat(e,");\n        }\n      ");case e.includes("conversation"):return"\n        font: var(--podium-cds-typography-320-to-959-".concat(e,");\n        ").concat(at("960px","1919px"),"{\n          font: var(--podium-cds-typography-960-to-1919-").concat(e,");\n        }\n        ").concat(at("1920px"),"{\n          font: var(--podium-cds-typography-1920-plus-").concat(e,");\n        }\n      ");case e.includes("title"):return"\n          font: var(--podium-cds-typography-320-to-1919-".concat(e,");\n          ").concat(at("1920px"),"{\n            font: var(--podium-cds-typography-1920-plus-").concat(e,");\n          }\n        ");case e.includes("editorial"):return n=e.replace("Body1","-body1").replace("Strong","-strong"),"\n          font: var(--podium-cds-typography-320-to-959-".concat(n,");\n          ").concat(at("960px"),"{\n            font: var(--podium-cds-typography-960-plus-").concat(n,");\n          }\n        ");default:return""}}}(r)," color:",function(e){return(e?ot[e]:null)||e}(i),";",Le("text-align:",t=n,";","@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)","{text-align:",function(e){return"end"===e?"right":"center"===e?"center":"left"}(t),';[dir="rtl"] &{text-align:',function(e){return"end"===e?"left":"center"===e?"center":"right"}(t),";}}"),";",function(e){if(null!=e)return Le("text-transform:",!1===e?"none":"uppercase",";")}(l),";",function(e,t){return"medium"===e?ct:"bold"===e||!0===t?st:Le()}(s,o)," ",c&&"text-decoration: line-through;"," ","initial"!==a&&"display: ".concat(a,";"))}),dt=Xe.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){dt[e]=dt(e)});const ut=dt,pt=ut.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    width: 338px !important;
    margin-bottom: 12px;
  }

  ${e=>e.customFont&&`\n    & .timer-value {\n      font-family: '${e.customFont}', sans-serif !important;\n    }\n  `};
`,mt=ut.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,ft=ut.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
  height: 70px;
  color: var(--podium-cds-color-white);
  max-width: 2ch;
  text-align: center;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 32px;
    height: 32px;
    margin-bottom: 2px;
  }
`,ht=ut(lt)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--podium-cds-color-white);
  letter-spacing: 0.28em;
  opacity: 0.75;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`,gt=ut.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--podium-cds-color-white);
  margin: 0 16px 36px 16px;
  height: 57px;
  @media (max-width: 768px) {
    margin: 0 4px 20px 4px;
    height: 32px;
  }
  & p {
    font-size: 70px;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
`;(0,t.memo)(({endDate:e,l10n:r,customFont:o})=>{if(!e)return null;const[i,a]=(0,t.useState)({days:"00",hours:"00",minutes:"00",seconds:"00"});return(0,t.useEffect)(()=>{const t=()=>{a(function(e){const t=new Date,n=new Date(e).getTime()-t.getTime();if(n<=0)return{days:"00",hours:"00",minutes:"00",seconds:"00"};const r=Math.floor(n/864e5),o=Math.floor(n%864e5/36e5),i=Math.floor(n%36e5/6e4),a=Math.floor(n%6e4/1e3);return{days:r.toString().padStart(2,"0"),hours:o.toString().padStart(2,"0"),minutes:i.toString().padStart(2,"0"),seconds:a.toString().padStart(2,"0")}}(new Date(e)))};t();const n=setInterval(t,1e3);return()=>{clearInterval(n)}},[e]),n().createElement(pt,{customFont:o},n().createElement(mt,null,n().createElement(ft,{className:"timer-value","data-testid":"days"},i.days),n().createElement(ht,{appearance:"body3Strong"},r["countdown.days"])),n().createElement(gt,null,n().createElement(lt,{appearance:"body3Strong"},":")),n().createElement(mt,null,n().createElement(ft,{className:"timer-value","data-testid":"hours"},i.hours),n().createElement(ht,{appearance:"body3Strong"},r["countdown.hours"])),n().createElement(gt,null,n().createElement(lt,{appearance:"body3Strong"},":")),n().createElement(mt,null,n().createElement(ft,{className:"timer-value","data-testid":"minutes"},i.minutes),n().createElement(ht,{appearance:"body3Strong"},r["countdown.minutes"])),n().createElement(gt,null,n().createElement(lt,{appearance:"body3Strong"},":")),n().createElement(mt,null,n().createElement(ft,{className:"timer-value","data-testid":"seconds"},i.seconds),n().createElement(ht,{appearance:"body3Strong"},r["countdown.seconds"])))}).displayName="DigitalTimer";const bt=e=>{var{data:r,l10n:o,timerSize:i="body1Strong"}=e,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["data","l10n","timerSize"]);const c=null==r?void 0:r.timer;if(!(null==c?void 0:c.targetDate))return null;const s=(0,t.useMemo)(()=>(e=>{const t=new Date(e),n=new Date;return Math.ceil((t.getTime()-n.getTime())/36e5)})(c.targetDate),[c.targetDate]);if(s<=0)return null;const l=((e,t)=>{let n=null;return Object.entries(t).forEach(([r,o])=>{e<=o&&(!n||t[n]>o)&&(n=r)}),n})(s,c.thresholds);if(null===l)return null;const d=o[`timer.${l}`];if(!d)return null;const u=c.thresholdsColors[l],p=(0,t.useMemo)(()=>Math.ceil(s/24),[s]),m=(0,t.useMemo)(()=>d.replace("{day}",p.toString()),[d,p]);return n().createElement(lt,Object.assign({appearance:i,style:{color:u}},a),m)},yt=e=>()=>{window.location.href=e};var vt=o(904),xt=o.n(vt);const wt=(e,n)=>(0,t.useRef)(b({version:n,platform:`BELLOTTI_COMPONENT_${e}`})).current,Et="d9a5bc42-4b9c-4976-858a-f159cf99c647",Ct="https://api.nike.com";const Ot=()=>{const[e,n]=(0,t.useState)({}),r=function(){const e=(new Date).getTimezoneOffset(),t=Math.abs(Math.floor(e/60)),n=Math.abs(e%60);return`${e<=0?"+":"-"}${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`}();return(0,t.useEffect)(()=>{(()=>{const e=function(){const e=window.webShellClient?.locale?.get();return null!=e&&null!=e.langRegion&&null!=e.language&&null!=e.country&&null!=e.currency&&null!=e.translationsLanguage&&null!=e.cloudUrlFragment&&null!=e.urlParam&&null!=e.intl&&null!=e.hreflang&&null!=e.countryName&&null!=e.countryNames?e:null}();n(e)})()},[]),{userLocale:e,timeZoneOffset:r}};const kt={accept:"*/*","nike-api-caller-id":"productdetailsv1","Content-Type":"application/json",anonymousId:"unknown-anonymousid"};var St=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,c)}s((r=r.apply(e,t||[])).next())})};const At=(e,o)=>{const[i,a]=n().useState([]),{userLocale:c,timeZoneOffset:s}=Ot(),l=(t,n,o)=>{return i=void 0,c=void 0,d=function*(){try{const i=yield function(e,t){return St(this,void 0,void 0,function*(){const n=Date.now()-24*e*60*60*1e3,o=Date.now(),i=IDBKeyRange.bound(n,o),a=yield r.runAsync(()=>{var e;return null===(e=window.bellotti)||void 0===e?void 0:e.IndexedDB});if(!a)throw new Error("IndexedDB not available");const c=[];yield a.cursor("visitFrequency",e=>St(this,void 0,void 0,function*(){c.push(e.value)}),i);const s=function(e,t){const n=t.toLowerCase(),r=e.reduce((e,t)=>{const{productStyleCode:r,url:o}=t,i=o.match(/\.nike\.com\/([^/]+)/),a=i?i[1].toLowerCase():null,c="us"===n?!(null==a?void 0:a.match(/^[a-z]{2}$/)):a===n;if(!r||!c)return e;const s=e.get(r);return s?e.set(r,{visitRecord:s.visitRecord,count:s.count+1}):e.set(r,{visitRecord:t,count:1}),e},new Map);if(0===r.size)return[];const o=Array.from(r.entries()).sort((e,t)=>t[1].count-e[1].count);return o.map(e=>e[1].visitRecord).slice(0,3)}(c,t);return s})}(t,o);if(3===i.length){const t=i.map(e=>e.productStyleCode),r=yield function(e,t,n,r){return o=this,i=void 0,c=function*(){if(0===e.length)return null==r||r.warn("No style codes provided for product feed"),null;try{const r=yield fetch(`${Ct}/product_feed/threads/v2?filter=channelId(${Et})&filter=language(${t})&filter=marketplace(${n})&fields=publishedContent.properties.productCard.properties.squarishURL,productInfo.merchPrice,productInfo.productContent.title,productInfo.merchProduct.styleColor&filter=publishedContent.properties.products.styleColor(${e.join(",")})`);return(o=yield r.json())?o.objects.map(e=>{const t=e.productInfo[0],n=e.publishedContent.properties.productCard.properties.squarishURL,r=t.productContent;return{id:t.merchProduct.styleColor,title:r.title,price:{amount:t.merchPrice.currentPrice,currency:t.merchPrice.currency},imageUrl:n,url:""}}):null}catch(e){return null==r||r.error("Error fetching product feed API:",e),null}var o},new((a=void 0)||(a=Promise))(function(e,t){function n(e){try{s(c.next(e))}catch(e){t(e)}}function r(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var o;t.done?e(t.value):(o=t.value,o instanceof a?o:new a(function(e){e(o)})).then(n,r)}s((c=c.apply(o,i||[])).next())});var o,i,a,c}(t,n,o,e);if(3===(null==r?void 0:r.length))return void a(function(e,t){const n=new Map;return t.forEach(e=>{e.productStyleCode&&n.set(e.productStyleCode,e.url)}),e.map(e=>{const t=n.get(e.id);return Object.assign(Object.assign({},e),{url:null!=t?t:""})})}(r,i));e.warn("Not enough last viewed products fetched from feed API")}const c=yield function(e,t,n,r,o){return i=this,a=void 0,s=function*(){var r;try{const o="favorites.main",i=yield fetch(`${Ct}/discover/product_recs/v1`,{headers:Object.assign(Object.assign({},kt),{"nike-api-caller-id":"com.nike.commerce.nikedotcom.web"}),method:"POST",body:JSON.stringify({consumerChannelId:Et,count:3,elementId:o,language:e,marketplace:t,timeZoneOffset:n}),mode:"cors",credentials:"omit"});if(!i.ok)return[];const a=yield i.json();return(null===(r=a.insights)||void 0===r?void 0:r.recommendations)?a.insights.recommendations.map(e=>({id:e.productCode,title:e.copy.title,price:{amount:e.prices.retail.currentPrice.amount,currency:e.prices.retail.currentPrice.currency},imageUrl:e.imageURL,url:e.pdpUrl.url})):null}catch(e){return null==o||o.error("Error fetching Product Recommendations API:",e),null}},new((c=void 0)||(c=Promise))(function(e,t){function n(e){try{o(s.next(e))}catch(e){t(e)}}function r(e){try{o(s.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof c?o:new c(function(e){e(o)})).then(n,r)}o((s=s.apply(i,a||[])).next())});var i,a,c,s}(n,o,s,0,e);3===(null==c?void 0:c.length)?a(c):e.warn("Not enough recommended products fetched from recommendation API")}catch(t){e.error("Error fetching product data",t)}},new((l=void 0)||(l=Promise))(function(e,t){function n(e){try{o(d.next(e))}catch(e){t(e)}}function r(e){try{o(d.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof l?o:new l(function(e){e(o)})).then(n,r)}o((d=d.apply(i,c||[])).next())});var i,c,l,d};return(0,t.useEffect)(()=>{const t=void 0!==o&&Number.isInteger(o)?o:0;if(t<0)e.error("daysAgoThreshold must be an integer and positive");else if((null==c?void 0:c.language)&&c.country){const{language:e,country:n,marketplaceId:r}=c;l(t,e,null!=r?r:n.toUpperCase())}},[c,s,o]),{productList:i}};function Nt(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}const _t={a:"à",b:"ƀ",c:"ç",d:"ð",e:"é",f:"ƒ",g:"ĝ",h:"ĥ",i:"î",l:"ļ",k:"ķ",j:"ĵ",m:"ɱ",n:"ñ",o:"ô",p:"þ",q:"ǫ",r:"ŕ",s:"š",t:"ţ",u:"û",v:"ṽ",w:"ŵ",x:"ẋ",y:"ý",z:"ž",A:"À",B:"Ɓ",C:"Ç",D:"Ð",E:"É",F:"Ƒ",G:"Ĝ",H:"Ĥ",I:"Î",L:"Ļ",K:"Ķ",J:"Ĵ",M:"Ṁ",N:"Ñ",O:"Ô",P:"Þ",Q:"Ǫ",R:"Ŕ",S:"Š",T:"Ţ",U:"Û",V:"Ṽ",W:"Ŵ",X:"Ẋ",Y:"Ý",Z:"Ž",0:"⓪",1:"①",2:"②",3:"③",4:"④",5:"⑤",6:"⑥",7:"⑦",8:"⑧",9:"⑨","(":"❨",")":"❩","&":"⅋"};var Pt="耐克รื่بُو";function Rt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Пβシ耐克บั้ รื่بُو",r=e+" ",o=Math.round(e.length*(t/100))-n.length;return o>0&&(r+=""+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".substr(0,o)),r+n}const Tt={pseudo:"en","primary-value":"en","string-key":"en"},jt=["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMW","ZWL"];const It=(e,t,n)=>{const{encourageWholeNumbers:r}=n,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(n,["encourageWholeNumbers"]),i=new Intl.NumberFormat(e,o);return r&&"function"==typeof i.formatToParts?((e,t)=>{const n=e.formatToParts(t),r=n.find(e=>"fraction"===e.type);return r&&0===Number(r.value)?n.filter(({type:e})=>!["decimal","fraction"].includes(e)).map(({value:e})=>e).join(""):n.map(e=>e.value).join("")})(i,t):i.format(t)};function Dt(e,t,n={}){const r=n;let o=e;if(Object.keys(r).filter(e=>null===r[e]).forEach(e=>delete r[e]),"currency"===r.style&&!r.currency)throw new Error('You set the style option to "currency", but didn\'t pass a currency code in the currency option. Pro-Tip: If you pass a currency code, we automatically set the style option to "currency".');if(r.currency){if(r.currency=r.currency.toUpperCase(),!jt.includes(r.currency))throw new Error(`The currency code "${r.currency}" is not valid. Possible codes are:\n${jt.join(", ")}\n\nSee full documentation here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat`);r.style="currency"}if(Object.keys(Tt).includes(e))o=Tt[e];else{const t=e.split("-");2===t.length&&(o=`${t[0].toLowerCase()}-${t[1].toUpperCase()}`)}let i=((e,t,n)=>{const{style:r,currency:o,currencyDisplay:i}=n;return"en-BG"===e&&"currency"===r&&"BGN"===o&&i&&"symbol"===i?((e,t)=>{const{encourageWholeNumbers:n}=t;return`${It("en",e,{encourageWholeNumbers:n})} лв.`})(t,n):"en-HR"===e&&"currency"===r&&"HRK"===o&&i&&"symbol"===i?((e,t)=>{const{encourageWholeNumbers:n}=t;return`${It("en",e,{encourageWholeNumbers:n})} kn`})(t,n):"en-ID"===e&&"currency"===r&&"IDR"===o?((e,t)=>{const n=Object.assign(Object.assign({},t),{currencyDisplay:"symbol"});return It("en-ID",e,n).replace("IDR","Rp")})(t,n):"en-MA"===e&&"currency"===r&&"MAD"===o&&i&&"symbol"===i?((e,t)=>{const{encourageWholeNumbers:n}=t;return`${It("en",e,{encourageWholeNumbers:n})} Dh`})(t,n):"en-NO"===e&&"currency"===r&&"NOK"===o&&i&&"symbol"===i?((e,t)=>{const{encourageWholeNumbers:n}=t;return`kr ${It("en",e,{encourageWholeNumbers:n})}`})(t,n):"en-RO"===e&&"currency"===r&&"RON"===o&&i&&"symbol"===i?((e,t)=>{const{encourageWholeNumbers:n}=t;return`${It("en",e,{encourageWholeNumbers:n})} lei`})(t,n):"en-SG"===e&&"currency"===r&&"SGD"===o?((e,t)=>{const n=Object.assign(Object.assign({},t),{currencyDisplay:"symbol"});return`S${It("en-SG",e,n)}`})(t,n):"en-SK"===e&&"currency"===r&&"EUR"===o&&i&&"symbol"===i?((e,t)=>{const{encourageWholeNumbers:n}=t;return`${It("en",e,{encourageWholeNumbers:n})} €`})(t,n):"en-VN"===e&&"currency"===r&&"VND"===o?((e,t)=>{const n=Object.assign(Object.assign({},t),{currencyDisplay:"symbol"});return`${It("en-VN",e,n).replace("₫","")}₫`})(t,n):"fr-MA"===e&&"currency"===r&&"MAD"===o&&i&&"symbol"===i?((e,t)=>{const{encourageWholeNumbers:n}=t;return`${It("fr-MA",e,{encourageWholeNumbers:n})} Dh`})(t,n):"hu-HU"===e&&"currency"===r&&"EUR"===o&&"symbol"===i?((e,t)=>{const{encourageWholeNumbers:n}=t;return`${It("hu-HU",e,{encourageWholeNumbers:n})} €`})(t,n):"ko"!==e&&"ko-KR"!==e||"currency"!==r||"KRW"!==o||i&&"name"!==i?"en-IN"!==e||"currency"!==r||"INR"!==o||i&&"symbol"!==i?"zh-TW"!==e&&"zh-Hant-TW"!==e||"currency"!==r||"TWD"!==o?It(e,t,n):((e,t,n)=>It(e,t,n).replace("$","NT$"))(e,t,n):((e,t)=>{const n=Object.assign(Object.assign({},t),{currencyDisplay:"symbol"});return It("en-IN",e,n).replace("₹","₹ ").replace(/,/g," ")})(t,n):((e,t)=>{const n=Object.assign(Object.assign({},t),{currencyDisplay:"name"});return It("ko",e,n).replace("대한민국 ","")})(t,n)})(o,t,n);return"pseudo"===e&&(i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e;if(!t||0===t.length)return"";for(var n={"{":function(e){return"}"===e},"<":function(e){return">"===e}},r="[",o=void 0,i=void 0,a=0,c=(t=e.length<=3?Rt(e,150,Pt):e.length<=10?Rt(e,100,Pt):e.length<=20?Rt(e,80):e.length<=30?Rt(e,70):e.length<=70?Rt(e,40):Rt(e,30)).length;a<c;a+=1)o=t[a],i&&i(o,a)&&(i=null),i||!(i=n[o])&&_t[o]&&(o=_t[o]),r+=o;return r+"]"}(i)),i}function Mt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Lt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Mt(Object(n),!0).forEach(function(t){de(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}const Bt=({localeForCurrency:e,currency:t})=>n=>n?"en-IN"===e?(({localeForCurrency:e,currency:t,price:n})=>Dt(e,n,{currency:t,encourageWholeNumbers:!1,minimumFractionDigits:2,maximumFractionDigits:2}))({localeForCurrency:e,currency:t,price:n}):function(e){var t=e.price,n=e.localeForCurrency,r=e.currency,o=function(e,t){if(null==e)return{};var n,r,o=Nt(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["price","localeForCurrency","currency"]);return Dt(n,t,Lt(Lt({},o),{},{currency:r}))}({price:n,localeForCurrency:e||"en-US",currency:t,encourageWholeNumbers:!0,minimumFractionDigits:2,maximumFractionDigits:2}):null;var $t=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,c)}s((r=r.apply(e,t||[])).next())})},Ft=(0,t.forwardRef)(function(e,t){e.aspectRatio,e.backgroundColor,e.objectFit,e.width;var r,o=e.components,i=void 0===o?{}:o,a=e.className,c=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["aspectRatio","backgroundColor","objectFit","width","components","className"]),s=null!==(r=i.AspectRatioBoxComp)&&void 0!==r?r:"div",l=Qe("nds-aspect-ratio-box",a);return n().createElement(s,Object.assign({className:l,ref:t},c))});Ft.displayName="AspectBox";var zt,Ut=Xe(Ft,{target:"edji4e00"})(function(e){var t=e.aspectRatio,n=e.backgroundColor,r=e.objectFit,o=e.width;return Le("background-color:",n,";position:relative;width:",o,';&::before{content:"";width:1px;margin-left:1px;float:left;height:0;padding-top:calc( 100% * (1 / (',t,')) );}&::after{content:"";display:table;clear:both;}> video,img,iframe,embed,canvas{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:',r,";}")});function Gt(e){return(Gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Wt,Ht,Yt=Ge(zt||(Wt=["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.25;\n  }\n\n  100% {\n    opacity: 1\n  }\n"],Ht||(Ht=Wt.slice(0)),zt=Object.freeze(Object.defineProperties(Wt,{raw:{value:Object.freeze(Ht)}})))),Vt={s:"var(--podium-cds-size-border-radius-s)",m:"var(--podium-cds-size-border-radius-m)",l:"var(--podium-cds-size-border-radius-l)",xl:"var(--podium-cds-size-border-radius-xl)"},Kt=(0,t.forwardRef)(function(e,t){var r,o=e.borderRadius,i=void 0===o?"s":o,a=e.components,c=void 0===a?{}:a,s=(e.height,e.width,e.className),l=e.children,d=(e.hasBackgroundColor,function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["borderRadius","components","height","width","className","children","hasBackgroundColor"])),u=null!==(r=c.SkeletonComp)&&void 0!==r?r:"div",p=Qe("nds-skeleton",s,function(e,t,n){return(t=function(e){var t=function(e){if("object"!=Gt(e)||!e)return e;var t,n=e[Symbol.toPrimitive];if(void 0!==n){if("object"!=Gt(t=n.call(e,"string")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Gt(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},"border-radius-".concat(i),!0));return n().createElement(u,Object.assign({className:p},d,{ref:t}),l)}),Xt=Xe(Kt,{target:"e1vclsem0"})(function(e){var t=e.borderRadius,n=e.height,r=e.width,o=e.children,i=e.hasBackgroundColor;return o&&!i?Le("animation:",Yt," 2.5s ease-in-out infinite;"):Le("animation:",Yt," 2.5s ease-in-out infinite;background:var(--podium-cds-color-grey-300);border:var(--podium-cds-size-border-width-s) solid var(--podium-cds-color-grey-300);overflow:hidden;width:",r,";height:",n,";box-sizing:border-box;transition:background var(--podium-cds-motion-easing-functional);","circle"===t?"border-radius: 50%;":"border-radius: ".concat(Vt[t]||0,";")," &.finished-loading{animation:unset;border:none;background:transparent;}")});function qt(e){return(qt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Qt(e,t){var n,r;for((null==t||t>e.length)&&(t=e.length),n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Zt=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r},Jt={s:"var(--podium-cds-size-border-radius-s)",m:"var(--podium-cds-size-border-radius-m)",l:"var(--podium-cds-size-border-radius-l)",xl:"var(--podium-cds-size-border-radius-xl)"},en=Xe("div",{target:"e1ttvrug0"})(function(e){var t=e.borderRadius,n=e.objectPosition;return Le("& img{","circle"===t?"border-radius: 50%;":"border-radius: ".concat(Jt[t]||0,";")," object-position:",n,";--podium-cds-image-transition-duration:1000ms;&.should-transition{transition:opacity var(--podium-cds-image-transition-duration) var(--podium-cds-motion-easing-functional);}}")}),tn=(0,t.forwardRef)(function(e,r){var o=e.aspectRatio,i=void 0===o?"1/1":o,a=e.objectFit,c=e.objectPosition,s=e.borderRadius,l=void 0===s?"s":s,d=e.classes,u=void 0===d?{}:d,p=e.image,m=e.onImageLoad,f=e.sources,h=e.aspectRatioBoxProps,g=e.withSkeletonLoader,b=void 0===g||g,y=e.skeletonProps,v=e.width,x=void 0===v?"auto":v,w=e.imageOpacityShouldTransition,E=void 0===w||w,C=Zt(e,["aspectRatio","objectFit","objectPosition","borderRadius","classes","image","onImageLoad","sources","aspectRatioBoxProps","withSkeletonLoader","skeletonProps","width","imageOpacityShouldTransition"]),O=(0,t.useRef)(),k=function(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){var t,n,r,o,i,a,c,s=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){i=[],a=!0,c=!1;try{for(r=(s=s.call(e)).next,!2;!(a=(t=r.call(s)).done)&&(i.push(t.value),2!==i.length);a=!0);}catch(e){c=!0,n=e}finally{try{if(!a&&null!=s.return&&(o=s.return(),Object(o)!==o))return}finally{if(c)throw n}}return i}}(e)||function(e){var t;if(e)return"string"==typeof e?Qt(e,2):("Object"===(t={}.toString.call(e).slice(8,-1))&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Qt(e,2):void 0)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,t.useState)(!1)),S=k[0],A=k[1],N=Qe("nds-image-wrapper",u.Root),_=Qe("image-img",E&&"should-transition",u.Image),P=(C.onLoad,Zt(C,["onLoad"]));(0,t.useEffect)(function(){var e;(null===(e=O.current)||void 0===e?void 0:e.complete)&&A(!0)},[]);var R=function(){"function"===qt(m)&&m(),A(!0)};return n().createElement(n().Fragment,null,n().createElement(en,{borderRadius:l,className:N,objectPosition:c,ref:r},b?n().createElement(Xt,Object.assign({borderRadius:l,"data-testid":"image-skeleton",height:"100%",width:"100%",hasBackgroundColor:!0,className:Qe("nds-image-skeleton",S&&"finished-loading",!b&&"no-skeleton")},y),n().createElement(Ut,Object.assign({aspectRatio:i,objectFit:a,width:x},h),n().createElement("picture",null,Array.isArray(f)&&f.map(function(e,t){var r=e.media,o=e.srcset,i=e.type,a=[r,o,i].filter(function(e){return e}).join("-");return a===o&&(a+="-".concat(t)),n().createElement("source",{key:a,media:r,srcSet:o,type:i})}),p.src&&n().createElement("img",Object.assign({alt:p.alt,className:_,"data-testid":"image-img",onLoad:R,src:p.src,style:{opacity:S?1:0},ref:O},P))))):n().createElement(Ut,Object.assign({aspectRatio:i,objectFit:a,width:x},h),n().createElement("picture",null,Array.isArray(f)&&f.map(function(e,t){var r=e.media,o=e.srcset,i=e.type,a=[r,o,i].filter(function(e){return e}).join("-");return a===o&&(a+="-".concat(t)),n().createElement("source",{key:a,media:r,srcSet:o,type:i})}),p.src&&n().createElement("img",Object.assign({alt:p.alt,className:_,"data-testid":"image-img",onLoad:R,src:p.src,style:{opacity:S?1:0},ref:O},P))))))});function nn(e){return(nn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function rn(e,t,n){return(t=function(e){var t=function(e){if("object"!=nn(e)||!e)return e;var t,n=e[Symbol.toPrimitive];if(void 0!==n){if("object"!=nn(t=n.call(e,"string")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==nn(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}tn.displayName="Image";var on=(0,t.forwardRef)(function(e,t){var r,o,i=e.appearance,a=void 0===i?"primary":i,c=e.ariaLabel,s=e.background,l=void 0===s?"light":s,d=e.children,u=e.className,p=e.classes,m=void 0===p?{button:"btn",text:"cta",iconWrapper:"",buttonLarge:"btn-lg",buttonMedium:"btn-md",buttonSmall:"",buttonResponsive:"btn-responsive",textUnderline:"underline"}:p,f=e.disabled,h=e.href,g=e.iconPlacement,b=void 0===g?"end":g,y=e.onClick,v=e.size,x=void 0===v?"responsive":v,w=e.Component,E=void 0===w?"button":w,C=e.Icon,O=e.IconWrapper,k=void 0===O?"span":O,S=e.type,A=void 0===S?"submit":S,N=e.disableRipple,_=void 0!==N&&N,P=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["appearance","ariaLabel","background","children","className","classes","disabled","href","iconPlacement","onClick","size","Component","Icon","IconWrapper","type","disableRipple"]),R=function(e){return"text"===e||"textUnderline"===e?"primary":e}(a),T=function(e,t,n){return"text"===e||"textUnderline"===e?n:t}(a,m.button,m.text),j="textUnderline"===a?m.textUnderline:"";m.button?(r="dark"===l?"light":"dark",o="".concat(T,"-").concat(R,"-").concat(r," ").concat(j)):o=a;var I=function(e,t,n,r,o){return"small"===e?t:"medium"===e?n:"large"===e?r:o}(x,m.buttonSmall,m.buttonMedium,m.buttonLarge,m.buttonResponsive);o=Qe("nds-btn",u,o,rn(rn({},I,!!I),"disabled","a"===E?void 0:f));var D=C&&n().createElement(k,{className:Qe("btn-icon-wrapper",m.iconWrapper)},C);return n().createElement(E,Object.assign({disabled:"a"===E?void 0:f,"aria-label":c,className:o,onClick:y,href:"button"!==E?h:void 0,type:"a"!==E?A:void 0},P,{ref:t}),"start"===b&&D,d,"end"===b&&D,!("textUnderline"===a||"text"===a||_||f)&&n().createElement("span",Object.assign({className:"ripple",style:{pointerEvents:"none"}},{inert:""})))});on.displayName="Button";var an=(0,t.forwardRef)(function(e,t){return n().createElement(on,Object.assign({},e,{ref:t}))});an.displayName="ButtonWithRef";var cn=Xe(an,{target:"ex41m6f0"})(function(e){var t,n,r=e.Component,o=e.className,i=e.size,a=e.appearance,c=void 0===a?"primary":a,s=e.background,l=void 0===s?"light":s,d=e.disableRipple,u=e.iconPlacement,p="light"===l,m={light:{primary:{backgroundStyle:"var(--podium-cds-button-color-bg-primary)",color:"var(--podium-cds-color-text-primary-on-dark)",hoverFocusActiveBackground:"var(--podium-cds-button-color-bg-primary-hover)",disabledBackground:"var(--podium-cds-button-color-bg-primary-disabled)",disabledColor:"var(--podium-cds-color-text-disabled)"},secondary:{backgroundStyle:"var(--podium-cds-button-color-bg-secondary)",color:"var(--podium-cds-color-text-primary-on-light)",borderColor:"var(--podium-cds-button-color-border-secondary)",hoverFocusActiveBackground:"var(--podium-cds-button-color-bg-secondary)",hoverFocusActiveBorderColor:"var(--podium-cds-button-color-border-secondary-hover)",disabledBackground:"var(--podium-cds-button-color-bg-secondary)",disabledColor:"var(--podium-cds-color-text-disabled)",disabledBorderColor:"var(--podium-cds-button-color-border-secondary-disabled)"},tertiary:{backgroundStyle:"inherit",color:"var(--podium-cds-color-text-primary-on-light)",hoverFocusActiveBackground:"var(--podium-cds-icon-button-color-bg-tertiary-hover)",disabledBackground:"inherit",disabledColor:"var(--podium-cds-color-text-disabled)"}},dark:{primary:{backgroundStyle:"var(--podium-cds-button-color-bg-primary-on-dark)",color:"var(--podium-cds-color-text-primary-on-light)",hoverFocusActiveBackground:"var(--podium-cds-button-color-bg-primary-hover-on-dark)",disabledBackground:"var(--podium-cds-button-color-bg-primary-disabled-on-dark)",disabledColor:"var(--podium-cds-color-text-disabled-inverse)"},secondary:{backgroundStyle:"var(--podium-cds-button-color-bg-secondary)",color:"var(--podium-cds-color-text-primary-on-dark)",borderColor:"var(--podium-cds-button-color-border-secondary-on-dark)",hoverFocusActiveBackground:"var(--podium-cds-button-color-bg-secondary)",hoverFocusActiveBorderColor:"var(--podium-cds-button-color-border-secondary)",disabledBackground:"var(--podium-cds-button-color-bg-secondary)",disabledColor:"var(--podium-cds-color-text-disabled-inverse)",disabledBorderColor:"var(--podium-cds-button-color-border-secondary-disabled-on-dark)"},tertiary:{backgroundStyle:"inherit",color:"var(--podium-cds-color-text-primary-on-dark)",hoverFocusActiveBackground:"var(--podium-cds-icon-button-color-bg-tertiary-hover-on-dark)",disabledBackground:"inherit",disabledColor:"var(--podium-cds-color-text-disabled-inverse)"}}};return Le("font:var(--podium-cds-typography-body1-strong);text-align:center;text-decoration:none;box-sizing:border-box;display:","a"===r?"inline-flex":"flex",";justify-content:center;align-items:center;position:relative;cursor:pointer;",function(){var e,t,n;if("primary"===c||"secondary"===c||"tertiary"===c)return t="\n          padding: var(--podium-cds-button-padding-top-l) var(--podium-cds-button-padding-sides-l);\n          width: 100%;\n          min-height: var(--podium-cds-button-height-l);\n        ",n="\n        padding: var(--podium-cds-button-padding-top-s) var(--podium-cds-button-padding-sides-s) var(--podium-cds-button-padding-bottom-s);\n        min-height: var(--podium-cds-button-height-s);\n      ",e="large"===i?t:"medium"===i?"\n          padding: var(--podium-cds-button-padding-top-m) var(--podium-cds-button-padding-sides-m);\n          min-height: var(--podium-cds-button-height-m);\n      ":"small"===i?n:"\n          ".concat(t,"\n          @media (min-width: ").concat($.podiumCdsBreakpointM,") {\n            ").concat(n,"\n            width: auto;\n            height: auto;\n            min-height: auto;\n          }\n        "),Le(e)}()," ",(t="end"===u?"0":"var(--podium-cds-size-spacing-xs)",n="start"===u?"0":"var(--podium-cds-size-spacing-xs)","small"===i&&(t="end"===u?"0":"8px",n="start"===u?"-4px":"var(--podium-cds-size-spacing-xs)"),Le(".btn-icon-wrapper{width:","small"===i?"20px":"var(--podium-cds-size-icon-m)",";height:var(--podium-cds-size-icon-m);margin-inline-end:",t,";margin-inline-start:",n,";svg{width:var(--podium-cds-size-icon-m);}}"))," ","text"===c||"textUnderline"===c?function(){if("text"===c)return Le("display:block;.btn-icon-wrapper{display:inline-flex;width:","small"===i?"16px":"var(--podium-cds-size-icon-m)",";height:var(--podium-cds-size-icon-m);margin-inline-end:","end"===u?"0":"var(--podium-cds-size-spacing-xs)",";margin-inline-start:","start"===u?"0":"var(--podium-cds-size-spacing-xs)",";svg{width:var(--podium-cds-size-icon-m);content:'';position:absolute;transform:translateY(5px);}}")}():null," ",function(){if("text"===c||"textUnderline"===c)return Le("padding:0;color:",p?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)",";background:transparent;text-align:start;border:0;","small"===i&&"font: var(--podium-cds-typography-body3-strong);\n          "," ","medium"===i&&"\n          font: var(--podium-cds-typography-body2-strong);\n          "," ","large"===i&&"\n          font: var(--podium-cds-typography-body1-strong);\n        "," ","responsive"===i&&"@media (min-width: ".concat(parseInt("600",10)+1,"px) {\n              font: var(--podium-cds-typography-body3-strong)\n            }\n        }")," &:active:not(:disabled){color:",p?"var(--podium-cds-color-text-secondary)":"var(--podium-cds-color-text-secondary-inverse)",";}&:focus:not(:disabled){color:",p?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)",";}@media (hover:hover){&:hover:not(:disabled){color:",p?"var(--podium-cds-color-text-hover)":"var(--podium-cds-color-text-hover-inverse)",";}}&:disabled{color:",p?"var(--podium-cds-color-text-disabled)":"var(--podium-cds-color-text-disabled-inverse)",";cursor:default;}")}()," ",function(){var e,t,n;if("textUnderline"===c)return e={paddingEnd:"start"===u?"28px":"initial",marginEnd:"end"===u?"0":"auto",resetMargins:"start"===u?"0":"var(--podium-cds-size-spacing-xs)",svgTransform:"translateY(-2px)"},t={large:Object.assign({},e),medium:Object.assign(Object.assign({},e),{svgTransform:"translateY(-4px)"}),small:Object.assign({},e),responsive:Object.assign({},e)},Le("@media screen and (min-resolution:1dppx){border-bottom:var(--podium-cds-size-border-width-m) solid ",p?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)",";box-shadow:inset 0 -1px 0 0 ",p?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)",";}@media screen and (min-resolution:2dppx){border-bottom:var(--podium-cds-size-border-width-m) solid ",p?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)",";box-shadow:inset 0 var(--podium-cds-button-box-shadow-width) 0 0 ",p?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)",";}.btn-icon-wrapper{display:inline-flex;height:auto;margin-inline-end:",(n=t[null!=i?i:"medium"]).marginEnd,";margin-inline-start:",n.resetMargins,";margin-left:","start"===u?"initial":"4px",";padding-inline-end:",n.paddingEnd,";svg{content:'';position:absolute;left:","start"===u?"0":"initial",";right:0;top:0;transform:",n.svgTransform,';}}[dir="rtl"] &{.btn-icon-wrapper{margin-inline-end:',n.marginEnd,";margin-inline-start:",n.resetMargins,";padding-inline-end:",n.paddingEnd,";svg{right:","start"===u?"0":"initial",";}}}&:hover:not(:disabled),&:active:not(:disabled){@media screen and (min-resolution:1dppx){border-bottom:var(--podium-cds-size-border-width-m) solid ",p?"var(--podium-cds-color-text-hover)":"var(--podium-cds-color-text-hover-inverse)",";box-shadow:inset 0 -1px 0 0 ",p?"var(--podium-cds-color-text-hover)":"var(--podium-cds-color-text-hover-inverse)",";}@media screen and (min-resolution:2dppx){border-bottom:var(--podium-cds-size-border-width-m) solid ",p?"var(--podium-cds-color-text-hover)":"var(--podium-cds-color-text-hover-inverse)",";box-shadow:inset 0 var(--podium-cds-button-box-shadow-width) 0 0 ",p?"var(--podium-cds-color-text-hover)":"var(--podium-cds-color-text-hover-inverse)",";}}&:disabled{@media screen and (min-resolution:1dppx){border-bottom:var(--podium-cds-size-border-width-m) solid ",p?"var(--podium-cds-button-color-border-secondary-disabled)":"var(--podium-cds-button-color-border-secondary-disabled-on-dark)",";box-shadow:inset 0 -1px 0 0 ",p?"var(--podium-cds-button-color-border-secondary-disabled)":"var(--podium-cds-button-color-border-secondary-disabled-on-dark)",";}@media screen and (min-resolution:2dppx){border-bottom:var(--podium-cds-size-border-width-m) solid ",p?"var(--podium-cds-button-color-border-secondary-disabled)":"var(--podium-cds-button-color-border-secondary-disabled-on-dark)",";box-shadow:inset 0 var(--podium-cds-button-box-shadow-width) 0 0 ",p?"var(--podium-cds-button-color-border-secondary-disabled)":"var(--podium-cds-button-color-border-secondary-disabled-on-dark)",";}}",n)}()," ",d||"text"===c||"textUnderline"===c?null:Le("position:relative;overflow:hidden;transform:translate3d(0,0,0);> .ripple{display:block;position:absolute;","small"===i&&"width: var(--podium-cds-button-height-s);\n           height: var(--podium-cds-button-height-s);\n          "," ","medium"===i&&"width: var(--podium-cds-button-height-m);\n         height: var(--podium-cds-button-height-m);\n        "," ","large"===i&&"width: var(--podium-cds-button-height-l);\n         height: var(--podium-cds-button-height-l);\n        "," ","responsive"===i&&"@media (min-width: ".concat($.podiumCdsBreakpointM,") {\n          width: var(--podium-cds-button-height-s);\n          height: var(--podium-cds-button-height-s);\n        }\n        width: var(--podium-cds-button-height-l);\n        height: var(--podium-cds-button-height-l);\n        ")," border-radius:var(--podium-cds-button-border-radius);top:50%;left:50%;background-color:rgba(255,255,255,0.7);background-size:100%;transform:translate3d(-50%,-50%,0) scale(10);transform-origin:center center;opacity:0;transition:transform 0.8s,opacity 1s;margin:0;}&:active > .ripple{transform:translate3d(-50%,-50%,0) scale(0);opacity:0.5;transition:0s;}")," ",function(){var e,t,n,r,o,i,a,s,d;if("primary"===c||"secondary"===c||"tertiary"===c)return t=(e=m[null!=l?l:"light"][c]).backgroundStyle,n=e.color,r=e.borderColor,o=e.hoverFocusActiveBackground,i=e.hoverFocusActiveBorderColor,a=e.disabledBackground,s=e.disabledColor,d=e.disabledBorderColor,Le("background:",t,";color:",n,";border:none;border-radius:var(--podium-cds-button-border-radius);outline:none;&::before{content:'';position:absolute;top:0px;right:0px;bottom:0px;left:0px;border-radius:var(--podium-cds-button-border-radius);","secondary"===c&&"\n              border: var(--podium-cds-button-border-width) solid ".concat(r,";\n          "),"}","secondary"===c&&"\n          ".concat(nt,"{\n          border: var(--podium-cds-button-border-width) solid;\n          border-color: ").concat(r,";\n          }\n        ")," &:active:not(:disabled){background:",o,";&::before{border-color:",i,";}}@media (hover:hover){&:hover:not(:disabled){background:",o,";&::before{border-color:",i,";}}}&:focus-visible{box-shadow:0 0 0 2px var(--podium-cds-color-focus-ring);}&.focus-visible{box-shadow:0 0 0 2px var(--podium-cds-color-focus-ring);}&:disabled{&::before{border-color:",d,";}background:",a,";color:",s,";cursor:default;}")}()," ",(null==o?void 0:o.includes("nds-button--icon-only"))&&Le("&.nds-button--icon-only{width:unset;min-height:unset;padding:","small"===i?"6px":"medium"===i?"12px":"18px",";",("responsive"===i||"large"===i)&&"\n      svg {\n        width: 24px;\n        height: 24px;\n      }\n      "," @media (min-width:",$.podiumCdsBreakpointS,"){padding:","large"===i?"14px":"medium"===i?"12px":"6px",";svg{height:","large"===i?"24px":"auto",";width:","large"===i?"24px":"auto",";}}&.btn-primary-dark.disabled,&.btn-secondary-dark.disabled{background-color:var(--podium-cds-icon-button-color-bg-disabled);color:var(--podium-cds-color-text-disabled);&::before{border-color:var(--podium-cds-icon-button-color-bg-disabled);}}&.btn-primary-light.disabled{background-color:var(--podium-cds-icon-button-color-bg-disabled-on-dark);}&.btn-secondary-dark{background-color:var(--podium-cds-icon-button-color-bg-secondary);&::before{border-color:var(--podium-cds-icon-button-color-bg-secondary);}&:hover:not(:disabled){background-color:var(--podium-cds-icon-button-color-bg-secondary-hover);border-color:var(--podium-cds-icon-button-color-bg-secondary-hover);&::before{border-color:var(--podium-cds-icon-button-color-bg-secondary-hover);}}}&.btn-secondary-light{background-color:var(--podium-cds-icon-button-color-bg-secondary-on-dark);&::before{border-color:var(--podium-cds-icon-button-color-bg-secondary-on-dark);}&:hover:not(:disabled){background-color:var(--podium-cds-icon-button-color-bg-secondary-hover-on-dark);&::before{border-color:var(--podium-cds-icon-button-color-bg-secondary-hover-on-dark);}}&.disabled{background-color:var(--podium-cds-icon-button-color-bg-disabled-on-dark);&::before{border-color:var(--podium-cds-icon-button-color-bg-disabled-on-dark);}color:var(--podium-cds-color-text-disabled-inverse);}}}")," &.inline-flx-btn{display:inline-flex;}")});function sn(){return sn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sn.apply(null,arguments)}function ln(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var dn=o(845),un=o.n(dn);const pn=n().createContext(null);var mn=function(e){return e.scrollTop},fn="unmounted",hn="exited",gn="entering",bn="entered",yn="exiting",vn=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(o=hn,r.appearStatus=gn):o=bn:o=t.unmountOnExit||t.mountOnEnter?fn:hn,r.state={status:o},r.nextCallback=null,r}he(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===fn?{status:hn}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==gn&&n!==bn&&(t=gn):n!==gn&&n!==bn||(t=yn)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},r.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===gn){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:un().findDOMNode(this);n&&mn(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===hn&&this.setState({status:fn})},r.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[un().findDOMNode(this),r],i=o[0],a=o[1],c=this.getTimeouts(),s=r?c.appear:c.enter;e||n?(this.props.onEnter(i,a),this.safeSetState({status:gn},function(){t.props.onEntering(i,a),t.onTransitionEnd(s,function(){t.safeSetState({status:bn},function(){t.props.onEntered(i,a)})})})):this.safeSetState({status:bn},function(){t.props.onEntered(i)})},r.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:un().findDOMNode(this);t?(this.props.onExit(r),this.safeSetState({status:yn},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:hn},function(){e.props.onExited(r)})})})):this.safeSetState({status:hn},function(){e.props.onExited(r)})},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:un().findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],a=o[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},r.render=function(){var e=this.state.status;if(e===fn)return null;var t=this.props,r=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Nt(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return n().createElement(pn.Provider,{value:null},"function"==typeof r?r(e,o):n().cloneElement(n().Children.only(r),o))},t}(n().Component);function xn(){}vn.contextType=pn,vn.propTypes={},vn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:xn,onEntering:xn,onEntered:xn,onExit:xn,onExiting:xn,onExited:xn},vn.UNMOUNTED=fn,vn.EXITED=hn,vn.ENTERING=gn,vn.ENTERED=bn,vn.EXITING=yn;const wn=vn;var En=function(e,t){return e&&t&&t.split(" ").forEach(function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=ln(n.className,r):n.setAttribute("class",ln(n.className&&n.className.baseVal||"",r)));var n,r})},Cn=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),o=r[0],i=r[1];t.removeClasses(o,"exit"),t.addClass(o,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),o=r[0],i=r[1]?"appear":"enter";t.addClass(o,i,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),o=r[0],i=r[1]?"appear":"enter";t.removeClasses(o,i),t.addClass(o,i,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,o=r?(r&&n?n+"-":"")+e:n[e];return{baseClassName:o,activeClassName:r?o+"-active":n[e+"Active"],doneClassName:r?o+"-done":n[e+"Done"]}},t}he(t,e);var r=t.prototype;return r.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],o=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&o&&(r+=" "+o),"active"===n&&e&&mn(e),r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach(function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r})}(e,r))},r.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,o=n.active,i=n.done;this.appliedClasses[t]={},r&&En(e,r),o&&En(e,o),i&&En(e,i)},r.render=function(){var e=this.props,t=(e.classNames,Nt(e,["classNames"]));return n().createElement(wn,sn({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(n().Component);Cn.defaultProps={classNames:""},Cn.propTypes={};const On=Cn;function kn(){kn=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,o){var i=RegExp(e,r);return t.set(i,o||t.get(e)),Sn(i,n.prototype)}function r(e,n){var r=t.get(n);return Object.keys(r).reduce(function(t,n){var o,i=r[n];if("number"==typeof i)t[n]=e[i];else{for(o=0;void 0===e[i[o]]&&o+1<i.length;)o++;t[n]=e[i[o]]}return t},Object.create(null))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Sn(e,t)}(n,RegExp),n.prototype.exec=function(t){var n,o=e.exec.call(this,t);return o&&(o.groups=r(o,this),(n=o.indices)&&(n.groups=r(n,this))),o},n.prototype[Symbol.replace]=function(n,o){var i,a;return"string"==typeof o?(i=t.get(this),e[Symbol.replace].call(this,n,o.replace(/\$<([^>]+)>/g,function(e,t){var n=i[t];return"$"+(Array.isArray(n)?n.join("$"):n)}))):"function"==typeof o?(a=this,e[Symbol.replace].call(this,n,function(){var e=arguments;return"object"!=An(e[e.length-1])&&(e=[].slice.call(e)).push(r(e,a)),o.apply(this,e)})):e[Symbol.replace].call(this,n,o)},kn.apply(this,arguments)}function Sn(e,t){return(Sn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function An(e){return(An="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Nn(){if("undefined"===("undefined"==typeof navigator?"undefined":An(navigator)))return!1;var e=navigator.userAgent,t=e.includes("Safari")&&!e.includes("Chrome"),n=/iP(?:hone|od|ad)/.test(e),r=e.includes("OS 15_");return n&&t&&r}function _n(e){return(_n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}(function(){if("undefined"===("undefined"==typeof navigator?"undefined":An(navigator)))return!1;var e,t=navigator.userAgent;return t.includes("Macintosh")&&t.includes("Safari")&&!t.includes("Chrome")&&/Version\/(?:[0-9]+)\./.test(t)&&!!(e=kn(/Version\/([0-9]+)\./,{version:1}).exec(t))&&parseInt(e[1],10)<=15})()&&document.documentElement.classList.add("mac-safari-15");var Pn=o(708),Rn=o.n(Pn),Tn=function(e){var n=e.selector,r=e.children;return(0,dn.createPortal)(r,function(e){var n=(0,t.useRef)(null);return(0,t.useEffect)(function(){var t=document.querySelector(e);return t||console.warn('Could not find modal root "'.concat(e,'".')),t&&t.appendChild(n.current),function(){n.current.parentNode&&n.current.parentNode.removeChild(n.current)}},[]),n.current||(n.current=document.createElement("div")),n.current}(n))};function jn(e){return(jn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var In=(0,t.forwardRef)(function(e,t){var r=e.selector,o=void 0===r?"#modal-root":r,i=e.isOpen,a=void 0!==i&&i,c=e.trapFocus,s=void 0===c||c,l=e.children,d=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["selector","isOpen","trapFocus","children"]),u=s?n().createElement(Rn(),null,n().createElement("div",null,l)):l;return"undefined"===("undefined"==typeof window?"undefined":jn(window))?u:a?n().createElement(Tn,Object.assign({selector:o},d),n().createElement("div",{ref:t,className:"modal-portal-content-wrapper"},u)):null});In.displayName="ModalPortal";var Dn=function(e){var r=e.closeModal,o=e.shouldCloseOnBackgroundClick,i=e.shouldCloseOnEsc,a=e.className,c=e.children,s=e.backdropCompProps,l=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["closeModal","shouldCloseOnBackgroundClick","shouldCloseOnEsc","className","children","backdropCompProps"]),d=(0,t.useRef)(null);return(0,t.useEffect)(function(){var e=function(e){"Escape"===e.key&&r&&i&&r(e)};return I()&&window.addEventListener("keydown",e),function(){I()&&window.removeEventListener("keydown",e)}},[i]),n().createElement("div",Object.assign({ref:d,className:a,onClick:function(e){e.target===d.current&&r&&o&&r(e)},"data-testid":"modal-backdrop"},s,l),c)},Mn=function(e){var t,r=e.components,o=e.className,i=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["components","className"]),a=null!==(t=null==r?void 0:r.ModalContainerComp)&&void 0!==t?t:"section";return n().createElement(a,Object.assign({className:o},i))};const Ln=(e,n=100,r=!1)=>{const o=(e=>{const n=t.useRef(e);return t.useEffect(()=>{n.current=e}),n})(e),i=t.useRef(),a=[n,r,o];function c(){i.current&&clearTimeout(i.current),i.current=void 0}function s(){i.current=void 0}return t.useEffect(()=>c,a),t.useCallback(function(){const e=arguments,{current:t}=i;if(void 0===t&&r)return i.current=setTimeout(s,n),o.current.apply(null,e);t&&clearTimeout(t),i.current=setTimeout(()=>{i.current=void 0,o.current.apply(null,e)},n)},a)},Bn=function(e,n,r,o){const i=t.useRef(r),a=t.useRef(o);t.useEffect(()=>{i.current=r,a.current=o}),t.useEffect(()=>{const t=e&&"current"in e?e.current:e;if(!t)return;let r=0;function o(...e){r||i.current.apply(this,e)}t.addEventListener(n,o);const c=a.current;return()=>{r=1,t.removeEventListener(n,o),c&&c()}},[e,n])},$n={},Fn="undefined"==typeof window?null:window,zn=Fn&&void 0!==Fn.visualViewport?Fn.visualViewport:null,Un=()=>[document.documentElement.clientWidth,document.documentElement.clientHeight],Gn=e=>function(e){void 0===e&&(e=$n);const{wait:n,leading:r,initialWidth:o=0,initialHeight:i=0}=e,[a,c]=((e,n,r)=>{const o=t.useState(e);return[o[0],Ln(o[1],n,r)]})("undefined"==typeof document?[o,i]:Un,n,r),s=()=>c(Un);return Bn(Fn,"resize",s),Bn(zn,"resize",s),Bn(Fn,"orientationchange",s),a}(e)[1];var Wn=(0,t.forwardRef)(function(e,t){var r,o,i,a,c=e.appearance,s=void 0===c?"base":c,l=e["aria-labelledby"],d=e.children,u=e.classes,p=void 0===u?{}:u,m=e.className,f=e.closeModal,h=e.isOpen,g=e.role,b=void 0===g?"modal":g,y=e.components,v=void 0===y?{}:y,x=e.shouldCloseOnBackgroundClick,w=e.shouldCloseOnEsc,E=e.backdropCompProps,C=e.modalRootCompProps,O=e.modalContainerCompProps,k=e.modalPortalCompProps,S=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["appearance","aria-labelledby","children","classes","className","closeModal","isOpen","role","components","shouldCloseOnBackgroundClick","shouldCloseOnEsc","backdropCompProps","modalRootCompProps","modalContainerCompProps","modalPortalCompProps"]),A=Gn({wait:250}),N=null!==(r=v.BackdropComp)&&void 0!==r?r:Dn,_=null!==(o=v.ModalComp)&&void 0!==o?o:In,P=null!==(i=v.ModalContainerComp)&&void 0!==i?i:Mn,R=null!==(a=v.ModalRootComp)&&void 0!==a?a:"div";return n().createElement(_,Object.assign({className:p.modal,isOpen:h,ref:t},k,S),n().createElement(N,Object.assign({className:p.backdrop,closeModal:f,shouldCloseOnBackgroundClick:x,shouldCloseOnEsc:w},E),n().createElement(R,Object.assign({className:Qe(m,p.root),role:b,"aria-labelledby":l,style:"fullscreen"===s?{height:A}:{}},C),n().createElement(Mn,Object.assign({className:p.backdropContainer,appearance:s,components:{ModalContainerComp:P}},O),d))))});Wn.displayName="ModalBase";var Hn=function(e){e.appearance;var t,r=e.className,o=e.classes,i=void 0===o?{}:o,a=e.slots,c=void 0===a?{}:a,s=e.components,l=(e.closeModal,e.modalCloseAriaLabel,e.id),d=e.title,u=e.modalHeaderSlotProps,p=e.Icon,m=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["appearance","className","classes","slots","components","closeModal","modalCloseAriaLabel","id","title","modalHeaderSlotProps","Icon"]),f=s.IconWrapperComp||"span",h=null!==(t=c.HeaderTitleSlot)&&void 0!==t?t:null;return n().createElement("header",Object.assign({className:r},u,m),p&&n().createElement(f,{className:Qe("icon-wrapper",i.iconWrapper),"data-testid":"modal-icon"},n().createElement(p,{className:i.icon})),n().createElement(tt,{className:Qe("title-heading",i.title),id:l,appearance:"title1","data-testid":"modal-header-title"},h&&h,!h&&d))};function Yn(e){return Yn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yn(e)}var Vn=["aria-hidden","className","fill","height","paths","role","title","size","viewBox","width"];function Kn(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function Xn(e,t){var n,r;for((null==t||t>e.length)&&(t=e.length),n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var qn="24px",Qn="48px",Zn={s:"0 0 ".concat(parseInt(qn)," ").concat(parseInt(qn)),m:"0 0 ".concat(parseInt(qn)," ").concat(parseInt(qn)),l:"0 0 ".concat(parseInt(Qn)," ").concat(parseInt(Qn))},Jn={s:qn,m:qn,l:Qn,container:"container"},er=function(e){var r,o,i=e["aria-hidden"],a=e.className,c=e.fill,s=e.height,l=e.paths,d=e.role,u=void 0===d?"img":d,p=e.title,m=e.size,f=void 0===m?"m":m,h=e.viewBox,g=e.width,b=function(e,t){if(null==e)return{};var n,r,o,i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols)for(n=Object.getOwnPropertySymbols(e),o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r]);return i}(e,Vn),y=(r=(0,t.useState)(f),o=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var n,r,o,i,a,c,s,l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){a=[],c=!0,s=!1;try{if(o=(l=l.call(e)).next,0===t){if(Object(l)!==l)return;c=!1}else for(;!(c=(n=o.call(l)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=l.return&&(i=l.return(),Object(i)!==i))return}finally{if(s)throw r}}return a}}(r,o)||function(e,t){if(e){if("string"==typeof e)return Xn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Xn(e,t):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=y[0],x=y[1],w=i;(function(e){return!e&&!p})(i)&&(w=!0),(0,t.useEffect)(function(){Object.keys(Jn).includes(f)?x(f):x("m")},[f]);var E=h||Zn[f]||Zn.m;return n().createElement("svg",function(e){var t,n;for(t=1;t<arguments.length;t++)n=null!=arguments[t]?arguments[t]:{},t%2?Kn(Object(n),!0).forEach(function(t){var r,o,i;r=e,o=t,i=n[t],o=function(e){var t=function(e){if("object"!=Yn(e)||!e)return e;var t,n=e[Symbol.toPrimitive];if(void 0!==n){if("object"!=Yn(t=n.call(e,"string")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Yn(t)?t:String(t)}(o),o in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))});return e}({"aria-hidden":w?"true":"false",className:a,focusable:"false",viewBox:E,role:u,width:function(){if("container"!==v)return g||Jn[v]}(),height:function(){if("container"!==v)return s||Jn[v]}(),fill:c},b),(null==l?void 0:l[v])?l[v]:null==l?void 0:l.m,p&&n().createElement("title",null,p))};function tr(e){return tr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tr(e)}function nr(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function rr(e){var t,n;for(t=1;t<arguments.length;t++)n=null!=arguments[t]?arguments[t]:{},t%2?nr(Object(n),!0).forEach(function(t){var r,o,i;r=e,o=t,i=n[t],o=function(e){var t=function(e){if("object"!=tr(e)||!e)return e;var t,n=e[Symbol.toPrimitive];if(void 0!==n){if("object"!=tr(t=n.call(e,"string")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==tr(t)?t:String(t)}(o),o in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))});return e}var or={s:n().createElement(n().Fragment,null,n().createElement("path",{stroke:"currentColor",strokeWidth:"1.5",d:"M17.5 6.5l-11 11m0-11l11 11"})),m:n().createElement(n().Fragment,null,n().createElement("path",{stroke:"currentColor",strokeWidth:"1.5",d:"M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"})),l:n().createElement(n().Fragment,null,n().createElement("path",{stroke:"currentColor",strokeWidth:"3",d:"M37.945 10.055l-27.89 27.89m0-27.89l27.89 27.89"}))},ir=n().memo(function(e){return n().createElement(er,rr(rr({},e),{},{paths:or,fill:"none"}))}),ar=function(e){var t=e.modalCloseAriaLabel,r=void 0===t?"Close Modal":t,o=e.onClick,i=e.className,a=e.modalCloseButtonCompProps,c=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["modalCloseAriaLabel","onClick","className","modalCloseButtonCompProps"]);return n().createElement("button",Object.assign({className:Qe(i,"modal-ui-close"),"aria-label":r,onClick:o,type:"button"},a,c),n().createElement(ir,{"aria-hidden":!0}))};function cr(e){return(cr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var sr={name:"4pwgxo",styles:"scrollbar-gutter:stable;.nds-no-scroll{overflow:hidden;}.nds-override-urlbar{position:fixed;overflow-y:scroll;height:100vh;-webkit-overflow-scrolling:touch;}"},lr=(0,t.forwardRef)(function(e,r){var o,i,a,c,s,l,d,u=e.appearance,p=void 0===u?"base":u,m=(e["aria-labelledby"],e.transitionDuration),f=void 0===m?"250":m,h=e.children,g=e.classes,b=void 0===g?{}:g,y=e.className,v=e.components,x=void 0===v?{}:v,w=e.slots,E=void 0===w?{}:w,C=e.closeModal,O=e.modalCloseAriaLabel,k=e.isOpen,S=e.role,A=void 0===S?"modal":S,N=e.shouldCloseOnBackgroundClick,_=void 0===N||N,P=e.shouldCloseOnEsc,R=void 0===P||P,T=e.title,j=e.titleId,D=e.backdropCompProps,M=e.modalRootCompProps,L=e.modalCloseButtonCompProps,B=e.modalContainerCompProps,$=e.modalHeaderCompProps,F=e.modalContentCompProps,z=e.modalMainCompProps,U=e.Icon,G=e.modalPortalCompProps,W=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["appearance","aria-labelledby","transitionDuration","children","classes","className","components","slots","closeModal","modalCloseAriaLabel","isOpen","role","shouldCloseOnBackgroundClick","shouldCloseOnEsc","title","titleId","backdropCompProps","modalRootCompProps","modalCloseButtonCompProps","modalContainerCompProps","modalHeaderCompProps","modalContentCompProps","modalMainCompProps","Icon","modalPortalCompProps"]),H=null!=j?j:null==T?void 0:T.toLowerCase().replace(/\W/g,"-"),Y=(0,t.useRef)();d=null!=k&&k,(0,t.useEffect)(function(){if(d&&"undefined"!==("undefined"==typeof window?"undefined":_n(window))){var e=window.scrollY||window.pageYOffset,t=document.body,n={overflow:t.style.overflow,position:t.style.position,top:t.style.top,left:t.style.left,right:t.style.right};return Nn()?document.body.style.overflow="hidden":(t.style.position="fixed",t.style.top="-".concat(e,"px"),t.style.left="0",t.style.right="0",t.style.overflow="hidden"),function(){t.style.overflow=n.overflow,t.style.position=n.position,t.style.top=n.top,t.style.left=n.left,t.style.right=n.right,Nn()||window.scrollTo(0,e)}}},[d]);var V=E.HeaderTitleSlot,K=E.FooterSlot,X=null!==(o=x.ModalContainerComp)&&void 0!==o?o:Mn,q=null!==(i=x.ModalContentComp)&&void 0!==i?i:"div",Q=null!==(a=x.ModalMainComp)&&void 0!==a?a:"div",Z=x.IconWrapperComp,J=x.ModalRootComp,ee=null!==(c=x.ModalCloseButtonComp)&&void 0!==c?c:ar,te=null!==(s=x.ModalHeaderComp)&&void 0!==s?s:Hn,ne=null!==(l=x.ModalBaseComp)&&void 0!==l?l:Wn,re=x.BackdropComp,oe=x.ModalComp;(0,t.useEffect)(function(){I()&&k&&(Y.current=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)},[k]),(0,t.useEffect)(function(){if(I()){var e=document.querySelector("body");return k&&(setTimeout(function(){e.classList.add("nds-no-scroll")},parseFloat(f)),"fullscreen"===p&&(setTimeout(function(){window.scrollTo(0,0),e.classList.add("nds-no-scroll")},parseFloat(f)),e.classList.add("nds-override-urlbar"))),function(){e.classList.remove("nds-no-scroll","nds-override-urlbar"),k&&Y.current&&(window.scrollTo(0,Y.current),Y.current=null)}}},[p,k,f]);var ie=function(){return K?n().createElement(n().Fragment,null,K):null};return n().createElement(n().Fragment,null,n().createElement(ze,{styles:sr}),n().createElement(On,{appear:k,in:k,timeout:parseFloat(f),classNames:"modal",mountOnEnter:!0,unmountOnExit:!0},n().createElement(ne,Object.assign({className:Qe(y,p,b.base),appearance:p,isOpen:!0,role:A,"aria-labelledby":"modal-".concat(H),classes:{backdrop:b.backdrop,backdropContainer:b.backdropContainer,modal:b.modal,root:b.root},components:{ModalContainerComp:X,ModalRootComp:J,ModalComp:oe,BackdropComp:re},closeModal:C,shouldCloseOnBackgroundClick:_,shouldCloseOnEsc:R,modalPortalCompProps:G,backdropCompProps:D,modalRootCompProps:M,modalContainerCompProps:B,ref:r},W),"function"===cr(C)&&"fullscreen"===p&&n().createElement("div",{className:"close-btn-container fullscreen-btn"},n().createElement(ee,{modalappearance:p,className:b.closeButton,modalCloseAriaLabel:O,onClick:C,"data-testid":"modal-close-button",modalCloseButtonCompProps:L})),n().createElement(Q,Object.assign({className:b.main,appearance:p},z),"function"===cr(C)&&"fullscreen"!==p&&n().createElement("div",{className:"close-btn-container"},n().createElement(ee,{modalappearance:p,className:b.closeButton,modalCloseAriaLabel:O,onClick:C,"data-testid":"modal-close-button",modalCloseButtonCompProps:L})),n().createElement("div",{className:"modal-header-container"},n().createElement(te,Object.assign({appearance:p,closeModal:C,components:{IconWrapperComp:Z},className:b.header,classes:{icon:b.icon,iconWrapper:b.iconWrapper,title:Qe(b.title)},slots:{HeaderTitleSlot:V},id:"modal-".concat(H),title:T,Icon:U},$))),n().createElement(q,Object.assign({className:b.content},F),h,"fullscreen"===p&&ie())),"fullscreen"!==p&&ie())))});lr.displayName="Modal";var dr=Xe(Dn,{target:"e1mocx0m0"})({name:"lulp55",styles:"position:fixed;top:0;left:0;right:0;bottom:0;height:100%;width:100%;background-color:var(--podium-cds-color-scrim-100);z-index:var(--podium-cds-elevation-100);.modal-enter &,.modal-appear &{opacity:0;}.modal-enter-active &,.modal-appear-active &{opacity:1;transition:opacity var(--podium-cds-transition-duration-normal);}.modal-exit &{opacity:1;}.modal-exit-active &{opacity:0;transition:opacity var(--podium-cds-transition-duration-normal);}"}),ur=Xe(function(e){return n().createElement(Mn,Object.assign({},e))},{target:"e1k4uanx0"})(function(e){var t=e.appearance;return Le(Le("width:100%;max-height:100vh;height:100%;padding:40px var(--podium-cds-size-spacing-l) var(--podium-cds-size-spacing-l) var(--podium-cds-size-spacing-l);overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;::-webkit-scrollbar{display:none;}scrollbar-width:none;-ms-overflow-style:none;@media (min-width:",$.podiumCdsBreakpointM,"){height:100%;padding:48px;}"),";",function(){if("fullscreen"!==t)return Le("-webkit-overflow-scrolling:touch;max-height:calc(100vh - 60px);@media (hover:none) and (pointer:coarse){@supports not (height:100dvh){max-height:calc(100vh - 140px);}@supports (height:100dvh){max-height:calc(100vh - 150px);}}@media (min-width:",$.podiumCdsBreakpointM,'){max-height:calc(100vh - 120px);}display:flex;flex-direction:column;&:before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:36px;z-index:1;}')}(),";",function(){if("fullscreen"===t)return Le("padding:0 var(--podium-cds-size-spacing-xs) 0 var(--podium-cds-size-spacing-l);height:100dvh;@media (min-width:",$.podiumCdsBreakpointM,"){padding:0 28px 0 48px;}.mac-safari-15 &{padding:40px 4px 24px 24px;@media (min-width:",$.podiumCdsBreakpointM,"){padding:48px 24px 0 48px;}}[dir='rtl'] &{padding:0 var(--podium-cds-size-spacing-l) 48px 0;@media (min-width:",$.podiumCdsBreakpointM,"){height:100%;padding:0 48px 48px 28px;}.mac-safari-15 &{padding:48px 24px 24px 0px;@media (min-width:",$.podiumCdsBreakpointM,"){padding:48px 48px 0px 28px;}}}")}(),";")}),pr={BackdropComp:dr,ModalontainerComp:ur},mr=(0,t.forwardRef)(function(e,t){var r=e.components,o=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["components"]);return n().createElement(Wn,Object.assign({components:Object.assign(Object.assign({},pr),r)},o,{ref:t}))});mr.displayName="ModalBaseStyledComps";var fr=Xe(mr,{target:"ejfruub0"})(function(e){var t=e.appearance;return Le(Le("position:absolute;left:0;width:100%;background:var(--podium-cds-color-bg-primary);bottom:0;transform:translate3d(0,0,0);overflow:hidden;@media (min-width:",$.podiumCdsBreakpointM,"){bottom:auto;top:50%;left:50%;height:auto;transform:translate3d(-50%,-50%,0);}"),";","baseMedium"===t?Le("border-radius:var(--podium-cds-size-border-radius-xl) var(--podium-cds-size-border-radius-xl) 0 0;@media (min-width:",$.podiumCdsBreakpointM,"){border-radius:var(--podium-cds-size-border-radius-xl);max-width:762px;}"):"fullscreen"!==t?Le("border-radius:var(--podium-cds-size-border-radius-xl) var(--podium-cds-size-border-radius-xl) 0 0;@media (min-width:",$.podiumCdsBreakpointM,"){border-radius:var(--podium-cds-size-border-radius-xl);max-width:536px;}"):"fullscreen"===t?Le(rt,"{.modal-header-container{padding-top:40px;[dir='rtl'] &{padding-top:0;}}}"):void 0,";",Le(".modal-enter &,.modal-appear &{transform:translate3d(0,100%,0);}.modal-enter-active &,.modal-appear-active &{transform:translate3d(0,0,0);transition:transform var(--podium-cds-transition-duration-normal) var(--podium-cds-transition-timing-function-ease);}.modal-exit &{transform:translate3d(0,0,0);}.modal-exit-active &{transform:translate3d(0,100%,0);transition:transform var(--podium-cds-transition-duration-normal) var(--podium-cds-transition-timing-function-ease);}@media (min-width:",$.podiumCdsBreakpointM,"){.modal-enter &,.modal-appear &{transform:translate3d(-50%,-45%,0);}.modal-enter-active &,.modal-appear-active &{transform:translate3d(-50%,-50%,0);transition:transform var(--podium-cds-transition-duration-normal) var(--podium-cds-transition-timing-function-ease);}.modal-exit &{transform:translate3d(-50%,-50%,0);}.modal-exit-active &{transform:translate3d(-50%,-45%,0);transition:transform var(--podium-cds-transition-duration-normal) var(--podium-cds-transition-timing-function-ease);}}"),";")}),hr=Le("width:100%;padding-bottom:calc(var(--podium-cds-size-spacing-l) + var(--podium-cds-size-spacing-xs));padding-top:var(--podium-cds-size-spacing-xs);font:var(--podium-cds-typography-320-to-1919-title3);@media (min-width:",$.podiumCdsBreakpointXl,"){*{font:var(--podium-cds-typography-1920-plus-title3);}}.icon-wrapper{font-size:var(--podium-cds-typography-body-2-size);}"),gr=Xe(function(e){return n().createElement(Hn,Object.assign({},e))},{target:"eijldiu0"})(hr),br=Le("font:var(--podium-cds-typography-body1);width:100%;@media (max-width:",$.podiumCdsBreakpointM,"){padding-bottom:var(--podium-cds-size-spacing-s);}"),yr=Xe("div",{target:"exp5h810"})(br),vr={name:"1pktd2y",styles:"overflow-y:auto;max-height:100%;width:100%;"},xr=Xe("div",{target:"eqelnlg0"})(function(e){var t=e.appearance;return Le("overflow-y:auto;overflow-x:hidden;@media (max-width:",$.podiumCdsBreakpointM,"){max-height:","fullscreen"===t?null:"100vh",";}-webkit-overflow-scrolling:touch;::-webkit-scrollbar{display:none;}padding-inline-end:20px;margin-right:-20px;margin-left:0px;[dir='rtl'] &{margin-right:0px;margin-left:-20px;padding-inline-end:20px;}.fullscreen &{[dir='rtl'] &{padding-inline-end:var(--podium-cds-size-spacing-l);@media (min-width:",$.podiumCdsBreakpointM,"){padding-inline-end:20px;}}}scrollbar-width:none;-ms-overflow-style:none;","fullscreen"===t&&vr)}),wr=(0,t.forwardRef)(function(e,t){var r=e.appearance,o=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["appearance"]);return n().createElement(xr,Object.assign({ref:t,appearance:r},o))});wr.displayName="ModalMainStyled";var Er=(0,t.forwardRef)(function(e,t){var r=e.appearance,o=void 0===r?"primary":r,i=e.background,a=void 0===i?"light":i,c=e.classes,s=void 0===c?{button:"btn",buttonLarge:"btn-lg",buttonMedium:"btn-md",buttonSmall:"",buttonResponsive:"btn-responsive"}:c,l=e.className,d=e.Component,u=void 0===d?"button":d,p=e.disableRipple,m=void 0!==p&&p,f=e.Icon,h=e.size,g=void 0===h?"medium":h,b=e.type,y=void 0===b?"button":b,v=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["appearance","background","classes","className","Component","disableRipple","Icon","size","type"]),x=Qe("nds-button--icon-only",l);return n().createElement(cn,Object.assign({appearance:o,background:a,className:x,classes:s,Component:u,disableRipple:m,size:g,type:y},v,{ref:t}),f)});Er.displayName="IconButton";var Cr={ModalContentComp:yr,ModalMainComp:wr,ModalContainerComp:ur,ModalCloseButtonComp:function(e){var t=e.modalCloseAriaLabel,r=void 0===t?"Close Modal":t,o=e.onClick,i=e.className,a=e.modalCloseButtonCompProps,c=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["modalCloseAriaLabel","onClick","className","modalCloseButtonCompProps"]);return n().createElement(Er,Object.assign({className:Qe("modal-ui-close",i),ariaLabel:r,appearance:"secondary",size:"small",onClick:o,type:"button",Icon:n().createElement(ir,{"aria-hidden":!0})},a,c))},ModalHeaderComp:gr,ModalBaseComp:fr,BackdropComp:dr},Or=(0,t.forwardRef)(function(e,t){var r=e.components,o=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["components"]);return n().createElement(lr,Object.assign({components:Object.assign(Object.assign({},Cr),r)},o,{ref:t}))});Or.displayName="ModalStyledComps";var kr=Xe(Or,{target:"e1i5x44y0"})(".close-btn-container{position:sticky;top:var(--podium-cds-size-spacing-xs);right:1px;z-index:var(--podium-cds-elevation-100);float:right;@media (max-width:",$.podiumCdsBreakpointM,"){top:0;}[dir='rtl'] &{float:left;}",rt,"{position:absolute;top:52px;right:64px;@media (max-width:",$.podiumCdsBreakpointM,"){top:44px;right:28px;margin:0;}[dir='rtl'] &{position:relative;right:0;top:0;}}",nt,"{float:none;","@media (pointer: fine)","{right:var(--podium-cds-size-spacing-s);top:var(--podium-cds-size-spacing-s);button{position:absolute;right:var(--podium-cds-size-spacing-s);top:0px;}}}&.fullscreen-btn{top:38px;padding-right:20px;@media (max-width:",$.podiumCdsBreakpointM,"){padding-right:20px;}",rt,"{padding-right:0px;[dir='rtl'] &{float:left;position:relative;right:0;}}[dir='rtl'] &{padding-right:0;padding-left:20px;@media (max-width:",$.podiumCdsBreakpointM,"){padding-left:24px;}}}[dir='rtl'] &{.mac-safari-15 &{&.fullscreen-btn{left:48px;right:0px;@media (max-width:",$.podiumCdsBreakpointM,"){left:24px;right:0px;}}}}.mac-safari-15 &{&.fullscreen-btn{top:0px;button{right:20px;}}}}.modal-header-container{display:inline-block;width:80%;}");kr.displayName="ModalStyled";const Sr=ut(kr)`
  @media (min-width: 600px) {
    height: auto;
    border-radius: var(--podium-cds-size-border-radius-l);
    &.modal-alignment {
      top: 120px;
      right: 49px;
      left: auto;
      transform: none;
    }
    /* Styles when promocode exists */
    &.promo {
      min-width: 585px;
      max-width: min-content;
      max-height: max-content;
    }

    /* Styles when promocode does not exist */
    &.no-promo {
      max-width: 572px;
      min-height: 174px;
    }
  }

  @media (max-width: 960px) {
    .modal-content {
      padding-bottom: 0;
      > div {
        padding-bottom: 0;
      }
    }
  }

  @media (max-width: 790px) {
    margin: 0;
  }

  @media (max-width: 375px) {
    max-width: 375px;
    transform: none; /* Ensure no transformations are applied */
    border-radius: var(--podium-cds-size-border-radius-l) var(--podium-cds-size-border-radius-l) 0px 0px;

    &.above-singular-banner {
      position: absolute;
      bottom: 82px; /* Dynamically adjust this in the component */
    }
    &.above-add-to-bag {
      position: absolute;
      bottom: 58px; /* Dynamically adjust this in the component */
    }
  }

  height: auto;
  background-color: white;

  &.above-singular-banner {
    position: absolute;
    bottom: 82px; /* Dynamically adjust this in the component */
  }

  &.above-add-to-bag {
    position: absolute;
    bottom: 58px; /* Dynamically adjust this in the component */
  }

  .close-btn-container {
    top: 12px;
    right: 16px;
    position: absolute;
  }

  & > section {
    padding: 0px;
    gap: 24px;
  }

  & > section > div {
    overflow: auto;
    flex: 1;
    background-color: white;
  }

  & .modal-header-container {
    display: none; /* Hides the header */
  }

  & .modal-content {
    flex: 1;
  }
`,Ar=ut(yr)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  & .cart-check-modal-title {
    line-height: 90%;
    font: var(--podium-cds-typography-320-to-1919-title4);
    white-space: pre-wrap;
  }

  & .cart-check-modal-product-details {
    width: 100%;
    height: 100%;
    max-width: 572px;
    display: flex;
    align-items: center;
    gap: 24px;
    padding-right: 12px;
  }

  & .cart-check-modal-product-details-promocode {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 0.5fr 1.5fr;
    align-items: center;
    gap: 24px;
  }

  & .cart-check-modal-image {
    width: 174px;
    background: var(--podium-cds-color-grey-100);
  }

  & .cart-check-modal-image-promocode {
    height: 100%;
    aspect-ratio: 1/1;
    background: var(--podium-cds-color-grey-100);
    @media (min-width: 600px) and (max-width: 690px) {
      aspect-ratio: auto;
      background-color: white;
      min-width: 220px;
      .nds-image-wrapper {
        overflow: hidden;
        border-bottom-right-radius: var(--podium-cds-size-border-radius-l);
      }
    }
  }

  & .cart-check-modal-product-description {
    flex: 1;
    text-align: left;
    max-width: 304px;
    max-height: 42px;
  }

  & .cart-check-modal-product-description-promo-code {
    flex: 1;
    text-align: left;
    max-width: 304px;
    max-height: 88px;
  }

  & .cart-check-modal-product-wrapper-promocode {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    width: 313px;
    height: auto;
    min-height: max-content;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  & .cart-check-modal-product-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    width: 313px;
  }

  & > .cart-check-modal-image > .nds-image-wrapper {
    width: 100%;
    height: 100%;
  }

  & > .cart-check-modal-image > .cart-check-modal-product-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & > .cart-check-modal-image > .cart-check-modal-product-details > .cart-check-modal-product-description {
    font-size: 14px;
    line-height: 18px;
    margin-top: 25px;
  }

  & > .cart-check-modal-image > .cart-check-modal-product-details > .cart-check-modal-product-price {
    font-size: 14px;
    line-height: 18px;
  }

  & > .cart-check-modal-text-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: center;
    margin-bottom: 1rem;
    background-color: var(--podium-cds-color-background);
  }

  & .cart-check-modal-actions {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-right: 1rem;
  }

  & .cart-check-modal-actions > button {
    height: 36px;
    min-height: 36px;
    min-width: 149px;
    padding: var(--podium-cds-button-padding-top-s) var(--podium-cds-button-padding-sides-s);
    gap: 4px;
  }

  & .cart-check-modal-coupon-area {
    color: var(--podium-cds-color-success);
    padding-top: 4px;
    font-size: 0.75rem;
  }

  & .cart-check-modal-text-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 291px;
    height: 48px;
  }

  & .cart-check-modal-mobile-container {
    display: flex;
    flex: 1;
    width: 362px;
    flex-direction: column;
    justify-content: start;
    @media (max-width: 600px) {
      height: auto;
      padding: 3.5rem 0.5rem 0;
    }
  }

  & > .cart-check-modal-mobile-text-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 274px;
    height: 48px;
    margin-left: 24px;
  }

  & .cart-check-modal-mobile-title {
    line-height: 90%;
    padding-left: 20px;
    width: 80vw;
    font: var(--podium-cds-typography-320-to-1919-title4);
  }

  & .cart-check-modal-mobile-product-details {
    width: 362px;
    display: flex;
    align-items: center;
    gap: 16px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 20px;
    margin-top: 16px;
  }

  & .cart-check-modal-product-description {
    flex: 1;
    text-align: left;
    max-width: 304px;
    max-height: 42px;
  }

  & .cart-check-modal-mobile-product-description-promo-code {
    flex: 1;
    text-align: left;
    max-width: 210px;
    max-height: 84px;
  }

  & .cart-check-modal-mobile-product-description {
    flex: 1;
    text-align: left;
    max-width: 210px;
    max-height: 88px;
  }

  & .cart-check-modal-coupon-area-mobile {
    color: var(--podium-cds-color-success);
    padding-top: 4px;
    font-size: 0.75rem;
  }

  & .cart-check-modal-mobile-image {
    width: 100%;
    max-width: 90px;
    background: var(--podium-cds-color-grey-100);
  }

  & .cart-check-modal-mobile-container .cart-check-modal-actions {
    width: 375px;
    padding-right: 24px;
    padding-left: 24px;
    gap: 8px;
  }

  & .cart-check-modal-mobile-actions {
    width: 375px;
    height: 48px;
    padding-right: var(--podium-cds-button-padding-top-m);
    gap: 8px;
    margin-bottom: 20px;
  }

  & .cart-check-modal-mobile-actions > button {
    width: 165px;
    min-height: 48px;
    min-width: 165px;
    height: 48px;
    left: 24px;
    padding: var(--podium-cds-button-padding-top-m) var(--podium-cds-button-padding-sides-m);
    gap: 4px;
  }
`,Nr=ut(kr)`
  max-width: 600px;
  height: max-content;
  padding-bottom: 0;
  border-radius: var(--podium-cds-size-border-radius-l) var(--podium-cds-size-border-radius-l) 0px 0px;
  @media (min-width: 600px) {
    .modal-content {
      padding: 0;
      & > div {
        padding: 0;
      }
    }
    .modal-header-container {
      display: none;
    }
    .close-btn-container {
      top: 1rem;
      right: 1rem;
    }
  }
  &.modal-alignment {
    position: fixed;
    transform: none;
    max-width: 600px;
    @media (min-width: 600px) {
      top: 120px;
      right: 49px;
      left: auto;
    }
  }
  &.above-singular-banner {
    position: absolute;
    bottom: 82px; /* Dynamically adjust this in the component */
  }

  &.above-add-to-bag {
    position: absolute;
    bottom: 58px; /* Dynamically adjust this in the component */
  }

  #modal-cart-check-promo-top-right-title {
    font: var(--podium-cds-typography-320-to-1919-title4);
    line-height: 105%;
  }
  & .cart-check-modal-mobile-product-details {
    display: flex;
    margin-bottom: 2rem;
    align-items: center;
  }
  & .cart-check-modal-mobile-image {
    width: 86px;
    height: 86px;
    background: var(--podium-cds-color-grey-100);
    margin-right: 16px;
  }
  & .cart-check-modal-promo-code {
    color: var(--podium-cds-color-success);
    font-size: 0.75rem;
    margin-top: 4px;
  }
  @media (min-width: 600px) {
    & > section {
      padding: 0;
    }
    & > section > .modal-header-container > header {
      display: none;
    }
  }
    @media (max-width: 600px) {
    & > section {
      padding: 1rem 1rem 0 1rem;
      }
`,_r=ut(yr)`
  & .cart-check-modal-product-wrapper {
    display: flex;
    align-items: center;
  }
  & .cart-check-modal-image {
    width: 36%;
  }
  & .cart-check-modal-image-promocode {
    width: 40%;
  }
    & .nds-image-wrapper {
    height: auto;
    background: var(--podium-cds-color-grey-100);
    @media (min-width: 600px) {
      margin-right: 1rem;
    }
  }
    & .cart-check-modal-product-details-container {
    padding: .5rem 0;
    width: 54%;
  }
    & .cart-check-modal-title {
    margin-bottom: 0.5rem;
    line-height: 120%;
  }
    & .cart-check-modal-actions {
    margin-top: 0.5rem;
`;const Pr={"promo-top-right":function({isOpen:e,onCloseModal:t,onCtaEvents:r,l10n:o,data:{productData:i}}){var a,c,s;const l=B(z("lt","s")),d="undefined"!=typeof document&&document.getElementById("singular-banner"),u="undefined"!=typeof document&&document.getElementById("floating-atb-wrapper"),p=T(),m=Bt({localeForCurrency:p.hreflang,currency:null!==(a=null==i?void 0:i.currency)&&void 0!==a?a:"USD"});return n().createElement(Sr,{className:`modal-alignment ${(null==i?void 0:i.promo)?"promo":"no-promo"} ${l&&d&&u||l&&d?"above-singular-banner":l&&u?"above-add-to-bag":""}`,isOpen:e,closeModal:t,title:"",modalContentCompProps:{className:"modal-content"}},n().createElement(Ar,null,l?n().createElement(n().Fragment,null,n().createElement("div",{className:"cart-check-modal-mobile-container"},n().createElement("div",{className:"cart-check-modal-mobile-text-container"},n().createElement(lt,{appearance:"title4",className:"cart-check-modal-mobile-title"},null!==(s=o.title)&&void 0!==s?s:"")),n().createElement("div",null),i&&n().createElement("div",{className:"cart-check-modal-mobile-product-details"},n().createElement("div",{className:"cart-check-modal-mobile-image"},n().createElement(n().Fragment,null,n().createElement(tn,{aspectRatio:"1/1",borderRadius:"none",image:{src:i.imageUrl,alt:i.productText},style:{width:"100%",height:"100%"}}))),n().createElement("div",{className:i.promo?"cart-check-modal-mobile-product-description-promocode":"cart-check-modal-mobile-product-description"},n().createElement(lt,{appearance:"body2Strong",color:"var(--podium-cds-color-text-secondary)",placeholder:void 0},i.productText),n().createElement(lt,{appearance:"body2Strong",color:"var(--podium-cds-color-text-secondary)",className:"cart-check-modal-product-price"},m(i.cartPrice)),i.promo&&n().createElement(lt,{appearance:"body2Strong",className:"cart-check-modal-coupon-area-mobile"},i.promo))),n().createElement("div",{className:"cart-check-modal-mobile-actions"},o["actionButtons.primary"]&&n().createElement(n().Fragment,null,n().createElement(cn,{appearance:"primary",size:"large",onClick:()=>{r({eventType:ce}),o["actionButtons.primary.href"]&&yt(o["actionButtons.primary.href"])()},placeholder:void 0},o["actionButtons.primary"]))))):n().createElement(n().Fragment,null,i&&n().createElement("div",{className:i.promo?"cart-check-modal-product-details-promocode":"cart-check-modal-product-details"},n().createElement("div",{"data-testid":"image-container",className:i.promo?"cart-check-modal-image-promocode":"cart-check-modal-image"},n().createElement(tn,{aspectRatio:"1/1",borderRadius:"none",image:{src:i.imageUrl,alt:i.productText},style:{width:"100%",height:"100%"}})),n().createElement("div",{className:i.promo?"cart-check-modal-product-wrapper-promocode":"cart-check-modal-product-wrapper"},n().createElement(lt,{appearance:"title4",className:"cart-check-modal-title",placeholder:void 0},null!==(c=o.title)&&void 0!==c?c:""),n().createElement("div",{"data-testid":"product-description-container",className:i.promo?"cart-check-modal-product-description-promocode":"cart-check-modal-product-description"},n().createElement(n().Fragment,null,n().createElement(lt,{appearance:"body2",color:"var(--podium-cds-color-text-secondary)"},i.productText),n().createElement(lt,{appearance:"body2",color:"var(--podium-cds-color-text-secondary)",className:"cart-check-modal-product-price"},m(i.cartPrice))),i.promo&&n().createElement(lt,{appearance:"body2Strong",className:"cart-check-modal-coupon-area"},i.promo)),n().createElement("div",{className:"cart-check-modal-actions"},o["actionButtons.primary"]&&n().createElement(n().Fragment,null,n().createElement(cn,{appearance:"primary",size:"responsive",onClick:()=>{r({eventType:ce}),o["actionButtons.primary.href"]&&yt(o["actionButtons.primary.href"])()},placeholder:void 0},o["actionButtons.primary"]))))))))},"promo-top-right-v2":function({isOpen:e,onCloseModal:t,onCtaEvents:r,l10n:o,data:{productData:i}}){var a,c;if(!(null==i?void 0:i.currency))return null;const s=B(z("lt","s")),l="undefined"!=typeof document&&document.getElementById("singular-banner"),d="undefined"!=typeof document&&document.getElementById("floating-atb-wrapper"),u=T(),p=Bt({localeForCurrency:u.hreflang,currency:i.currency});return n().createElement(Nr,{className:"modal-alignment "+(s&&l&&d||s&&l?"above-singular-banner":s&&d?"above-add-to-bag":""),isOpen:e,closeModal:t,title:s&&null!==(a=o.title)&&void 0!==a?a:"",titleId:"cart-check-promo-top-right-title",modalContentCompProps:{className:"modal-content"}},n().createElement(_r,null,s?n().createElement(n().Fragment,null,n().createElement("div",{className:"cart-check-modal-mobile-container"},n().createElement("div",{className:"cart-check-modal-mobile-product-details"},n().createElement("div",{className:"cart-check-modal-mobile-image"},n().createElement(n().Fragment,null,n().createElement(tn,{aspectRatio:"1/1",borderRadius:"none",image:{src:i.imageUrl,alt:i.productText},style:{width:"100%",height:"100%"}}))),n().createElement("div",{className:i.promo?"cart-check-modal-mobile-product-description-promocode":"cart-check-modal-mobile-product-description"},n().createElement(lt,{appearance:"body2Strong",color:"var(--podium-cds-color-text-secondary)",placeholder:void 0},i.productText),n().createElement(lt,{appearance:"body2Strong",color:"var(--podium-cds-color-text-secondary)",className:"cart-check-modal-product-price"},p(i.cartPrice)),i.promo&&n().createElement(lt,{appearance:"body2Strong",className:"cart-check-modal-promo-code"},i.promo))),n().createElement("div",{className:"cart-check-modal-mobile-actions"},o["actionButtons.primary"]&&n().createElement(n().Fragment,null,n().createElement(cn,{appearance:"primary",size:"medium","aria-label":o["actionButtons.primary"],onClick:()=>{r({eventType:ce}),o["actionButtons.primary.href"]&&yt(o["actionButtons.primary.href"])()}},o["actionButtons.primary"]))))):n().createElement(n().Fragment,null,n().createElement("div",{className:"cart-check-modal-product-wrapper"},n().createElement("div",{"data-testid":"image-container",className:i.promo?"cart-check-modal-image-promocode":"cart-check-modal-image"},n().createElement(tn,{aspectRatio:"1/1",borderRadius:"none",image:{src:i.imageUrl,alt:i.productText},style:{width:"100%",height:"100%"}})),n().createElement("div",{className:"cart-check-modal-product-details-container"},n().createElement(lt,{appearance:"title4",className:"cart-check-modal-title",placeholder:void 0},null!==(c=o.title)&&void 0!==c?c:""),n().createElement("div",{"data-testid":"product-description-container",className:i.promo?"cart-check-modal-product-description-promocode":"cart-check-modal-product-description"},n().createElement(n().Fragment,null,n().createElement(lt,{appearance:"body2",color:"var(--podium-cds-color-text-secondary)"},i.productText),n().createElement(lt,{appearance:"body2",color:"var(--podium-cds-color-text-secondary)",className:"cart-check-modal-product-price"},p(i.cartPrice))),i.promo&&n().createElement(lt,{appearance:"body2Strong",className:"cart-check-modal-promo-code"},i.promo)),n().createElement("div",{className:"cart-check-modal-actions"},o["actionButtons.primary"]&&n().createElement(n().Fragment,null,n().createElement(cn,{appearance:"primary",size:"small",onClick:()=>{r({eventType:ce}),o["actionButtons.primary.href"]&&yt(o["actionButtons.primary.href"])()},placeholder:void 0},o["actionButtons.primary"]))))))))}},Rr=()=>"undefined"!=typeof window,Tr=(e="",n={})=>{const{defaultMatch:r=!1}=n,o=!(!Rr()||!window.matchMedia),i=(0,t.useMemo)(()=>o?window.matchMedia("string"==typeof e?e.replace("@media","").trim():""):{matches:r},[r,o,e]),[a,c]=(0,t.useState)(i.matches);return(0,t.useEffect)(()=>{if(o){const e=e=>{c(e.matches)};return c(i.matches),i.addListener(e),()=>i.removeListener(e)}},[i,o]),a},jr={podiumCdsBreakpointXs:"320px",podiumCdsBreakpointS:"600px",podiumCdsBreakpointM:"960px",podiumCdsBreakpointL:"1440px",podiumCdsBreakpointXl:"1920px"},Ir=(e,t)=>{if(!t)return"";const n=jr[`podiumCdsBreakpoint${r=t,r.charAt(0).toUpperCase()+r.slice(1)}`];var r;if(!n)return"";const o=parseInt(n,10),i={lt:o-1,lte:o,gte:o,gt:o+1},a={lt:"max-width",lte:"max-width",gte:"min-width",gt:"min-width"};return a[e]&&i[e]?`@media (${String(a[e])}: ${String(i[e])}px)`:""},Dr=(0,t.createContext)(_.DEFAULT_LOCALE_DATA),Mr=({locale:e,children:t})=>{if("undefined"!=typeof window){const{locale:r}=window.webShellClient,o=null!=e?e:r.get();return n().createElement(Dr.Provider,{value:o},t)}return n().createElement(Dr.Provider,{value:null!=e?e:_.DEFAULT_LOCALE_DATA},t)},Lr="SHOWN",Br="CLICK_SECONDARY_CTA",$r="CLICK_PRIMARY_CTA";function Fr(e){var{appearances:r,logger:o,component:i}=e,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["appearances","logger","component"]);const[c,s]=(0,t.useState)(!1),{data:l,l10n:d,onCloseModal:u,onCtaEvents:p}=a,{openModal:m,closeModal:f,isOpen:h}=ie(),g=window.webShellClient.locale.get(),b=Tr(Ir("gte","m")),y=Tr(Ir("lte","s")),[v,x]=function(e,n,r,o,i){return(0,t.useMemo)(()=>{var t;if(!o)return e.warn("No data provided for component",{data:o}),[null,null];const a=null!==(t=o.appearance)&&void 0!==t?t:"default";if(!(i&&Object.keys(i).length>0))return e.warn("No localization data provided for component",{data:o}),[null,null];const c=r[a];return c?[c,{data:o,l10n:i,testID:`bellotti-${n}-${a}`}]:(e.error(`No component found for given appearance: ${a}`),[null,null])},[n,o,i])}(o,i,r,l,d),w=(0,t.useCallback)(()=>{f()&&u()},[f,u]),E=(0,t.useCallback)(({eventType:e},t)=>{f()&&(p({eventType:e}),t&&t())},[f,p]);return(0,t.useEffect)(()=>{c||!y&&!b||(s(!0),m()&&p({eventType:Lr}))},[c,b,y,p,m]),v&&x&&(y||b)?n().createElement(Mr,{locale:g},n().createElement(v,Object.assign({},x,{isOpen:h,onCloseModal:w,onCtaEvents:E}))):null}var zr=Xe.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){zr[e]=zr(e)});const Ur=zr,Gr={body1:"p",body2:"p",body3:"p",body4:"p",body1Strong:"p",body2Strong:"p",body3Strong:"p",body4Strong:"p",body1Link:"a",body2Link:"a",body3Link:"a",body4Link:"a",legal:"p",editorialBody1:"p",editorialBody1Strong:"p",oversize1:"p",oversize2:"p",oversize3:"p",display1:"h1",display2:"h2",display3:"h3",display4:"h4",title1:"h1",title2:"h2",title3:"h3",title4:"h4",conversation1:"p",conversation2:"p",conversation3:"p",conversation4:"p"},Wr=(0,t.forwardRef)(({Component:e,align:t="inherit",appearance:r="body1",bold:o=!1,className:i,color:a="primary",display:c="initial",strikethrough:s=!1,weight:l="regular",uppercase:d,...u},p)=>{const m=Qe("nds-text",i,{[`text-align-${t}`]:"inherit"!==t,[`appearance-${r}`]:!0,bold:o,[`color-${a}`]:!0,[`display-${c}`]:"initial"!==c,[`weight-${l}`]:!0,strikethrough:s,uppercase:d}),f=e||Gr[r];return n().createElement(f,{className:m,...u,ref:p})});Wr.displayName="Text";const{podiumCdsBreakpointM:Hr}=jr,Yr="@media not all and (min-resolution: 0.001dpcm)",Vr="@media (pointer: coarse)",Kr={primary:"var(--podium-cds-color-text-primary)",primaryInverse:"var(--podium-cds-color-text-primary-inverse)",secondary:"var(--podium-cds-color-text-secondary)",secondaryInverse:"var(--podium-cds-color-text-secondary-inverse)",disabled:"var(--podium-cds-color-text-disabled)",error:"var(--podium-cds-color-text-critical)",success:"var(--podium-cds-color-text-success)"},Xr={body1:"--podium-cds-typography-body1",body2:"--podium-cds-typography-body2",body3:"--podium-cds-typography-body3",body4:"--podium-cds-typography-body4",body1Strong:"--podium-cds-typography-body1-strong",body2Strong:"--podium-cds-typography-body2-strong",body3Strong:"--podium-cds-typography-body3-strong",body4Strong:"--podium-cds-typography-body4-strong",legal:"--podium-cds-typography-legal"},qr=(e,t)=>e&&!t?`@media (min-width: ${e})`:!e&&t?`@media (max-width: ${t})`:`@media (min-width: ${e}) and (max-width: ${t})`,Qr=Ur(Wr)(({align:e,appearance:t,bold:n,color:r,display:o,strikethrough:i,weight:a,uppercase:c})=>Le`
  ${(e=>{if(e){if("body"===e.substr(0,4)&&!e.includes("Link")||"legal"===e)return`font: var(${Xr[e]});`;if(e.includes("Link")){const t=e.substr(0,5);return`font: var(${Xr[t]}); text-decoration: underline; text-underline-offset: 1px;`}switch(!0){case e.includes("display"):return`\n        font: var(--podium-cds-typography-960-to-1919-${e});\n        ${qr(null,"959px")}{\n          font: var(--podium-cds-typography-320-to-959-${e});\n        }\n        ${qr("1920px")}{\n          font: var(--podium-cds-typography-1920-plus-${e});\n        }\n      `;case e.includes("oversize"):return`\n        font: var(--podium-cds-typography-320-to-959-${e});\n        ${qr("960px","1439px")}{\n          font: var(--podium-cds-typography-960-to-1439-${e});\n        }\n        ${qr("1440px","1919px")}{\n          font: var(--podium-cds-typography-1440-to-1919-${e});\n        }\n        ${qr("1920px")}{\n          font: var(--podium-cds-typography-1920-plus-${e});\n        }\n      `;case e.includes("conversation"):return`\n        font: var(--podium-cds-typography-320-to-959-${e});\n        ${qr("960px","1919px")}{\n          font: var(--podium-cds-typography-960-to-1919-${e});\n        }\n        ${qr("1920px")}{\n          font: var(--podium-cds-typography-1920-plus-${e});\n        }\n      `;case e.includes("title"):return`\n          font: var(--podium-cds-typography-320-to-1919-${e});\n          ${qr("1920px")}{\n            font: var(--podium-cds-typography-1920-plus-${e});\n          }\n        `;case e.includes("editorial"):const t=e.replace("Body1","-body1").replace("Strong","-strong");return`\n          font: var(--podium-cds-typography-320-to-959-${t});\n          ${qr("960px")}{\n            font: var(--podium-cds-typography-960-plus-${t});\n          }\n        `;default:return""}}})(t)}
  color: ${(e=>(e?Kr[e]:null)||e)(r)};
  ${(e=>Le`
  text-align: ${e};
  ${"@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)"} {
    text-align: ${(e=>"end"===e?"right":"center"===e?"center":"left")(e)};

    [dir="rtl"] & {
      text-align: ${(e=>"end"===e?"left":"center"===e?"center":"right")(e)};
    }
  }
`)(e)};
  ${(e=>{if(null!=e)return Le`
      text-transform: ${!1===e?"none":"uppercase"};
    `})(c)};
  ${((e,t)=>"medium"===e?Le`
      font-weight: 500;
    `:"bold"===e||!0===t?Le`
      font-weight: 700;
    `:Le``)(a,n)}
  ${i&&"text-decoration: line-through;"}
  ${"initial"!==o&&`display: ${o};`}
`);var Zr=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),Jr=Math.abs,eo=String.fromCharCode,to=Object.assign;function no(e){return e.trim()}function ro(e,t,n){return e.replace(t,n)}function oo(e,t){return e.indexOf(t)}function io(e,t){return 0|e.charCodeAt(t)}function ao(e,t,n){return e.slice(t,n)}function co(e){return e.length}function so(e){return e.length}function lo(e,t){return t.push(e),e}var uo=1,po=1,mo=0,fo=0,ho=0,go="";function bo(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:uo,column:po,length:a,return:""}}function yo(e,t){return to(bo("",null,null,"",null,null,0),e,{length:-e.length},t)}function vo(){return ho=fo>0?io(go,--fo):0,po--,10===ho&&(po=1,uo--),ho}function xo(){return ho=fo<mo?io(go,fo++):0,po++,10===ho&&(po=1,uo++),ho}function wo(){return io(go,fo)}function Eo(){return fo}function Co(e,t){return ao(go,e,t)}function Oo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ko(e){return uo=po=1,mo=co(go=e),fo=0,[]}function So(e){return go="",e}function Ao(e){return no(Co(fo-1,Po(91===e?e+2:40===e?e+1:e)))}function No(e){for(;(ho=wo())&&ho<33;)xo();return Oo(e)>2||Oo(ho)>3?"":" "}function _o(e,t){for(;--t&&xo()&&!(ho<48||ho>102||ho>57&&ho<65||ho>70&&ho<97););return Co(e,Eo()+(t<6&&32==wo()&&32==xo()))}function Po(e){for(;xo();)switch(ho){case e:return fo;case 34:case 39:34!==e&&39!==e&&Po(ho);break;case 40:41===e&&Po(e);break;case 92:xo()}return fo}function Ro(e,t){for(;xo()&&e+ho!==57&&(e+ho!==84||47!==wo()););return"/*"+Co(t,fo-1)+"*"+eo(47===e?e:xo())}function To(e){for(;!Oo(wo());)xo();return Co(e,fo)}var jo="-ms-",Io="-moz-",Do="-webkit-",Mo="comm",Lo="rule",Bo="decl",$o="@keyframes";function Fo(e,t){for(var n="",r=so(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function zo(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Bo:return e.return=e.return||e.value;case Mo:return"";case $o:return e.return=e.value+"{"+Fo(e.children,r)+"}";case Lo:e.value=e.props.join(",")}return co(n=Fo(e.children,r))?e.return=e.value+"{"+n+"}":""}function Uo(e){return So(Go("",null,null,null,[""],e=ko(e),0,[0],e))}function Go(e,t,n,r,o,i,a,c,s){for(var l=0,d=0,u=a,p=0,m=0,f=0,h=1,g=1,b=1,y=0,v="",x=o,w=i,E=r,C=v;g;)switch(f=y,y=xo()){case 40:if(108!=f&&58==io(C,u-1)){-1!=oo(C+=ro(Ao(y),"&","&\f"),"&\f")&&(b=-1);break}case 34:case 39:case 91:C+=Ao(y);break;case 9:case 10:case 13:case 32:C+=No(f);break;case 92:C+=_o(Eo()-1,7);continue;case 47:switch(wo()){case 42:case 47:lo(Ho(Ro(xo(),Eo()),t,n),s);break;default:C+="/"}break;case 123*h:c[l++]=co(C)*b;case 125*h:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+d:-1==b&&(C=ro(C,/\f/g,"")),m>0&&co(C)-u&&lo(m>32?Yo(C+";",r,n,u-1):Yo(ro(C," ","")+";",r,n,u-2),s);break;case 59:C+=";";default:if(lo(E=Wo(C,t,n,l,d,o,c,v,x=[],w=[],u),i),123===y)if(0===d)Go(C,t,E,E,x,i,u,c,w);else switch(99===p&&110===io(C,3)?100:p){case 100:case 108:case 109:case 115:Go(e,E,E,r&&lo(Wo(e,E,E,0,0,o,c,v,o,x=[],u),w),o,w,u,c,r?x:w);break;default:Go(C,E,E,E,[""],w,0,c,w)}}l=d=m=0,h=b=1,v=C="",u=a;break;case 58:u=1+co(C),m=f;default:if(h<1)if(123==y)--h;else if(125==y&&0==h++&&125==vo())continue;switch(C+=eo(y),y*h){case 38:b=d>0?1:(C+="\f",-1);break;case 44:c[l++]=(co(C)-1)*b,b=1;break;case 64:45===wo()&&(C+=Ao(xo())),p=wo(),d=u=co(v=C+=To(Eo())),y++;break;case 45:45===f&&2==co(C)&&(h=0)}}return i}function Wo(e,t,n,r,o,i,a,c,s,l,d){for(var u=o-1,p=0===o?i:[""],m=so(p),f=0,h=0,g=0;f<r;++f)for(var b=0,y=ao(e,u+1,u=Jr(h=a[f])),v=e;b<m;++b)(v=no(h>0?p[b]+" "+y:ro(y,/&\f/g,p[b])))&&(s[g++]=v);return bo(e,t,n,0===o?Lo:c,s,l,d)}function Ho(e,t,n){return bo(e,t,n,Mo,eo(ho),ao(e,2,-2),0)}function Yo(e,t,n,r){return bo(e,t,n,Bo,ao(e,0,r),ao(e,r+1,-1),r)}var Vo=function(e,t,n){for(var r=0,o=0;r=o,o=wo(),38===r&&12===o&&(t[n]=1),!Oo(o);)xo();return Co(e,fo)},Ko=new WeakMap,Xo=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Ko.get(n))&&!r){Ko.set(e,!0);for(var o=[],i=function(e,t){return So(function(e,t){var n=-1,r=44;do{switch(Oo(r)){case 0:38===r&&12===wo()&&(t[n]=1),e[n]+=Vo(fo-1,t,n);break;case 2:e[n]+=Ao(r);break;case 4:if(44===r){e[++n]=58===wo()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=eo(r)}}while(r=xo());return e}(ko(e),t))}(t,o),a=n.props,c=0,s=0;c<i.length;c++)for(var l=0;l<a.length;l++,s++)e.props[s]=o[c]?i[c].replace(/&\f/g,a[l]):a[l]+" "+i[c]}}},qo=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function Qo(e,t){switch(function(e,t){return 45^io(e,0)?(((t<<2^io(e,0))<<2^io(e,1))<<2^io(e,2))<<2^io(e,3):0}(e,t)){case 5103:return Do+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Do+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Do+e+Io+e+jo+e+e;case 6828:case 4268:return Do+e+jo+e+e;case 6165:return Do+e+jo+"flex-"+e+e;case 5187:return Do+e+ro(e,/(\w+).+(:[^]+)/,Do+"box-$1$2"+jo+"flex-$1$2")+e;case 5443:return Do+e+jo+"flex-item-"+ro(e,/flex-|-self/,"")+e;case 4675:return Do+e+jo+"flex-line-pack"+ro(e,/align-content|flex-|-self/,"")+e;case 5548:return Do+e+jo+ro(e,"shrink","negative")+e;case 5292:return Do+e+jo+ro(e,"basis","preferred-size")+e;case 6060:return Do+"box-"+ro(e,"-grow","")+Do+e+jo+ro(e,"grow","positive")+e;case 4554:return Do+ro(e,/([^-])(transform)/g,"$1"+Do+"$2")+e;case 6187:return ro(ro(ro(e,/(zoom-|grab)/,Do+"$1"),/(image-set)/,Do+"$1"),e,"")+e;case 5495:case 3959:return ro(e,/(image-set\([^]*)/,Do+"$1$`$1");case 4968:return ro(ro(e,/(.+:)(flex-)?(.*)/,Do+"box-pack:$3"+jo+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Do+e+e;case 4095:case 3583:case 4068:case 2532:return ro(e,/(.+)-inline(.+)/,Do+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(co(e)-1-t>6)switch(io(e,t+1)){case 109:if(45!==io(e,t+4))break;case 102:return ro(e,/(.+:)(.+)-([^]+)/,"$1"+Do+"$2-$3$1"+Io+(108==io(e,t+3)?"$3":"$2-$3"))+e;case 115:return~oo(e,"stretch")?Qo(ro(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==io(e,t+1))break;case 6444:switch(io(e,co(e)-3-(~oo(e,"!important")&&10))){case 107:return ro(e,":",":"+Do)+e;case 101:return ro(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Do+(45===io(e,14)?"inline-":"")+"box$3$1"+Do+"$2$3$1"+jo+"$2box$3")+e}break;case 5936:switch(io(e,t+11)){case 114:return Do+e+jo+ro(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Do+e+jo+ro(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Do+e+jo+ro(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Do+e+jo+e+e}return e}var Zo=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Bo:e.return=Qo(e.value,e.length);break;case $o:return Fo([yo(e,{value:ro(e.value,"@","@"+Do)})],r);case Lo:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,function(t){switch(function(e){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return Fo([yo(e,{props:[ro(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return Fo([yo(e,{props:[ro(t,/:(plac\w+)/,":"+Do+"input-$1")]}),yo(e,{props:[ro(t,/:(plac\w+)/,":-moz-$1")]}),yo(e,{props:[ro(t,/:(plac\w+)/,jo+"input-$1")]})],r)}return""})}}],Jo=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var r,o,i=e.stylisPlugins||Zo,a={},c=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)a[t[n]]=!0;c.push(e)});var s,l,d,u,p=[zo,(u=function(e){s.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],m=(l=[Xo,qo].concat(i,p),d=so(l),function(e,t,n,r){for(var o="",i=0;i<d;i++)o+=l[i](e,t,n,r)||"";return o});o=function(e,t,n,r){s=n,Fo(Uo(e?e+"{"+t.styles+"}":t.styles),m),r&&(f.inserted[t.name]=!0)};var f={key:t,sheet:new Zr({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:a,registered:{},insert:o};return f.sheet.hydrate(c),f},ei=!!t.useInsertionEffect&&t.useInsertionEffect,ti=ei||function(e){return e()},ni=(ei||t.useLayoutEffect,t.createContext("undefined"!=typeof HTMLElement?Jo({key:"css"}):null)),ri=(ni.Provider,function(e){return(0,t.forwardRef)(function(n,r){var o=(0,t.useContext)(ni);return e(n,o,r)})}),oi=t.createContext({}),ii={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ai(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var ci=/[A-Z]|^ms/g,si=/_EMO_([^_]+?)_([^]*?)_EMO_/g,li=function(e){return 45===e.charCodeAt(1)},di=function(e){return null!=e&&"boolean"!=typeof e},ui=ai(function(e){return li(e)?e:e.replace(ci,"-$&").toLowerCase()}),pi=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(si,function(e,t,n){return fi={name:t,styles:n,next:fi},t})}return 1===ii[e]||li(e)||"number"!=typeof t||0===t?t:t+"px"};function mi(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var o=n;if(1===o.anim)return fi={name:o.name,styles:o.styles,next:fi},o.name;var i=n;if(void 0!==i.styles){var a=i.next;if(void 0!==a)for(;void 0!==a;)fi={name:a.name,styles:a.styles,next:fi},a=a.next;return i.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=mi(e,t,n[o])+";";else for(var i in n){var a=n[i];if("object"!=typeof a){var c=a;null!=t&&void 0!==t[c]?r+=i+"{"+t[c]+"}":di(c)&&(r+=ui(i)+":"+pi(i,c)+";")}else if(!Array.isArray(a)||"string"!=typeof a[0]||null!=t&&void 0!==t[a[0]]){var s=mi(e,t,a);switch(i){case"animation":case"animationName":r+=ui(i)+":"+s+";";break;default:r+=i+"{"+s+"}"}}else for(var l=0;l<a.length;l++)di(a[l])&&(r+=ui(i)+":"+pi(i,a[l])+";")}return r}(e,t,n);case"function":if(void 0!==e){var c=fi,s=n(e);return fi=c,mi(e,t,s)}}var l=n;if(null==t)return l;var d=t[l];return void 0!==d?d:l}var fi,hi=/label:\s*([^\s;{]+)\s*(;|$)/g,gi=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},bi=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,yi=ai(function(e){return bi.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),vi=function(e){return"theme"!==e},xi=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?yi:vi},wi=function(e,t,n){var r;if(t){var o=t.shouldForwardProp;r=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},Ei=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return gi(t,n,r),ti(function(){return function(e,t,n){gi(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+r:"",o,e.sheet,!0),o=o.next}while(void 0!==o)}}(t,n,r)}),null},Ci=function e(n,r){var o,i,a=n.__emotion_real===n,c=a&&n.__emotion_base||n;void 0!==r&&(o=r.label,i=r.target);var s=wi(n,r,a),l=s||xi(c),d=!l("as");return function(){var u=arguments,p=a&&void 0!==n.__emotion_styles?n.__emotion_styles.slice(0):[];if(void 0!==o&&p.push("label:"+o+";"),null==u[0]||void 0===u[0].raw)p.push.apply(p,u);else{var m=u[0];p.push(m[0]);for(var f=u.length,h=1;h<f;h++)p.push(u[h],m[h])}var g=ri(function(e,n,r){var o,a,u,m,f=d&&e.as||c,h="",g=[],b=e;if(null==e.theme){for(var y in b={},e)b[y]=e[y];b.theme=t.useContext(oi)}"string"==typeof e.className?(o=n.registered,a=g,u=e.className,m="",u.split(" ").forEach(function(e){void 0!==o[e]?a.push(o[e]+";"):e&&(m+=e+" ")}),h=m):null!=e.className&&(h=e.className+" ");var v=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,o="";fi=void 0;var i=e[0];null==i||void 0===i.raw?(r=!1,o+=mi(n,t,i)):o+=i[0];for(var a=1;a<e.length;a++)o+=mi(n,t,e[a]),r&&(o+=i[a]);hi.lastIndex=0;for(var c,s="";null!==(c=hi.exec(o));)s+="-"+c[1];var l=function(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(o)+s;return{name:l,styles:o,next:fi}}(p.concat(g),n.registered,b);h+=n.key+"-"+v.name,void 0!==i&&(h+=" "+i);var x=d&&void 0===s?xi(f):l,w={};for(var E in e)d&&"as"===E||x(E)&&(w[E]=e[E]);return w.className=h,r&&(w.ref=r),t.createElement(t.Fragment,null,t.createElement(Ei,{cache:n,serialized:v,isStringTag:"string"==typeof f}),t.createElement(f,w))});return g.displayName=void 0!==o?o:"Styled("+("string"==typeof c?c:c.displayName||c.name||"Component")+")",g.defaultProps=n.defaultProps,g.__emotion_real=g,g.__emotion_base=c,g.__emotion_styles=p,g.__emotion_forwardProp=s,Object.defineProperty(g,"toString",{value:function(){return"."+i}}),g.withComponent=function(t,n){return e(t,sn({},r,n,{shouldForwardProp:wi(g,n,!0)})).apply(void 0,p)},g}}.bind(null);["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){Ci[e]=Ci(e)});const Oi=Ci.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    width: 338px !important;
    margin-bottom: 12px;
  }

  ${e=>e.customFont&&`\n    & .timer-value {\n      font-family: '${e.customFont}', sans-serif !important;\n    }\n  `};
`,ki=Ci.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Si=Ci.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
  height: 70px;
  color: var(--podium-cds-color-white);
  max-width: 2ch;
  text-align: center;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 32px;
    height: 32px;
    margin-bottom: 2px;
  }
`,Ai=Ci(Qr)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--podium-cds-color-white);
  letter-spacing: 0.28em;
  opacity: 0.75;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`,Ni=Ci.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--podium-cds-color-white);
  margin: 0 16px 36px 16px;
  height: 57px;
  @media (max-width: 768px) {
    margin: 0 4px 20px 4px;
    height: 32px;
  }
  & p {
    font-size: 70px;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
`,_i=(0,t.memo)(({endDate:e,l10n:r,customFont:o})=>{if(!e)return null;const[i,a]=(0,t.useState)({days:"00",hours:"00",minutes:"00",seconds:"00"});return(0,t.useEffect)(()=>{const t=()=>{a(function(e){const t=new Date,n=new Date(e).getTime()-t.getTime();if(n<=0)return{days:"00",hours:"00",minutes:"00",seconds:"00"};const r=Math.floor(n/864e5),o=Math.floor(n%864e5/36e5),i=Math.floor(n%36e5/6e4),a=Math.floor(n%6e4/1e3);return{days:r.toString().padStart(2,"0"),hours:o.toString().padStart(2,"0"),minutes:i.toString().padStart(2,"0"),seconds:a.toString().padStart(2,"0")}}(new Date(e)))};t();const n=setInterval(t,1e3);return()=>{clearInterval(n)}},[e]),n().createElement(Oi,{customFont:o},n().createElement(ki,null,n().createElement(Si,{className:"timer-value","data-testid":"days"},i.days),n().createElement(Ai,{appearance:"body3Strong"},r["countdown.days"])),n().createElement(Ni,null,n().createElement(Qr,{appearance:"body3Strong"},":")),n().createElement(ki,null,n().createElement(Si,{className:"timer-value","data-testid":"hours"},i.hours),n().createElement(Ai,{appearance:"body3Strong"},r["countdown.hours"])),n().createElement(Ni,null,n().createElement(Qr,{appearance:"body3Strong"},":")),n().createElement(ki,null,n().createElement(Si,{className:"timer-value","data-testid":"minutes"},i.minutes),n().createElement(Ai,{appearance:"body3Strong"},r["countdown.minutes"])),n().createElement(Ni,null,n().createElement(Qr,{appearance:"body3Strong"},":")),n().createElement(ki,null,n().createElement(Si,{className:"timer-value","data-testid":"seconds"},i.seconds),n().createElement(Ai,{appearance:"body3Strong"},r["countdown.seconds"])))});_i.displayName="DigitalTimer";const Pi=_i;const Ri=e=>{var{data:r,l10n:o,timerSize:i="body1Strong"}=e,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["data","l10n","timerSize"]);const c=null==r?void 0:r.timer;if(!(null==c?void 0:c.targetDate))return null;const s=(0,t.useMemo)(()=>(e=>{const t=new Date(e),n=new Date;return Math.ceil((t.getTime()-n.getTime())/36e5)})(c.targetDate),[c.targetDate]);if(s<=0)return null;const l=((e,t)=>{let n=null;return Object.entries(t).forEach(([r,o])=>{e<=o&&(!n||t[n]>o)&&(n=r)}),n})(s,c.thresholds);if(null===l)return null;const d=o[`timer.${l}`];if(!d)return null;const u=c.thresholdsColors[l],p=(0,t.useMemo)(()=>Math.ceil(s/24),[s]),m=(0,t.useMemo)(()=>d.replace("{day}",p.toString()),[d,p]);return n().createElement(Qr,Object.assign({appearance:i,style:{color:u}},a),m)},Ti=e=>()=>{window.location.href=e};function ji(e){const[n,r]=(0,t.useState)(0===e.length);return(0,t.useEffect)(()=>{if(0===e.length)return;const t=e.map(e=>function(e){return t=this,n=void 0,o=function*(){return new Promise(t=>{const n=new Image;n.src=e,n.onload=()=>{t()},n.onerror=()=>{t()}})},new((r=void 0)||(r=Promise))(function(e,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r(function(e){e(n)})).then(a,c)}s((o=o.apply(t,n||[])).next())});var t,n,r,o}(e));Promise.all(t).then(()=>{r(!0)}).catch(()=>{r(!1)})},[e]),n}const Ii=(0,t.forwardRef)(({appearance:e="primary",ariaLabel:t,background:r="light",children:o,className:i,classes:a={button:"btn",text:"cta",iconWrapper:"",buttonLarge:"btn-lg",buttonMedium:"btn-md",buttonSmall:"",buttonResponsive:"btn-responsive",textUnderline:"underline"},disabled:c,href:s,iconPlacement:l="end",onClick:d,size:u="responsive",Component:p="button",Icon:m,IconWrapper:f="span",type:h="submit",disableRipple:g=!1,...b},y)=>{let v;const x=(e=>"text"===e||"textUnderline"===e?"primary":e)(e),w=((e,t,n)=>"text"===e||"textUnderline"===e?n:t)(e,a.button,a.text),E="textUnderline"===e?a.textUnderline:"";v=a.button?`${w}-${x}-${"dark"===r?"light":"dark"} ${E}`:e;const C="textUnderline"===e||"text"===e||g,O=((e,t,n,r,o)=>"small"===e?t:"medium"===e?n:"large"===e?r:o)(u,a.buttonSmall,a.buttonMedium,a.buttonLarge,a.buttonResponsive);v=Qe("nds-btn",i,v,{[O]:!!O,disabled:"a"===p?void 0:c});const k=m&&n().createElement(f,{className:Qe("btn-icon-wrapper",a.iconWrapper)},m);return n().createElement(p,{disabled:"a"===p?void 0:c,"aria-label":t,className:v,onClick:d,href:"button"===p?void 0:s,type:"a"===p?void 0:h,...b,ref:y},"start"===l&&k,o,"end"===l&&k,!(C||c)&&n().createElement("span",{className:"ripple",style:{pointerEvents:"none"},inert:""}))});Ii.displayName="Button";const Di=(0,t.forwardRef)((e,t)=>n().createElement(Ii,{...e,ref:t}));Di.displayName="ButtonWithRef";const Mi=Ur(Di)(e=>{const{Component:t,className:n,size:r,appearance:o="primary",background:i="light",disableRipple:a,iconPlacement:c}=e,s="light"===i,l={light:{primary:{backgroundStyle:"var(--podium-cds-button-color-bg-primary)",color:"var(--podium-cds-color-text-primary-on-dark)",hoverFocusActiveBackground:"var(--podium-cds-button-color-bg-primary-hover)",disabledBackground:"var(--podium-cds-button-color-bg-primary-disabled)",disabledColor:"var(--podium-cds-color-text-disabled)"},secondary:{backgroundStyle:"var(--podium-cds-button-color-bg-secondary)",color:"var(--podium-cds-color-text-primary-on-light)",borderColor:"var(--podium-cds-button-color-border-secondary)",hoverFocusActiveBackground:"var(--podium-cds-button-color-bg-secondary)",hoverFocusActiveBorderColor:"var(--podium-cds-button-color-border-secondary-hover)",disabledBackground:"var(--podium-cds-button-color-bg-secondary)",disabledColor:"var(--podium-cds-color-text-disabled)",disabledBorderColor:"var(--podium-cds-button-color-border-secondary-disabled)"},tertiary:{backgroundStyle:"inherit",color:"var(--podium-cds-color-text-primary-on-light)",hoverFocusActiveBackground:"var(--podium-cds-icon-button-color-bg-tertiary-hover)",disabledBackground:"inherit",disabledColor:"var(--podium-cds-color-text-disabled)"}},dark:{primary:{backgroundStyle:"var(--podium-cds-button-color-bg-primary-on-dark)",color:"var(--podium-cds-color-text-primary-on-light)",hoverFocusActiveBackground:"var(--podium-cds-button-color-bg-primary-hover-on-dark)",disabledBackground:"var(--podium-cds-button-color-bg-primary-disabled-on-dark)",disabledColor:"var(--podium-cds-color-text-disabled-inverse)"},secondary:{backgroundStyle:"var(--podium-cds-button-color-bg-secondary)",color:"var(--podium-cds-color-text-primary-on-dark)",borderColor:"var(--podium-cds-button-color-border-secondary-on-dark)",hoverFocusActiveBackground:"var(--podium-cds-button-color-bg-secondary)",hoverFocusActiveBorderColor:"var(--podium-cds-button-color-border-secondary)",disabledBackground:"var(--podium-cds-button-color-bg-secondary)",disabledColor:"var(--podium-cds-color-text-disabled-inverse)",disabledBorderColor:"var(--podium-cds-button-color-border-secondary-disabled-on-dark)"},tertiary:{backgroundStyle:"inherit",color:"var(--podium-cds-color-text-primary-on-dark)",hoverFocusActiveBackground:"var(--podium-cds-icon-button-color-bg-tertiary-hover-on-dark)",disabledBackground:"inherit",disabledColor:"var(--podium-cds-color-text-disabled-inverse)"}}};return Le`
    font: var(--podium-cds-typography-body1-strong);
    text-align: center;
    text-decoration: none;
    box-sizing: border-box;
    display: ${"a"===t?"inline-flex":"flex"};
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    ${(()=>{if("primary"===o||"secondary"===o||"tertiary"===o){let e;const t="\n          padding: var(--podium-cds-button-padding-top-l) var(--podium-cds-button-padding-sides-l);\n          width: 100%;\n          min-height: var(--podium-cds-button-height-l);\n        ",n="\n        padding: var(--podium-cds-button-padding-top-s) var(--podium-cds-button-padding-sides-s) var(--podium-cds-button-padding-bottom-s);\n        min-height: var(--podium-cds-button-height-s);\n      ";return e="large"===r?t:"medium"===r?"\n          padding: var(--podium-cds-button-padding-top-m) var(--podium-cds-button-padding-sides-m);\n          min-height: var(--podium-cds-button-height-m);\n      ":"small"===r?n:`\n          ${t}\n          @media (min-width: ${jr.podiumCdsBreakpointM}) {\n            ${n}\n            width: auto;\n            height: auto;\n            min-height: auto;\n          }\n        `,Le`
        ${e}
      `}})()}
    ${(()=>{let e="end"===c?"0":"var(--podium-cds-size-spacing-xs)",t="start"===c?"0":"var(--podium-cds-size-spacing-xs)";return"small"===r&&(e="end"===c?"0":"8px",t="start"===c?"-4px":"var(--podium-cds-size-spacing-xs)"),Le`
      .btn-icon-wrapper {
        width: ${"small"===r?"20px":"var(--podium-cds-size-icon-m)"}; // 16px needs to be swapped out to podium-cds-size-icon-s; TO-DO: DSYS-1157
        height: var(--podium-cds-size-icon-m);
        margin-inline-end: ${e};
        margin-inline-start: ${t};
        svg {
          width: var(--podium-cds-size-icon-m);
        }
      }
    `})()}
    ${"text"===o||"textUnderline"===o?(()=>{if("text"===o)return Le`
        display: block;
        .btn-icon-wrapper {
          display: inline-flex;
          width: ${"small"===r?"16px":"var(--podium-cds-size-icon-m)"}; // 16px needs to be swapped out to podium-cds-size-icon-s; TO-DO: DSYS-1157
          height: var(--podium-cds-size-icon-m);
          margin-inline-end: ${"end"===c?"0":"var(--podium-cds-size-spacing-xs)"};
          margin-inline-start: ${"start"===c?"0":"var(--podium-cds-size-spacing-xs)"};
          svg {
            width: var(--podium-cds-size-icon-m);
            content: "";
            position: absolute;
            transform: translateY(5px);
          }
        }
      `})():null}
    ${(()=>{if("text"===o||"textUnderline"===o)return Le`
        padding: 0;
        color: ${s?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)"};
        background: transparent;
        text-align: start;
        border: 0;
        ${"small"===r&&"font: var(--podium-cds-typography-body3-strong);\n          "}

        ${"medium"===r&&"\n          font: var(--podium-cds-typography-body2-strong);\n          "}
        ${"large"===r&&"\n          font: var(--podium-cds-typography-body1-strong);\n        "}
        ${"responsive"===r&&`@media (min-width: ${parseInt("600",10)+1}px) {\n              font: var(--podium-cds-typography-body3-strong)\n            }\n        }`}
        &:active:not(:disabled) {
          color: ${s?"var(--podium-cds-color-text-secondary)":"var(--podium-cds-color-text-secondary-inverse)"};
        }
        &:focus:not(:disabled) {
          color: ${s?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)"};
        }
        @media (hover: hover) {
          &:hover:not(:disabled) {
            color: ${s?"var(--podium-cds-color-text-hover)":"var(--podium-cds-color-text-hover-inverse)"};
          }
        }
        &:disabled {
          color: ${s?"var(--podium-cds-color-text-disabled)":"var(--podium-cds-color-text-disabled-inverse)"};
          cursor: default;
        }
      `})()}
    ${(()=>{if("textUnderline"===o){const e={paddingEnd:"start"===c?"28px":"initial",marginEnd:"end"===c?"0":"auto",resetMargins:"start"===c?"0":"var(--podium-cds-size-spacing-xs)",svgTransform:"translateY(-2px)"},t={large:{...e},medium:{...e,svgTransform:"translateY(-4px)"},small:{...e},responsive:{...e}}[r??"medium"];return Le`
        /* border-bottom renders differently based on screen pixel density */
        @media screen and (min-resolution: 1dppx) {
          border-bottom: var(--podium-cds-size-border-width-m) solid
            ${s?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)"};
          box-shadow: inset 0 -1px 0 0
            ${s?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)"};
        }
        /* the border-bottom renders differently based on screen pixel density */
        @media screen and (min-resolution: 2dppx) {
          border-bottom: var(--podium-cds-size-border-width-m) solid
            ${s?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)"};
          box-shadow: inset 0 var(--podium-cds-button-box-shadow-width) 0 0
            ${s?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)"};
        }

        .btn-icon-wrapper {
          display: inline-flex;
          height: auto;
          margin-inline-end: ${t.marginEnd};
          margin-inline-start: ${t.resetMargins};
          margin-left: ${"start"===c?"initial":"4px"};
          padding-inline-end: ${t.paddingEnd};
          svg {
            content: "";
            position: absolute;
            left: ${"start"===c?"0":"initial"};
            right: 0;
            top: 0;
            transform: ${t.svgTransform};
          }
        }

        [dir="rtl"] & {
          .btn-icon-wrapper {
            margin-inline-end: ${t.marginEnd};
            margin-inline-start: ${t.resetMargins};
            padding-inline-end: ${t.paddingEnd};
            svg {
              right: ${"start"===c?"0":"initial"};
            }
          }
        }

        &:hover:not(:disabled),
        &:active:not(:disabled) {
          @media screen and (min-resolution: 1dppx) {
            border-bottom: var(--podium-cds-size-border-width-m) solid
              ${s?"var(--podium-cds-color-text-hover)":"var(--podium-cds-color-text-hover-inverse)"};
            box-shadow: inset 0 -1px 0 0
              ${s?"var(--podium-cds-color-text-hover)":"var(--podium-cds-color-text-hover-inverse)"};
          }
          @media screen and (min-resolution: 2dppx) {
            border-bottom: var(--podium-cds-size-border-width-m) solid
              ${s?"var(--podium-cds-color-text-hover)":"var(--podium-cds-color-text-hover-inverse)"};
            box-shadow: inset 0 var(--podium-cds-button-box-shadow-width) 0 0
              ${s?"var(--podium-cds-color-text-hover)":"var(--podium-cds-color-text-hover-inverse)"};
          }
        }
        &:disabled {
          @media screen and (min-resolution: 1dppx) {
            border-bottom: var(--podium-cds-size-border-width-m) solid
              ${s?"var(--podium-cds-button-color-border-secondary-disabled)":"var(--podium-cds-button-color-border-secondary-disabled-on-dark)"};
            box-shadow: inset 0 -1px 0 0
              ${s?"var(--podium-cds-button-color-border-secondary-disabled)":"var(--podium-cds-button-color-border-secondary-disabled-on-dark)"};
          }
          @media screen and (min-resolution: 2dppx) {
            border-bottom: var(--podium-cds-size-border-width-m) solid
              ${s?"var(--podium-cds-button-color-border-secondary-disabled)":"var(--podium-cds-button-color-border-secondary-disabled-on-dark)"};
            box-shadow: inset 0 var(--podium-cds-button-box-shadow-width) 0 0
              ${s?"var(--podium-cds-button-color-border-secondary-disabled)":"var(--podium-cds-button-color-border-secondary-disabled-on-dark)"};
          }
        }
        ${t}
      `}})()}
    ${a||"text"===o||"textUnderline"===o?null:Le`
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    > .ripple {
      display: block;
      position: absolute;
      ${"small"===r&&"width: var(--podium-cds-button-height-s);\n           height: var(--podium-cds-button-height-s);\n          "}
      ${"medium"===r&&"width: var(--podium-cds-button-height-m);\n         height: var(--podium-cds-button-height-m);\n        "}
      ${"large"===r&&"width: var(--podium-cds-button-height-l);\n         height: var(--podium-cds-button-height-l);\n        "}
      ${"responsive"===r&&`@media (min-width: ${jr.podiumCdsBreakpointM}) {\n          width: var(--podium-cds-button-height-s);\n          height: var(--podium-cds-button-height-s);\n        }\n        width: var(--podium-cds-button-height-l);\n        height: var(--podium-cds-button-height-l);\n        `}
      border-radius: var(--podium-cds-button-border-radius);
      top: 50%;
      left: 50%;
      background-color: rgba(255, 255, 255, 0.7);
      background-size: 100%;
      transform: translate3d(-50%, -50%, 0) scale(10);
      transform-origin: center center;
      opacity: 0;
      transition:
        transform 0.8s,
        opacity 1s;
      margin: 0;
    }
    &:active > .ripple {
      transform: translate3d(-50%, -50%, 0) scale(0);
      opacity: 0.5;
      transition: 0s;
    }
  `}
    ${(()=>{if("primary"===o||"secondary"===o||"tertiary"===o){const{backgroundStyle:e,color:t,borderColor:n,hoverFocusActiveBackground:r,hoverFocusActiveBorderColor:a,disabledBackground:c,disabledColor:s,disabledBorderColor:d}=l[i??"light"][o];return Le`
        background: ${e};
        color: ${t};
        border: none;
        border-radius: var(--podium-cds-button-border-radius);
        outline: none;
        // new border approach due to a bug introduced in safari 16
        // https://medium.com/@jeandesravines/use-border-radius-and-outline-simultaneously-on-safari-14ce92889e1f
        &::before {
          content: "";
          position: absolute;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
          border-radius: var(--podium-cds-button-border-radius);
          // only secondary has border,
          // browser's default css behavior doesn't apply styles if not explicitly defined,
          // so no specific logic needed for primary and tertiary buttons' border styles.
          ${"secondary"===o&&`\n              border: var(--podium-cds-button-border-width) solid ${n};\n          `}
        }
        ${"secondary"===o&&`\n          ${Yr}{\n          border: var(--podium-cds-button-border-width) solid;\n          border-color: ${n};\n          }\n        `}
        &:active:not(:disabled) {
          background: ${r};
          &::before {
            border-color: ${a};
          }
        }
        @media (hover: hover) {
          &:hover:not(:disabled) {
            background: ${r};
            &::before {
              border-color: ${a};
            }
          }
        }
        &:focus-visible {
          box-shadow: 0 0 0 2px var(--podium-cds-color-focus-ring);
        }
        &.focus-visible {
          box-shadow: 0 0 0 2px var(--podium-cds-color-focus-ring);
        }
        &:disabled {
          &::before {
            border-color: ${d};
          }
          background: ${c};
          color: ${s};
          cursor: default;
        }
      `}})()}
    ${n?.includes("nds-button--icon-only")&&Le`
    &.nds-button--icon-only {
      width: unset;
      min-height: unset;
      padding: ${"small"===r?"6px":"medium"===r?"12px":"18px"};
      ${("responsive"===r||"large"===r)&&"\n      svg {\n        width: 24px;\n        height: 24px;\n      }\n      "}
      @media (min-width: ${jr.podiumCdsBreakpointS}) {
        padding: ${"large"===r?"14px":"medium"===r?"12px":"6px"};
        svg {
          height: ${"large"===r?"24px":"auto"};
          width: ${"large"===r?"24px":"auto"};
        }
      }
      // -dark = ON LIGHT
      &.btn-primary-dark.disabled,
      &.btn-secondary-dark.disabled {
        background-color: var(--podium-cds-icon-button-color-bg-disabled);
        color: var(--podium-cds-color-text-disabled);
        &::before {
          border-color: var(--podium-cds-icon-button-color-bg-disabled);
        }
      }
      // -light = ON DARK
      &.btn-primary-light.disabled {
        background-color: var(--podium-cds-icon-button-color-bg-disabled-on-dark);
      }
      // -dark = ON LIGHT
      &.btn-secondary-dark {
        background-color: var(--podium-cds-icon-button-color-bg-secondary);
        &::before {
          border-color: var(--podium-cds-icon-button-color-bg-secondary);
        }
        &:hover:not(:disabled) {
          background-color: var(--podium-cds-icon-button-color-bg-secondary-hover);
          border-color: var(--podium-cds-icon-button-color-bg-secondary-hover);
          &::before {
            border-color: var(--podium-cds-icon-button-color-bg-secondary-hover);
          }
        }
        // should there be disabled here?
      }
      // -light = ON DARK
      &.btn-secondary-light {
        background-color: var(--podium-cds-icon-button-color-bg-secondary-on-dark);
        &::before {
          border-color: var(--podium-cds-icon-button-color-bg-secondary-on-dark);
        }
        &:hover:not(:disabled) {
          background-color: var(
            --podium-cds-icon-button-color-bg-secondary-hover-on-dark
          );
          &::before {
            border-color: var(--podium-cds-icon-button-color-bg-secondary-hover-on-dark);
          }
        }
        &.disabled {
          background-color: var(--podium-cds-icon-button-color-bg-disabled-on-dark);
          &::before {
            border-color: var(--podium-cds-icon-button-color-bg-disabled-on-dark);
          }
          color: var(--podium-cds-color-text-disabled-inverse);
        }
      }
    }
  `}
    &.inline-flx-btn {
      display: inline-flex;
    }
  `}),Li=({closeModal:e,shouldCloseOnBackgroundClick:r,shouldCloseOnEsc:o,className:i,children:a,backdropCompProps:c,...s})=>{const l=(0,t.useRef)(null);return(0,t.useEffect)(()=>{const t=t=>{"Escape"===t.key&&e&&o&&e(t)};return Rr()&&window.addEventListener("keydown",t),()=>{Rr()&&window.removeEventListener("keydown",t)}},[o]),n().createElement("div",{ref:l,className:i,onClick:t=>{t.target===l.current&&e&&r&&e(t)},"data-testid":"modal-backdrop",...c,...s},a)},Bi=Le`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // Use of percentages (rather than viewport units) solves mobile browser toolbar overlap
  height: 100%;
  width: 100%;
  background-color: var(--podium-cds-color-scrim-100);
  z-index: var(--podium-cds-elevation-100);

  .modal-enter &,
  .modal-appear & {
    opacity: 0;
  }
  .modal-enter-active &,
  .modal-appear-active & {
    opacity: 1;
    transition: opacity var(--podium-cds-transition-duration-normal);
  }
  .modal-exit & {
    opacity: 1;
  }
  .modal-exit-active & {
    opacity: 0;
    transition: opacity var(--podium-cds-transition-duration-normal);
  }
`,$i=Ur(Li)(Bi);function Fi(){if("undefined"==typeof navigator)return!1;const e=navigator.userAgent,t=e.includes("Safari")&&!e.includes("Chrome"),n=/iP(?:hone|od|ad)/.test(e),r=e.includes("OS 15_");return n&&t&&r}(function(){if("undefined"==typeof navigator)return!1;const e=navigator.userAgent;return e.includes("Macintosh")&&e.includes("Safari")&&!e.includes("Chrome")&&/Version\/(?:[0-9]+)\./.test(e)&&(()=>{const t=/Version\/(?<version>[0-9]+)\./.exec(e);return!!t&&parseInt(t[1],10)<=15})()})()&&document.documentElement.classList.add("mac-safari-15");const zi=({selector:e,children:n})=>(0,dn.createPortal)(n,(e=>{const n=(0,t.useRef)(null);return(0,t.useEffect)(()=>{const t=document.querySelector(e);return t||console.warn(`Could not find modal root "${e}".`),t&&t.appendChild(n.current),()=>{n.current.parentNode&&n.current.parentNode.removeChild(n.current)}},[]),n.current||(n.current=document.createElement("div")),n.current})(e)),Ui=(0,t.forwardRef)(({selector:e="#modal-root",isOpen:t=!1,trapFocus:r=!0,children:o,...i},a)=>{const c=r?n().createElement(Rn(),null,n().createElement("div",{"data-testid":"focus-trap-react"},o)):o;return"undefined"==typeof window?c:t?n().createElement(zi,{selector:e,...i},n().createElement("div",{ref:a,className:"modal-portal-content-wrapper"},c)):null});Ui.displayName="ModalPortal";const Gi=({components:e,className:t,...r})=>{const o=e?.ModalContainerComp??"section";return n().createElement(o,{className:t,...r})},Wi=(0,t.forwardRef)(({appearance:e="base","aria-labelledby":t,children:r,classes:o={},className:i,closeModal:a,isOpen:c,role:s="dialog",components:l={},shouldCloseOnBackgroundClick:d,shouldCloseOnEsc:u,backdropCompProps:p,modalRootCompProps:m,modalContainerCompProps:f,modalPortalCompProps:h,...g},b)=>{const y=Gn({wait:250}),v=l.BackdropComp??Li,x=l.ModalComp??Ui,w=l.ModalContainerComp??Gi,E=l.ModalRootComp??"div";return n().createElement(x,{className:o.modal,isOpen:c,ref:b,...h,...g},n().createElement(v,{className:o.backdrop,closeModal:a,shouldCloseOnBackgroundClick:d,shouldCloseOnEsc:u,...p},n().createElement(E,{className:Qe(i,o.root),role:s,"aria-labelledby":t,style:"fullscreen"===e?{height:y}:{},...m},n().createElement(Gi,{className:o.backdropContainer,appearance:e,components:{ModalContainerComp:w},...f},r))))});Wi.displayName="ModalBase";const Hi=({className:e,classes:t={},components:r,id:o,title:i,Icon:a,...c})=>{const s=r.IconWrapperComp||"span";return n().createElement("header",{className:e,...c},a&&n().createElement(s,{className:Qe("icon-wrapper",t.iconWrapper),"data-testid":"modal-icon"},n().createElement(a,{className:t.icon})),"string"==typeof i?n().createElement(Wr,{className:Qe("title-heading",t.title),id:o,appearance:"title1","data-testid":"modal-header-title"},i):i)};function Yi(e){return Yi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yi(e)}var Vi=["aria-hidden","className","fill","height","paths","role","title","size","viewBox","width"];function Ki(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}var Xi="24px",qi="48px",Qi={s:"0 0 ".concat(parseInt(Xi)," ").concat(parseInt(Xi)),m:"0 0 ".concat(parseInt(Xi)," ").concat(parseInt(Xi)),l:"0 0 ".concat(parseInt(qi)," ").concat(parseInt(qi))},Zi={s:Xi,m:Xi,l:qi,container:"container"},Ji=function(e){var t,r=e["aria-hidden"],o=e.className,i=e.fill,a=e.height,c=e.paths,s=e.role,l=void 0===s?"img":s,d=e.title,u=e.size,p=void 0===u?"m":u,m=e.viewBox,f=e.width,h=function(e,t){if(null==e)return{};var n,r,o,i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols)for(n=Object.getOwnPropertySymbols(e),o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r]);return i}(e,Vi);if("container"!==p&&!c[p])return null;var g=r;(function(e){return!e&&!d})(r)&&(g=!0);var b=m||Qi[p]||Qi.m;return n().createElement("svg",function(e){var t,n;for(t=1;t<arguments.length;t++)n=null!=arguments[t]?arguments[t]:{},t%2?Ki(Object(n),!0).forEach(function(t){var r,o,i;r=e,o=t,i=n[t],o=function(e){var t=function(e){if("object"!=Yi(e)||!e)return e;var t,n=e[Symbol.toPrimitive];if(void 0!==n){if("object"!=Yi(t=n.call(e,"string")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Yi(t)?t:String(t)}(o),o in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ki(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))});return e}({"aria-hidden":g?"true":"false",className:o,focusable:"false",viewBox:b,role:l,width:function(){if("container"!==p)return f||Zi[p]}(),height:function(){if("container"!==p)return a||Zi[p]}(),fill:i},h),null!==(t=c[p])&&void 0!==t?t:c.m,d&&n().createElement("title",null,d))};function ea(e){return ea="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ea(e)}function ta(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function na(e){var t,n;for(t=1;t<arguments.length;t++)n=null!=arguments[t]?arguments[t]:{},t%2?ta(Object(n),!0).forEach(function(t){var r,o,i;r=e,o=t,i=n[t],o=function(e){var t=function(e){if("object"!=ea(e)||!e)return e;var t,n=e[Symbol.toPrimitive];if(void 0!==n){if("object"!=ea(t=n.call(e,"string")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==ea(t)?t:String(t)}(o),o in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ta(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))});return e}var ra={s:n().createElement(n().Fragment,null,n().createElement("path",{stroke:"currentColor",strokeWidth:"1.5",d:"m17.5 6.5-11 11m0-11 11 11"})),m:n().createElement(n().Fragment,null,n().createElement("path",{stroke:"currentColor",strokeWidth:"1.5",d:"M18.973 5.027 5.028 18.972m0-13.945 13.944 13.945"})),l:n().createElement(n().Fragment,null,n().createElement("path",{stroke:"currentColor",strokeWidth:"3",d:"m37.945 10.055-27.89 27.89m0-27.89 27.89 27.89"}))},oa=n().memo(function(e){return n().createElement(Ji,na(na({},e),{},{paths:ra,fill:"none"}))});const ia=({modalCloseAriaLabel:e="Close Modal",onClick:t,className:r,modalCloseButtonCompProps:o,...i})=>n().createElement("button",{className:Qe(r,"modal-ui-close"),"aria-label":e,onClick:t,type:"button",...o,...i},n().createElement(oa,{"aria-hidden":!0})),aa=(0,t.forwardRef)(({appearance:e="base","aria-labelledby":r,transitionDuration:o="250",children:i,classes:a={},className:c,components:s={},slots:l={},closeModal:d,modalCloseAriaLabel:u,isOpen:p,role:m="dialog",shouldCloseOnBackgroundClick:f=!0,shouldCloseOnEsc:h=!0,title:g,titleId:b,backdropCompProps:y,modalRootCompProps:v,modalCloseButtonCompProps:x,modalContainerCompProps:w,modalHeaderCompProps:E,modalContentCompProps:C,modalMainCompProps:O,Icon:k,modalPortalCompProps:S,...A},N)=>{const _=b??g.toLowerCase().replace(/\W/g,"-"),P=(0,t.useRef)();var R;R=p??!1,(0,t.useEffect)(()=>{if(!R||"undefined"==typeof window)return;const e=window.scrollY||window.pageYOffset,t=document.body,n={overflow:t.style.overflow,position:t.style.position,top:t.style.top,left:t.style.left,right:t.style.right};return Fi()?document.body.style.overflow="hidden":(t.style.position="fixed",t.style.top=`-${e}px`,t.style.left="0",t.style.right="0",t.style.overflow="hidden"),()=>{t.style.overflow=n.overflow,t.style.position=n.position,t.style.top=n.top,t.style.left=n.left,t.style.right=n.right,Fi()||window.scrollTo(0,e)}},[R]);const T=l.HeaderTitleSlot,j=l.FooterSlot,I=s.ModalContainerComp??Gi,D=s.ModalContentComp??"div",M=s.ModalMainComp??"div",L=s.IconWrapperComp,B=s.ModalRootComp,$=s.ModalCloseButtonComp??ia,F=s.ModalHeaderComp??Hi,z=s.ModalBaseComp??Wi,U=s.BackdropComp,G=s.ModalComp;(0,t.useEffect)(()=>{Rr()&&p&&(P.current=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)},[p]),(0,t.useEffect)(()=>{if(!Rr())return;const t=document.querySelector("body");return p&&(setTimeout(()=>{t.classList.add("nds-no-scroll")},parseFloat(o)),"fullscreen"===e&&(setTimeout(()=>{window.scrollTo(0,0),t.classList.add("nds-no-scroll")},parseFloat(o)),t.classList.add("nds-override-urlbar"))),()=>{t.classList.remove("nds-no-scroll","nds-override-urlbar"),p&&P.current&&(window.scrollTo(0,P.current),P.current=null)}},[e,p,o]);const W=()=>j?n().createElement(n().Fragment,null,j):null;return n().createElement(n().Fragment,null,n().createElement(ze,{styles:Le`
            scrollbar-gutter: stable;
            .nds-no-scroll {
              overflow: hidden;
            }
            .nds-override-urlbar {
              position: fixed;
              overflow-y: scroll;
              height: 100vh;
              -webkit-overflow-scrolling: touch;
            }
          `}),n().createElement(On,{appear:p,in:p,timeout:parseFloat(o),classNames:"modal",mountOnEnter:!0,unmountOnExit:!0},n().createElement(z,{className:Qe(c,e,a.base),appearance:e,isOpen:!0,role:m,"aria-labelledby":r??`modal-${_}`,classes:{backdrop:a.backdrop,backdropContainer:a.backdropContainer,modal:a.modal,root:a.root},components:{ModalContainerComp:I,ModalRootComp:B,ModalComp:G,BackdropComp:U},closeModal:d,shouldCloseOnBackgroundClick:f,shouldCloseOnEsc:h,modalPortalCompProps:S,backdropCompProps:y,modalRootCompProps:v,modalContainerCompProps:w,ref:N,...A},"function"==typeof d&&"fullscreen"===e&&n().createElement("div",{className:"close-btn-container fullscreen-btn"},n().createElement($,{modalappearance:e,className:a.closeButton,modalCloseAriaLabel:u,onClick:d,"data-testid":"modal-close-button",modalCloseButtonCompProps:x})),n().createElement(M,{className:a.main,appearance:e,...O},"function"==typeof d&&"fullscreen"!==e&&n().createElement("div",{className:"close-btn-container"},n().createElement($,{modalappearance:e,className:a.closeButton,modalCloseAriaLabel:u,onClick:d,"data-testid":"modal-close-button",modalCloseButtonCompProps:x})),n().createElement("div",{className:"modal-header-container"},n().createElement(F,{components:{IconWrapperComp:L},className:a.header,classes:{icon:a.icon,iconWrapper:a.iconWrapper,title:Qe(a.title)},id:`modal-${_}`,title:T??g,Icon:k,...E})),n().createElement(D,{className:a.content,...C},i,"fullscreen"===e&&W())),"fullscreen"!==e&&W())))});aa.displayName="Modal";const ca=Ur(e=>n().createElement(Gi,{...e}))(({appearance:e})=>Le`
    ${Le`
    width: 100%;
    max-height: 100vh;
    height: 100%;
    padding: 40px var(--podium-cds-size-spacing-l) var(--podium-cds-size-spacing-l)
      var(--podium-cds-size-spacing-l);
    overflow-x: hidden; // needed to prevent horizontal scroll in safari
    overflow-y: auto; // needed for Custom Buttons modal scroll
    -webkit-overflow-scrolling: touch;
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    @media (min-width: ${jr.podiumCdsBreakpointM}) {
      height: 100%;
      padding: 48px;
    }
  `};
    ${(()=>{if("fullscreen"!==e)return Le`
        -webkit-overflow-scrolling: touch;
        max-height: calc(100vh - 60px);
        @media (hover: none) and (pointer: coarse) {
          // iOS v15 (Safari + Chrome)
          @supports not (height: 100dvh) {
            max-height: calc(100vh - 140px);
          }
          // iOS v16+ (Safari + Chrome)
          @supports (height: 100dvh) {
            max-height: calc(100vh - 150px);
          }
        }
        @media (min-width: ${jr.podiumCdsBreakpointM}) {
          max-height: calc(100vh - 120px);
        }
        display: flex;
        flex-direction: column;
        &:before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 36px;
          z-index: 1;
        }
      `})()};
    ${(()=>{if("fullscreen"===e)return Le`
        padding: 0 var(--podium-cds-size-spacing-xs) 0 var(--podium-cds-size-spacing-l);
        height: 100dvh;
        @media (min-width: ${jr.podiumCdsBreakpointM}) {
          padding: 0 28px 0 48px;
        }
        .mac-safari-15 & {
          padding: 40px 4px 24px 24px;
          @media (min-width: ${jr.podiumCdsBreakpointM}) {
            padding: 48px 24px 0 48px;
          }
        }
        // RTL styles for scrollbar spacing
        [dir="rtl"] & {
          padding: 0 var(--podium-cds-size-spacing-l) 48px 0;
          @media (min-width: ${jr.podiumCdsBreakpointM}) {
            height: 100%;
            padding: 0 48px 48px 28px;
          }
          .mac-safari-15 & {
            padding: 48px 24px 24px 0px;
            @media (min-width: ${jr.podiumCdsBreakpointM}) {
              padding: 48px 48px 0px 28px;
            }
          }
        }
      `})()};
  `),sa={BackdropComp:$i,ModalontainerComp:ca},la=(0,t.forwardRef)(({components:e,...t},r)=>n().createElement(Wi,{components:{...sa,...e},...t,ref:r}));la.displayName="ModalBaseStyledComps";const da=Ur(la)(({appearance:e})=>Le`
    ${Le`
    position: absolute;
    left: 0;
    width: 100%;
    background: var(--podium-cds-color-bg-primary);
    bottom: 0;
    transform: translate3d(0, 0, 0);
    overflow: hidden;
    @media (min-width: ${jr.podiumCdsBreakpointM}) {
      bottom: auto;
      top: 50%;
      left: 50%;
      height: auto;
      transform: translate3d(-50%, -50%, 0);
    }
  `};
    ${"baseMedium"===e?Le`
        border-radius: var(--podium-cds-size-border-radius-xl)
          var(--podium-cds-size-border-radius-xl) 0 0;
        @media (min-width: ${jr.podiumCdsBreakpointM}) {
          border-radius: var(--podium-cds-size-border-radius-xl);
          max-width: 762px;
        }
      `:"fullscreen"!==e?Le`
        border-radius: var(--podium-cds-size-border-radius-xl)
          var(--podium-cds-size-border-radius-xl) 0 0;
        @media (min-width: ${jr.podiumCdsBreakpointM}) {
          border-radius: var(--podium-cds-size-border-radius-xl);
          max-width: 536px;
        }
      `:"fullscreen"===e?Le`
        ${Vr} {
          .modal-header-container {
            padding-top: 40px;
            [dir='rtl'] & {
              padding-top: 0;
            }
          }
        }
      }
    `:void 0};
    ${Le`
    /* CSSTransition: Small Screens */
    .modal-enter &,
    .modal-appear & {
      transform: translate3d(0, 100%, 0);
    }
    .modal-enter-active &,
    .modal-appear-active & {
      transform: translate3d(0, 0, 0);
      transition: transform var(--podium-cds-transition-duration-normal)
        var(--podium-cds-transition-timing-function-ease);
    }
    .modal-exit & {
      transform: translate3d(0, 0, 0);
    }
    .modal-exit-active & {
      transform: translate3d(0, 100%, 0);
      transition: transform var(--podium-cds-transition-duration-normal)
        var(--podium-cds-transition-timing-function-ease);
    }
    /* On Large Screens */
    @media (min-width: ${jr.podiumCdsBreakpointM}) {
      .modal-enter &,
      .modal-appear & {
        transform: translate3d(-50%, -45%, 0);
      }
      .modal-enter-active &,
      .modal-appear-active & {
        transform: translate3d(-50%, -50%, 0);
        transition: transform var(--podium-cds-transition-duration-normal)
          var(--podium-cds-transition-timing-function-ease);
      }
      .modal-exit & {
        transform: translate3d(-50%, -50%, 0);
      }
      .modal-exit-active & {
        transform: translate3d(-50%, -45%, 0);
        transition: transform var(--podium-cds-transition-duration-normal)
          var(--podium-cds-transition-timing-function-ease);
      }
    }
  `};
  `),ua=Le`
  width: 100%;
  padding-bottom: calc(
    var(--podium-cds-size-spacing-l) + var(--podium-cds-size-spacing-xs)
  );
  padding-top: var(--podium-cds-size-spacing-xs);
  font: var(--podium-cds-typography-320-to-1919-title3);

  @media (min-width: ${jr.podiumCdsBreakpointXl}) {
    * {
      font: var(--podium-cds-typography-1920-plus-title3);
    }
  }

  .icon-wrapper {
    font-size: var(--podium-cds-typography-body-2-size);
  }
`,pa=Ur(e=>n().createElement(Hi,{...e}))(ua),ma=Le`
  font: var(--podium-cds-typography-body1);
  width: 100%;
  @media (max-width: ${jr.podiumCdsBreakpointM}) {
    padding-bottom: var(--podium-cds-size-spacing-s);
  }
`,fa=Ur("div")`
  ${ma}
`,ha=Ur.div(({appearance:e})=>Le`
  // Scrollbar styles
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: ${jr.podiumCdsBreakpointM}) {
    max-height: ${"fullscreen"===e?null:"100vh"};
  }
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }

  // default LTR styles for scrollbar spacing
  padding-inline-end: 20px;
  margin-right: -20px;
  margin-left: 0px;

  // RTL styles for scrollbar spacing
  [dir="rtl"] & {
    margin-right: 0px;
    margin-left: -20px;
    padding-inline-end: 20px;
  }

  .fullscreen & {
    [dir="rtl"] & {
      padding-inline-end: var(--podium-cds-size-spacing-l);
      @media (min-width: ${jr.podiumCdsBreakpointM}) {
        padding-inline-end: 20px;
      }
    }
  }

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */

  ${"fullscreen"===e&&Le`
    overflow-y: auto;
    max-height: 100%;
    width: 100%;
  `}
`),ga=(0,t.forwardRef)(({appearance:e,...t},r)=>n().createElement(ha,{ref:r,appearance:e,...t}));ga.displayName="ModalMainStyled";const ba=(0,t.forwardRef)(({appearance:e="primary",background:t="light",classes:r={button:"btn",buttonLarge:"btn-lg",buttonMedium:"btn-md",buttonSmall:"",buttonResponsive:"btn-responsive"},className:o,Component:i="button",disableRipple:a=!1,Icon:c,size:s="medium",type:l="button",...d},u)=>{const p=Qe("nds-button--icon-only",o);return n().createElement(Mi,{appearance:e,background:t,className:p,classes:r,Component:i,disableRipple:a,size:s,type:l,...d,ref:u},c)});ba.displayName="IconButton";const ya={ModalContentComp:fa,ModalMainComp:ga,ModalContainerComp:ca,ModalCloseButtonComp:({modalCloseAriaLabel:e="Close Modal",onClick:t,className:r,modalCloseButtonCompProps:o,...i})=>n().createElement(ba,{className:Qe("modal-ui-close",r),ariaLabel:e,appearance:"secondary",size:"small",onClick:t,type:"button",Icon:n().createElement(oa,{"aria-hidden":!0}),...o,...i}),ModalHeaderComp:pa,ModalBaseComp:da,BackdropComp:$i},va=(0,t.forwardRef)(({components:e,...t},r)=>n().createElement(aa,{components:{...ya,...e},...t,ref:r}));va.displayName="ModalStyledComps";const xa=Ur(va)`
  .close-btn-container {
    position: sticky;
    top: var(--podium-cds-size-spacing-xs);
    right: 1px;
    z-index: var(--podium-cds-elevation-100);
    float: right;
    @media (max-width: ${jr.podiumCdsBreakpointM}) {
      top: 0;
    }
    [dir="rtl"] & {
      float: left;
    }
    ${Vr} {
      position: absolute;
      top: 52px;
      right: 64px;
      @media (max-width: ${jr.podiumCdsBreakpointM}) {
        top: 44px;
        right: 28px;
        margin: 0;
      }
      [dir="rtl"] & {
        position: relative;
        right: 0;
        top: 0;
      }
    }
    ${Yr} {
      float: none;
      ${"@media (pointer: fine)"} {
        /*accounts for safari's focus indicator*/
        right: var(--podium-cds-size-spacing-s);
        top: var(--podium-cds-size-spacing-s);
        button {
          position: absolute;
          right: var(--podium-cds-size-spacing-s);
          top: 0px;
        }
      }
    }
    &.fullscreen-btn {
      top: 38px;
      padding-right: 20px;
      @media (max-width: ${jr.podiumCdsBreakpointM}) {
        padding-right: 20px;
      }
      ${Vr} {
        padding-right: 0px;
        [dir="rtl"] & {
          float: left;
          position: relative;
          right: 0;
        }
      }
      // RTL styles close button positioning
      [dir="rtl"] & {
        padding-right: 0;
        padding-left: 20px;
        @media (max-width: ${jr.podiumCdsBreakpointM}) {
          padding-left: 24px;
        }
      }
    }
    [dir="rtl"] & {
      .mac-safari-15 & {
        &.fullscreen-btn {
          left: 48px;
          right: 0px;
          @media (max-width: ${jr.podiumCdsBreakpointM}) {
            left: 24px;
            right: 0px;
          }
        }
      }
    }
    .mac-safari-15 & {
      &.fullscreen-btn {
        top: 0px;
        button {
          right: 20px;
        }
      }
    }
  }
  .modal-header-container {
    display: inline-block;
    width: 80%;
  }
`;xa.displayName="ModalStyled";const wa=Ci(xa)`
  bottom: auto;
  border-radius: var(--podium-cds-size-border-radius-xl) var(--podium-cds-size-border-radius-xl)
    var(--podium-cds-size-border-radius-xl) var(--podium-cds-size-border-radius-xl);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* Mobile: Bottom sheet with portrait aspect ratio */
  @media (max-width: 600px) {
    width: 100vw;
    aspect-ratio: 2 / 3;
    height: auto; /* Let aspect-ratio control height */
    max-height: 100vh;
    min-height: auto;
    bottom: 0;
    -webkit-transform: 0;
    -ms-transform: 0;
    transform: 0;
    border-radius: var(--podium-cds-size-border-radius-xl) var(--podium-cds-size-border-radius-xl) 0 0;
  }

  /* Tablet: Centered modal with landscape aspect ratio */
  @media (min-width: 601px) {
    width: 1040px;
    height: 585px;
    aspect-ratio: 16 / 9;
    max-width: calc(100vw - 40px);
    max-height: calc(100vh - 40px);
    top: 50%;
    left: 50%;
    height: auto; /* Override explicit height - let aspect-ratio control */
    -webkit-transform: translate3d(-50%, -50%, 0);
    -ms-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
  }

  /* Desktop: Full-size centered modal */
  @media (min-width: 960px) {
    width: 1040px;
    aspect-ratio: 16 / 9;
    max-width: calc(100vw - 40px);
    max-height: calc(100vh - 40px);
    height: auto; /* Critical: keeps 16:9 ratio when max-width constrains width */
  }

  /**
   * Modal section - Contains the gradient overlay and content
   * Inherits dimensions from parent and applies the dark gradient for text readability
   */
  & > section {
    width: inherit;
    height: inherit;
    display: block;
    aspect-ratio: 16 / 9;
    padding: 20px;
    /* Gradient overlay: transparent top -> dark bottom for text contrast */
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 33.6%, rgba(0, 0, 0, 0.35) 64.29%, rgba(0, 0, 0, 0.65) 100%);

    @media (max-width: 600px) {
      width: 100vw;
      aspect-ratio: 2 / 3;
    }
    @media (min-width: 601px) {
      width: 1040px;
      aspect-ratio: 16 / 9;
      max-width: calc(100vw - 40px);
      max-height: calc(100vh - 40px);
    }
    @media (min-width: 960px) {
      width: 1040px;
      aspect-ratio: 16 / 9;
      max-width: calc(100vw - 40px);
      max-height: calc(100vh - 40px);
      height: auto; /* Match parent's aspect-ratio behavior */
    }
  }

  & > section > div {
    overflow: hidden;
    flex: 1;
    @media (max-width: 600px) {
      width: 100vw;
      aspect-ratio: 2 / 3;
    }
  }

  & .close-btn-container {
  }

  & .modal-content {
    flex: 1;
  }
`,Ea=Ci(fa)`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;

  @media (max-width: 600px) {
    width: calc(100vw - 40px);
    aspect-ratio: 2 / 3;
    height: auto;
    align-items: end;
    position: absolute;
    bottom: 0px;
    padding-bottom: 48px;
  }

  /**
   * Background image positioning
   * Uses absolute/fixed positioning to sit behind content (z-index: -1)
   * IMPORTANT: Use height: auto with aspect-ratio to prevent image distortion
   */
  & > .center-pop-up-background-image > img {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;

    /* Mobile: Fixed position for full viewport coverage */
    @media (max-width: 600px) {
      width: 100vw;
      aspect-ratio: 2 / 3;
      position: fixed;
      height: auto;
      max-height: 100vh;
    }

    /* Tablet: Constrained to modal bounds */
    @media (min-width: 601px) {
      width: 1040px;
      height: 585px;
      aspect-ratio: 16 / 9;
      max-width: calc(100vw - 40px);
      max-height: calc(100vh - 40px);
      height: auto; /* Let aspect-ratio control height */
    }

    /* Desktop: Full-size with aspect-ratio control */
    @media (min-width: 960px) {
      width: 1040px;
      aspect-ratio: 16 / 9;
      max-width: calc(100vw - 40px);
      max-height: calc(100vh - 40px);
      height: auto; /* Critical: maintains 16:9 when constrained */
    }
  }

  /**
   * Text container - Positioned at bottom of modal
   * Contains: timer, title, subtitle, and action buttons
   */
  & > .center-pop-up-modal-text-container {
    position: absolute;
    bottom: 40px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 40px 0px;
  }

  /* Title text - white, uppercase, responsive width */
  & .center-pop-up-modal-title {
    color: var(--podium-cds-color-white);
    line-height: 91%;
    width: 300px;
    @media (min-width: 960px) {
      width: 441px;
    }
    white-space: pre-wrap;
  }

  /* Subtitle text - white, below title */
  & .center-pop-up-modal-subtitle {
    color: var(--podium-cds-color-white);
    line-height: 150%;
    padding-top: 12px;
    @media (min-width: 601px) {
      padding-top: 8px;
    }
    white-space: pre-wrap;
  }

  /* Action buttons container (CTA buttons) */
  & .center-pop-up-modal-actions {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    padding-top: 16px;
    gap: 10px;
  }

  & .center-pop-up-modal-actions > button {
    line-height: 14px;
  }

  /**
   * Mobile-specific container
   * Used when rendering the mobile view variant with different layout
   */
  & .center-pop-up-modal-mobile-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 40px;
  }

  & .center-pop-up-modal-mobile-container > .modal-content {
    width: 375px;
    height: 585px;
    max-width: calc(100vw - 40px);
    max-height: calc(100vh - 40px);
    aspect-ratio: 16 / 9;
    & > div {
      position: static;
    }
  }

  & .center-pop-up-modal-mobile-container > .center-pop-up-modal-text-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  & .center-pop-up-modal-mobile-container > .center-pop-up-modal-actions > button {
    line-height: 14px;
  }
`,Ca=e=>{if("none"===e)return 0;if("string"!=typeof e)return e;const t=`var(--podium-cds-size-spacing-${e.toLowerCase()})`;return["xs","s","m","l","xl","xxl","xxxl","xxxxl"].includes(e)?t:e},Oa={primary:"var(--podium-cds-color-bg-primary)",alwaysDark:"var(--podium-cds-color-bg-always-dark)",alwaysLight:"var(--podium-cds-color-bg-always-light)",grey500:"var(--podium-cds-color-grey-500)",grey300:"var(--podium-cds-color-grey-300)",grey200:"var(--podium-cds-color-grey-200)",grey100:"var(--podium-cds-color-grey-100)",grey50:"var(--podium-cds-color-grey-50)",white:"var(--podium-cds-color-white)",critical:"var(--podium-cds-color-bg-critical)",success:"var(--podium-cds-color-bg-success)"},ka=(0,t.forwardRef)(({components:e={},className:t,backgroundColor:r,borderRadius:o,minHeight:i,maxHeight:a,height:c,overflow:s,padding:l,paddingBlockStart:d,paddingBlockEnd:u,paddingInlineStart:p,paddingInlineEnd:m,minWidth:f,maxWidth:h,width:g,...b},y)=>{const v=e.BoxComp??"div",x=Qe("nds-box",t);return n().createElement(v,{className:x,ref:y,...b})});ka.displayName="BoxBase";const Sa=Ur(ka)`
  ${({backgroundColor:e="",borderRadius:t="",minHeight:n,maxHeight:r,height:o,overflow:i,padding:a,paddingBlockStart:c,paddingBlockEnd:s,paddingInlineStart:l,paddingInlineEnd:d,minWidth:u,maxWidth:p,width:m})=>{const f={backgroundColor:(h=e,Oa[h]||h),borderRadius:t?`var(--podium-cds-size-border-radius-${t.toLowerCase()})`:null,minHeight:n,maxHeight:r,height:o,overflow:i,padding:a?Ca(a):null,paddingBlockStart:c?Ca(c):null,paddingBlockEnd:s?Ca(s):null,paddingInlineStart:l?Ca(l):null,paddingInlineEnd:d?Ca(d):null,minWidth:u,maxWidth:p,width:m};var h;return Le`
    ${f};
  `}}
`,Aa=(0,t.forwardRef)(({aspectRatio:e="1/1",backgroundColor:t="transparent",objectFit:r="cover",width:o="auto",components:i={},className:a,...c},s)=>{const l=i.AspectRatioBoxComp??"div",d=Qe("nds-aspect-ratio-box",a);return n().createElement(l,{className:d,ref:s,...c})});Aa.displayName="AspectBox";const Na=Ur(Aa)`
  ${({aspectRatio:e,backgroundColor:t,objectFit:n,width:r})=>Le`
  background-color: ${t};
  position: relative;
  width: ${r};

  &::before {
    content: "";
    width: 1px;
    margin-left: 1px;
    float: left;
    height: 0;
    padding-top: calc(
      100% * (1 / (${e}))
    ); /* parens are important here: 1 / 4 / 5 !== 1 / (4 / 5) */
  }

  &::after {
    content: "";
    display: table;
    clear: both;
  }

  > video,
  img,
  iframe,
  embed,
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    object-fit: ${n};
  }
`}
`,_a=Ge`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.25;
  }

  100% {
    opacity: 1
  }
`,Pa={s:"var(--podium-cds-size-border-radius-s)",m:"var(--podium-cds-size-border-radius-m)",l:"var(--podium-cds-size-border-radius-l)",xl:"var(--podium-cds-size-border-radius-xl)"},Ra=Ur((0,t.forwardRef)(({borderRadius:e="s",components:t={},height:r,width:o,className:i,children:a,hasBackgroundColor:c=!1,...s},l)=>{const d=t.SkeletonComp??"div",u=Qe("nds-skeleton",i,{[`border-radius-${e}`]:!0});return n().createElement(d,{className:u,...s,ref:l},a)}))`
  ${({borderRadius:e,height:t,width:n,children:r,hasBackgroundColor:o})=>r&&!o?Le`
      animation: ${_a} 2.5s ease-in-out infinite;
    `:Le`
    animation: ${_a} 2.5s ease-in-out infinite;
    background: var(--podium-cds-color-grey-300);
    border: var(--podium-cds-size-border-width-s) solid var(--podium-cds-color-grey-300);
    overflow: hidden;
    width: ${n};
    height: ${t};
    box-sizing: border-box;
    transition: background var(--podium-cds-motion-easing-functional);

    ${"circle"===e?"border-radius: 50%;":`border-radius: ${Pa[e]||0};`}

    &.finished-loading {
      animation: unset;
      border: none;
      background: transparent;
    }
  `}
`,Ta={s:"var(--podium-cds-size-border-radius-s)",m:"var(--podium-cds-size-border-radius-m)",l:"var(--podium-cds-size-border-radius-l)",xl:"var(--podium-cds-size-border-radius-xl)"},ja=Ur("div")`
  ${({borderRadius:e,objectPosition:t})=>Le`
  & img {
    ${"circle"===e?"border-radius: 50%;":`border-radius: ${Ta[e]||0};`}
    object-position: ${t};
    --podium-cds-image-transition-duration: 1000ms;
    &.should-transition {
      transition: opacity var(--podium-cds-image-transition-duration)
        var(--podium-cds-motion-easing-functional);
    }
  }
`}
`,Ia=(0,t.forwardRef)(({aspectRatio:e="1/1",objectFit:r,objectPosition:o,borderRadius:i="s",classes:a={},image:c,onImageLoad:s,sources:l,aspectRatioBoxProps:d,withSkeletonLoader:u=!0,skeletonProps:p,width:m="auto",imageOpacityShouldTransition:f=!0,...h},g)=>{const b=(0,t.useRef)(null),[y,v]=(0,t.useState)(!1),x=Qe("nds-image-wrapper",a.Root),w=Qe("image-img",f&&"should-transition",a.Image),{onLoad:E,...C}=h;(0,t.useEffect)(()=>{b.current?.complete&&v(!0)},[]);const O=()=>{"function"==typeof s&&s(),v(!0)};return n().createElement(n().Fragment,null,n().createElement(ja,{borderRadius:i,className:x,objectPosition:o,ref:g},u?n().createElement(Ra,{borderRadius:i,"data-testid":"image-skeleton",height:"100%",width:"100%",hasBackgroundColor:!0,className:Qe("nds-image-skeleton",y&&"finished-loading",!u&&"no-skeleton"),...p},n().createElement(Na,{aspectRatio:e,objectFit:r,width:m,...d},n().createElement("picture",null,Array.isArray(l)&&l.map(({media:e,srcset:t,type:r},o)=>{let i=[e,t,r].filter(e=>e).join("-");return i===t&&(i+=`-${o}`),n().createElement("source",{key:i,media:e,srcSet:t,type:r})}),c.src&&n().createElement("img",{alt:c.alt,className:w,"data-testid":"image-img",onLoad:O,src:c.src,style:{opacity:y?1:0},ref:b,...C})))):n().createElement(Na,{aspectRatio:e,objectFit:r,width:m,...d},n().createElement("picture",null,Array.isArray(l)&&l.map(({media:e,srcset:t,type:r},o)=>{let i=[e,t,r].filter(e=>e).join("-");return i===t&&(i+=`-${o}`),n().createElement("source",{key:i,media:e,srcSet:t,type:r})}),c.src&&n().createElement("img",{alt:c.alt,className:w,"data-testid":"image-img",onLoad:O,src:c.src,style:{opacity:y?1:0},ref:b,...C})))))});Ia.displayName="Image";const Da=Ci(xa)`
  & > section {
    max-height: 100vh !important;
    min-height: auto !important;
  }
`,Ma=Ci(da)`
  ${({isMobile:e})=>!e&&"\n      max-width: unset !important;\n      height: 464px !important;\n      min-height: 464px !important;\n      width: 800px !important;\n  "}

  & section {
    padding: 0px;
    & > div > .modal-header-container {
      display: none;
    }

    & > div {
      overflow: auto;
      flex: 1;
    }
  }

  & .close-btn-container {
    padding: 24px;
    top: 0 !important;
    right: 0 !important;
    position: absolute !important;
  }
`,La=Ci(fa)`
  height: 100%;
  display: flex;
  flex-direction: ${({isMobile:e})=>e?"column":"row"};
  align-items: center;
  justify-content: space-evenly;
  padding-top: 0px;
  gap: ${({isMobile:e})=>e?"10px":"48px"};

  & > .split-layout-modal-text-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    text-align: start;
  }

  & .split-layout-modal-logo {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .split-layout-modal-logo > img {
    width: 33px;
    height: 11px;
  }

  & .split-layout-modal-title {
    text-transform: uppercase;
    margin-bottom: 8px;
    white-space: pre;
    text-wrap: auto;
    @media (min-width: 1920px) {
      font-size: 3rem;
    }
  }

  & .split-layout-modal-subtitle {
    margin: 0 0 1.5rem 0;
    white-space: pre;
  }

  & .split-layout-modal-actions {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: start;
    margin-bottom: 8px;
    gap: 5px;
  }
  & .split-layout-modal-actions > button {
    white-space: nowrap;
  }

  ${({isMobile:e})=>e&&"\n      & > .split-layout-modal-text-container {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start;\n      text-align: start;\n      padding: 0 1rem;\n      gap: 5px;\n      bottom: 48px;\n      width: 100vw;\n      padding: 0 2.5rem 1rem 2.5rem;\n    }\n\n    & .split-layout-modal-actions {\n      flex-direction: row;\n      align-items: flex-start;\n      justify-content: flex-start;\n      gap: 5px;\n    }\n\n    & > .split-layout-modal-text-container > .split-layout-modal-logo {\n      width: 260px;\n      height: 40px;\n      display: flex;\n      align-items: center;\n      justify-content: start;\n    }\n\n    & .split-layout-modal-subtitle {\n      padding: 0;\n      margin-bottom: 1.5rem;\n    }\n    & .split-layout-text-container-centered {\n      padding: 0 40px;\n      @media (min-width: 364px) {\n        padding: 0 62px;\n      }\n      @media (min-width: 427px) {\n        padding: 0 80px;\n      }\n    }\n    & > .split-layout-text-container-centered .swoosh {\n      align-self: center;\n    }\n\n    & .split-layout-text-container-centered .split-layout-modal-title {\n      text-align: center;\n    }\n    & .split-layout-text-container-centered .split-layout-modal-subtitle {\n      text-align: center;\n    }\n    & .split-layout-text-container-centered .split-layout-modal-actions {\n      justify-content: center;\n    }\n    & .split-layout-text-container-centered .split-layout-modal-actions > button {\n      white-space: nowrap;\n    }\n  "}
`;function Ba(e){return Ba="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ba(e)}function $a(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function Fa(e){var t,n;for(t=1;t<arguments.length;t++)n=null!=arguments[t]?arguments[t]:{},t%2?$a(Object(n),!0).forEach(function(t){var r,o,i;r=e,o=t,i=n[t],o=function(e){var t=function(e){if("object"!=Ba(e)||!e)return e;var t,n=e[Symbol.toPrimitive];if(void 0!==n){if("object"!=Ba(t=n.call(e,"string")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Ba(t)?t:String(t)}(o),o in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))});return e}var za={m:n().createElement(n().Fragment,null,n().createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M21 8.719 7.836 14.303Q6.191 15 5.075 15q-1.256 0-1.819-.884c-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19z",clipRule:"evenodd"})),l:n().createElement(n().Fragment,null,n().createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M42 17.438 15.672 28.606C13.48 29.536 11.636 30 10.15 30c-1.672 0-2.89-.59-3.638-1.768-.97-1.518-.546-3.964 1.118-6.544.988-1.508 2.244-2.892 3.468-4.216-.288.468-2.83 4.698-.05 6.69.55.4 1.332.596 2.294.596.772 0 1.658-.126 2.632-.38z",clipRule:"evenodd"}))},Ua=n().memo(function(e){return n().createElement(Ji,Fa(Fa({},e),{},{paths:za,fill:"none"}))});function Ga({isOpen:e,onCloseModal:t,onCtaEvents:r,l10n:o,data:i,isMobileCentered:a,testID:c}){const{imgURL:s,mediaSources:l}=i,d=Tr(Ir("lte","m"));return n().createElement(Da,{"data-testid":c,isOpen:e,closeModal:t,onResize:void 0,onResizeCapture:void 0,title:"",components:{ModalBaseComp:Ma},isMobile:d,modalContentCompProps:{className:"modal-content"}},n().createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"\n\nhtml[lang='ko-KR'] .split-layout-modal-title {\n  letter-spacing: -0.2rem;\n  white-space: pre-wrap;\n  line-height: 100%;\n  font-size: 2.6rem;\n}\n\nhtml[lang='ko-KR'] .split-layout-modal-subtitle {\n  padding: 12px 24px 24px 0px;\n  white-space: pre-wrap;\n  font-size: 0.9rem;\n  letter-spacing: -1.5px;\n}\n\nhtml[lang='ja-JP'] .swoosh {\n  height: 38px;\n}\n\n@media (max-width: 599px) {\n  html[lang='ko-KR'] .split-layout-modal-title {\n    font-size: 2.2rem;\n  }\n\n  html[lang='ko-KR'] .split-layout-modal-subtitle {\n    font-size: 0.8rem;\n    letter-spacing: -0.1rem;\n  }\n}\n"}}),n().createElement(La,{isMobile:d},n().createElement(Sa,{padding:"0px",width:d?"100vw":"348px",height:"100%",maxHeight:d?"50vh":void 0},n().createElement(Ia,{"data-testid":"split-layout-image",image:{src:s,alt:""},sources:l,aspectRatio:d?"3/2":"3/4",objectFit:"cover",borderRadius:"none",style:{height:"100%",maxHeight:d?"50vh":void 0},aspectRatioBoxProps:{style:{height:"100%",maxHeight:d?"50vh":void 0}}})),n().createElement("div",{className:"split-layout-modal-text-container "+(d&&a?"split-layout-text-container-centered":"")},n().createElement("div",{key:"swoosh",className:"swoosh"},n().createElement(Ua,{size:"l",height:"48px",width:"48px",title:"nike swoosh icon"})),n().createElement(Ri,{data:i,l10n:o}),n().createElement(Qr,{appearance:d?"display2":"display4",className:"split-layout-modal-title"},o.title),n().createElement(Qr,{appearance:"body1",className:"split-layout-modal-subtitle"},o.subTitle),n().createElement("div",{className:"split-layout-modal-actions"},o["actionButtons.primary"]&&n().createElement(Mi,{appearance:"primary",size:d?"medium":"small",onClick:()=>{r({eventType:$r}),Ti(o["actionButtons.primary.href"])()}},o["actionButtons.primary"]),o["actionButtons.secondary"]&&n().createElement(Mi,{appearance:"secondary",size:d?"medium":"small",onClick:()=>{r({eventType:Br}),Ti(o["actionButtons.secondary.href"])()}},o["actionButtons.secondary"])))))}const Wa=Ga,Ha=Ci(xa)``,Ya=Ci(da)`
  background: transparent;

  ${({isMobile:e})=>!e&&"\n      width: 1040px !important;\n      height: 585px !important;\n      max-width: unset !important;\n      max-height: calc(100vh - 40px) !important;\n  "}

  & section {
    padding: 0px;
    & > div > .modal-header-container {
      display: none;
    }

    & > div {
      overflow: hidden;
      flex: 1;
    }
  }

  & .close-btn-container {
    padding: 24px;
    top: 0 !important;
    right: 0 !important;
    position: absolute !important;
  }

  & .modal-content {
    padding-bottom: 0px;
    & > div {
      padding-bottom: 0px;
    }
  }
`,Va=Ci(fa)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > .center-pop-up-modal-text-container {
    position: absolute;
    bottom: 40px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 40px 0px;
  }

  & .center-pop-up-modal-actions > button {
    padding: 6px 16px;
    line-height: 1.5rem;
    min-height: unset;
  }

  ${({isMobile:e})=>e&&"\n      & > .center-pop-up-modal-text-container {\n        width: 100vw;\n      }\n    "}

  & .center-pop-up-modal-subtitle {
    color: var(--podium-cds-color-white);
    line-height: 150%;
    white-space: pre-wrap;
    text-align: center;
    margin-bottom: 16px;
  }
`,Ka="BREAKING4-Regular";function Xa(e){const t=new Date(e),n=new Date,r=t.getTime()-n.getTime();return Math.floor(r/36e5)<24}const qa=(0,t.forwardRef)(({gapXs:e="none",gapS:t,gapM:r,gapL:o,recursive:i=!1,className:a,components:c={},inset:s,textLocation:l,...d},u)=>{const p=Qe("nds-stack",a,`gap-xs-${e}`,{[`gap-s-${t}`]:t,[`gap-m-${r}`]:r,[`gap-l-${o}`]:o,recursive:i}),m=c.StackComp??"div";return n().createElement(m,{className:p,ref:u,...d})});qa.displayName="StackBase";const Qa=Ur(qa)`
  ${({gapXs:e="none",gapS:t,gapM:n,gapL:r,recursive:o})=>{const i=(e=>({children:e?"*":"> *",siblingChildren:e?"* + *":"> * + *"}))(o);return Le`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;

    ${i.children} {
      margin-top: 0;
      margin-bottom: 0;
    }

    ${i.siblingChildren} {
      margin-top: ${Ca(e)};

      ${t&&`@media (min-width: ${jr.podiumCdsBreakpointS}) {\n        margin-top: ${Ca(t)};\n      }`}

      ${n&&`@media (min-width: ${jr.podiumCdsBreakpointM}) {\n        margin-top: ${Ca(n)};\n      }`}

      ${r&&`@media (min-width: ${jr.podiumCdsBreakpointL}) {\n        margin-top: ${Ca(r)};\n      }`}
    }
  `}};
`,Za=Ci(xa)``,Ja=Ci(da)`
  width: 100% !important;
  max-width: 800px !important;
  padding: 0 !important;

  & section {
    padding: 0px !important;
    min-height: ${({isMobile:e})=>e?"auto":"464px"};
    max-height: ${({isMobile:e})=>e?"100vh":"auto"};
  }

  & .modal-header-container {
    display: none !important;
  }

  & .close-btn-container {
    position: absolute !important;
    padding: 24px;
    top: 0 !important;
    right: 0 !important;
  }
`,ec=Ci(fa)`
  display: flex;
  flex-direction: ${({isMobile:e})=>e?"column":"row"};
  gap: 24px;
  align-items: center;
  justify-content: ${({isMobile:e})=>e?"center":"left"};
  height: 100%;

  ${({isMobile:e})=>e&&"\n    max-height: 100vh !important;\n  "}

  & .split-layout-image-container {
    width: ${({isMobile:e})=>e?"100%":"360px"};
    min-height: 100%;
    align-self: normal;
  }

  & .split-layout-modal-title {
    margin-top: 4px;
    text-align: ${({centeredContent:e})=>e?"center":"left"};
  }

  & .split-layout-modal-subtitle {
    margin-top: 12px;
    text-align: ${({centeredContent:e})=>e?"center":"left"};
  }

  & .split-layout-image {
    height: 100%;
  }

  & .split-layout-image-wrapper {
    height: 100%;
  }

  & .split-layout-modal-container {
    padding: ${({isMobile:e})=>e?"24px":"48px 24px"};
    max-height: ${({isMobile:e})=>e?"60vh":"auto"};
    overflow: auto;
    height: auto;
    max-width: ${({isMobile:e})=>e?"100%":"380px"};

    ${({centeredContent:e})=>e&&"\n      max-width: 85vw;\n      justify-content: center;\n    "}
  }

  & .split-layout-modal-actions {
    flex-direction: row;
    margin-top: 24px;
    display: flex;
    gap: 5px;
    justify-content: ${({centeredContent:e})=>e?"center":"flex-start"};

    & button {
      white-space: pre;
    }
  }
`,tc=Ci(xa)``,nc=Ci(da)`
  width: ${({isMobile:e})=>e?"100vw":"100%"} !important;
  max-width: ${({isMobile:e})=>e?"100vw":"800px"} !important;
  padding: 0 !important;
  height: auto !important;
  min-height: auto !important;

  ${({isMobile:e})=>e?"\n    /* Mobile: constrain to viewport, flush to bottom */\n    max-height: 100vh !important;\n    border-radius: var(--podium-cds-size-border-radius-xl) var(--podium-cds-size-border-radius-xl) 0 0 !important;\n  ":"\n    /* Desktop: use aspect ratio */\n    aspect-ratio: 16 / 9;\n    max-height: calc(100vh - 40px) !important;\n  "}

  & section {
    padding: 0px !important;
    width: 100%;
    height: 100% !important;
    min-height: auto !important;
    display: flex;
    flex-direction: column;
    ${({isMobile:e})=>!e&&"aspect-ratio: 16 / 9;"}
  }

  & section > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  & .modal-content {
    flex: 1;
    height: 100%;
    padding-bottom: 0 !important;
  }

  & .modal-header-container {
    display: none !important;
  }

  & .close-btn-container {
    position: absolute !important;
    padding: 24px;
    top: 0 !important;
    right: 0 !important;
    z-index: 10;
  }
`,rc=Ci(fa)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  /* Mobile: ensure minimum height for content visibility (~80vh for better coverage) */
  min-height: ${({isMobile:e})=>e?"min(80vh, 600px)":"auto"};

  /* Background image container - absolute, full coverage */
  & .text-over-image-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  & .text-over-image-background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }

  /* Gradient overlay for text readability */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 33.6%, rgba(0, 0, 0, 0.35) 64.29%, rgba(0, 0, 0, 0.65) 100%);
    pointer-events: none;
    z-index: 1;
  }

  /* Content container - positioned above gradient */
  & .text-over-image-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: ${({isMobile:e})=>e?"24px":"40px"};
    padding-bottom: ${({isMobile:e})=>e?"32px":"40px"};
    text-align: center;
    width: 100%;
  }

  & .text-over-image-title {
    color: var(--podium-cds-color-white);
    line-height: 91%;
    margin-top: 4px;
    white-space: pre-wrap;
  }

  & .text-over-image-subtitle {
    color: var(--podium-cds-color-white);
    line-height: 150%;
    margin-top: 12px;
    white-space: pre-wrap;
  }

  & .text-over-image-actions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 16px;
    gap: 10px;
  }

  & .text-over-image-actions > button {
    white-space: pre;
  }
`,oc={"text-over-image":function({isOpen:e,onCloseModal:t,onCtaEvents:r,data:o,l10n:i,testID:a}){const{imgURL:c}=o,s=Tr(Ir("lt","s")),l=Tr(Ir("lt","m"));return n().createElement(wa,{"data-testid":a,isOpen:e,closeModal:t,onResize:void 0,onResizeCapture:void 0,title:"",modalContentCompProps:{className:"modal-content"}},n().createElement(Ea,null,s?n().createElement(n().Fragment,null,n().createElement("div",{className:"center-pop-up-background-image"},n().createElement("img",{src:c,alt:"Background Image",style:{width:"100%",height:"100%",objectFit:"cover"}})),n().createElement("div",{className:"center-pop-up-modal-mobile-container"},n().createElement("div",{className:"center-pop-up-modal-text-container"},n().createElement("div",{className:"center-pop-up-modal-actions"},n().createElement(Ri,{data:o,l10n:i})),n().createElement(Qr,{appearance:"display2",className:"center-pop-up-modal-title",uppercase:!0,align:"center"},i.title),n().createElement(Qr,{appearance:"body2",className:"center-pop-up-modal-subtitle",uppercase:!0,align:"center"},i.subTitle)),n().createElement("div",{className:"center-pop-up-modal-actions"},i["actionButtons.primary"]&&n().createElement(n().Fragment,null,n().createElement(Mi,{appearance:"primary",background:"dark",size:"medium",onClick:()=>{r({eventType:$r}),Ti(i["actionButtons.primary.href"])()}},i["actionButtons.primary"]))))):n().createElement(n().Fragment,null,n().createElement("div",{className:"center-pop-up-background-image"},n().createElement("img",{src:c,alt:"Background Image",style:{width:"100%",height:"100%",objectFit:"cover"}})),n().createElement("div",{className:"center-pop-up-modal-text-container"},n().createElement(Ri,{data:o,l10n:i}),n().createElement(Qr,{appearance:l?"display1":"display3",className:"center-pop-up-modal-title",uppercase:!0,align:"center"},i.title),n().createElement(Qr,{appearance:"body1",className:"center-pop-up-modal-subtitle"},i.subTitle),n().createElement("div",{className:"center-pop-up-modal-actions"},i["actionButtons.primary"]&&n().createElement(Mi,{appearance:"primary",background:"dark",size:"medium",onClick:()=>{r({eventType:$r}),Ti(i["actionButtons.primary.href"])()}},i["actionButtons.primary"]))))))},"split-layout":Wa,"split-layout-mobile-center":function(e){return n().createElement(Ga,Object.assign({},e,{isMobileCentered:!0}))},"digital-timer-over-image":function({isOpen:e,onCloseModal:r,onCtaEvents:o,data:i,l10n:a,testID:c}){var s;const{imgURL:l,mediaSources:d,actionButtons:u}=i,p=Tr(Ir("lte","m")),[m,f]=n().useState(()=>Xa(i.digitalTimer.targetDate)),h=n().useRef(null),g=function(e,n){const[r,o]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{const t=function(e,t){return new(xt())(e,t)}(e,n);t.load().then(function(){o(!0)},()=>{o(!1)})},[e,n]),r}(Ka),b=ji([l,...null!==(s=null==d?void 0:d.map(e=>e.srcset))&&void 0!==s?s:[]]),y={appearance:"primary",background:"dark",size:"medium",style:{color:"black"}},v=m?null==u?void 0:u.secondary:null==u?void 0:u.primary;return(0,t.useEffect)(()=>(h.current=setInterval(()=>{const e=Xa(i.digitalTimer.targetDate);e!==m&&f(e)},1e3),()=>{h.current&&clearInterval(h.current)}),[m,i.digitalTimer.targetDate]),n().createElement(n().Fragment,null,n().createElement("style",null,`\n          @font-face {\n            font-family: ${Ka};\n            src:\n              url('https://www.nike.com/static/experience/experimentation-eng/bellotti/media/BREAKING4/NIKEBREAKING4-Regular.otf')\n                format('opentype'),\n              url('https://www.nike.com/static/experience/experimentation-eng/bellotti/media/BREAKING4/NIKEBREAKING4-Regular.ttf')\n                format('truetype'),\n              url('https://www.nike.com/static/experience/experimentation-eng/bellotti/media/BREAKING4/NIKEBREAKING4-Regular.woff')\n                format('woff'),\n              url('https://www.nike.com/static/experience/experimentation-eng/bellotti/media/BREAKING4/NIKEBREAKING4-Regular.woff2')\n                format('woff2');\n            font-weight: normal;\n            font-style: normal;\n          }\n        `),n().createElement(Ha,{"data-testid":c,isOpen:b&&g&&e,isMobile:p,closeModal:r,onResize:void 0,onResizeCapture:void 0,title:"",components:{ModalBaseComp:Ya},backdropCompProps:{style:{zIndex:9999999}},modalContentCompProps:{className:"modal-content"}},n().createElement(Va,{isMobile:p},n().createElement(Sa,{padding:"0px",width:"100%",height:"100%"},n().createElement(Ia,{image:{src:l,alt:""},sources:null==d?void 0:d.map(e=>({srcset:e.srcset,media:e.media})),aspectRatio:p?"2/3":"16/9",objectFit:"cover",borderRadius:"none",style:{height:"100%"},aspectRatioBoxProps:{style:{height:"100%"}}})),n().createElement("div",{className:"center-pop-up-modal-text-container"},n().createElement(Pi,{endDate:i.digitalTimer.targetDate,l10n:a,customFont:Ka}),n().createElement(Qr,{appearance:"body1",className:"center-pop-up-modal-subtitle"},a.subTitle),n().createElement("div",{className:"center-pop-up-modal-actions"},(null==v?void 0:v.openNewTab)?n().createElement(Mi,Object.assign({},y,{Component:"a",href:m?a["actionButtons.primary2.href"]:a["actionButtons.primary1.href"],target:"_blank",onClick:()=>{o({eventType:$r})}}),m?a["actionButtons.primary2"]:a["actionButtons.primary1"]):n().createElement(Mi,Object.assign({},y,{onClick:()=>{var e,t;o({eventType:$r}),Ti(m?null!==(t=a["actionButtons.primary2.href"])&&void 0!==t?t:"/":null!==(e=a["actionButtons.primary1.href"])&&void 0!==e?e:"/")()}}),m?a["actionButtons.primary2"]:a["actionButtons.primary1"]))))))},"split-layout-v2":function({isOpen:e,onCloseModal:t,onCtaEvents:r,l10n:o,data:i,isMobileCentered:a=!1,testID:c}){var s,l;const{imgURL:d,mediaSources:u}=i,p=Tr(Ir("lte","m"));return n().createElement(Za,{"data-testid":c,isOpen:e,closeModal:t,onResize:void 0,onResizeCapture:void 0,title:"",components:{ModalBaseComp:Ja,ModalHeaderComp:()=>null},isMobile:p,modalContentCompProps:{className:"modal-content"}},n().createElement(ec,{isMobile:p,centeredContent:a&&p},n().createElement(Sa,{className:"split-layout-image-container"},n().createElement(Ia,{"data-testid":"split-layout-image",className:"split-layout-image",classes:{Root:"split-layout-image-wrapper"},image:{src:d,alt:""},sources:u,aspectRatio:p?"3/2":"3/4",objectFit:"cover",borderRadius:"none",style:{height:"100%",maxHeight:p?"50vh":void 0},skeletonProps:{style:{height:"100%"}},aspectRatioBoxProps:{style:{height:"100%",maxHeight:p?"50vh":void 0}}})),n().createElement(Qa,{className:"split-layout-modal-container"},n().createElement(Ua,{size:"m",height:"48px",width:"48px",title:"nike swoosh icon",style:{alignSelf:a&&p?"center":"flex-start"}}),n().createElement(Ri,{data:i,l10n:o}),n().createElement(Qr,{appearance:p?"display2":"display4",className:"split-layout-modal-title"},o.title),n().createElement(Qr,{appearance:"body1",className:"split-layout-modal-subtitle"},o.subTitle),n().createElement(Sa,{className:"split-layout-modal-actions"},(null===(s=i.actionButtons)||void 0===s?void 0:s.primary)&&n().createElement(Mi,{appearance:"primary",size:p?"medium":"small",onClick:()=>{r({eventType:$r}),Ti(o["actionButtons.primary.href"])()}},o["actionButtons.primary"]),(null===(l=i.actionButtons)||void 0===l?void 0:l.secondary)&&n().createElement(Mi,{appearance:"secondary",size:p?"medium":"small",onClick:()=>{r({eventType:Br}),Ti(o["actionButtons.secondary.href"])()}},o["actionButtons.secondary"])))))},"text-over-image-v2":function({isOpen:e,onCloseModal:t,onCtaEvents:r,l10n:o,data:i,testID:a}){var c;const{imgURL:s}=i,l=Tr(Ir("lte","m"));return n().createElement(tc,{"data-testid":a,isOpen:e,closeModal:t,onResize:void 0,onResizeCapture:void 0,title:"",components:{ModalBaseComp:nc,ModalHeaderComp:()=>null},isMobile:l,modalContentCompProps:{className:"modal-content"}},n().createElement(rc,{isMobile:l},n().createElement("div",{className:"text-over-image-background"},n().createElement("img",{"data-testid":"text-over-image-background",src:s,alt:""})),n().createElement(Qa,{className:"text-over-image-content"},n().createElement(Ri,{data:i,l10n:o}),n().createElement(Qr,{appearance:l?"display2":"display4",className:"text-over-image-title"},o.title),n().createElement(Qr,{appearance:"body1",className:"text-over-image-subtitle"},o.subTitle),n().createElement(Sa,{className:"text-over-image-actions"},(null===(c=i.actionButtons)||void 0===c?void 0:c.primary)&&n().createElement(Mi,{appearance:"primary",background:"dark",size:l?"medium":"small",onClick:()=>{r({eventType:$r}),Ti(o["actionButtons.primary.href"])()}},o["actionButtons.primary"])))))}};function ic(e){return(ic="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var ac=$.podiumCdsBreakpointS,cc=$.podiumCdsBreakpointM,sc=$.podiumCdsBreakpointL,lc=$.podiumCdsBreakpointXl,dc=function(e){return"number"===ic(e)?"\n    grid-column: span ".concat(e,";\n  "):e instanceof Array?"number"!==ic(e[0])||"object"!==ic(e[1])?"":" \n    grid-column: span ".concat(e[0],";\n    ").concat(e[1].colStart?"grid-column:".concat(e[1].colStart,"/").concat(e[1].colEnd,";"):"","\n    ").concat(e[1].rowStart?"grid-row:".concat(e[1].rowStart,"/").concat(e[1].rowEnd,";"):"","\n    ").concat(e[1].order?"order:".concat(e[1].order,";"):"","\n  "):"\n    ".concat(e.colStart?"grid-column:".concat(e.colStart,"/").concat(e.colEnd,";"):"","\n    ").concat(e.rowStart?"grid-row:".concat(e.rowStart,"/").concat(e.rowEnd,";"):"","\n    ").concat(e.order?"order:".concat(e.order,";"):"","\n  ")},uc=function(e){var t=function(e){return"number"===ic(e)?"repeat(".concat(e,", minmax(0,1fr))"):e};return"\n    ".concat(e.columnGap?"column-gap:".concat(e.columnGap,";"):"","\n    ").concat(e.rowGap?"row-gap:".concat(e.rowGap,";"):"","\n    ").concat(e.columns?"grid-template-columns:".concat(t(e.columns),";"):"","\n    ").concat(e.rows?"grid-template-rows:".concat(t(e.rows),";"):"","\n    ").concat(e.padding?"padding:".concat(e.padding,";"):"","\n  ")},pc=function(e,t){var n=e.xs,r=e.s,o=e.m,i=e.l,a=e.xl,c={xs:n,s:r,m:o,l:i,xl:a},s="";return[n,r,o,i,a].forEach(function(e,n){e&&(s+=function(e,t,n){var r="grid"===n?uc:dc;return"xs"===t?"".concat(r(e)):"@media(min-width: ".concat(function(e){var t="0px";switch(e){case"s":t=ac;break;case"m":t=cc;break;case"l":t=sc;break;case"xl":t=lc}return t}(t),"){").concat(r(e),"}")}(e,Object.keys(c)[n],t))}),s.replace(/\n/g,"")},mc=(0,t.forwardRef)(function(e,t){var r,o=e.className,i=e.classes,a=void 0===i?{}:i,c=e.children,s=e.components,l=void 0===s?{}:s,d=(e.justifyItems,e.justifyContent,e.alignItems,e.alignContent,e.gridAutoFlow,e.rowGap,e.columnGap,e.rows,e.columns,e.xs,e.s,e.m,e.l,e.xl,e.isFullBleed,function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["className","classes","children","components","justifyItems","justifyContent","alignItems","alignContent","gridAutoFlow","rowGap","columnGap","rows","columns","xs","s","m","l","xl","isFullBleed"])),u=null!==(r=l.GridComp)&&void 0!==r?r:"div",p=Qe("nds-grid",o,a.grid);return n().createElement(u,Object.assign({className:p,ref:t},d),c)}),fc="1920px",hc=Xe(mc,{target:"ehf3nt20"})(function(e){var t=e.columns,n=void 0===t?12:t,r=e.rows,o=e.rowGap,i=e.columnGap,a=e.justifyItems,c=e.justifyContent,s=e.alignItems,l=e.alignContent,d=e.gridAutoFlow,u=e.isFullBleed;return Le("max-width:",fc,";margin:0 auto;display:grid;grid-template-columns:repeat(",n,",minmax(0,1fr));",r?"grid-template-rows: repeat(".concat(r,", minmax(0,1fr));"):""," column-gap:",i,";row-gap:",o,";justify-items:",a,";justify-content:",c,";align-items:",s,";align-content:",l,";",d?"grid-auto-flow: ".concat(d,";"):""," ",u?"\n      max-width: 100%;\n      ":"\n      @media(min-width: 960px){\n        padding: 0 48px;\n        max-width: ".concat(fc,";\n      }\n      padding: 0 24px;\n      max-width: ").concat(fc,";\n    ")," ",pc(e,"grid"))}),gc=function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r},bc=Xe(function(e){var t,r=e.className,o=(e.xs,e.s,e.m,e.l,e.xl,e.components),i=void 0===o?{}:o,a=(e.justifySelf,e.alignSelf,gc(e,["className","xs","s","m","l","xl","components","justifySelf","alignSelf"])),c=Qe(r,"nds-grid-item"),s=null!==(t=i.ItemComp)&&void 0!==t?t:"div";return n().createElement(s,Object.assign({className:c},a))},{target:"e4lt99o0"})(function(e){var t=e.justifySelf,n=e.alignSelf,r=e.xs,o=void 0===r?12:r,i=gc(e,["justifySelf","alignSelf","xs"]);return Le(pc(Object.assign({xs:o},i),"gridItem")," ",t?"justify-self:".concat(t,";"):""," ",n?"align-self:".concat(n,";"):"")},";");function yc(e){return(yc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var vc=function(e){if("none"===e)return 0;if("string"!==yc(e))return e;var t="var(--podium-cds-size-spacing-".concat(e.toLowerCase(),")");return["xs","s","m","l","xl","xxl","xxxl","xxxxl"].includes(e)?t:e},xc={primary:"var(--podium-cds-color-bg-primary)",alwaysDark:"var(--podium-cds-color-bg-always-dark)",alwaysLight:"var(--podium-cds-color-bg-always-light)",grey500:"var(--podium-cds-color-grey-500)",grey300:"var(--podium-cds-color-grey-300)",grey200:"var(--podium-cds-color-grey-200)",grey100:"var(--podium-cds-color-grey-100)",grey50:"var(--podium-cds-color-grey-50)",white:"var(--podium-cds-color-white)",critical:"var(--podium-cds-color-bg-critical)",success:"var(--podium-cds-color-bg-success)"},wc=(0,t.forwardRef)(function(e,t){var r,o=e.components,i=void 0===o?{}:o,a=e.className,c=(e.backgroundColor,e.borderRadius,e.minHeight,e.maxHeight,e.height,e.overflow,e.padding,e.paddingBlockStart,e.paddingBlockEnd,e.paddingInlineStart,e.paddingInlineEnd,e.minWidth,e.maxWidth,e.width,function(e,t){var n,r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}(e,["components","className","backgroundColor","borderRadius","minHeight","maxHeight","height","overflow","padding","paddingBlockStart","paddingBlockEnd","paddingInlineStart","paddingInlineEnd","minWidth","maxWidth","width"])),s=null!==(r=i.BoxComp)&&void 0!==r?r:"div",l=Qe("nds-box",a);return n().createElement(s,Object.assign({className:l,ref:t},c))});wc.displayName="BoxBase";var Ec=Xe(wc,{target:"e161jrzw0"})(function(e){var t,n=e.backgroundColor,r=void 0===n?"":n,o=e.borderRadius,i=void 0===o?"":o,a=e.minHeight,c=e.maxHeight,s=e.height,l=e.overflow,d=e.padding,u=e.paddingBlockStart,p=e.paddingBlockEnd,m=e.paddingInlineStart,f=e.paddingInlineEnd,h=e.minWidth,g=e.maxWidth,b=e.width,y={backgroundColor:(t=r,xc[t]||t),borderRadius:i?"var(--podium-cds-size-border-radius-".concat(i.toLowerCase(),")"):null,minHeight:a,maxHeight:c,height:s,overflow:l,padding:d?vc(d):null,paddingBlockStart:u?vc(u):null,paddingBlockEnd:p?vc(p):null,paddingInlineStart:m?vc(m):null,paddingInlineEnd:f?vc(f):null,minWidth:h,maxWidth:g,width:b};return Le(y,";")});const Cc=ut(kr)`
  @media (min-width: 960px) {
    max-width: 803px;
    min-height: 522px;
  }
  max-width: calc(100vw - 40px);
  bottom: auto;
  top: 50%;
  left: 50%;
  min-height: 522px;
  -webkit-transform: translate3d(-50%, -50%, 0);
  -ms-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  border-radius: var(--podium-cds-size-border-radius-xl) var(--podium-cds-size-border-radius-xl)
    var(--podium-cds-size-border-radius-xl) var(--podium-cds-size-border-radius-xl);

  @media (max-width: 959px) {
    max-width: 100vw; /* Full width for mobile */
    min-height: 530px; /* Adjust height dynamically */
    bottom: 0; /* Position at the bottom */
    top: auto; /* Remove top positioning */
    left: 0; /* Align to the left */
    border-radius: var(--podium-cds-size-border-radius-xl) var(--podium-cds-size-border-radius-xl) 0 0; /* Rounded corners only at the top */
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }

  & > section {
    padding: var(--podium-cds-size-spacing-l);
    @media (max-width: 959px) {
      padding-bottom: 28px !important;
    }
  }
  & > section > div > .modal-header-container {
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  & > .welcome-back-modal-text-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center !important;
    text-align: center;
    padding: 0 6rem;
    margin-bottom: 1rem;
  }
  & .welcome-back--modal-subtitle {
    line-height: 90%;
    margin-bottom: 16px;
    text-align: center !important;
    font-size: 16px !important;

    @media (max-width: 959px) {
      margin-bottom: 24px;
    }
  }
  & .welcome-back-modal-title {
    line-height: 90%;
    margin-top: -4px;
    margin-bottom: 4px;
    font-size: 32px;
  }

  & .welcome-back-modal-title-desktop {
    line-height: 90%;
    margin-bottom: 8px;
    font-size: 48px;
  }
  & .welcome-back--modal-product_title {
    line-height: 150%;
    text-align: left !important;
    font-size: 16px !important;
    overflow-wrap: break-word;
  }
  & .welcome-back--modal-product_subtitle {
    text-align: left !important;
    font-size: 14px !important;
  }
  .close-btn-container {
    top: 24px;
    right: 24px;
    margin: 0;
    position: absolute;
  }

  & > section > div {
    overflow: auto;
    flex: 1;
  }

  & .modal-content {
    flex: 1;
    height: 100%;
    padding: 0 10px;
  }
`,Oc=ut(yr)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,kc=ut(Ec)`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 959px) {
    flex-direction: row;
    justify-content: start;
    align-items: center;
    max-width: 327px;
  }

  max-width: calc(100vw - 40px);

  & .welcome-back-modal-image {
    background: var(--podium-cds-color-grey-100);
  }
`,Sc=ut.div`
  min-height: 40px;
  text-align: start;
  width: 225px;
  max-width: 225px;
  @media (max-width: 960px) {
    width: 199px;
    max-width: 199px;
  }
`;function Ac(e){return Ac="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ac(e)}var Nc=["aria-hidden","className","fill","height","paths","role","title","size","viewBox","width"];function _c(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function Pc(e,t){var n,r;for((null==t||t>e.length)&&(t=e.length),n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Rc="24px",Tc="48px",jc={s:"0 0 ".concat(parseInt(Rc)," ").concat(parseInt(Rc)),m:"0 0 ".concat(parseInt(Rc)," ").concat(parseInt(Rc)),l:"0 0 ".concat(parseInt(Tc)," ").concat(parseInt(Tc))},Ic={s:Rc,m:Rc,l:Tc,container:"container"},Dc=function(e){var r,o,i=e["aria-hidden"],a=e.className,c=e.fill,s=e.height,l=e.paths,d=e.role,u=void 0===d?"img":d,p=e.title,m=e.size,f=void 0===m?"m":m,h=e.viewBox,g=e.width,b=function(e,t){if(null==e)return{};var n,r,o,i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols)for(n=Object.getOwnPropertySymbols(e),o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r]);return i}(e,Nc),y=(r=(0,t.useState)(f),o=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var n,r,o,i,a,c,s,l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){a=[],c=!0,s=!1;try{if(o=(l=l.call(e)).next,0===t){if(Object(l)!==l)return;c=!1}else for(;!(c=(n=o.call(l)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=l.return&&(i=l.return(),Object(i)!==i))return}finally{if(s)throw r}}return a}}(r,o)||function(e,t){if(e){if("string"==typeof e)return Pc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Pc(e,t):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=y[0],x=y[1],w=i;(function(e){return!e&&!p})(i)&&(w=!0),(0,t.useEffect)(function(){Object.keys(Ic).includes(f)?x(f):x("m")},[f]);var E=h||jc[f]||jc.m;return n().createElement("svg",function(e){var t,n;for(t=1;t<arguments.length;t++)n=null!=arguments[t]?arguments[t]:{},t%2?_c(Object(n),!0).forEach(function(t){var r,o,i;r=e,o=t,i=n[t],o=function(e){var t=function(e){if("object"!=Ac(e)||!e)return e;var t,n=e[Symbol.toPrimitive];if(void 0!==n){if("object"!=Ac(t=n.call(e,"string")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Ac(t)?t:String(t)}(o),o in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))});return e}({"aria-hidden":w?"true":"false",className:a,focusable:"false",viewBox:E,role:u,width:function(){if("container"!==v)return g||Ic[v]}(),height:function(){if("container"!==v)return s||Ic[v]}(),fill:c},b),(null==l?void 0:l[v])?l[v]:null==l?void 0:l.m,p&&n().createElement("title",null,p))};function Mc(e){return Mc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mc(e)}function Lc(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function Bc(e){var t,n;for(t=1;t<arguments.length;t++)n=null!=arguments[t]?arguments[t]:{},t%2?Lc(Object(n),!0).forEach(function(t){var r,o,i;r=e,o=t,i=n[t],o=function(e){var t=function(e){if("object"!=Mc(e)||!e)return e;var t,n=e[Symbol.toPrimitive];if(void 0!==n){if("object"!=Mc(t=n.call(e,"string")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Mc(t)?t:String(t)}(o),o in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lc(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))});return e}var $c={s:n().createElement(n().Fragment,null,n().createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z",clipRule:"evenodd"})),m:n().createElement(n().Fragment,null,n().createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z",clipRule:"evenodd"})),l:n().createElement(n().Fragment,null,n().createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M42 17.438L15.672 28.606C13.48 29.536 11.636 30 10.15 30c-1.672 0-2.89-.59-3.638-1.768-.97-1.518-.546-3.964 1.118-6.544.988-1.508 2.244-2.892 3.468-4.216-.288.468-2.83 4.698-.05 6.69.55.4 1.332.596 2.294.596.772 0 1.658-.126 2.632-.38L42 17.438z",clipRule:"evenodd"}))},Fc=n().memo(function(e){return n().createElement(Dc,Bc(Bc({},e),{},{paths:$c,fill:"none"}))});Fc.displayName="[Deprecated] NikeApp";const zc=({title:e,subTitle:t,isMobile:r=!1})=>n().createElement("header",null,n().createElement("div",{className:"welcome-back-modal-text-container"},n().createElement("div",{key:"swoosh",style:{textAlign:"center",marginTop:r?"8px":"12px"}},n().createElement(Fc,{size:"l",height:"40px",width:"40px",title:"nike swoosh icon"})),n().createElement(lt,{appearance:"display4",className:r?"welcome-back-modal-title":"welcome-back-modal-title-desktop",placeholder:void 0},e),n().createElement(lt,{appearance:"body1",className:"welcome-back--modal-subtitle",placeholder:void 0},t))),Uc=(0,t.createContext)(_.DEFAULT_LOCALE_DATA),Gc=function({isOpen:e,onCloseModal:r,onCtaEvents:o,data:{products:i},l10n:a}){const{hreflang:c}=(0,t.useContext)(Uc),s=B(z("lt","s")),l=B(z("lt","m"));return 0===(null==i?void 0:i.length)?null:n().createElement(Cc,{appearance:"base",isOpen:e,title:"",closeModal:()=>{r()},components:{ModalHeaderComp:()=>n().createElement(zc,{isMobile:s||l,title:a.title,subTitle:a.subTitle})}},n().createElement(Oc,null,n().createElement(hc,{style:{width:s||l?"327px":"100%",padding:s||l?0:"0 32px",display:"grid",gridTemplateColumns:s||l?"1fr":"repeat(auto-fill, minmax(210px, 1fr))",gap:"16px"}},null==i?void 0:i.map(e=>n().createElement(bc,{style:{maxWdth:s||l?"327px":"100%",gridColumn:s||l?"span 1":"auto"},key:e.id},n().createElement("a",{href:e.url,onClick:()=>{o({eventType:ce})}},n().createElement(kc,null,n().createElement("div",{className:"welcome-back-modal-image",style:{width:s||l?"100px":"225px",height:s||l?"100px":"225px",borderTopLeftRadius:s||l?"4px":"8px",borderBottomLeftRadius:s||l?"4px":"8px",borderRadius:s||l?void 0:"8px"}},n().createElement(tn,{aspectRatio:"1/1",image:{src:e.imageUrl,alt:e.title},style:{width:"100%",borderTopLeftRadius:s||l?"4px":"8px",borderBottomLeftRadius:s||l?"4px":"8px",borderRadius:s||l?void 0:"8px"}})),n().createElement(Sc,null,n().createElement(lt,{className:"welcome-back--modal-product_title",style:{fontSize:s||l?"1em":void 0}},e.title),n().createElement(lt,{"data-testid":s||l?"mobile-price":"desktop-price",appearance:s?"body2":"body",color:"secondary",className:"welcome-back--modal-product_subtitle"},Bt({localeForCurrency:c,currency:e.price.currency})(e.price.amount))))))))))},Wc=ut.div`
  position: fixed;
  box-sizing: border-box;
  overflow: hidden;
  background-color: var(--podium-cds-color-bg-modal);
  border-radius: var(--podium-cds-size-border-radius-s);
  box-shadow: 0px 4px 14px 0px #00000040;
  width: ${e=>e.isExpanded?"calc(100vw - 2rem)":"230px"};
  height: auto;
  transition: all 0.5s ease;
  bottom: 1.5rem;
  right: 1rem;
  z-index: 3;
  cursor: pointer;
  @media (min-width: 768px) {
    width: ${e=>e.isExpanded?"440px":"288px"};
  }
`,Hc=ut.section`
  display: ${e=>e.isExpanded?"flex":"none"};
  height: 100%;
  width: auto;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
  max-width: 134px;
  min-height: 86px;
  @media (min-width: 768px) {
    max-height: 134px;
  }
`,Yc=(ut.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 1 / 1;
`,ut.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 86px;
  max-height: 134px;
`),Vc=ut.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 134px;
  font-size: 21px;
  justify-content: flex-start;
  padding: ${e=>e.isExpanded?"1rem 2.5rem 1rem 1rem":".5rem 1.5rem .5rem .5rem"};
  gap: 4px;
  max-height: 160px;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  word-wrap: break-word;
  overflow-wrap: break-word;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    padding: ${e=>e.isExpanded?"1rem 3rem 1rem 1rem":".5rem 1.5rem .5rem .5rem"};
    min-width: 235px;
    max-height: 180px;
  }
  & > .title {
    font-size: 21px;
    line-height: 1.2;
    width: 100%;
    white-space: pre-line;
    word-wrap: break-word;
    overflow-wrap: break-word;
    text-transform: uppercase;
    @media (min-width: 768px) {
      font-size: 24px;
    }
  }
  & > .subtitle {
    font-size: 14px;
    width: 100%;
    white-space: pre-line;
    word-wrap: break-word;
    overflow-wrap: break-word;
    color: var(--podium-cds-color-text-primary);
    line-height: 1.2;
    text-transform: uppercase;
    @media (min-width: 768px) {
      color: var(--podium-cds-color-text-secondary-on-light);
      text-transform: none;
    }
  }
  & > .sticky-modal-link {
    font-size: 12px;
    text-decoration: underline;
    text-underline-offset: 3px;
    width: 100%;
    word-wrap: break-word;
    overflow-wrap: break-word;
    cursor: pointer;
  }
`,Kc={default:function({data:e,l10n:r,onCloseModal:o,isOpen:i,onCtaEvents:a}){var c,s,l;const[d,u]=(0,t.useState)(!0),p=()=>{window.scrollY>0?u(!1):u(!0)};(0,t.useEffect)(()=>(window.addEventListener("scroll",p),()=>{window.removeEventListener("scroll",p)}),[]);const{imgURL:m}=e,f=B(z("lt","s"));return i?n().createElement(n().Fragment,null,n().createElement(Wc,{isExpanded:d,role:"modal"},n().createElement(Yc,{onClick:()=>{u(e=>!e)}},n().createElement(Hc,{isExpanded:d},n().createElement("img",{src:m,alt:null!==(c=r.title)&&void 0!==c?c:"",style:{width:"100%",height:"100%"},className:"sticky-image"})),n().createElement(Vc,{isExpanded:d},n().createElement(bt,{data:e,l10n:r,timerSize:"body3Strong"}),n().createElement(lt,{appearance:"display4",className:"title"},null!==(s=r.title)&&void 0!==s?s:""),r.subTitle&&n().createElement(lt,{appearance:f?"display4":"body1",className:"subtitle"},r.subTitle),d&&n().createElement(lt,{appearance:"body3Strong",className:"sticky-modal-link",onClick:e=>{e.stopPropagation(),a({eventType:ce}),r["actionButtons.primary.href"]&&(window.location.href=r["actionButtons.primary.href"])}},null!==(l=r["actionButtons.primary"])&&void 0!==l?l:"")),n().createElement(Er,{ariaLabel:"Close Modal",Icon:n().createElement(ir,null),background:"dark",onClick:o,style:{position:"absolute",top:10,right:10},"data-testid":"close-btn",size:"small"})))):null}},Xc="PRIMARY_CTA",qc="SECONDARY_CTA",Qc={"cart-check":e=>{const{data:o}=e,[i,a]=(0,t.useState)(void 0),c=wt("CART_CHECK_MODAL","1.15.3");return(0,t.useEffect)(()=>{var e,t,n,i;0!==Object.keys(o).length?(e=void 0,t=void 0,i=function*(){try{const e=yield function(){return $t(this,void 0,void 0,function*(){var e;try{const t=yield r.runAsync(()=>window.NikeShop,{maxAttempts:100,interval:100});if(!t)throw new Error("NikeShop not found");const n=yield t.fetchCart();if(!n)return;const o=yield Promise.all(n.payload.data.items.map(e=>$t(this,void 0,void 0,function*(){if(!e.productId)throw new Error("Product ID not found");const n=yield t.fetchProductDetails({productId:e.productId});if(!n.data.product.content)throw new Error("Product content not found");return{imageUrl:n.data.product.content.imageUrl,productText:n.data.product.content.title,styleColor:n.data.product.styleColor,cartPrice:e.priceInfo.price}}))),i=[];for(const e of o)yield new Promise(t=>{setTimeout(()=>{const n=sessionStorage.getItem(`cart:promos:${e.styleColor}`);let r;n&&(r=JSON.parse(n)),"ready"===(null==r?void 0:r.status)&&i.push({imageUrl:e.imageUrl,productText:e.productText,cartPrice:e.cartPrice,promo:r.message}),t()},500)});return{imageUrl:i.length>0?i[0].imageUrl:o[0].imageUrl,productText:i.length>0?i[0].productText:o[0].productText,cartPrice:i.length>0?i[0].cartPrice:null===(e=o[0])||void 0===e?void 0:e.cartPrice,promo:i.length>0?i[0].promo:null,currency:n.payload.data.currency}}catch(e){throw e}})}();if(!e)throw new Error("Cart Details Data is undefined");a({imageUrl:e.imageUrl,productText:e.productText,cartPrice:Number(e.cartPrice),promo:e.promo,currency:e.currency})}catch(e){c.error("Error fetching product data",{error:e})}},new((n=void 0)||(n=Promise))(function(r,o){function a(e){try{s(i.next(e))}catch(e){o(e)}}function c(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,c)}s((i=i.apply(e,t||[])).next())})):c.error("Error on CartCheckModalMain - No Data passed from Playcard for Cart Check Campaign")},[o,c]),i?n().createElement(se,Object.assign({},e,{component:"cart-check-modal",logger:c,appearances:Pr,data:Object.assign(Object.assign({},o),{productData:i})})):null},"center-pop-up":e=>{const r=(0,t.useRef)(b({version:"1.20.1",platform:"BELLOTTI_COMPONENT_CENTER_POP_UP_MODAL"})).current;return n().createElement(Fr,Object.assign({},e,{component:"center-pop-up-modal",logger:r,appearances:oc}))},"welcome-back":e=>{const t=wt("WELCOME_BACK_MODAL","0.14.0"),r=e.data.daysAgoThreshold,{productList:o}=At(t,r);return 3!==o.length?null:n().createElement(se,Object.assign({},e,{data:Object.assign(Object.assign({},e.data),{products:o}),component:"welcome-back-modal",logger:t,appearances:{default:Gc}}))},"sticky-modal":e=>{const t=wt("STICKY_MODAL","0.7.4");return n().createElement(se,Object.assign({},e,{component:"sticky-modal",logger:t,appearances:Kc}))}};function Zc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Jc(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Zc(Object(n),!0).forEach(function(t){es(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zc(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function es(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const ts="bellotti",ns="https://www.nike.com/static/event-registry/main/schemas/digital-product/dotcom/platform/web/classification/experience-event/experience/".concat("marketing-modal");var rs=function(e){return e.ACTIVATED="Marketing Modal Activated",e.CLICKED="Marketing Modal Clicked",e.CLOSED="Marketing Modal Closed",e}(rs||{});function os(e,t,n){var r,o,i,a;let c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if("adobe"!==(null===(r=t.experience)||void 0===r?void 0:r.bucketingSource))return;const s=e.toLowerCase().replace(/ /g,"-"),l=function(){if(function(){const e=window.location.pathname,t=e.endsWith("/")?e:`${e}/`;return"/"===t||/^\/[a-z]{2}\/?$/.test(t)||u.includes(t)}())return"homepage";if(window.location.origin.includes("gs-checkout.nike.com"))return"gs-checkout";const e=function(e){const t=new Set(u.map(e=>e.split("/")[1])),n=u.map(e=>e.replace(/^\/|\/$/g,"").replace("/","\\/")).join("|"),r=Array.from(t).join("|"),o=new RegExp(`^/(?:${n}|(${r}))(?=/|$)`,"i");return e.replace(o,"")||"/"}(window.location.href.replace(window.location.origin,"")),t=Object.entries({"/t/":"pdp","/t-dark/":"pdp","/u-dark/":"pdp","/u/":"pdp","/w/":"pw","/w-dark/":"pw","/w?q=":"onsite search","/w-dark?q=":"onsite search","/cart":"cart","/checkout":"checkout","/member":"member","/help":"help","/inbox":"inbox","/favorites":"favorites","/size-fit":"sizechart","/retail":"retail","/jordan":"landingpage","/men":"landingpage","/women":"landingpage","/kids":"landingpage"}).find(([t])=>e.includes(t));if(t&&"retail"===t[1]){const e=document.querySelector("article");return e?.id?e.id.replace("-"," "):t[1]}return t?t[1]:null}(),d={$schema:"".concat(ns,"/event-type/track/event-name/").concat(s,"/version/LATEST/schema.json")},p={eventName:e,locale:{country:n.country,language:n.language},abTest:{analytics:null===(o=t.experience.bucketingSourceData)||void 0===o?void 0:o.activityId},view:{experienceType:"nikecom",pageName:"nikecom>".concat(l,">").concat(ts),pageType:l},marketing:Jc({campaignId:t.id,activationId:t.id,modalSource:ts,experienceId:t.experience.id},c)};null===(i=window.webShellClient)||void 0===i||null===(a=i.analytics)||void 0===a||a.track(e,p,d)}function is(e,t,n){os(rs.CLICKED,e,t,{ctaNameClicked:n})}function as(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function cs(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?as(Object(n),!0).forEach(function(t){ss(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):as(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ss(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let ls=function(e){return e.VIEWED="coreMarketingV2UserExperienceViewed",e.CLICKED="coreMarketingV3ItemClicked",e}({});const ds=async e=>{const t=await r.runAsync(()=>{var t,n;if(null!==(t=window.webShellClient)&&void 0!==t&&null!==(n=t.analytics)&&void 0!==n&&n.utils)return window.webShellClient.analytics.utils.getProtoEnums(e)});if(!t)throw new Error("Error getting proto enums from analytics client.");return t};function us(e,t,n){var r,o;null===(r=window.webShellClient)||void 0===r||null===(o=r.analytics)||void 0===o||o.trackAction({underlyingAction:{case:e,value:t}},{eventVersion:n})}async function ps(e){const t=await ds("MarketingModal_Source");return{activationId:e.id,modalSource:t.BELLOTTI}}async function ms(e,t){const n=await ds("MarketingModal_ItemClicked");us(ls.CLICKED,cs(cs({},await ps(e)),{},{item:n[t]}),2)}function fs(e){return/^[a-zA-Z0-9-]{12}$/.test(e)}const hs=function(){var e,o,i,c,s,l,d,u,p,m;const f=E(),h=function(){const e=E(),[n,o]=(0,t.useState)(null),i=(0,t.useRef)(null),c=()=>{const e=null!==document.querySelector("."+O),t=null!==document.querySelector("."+k);o(!e&&!t)};return(0,t.useEffect)(()=>((async()=>{try{const t=await r.runAsync(()=>document.querySelector("."+C));if(!t){const t=new Error("Search element is not found in the DOM.");return a(t,{searchEl:C}),void(null==e||e.error(v.PLAYCARD_MODAL_NOT_ALLOWED,t))}c(),i.current=new MutationObserver(e=>{e.forEach(e=>{if("attributes"===e.type&&"class"===e.attributeName){const t=e.target;(t.classList.contains(O)||t.classList.contains(k)||!t.classList.contains(O))&&c()}"childList"===e.type&&c()})}),i.current.observe(t,{attributes:!0});const n=document.body;i.current.observe(n,{childList:!0,subtree:!0})}catch(t){const n=a(t,{function:"lookForSearchBar",searchBarClassName:C});null==e||e.error(v.PLAYCARD_MODAL_NOT_ALLOWED,n)}})(),()=>{i.current&&i.current.disconnect()}),[]),n}(),[g,b]=(0,t.useState)(null),{activeActivations:x,dismissActivation:w}=(()=>{const e=E(),n=(0,t.useContext)(S);if(!n){const t=new Error("usePlaymaker must be used within a PlaymakerProvider");a(t,{context:"usePlaymaker"}),null==e||e.error(v.USE_PLAYMAKER_OUTSIDE_PROVIDER,t)}return n})(),{onCtaEvents:N,onCloseEvent:_}=function(e){const n=T(),r=E();return{onCtaEvents:(0,t.useCallback)(async(t,o)=>{if(!e)return;const i=fs(e.id||"");switch(i||null==r||r.error("Event not sent to clickstream - Invalid activation ID:",e.id),t.eventType){case"SHOWN":A().then(t=>{t.activationActivated(e.id)}).catch(e=>{null==r||r.error("Error activating activation in Playmaker:",e)}),function(e,t){os(rs.ACTIVATED,e,t)}(e,n),null==r||r.info(y.PLAYCARD_COMPONENT_ACTIVATED,{activationId:e.id,component:e.component,type:e.type}),i&&await async function(e){us(ls.VIEWED,await ps(e),2)}(e);break;case"CLICK_CTN_SHOP":is(e,n,"Continue Shopping"),i&&await ms(e,Xc);break;case"CLICK_GO_TO_CHECKOUT":is(e,n,"Checkout Now"),i&&await ms(e,qc);break;case"CLICK_PRIMARY_CTA":is(e,n,"Primary CTA Clicked"),i&&await ms(e,Xc);break;case"CLICK_SECONDARY_CTA":is(e,n,"Secondary CTA Clicked"),i&&await ms(e,qc)}null==o||o()},[e,n]),onCloseEvent:(0,t.useCallback)(async()=>{if(!e)return;const t=fs(e.id||"");t||null==r||r.error("Event not sent to clickstream - Invalid activation ID:",e.id),function(e,t){os(rs.CLOSED,e,t)}(e,n),t&&await ms(e,"MODAL_CLOSED")},[e,n])}}(g);(0,t.useEffect)(()=>{null===g&&0!==x.length&&b(x[0])},[g,x]);const P=(0,t.useCallback)(async()=>{g&&(b(null),w(g.id),await _())},[g]);if((0,t.useEffect)(()=>{g&&(null==f||f.info(y.PLAYCARD_COMPONENT_MOUNTED,{activationId:g.id,component:g.component,type:g.type}))},[g]),!g)return null;if(!(g.component in Qc)){const e=new Error("Play Event activation component is not supported");return a(e,{component:g.component,activationId:g.id}),null==f||f.error(v.PLAYCARD_MODAL_NOT_ALLOWED,e),null}const R=Qc[g.component];return h&&f&&n().createElement(t.Suspense,{fallback:n().createElement(n().Fragment,null)},n().createElement(R,{id:g.type,data:null!==(e=null!==(o=null===(i=g.experience)||void 0===i?void 0:i.payload)&&void 0!==o?o:null===(c=g.experiences)||void 0===c||null===(s=c[0])||void 0===s?void 0:s.payload)&&void 0!==e?e:g.options,l10n:null!==(l=null!==(d=null===(u=g.experience)||void 0===u?void 0:u.l10n)&&void 0!==d?d:null===(p=g.experiences)||void 0===p||null===(m=p[0])||void 0===m?void 0:m.l10n)&&void 0!==l?l:{},onCloseModal:()=>{P()},onCtaEvents:e=>{N(e)}}))},gs=(0,t.createContext)(null),bs={didCatch:!1,error:null};class ys extends t.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=bs}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(null!==e){for(var t,n,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];null===(t=(n=this.props).onReset)||void 0===t||t.call(n,{args:o,reason:"imperative-api"}),this.setState(bs)}}componentDidCatch(e,t){var n,r;null===(n=(r=this.props).onError)||void 0===n||n.call(r,e,t)}componentDidUpdate(e,t){const{didCatch:n}=this.state,{resetKeys:r}=this.props;var o,i;n&&null!==t.error&&function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.length!==t.length||e.some((e,n)=>!Object.is(e,t[n]))}(e.resetKeys,r)&&(null===(o=(i=this.props).onReset)||void 0===o||o.call(i,{next:r,prev:e.resetKeys,reason:"keys"}),this.setState(bs))}render(){const{children:e,fallbackRender:n,FallbackComponent:r,fallback:o}=this.props,{didCatch:i,error:a}=this.state;let c=e;if(i){const e={error:a,resetErrorBoundary:this.resetErrorBoundary};if("function"==typeof n)c=n(e);else if(r)c=(0,t.createElement)(r,e);else{if(void 0===o)throw a;c=o}}return(0,t.createElement)(gs.Provider,{value:{didCatch:i,error:a,resetErrorBoundary:this.resetErrorBoundary}},c)}}const vs=e=>{let{children:t}=e;const r=E();return n().createElement(ys,{FallbackComponent:()=>null,onError:(e,t)=>{r&&(a(e,{errorInfo:t,boundary:!0}),r.error(v.PLAYCARD_EXCEPTION,e))}},t)},xs=function(){return n().createElement(w,null,n().createElement(vs,null,n().createElement(N,null,n().createElement(hs,null))))},ws=(0,t.createContext)({}),Es=({translations:e={},children:t})=>n().createElement(ws.Provider,{value:e},t),Cs=(0,t.createContext)(Object.assign({},_.DEFAULT_USER_LOCATION_DATA)),Os=({children:e})=>{if("undefined"==typeof window)return n().createElement(Cs.Provider,{value:_.DEFAULT_USER_LOCATION_DATA},e);const{userLocation:t}=window.webShellClient,r=t.get();return n().createElement(Cs.Provider,{value:r},e)},ks=({children:e,locale:t,translations:r={}})=>n().createElement(Os,null,n().createElement(Es,{translations:r},n().createElement(R,{locale:t},e)));function Ss(e){return n().createElement(ks,e,n().createElement(xs,e))}})(),i})());
//# sourceMappingURL=index.umd.js.map