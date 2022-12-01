<template>
    <div class="wrapper_carousel_starship">
        <h2 class="carousel_name">STARSHIP</h2>
      <carousel class="carousel" :settings="settings" >
        <slide  v-for="sliderItem in sliderItems" :key="sliderItem.id">
          <div class="starshipCard" >
              <div class="starshipCard_text">
                  <h6>{{sliderItem.titleCard}}</h6>
                  <p>{{sliderItem.text}}</p>
              </div>
              <div class="starshipCard_img">
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
                  autoplay:2000,
                  pauseAutoplayOnHover:true,
                  itemsToShow:3,
                  itemsToScroll:1,
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
                      text: 'Thirty years after the Battle of Endor...',
                      img: '@/../assets/img/sw_force_awakens.jpg'
                  },
                  {
                      id: 3,
                      titleCard: 'STAR WARS: THE RISE OF SKYWALKER',
                      text: 'A powerful enemy returns and Rey must face her destiny.',
                      img: '@/../assets/img/sw_rise_skywalker.jpg'
                  },
                  {
                      id: 4,
                      titleCard: 'STAR WARS: THE FORCE AWAKENS',
                      text: 'Thirty years after the Battle of Endor...',
                      img: '@/../assets/img/sw_force_awakens.jpg'
                  },
                  {
                      id: 5,
                      titleCard: 'STAR WARS: THE FORCE AWAKENS',
                      text: 'Thirty years after the Battle of Endor...',
                      img: '@/../assets/img/sw_force_awakens.jpg'
                  },
              
              ]
          }
      },
      
  }
    </script>
    
    <style lang="scss" scoped>
    
    .wrapper_carousel_starship{
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
  
    //________________________________________________________________starshipCard
  .starshipCard{
      display: flex;
      color: #999;   
      background: rgb(36, 36, 36);
      justify-content: space-between;
      border-radius: 10px;  
      overflow: hidden;  
      max-width: 600px;
      min-height: 288px;
  }
  .starshipCard:hover{
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
  .starshipCard_img{
      overflow: hidden;
      img{
        min-height: 100%;
      }
  }
  .starshipCard_text{
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
    .starshipCard{
      flex-direction: column;
    }
    .starshipCard_text{
      width: 100%;
      border-right: none;
      border-bottom:2px solid rgb(248, 220, 64);
    }
  }
      </style>