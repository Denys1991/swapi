import { createStore } from 'vuex'
import people from './modules/people.js'
import planets from './modules/planets.js'
import films from './modules/films.js'
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
    films
  }
})
