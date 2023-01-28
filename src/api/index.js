import axios from "axios";

axios.defaults.baseURL="https://swapi.dev/api"

export default { 
    getPeople() {
        return axios.get("/people/");
    },
    getPeopleById(id){
        return axios.get(`/people${id.slice(28)}`);
    },
    getPlanet(){
        return axios.get("/planets/")
    },
    getPlanetsById(id){
        return axios.get(`/planets${id.slice(29)}`)
    },
    getFilms(){
        return axios.get("/films/")
    },
    getFilmsById(id){
        console.log(id.slice(27))
        return axios.get(`/films${id.slice(27)}`)
    },
}