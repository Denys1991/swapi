"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var _vue=_interopRequireWildcard(require("vue")),_App=_interopRequireDefault(require("./App.vue")),_vueRouter=_interopRequireDefault(require("vue-router")),_router=_interopRequireDefault(require("./router")),_axios=_interopRequireDefault(require("axios")),_vueAxios=_interopRequireDefault(require("vue-axios")),_store=_interopRequireDefault(require("./store"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache();if(r&&r.has(e))return r.get(e);var t,u={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e){Object.prototype.hasOwnProperty.call(e,i)&&((t=o?Object.getOwnPropertyDescriptor(e,i):null)&&(t.get||t.set)?Object.defineProperty(u,i,t):u[i]=e[i])}return u.default=e,r&&r.set(e,u),u}(0,_vue.createApp)(_App.default).use(_store.default).use(_router.default).mount("#app"),_vue.default.use(_vueRouter.default),_vue.default.use(_vueAxios.default,_axios.default);