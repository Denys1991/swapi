import api from "@/api"
const state = {
    planets:['test'],
    planetsInfo:{},
    next:'',
    prev:'',
    count:0
}
const getters = {
    getPlanets(state){
        return state.planets
    },
    getPlanetsById(state){
        return state.planetsInfo
    }

}
const actions = {
    getPlanets({commit}){
        api.getPlanet().then(response=>{
            console.log(response);
            commit('setPlanets',response.data.results)
        }).catch(err=>console.error(err))
    },
    getPlanetsById({commit}, id){
        api.getPlanetsById(id).then(response=>{
            commit('setPlanetsById',{key:'planetsInfo', value:response.data})
        })
    }
}
const mutations = {
    setPlanets(state, payload){
        console.log(payload);
        state.planets = payload
    },
    setPlanetsById(state, payload){
        console.log(payload)
        state[payload.key] = payload.value;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}