import api from "@/api"
const state = {
    people:['test', 'cours', 'choise'],
    peopleInfo:{},
    next:'',
    prev:'',
    count:0
}
const getters = {
    getPeople(state){
        return state.people
    },
    getPeopleById(state){
        return state.peopleInfo
    }
}
const actions = {
    getPeople({commit}){
    api.getPeople().then(response => {
        console.log(response);
        commit('setPeople',response.data.results)
        }).catch(err=>console.error(err))
    },
    getPeopleById({commit}, id){
        api.getPeopleById(id).then(response=>{
            commit('setPeopleById',{key:'peopleInfo', value:response.data})
        })
    }

}
const mutations = {
    setPeople(state, payload){
        console.log(payload);
        state.people = payload
    },
    setPeopleById(state, payload){
        state[payload.key] = payload.value;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}