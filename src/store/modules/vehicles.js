import api from "@/api"

const state = {
    vehicles:[],
    vehiclesById:{},
    next:'',
    prev:'',
    count:0
}
const getters = {
    getVehicles(state){
        return state.vehicles
    },
    getVehiclesById(state){
        return state.vehiclesById
    }
}
const actions = {
    getVehicles({commit}){
        api.getVehicles().then(response=>{
            commit('setVehicles', response.data.results)
        }).catch(err=>console.error(err))
    },
    getVehiclesById({commit},id){
        api.getVehiclesById(id).then(response=>{
            commit('setVehiclesById',{key:'vehiclesById', value:response.data})
        })
    }
}
const mutations = {
    setVehicles(state, payload){
        return state.vehicles = payload
    },
    setVehiclesById(state, payload){
        return state[payload.key] = payload.value
    }
}
export default {
    state,
    getters,
    actions,
    mutations,
}