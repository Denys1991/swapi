<template>
    <div class="overlay_planets" @click="cardMiniShow()"></div>
    <h1 class="title_planet">{{titleName}}</h1>
    <div class="text_planet">
        <div class="ul_card" >
            <div class="swcard" v-for="planet in planets" :key="planet" @click="cardMiniShow(planet.url)">
                <div class="card_name-planets">
                    {{ planet.name }}  
                </div>
                <div class="card_options-planets">
                    <p>Terrain: {{ planet.terrain }}</p>
                    <p>Climate: {{ planet.climate }}</p>
                </div>    
                <div class="card_space"></div>
            </div>
        </div>
    </div>
    
    <div class="card_modal-planets">
        <div class="planet_open">
            <div class="planet_open-text">
                <h6>{{ planetsId.name }}</h6>
                <div class="planet_options">
                    <p>Terrain: {{ planetsId.terrain }}</p>
                    <p>Climate: {{ planetsId.climate }}</p>
                    <p>Population: {{ planetsId.population }}</p>
                    <p>Orbital period: {{ planetsId.orbital_period }}</p>
                    <p>Created: {{ planetsId.created }}</p>
                    <p>Edited: {{ planetsId.edited }}</p>
                    <p>Diameter: {{ planetsId.diameter }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//import api from "@/api"
import axios from "axios";    
    export default{
        data(){
            return{
                titleName: "Planets in the STAR WARS",
                overlay: false,                
            }
        },
        mounted(){
            this.$store.dispatch('getPlanets');
            //this.$store.dispatch('getPlanetsById', 1);

        },
        computed:{
            planets(){
                return this.$store.getters.getPlanets;
            },
            planetsId(){
                return this.$store.getters.getPlanetsById;
            }
        },
        methods:{
            residentPlanets(resident){
                if(resident.length !== 0){                    
                    return axios.get(resident).then(response=>{
                        response.data.results
                    });
                }
            },
            cardMiniShow(url){
                const overlay = document.querySelector('.overlay_planets');
                overlay.classList.toggle('overlayPlanetsOpen');
                const modal = document.querySelector('.planet_open');
                modal.classList.toggle('modalPlanetsOpen');
                const body = document.querySelector('body');
                body.classList.toggle('body_stop')
                
                if (url !== undefined){
                    return this.$store.dispatch('getPlanetsById', url)
                }
            }
        }
 }
</script>
<style lang="scss" scoped>

.title_planet{
    display: flex;
    justify-content: center;
    color: white;
    margin: 20px 0;
    font-size: 30px;
    font-weight: bolder;
}
.text_planet{
    margin: 50px 0;
}
.ul_card{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: stretch;
}
.overlay_planets{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
    display: none;
    z-index: 10;
}
.overlayPlanetsOpen{    
    display: block;
    overflow: hidden;
}

//_____________________________________________________________________swcard
.wrapperCard{
    max-width: 1200px;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
}
.swcard{
    color: #999;
    display: flex;    
    flex-direction: column;
    max-width: 300px;
    background: rgb(36, 36, 36);
    font-size: 25px;
    text-align: center;
    width: 30%;
}  
.swcard:hover{
    color: #000;
    transition: all .5s ease;
    cursor: pointer;
    img{
        transform: scale(1.1);
        transition: all .5s ease;
    }
    .card_space{
        border-top: 5px solid #000;
        transition: all .5s ease;
    }
    
}

.card_space{
    width: 30px;
    border-top: 5px solid #999;
    margin: 30px;    
}

.card_name-planets{
    padding: 10px 30px 30px 20px;
    font-size: larger;
}
.card_options-planets{
    flex-grow: 1;
}
//______________________________________________________________________

.card_modal-planets{
    height: 100%;
    display: flex;
    justify-content: center;
}
.planet_open{
    display: flex;
    height: 100%;    
    color: #999;   
    background: rgb(36, 36, 36);
    border-radius: 10px;
    overflow: hidden;
    max-width: 500px;
    max-height: 300px;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 11;
}
.modalPlanetsOpen{    
    display: flex;
}
.planet_open-text{
    width: 100%;
    border-left: 2px solid rgb(245, 108, 131);
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    h6{
        font-size: 30px;
        color: #fff;
        margin-bottom: 20px;
        text-align: center;
    }      
}
.planet_options{
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

</style>
