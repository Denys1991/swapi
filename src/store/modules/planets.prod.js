"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _api=_interopRequireDefault(require("@/api"));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var state={planets:["test"],planetsInfo:{},next:"",prev:"",count:0},getters={getPlanets:function(t){return t.planets},getPlanetsById:function(t){return t.planetsInfo}},actions={getPlanets:function(t){var e=t.commit;_api.default.getPlanet().then(function(t){console.log(t),e("setPlanets",t.data.results)}).catch(function(t){return console.error(t)})},getPlanetsById:function(t,e){var n=t.commit;_api.default.getPlanetsById(e).then(function(t){n("setPlanetsById",{key:"planetsInfo",value:t.data})})}},mutations={setPlanets:function(t,e){t.planets=e},setPlanetsById:function(t,e){t[e.key]=e.value}},_default={state:state,getters:getters,actions:actions,mutations:mutations};exports.default=_default;