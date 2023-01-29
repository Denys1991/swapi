import { createStore } from 'vuex'
import people from './modules/people.js'
import planets from './modules/planets.js'
import films from './modules/films.js'
import species from './modules/species.js'
import vehicles from './modules/vehicles.js'
import starships from './modules/starships.js'
export default createStore({
  state: {
  },  
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    people,
    planets,
    films,
    species,
    vehicles,
    starships
  }
})
