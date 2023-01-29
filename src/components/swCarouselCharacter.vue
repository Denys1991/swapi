<template>
    <div class="wrapper_carousel_character">
        <h2 class="carousel_name">CHARACTERS</h2>
        <carousel class="carousel" :settings="settings" :breakpoints="breakpoints">
        <slide  v-for="sliderItem in peoples" :key="sliderItem">
            <div class="character">
                <div class="character_text">
                    <h6>{{sliderItem.name}}</h6>
                    <p>Gender: {{ sliderItem.gender }}</p>
                    <p>Height: {{ sliderItem.height }}</p>
                    <p>Mass: {{ sliderItem.mass }}</p>
                    <p>Hair color: {{ sliderItem.hair_color }}</p>
                    <p>Skin color: {{ sliderItem.skin_color }}</p>
                    <p>Eye color: {{ sliderItem.eye_color }}</p>
                    <p>Birth year: {{ sliderItem.birth_year }}</p>
                </div>
            </div>
            
        </slide>
        
        <template #addons>
            <navigation />
            <pagination />
        </template>
        </carousel>
    </div>
  </template>
  
  <script>
  // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

  
  export default {
    name: 'App',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    data(){
        return{
            settings:{
                wrapAround:true,
                autoplay:4000,
                pauseAutoplayOnHover:true,
                itemsToShow:1,
                itemsToScroll:1,
                
            },
            breakpoints:{
                600:{
                    itemsToShow:2,
                    
                },
                850:{
                itemsToShow:3,
                
               },
               1200:{
                itemsToShow:4,
               }
            },
            sliderItems:[
                {
                    id: 1,
                    titleCard: 'DOCTOR QUADPAW',
                    text: 'In a dimly lit operating theater on the world of Frezno, the surgeon known only as Doctor Quadpaw tends to desperate patients with nowhere else to turn. With the help of cybernetic enhancements to sharpen his sight and hearing, and four dexterous organic arms, the skilled physician works swiftly to help those in need -- provided they have the credits to pay.',
                    img: '@/../assets/img/quadpaw.jpg'
                },
                {
                    id: 2,
                    titleCard: 'DEDRA MEERO',
                    text: 'Methodical, polished, and ambitious, Dedra Meero embodies the ideals of the Imperial Security Bureau. She is ever vigilant, collecting and analyzing intelligence from across the galaxy to identify possible signs of disorder. Her ingenuity serves her well, climbing the ranks by piecing together a clear picture of rebel activity from disparate parts.',
                    img: '@/../assets/img/dedra_meero.jpg'
                },
                {
                    id: 3,
                    titleCard: 'CAPTAIN ELK',
                    text: 'An officer in the Imperial Navy, Captain Elk is in command of a Cantwell-class Arrestor cruiser, patrolling space near Segra-Milo, forever on the lookout for suspicious activity.',
                    img: '@/../assets/img/captain_elk.jpeg'
                },
                {
                    id: 4,
                    titleCard: 'KINO LOY',
                    text: 'Kino Loy has adapted to life inside Imperial lock-up. As the floor manager inside the Narkina 5 facility, he maintains order among his fellow inmates, barking commands to ensure a quality performance that will benefit everyone on the cell block. Inside his cell on the off hours, Loy counts down the days until he will once again enjoy the life of a free man.',
                    img: '@/../assets/img/kino_loy.jpg'
                },
            
            ]
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
    
}
  </script>
  
  <style lang="scss" scoped>
  .wrapper_carousel_character{
    padding: 50px 0 50px;
  }
  
  .character{
    max-width: 270px;
    border-radius: 10px;
    background: rgb(36, 36, 36);
    color: #999;
}
.character:hover{
    color: #fff;
    transition: all .5s ease;
    cursor: pointer;
    img{
        transform: scale(1.1);
        transition: all .5s ease;
    }
    h6{
        color: rgb(245, 108, 131);
        transition: all .5s ease;
    }
}
.character_img{
    overflow: hidden;
    border-radius: 10px 10px 0 0; 
    img{
        min-height: 180px;  
    }
     
}
.character_text{
    min-height: 269px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 10px;
    border-left: 2px solid rgb(245, 108, 131);
    h6{
        color: #fff;
        font-weight: 700;
        font-size: 23px;
        margin:20px;        
    }
    
}
  
 
    </style>