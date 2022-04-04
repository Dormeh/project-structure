/*! For license information please see 935-935.js.LICENSE.txt */
(self.webpackChunkproject_structure=self.webpackChunkproject_structure||[]).push([[935],{503:(e,r)=>{!function(){"use strict";var e={"./client-src/modules/logger/SyncBailHookFake.js":function(e){e.exports=function(){return{call:function(){}}}},"./node_modules/webpack/lib/logging/Logger.js":function(e,r){function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if(void 0!==("undefined"!=typeof Symbol?Symbol:function(e){return e})&&null!=e[("undefined"!=typeof Symbol?Symbol:function(e){return e}).iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}function n(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=Object.freeze({error:"error",warn:"warn",info:"info",log:"log",debug:"debug",trace:"trace",group:"group",groupCollapsed:"groupCollapsed",groupEnd:"groupEnd",profile:"profile",profileEnd:"profileEnd",time:"time",clear:"clear",status:"status"});r.LogType=i;var a=("undefined"!=typeof Symbol?Symbol:function(e){return e})("webpack logger raw log method"),u=("undefined"!=typeof Symbol?Symbol:function(e){return e})("webpack logger times"),l=("undefined"!=typeof Symbol?Symbol:function(e){return e})("webpack logger aggregated times"),c=function(){function e(r,t){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this[a]=r,this.getChildLogger=t}var r,o,c;return r=e,(o=[{key:"error",value:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];this[a](i.error,r)}},{key:"warn",value:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];this[a](i.warn,r)}},{key:"info",value:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];this[a](i.info,r)}},{key:"log",value:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];this[a](i.log,r)}},{key:"debug",value:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];this[a](i.debug,r)}},{key:"assert",value:function(e){if(!e){for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];this[a](i.error,t)}}},{key:"trace",value:function(){this[a](i.trace,["Trace"])}},{key:"clear",value:function(){this[a](i.clear)}},{key:"status",value:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];this[a](i.status,r)}},{key:"group",value:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];this[a](i.group,r)}},{key:"groupCollapsed",value:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];this[a](i.groupCollapsed,r)}},{key:"groupEnd",value:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];this[a](i.groupEnd,r)}},{key:"profile",value:function(e){this[a](i.profile,[e])}},{key:"profileEnd",value:function(e){this[a](i.profileEnd,[e])}},{key:"time",value:function(e){this[u]=this[u]||new Map,this[u].set(e,process.hrtime())}},{key:"timeLog",value:function(e){var r=this[u]&&this[u].get(e);if(!r)throw new Error("No such label '".concat(e,"' for WebpackLogger.timeLog()"));var o=process.hrtime(r);this[a](i.time,[e].concat(t(o)))}},{key:"timeEnd",value:function(e){var r=this[u]&&this[u].get(e);if(!r)throw new Error("No such label '".concat(e,"' for WebpackLogger.timeEnd()"));var o=process.hrtime(r);this[u].delete(e),this[a](i.time,[e].concat(t(o)))}},{key:"timeAggregate",value:function(e){var r=this[u]&&this[u].get(e);if(!r)throw new Error("No such label '".concat(e,"' for WebpackLogger.timeAggregate()"));var t=process.hrtime(r);this[u].delete(e),this[l]=this[l]||new Map;var o=this[l].get(e);void 0!==o&&(t[1]+o[1]>1e9?(t[0]+=o[0]+1,t[1]=t[1]-1e9+o[1]):(t[0]+=o[0],t[1]+=o[1])),this[l].set(e,t)}},{key:"timeAggregateEnd",value:function(e){if(void 0!==this[l]){var r=this[l].get(e);void 0!==r&&(this[l].delete(e),this[a](i.time,[e].concat(t(r))))}}}])&&n(r.prototype,o),c&&n(r,c),e}();r.Logger=c},"./node_modules/webpack/lib/logging/createConsoleLogger.js":function(e,r,t){function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if(void 0!==("undefined"!=typeof Symbol?Symbol:function(e){return e})&&null!=e[("undefined"!=typeof Symbol?Symbol:function(e){return e}).iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}var i=t("./node_modules/webpack/lib/logging/Logger.js").LogType,a=function(e){if("string"==typeof e){var r=new RegExp("[\\\\/]".concat(e.replace(/[-[\]{}()*+?.\\^$|]/g,"\\$&"),"([\\\\/]|$|!|\\?)"));return function(e){return r.test(e)}}return e&&"object"==typeof e&&"function"==typeof e.test?function(r){return e.test(r)}:"function"==typeof e?e:"boolean"==typeof e?function(){return e}:void 0},u={none:6,false:6,error:5,warn:4,info:3,log:2,true:2,verbose:1};e.exports=function(e){var r=e.level,t=void 0===r?"info":r,n=e.debug,l=void 0!==n&&n,c=e.console,f="boolean"==typeof l?[function(){return l}]:[].concat(l).map(a),s=u["".concat(t)]||0;return function(e,r,t){var n=function(){return Array.isArray(t)?t.length>0&&"string"==typeof t[0]?["[".concat(e,"] ").concat(t[0])].concat(o(t.slice(1))):["[".concat(e,"]")].concat(o(t)):[]},a=f.some((function(r){return r(e)}));switch(r){case i.debug:if(!a)return;"function"==typeof c.debug?c.debug.apply(c,o(n())):c.log.apply(c,o(n()));break;case i.log:if(!a&&s>u.log)return;c.log.apply(c,o(n()));break;case i.info:if(!a&&s>u.info)return;c.info.apply(c,o(n()));break;case i.warn:if(!a&&s>u.warn)return;c.warn.apply(c,o(n()));break;case i.error:if(!a&&s>u.error)return;c.error.apply(c,o(n()));break;case i.trace:if(!a)return;c.trace();break;case i.groupCollapsed:if(!a&&s>u.log)return;if(!a&&s>u.verbose){"function"==typeof c.groupCollapsed?c.groupCollapsed.apply(c,o(n())):c.log.apply(c,o(n()));break}case i.group:if(!a&&s>u.log)return;"function"==typeof c.group?c.group.apply(c,o(n())):c.log.apply(c,o(n()));break;case i.groupEnd:if(!a&&s>u.log)return;"function"==typeof c.groupEnd&&c.groupEnd();break;case i.time:if(!a&&s>u.log)return;var l=1e3*t[1]+t[2]/1e6,g="[".concat(e,"] ").concat(t[0],": ").concat(l," ms");"function"==typeof c.logTime?c.logTime(g):c.log(g);break;case i.profile:"function"==typeof c.profile&&c.profile.apply(c,o(n()));break;case i.profileEnd:"function"==typeof c.profileEnd&&c.profileEnd.apply(c,o(n()));break;case i.clear:if(!a&&s>u.log)return;"function"==typeof c.clear&&c.clear();break;case i.status:if(!a&&s>u.info)return;"function"==typeof c.status?0===t.length?c.status():c.status.apply(c,o(n())):0!==t.length&&c.info.apply(c,o(n()));break;default:throw new Error("Unexpected LogType ".concat(r))}}}},"./node_modules/webpack/lib/logging/runtime.js":function(e,r,t){function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var n=t("./client-src/modules/logger/SyncBailHookFake.js"),i=t("./node_modules/webpack/lib/logging/Logger.js").Logger,a=t("./node_modules/webpack/lib/logging/createConsoleLogger.js"),u={level:"info",debug:!1,console:console},l=a(u);r.getLogger=function(e){return new i((function(t,o){void 0===r.hooks.log.call(e,t,o)&&l(e,t,o)}),(function(t){return r.getLogger("".concat(e,"/").concat(t))}))},r.configureDefaultLogger=function(e){o(u,e),l=a(u)},r.hooks={log:new n(["origin","type","args"])}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.d=function(e,r){for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};!function(){o.r(n),o.d(n,{default:function(){return e}});var e=o("./node_modules/webpack/lib/logging/runtime.js")}();var i=r;for(var a in n)i[a]=n[a];n.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})}()},935:(e,r,t)=>{"use strict";var o,n=t(503),i=t.n(n);o="info",i().configureDefaultLogger({level:o});i().getLogger("webpack-dev-server")}}]);
//# sourceMappingURL=935-935.js.map