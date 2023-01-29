<template>
    <div class="overlay_species" @click="cardMiniSpeciesShow()"></div>
    <h1 class="title_species">{{ titleName }}</h1>
    <div class="wrapperCard">
        <div class="cards_species" v-for="spie in species" :key="spie" @click="cardMiniSpeciesShow(spie.url)">
            <div class="card_name-species">
                {{ spie.name }}
            </div>
            <div class="card_options-species">
                <p>{{spie.classification}} </p>
                <p></p>
            </div>
            <div class="card_space"></div>
        </div>
    </div>
    <div class="card_modal-species">
        <div class="species_open">
            <div class="species_open-text">
                <h6>{{ speciesById.name }}</h6>
                <div class="species_options">                    
                    <p>Classification: {{ speciesById.classification }}</p>
                    <p>Average Height: {{ speciesById.average_height }}</p>
                    <p>Average Lifespan: {{ speciesById.average_lifespan }}</p>
                    <p>Designation: {{ speciesById.designation }}</p>
                    <p>Language: {{ speciesById.language }}</p>
                    <p>Skin Colors: {{ speciesById.skin_colors }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                titleName:'Species in the STAR WARS'
            }
        },
        mounted(){
           this.$store.dispatch('getSpecies');
        },
        computed:{
            species(){
                return this.$store.getters.getSpecies;
            },
            speciesById(){
                return this.$store.getters.getSpeciesById;
            },
        },
        methods:{
            cardMiniSpeciesShow(url){
                const overlay = document.querySelector('.overlay_species');
                overlay.classList.toggle('overlaySpeciesOpen');
                const modal = document.querySelector('.species_open');
                modal.classList.toggle('modalSpeciesOpen');
                const body = document.querySelector('body');
                body.classList.toggle('body_stop');
                if (url !== undefined){
                    return this.$store.dispatch('getSpeciesById', url)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .overlay_species{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        left: 0;
        top: 0;
        display: none;
        z-index: 10;
    }
    .title_species{
        display: flex;
        justify-content: center;
        color: white;
        margin: 20px 0;
        font-size: 30px;
        font-weight: bolder;
    }
    //-------------------------------------------------------------------------------------
    .wrapperCard{
        margin: 50px auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        align-items: stretch;
    }
    .cards_species{
        color: #999;
        display: flex;    
        flex-direction: column;
        max-width: 300px;
        background: rgb(36, 36, 36);
        font-size: 25px;
        text-align: center;
        width: 30%;
    }
    .cards_species:hover{
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
    .card_name-species{
        padding: 10px 30px 30px 20px;
        font-size: larger;
    }
    .card_options-species{
        flex-grow: 1;
    }
    .card_space{
        width: 30px;
        border-top: 5px solid #999;
        margin: 30px;
    }
    //-----------------------------------------------------------------------------------
    .card_modal-species{
        height: 100%;
        display: flex;
        justify-content: center;
    }
    .species_open{
        display: flex;
        height: 100%;
        color: #999;   
        background: rgb(36, 36, 36);
        border-radius: 10px;
        overflow: hidden;
        max-width: 500px;
        max-height:300px;
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 11;
    }
    .species_open-text{
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
    .species_options{
        font-size: 20px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .overlaySpeciesOpen{    
    display: block;
    overflow: hidden;
    }
    .modalSpeciesOpen{    
        display: flex;
    }
</style>