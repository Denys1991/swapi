<template>
    <div class="overlay_people" @click="cardMiniPlanetShow()"></div>
    <h1 class="title_people">{{titleName}}</h1>
    <div class="wrapperCard">
        <div class="text_people" v-for="people in peoples" :key="people" @click="cardMiniPlanetShow(people.url)">
            <div class="card_name-people">
                        {{ people.name }}  
                    </div>
                    <div class="card_options-people">
                        <p>Gender: {{ people.gender }}</p>
                        
                    </div>
                    <div class="card_space"></div>
        </div> 
    </div>
    <div class="card_modal-people">
        <div class="people_open">
            <div class="people_open-text">
                <h6>{{ peoplesById.name }}</h6>
                <div class="people_options">
                    <p>Height: {{ peoplesById.height }}</p>
                    <p>Mass: {{ peoplesById.mass }}</p>
                    <p>Hair color: {{ peoplesById.hair_color }}</p>
                    <p>Skin color: {{ peoplesById.skin_color }}</p>
                    <p>Eye color: {{ peoplesById.eye_color }}</p>
                    <p>Birth year: {{ peoplesById.birth_year }}</p>
                    <p>Gender: {{ peoplesById.gender }}</p>
                    <p v-if = 'showHomeWorld' @click="getHomeWorld(peoplesById.homeworld)">HomeWorld</p>
                    <p v-else> {{ homeWorld }} </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                titleName: "Peoples in the STAR WARS",
                showHomeWorld: true,
                homeWorld:'',

            }
        },
        mounted(){
            this.$store.dispatch('getPeople');
            

        },
        computed:{
            peoples(){
                return this.$store.getters.getPeople;
            },     
            peoplesById(){
                return this.$store.getters.getPeopleById;
            },
                         
        },
        methods:{
            cardMiniPlanetShow(url){ 
                if(this.showHomeWorld===false){
                    this.showHomeWorld = true
                }                       
                const overlay = document.querySelector('.overlay_people');
                overlay.classList.toggle('overlayPeoplesOpen');
                const modal = document.querySelector('.people_open');
                modal.classList.toggle('modalPeoplesOpen');
                const body = document.querySelector('body');
                body.classList.toggle('body_stop');
                if (url !== undefined){
                    return this.$store.dispatch('getPeopleById', url)
                }
            },
            getHomeWorld(url){                
                this.$store.dispatch('getPlanetsById', url)
                let ld = this.$store.getters.getPlanetsById;
                console.log(ld)
                this.homeWorld = ld.name;
                this.showHomeWorld = false;
            },
            
    }
    }    
</script>
<style lang="scss" scoped>
.title_people{
    display: flex;
    justify-content: center;
    color: white;
    margin: 20px 0;
    font-size: 30px;
    font-weight: bolder;
}
.wrapperCard{
    //max-width: 1200px;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: stretch;
}
.text_people{
    color: #999;
    display: flex;    
    flex-direction: column;
    max-width: 300px;
    background: rgb(36, 36, 36);
    font-size: 25px;
    text-align: center;
    width: 30%;
}  
.text_people:hover{
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

.card_name-people{
    padding: 10px 30px 30px 20px;
    font-size: larger;
}
.card_options-people{
    flex-grow: 1;
}
//-------------------------------------------------------------------------------------
.overlay_people{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
    display: none;
    z-index: 10;
}
.overlayPeoplesOpen{    
    display: block;
    overflow: hidden;
}
.card_modal-people{
    height: 100%;
    display: flex;
    justify-content: center;
}
.people_open{
    height: 100%;    
    color: #999;   
    background: rgb(36, 36, 36);
    border-radius: 10px;
    overflow: hidden;
    max-width: 500px;
    max-height: 350px;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 11;
}
.modalPeoplesOpen{    
    display: flex;
}
.people_open-text{
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
.people_options{
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
</style>