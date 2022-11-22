<template>
  <div>
    <swHeader />
    
    <swCard />
    <swFooter />
  </div>
</template>

<script>

import  swCard  from "@/components/swCard.vue";
import  swHeader  from "@/components/swHeader.vue";
//import swSideBar from "@/components/swSideBar.vue"
import  swFooter  from "@/components/swFooter.vue";
export default {
components:{
  swHeader, swFooter, swCard, //wSideBar
}
}
</script>

<style>
@import "assets/css/style.min.css";
@import "assets/fonts/fonts.min.css";

#app {
  /*background-color: black;*/
  background-image: url("assets/img/sky.jpg");
  font-family: "Roboto";  
}
</style>
