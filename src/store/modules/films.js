import api from "@/api"
const state = {
    films:['test'],
    filmsInfo:{},
    next:'',
    prev:'',
    count:0
}
const getters = {
   getFilms(state){
    return state.films
   },
   getFilmsById(state){
    return state.filmsInfo
   }

}
const actions = {
    getFilms({commit}){
        api.getFilms().then(response=>{
            console.log(response);
            commit('setFilms',response.data.results)}).catch(err=>console.error(err))
    },
    getFilmsById({commit},id){
        api.getFilmsById(id).then(response=>{
            console.log(response);
            commit('setFilmsById',{key:'filmsInfo', value:response.data})
        })
    }
}
const mutations = {
    setFilms(state, payload){
        console.log(payload);
        state.films = payload
    },
    setFilmsById(state, payload){
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