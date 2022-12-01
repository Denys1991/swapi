<template>
    <div>
      
      
      <carouselFilm />
      <carouselCharacter />
      <carouselStarship />

    </div>
</template>
<script>
import  carouselCharacter  from "@/components/swCarouselCharacter.vue";
import  carouselFilm  from "@/components/swCarouselFilm.vue";
import  carouselStarship from "@/components/swCarouselStarship.vue"
//import  swCard  from "@/components/swCard.vue";
export default {

components:{
  /*swCard,*/ carouselFilm, carouselCharacter, carouselStarship
},
}
</script>
<style>
.carousel_name{
    text-align: center;
    font-size: 50px;
    color: #999;
  }


</style>