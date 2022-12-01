<template>
  <div class="wrapper_carousel_film">
    <h2 class="carousel_name">FILM</h2>
    <carousel class="carousel" :settings="settings" >
      <slide  v-for="sliderItem in sliderItems" :key="sliderItem.id">
        <div class="filmCard" >
            <div class="filmCard_text">
                <h6>{{sliderItem.titleCard}}</h6>
                <p>{{sliderItem.text}}</p>
            </div>
            <div class="filmCard_img">
                <img :src="sliderItem.img" :alt="sliderItem.titleCard">
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
                autoplay:3000,
                pauseAutoplayOnHover:true,
            },
            sliderItems:[
                {
                    id: 1,
                    titleCard: 'STAR WARS: THE RISE OF SKYWALKER',
                    text: 'A powerful enemy returns and Rey must face her destiny.',
                    img: '@/../assets/img/sw_rise_skywalker.jpg'
                },
                {
                    id: 2,
                    titleCard: 'STAR WARS: THE FORCE AWAKENS',
                    text: 'Thirty years after the Battle of Endor, a new threat has risen in the form of the First Order and the villainous Kylo Ren. Meanwhile, Rey, a young scavenger, discovers powers that will change her life -- and possibly save the galaxy.',
                    img: '@/../assets/img/sw_force_awakens.jpg'
                },
            
            ]
        }
    },
    
}
  </script>
  
  <style lang="scss" scoped>
  
  .wrapper_carousel_film{
    padding: 50px 10px 50px 10px;
  }
  
  .carousel__item {
  min-height: 200px;
  width: 100%;
  max-width: 1200px;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;  
}

  //________________________________________________________________filmCard
.filmCard{
    display: flex;
    color: #999;   
    background: rgb(36, 36, 36);
    justify-content: space-between;
    border-radius: 10px;  
    overflow: hidden;  
    max-width: 1200px;
    min-height: 288px;
}
.filmCard:hover{
    transition: all .5s ease;
    color: #fff;
    cursor: pointer;
    h6{
        transition: all .5s ease;
        color: rgb(248, 220, 64);
    }
    img{
        transform: scale(1.1);
        transition: all .5s ease;
    }
}
.filmCard_img{
    overflow: hidden;
    img{
      min-height: 100%;
    }
}
.filmCard_text{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 53%;
    padding: 30px;
    min-height: 100%;
    border-right: 2px solid rgb(248, 220, 64);
    h6{
        font-size: 30px;
        color: #fff;
        margin-bottom: 20px;
    }
}
@media(max-width: 700px){
  .filmCard{
    flex-direction: column;
  }
  .filmCard_text{
    width: 100%;
    border-right: none;
    border-bottom:2px solid rgb(248, 220, 64);
  }
}
    </style>