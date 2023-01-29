import api from "@/api"

const state = {
    species:[],
    speciesId:{},
    next:'',
    prev:'',
    count:0
}
const getters ={
    getSpecies(state){
        return state.species
    },
    getSpeciesById(state){
        return state.speciesId
    },
}
const actions = {
    getSpecies({commit}){
        api.getSpecies().then(response=>{
            commit('setSpecies', response.data.results)
        }).catch(err=>console.error(err))
    },
    getSpeciesById({commit}, id){
        api.getSpeciesById(id).then(response=>{
            commit('setSpeciesById',{key:'speciesId', value:response.data})
        })
    }
}
const mutations = {
    setSpecies(state, payload){
        state.species = payload
    },
    setSpeciesById(state, payload){
        state[payload.key] = payload.value
    }
}
export default {
    state,
    getters,
    actions,
    mutations,
}