<template>
    <div class="overlay_films" @click="cardMiniFilmShow()"></div>
    <h1 class="title_films">{{titleName}}</h1>
    <div class="wrapperCard">
        <div class="cards_films" v-for="film in films" :key="film" @click="cardMiniFilmShow(film.url)">
            <div class="card_name-film">
                        {{ film.title }}  
                </div>
                <div class="card_options-film">
                    <p>Director: {{ film.director }}</p>
                    <p>Episode: {{ film.episode_id }}</p>
                </div>
                <div class="card_space"></div>
                
        </div>
    </div>
    <div class="card_modal-film">
        <div class="film_open">
            <div class="film_open-text">
                <h6>STAR WARS episode {{ filmsById.episode_id }}: {{ filmsById.title }}</h6>
                <div class="film_options">                    
                    <p>Director: {{ filmsById.director }}</p>
                    <p>Producer: {{ filmsById.producer }}</p>
                    <p>Release date: {{ filmsById.release_date }}</p>
                    <p>Opening crawl: "{{ filmsById.opening_crawl }}"</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                titleName: 'Films in the STAR WARS'
            }
        },
        mounted(){
           this.$store.dispatch('getFilms');

        },
        computed:{
            films(){
                return this.$store.getters.getFilms;
            },
            filmsById(){
                
                return this.$store.getters.getFilmsById;
            }
        },
        methods:{
            cardMiniFilmShow(url){
                const overlay = document.querySelector('.overlay_films');
                overlay.classList.toggle('overlayFilmsOpen');
                const modal = document.querySelector('.film_open');
                modal.classList.toggle('modalFilmsOpen');
                const body = document.querySelector('body');
                body.classList.toggle('body_stop');
                if (url !== undefined){
                    return this.$store.dispatch('getFilmsById', url)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
.overlay_films{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
    display: none;
    z-index: 10;
}
.title_films{
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
.cards_films{
    color: #999;
    display: flex;    
    flex-direction: column;
    max-width: 300px;
    background: rgb(36, 36, 36);
    font-size: 25px;
    text-align: center;
    width: 30%;
}  
.cards_films:hover{
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
    .card_name-film{
    padding: 10px 30px 30px 20px;
    font-size: larger;
}
    .card_options-film{
        flex-grow: 1;
    }
    .card_space{
    width: 30px;
    border-top: 5px solid #999;
    margin: 30px;    
}
//-----------------------------------------------------------------------------------
    .card_modal-film{
        height: 100%;
        display: flex;
        justify-content: center;
}
    .film_open{
        display: flex;
        height: 100%;    
        color: #999;   
        background: rgb(36, 36, 36);
        border-radius: 10px;
        overflow: hidden;
        max-width: 700px;
        max-height:500px;
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 11;
}
    .film_open-text{
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
                
    .film_options{
        font-size: 20px;
        display: flex;
        flex-direction: column;
        gap: 5px;
}
//---------------------------------------------------------------------------------------
.overlayFilmsOpen{    
    display: block;
    overflow: hidden;
}
.modalFilmsOpen{    
    display: flex;
}
</style>