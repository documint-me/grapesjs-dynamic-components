/*! grapesjs-dynamic-components - 1.0.1 */
!function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define([],t):'object'==typeof exports?exports["grapesjs-dynamic-components"]=t():e["grapesjs-dynamic-components"]=t()}('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:this,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(e,'__esModule',{value:!0})}},t={};function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}e.r(t),e.d(t,{default:()=>c});const c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r(r({},{dynamicName:'dynamic',dynamicOpts:{}}),t),o=n.dynamicName,c=n.dynamicOpts,i=e.Components;i.addType(o,{model:r({defaults:{content:"".concat(o,"...")}},c)}),e.on('block:drag:stop',(function(e,t){var n=t.getContent();if(n.type===o){var r=e.parent().get('type');n.switch.forEach((function(t){t.parents.includes(r)&&e.replaceWith({type:t.type})})),e.get('type')===o&&e.remove()}}))};return t})()));
//# sourceMappingURL=index.js.map