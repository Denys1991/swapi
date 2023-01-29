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
        return axios.get(`/films${id.slice(27)}`)
    },
    getSpecies(){
        return axios.get("/species/")
    },
    getSpeciesById(id){
        return axios.get(`/species${id.slice(29)}`)
    },
    getVehicles(){
        return axios.get("/vehicles/")
    },
    getVehiclesById(id){
        return axios.get(`/vehicles${id.slice(30)}`)
    },
    getStarships(){
        return axios.get("/starships/")
    },
    getStarshipsById(id){
        console.log(id.slice(31))
        return axios.get(`/starships${id.slice(31)}`)
    },
}