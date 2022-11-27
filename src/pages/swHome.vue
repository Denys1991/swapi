<template>
    <div>
      
      
      <carouselFilm />
      <carouselCharacter />
    </div>
</template>
<script>
import  carouselCharacter  from "@/components/swCarouselCharacter.vue";
import  carouselFilm  from "@/components/swCarouselFilm.vue";
//import  swCard  from "@/components/swCard.vue";
export default {

components:{
  /*swCard,*/ carouselFilm, carouselCharacter
},
}
</script>