<template>
    <div class="overlay_starships" @click="cardMiniStarshipsShow()"></div>
    <h1 class="title_starships">{{titleName}}</h1>
    <div class="wrapperCard">
        <div class="cards_starships" v-for="starship in starships" :key="starship" @click="cardMiniStarshipsShow(starship.url)">
            <div class="card_name-starships">
                        {{ starship.name }}  
                </div>
                <div class="card_options-starships">
                    <p>Starship class: {{ starship.starship_class }}</p>
                </div>
                <div class="card_space"></div>
                
        </div>
    </div>
    <div class="card_modal-starships">
        <div class="starships_open">
            <div class="starships_open-text">
                <h6>{{ starshipsById.name }}</h6>
                <div class="starships_options">                    
                    <p>Starship class: {{ starshipsById.starship_class }}</p>
                    <p>Model: {{ starshipsById.model }}</p>
                    <p>Manufacturer: {{ starshipsById.manufacturer }}</p>
                    <p>Passengers: {{ starshipsById.passengers }}</p>
                    <p>Max atmosphering speed: {{ starshipsById.max_atmosphering_speed }}</p>
                    <p>Consumables: {{ starshipsById.consumables }}</p>
                    <p>MGLT: {{ starshipsById.MGLT }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                titleName: 'Starships in the STAR WARS'
            }
        },
        mounted(){
           this.$store.dispatch('getStarships');

        },
        computed:{
            starships(){
                return this.$store.getters.getStarships;
            },
            starshipsById(){
                return this.$store.getters.getStarshipsById;
            }
        },
        methods:{
            cardMiniStarshipsShow(url){
                const overlay = document.querySelector('.overlay_starships');
                overlay.classList.toggle('overlayStarshipsOpen');
                const modal = document.querySelector('.starships_open');
                modal.classList.toggle('modalStarshipsOpen');
                const body = document.querySelector('body');
                body.classList.toggle('body_stop');
                if (url !== undefined){
                    return this.$store.dispatch('getStarshipsById', url)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
.overlay_starships{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
    display: none;
    z-index: 10;
}
.title_starships{
    display: flex;
    justify-content: center;
    color: white;
    margin: 20px 0;
    font-size: 30px;
    font-weight: bolder;
}
.wrapperCard{
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: stretch;
}
//---------------------------------------------------------------------------------------
.cards_starships{
    color: #999;
    display: flex;    
    flex-direction: column;
    max-width: 300px;
    background: rgb(36, 36, 36);
    font-size: 25px;
    text-align: center;
    width: 30%;
}  
.cards_starships:hover{
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
    .card_name-starships{
    padding: 10px 30px 30px 20px;
    font-size: larger;
}
    .card_options-starships{
        flex-grow: 1;
    }
    .card_space{
    width: 30px;
    border-top: 5px solid #999;
    margin: 30px;    
}
//-----------------------------------------------------------------------------------
    .card_modal-starships{
        height: 100%;
        display: flex;
        justify-content: center;
}
    .starships_open{
        display: flex;
        height: 100%;    
        color: #999;   
        background: rgb(36, 36, 36);
        border-radius: 10px;
        overflow: hidden;
        max-width: 500px;
        max-height:370px;
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 11;
}
    .starships_open-text{
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
                
    .starships_options{
        font-size: 20px;
        display: flex;
        flex-direction: column;
        gap: 5px;
}
//---------------------------------------------------------------------------------------
.overlayStarshipsOpen{    
    display: block;
    overflow: hidden;
}
.modalStarshipsOpen{    
    display: flex;
}
</style>