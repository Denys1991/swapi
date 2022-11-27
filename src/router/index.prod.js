"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _vueRouter=require("vue-router");function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache();if(r&&r.has(e))return r.get(e);var t,o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e){Object.prototype.hasOwnProperty.call(e,u)&&((t=n?Object.getOwnPropertyDescriptor(e,u):null)&&(t.get||t.set)?Object.defineProperty(o,u,t):o[u]=e[u])}return o.default=e,r&&r.set(e,o),o}var routes=[{path:"/",name:"home",component:function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("../pages/swHome"))})}},{path:"/people",name:"people",component:function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("../pages/swPeople"))})}}],router=(0,_vueRouter.createRouter)({history:(0,_vueRouter.createWebHistory)(process.env.BASE_URL),routes:routes}),_default=router;exports.default=router;