/*! For license information please see index.umd.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["React","ReactDOM"],t):"object"==typeof exports?exports["error-modal"]=t(require("React"),require("ReactDOM")):e["error-modal"]=t(e.React,e.ReactDOM)}(self,((e,t)=>(()=>{var r={54:(e,t,r)=>{"use strict";r.r(t),r.d(t,{focusable:()=>w,getTabIndex:()=>p,isFocusable:()=>k,isTabbable:()=>C,tabbable:()=>E});var o=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],n=o.join(","),i="undefined"==typeof Element,a=i?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,s=!i&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},l=function e(t,r){var o;void 0===r&&(r=!0);var n=null==t||null===(o=t.getAttribute)||void 0===o?void 0:o.call(t,"inert");return""===n||"true"===n||r&&t&&e(t.parentNode)},c=function(e,t,r){if(l(e))return[];var o=Array.prototype.slice.apply(e.querySelectorAll(n));return t&&a.call(e,n)&&o.unshift(e),o.filter(r)},d=function e(t,r,o){for(var i=[],s=Array.from(t);s.length;){var c=s.shift();if(!l(c,!1))if("SLOT"===c.tagName){var d=c.assignedElements(),u=e(d.length?d:c.children,!0,o);o.flatten?i.push.apply(i,u):i.push({scopeParent:c,candidates:u})}else{a.call(c,n)&&o.filter(c)&&(r||!t.includes(c))&&i.push(c);var p=c.shadowRoot||"function"==typeof o.getShadowRoot&&o.getShadowRoot(c),m=!l(p,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(c));if(p&&m){var f=e(!0===p?c.children:p.children,!0,o);o.flatten?i.push.apply(i,f):i.push({scopeParent:c,candidates:f})}else s.unshift.apply(s,c.children)}}return i},u=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},p=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,r=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===r||"true"===r}(e))&&!u(e)?0:e.tabIndex},m=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},f=function(e){return"INPUT"===e.tagName},h=function(e){var t=e.getBoundingClientRect(),r=t.width,o=t.height;return 0===r&&0===o},b=function(e,t){return!(t.disabled||l(t)||function(e){return f(e)&&"hidden"===e.type}(t)||function(e,t){var r=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var n=a.call(e,"details>summary:first-of-type")?e.parentElement:e;if(a.call(n,"details:not([open]) *"))return!0;if(r&&"full"!==r&&"legacy-full"!==r){if("non-zero-area"===r)return h(e)}else{if("function"==typeof o){for(var i=e;e;){var l=e.parentElement,c=s(e);if(l&&!l.shadowRoot&&!0===o(l))return h(e);e=e.assignedSlot?e.assignedSlot:l||c===e.ownerDocument?l:c.host}e=i}if(function(e){var t,r,o,n,i=e&&s(e),a=null===(t=i)||void 0===t?void 0:t.host,l=!1;if(i&&i!==e)for(l=!!(null!==(r=a)&&void 0!==r&&null!==(o=r.ownerDocument)&&void 0!==o&&o.contains(a)||null!=e&&null!==(n=e.ownerDocument)&&void 0!==n&&n.contains(e));!l&&a;){var c,d,u;l=!(null===(d=a=null===(c=i=s(a))||void 0===c?void 0:c.host)||void 0===d||null===(u=d.ownerDocument)||void 0===u||!u.contains(a))}return l}(e))return!e.getClientRects().length;if("legacy-full"!==r)return!0}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var r=0;r<t.children.length;r++){var o=t.children.item(r);if("LEGEND"===o.tagName)return!!a.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},v=function(e,t){return!(function(e){return function(e){return f(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,r=e.form||s(e),o=function(e){return r.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var n=function(e,t){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===t)return e[r]}(t,e.form);return!n||n===e}(e)}(t)||p(t)<0||!b(e,t))},g=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},y=function e(t){var r=[],o=[];return t.forEach((function(t,n){var i=!!t.scopeParent,a=i?t.scopeParent:t,s=function(e,t){var r=p(e);return r<0&&t&&!u(e)?0:r}(a,i),l=i?e(t.candidates):a;0===s?i?r.push.apply(r,l):r.push(a):o.push({documentOrder:n,tabIndex:s,item:t,isScope:i,content:l})})),o.sort(m).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(r)},E=function(e,t){var r;return r=(t=t||{}).getShadowRoot?d([e],t.includeContainer,{filter:v.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:g}):c(e,t.includeContainer,v.bind(null,t)),y(r)},w=function(e,t){return(t=t||{}).getShadowRoot?d([e],t.includeContainer,{filter:b.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):c(e,t.includeContainer,b.bind(null,t))},C=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==a.call(e,n)&&v(t,e)},x=o.concat("iframe").join(","),k=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==a.call(e,x)&&b(t,e)}},83:function(e,t,r){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(326),t)},216:(e,t,r)=>{"use strict";r.r(t),r.d(t,{createFocusTrap:()=>N});var o=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],n=o.join(","),i="undefined"==typeof Element,a=i?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,s=!i&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},l=function(e,t,r){var o=Array.prototype.slice.apply(e.querySelectorAll(n));return t&&a.call(e,n)&&o.unshift(e),o.filter(r)},c=function e(t,r,o){for(var i=[],s=Array.from(t);s.length;){var l=s.shift();if("SLOT"===l.tagName){var c=l.assignedElements(),d=e(c.length?c:l.children,!0,o);o.flatten?i.push.apply(i,d):i.push({scope:l,candidates:d})}else{a.call(l,n)&&o.filter(l)&&(r||!t.includes(l))&&i.push(l);var u=l.shadowRoot||"function"==typeof o.getShadowRoot&&o.getShadowRoot(l),p=!o.shadowRootFilter||o.shadowRootFilter(l);if(u&&p){var m=e(!0===u?l.children:u.children,!0,o);o.flatten?i.push.apply(i,m):i.push({scope:l,candidates:m})}else s.unshift.apply(s,l.children)}}return i},d=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},u=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},p=function(e){return"INPUT"===e.tagName},m=function(e){var t=e.getBoundingClientRect(),r=t.width,o=t.height;return 0===r&&0===o},f=function(e,t){return!(t.disabled||function(e){return p(e)&&"hidden"===e.type}(t)||function(e,t){var r=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var n=a.call(e,"details>summary:first-of-type")?e.parentElement:e;if(a.call(n,"details:not([open]) *"))return!0;var i=s(e).host,l=(null==i?void 0:i.ownerDocument.contains(i))||e.ownerDocument.contains(e);if(r&&"full"!==r){if("non-zero-area"===r)return m(e)}else{if("function"==typeof o){for(var c=e;e;){var d=e.parentElement,u=s(e);if(d&&!d.shadowRoot&&!0===o(d))return m(e);e=e.assignedSlot?e.assignedSlot:d||u===e.ownerDocument?d:u.host}e=c}if(l)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var r=0;r<t.children.length;r++){var o=t.children.item(r);if("LEGEND"===o.tagName)return!!a.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},h=function(e,t){return!(function(e){return function(e){return p(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,r=e.form||s(e),o=function(e){return r.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var n=function(e,t){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===t)return e[r]}(t,e.form);return!n||n===e}(e)}(t)||d(t)<0||!f(e,t))},b=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},v=function e(t){var r=[],o=[];return t.forEach((function(t,n){var i=!!t.scope,a=i?t.scope:t,s=d(a,i),l=i?e(t.candidates):a;0===s?i?r.push.apply(r,l):r.push(a):o.push({documentOrder:n,tabIndex:s,item:t,isScope:i,content:l})})),o.sort(u).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(r)},g=function(e,t){var r;return r=(t=t||{}).getShadowRoot?c([e],t.includeContainer,{filter:h.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:b}):l(e,t.includeContainer,h.bind(null,t)),v(r)},y=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==a.call(e,n)&&h(t,e)},E=o.concat("iframe").join(","),w=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==a.call(e,E)&&f(t,e)};function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O,S=(O=[],{activateTrap:function(e){if(O.length>0){var t=O[O.length-1];t!==e&&t.pause()}var r=O.indexOf(e);-1===r||O.splice(r,1),O.push(e)},deactivateTrap:function(e){var t=O.indexOf(e);-1!==t&&O.splice(t,1),O.length>0&&O[O.length-1].unpause()}}),A=function(e){return setTimeout(e,0)},T=function(e,t){var r=-1;return e.every((function(e,o){return!t(e)||(r=o,!1)})),r},_=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return"function"==typeof e?e.apply(void 0,r):e},R=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},N=function(e,t){var r,o=(null==t?void 0:t.document)||document,n=x({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},a=function(e,t,r){return e&&void 0!==e[t]?e[t]:n[r||t]},s=function(e){return i.containerGroups.findIndex((function(t){var r=t.container,o=t.tabbableNodes;return r.contains(e)||o.find((function(t){return t===e}))}))},d=function(e){var t=n[e];if("function"==typeof t){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];t=t.apply(void 0,i)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var s=t;if("string"==typeof t&&!(s=o.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return s},u=function(){var e=d("initialFocus");if(!1===e)return!1;if(void 0===e)if(s(o.activeElement)>=0)e=o.activeElement;else{var t=i.tabbableGroups[0];e=t&&t.firstTabbableNode||d("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},p=function(){if(i.containerGroups=i.containers.map((function(e){var t,r,o=g(e,n.tabbableOptions),i=(t=e,(r=(r=n.tabbableOptions)||{}).getShadowRoot?c([t],r.includeContainer,{filter:f.bind(null,r),flatten:!0,getShadowRoot:r.getShadowRoot}):l(t,r.includeContainer,f.bind(null,r)));return{container:e,tabbableNodes:o,focusableNodes:i,firstTabbableNode:o.length>0?o[0]:null,lastTabbableNode:o.length>0?o[o.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=i.findIndex((function(t){return t===e}));if(!(r<0))return t?i.slice(r+1).find((function(e){return y(e,n.tabbableOptions)})):i.slice(0,r).reverse().find((function(e){return y(e,n.tabbableOptions)}))}}})),i.tabbableGroups=i.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),i.tabbableGroups.length<=0&&!d("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},m=function e(t){!1!==t&&t!==o.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!n.preventScroll}),i.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(u()))},h=function(e){var t=d("setReturnFocus",e);return t||!1!==t&&e},b=function(e){var t=R(e);s(t)>=0||(_(n.clickOutsideDeactivates,e)?r.deactivate({returnFocus:n.returnFocusOnDeactivate&&!w(t,n.tabbableOptions)}):_(n.allowOutsideClick,e)||e.preventDefault())},v=function(e){var t=R(e),r=s(t)>=0;r||t instanceof Document?r&&(i.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),m(i.mostRecentlyFocusedNode||u()))},E=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==_(n.escapeDeactivates,e))return e.preventDefault(),void r.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=R(e);p();var r=null;if(i.tabbableGroups.length>0){var o=s(t),a=o>=0?i.containerGroups[o]:void 0;if(o<0)r=e.shiftKey?i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:i.tabbableGroups[0].firstTabbableNode;else if(e.shiftKey){var l=T(i.tabbableGroups,(function(e){var r=e.firstTabbableNode;return t===r}));if(l<0&&(a.container===t||w(t,n.tabbableOptions)&&!y(t,n.tabbableOptions)&&!a.nextTabbableNode(t,!1))&&(l=o),l>=0){var c=0===l?i.tabbableGroups.length-1:l-1;r=i.tabbableGroups[c].lastTabbableNode}}else{var u=T(i.tabbableGroups,(function(e){var r=e.lastTabbableNode;return t===r}));if(u<0&&(a.container===t||w(t,n.tabbableOptions)&&!y(t,n.tabbableOptions)&&!a.nextTabbableNode(t))&&(u=o),u>=0){var f=u===i.tabbableGroups.length-1?0:u+1;r=i.tabbableGroups[f].firstTabbableNode}}}else r=d("fallbackFocus");r&&(e.preventDefault(),m(r))}(e)},C=function(e){var t=R(e);s(t)>=0||_(n.clickOutsideDeactivates,e)||_(n.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},k=function(){if(i.active)return S.activateTrap(r),i.delayInitialFocusTimer=n.delayInitialFocus?A((function(){m(u())})):m(u()),o.addEventListener("focusin",v,!0),o.addEventListener("mousedown",b,{capture:!0,passive:!1}),o.addEventListener("touchstart",b,{capture:!0,passive:!1}),o.addEventListener("click",C,{capture:!0,passive:!1}),o.addEventListener("keydown",E,{capture:!0,passive:!1}),r},O=function(){if(i.active)return o.removeEventListener("focusin",v,!0),o.removeEventListener("mousedown",b,!0),o.removeEventListener("touchstart",b,!0),o.removeEventListener("click",C,!0),o.removeEventListener("keydown",E,!0),r};return(r={get active(){return i.active},get paused(){return i.paused},activate:function(e){if(i.active)return this;var t=a(e,"onActivate"),r=a(e,"onPostActivate"),n=a(e,"checkCanFocusTrap");n||p(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=o.activeElement,t&&t();var s=function(){n&&p(),k(),r&&r()};return n?(n(i.containers.concat()).then(s,s),this):(s(),this)},deactivate:function(e){if(!i.active)return this;var t=x({onDeactivate:n.onDeactivate,onPostDeactivate:n.onPostDeactivate,checkCanReturnFocus:n.checkCanReturnFocus},e);clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,O(),i.active=!1,i.paused=!1,S.deactivateTrap(r);var o=a(t,"onDeactivate"),s=a(t,"onPostDeactivate"),l=a(t,"checkCanReturnFocus"),c=a(t,"returnFocus","returnFocusOnDeactivate");o&&o();var d=function(){A((function(){c&&m(h(i.nodeFocusedBeforeActivation)),s&&s()}))};return c&&l?(l(h(i.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(){return i.paused||!i.active||(i.paused=!0,O()),this},unpause:function(){return i.paused&&i.active?(i.paused=!1,p(),k(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return i.containers=t.map((function(e){return"string"==typeof e?o.querySelector(e):e})),i.active&&p(),this}}).updateContainerElements(e),r}},326:(e,t)=>{"use strict";var r,o,n,i,a,s,l,c,d,u,p,m;Object.defineProperty(t,"__esModule",{value:!0}),t.DISABLE_GUEST_SESSION_IFRAME=t.DEFAULT_USER_LOCATION_DATA=t.DEFAULT_LOCALE_DATA=t.DEFAULT_WEB_SHELL_CLIENT_INFO=t.ANALYTICS_SCRIPT=t.PRIVACY_CORE_SCRIPT=t.CN_GUEST_SESSION_SCRIPT=t.DATA_CAPTURE_SCRIPT=t.MODAL_ROOT_ID=t.VENDOR_SCRIPT_REACT_DOM_URL=t.VENDOR_SCRIPT_REACT_URL=t.HOST_NAME=t.V3=t.NAV_VERSION=t.ENABLE_ASYNC_CHAT=t.KEEPALIVE=t.PRE_FETCH_DEPENDENCIES=void 0,t.PRE_FETCH_DEPENDENCIES={REACT:"React",REACT_DOM:"ReactDOM",REMOTE:"Remote"},t.KEEPALIVE={HTTP_KEEPALIVE_TIMEOUT:61e3,HTTP_HEADERS_TIMEOUT:65e3},t.ENABLE_ASYNC_CHAT=null!==(o=null!==(r={RECO_ASSET_PREFIX:"//www.nike.com/static/uxf/error-modal"}.NEXT_PUBLIC_ENABLE_ASYNC_CHAT)&&void 0!==r?r:{RECO_ASSET_PREFIX:"//www.nike.com/static/uxf/error-modal"}.ENABLE_ASYNC_CHAT)&&void 0!==o?o:"false",t.NAV_VERSION="navVersion",t.V3="v3",t.HOST_NAME=null!==(i=null!==(n={RECO_ASSET_PREFIX:"//www.nike.com/static/uxf/error-modal"}.WS_HOST_NAME)&&void 0!==n?n:{RECO_ASSET_PREFIX:"//www.nike.com/static/uxf/error-modal"}.NEXT_PUBLIC_HOST_NAME)&&void 0!==i?i:{RECO_ASSET_PREFIX:"//www.nike.com/static/uxf/error-modal"}.HOST_NAME,t.VENDOR_SCRIPT_REACT_URL=`https://${t.HOST_NAME}/assets/vendor/react/18.3.1/react.production.min.js`,t.VENDOR_SCRIPT_REACT_DOM_URL=`https://${t.HOST_NAME}/assets/vendor/react-dom/18.3.1/react-dom.production.min.js`,t.MODAL_ROOT_ID="modal-root",t.DATA_CAPTURE_SCRIPT=null!==(s=null!==(a={RECO_ASSET_PREFIX:"//www.nike.com/static/uxf/error-modal"}.WS_DATA_CAPTURE_SCRIPT)&&void 0!==a?a:{RECO_ASSET_PREFIX:"//www.nike.com/static/uxf/error-modal"}.NEXT_PUBLIC_DATA_CAPTURE_SCRIPT)&&void 0!==s?s:{RECO_ASSET_PREFIX:"//www.nike.com/static/uxf/error-modal"}.DATA_CAPTURE_SCRIPT,t.CN_GUEST_SESSION_SCRIPT=null!==(l={RECO_ASSET_PREFIX:"//www.nike.com/static/uxf/error-modal"}.NEXT_PUBLIC_CN_GUEST_SESSION_SCRIPT)&&void 0!==l?l:{RECO_ASSET_PREFIX:"//www.nike.com/static/uxf/error-modal"}.CN_GUEST_SESSION_SCRIPT,t.PRIVACY_CORE_SCRIPT=null!==(c={RECO_ASSET_PREFIX:"//www.nike.com/static/uxf/error-modal"}.PRIVACY_CORE_SCRIPT)&&void 0!==c?c:`https://${t.HOST_NAME}/static/privacy-core/public/privacy-core.js`,t.ANALYTICS_SCRIPT=null!==(u=null!==(d={RECO_ASSET_PREFIX:"//www.nike.com/static/uxf/error-modal"}.WS_ANALYTICS_SCRIPT)&&void 0!==d?d:{RECO_ASSET_PREFIX:"//www.nike.com/static/uxf/error-modal"}.NEXT_PUBLIC_ANALYTICS_SCRIPT)&&void 0!==u?u:{RECO_ASSET_PREFIX:"//www.nike.com/static/uxf/error-modal"}.ANALYTICS_SCRIPT,t.DEFAULT_WEB_SHELL_CLIENT_INFO={identityProvider:null},t.DEFAULT_LOCALE_DATA={cloudUrlFragment:"",country:"us",countryName:"United States",countryNames:{en:"United States"},currency:"USD",currencySymbol:"$",default:!0,hreflang:"en-US",intl:"en-US",langRegion:"en-US",language:"en",urlParam:"en",translationsLanguage:"en-US"},t.DEFAULT_USER_LOCATION_DATA={country:"",state:"",latitude:"",longitude:""},t.DISABLE_GUEST_SESSION_IFRAME=null!==(m=null!==(p={RECO_ASSET_PREFIX:"//www.nike.com/static/uxf/error-modal"}.NEXT_PUBLIC_DISABLE_GUEST_SESSION_IFRAME)&&void 0!==p?p:{RECO_ASSET_PREFIX:"//www.nike.com/static/uxf/error-modal"}.DISABLE_GUEST_SESSION_IFRAME)&&void 0!==m?m:"false"},556:(e,t,r)=>{e.exports=r(694)()},694:(e,t,r)=>{"use strict";var o=r(925);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},708:(e,t,r)=>{"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function n(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var l=r(883),c=r(845),d=r(556),u=r(216).createFocusTrap,p=r(54).isFocusable,m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(f,e);var t,r,d,u,m=(d=f,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(d);if(u){var r=s(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}(this,e)});function f(e){var t,r,o,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),n=function(e){var t,r=null!==(t=this.internalOptions[e])&&void 0!==t?t:this.originalOptions[e];if("function"==typeof r){for(var o=arguments.length,n=new Array(o>1?o-1:0),i=1;i<o;i++)n[i-1]=arguments[i];r=r.apply(void 0,n)}if(!0===r&&(r=void 0),!r){if(void 0===r||!1===r)return r;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var a,s=r;if("string"==typeof r&&!(s=null===(a=this.getDocument())||void 0===a?void 0:a.querySelector(r)))throw new Error("`".concat(e,"` as selector refers to no known node"));return s},(o="getNodeForOption")in(r=a(t=m.call(this,e)))?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n,t.handleDeactivate=t.handleDeactivate.bind(a(t)),t.handlePostDeactivate=t.handlePostDeactivate.bind(a(t)),t.handleClickOutsideDeactivates=t.handleClickOutsideDeactivates.bind(a(t)),t.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:t.handleDeactivate,onPostDeactivate:t.handlePostDeactivate,clickOutsideDeactivates:t.handleClickOutsideDeactivates},t.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var i=e.focusTrapOptions;for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&("returnFocusOnDeactivate"!==s&&"onDeactivate"!==s&&"onPostDeactivate"!==s&&"checkCanReturnFocus"!==s&&"clickOutsideDeactivates"!==s?t.internalOptions[s]=i[s]:t.originalOptions[s]=i[s]);return t.outsideClick=null,t.focusTrapElements=e.containerElements||[],t.updatePreviousElement(),t}return t=f,(r=[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||("undefined"!=typeof document?document:void 0)}},{key:"getReturnFocusNode",value:function(){var e=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return e||!1!==e&&this.previouslyFocusedElement}},{key:"updatePreviousElement",value:function(){var e=this.getDocument();e&&(this.previouslyFocusedElement=e.activeElement)}},{key:"deactivateTrap",value:function(){this.focusTrap&&this.focusTrap.active&&this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(e){var t="function"==typeof this.originalOptions.clickOutsideDeactivates?this.originalOptions.clickOutsideDeactivates.call(null,e):this.originalOptions.clickOutsideDeactivates;return t&&(this.outsideClick={target:e.target,allowDeactivation:t}),t}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var e=this,t=function(){var t=e.getReturnFocusNode(),r=!(!e.originalOptions.returnFocusOnDeactivate||null==t||!t.focus||e.outsideClick&&(!e.outsideClick.allowDeactivation||p(e.outsideClick.target,e.internalOptions.tabbableOptions))),o=e.internalOptions.preventScroll,n=void 0!==o&&o;r&&t.focus({preventScroll:n}),e.originalOptions.onPostDeactivate&&e.originalOptions.onPostDeactivate.call(null),e.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(t,t):t()}},{key:"setupFocusTrap",value:function(){if(!this.focusTrap){var e=this.focusTrapElements.map(c.findDOMNode);e.some(Boolean)&&(this.focusTrap=this.props._createFocusTrap(e,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(e){if(this.focusTrap){e.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var t=!e.active&&this.props.active,r=e.active&&!this.props.active,o=!e.paused&&this.props.paused,n=e.paused&&!this.props.paused;if(t&&(this.updatePreviousElement(),this.focusTrap.activate()),r)return void this.deactivateTrap();o&&this.focusTrap.pause(),n&&this.focusTrap.unpause()}else e.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var e=this,t=this.props.children?l.Children.only(this.props.children):void 0;if(t){if(t.type&&t.type===l.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");return l.cloneElement(t,{ref:function(r){var o=e.props.containerElements;t&&("function"==typeof t.ref?t.ref(r):t.ref&&(t.ref.current=r)),e.focusTrapElements=o||[r]}})}return null}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),f}(l.Component),f="undefined"==typeof Element?Function:Element;m.propTypes={active:d.bool,paused:d.bool,focusTrapOptions:d.shape({document:d.object,onActivate:d.func,onPostActivate:d.func,checkCanFocusTrap:d.func,onDeactivate:d.func,onPostDeactivate:d.func,checkCanReturnFocus:d.func,initialFocus:d.oneOfType([d.instanceOf(f),d.string,d.bool,d.func]),fallbackFocus:d.oneOfType([d.instanceOf(f),d.string,d.func]),escapeDeactivates:d.oneOfType([d.bool,d.func]),clickOutsideDeactivates:d.oneOfType([d.bool,d.func]),returnFocusOnDeactivate:d.bool,setReturnFocus:d.oneOfType([d.instanceOf(f),d.string,d.bool,d.func]),allowOutsideClick:d.oneOfType([d.bool,d.func]),preventScroll:d.bool,tabbableOptions:d.shape({displayCheck:d.oneOf(["full","non-zero-area","none"]),getShadowRoot:d.oneOfType([d.bool,d.func])})}),containerElements:d.arrayOf(d.instanceOf(f)),children:d.oneOfType([d.element,d.instanceOf(f)])},m.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:u},e.exports=m},845:e=>{"use strict";e.exports=t},883:t=>{"use strict";t.exports=e},925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return r[e].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";n.r(i),n.d(i,{default:()=>Ht});var e=n(883),t=n.n(e);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t,o){return(t=function(e){var t=function(e){if("object"!=r(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,"string");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const a=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}};var s=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;const l=a((function(e){return s.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function d(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,c(e,t)}var u=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t,r=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(r,t),this.tags.push(r)}var o=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(o);try{var i=105===e.charCodeAt(1)&&64===e.charCodeAt(0);n.insertRule(e,i?0:n.cssRules.length)}catch(e){}}else o.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}();const p=function(e){function t(e,o,l,c,p){for(var m,f,h,b,E,C=0,x=0,k=0,O=0,S=0,P=0,D=h=m=0,M=0,$=0,F=0,B=0,j=l.length,U=j-1,z="",G="",H="",W="";M<j;){if(f=l.charCodeAt(M),M===U&&0!==x+O+k+C&&(0!==x&&(f=47===x?10:47),O=k=C=0,j++,U++),0===x+O+k+C){if(M===U&&(0<$&&(z=z.replace(u,"")),0<z.trim().length)){switch(f){case 32:case 9:case 59:case 13:case 10:break;default:z+=l.charAt(M)}f=59}switch(f){case 123:for(m=(z=z.trim()).charCodeAt(0),h=1,B=++M;M<j;){switch(f=l.charCodeAt(M)){case 123:h++;break;case 125:h--;break;case 47:switch(f=l.charCodeAt(M+1)){case 42:case 47:e:{for(D=M+1;D<U;++D)switch(l.charCodeAt(D)){case 47:if(42===f&&42===l.charCodeAt(D-1)&&M+2!==D){M=D+1;break e}break;case 10:if(47===f){M=D+1;break e}}M=D}}break;case 91:f++;case 40:f++;case 34:case 39:for(;M++<U&&l.charCodeAt(M)!==f;);}if(0===h)break;M++}if(h=l.substring(B,M),0===m&&(m=(z=z.replace(d,"").trim()).charCodeAt(0)),64===m){switch(0<$&&(z=z.replace(u,"")),f=z.charCodeAt(1)){case 100:case 109:case 115:case 45:$=o;break;default:$=N}if(B=(h=t(o,$,h,f,p+1)).length,0<I&&(E=s(3,h,$=r(N,z,F),o,T,A,B,f,p,c),z=$.join(""),void 0!==E&&0===(B=(h=E.trim()).length)&&(f=0,h="")),0<B)switch(f){case 115:z=z.replace(w,a);case 100:case 109:case 45:h=z+"{"+h+"}";break;case 107:h=(z=z.replace(v,"$1 $2"))+"{"+h+"}",h=1===R||2===R&&i("@"+h,3)?"@-webkit-"+h+"@"+h:"@"+h;break;default:h=z+h,112===c&&(G+=h,h="")}else h=""}else h=t(o,r(o,z,F),h,c,p+1);H+=h,h=F=$=D=m=0,z="",f=l.charCodeAt(++M);break;case 125:case 59:if(1<(B=(z=(0<$?z.replace(u,""):z).trim()).length))switch(0===D&&(m=z.charCodeAt(0),45===m||96<m&&123>m)&&(B=(z=z.replace(" ",":")).length),0<I&&void 0!==(E=s(1,z,o,e,T,A,G.length,c,p,c))&&0===(B=(z=E.trim()).length)&&(z="\0\0"),m=z.charCodeAt(0),f=z.charCodeAt(1),m){case 0:break;case 64:if(105===f||99===f){W+=z+l.charAt(M);break}default:58!==z.charCodeAt(B-1)&&(G+=n(z,m,f,z.charCodeAt(2)))}F=$=D=m=0,z="",f=l.charCodeAt(++M)}}switch(f){case 13:case 10:47===x?x=0:0===1+m&&107!==c&&0<z.length&&($=1,z+="\0"),0<I*L&&s(0,z,o,e,T,A,G.length,c,p,c),A=1,T++;break;case 59:case 125:if(0===x+O+k+C){A++;break}default:switch(A++,b=l.charAt(M),f){case 9:case 32:if(0===O+C+x)switch(S){case 44:case 58:case 9:case 32:b="";break;default:32!==f&&(b=" ")}break;case 0:b="\\0";break;case 12:b="\\f";break;case 11:b="\\v";break;case 38:0===O+x+C&&($=F=1,b="\f"+b);break;case 108:if(0===O+x+C+_&&0<D)switch(M-D){case 2:112===S&&58===l.charCodeAt(M-3)&&(_=S);case 8:111===P&&(_=P)}break;case 58:0===O+x+C&&(D=M);break;case 44:0===x+k+O+C&&($=1,b+="\r");break;case 34:case 39:0===x&&(O=O===f?0:0===O?f:O);break;case 91:0===O+x+k&&C++;break;case 93:0===O+x+k&&C--;break;case 41:0===O+x+C&&k--;break;case 40:0===O+x+C&&(0===m&&(2*S+3*P==533||(m=1)),k++);break;case 64:0===x+k+O+C+D+h&&(h=1);break;case 42:case 47:if(!(0<O+C+k))switch(x){case 0:switch(2*f+3*l.charCodeAt(M+1)){case 235:x=47;break;case 220:B=M,x=42}break;case 42:47===f&&42===S&&B+2!==M&&(33===l.charCodeAt(B+2)&&(G+=l.substring(B,M+1)),b="",x=0)}}0===x&&(z+=b)}P=S,S=f,M++}if(0<(B=G.length)){if($=o,0<I&&void 0!==(E=s(2,G,$,e,T,A,B,c,p,c))&&0===(G=E).length)return W+G+H;if(G=$.join(",")+"{"+G+"}",0!=R*_){switch(2!==R||i(G,2)||(_=0),_){case 111:G=G.replace(y,":-moz-$1")+G;break;case 112:G=G.replace(g,"::-webkit-input-$1")+G.replace(g,"::-moz-$1")+G.replace(g,":-ms-input-$1")+G}_=0}}return W+G+H}function r(e,t,r){var n=t.trim().split(h);t=n;var i=n.length,a=e.length;switch(a){case 0:case 1:var s=0;for(e=0===a?"":e[0]+" ";s<i;++s)t[s]=o(e,t[s],r).trim();break;default:var l=s=0;for(t=[];s<i;++s)for(var c=0;c<a;++c)t[l++]=o(e[c]+" ",n[s],r).trim()}return t}function o(e,t,r){var o=t.charCodeAt(0);switch(33>o&&(o=(t=t.trim()).charCodeAt(0)),o){case 38:return t.replace(b,"$1"+e.trim());case 58:return e.trim()+t.replace(b,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(b,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function n(e,t,r,o){var a=e+";",s=2*t+3*r+4*o;if(944===s){e=a.indexOf(":",9)+1;var l=a.substring(e,a.length-1).trim();return l=a.substring(0,e).trim()+l+";",1===R||2===R&&i(l,1)?"-webkit-"+l+l:l}if(0===R||2===R&&!i(a,1))return a;switch(s){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(S,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(l=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+l+a;case 1005:return m.test(a)?a.replace(p,":-webkit-")+a.replace(p,":-moz-")+a:a;case 1e3:switch(t=(l=a.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(t)){case 226:l=a.replace(E,"tb");break;case 232:l=a.replace(E,"tb-rl");break;case 220:l=a.replace(E,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+l+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(t=(a=e).length-10,s=(l=(33===a.charCodeAt(t)?a.substring(0,t):a).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:a=a.replace(l,"-webkit-"+l)+";"+a;break;case 207:case 102:a=a.replace(l,"-webkit-"+(102<s?"inline-":"")+"box")+";"+a.replace(l,"-webkit-"+l)+";"+a.replace(l,"-ms-"+l+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return l=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+l+"-ms-flex-"+l+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(x,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(x,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===O.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?n(e.replace("stretch","fill-available"),t,r,o).replace(":fill-available",":stretch"):a.replace(l,"-webkit-"+l)+a.replace(l,"-moz-"+l.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,211===r+o&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(f,"$1-webkit-$2")+a}return a}function i(e,t){var r=e.indexOf(1===t?":":"{"),o=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),D(2!==t?o:o.replace(k,"$1"),r,t)}function a(e,t){var r=n(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(C," or ($1)").substring(4):"("+t+")"}function s(e,t,r,o,n,i,a,s,l,d){for(var u,p=0,m=t;p<I;++p)switch(u=P[p].call(c,e,m,r,o,n,i,a,s,l,d)){case void 0:case!1:case!0:case null:break;default:m=u}if(m!==t)return m}function l(e){return void 0!==(e=e.prefix)&&(D=null,e?"function"!=typeof e?R=1:(R=2,D=e):R=0),l}function c(e,r){var o=e;if(33>o.charCodeAt(0)&&(o=o.trim()),o=[o],0<I){var n=s(-1,r,o,o,T,A,0,0,0,0);void 0!==n&&"string"==typeof n&&(r=n)}var i=t(N,o,r,0,0);return 0<I&&void 0!==(n=s(-2,i,o,o,T,A,i.length,0,0,0))&&(i=n),_=0,A=T=1,i}var d=/^\0+/g,u=/[\0\r\f]/g,p=/: */g,m=/zoo|gra/,f=/([,: ])(transform)/g,h=/,\r+?/g,b=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,y=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,x=/-self|flex-/g,k=/[^]*?(:[rp][el]a[\w-]+)[^]*/,O=/stretch|:\s*\w+\-(?:conte|avail)/,S=/([^-])(image-set\()/,A=1,T=1,_=0,R=1,N=[],P=[],I=0,D=null,L=0;return c.use=function e(t){switch(t){case void 0:case null:I=P.length=0;break;default:if("function"==typeof t)P[I++]=t;else if("object"==typeof t)for(var r=0,o=t.length;r<o;++r)e(t[r]);else L=0|!!t}return e},c.set=l,void 0!==e&&l(e),c};var m="/*|*/",f=m+"}";function h(e){e&&b.current.insert(e+"}")}var b={current:null},v=function(e,t,r,o,n,i,a,s,l,c){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return b.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===s)return t+m;break;case 3:switch(s){case 102:case 112:return b.current.insert(r[0]+t),"";default:return t+(0===c?m:"")}case-2:t.split(f).forEach(h)}};function g(e,t,r){var o="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]):o+=r+" "})),o}var y=function(e,t,r){var o=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[o]&&(e.registered[o]=t.styles),void 0===e.inserted[t.name]){var n=t;do{e.insert("."+o,n,e.sheet,!0),n=n.next}while(void 0!==n)}};const E=function(e){for(var t,r=0,o=0,n=e.length;n>=4;++o,n-=4)t=1540483477*(65535&(t=255&e.charCodeAt(o)|(255&e.charCodeAt(++o))<<8|(255&e.charCodeAt(++o))<<16|(255&e.charCodeAt(++o))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(n){case 3:r^=(255&e.charCodeAt(o+2))<<16;case 2:r^=(255&e.charCodeAt(o+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(o)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},w={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var C=/[A-Z]|^ms/g,x=/_EMO_([^_]+?)_([^]*?)_EMO_/g,k=function(e){return 45===e.charCodeAt(1)},O=function(e){return null!=e&&"boolean"!=typeof e},S=a((function(e){return k(e)?e:e.replace(C,"-$&").toLowerCase()})),A=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(x,(function(e,t,r){return _={name:t,styles:r,next:_},t}))}return 1===w[e]||k(e)||"number"!=typeof t||0===t?t:t+"px"};function T(e,t,r,o){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return _={name:r.name,styles:r.styles,next:_},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)_={name:n.name,styles:n.styles,next:_},n=n.next;return r.styles+";"}return function(e,t,r){var o="";if(Array.isArray(r))for(var n=0;n<r.length;n++)o+=T(e,t,r[n],!1);else for(var i in r){var a=r[i];if("object"!=typeof a)null!=t&&void 0!==t[a]?o+=i+"{"+t[a]+"}":O(a)&&(o+=S(i)+":"+A(i,a)+";");else if(!Array.isArray(a)||"string"!=typeof a[0]||null!=t&&void 0!==t[a[0]]){var s=T(e,t,a,!1);switch(i){case"animation":case"animationName":o+=S(i)+":"+s+";";break;default:o+=i+"{"+s+"}"}}else for(var l=0;l<a.length;l++)O(a[l])&&(o+=S(i)+":"+A(i,a[l])+";")}return o}(e,t,r);case"function":if(void 0!==e){var i=_,a=r(e);return _=i,T(e,t,a,o)}}if(null==t)return r;var s=t[r];return void 0===s||o?r:s}var _,R=/label:\s*([^\s;\n{]+)\s*;/g,N=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o=!0,n="";_=void 0;var i=e[0];null==i||void 0===i.raw?(o=!1,n+=T(r,t,i,!1)):n+=i[0];for(var a=1;a<e.length;a++)n+=T(r,t,e[a],46===n.charCodeAt(n.length-1)),o&&(n+=i[a]);R.lastIndex=0;for(var s,l="";null!==(s=R.exec(n));)l+="-"+s[1];return{name:E(n)+l,styles:n,next:_}};const P=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return N(t)};var I=(0,e.createContext)("undefined"!=typeof HTMLElement?function(e){void 0===e&&(e={});var t,r=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var o,n=new p(t),i={};o=e.container||document.head;var a,s=document.querySelectorAll("style[data-emotion-"+r+"]");Array.prototype.forEach.call(s,(function(e){e.getAttribute("data-emotion-"+r).split(" ").forEach((function(e){i[e]=!0})),e.parentNode!==o&&o.appendChild(e)})),n.use(e.stylisPlugins)(v),a=function(e,t,r,o){var i=t.name;b.current=r,n(e,t.styles),o&&(l.inserted[i]=!0)};var l={key:r,sheet:new u({key:r,container:o,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:i,registered:{},insert:a};return l}():null),D=(0,e.createContext)({}),L=(I.Provider,function(t){return(0,e.forwardRef)((function(r,o){return(0,e.createElement)(I.Consumer,null,(function(e){return t(r,e,o)}))}))});Object.prototype.hasOwnProperty;var M=L((function(t,r){var o=t.styles;if("function"==typeof o)return(0,e.createElement)(D.Consumer,null,(function(t){var n=N([o(t)]);return(0,e.createElement)($,{serialized:n,cache:r})}));var n=N([o]);return(0,e.createElement)($,{serialized:n,cache:r})})),$=function(e){function t(t,r,o){return e.call(this,t,r,o)||this}d(t,e);var r=t.prototype;return r.componentDidMount=function(){this.sheet=new u({key:this.props.cache.key+"-global",nonce:this.props.cache.sheet.nonce,container:this.props.cache.sheet.container});var e=document.querySelector("style[data-emotion-"+this.props.cache.key+'="'+this.props.serialized.name+'"]');null!==e&&this.sheet.tags.push(e),this.props.cache.sheet.tags.length&&(this.sheet.before=this.props.cache.sheet.tags[0]),this.insertStyles()},r.componentDidUpdate=function(e){e.serialized.name!==this.props.serialized.name&&this.insertStyles()},r.insertStyles=function(){if(void 0!==this.props.serialized.next&&y(this.props.cache,this.props.serialized.next,!0),this.sheet.tags.length){var e=this.sheet.tags[this.sheet.tags.length-1].nextElementSibling;this.sheet.before=e,this.sheet.flush()}this.props.cache.insert("",this.props.serialized,this.sheet,!1)},r.componentWillUnmount=function(){this.sheet.flush()},r.render=function(){return null},t}(e.Component),F=function e(t){for(var r=t.length,o=0,n="";o<r;o++){var i=t[o];if(null!=i){var a=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))a=e(i);else for(var s in a="",i)i[s]&&s&&(a&&(a+=" "),a+=s);break;default:a=i}a&&(n&&(n+=" "),n+=a)}}return n};L((function(t,r){return(0,e.createElement)(D.Consumer,null,(function(e){var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=N(t,r.registered);return y(r,n,!1),r.key+"-"+n.name},n={css:o,cx:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,t,r){var o=[],n=g(e,o,r);return o.length<2?r:n+t(o)}(r.registered,o,F(t))},theme:e};return t.children(n)}))}));var B=l,j=function(e){return"theme"!==e&&"innerRef"!==e},U=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?B:j};function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}var G=function(){return null};var H=function t(r,n){var i,a,s;void 0!==n&&(i=n.label,s=n.target,a=r.__emotion_forwardProp&&n.shouldForwardProp?function(e){return r.__emotion_forwardProp(e)&&n.shouldForwardProp(e)}:n.shouldForwardProp);var l=r.__emotion_real===r,c=l&&r.__emotion_base||r;"function"!=typeof a&&l&&(a=r.__emotion_forwardProp);var d=a||U(c),u=!d("as");return function(){var p=arguments,m=l&&void 0!==r.__emotion_styles?r.__emotion_styles.slice(0):[];if(void 0!==i&&m.push("label:"+i+";"),null==p[0]||void 0===p[0].raw)m.push.apply(m,p);else{m.push(p[0][0]);for(var f=p.length,h=1;h<f;h++)m.push(p[h],p[0][h])}var b=L((function(t,r,o){return(0,e.createElement)(D.Consumer,null,(function(n){var i=u&&t.as||c,l="",p=[],f=t;if(null==t.theme){for(var h in f={},t)f[h]=t[h];f.theme=n}"string"==typeof t.className?l=g(r.registered,p,t.className):null!=t.className&&(l=t.className+" ");var b=N(m.concat(p),r.registered,f);y(r,b,"string"==typeof i),l+=r.key+"-"+b.name,void 0!==s&&(l+=" "+s);var v=u&&void 0===a?U(i):d,E={};for(var w in t)u&&"as"===w||v(w)&&(E[w]=t[w]);E.className=l,E.ref=o||t.innerRef;var C=(0,e.createElement)(i,E),x=(0,e.createElement)(G,null);return(0,e.createElement)(e.Fragment,null,x,C)}))}));return b.displayName=void 0!==i?i:"Styled("+("string"==typeof c?c:c.displayName||c.name||"Component")+")",b.defaultProps=r.defaultProps,b.__emotion_real=b,b.__emotion_base=c,b.__emotion_styles=m,b.__emotion_forwardProp=a,Object.defineProperty(b,"toString",{value:function(){return"."+s}}),b.withComponent=function(e,r){return t(e,void 0!==r?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},n||{},{},r):n).apply(void 0,m)},b}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){H[e]=H(e)}));const W=H,X={podiumCdsBreakpointXs:"320px",podiumCdsBreakpointS:"600px",podiumCdsBreakpointM:"960px",podiumCdsBreakpointL:"1440px",podiumCdsBreakpointXl:"1920px"},V=()=>"undefined"!=typeof window,q=({closeModal:r,shouldCloseOnBackgroundClick:o,shouldCloseOnEsc:n,className:i,children:a,backdropCompProps:s,...l})=>{const c=(0,e.useRef)(null);return(0,e.useEffect)((()=>{const e=e=>{"Escape"===e.key&&r&&n&&r(e)};return V()&&window.addEventListener("keydown",e),()=>{V()&&window.removeEventListener("keydown",e)}}),[n]),t().createElement("div",{ref:c,className:i,onClick:e=>{e.target===c.current&&r&&o&&r(e)},"data-testid":"modal-backdrop",...s,...l},a)},Y=P`
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
`,K=W(q)(Y),{podiumCdsBreakpointM:Q}=X,J="@media not all and (min-resolution: 0.001dpcm)",Z="@media (pointer: coarse)";function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)({}).hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},ee.apply(null,arguments)}function te(e,t){if(null==e)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(-1!==t.indexOf(o))continue;r[o]=e[o]}return r}function re(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var oe=n(845),ne=n.n(oe);const ie=t().createContext(null);var ae=function(e){return e.scrollTop},se="unmounted",le="exited",ce="entering",de="entered",ue="exiting",pe=function(e){function r(t,r){var o;o=e.call(this,t,r)||this;var n,i=r&&!r.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?i?(n=le,o.appearStatus=ce):n=de:n=t.unmountOnExit||t.mountOnEnter?se:le,o.state={status:n},o.nextCallback=null,o}d(r,e),r.getDerivedStateFromProps=function(e,t){return e.in&&t.status===se?{status:le}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var r=this.state.status;this.props.in?r!==ce&&r!==de&&(t=ce):r!==ce&&r!==de||(t=ue)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e,t,r,o=this.props.timeout;return e=t=r=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,r=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:r}},o.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===ce){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:ne().findDOMNode(this);r&&ae(r)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===le&&this.setState({status:se})},o.performEnter=function(e){var t=this,r=this.props.enter,o=this.context?this.context.isMounting:e,n=this.props.nodeRef?[o]:[ne().findDOMNode(this),o],i=n[0],a=n[1],s=this.getTimeouts(),l=o?s.appear:s.enter;e||r?(this.props.onEnter(i,a),this.safeSetState({status:ce},(function(){t.props.onEntering(i,a),t.onTransitionEnd(l,(function(){t.safeSetState({status:de},(function(){t.props.onEntered(i,a)}))}))}))):this.safeSetState({status:de},(function(){t.props.onEntered(i)}))},o.performExit=function(){var e=this,t=this.props.exit,r=this.getTimeouts(),o=this.props.nodeRef?void 0:ne().findDOMNode(this);t?(this.props.onExit(o),this.safeSetState({status:ue},(function(){e.props.onExiting(o),e.onTransitionEnd(r.exit,(function(){e.safeSetState({status:le},(function(){e.props.onExited(o)}))}))}))):this.safeSetState({status:le},(function(){e.props.onExited(o)}))},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,r=!0;return this.nextCallback=function(o){r&&(r=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},o.onTransitionEnd=function(e,t){this.setNextCallback(t);var r=this.props.nodeRef?this.props.nodeRef.current:ne().findDOMNode(this),o=null==e&&!this.props.addEndListener;if(r&&!o){if(this.props.addEndListener){var n=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],i=n[0],a=n[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},o.render=function(){var e=this.state.status;if(e===se)return null;var r=this.props,o=r.children,n=(r.in,r.mountOnEnter,r.unmountOnExit,r.appear,r.enter,r.exit,r.timeout,r.addEndListener,r.onEnter,r.onEntering,r.onEntered,r.onExit,r.onExiting,r.onExited,r.nodeRef,te(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return t().createElement(ie.Provider,{value:null},"function"==typeof o?o(e,n):t().cloneElement(t().Children.only(o),n))},r}(t().Component);function me(){}pe.contextType=ie,pe.propTypes={},pe.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:me,onEntering:me,onEntered:me,onExit:me,onExiting:me,onExited:me},pe.UNMOUNTED=se,pe.EXITED=le,pe.ENTERING=ce,pe.ENTERED=de,pe.EXITING=ue;const fe=pe;var he=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return o=t,void((r=e).classList?r.classList.remove(o):"string"==typeof r.className?r.className=re(r.className,o):r.setAttribute("class",re(r.className&&r.className.baseVal||"",o)));var r,o}))},be=function(e){function r(){for(var t,r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(t=e.call.apply(e,[this].concat(o))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,r){var o=t.resolveArguments(e,r),n=o[0],i=o[1];t.removeClasses(n,"exit"),t.addClass(n,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,r)},t.onEntering=function(e,r){var o=t.resolveArguments(e,r),n=o[0],i=o[1]?"appear":"enter";t.addClass(n,i,"active"),t.props.onEntering&&t.props.onEntering(e,r)},t.onEntered=function(e,r){var o=t.resolveArguments(e,r),n=o[0],i=o[1]?"appear":"enter";t.removeClasses(n,i),t.addClass(n,i,"done"),t.props.onEntered&&t.props.onEntered(e,r)},t.onExit=function(e){var r=t.resolveArguments(e)[0];t.removeClasses(r,"appear"),t.removeClasses(r,"enter"),t.addClass(r,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var r=t.resolveArguments(e)[0];t.addClass(r,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var r=t.resolveArguments(e)[0];t.removeClasses(r,"exit"),t.addClass(r,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,r){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,r]},t.getClassNames=function(e){var r=t.props.classNames,o="string"==typeof r,n=o?(o&&r?r+"-":"")+e:r[e];return{baseClassName:n,activeClassName:o?n+"-active":r[e+"Active"],doneClassName:o?n+"-done":r[e+"Done"]}},t}d(r,e);var o=r.prototype;return o.addClass=function(e,t,r){var o=this.getClassNames(t)[r+"ClassName"],n=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===r&&n&&(o+=" "+n),"active"===r&&e&&ae(e),o&&(this.appliedClasses[t][r]=o,function(e,t){e&&t&&t.split(" ").forEach((function(t){return o=t,void((r=e).classList?r.classList.add(o):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(r,o)||("string"==typeof r.className?r.className=r.className+" "+o:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+o)));var r,o}))}(e,o))},o.removeClasses=function(e,t){var r=this.appliedClasses[t],o=r.base,n=r.active,i=r.done;this.appliedClasses[t]={},o&&he(e,o),n&&he(e,n),i&&he(e,i)},o.render=function(){var e=this.props,r=(e.classNames,te(e,["classNames"]));return t().createElement(fe,ee({},r,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},r}(t().Component);be.defaultProps={classNames:""},be.propTypes={};const ve=be;function ge(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=ge(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}const ye=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=ge(e))&&(o&&(o+=" "),o+=t);return o};function Ee(){if("undefined"==typeof navigator)return!1;const e=navigator.userAgent,t=e.includes("Safari")&&!e.includes("Chrome"),r=/iP(?:hone|od|ad)/.test(e),o=e.includes("OS 15_");return r&&t&&o}(function(){if("undefined"==typeof navigator)return!1;const e=navigator.userAgent;return e.includes("Macintosh")&&e.includes("Safari")&&!e.includes("Chrome")&&/Version\/(?:[0-9]+)\./.test(e)&&(()=>{const t=/Version\/(?<version>[0-9]+)\./.exec(e);return!!t&&parseInt(t[1],10)<=15})()})()&&document.documentElement.classList.add("mac-safari-15");var we=n(708),Ce=n.n(we);const xe=({selector:t,children:r})=>(0,oe.createPortal)(r,(t=>{const r=(0,e.useRef)(null);return(0,e.useEffect)((()=>{const e=document.querySelector(t);return e||console.warn(`Could not find modal root "${t}".`),e&&e.appendChild(r.current),()=>{r.current.parentNode&&r.current.parentNode.removeChild(r.current)}}),[]),r.current||(r.current=document.createElement("div")),r.current})(t)),ke=(0,e.forwardRef)((({selector:e="#modal-root",isOpen:r=!1,trapFocus:o=!0,children:n,...i},a)=>{const s=o?t().createElement(Ce(),null,t().createElement("div",{"data-testid":"focus-trap-react"},n)):n;return"undefined"==typeof window?s:r?t().createElement(xe,{selector:e,...i},t().createElement("div",{ref:a,className:"modal-portal-content-wrapper"},s)):null}));ke.displayName="ModalPortal";const Oe=({components:e,className:r,...o})=>{const n=e?.ModalContainerComp??"section";return t().createElement(n,{className:r,...o})},Se=(t,r=100,o=!1)=>{const n=(t=>{const r=e.useRef(t);return e.useEffect((()=>{r.current=t})),r})(t),i=e.useRef(),a=[r,o,n];function s(){i.current&&clearTimeout(i.current),i.current=void 0}function l(){i.current=void 0}return e.useEffect((()=>s),a),e.useCallback((function(){const e=arguments,{current:t}=i;if(void 0===t&&o)return i.current=setTimeout(l,r),n.current.apply(null,e);t&&clearTimeout(t),i.current=setTimeout((()=>{i.current=void 0,n.current.apply(null,e)}),r)}),a)},Ae=function(t,r,o,n){const i=e.useRef(o),a=e.useRef(n);e.useEffect((()=>{i.current=o,a.current=n})),e.useEffect((()=>{const e=t&&"current"in t?t.current:t;if(!e)return;let o=0;function n(...e){o||i.current.apply(this,e)}e.addEventListener(r,n);const s=a.current;return()=>{o=1,e.removeEventListener(r,n),s&&s()}}),[t,r])},Te={},_e="undefined"==typeof window?null:window,Re=_e&&void 0!==_e.visualViewport?_e.visualViewport:null,Ne=()=>[document.documentElement.clientWidth,document.documentElement.clientHeight],Pe=(0,e.forwardRef)((({appearance:r="base","aria-labelledby":o,children:n,classes:i={},className:a,closeModal:s,isOpen:l,role:c="dialog",components:d={},shouldCloseOnBackgroundClick:u,shouldCloseOnEsc:p,backdropCompProps:m,modalRootCompProps:f,modalContainerCompProps:h,modalPortalCompProps:b,...v},g)=>{const y=function(t){void 0===t&&(t=Te);const{wait:r,leading:o,initialWidth:n=0,initialHeight:i=0}=t,[a,s]=((t,r,o)=>{const n=e.useState(t);return[n[0],Se(n[1],r,o)]})("undefined"==typeof document?[n,i]:Ne,r,o),l=()=>s(Ne);return Ae(_e,"resize",l),Ae(Re,"resize",l),Ae(_e,"orientationchange",l),a}({wait:250})[1],E=d.BackdropComp??q,w=d.ModalComp??ke,C=d.ModalContainerComp??Oe,x=d.ModalRootComp??"div";return t().createElement(w,{className:i.modal,isOpen:l,ref:g,...b,...v},t().createElement(E,{className:i.backdrop,closeModal:s,shouldCloseOnBackgroundClick:u,shouldCloseOnEsc:p,...m},t().createElement(x,{className:ye(a,i.root),role:c,"aria-labelledby":o,style:"fullscreen"===r?{height:y}:{},...f},t().createElement(Oe,{className:i.backdropContainer,appearance:r,components:{ModalContainerComp:C},...h},n))))}));Pe.displayName="ModalBase";const Ie={body1:"p",body2:"p",body3:"p",body4:"p",body1Strong:"p",body2Strong:"p",body3Strong:"p",body4Strong:"p",body1Link:"a",body2Link:"a",body3Link:"a",body4Link:"a",legal:"p",editorialBody1:"p",editorialBody1Strong:"p",oversize1:"p",oversize2:"p",oversize3:"p",display1:"h1",display2:"h2",display3:"h3",display4:"h4",title1:"h1",title2:"h2",title3:"h3",title4:"h4",conversation1:"p",conversation2:"p",conversation3:"p",conversation4:"p"},De=(0,e.forwardRef)((({Component:e,align:r="inherit",appearance:o="body1",bold:n=!1,className:i,color:a="primary",display:s="initial",strikethrough:l=!1,weight:c="regular",uppercase:d,...u},p)=>{const m=ye("nds-text",i,{[`text-align-${r}`]:"inherit"!==r,[`appearance-${o}`]:!0,bold:n,[`color-${a}`]:!0,[`display-${s}`]:"initial"!==s,[`weight-${c}`]:!0,strikethrough:l,uppercase:d}),f=e||Ie[o];return t().createElement(f,{className:m,...u,ref:p})}));De.displayName="Text";const Le=({className:e,classes:r={},components:o,id:n,title:i,Icon:a,...s})=>{const l=o.IconWrapperComp||"span";return t().createElement("header",{className:e,...s},a&&t().createElement(l,{className:ye("icon-wrapper",r.iconWrapper),"data-testid":"modal-icon"},t().createElement(a,{className:r.icon})),"string"==typeof i?t().createElement(De,{className:ye("title-heading",r.title),id:n,appearance:"title1","data-testid":"modal-header-title"},i):i)};function Me(e){return Me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Me(e)}var $e=["aria-hidden","className","fill","height","paths","role","title","size","viewBox","width"];function Fe(e,t){var r,o=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)),o}function Be(e,t,r){var o;return o=function(e){if("object"!=Me(e)||!e)return e;var t,r=e[Symbol.toPrimitive];if(void 0!==r){if("object"!=Me(t=r.call(e,"string")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==Me(o)?o:String(o))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function je(e,t){var r,o;for((null==t||t>e.length)&&(t=e.length),r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var Ue="24px",ze="48px",Ge={s:"0 0 ".concat(parseInt(Ue)," ").concat(parseInt(Ue)),m:"0 0 ".concat(parseInt(Ue)," ").concat(parseInt(Ue)),l:"0 0 ".concat(parseInt(ze)," ").concat(parseInt(ze))},He={s:Ue,m:Ue,l:ze,container:"container"},We=function(r){var o,n,i=r["aria-hidden"],a=r.className,s=r.fill,l=r.height,c=r.paths,d=r.role,u=void 0===d?"img":d,p=r.title,m=r.size,f=void 0===m?"m":m,h=r.viewBox,b=r.width,v=function(e,t){if(null==e)return{};var r,o,n,i=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols)for(r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o]);return i}(r,$e),g=(o=(0,e.useState)(f),n=2,function(e){if(Array.isArray(e))return e}(o)||function(e,t){var r,o,n,i,a,s,l,c=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=c){a=[],s=!0,l=!1;try{if(n=(c=c.call(e)).next,0===t){if(Object(c)!==c)return;s=!1}else for(;!(s=(r=n.call(c)).done)&&(a.push(r.value),a.length!==t);s=!0);}catch(e){l=!0,o=e}finally{try{if(!s&&null!=c.return&&(i=c.return(),Object(i)!==i))return}finally{if(l)throw o}}return a}}(o,n)||function(e,t){if(e){if("string"==typeof e)return je(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?je(e,t):void 0}}(o,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=g[0],E=g[1],w=i;(function(e){return!e&&!p})(i)&&(w=!0),(0,e.useEffect)((function(){Object.keys(He).includes(f)?E(f):E("m")}),[f]);var C=h||Ge[f]||Ge.m;return t().createElement("svg",function(e){var t,r;for(t=1;t<arguments.length;t++)r=null!=arguments[t]?arguments[t]:{},t%2?Fe(Object(r),!0).forEach((function(t){Be(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}({"aria-hidden":w?"true":"false",className:a,focusable:"false",viewBox:C,role:u,width:function(){if("container"!==y)return b||He[y]}(),height:function(){if("container"!==y)return l||He[y]}(),fill:s},v),(null==c?void 0:c[y])?c[y]:null==c?void 0:c.m,p&&t().createElement("title",null,p))};function Xe(e){return Xe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xe(e)}function Ve(e,t){var r,o=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)),o}function qe(e){var t,r;for(t=1;t<arguments.length;t++)r=null!=arguments[t]?arguments[t]:{},t%2?Ve(Object(r),!0).forEach((function(t){var o,n,i,a;o=e,n=t,i=r[t],a=function(e){if("object"!=Xe(e)||!e)return e;var t,r=e[Symbol.toPrimitive];if(void 0!==r){if("object"!=Xe(t=r.call(e,"string")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n),(n="symbol"==Xe(a)?a:String(a))in o?Object.defineProperty(o,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[n]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}var Ye={s:t().createElement(t().Fragment,null,t().createElement("path",{stroke:"currentColor",strokeWidth:"1.5",d:"M17.5 6.5l-11 11m0-11l11 11"})),m:t().createElement(t().Fragment,null,t().createElement("path",{stroke:"currentColor",strokeWidth:"1.5",d:"M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"})),l:t().createElement(t().Fragment,null,t().createElement("path",{stroke:"currentColor",strokeWidth:"3",d:"M37.945 10.055l-27.89 27.89m0-27.89l27.89 27.89"}))},Ke=t().memo((function(e){return t().createElement(We,qe(qe({},e),{},{paths:Ye,fill:"none"}))}));const Qe=({modalCloseAriaLabel:e="Close Modal",onClick:r,className:o,modalCloseButtonCompProps:n,...i})=>t().createElement("button",{className:ye(o,"modal-ui-close"),"aria-label":e,onClick:r,type:"button",...n,...i},t().createElement(Ke,{"aria-hidden":!0})),Je=(0,e.forwardRef)((({appearance:r="base","aria-labelledby":o,transitionDuration:n="250",children:i,classes:a={},className:s,components:l={},slots:c={},closeModal:d,modalCloseAriaLabel:u,isOpen:p,role:m="dialog",shouldCloseOnBackgroundClick:f=!0,shouldCloseOnEsc:h=!0,title:b,titleId:v,backdropCompProps:g,modalRootCompProps:y,modalCloseButtonCompProps:E,modalContainerCompProps:w,modalHeaderCompProps:C,modalContentCompProps:x,modalMainCompProps:k,Icon:O,modalPortalCompProps:S,...A},T)=>{const _=v??b.toLowerCase().replace(/\W/g,"-"),R=(0,e.useRef)();var N;N=p??!1,(0,e.useEffect)((()=>{if(!N||"undefined"==typeof window)return;const e=window.scrollY||window.pageYOffset,t=document.body,r={overflow:t.style.overflow,position:t.style.position,top:t.style.top,left:t.style.left,right:t.style.right};return Ee()?document.body.style.overflow="hidden":(t.style.position="fixed",t.style.top=`-${e}px`,t.style.left="0",t.style.right="0",t.style.overflow="hidden"),()=>{t.style.overflow=r.overflow,t.style.position=r.position,t.style.top=r.top,t.style.left=r.left,t.style.right=r.right,Ee()||window.scrollTo(0,e)}}),[N]);const I=c.HeaderTitleSlot,D=c.FooterSlot,L=l.ModalContainerComp??Oe,$=l.ModalContentComp??"div",F=l.ModalMainComp??"div",B=l.IconWrapperComp,j=l.ModalRootComp,U=l.ModalCloseButtonComp??Qe,z=l.ModalHeaderComp??Le,G=l.ModalBaseComp??Pe,H=l.BackdropComp,W=l.ModalComp;(0,e.useEffect)((()=>{V()&&p&&(R.current=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)}),[p]),(0,e.useEffect)((()=>{if(!V())return;const e=document.querySelector("body");return p&&(setTimeout((()=>{e.classList.add("nds-no-scroll")}),parseFloat(n)),"fullscreen"===r&&(setTimeout((()=>{window.scrollTo(0,0),e.classList.add("nds-no-scroll")}),parseFloat(n)),e.classList.add("nds-override-urlbar"))),()=>{e.classList.remove("nds-no-scroll","nds-override-urlbar"),p&&R.current&&(window.scrollTo(0,R.current),R.current=null)}}),[r,p,n]);const X=()=>D?t().createElement(t().Fragment,null,D):null;return t().createElement(t().Fragment,null,t().createElement(M,{styles:P`
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
          `}),t().createElement(ve,{appear:p,in:p,timeout:parseFloat(n),classNames:"modal",mountOnEnter:!0,unmountOnExit:!0},t().createElement(G,{className:ye(s,r,a.base),appearance:r,isOpen:!0,role:m,"aria-labelledby":o??`modal-${_}`,classes:{backdrop:a.backdrop,backdropContainer:a.backdropContainer,modal:a.modal,root:a.root},components:{ModalContainerComp:L,ModalRootComp:j,ModalComp:W,BackdropComp:H},closeModal:d,shouldCloseOnBackgroundClick:f,shouldCloseOnEsc:h,modalPortalCompProps:S,backdropCompProps:g,modalRootCompProps:y,modalContainerCompProps:w,ref:T,...A},"function"==typeof d&&"fullscreen"===r&&t().createElement("div",{className:"close-btn-container fullscreen-btn"},t().createElement(U,{modalappearance:r,className:a.closeButton,modalCloseAriaLabel:u,onClick:d,"data-testid":"modal-close-button",modalCloseButtonCompProps:E})),t().createElement(F,{className:a.main,appearance:r,...k},"function"==typeof d&&"fullscreen"!==r&&t().createElement("div",{className:"close-btn-container"},t().createElement(U,{modalappearance:r,className:a.closeButton,modalCloseAriaLabel:u,onClick:d,"data-testid":"modal-close-button",modalCloseButtonCompProps:E})),t().createElement("div",{className:"modal-header-container"},t().createElement(z,{components:{IconWrapperComp:B},className:a.header,classes:{icon:a.icon,iconWrapper:a.iconWrapper,title:ye(a.title)},id:`modal-${_}`,title:I??b,Icon:O,...C})),t().createElement($,{className:a.content,...x},i,"fullscreen"===r&&X())),"fullscreen"!==r&&X())))}));Je.displayName="Modal";const Ze=W((e=>t().createElement(Oe,{...e})))((({appearance:e})=>P`
    ${P`
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
    @media (min-width: ${X.podiumCdsBreakpointM}) {
      height: 100%;
      padding: 48px;
    }
  `};
    ${(()=>{if("fullscreen"!==e)return P`
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
        @media (min-width: ${X.podiumCdsBreakpointM}) {
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
    ${(()=>{if("fullscreen"===e)return P`
        padding: 0 var(--podium-cds-size-spacing-xs) 0 var(--podium-cds-size-spacing-l);
        height: 100dvh;
        @media (min-width: ${X.podiumCdsBreakpointM}) {
          padding: 0 28px 0 48px;
        }
        .mac-safari-15 & {
          padding: 40px 4px 24px 24px;
          @media (min-width: ${X.podiumCdsBreakpointM}) {
            padding: 48px 24px 0 48px;
          }
        }
        // RTL styles for scrollbar spacing
        [dir="rtl"] & {
          padding: 0 var(--podium-cds-size-spacing-l) 48px 0;
          @media (min-width: ${X.podiumCdsBreakpointM}) {
            height: 100%;
            padding: 0 48px 48px 28px;
          }
          .mac-safari-15 & {
            padding: 48px 24px 24px 0px;
            @media (min-width: ${X.podiumCdsBreakpointM}) {
              padding: 48px 48px 0px 28px;
            }
          }
        }
      `})()};
  `)),et={BackdropComp:K,ModalontainerComp:Ze},tt=(0,e.forwardRef)((({components:e,...r},o)=>t().createElement(Pe,{components:{...et,...e},...r,ref:o})));tt.displayName="ModalBaseStyledComps";const rt=W(tt)((({appearance:e})=>P`
    ${P`
    position: absolute;
    left: 0;
    width: 100%;
    background: var(--podium-cds-color-bg-primary);
    bottom: 0;
    transform: translate3d(0, 0, 0);
    overflow: hidden;
    @media (min-width: ${X.podiumCdsBreakpointM}) {
      bottom: auto;
      top: 50%;
      left: 50%;
      height: auto;
      transform: translate3d(-50%, -50%, 0);
    }
  `};
    ${"baseMedium"===e?P`
        border-radius: var(--podium-cds-size-border-radius-xl)
          var(--podium-cds-size-border-radius-xl) 0 0;
        @media (min-width: ${X.podiumCdsBreakpointM}) {
          border-radius: var(--podium-cds-size-border-radius-xl);
          max-width: 762px;
        }
      `:"fullscreen"!==e?P`
        border-radius: var(--podium-cds-size-border-radius-xl)
          var(--podium-cds-size-border-radius-xl) 0 0;
        @media (min-width: ${X.podiumCdsBreakpointM}) {
          border-radius: var(--podium-cds-size-border-radius-xl);
          max-width: 536px;
        }
      `:"fullscreen"===e?P`
        ${Z} {
          .modal-header-container {
            padding-top: 40px;
            [dir='rtl'] & {
              padding-top: 0;
            }
          }
        }
      }
    `:void 0};
    ${P`
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
    @media (min-width: ${X.podiumCdsBreakpointM}) {
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
  `)),ot=P`
  width: 100%;
  padding-bottom: calc(
    var(--podium-cds-size-spacing-l) + var(--podium-cds-size-spacing-xs)
  );
  padding-top: var(--podium-cds-size-spacing-xs);
  font: var(--podium-cds-typography-320-to-1919-title3);

  @media (min-width: ${X.podiumCdsBreakpointXl}) {
    * {
      font: var(--podium-cds-typography-1920-plus-title3);
    }
  }

  .icon-wrapper {
    font-size: var(--podium-cds-typography-body-2-size);
  }
`,nt=W((e=>t().createElement(Le,{...e})))(ot),it=P`
  font: var(--podium-cds-typography-body1);
  width: 100%;
  @media (max-width: ${X.podiumCdsBreakpointM}) {
    padding-bottom: var(--podium-cds-size-spacing-s);
  }
`,at=W("div")`
  ${it}
`,st=W.div((({appearance:e})=>P`
  // Scrollbar styles
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: ${X.podiumCdsBreakpointM}) {
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
      @media (min-width: ${X.podiumCdsBreakpointM}) {
        padding-inline-end: 20px;
      }
    }
  }

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */

  ${"fullscreen"===e&&P`
    overflow-y: auto;
    max-height: 100%;
    width: 100%;
  `}
`)),lt=(0,e.forwardRef)((({appearance:e,...r},o)=>t().createElement(st,{ref:o,appearance:e,...r})));lt.displayName="ModalMainStyled";const ct=(0,e.forwardRef)((({appearance:e="primary",ariaLabel:r,background:o="light",children:n,className:i,classes:a={button:"btn",text:"cta",iconWrapper:"",buttonLarge:"btn-lg",buttonMedium:"btn-md",buttonSmall:"",buttonResponsive:"btn-responsive",textUnderline:"underline"},disabled:s,href:l,iconPlacement:c="end",onClick:d,size:u="responsive",Component:p="button",Icon:m,IconWrapper:f="span",type:h="submit",disableRipple:b=!1,...v},g)=>{let y;const E=(e=>"text"===e||"textUnderline"===e?"primary":e)(e),w=((e,t,r)=>"text"===e||"textUnderline"===e?r:t)(e,a.button,a.text),C="textUnderline"===e?a.textUnderline:"";y=a.button?`${w}-${E}-${"dark"===o?"light":"dark"} ${C}`:e;const x="textUnderline"===e||"text"===e||b,k=((e,t,r,o,n)=>"small"===e?t:"medium"===e?r:"large"===e?o:n)(u,a.buttonSmall,a.buttonMedium,a.buttonLarge,a.buttonResponsive);y=ye("nds-btn",i,y,{[k]:!!k,disabled:"a"===p?void 0:s});const O=m&&t().createElement(f,{className:ye("btn-icon-wrapper",a.iconWrapper)},m);return t().createElement(p,{disabled:"a"===p?void 0:s,"aria-label":r,className:y,onClick:d,href:"button"===p?void 0:l,type:"a"===p?void 0:h,...v,ref:g},"start"===c&&O,n,"end"===c&&O,!(x||s)&&t().createElement("span",{className:"ripple",style:{pointerEvents:"none"},inert:""}))}));ct.displayName="Button";const dt=(0,e.forwardRef)(((e,r)=>t().createElement(ct,{...e,ref:r})));dt.displayName="ButtonWithRef";const ut=W(dt)((e=>{const{Component:t,className:r,size:o,appearance:n="primary",background:i="light",disableRipple:a,iconPlacement:s}=e,l="light"===i,c={light:{primary:{backgroundStyle:"var(--podium-cds-button-color-bg-primary)",color:"var(--podium-cds-color-text-primary-on-dark)",hoverFocusActiveBackground:"var(--podium-cds-button-color-bg-primary-hover)",disabledBackground:"var(--podium-cds-button-color-bg-primary-disabled)",disabledColor:"var(--podium-cds-color-text-disabled)"},secondary:{backgroundStyle:"var(--podium-cds-button-color-bg-secondary)",color:"var(--podium-cds-color-text-primary-on-light)",borderColor:"var(--podium-cds-button-color-border-secondary)",hoverFocusActiveBackground:"var(--podium-cds-button-color-bg-secondary)",hoverFocusActiveBorderColor:"var(--podium-cds-button-color-border-secondary-hover)",disabledBackground:"var(--podium-cds-button-color-bg-secondary)",disabledColor:"var(--podium-cds-color-text-disabled)",disabledBorderColor:"var(--podium-cds-button-color-border-secondary-disabled)"},tertiary:{backgroundStyle:"inherit",color:"var(--podium-cds-color-text-primary-on-light)",hoverFocusActiveBackground:"var(--podium-cds-icon-button-color-bg-tertiary-hover)",disabledBackground:"inherit",disabledColor:"var(--podium-cds-color-text-disabled)"}},dark:{primary:{backgroundStyle:"var(--podium-cds-button-color-bg-primary-on-dark)",color:"var(--podium-cds-color-text-primary-on-light)",hoverFocusActiveBackground:"var(--podium-cds-button-color-bg-primary-hover-on-dark)",disabledBackground:"var(--podium-cds-button-color-bg-primary-disabled-on-dark)",disabledColor:"var(--podium-cds-color-text-disabled-inverse)"},secondary:{backgroundStyle:"var(--podium-cds-button-color-bg-secondary)",color:"var(--podium-cds-color-text-primary-on-dark)",borderColor:"var(--podium-cds-button-color-border-secondary-on-dark)",hoverFocusActiveBackground:"var(--podium-cds-button-color-bg-secondary)",hoverFocusActiveBorderColor:"var(--podium-cds-button-color-border-secondary)",disabledBackground:"var(--podium-cds-button-color-bg-secondary)",disabledColor:"var(--podium-cds-color-text-disabled-inverse)",disabledBorderColor:"var(--podium-cds-button-color-border-secondary-disabled-on-dark)"},tertiary:{backgroundStyle:"inherit",color:"var(--podium-cds-color-text-primary-on-dark)",hoverFocusActiveBackground:"var(--podium-cds-icon-button-color-bg-tertiary-hover-on-dark)",disabledBackground:"inherit",disabledColor:"var(--podium-cds-color-text-disabled-inverse)"}}};return P`
    font: var(--podium-cds-typography-body1-strong);
    text-align: center;
    text-decoration: none;
    box-sizing: border-box;
    display: ${"a"===t?"inline-flex":"flex"};
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    ${(()=>{if("primary"===n||"secondary"===n||"tertiary"===n){let e;const t="\n          padding: var(--podium-cds-button-padding-top-l) var(--podium-cds-button-padding-sides-l);\n          width: 100%;\n          min-height: var(--podium-cds-button-height-l);\n        ",r="\n        padding: var(--podium-cds-button-padding-top-s) var(--podium-cds-button-padding-sides-s) var(--podium-cds-button-padding-bottom-s);\n        min-height: var(--podium-cds-button-height-s);\n      ";return e="large"===o?t:"medium"===o?"\n          padding: var(--podium-cds-button-padding-top-m) var(--podium-cds-button-padding-sides-m);\n          min-height: var(--podium-cds-button-height-m);\n      ":"small"===o?r:`\n          ${t}\n          @media (min-width: ${X.podiumCdsBreakpointM}) {\n            ${r}\n            width: auto;\n            height: auto;\n            min-height: auto;\n          }\n        `,P`
        ${e}
      `}})()}
    ${(()=>{let e="end"===s?"0":"var(--podium-cds-size-spacing-xs)",t="start"===s?"0":"var(--podium-cds-size-spacing-xs)";return"small"===o&&(e="end"===s?"0":"8px",t="start"===s?"-4px":"var(--podium-cds-size-spacing-xs)"),P`
      .btn-icon-wrapper {
        width: ${"small"===o?"20px":"var(--podium-cds-size-icon-m)"}; // 16px needs to be swapped out to podium-cds-size-icon-s; TO-DO: DSYS-1157
        height: var(--podium-cds-size-icon-m);
        margin-inline-end: ${e};
        margin-inline-start: ${t};
        svg {
          width: var(--podium-cds-size-icon-m);
        }
      }
    `})()}
    ${"text"===n||"textUnderline"===n?(()=>{if("text"===n)return P`
        display: block;
        .btn-icon-wrapper {
          display: inline-flex;
          width: ${"small"===o?"16px":"var(--podium-cds-size-icon-m)"}; // 16px needs to be swapped out to podium-cds-size-icon-s; TO-DO: DSYS-1157
          height: var(--podium-cds-size-icon-m);
          margin-inline-end: ${"end"===s?"0":"var(--podium-cds-size-spacing-xs)"};
          margin-inline-start: ${"start"===s?"0":"var(--podium-cds-size-spacing-xs)"};
          svg {
            width: var(--podium-cds-size-icon-m);
            content: "";
            position: absolute;
            transform: translateY(5px);
          }
        }
      `})():null}
    ${(()=>{if("text"===n||"textUnderline"===n)return P`
        padding: 0;
        color: ${l?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)"};
        background: transparent;
        text-align: start;
        border: 0;
        ${"small"===o&&"font: var(--podium-cds-typography-body3-strong);\n          "}

        ${"medium"===o&&"\n          font: var(--podium-cds-typography-body2-strong);\n          "}
        ${"large"===o&&"\n          font: var(--podium-cds-typography-body1-strong);\n        "}
        ${"responsive"===o&&`@media (min-width: ${parseInt("600",10)+1}px) {\n              font: var(--podium-cds-typography-body3-strong)\n            }\n        }`}
        &:active:not(:disabled) {
          color: ${l?"var(--podium-cds-color-text-secondary)":"var(--podium-cds-color-text-secondary-inverse)"};
        }
        &:focus:not(:disabled) {
          color: ${l?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)"};
        }
        @media (hover: hover) {
          &:hover:not(:disabled) {
            color: ${l?"var(--podium-cds-color-text-hover)":"var(--podium-cds-color-text-hover-inverse)"};
          }
        }
        &:disabled {
          color: ${l?"var(--podium-cds-color-text-disabled)":"var(--podium-cds-color-text-disabled-inverse)"};
          cursor: default;
        }
      `})()}
    ${(()=>{if("textUnderline"===n){const e={paddingEnd:"start"===s?"28px":"initial",marginEnd:"end"===s?"0":"auto",resetMargins:"start"===s?"0":"var(--podium-cds-size-spacing-xs)",svgTransform:"translateY(-2px)"},t={large:{...e},medium:{...e,svgTransform:"translateY(-4px)"},small:{...e},responsive:{...e}}[o??"medium"];return P`
        /* border-bottom renders differently based on screen pixel density */
        @media screen and (min-resolution: 1dppx) {
          border-bottom: var(--podium-cds-size-border-width-m) solid
            ${l?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)"};
          box-shadow: inset 0 -1px 0 0
            ${l?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)"};
        }
        /* the border-bottom renders differently based on screen pixel density */
        @media screen and (min-resolution: 2dppx) {
          border-bottom: var(--podium-cds-size-border-width-m) solid
            ${l?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)"};
          box-shadow: inset 0 var(--podium-cds-button-box-shadow-width) 0 0
            ${l?"var(--podium-cds-color-text-primary)":"var(--podium-cds-color-text-primary-inverse)"};
        }

        .btn-icon-wrapper {
          display: inline-flex;
          height: auto;
          margin-inline-end: ${t.marginEnd};
          margin-inline-start: ${t.resetMargins};
          margin-left: ${"start"===s?"initial":"4px"};
          padding-inline-end: ${t.paddingEnd};
          svg {
            content: "";
            position: absolute;
            left: ${"start"===s?"0":"initial"};
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
              right: ${"start"===s?"0":"initial"};
            }
          }
        }

        &:hover:not(:disabled),
        &:active:not(:disabled) {
          @media screen and (min-resolution: 1dppx) {
            border-bottom: var(--podium-cds-size-border-width-m) solid
              ${l?"var(--podium-cds-color-text-hover)":"var(--podium-cds-color-text-hover-inverse)"};
            box-shadow: inset 0 -1px 0 0
              ${l?"var(--podium-cds-color-text-hover)":"var(--podium-cds-color-text-hover-inverse)"};
          }
          @media screen and (min-resolution: 2dppx) {
            border-bottom: var(--podium-cds-size-border-width-m) solid
              ${l?"var(--podium-cds-color-text-hover)":"var(--podium-cds-color-text-hover-inverse)"};
            box-shadow: inset 0 var(--podium-cds-button-box-shadow-width) 0 0
              ${l?"var(--podium-cds-color-text-hover)":"var(--podium-cds-color-text-hover-inverse)"};
          }
        }
        &:disabled {
          @media screen and (min-resolution: 1dppx) {
            border-bottom: var(--podium-cds-size-border-width-m) solid
              ${l?"var(--podium-cds-button-color-border-secondary-disabled)":"var(--podium-cds-button-color-border-secondary-disabled-on-dark)"};
            box-shadow: inset 0 -1px 0 0
              ${l?"var(--podium-cds-button-color-border-secondary-disabled)":"var(--podium-cds-button-color-border-secondary-disabled-on-dark)"};
          }
          @media screen and (min-resolution: 2dppx) {
            border-bottom: var(--podium-cds-size-border-width-m) solid
              ${l?"var(--podium-cds-button-color-border-secondary-disabled)":"var(--podium-cds-button-color-border-secondary-disabled-on-dark)"};
            box-shadow: inset 0 var(--podium-cds-button-box-shadow-width) 0 0
              ${l?"var(--podium-cds-button-color-border-secondary-disabled)":"var(--podium-cds-button-color-border-secondary-disabled-on-dark)"};
          }
        }
        ${t}
      `}})()}
    ${a||"text"===n||"textUnderline"===n?null:P`
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    > .ripple {
      display: block;
      position: absolute;
      ${"small"===o&&"width: var(--podium-cds-button-height-s);\n           height: var(--podium-cds-button-height-s);\n          "}
      ${"medium"===o&&"width: var(--podium-cds-button-height-m);\n         height: var(--podium-cds-button-height-m);\n        "}
      ${"large"===o&&"width: var(--podium-cds-button-height-l);\n         height: var(--podium-cds-button-height-l);\n        "}
      ${"responsive"===o&&`@media (min-width: ${X.podiumCdsBreakpointM}) {\n          width: var(--podium-cds-button-height-s);\n          height: var(--podium-cds-button-height-s);\n        }\n        width: var(--podium-cds-button-height-l);\n        height: var(--podium-cds-button-height-l);\n        `}
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
    ${(()=>{if("primary"===n||"secondary"===n||"tertiary"===n){const{backgroundStyle:e,color:t,borderColor:r,hoverFocusActiveBackground:o,hoverFocusActiveBorderColor:a,disabledBackground:s,disabledColor:l,disabledBorderColor:d}=c[i??"light"][n];return P`
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
          ${"secondary"===n&&`\n              border: var(--podium-cds-button-border-width) solid ${r};\n          `}
        }
        ${"secondary"===n&&`\n          ${J}{\n          border: var(--podium-cds-button-border-width) solid;\n          border-color: ${r};\n          }\n        `}
        &:active:not(:disabled) {
          background: ${o};
          &::before {
            border-color: ${a};
          }
        }
        @media (hover: hover) {
          &:hover:not(:disabled) {
            background: ${o};
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
          background: ${s};
          color: ${l};
          cursor: default;
        }
      `}})()}
    ${r?.includes("nds-button--icon-only")&&P`
    &.nds-button--icon-only {
      width: unset;
      min-height: unset;
      padding: ${"small"===o?"6px":"medium"===o?"12px":"18px"};
      ${("responsive"===o||"large"===o)&&"\n      svg {\n        width: 24px;\n        height: 24px;\n      }\n      "}
      @media (min-width: ${X.podiumCdsBreakpointS}) {
        padding: ${"large"===o?"14px":"medium"===o?"12px":"6px"};
        svg {
          height: ${"large"===o?"24px":"auto"};
          width: ${"large"===o?"24px":"auto"};
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
  `})),pt=(0,e.forwardRef)((({appearance:e="primary",background:r="light",classes:o={button:"btn",buttonLarge:"btn-lg",buttonMedium:"btn-md",buttonSmall:"",buttonResponsive:"btn-responsive"},className:n,Component:i="button",disableRipple:a=!1,Icon:s,size:l="medium",type:c="button",...d},u)=>{const p=ye("nds-button--icon-only",n);return t().createElement(ut,{appearance:e,background:r,className:p,classes:o,Component:i,disableRipple:a,size:l,type:c,...d,ref:u},s)}));pt.displayName="IconButton";const mt={ModalContentComp:at,ModalMainComp:lt,ModalContainerComp:Ze,ModalCloseButtonComp:({modalCloseAriaLabel:e="Close Modal",onClick:r,className:o,modalCloseButtonCompProps:n,...i})=>t().createElement(pt,{className:ye("modal-ui-close",o),ariaLabel:e,appearance:"secondary",size:"small",onClick:r,type:"button",Icon:t().createElement(Ke,{"aria-hidden":!0}),...n,...i}),ModalHeaderComp:nt,ModalBaseComp:rt,BackdropComp:K},ft=(0,e.forwardRef)((({components:e,...r},o)=>t().createElement(Je,{components:{...mt,...e},...r,ref:o})));ft.displayName="ModalStyledComps";const ht=W(ft)`
  .close-btn-container {
    position: sticky;
    top: var(--podium-cds-size-spacing-xs);
    right: 1px;
    z-index: var(--podium-cds-elevation-100);
    float: right;
    @media (max-width: ${X.podiumCdsBreakpointM}) {
      top: 0;
    }
    [dir="rtl"] & {
      float: left;
    }
    ${Z} {
      position: absolute;
      top: 52px;
      right: 64px;
      @media (max-width: ${X.podiumCdsBreakpointM}) {
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
    ${J} {
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
      @media (max-width: ${X.podiumCdsBreakpointM}) {
        padding-right: 20px;
      }
      ${Z} {
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
        @media (max-width: ${X.podiumCdsBreakpointM}) {
          padding-left: 24px;
        }
      }
    }
    [dir="rtl"] & {
      .mac-safari-15 & {
        &.fullscreen-btn {
          left: 48px;
          right: 0px;
          @media (max-width: ${X.podiumCdsBreakpointM}) {
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
`;ht.displayName="ModalStyled";const bt=W((({classes:e={},children:r,components:o={},...n})=>{const i=o.ModalActionsComp??"div",a=ye(e.childrenWrapper,"nds-modal__actions");return t().createElement(i,{className:e.wrapper,"data-testid":"modal-actions",...n},t().createElement("div",{className:a},r))}))((()=>P`
  background: var(--podium-cds-color-bg-primary);
  width: 100%;
  z-index: 1;
  position: relative;
  padding-top: var(--podium-cds-size-spacing-l);
  .fullscreen & {
    padding-bottom: var(--podium-cds-size-spacing-xl);
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    bottom: calc(100% - 18px);
    left: 0;
    width: 100%;
    height: 36px;
  }

  /* Agnostic handling of actions item layout */
  > * {
    display: inherit;
  }
  > * > * + * {
    margin-top: var(--podium-cds-size-spacing-grid-gutter-l);
  }
  @media (min-width: ${X.podiumCdsBreakpointM}) {
    > * {
      display: flex;
      flex-direction: row-reverse;
    }
    > * > * + * {
      margin-top: 0;
      margin-right: var(--podium-cds-size-spacing-grid-gutter);
      [dir="rtl"] & {
        margin-right: 0;
        margin-left: var(--podium-cds-size-spacing-grid-gutter);
      }
    }
  }
`)),vt={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let gt;const yt=new Uint8Array(16);function Et(){if(!gt&&(gt="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!gt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return gt(yt)}const wt=[];for(let e=0;e<256;++e)wt.push((e+256).toString(16).slice(1));const Ct=function(e,t,r){if(vt.randomUUID&&!t&&!e)return vt.randomUUID();const o=(e=e||{}).random||(e.rng||Et)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=o[e];return t}return function(e,t=0){return wt[e[t+0]]+wt[e[t+1]]+wt[e[t+2]]+wt[e[t+3]]+"-"+wt[e[t+4]]+wt[e[t+5]]+"-"+wt[e[t+6]]+wt[e[t+7]]+"-"+wt[e[t+8]]+wt[e[t+9]]+"-"+wt[e[t+10]]+wt[e[t+11]]+wt[e[t+12]]+wt[e[t+13]]+wt[e[t+14]]+wt[e[t+15]]}(o)};class xt{constructor(e=!1){this.highPriority=!1,this.dialogId="",this.dialogId=Ct(),this.highPriority=e}}class kt extends Event{constructor(e,t){super(e),this.dialog=t}}class Ot extends EventTarget{constructor(){super(),this.debugMode=!1,this.debug=(e=!0)=>{this.debugMode=e},this.debugMessage=e=>{this.debugMode&&console.log(e)},this.onInitialize=async()=>this.initialized,this.closeDialogInQueue=(e,t)=>{if(t.length){if(t[0].dialogId!==e.dialogId){const r=t.findIndex((t=>t.dialogId===e.dialogId));return-1===r?void this.debugMessage(`cannot close dialog: ${e.dialogId}, it is not in the queue`):void t.splice(r,1)}t.shift(),this.dispatchEvent(new kt(Ot.DIALOG_CLOSED,e)),this.showTopDialogInQueue(t)}else this.debugMode&&this.debugMessage(`cannot close dialog: ${e.dialogId}, the queue is empty`)},this.openDialogInQueue=(e,t)=>{if(!t.includes(e)){if(e.highPriority&&t.length){const r=t[0];this.dispatchEvent(new kt(Ot.DIALOG_DISPLACED,r)),t.unshift(e)}else t.push(e);this.showTopDialogInQueue(t)}},this.initialized=new Promise((e=>{this.debugMessage(`${this.constructor.name} initialized`),e()}))}showTopDialogInQueue(e){e.length&&this.dispatchEvent(new kt(Ot.DIALOG_OPENED,e[0]))}}var St;Ot.DIALOG_OPENED="dialogOpened",Ot.DIALOG_CLOSED="dialogClosed",Ot.DIALOG_DISPLACED="dialogDisplaced";class At extends Ot{static getInstance(){return"undefined"!=typeof window?(window.modalManager||(window.modalManager=new St),window.modalManager):new St}constructor(){if(super(),this.modalQueue=[],this.__clearModalQueue__=()=>{this.modalQueue=[]},this.closeModal=e=>{this.closeDialogInQueue(e,this.modalQueue),this.modalQueue.length||(this.debugMessage("removing aria-hidden from siblings"),[...document.body.querySelectorAll(`:scope > [aria-hidden="true"][${St.ARIA_HIDDEN_BY}]`)].forEach((e=>{this.debugMessage(`removing aria-hidden from ${e}`),e.removeAttribute("aria-hidden"),e.removeAttribute(St.ARIA_HIDDEN_BY)})))},this.openModal=e=>{this.openDialogInQueue(e,this.modalQueue),this.debugMessage("setting aria-hidden on #modal-root siblings"),[...document.body.querySelectorAll(St.SIBLING_SELECTOR)].forEach((e=>{this.debugMessage(`setting aria-hidden on ${e}`),e.setAttribute("aria-hidden","true"),e.setAttribute(St.ARIA_HIDDEN_BY,"true")})),St.ERRANT_MODAL_SELECTORS.forEach((e=>{[...document.body.querySelectorAll(e)].forEach((e=>{e.remove()}))}))},"undefined"!=typeof window&&!window.document.getElementById("modal-root")){this.debugMessage("adding #modal-root to the body");const e=window.document.createElement("div");e.id="modal-root",window.document.body.appendChild(e)}}}St=At,At.ERRANT_MODAL_SELECTORS=Array(),At.ARIA_HIDDEN_EXEMPT="data-shell-aria-hidden-exempt",At.ROOT_SELECTOR="#modal-root",At.SIBLING_SELECTOR=`:scope > :not(${St.ROOT_SELECTOR}):not([aria-hidden="true"]):not([${St.ARIA_HIDDEN_EXEMPT}]):not(script)`,At.ARIA_HIDDEN_BY="data-shell-aria-hidden-by-dialog";const Tt=At.getInstance(),_t=["dotcom-web-platform","pme-nikenet-navigation"],Rt="login",Nt="renew",Pt="DOTCOM_ERROR_MODAL_",It={login_required:"silentRenewError",login:"signInRedirectErrorMessage",DEFAULT:"defaultError"},Dt=(e,t,r)=>{var o,n;return(null==e||null===(o=e[t])||void 0===o||null===(n=o[r])||void 0===n?void 0:n.value)||""},Lt=()=>{var r,o;const{isOpen:n,openModal:i,closeModal:a}=function(t=!1){const[r,o]=(0,e.useState)(!1),[n]=(0,e.useState)(new xt(t));let i=()=>{},a=()=>{},s=()=>{},l=()=>{};const c=()=>(l(),Tt.closeModal(n),!0);return(0,e.useEffect)((()=>{const e=e=>{e.dialog.dialogId===n.dialogId&&(o(!0),a())};Tt.addEventListener(At.DIALOG_OPENED,e);const t=e=>{e.dialog.dialogId===n.dialogId&&(o(!1),s())};Tt.addEventListener(At.DIALOG_DISPLACED,t);const r=e=>{e.dialog.dialogId===n.dialogId&&(o(!1),i())};return Tt.addEventListener(At.DIALOG_CLOSED,r),()=>{Tt.removeEventListener(At.DIALOG_OPENED,e),Tt.removeEventListener(At.DIALOG_DISPLACED,t),Tt.removeEventListener(At.DIALOG_CLOSED,r),c()}}),[]),{isOpen:r,openModal:()=>(Tt.openModal(n),!0),closeModal:c,onAfterClose:e=>{i=e},onAfterOpen:e=>{a=e},onAfterDisplaced:e=>{s=e},onRequestClose:e=>{l=e}}}(),[s,l]=(0,e.useState)(!1),[c,d]=(0,e.useState)(null),[u,p]=(0,e.useState)(null),m=(0,e.useCallback)((e=>{var t,r;null===(t=window.newrelic)||void 0===t||t.addPageAction(`${Pt}OPENED`,{reason:null==e||null===(r=e.urlParams)||void 0===r?void 0:r.error,errorType:null==e?void 0:e.type}),i()}),[i]),f=(0,e.useCallback)((()=>{var e,t;null===(e=window.newrelic)||void 0===e||e.addPageAction(`${Pt}CLOSED`,{reason:null==c||null===(t=c.urlParams)||void 0===t?void 0:t.error,errorType:null==c?void 0:c.type}),a()}),[a,c]),h=(0,e.useCallback)((async e=>{if(e){try{var t,r,o,i;const n=await(null===(t=window.webShellClient)||void 0===t||null===(r=t.identity)||void 0===r||null===(o=r.getIsLoggedIn)||void 0===o?void 0:o.call(r)),d=e.type;var a,s,l,c;if(d===Rt&&!0===n)return localStorage.removeItem("oidcError"),void(null===(a=window.newrelic)||void 0===a||a.addPageAction(`${Pt}SKIPPED_ALREADY_LOGGED_IN`,{errorType:Rt,reason:null==e||null===(s=e.urlParams)||void 0===s?void 0:s.error}));if((d===Nt||"login_required"===(null===(i=e.urlParams)||void 0===i?void 0:i.error))&&!1===n)return localStorage.removeItem("oidcError"),void(null===(l=window.newrelic)||void 0===l||l.addPageAction(`${Pt}SKIPPED_NOT_LOGGED_IN`,{errorType:d||Nt,reason:null==e||null===(c=e.urlParams)||void 0===c?void 0:c.error}))}catch(e){console.error("Failed to check login status:",e)}d(e),!n&&e&&m(e),e.type===Rt&&localStorage.removeItem("oidcError")}}),[n,m]),b=(0,e.useCallback)((async()=>{const e=localStorage.getItem("oidcError");if(e)try{const t=JSON.parse(e);await h(t)}catch(e){console.error("Failed to parse oidcError from localStorage:",e)}}),[h]),v=(0,e.useCallback)((async e=>{let{data:{type:t,payload:r}}=e;if("OIDC_ERROR"===t&&null!=r&&r.reason)try{localStorage.setItem("oidcError",JSON.stringify(r)),await h(r)}catch(e){console.error("Failed to handle postMessage error:",e)}}),[h]),g=(0,e.useRef)(b),y=(0,e.useRef)(v);if((0,e.useEffect)((()=>{g.current=b,y.current=v}),[b,v]),(0,e.useEffect)((()=>{(async()=>{try{if(l(!0),"undefined"!=typeof window){const e=await window.webShellClient.translations.fetch(_t);p(e)}}catch(e){l(!1),console.error("Error fetching translations:",e)}finally{l(!1)}})()}),[]),(0,e.useEffect)((()=>{const e=()=>g.current(),t=e=>y.current(e);return g.current(),window.addEventListener("storage",e),window.addEventListener("message",t),()=>{window.removeEventListener("storage",e),window.removeEventListener("message",t)}}),[]),s)return null;const E=(null==c?void 0:c.type)===Rt,w=(null==c?void 0:c.type)===Nt||"login_required"===(null==c||null===(r=c.urlParams)||void 0===r?void 0:r.error),C=E?Dt(u,_t[0],"signInRedirectErrorTitle")||"Sign In Error":Dt(u,_t[0],"loginErrorModalTitle")||"Error",x=c?E?Dt(u,_t[0],"signInRedirectErrorMessage")||"Please try to sign in again.":Dt(u,_t[0],It[null===(o=c.urlParams)||void 0===o?void 0:o.error]||It.DEFAULT):null,k=Dt(u,_t[0],"signInRedirectErrorButton")||Dt(u,_t[1],"header_login_label")||"Sign In",O=Dt(u,_t[1],"header_logout_label")||"Sign Out";return x?t().createElement(ht,{isOpen:n,closeModal:f,title:C,modalContainerCompProps:{style:{color:"var(--podium-cds-color-text-primary)"}}},x,E&&t().createElement(bt,null,t().createElement(ut,{appearance:"primary",onClick:()=>{var e,t,r,o,n;null===(e=window.newrelic)||void 0===e||e.addPageAction(`${Pt}SIGNIN_CLICKED`,{errorType:null==c?void 0:c.type,reason:null==c||null===(t=c.urlParams)||void 0===t?void 0:t.error}),f(),null!==(r=window.webShellClient)&&void 0!==r&&null!==(o=r.identity)&&void 0!==o&&o.signIn?window.webShellClient.identity.signIn({}):(null===(n=window.newrelic)||void 0===n||n.addPageAction(`${Pt}SIGNIN_FALLBACK`,{reason:"webShellClient.identity.signIn is not available"}),console.error("webShellClient.identity.signIn is not available"))}},k)),w&&t().createElement(bt,null,t().createElement(ut,{appearance:"primary",onClick:()=>{var e,t,r,o,n;null===(e=window.newrelic)||void 0===e||e.addPageAction(`${Pt}SIGNOUT_CLICKED`,{errorType:null==c?void 0:c.type,reason:null==c||null===(t=c.urlParams)||void 0===t?void 0:t.error}),null!==(r=window.webShellClient)&&void 0!==r&&null!==(o=r.identity)&&void 0!==o&&o.signOut?window.webShellClient.identity.signOut({}):(null===(n=window.newrelic)||void 0===n||n.addPageAction(`${Pt}SIGNOUT_ERROR`,{reason:"webShellClient.identity.signOut is not available"}),console.error("webShellClient.identity.signOut is not available"),f())}},O))):null};var Mt=n(83);const $t=(0,e.createContext)(Mt.DEFAULT_LOCALE_DATA),Ft=({locale:e,children:r})=>{if("undefined"!=typeof window){const{locale:o}=window.webShellClient,n=null!=e?e:o.get();return t().createElement($t.Provider,{value:n},r)}return t().createElement($t.Provider,{value:null!=e?e:Mt.DEFAULT_LOCALE_DATA},r)},Bt=(0,e.createContext)({}),jt=({translations:e={},children:r})=>t().createElement(Bt.Provider,{value:e},r),Ut=(0,e.createContext)(Object.assign({},Mt.DEFAULT_USER_LOCATION_DATA)),zt=({children:e})=>{if("undefined"==typeof window)return t().createElement(Ut.Provider,{value:Mt.DEFAULT_USER_LOCATION_DATA},e);const{userLocation:r}=window.webShellClient,o=r.get();return t().createElement(Ut.Provider,{value:o},e)},Gt=({children:e,locale:r,translations:o={}})=>t().createElement(zt,null,t().createElement(jt,{translations:o},t().createElement(Ft,{locale:r},e)));function Ht(e){return t().createElement(Gt,e,t().createElement(Lt,e))}})(),i})()));
//# sourceMappingURL=index.umd.js.map