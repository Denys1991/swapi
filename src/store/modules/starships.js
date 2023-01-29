import api from "@/api"
const state = {
    starships:['test'],
    starshipsInfo:{},
    next:'',
    prev:'',
    count:0
}
const getters = {
   getStarships(state){
    return state.starships
   },
   getStarshipsById(state){
    return state.starshipsInfo
   }

}
const actions = {
    getStarships({commit}){
        api.getStarships().then(response=>{
            console.log(response);
            commit('setStarships',response.data.results)}).catch(err=>console.error(err))
    },
    getStarshipsById({commit},id){
        api.getStarshipsById(id).then(response=>{
            console.log(response);
            commit('getStarshipsById',{key:'starshipsInfo', value:response.data})
        })
    }
}
const mutations = {
    setStarships(state, payload){
        console.log(payload);
        state.starships = payload
    },
    getStarshipsById(state, payload){
        console.log(payload);
        state[payload.key] = payload.value
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}