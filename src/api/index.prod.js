"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _axios=_interopRequireDefault(require("axios"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}_axios.default.defaults.baseURL="https://swapi.dev/api";var _default={getPeople:function(){return _axios.default.get("/people/")},getPeopleById:function(e){return _axios.default.get("/people".concat(e.slice(28)))},getPlanet:function(){return _axios.default.get("/planets/")},getPlanetsById:function(e){return _axios.default.get("/planets".concat(e.slice(29)))},getFilms:function(){return _axios.default.get("/films/")},getFilmsById:function(e){return _axios.default.get("/films".concat(e.slice(27)))},getSpecies:function(){return _axios.default.get("/species/")},getSpeciesById:function(e){return _axios.default.get("/species".concat(e.slice(29)))},getVehicles:function(){return _axios.default.get("/vehicles/")},getVehiclesById:function(e){return _axios.default.get("/vehicles".concat(e.slice(30)))},getStarships:function(){return _axios.default.get("/starships/")},getStarshipsById:function(e){return console.log(e.slice(31)),_axios.default.get("/starships".concat(e.slice(31)))}};exports.default=_default;