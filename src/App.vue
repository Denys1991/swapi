<template>
  <div>
    <swHeader @show-side-bar="showSideBar"/>
    <transition name="fade">
      <swSideBar v-if="isSideBarShow"/>
    </transition>
    <router-view></router-view>
    <swFooter />
  </div>
</template>

<script>

import  swHeader  from "@/components/swHeader.vue";
import swSideBar from "@/components/swSideBar.vue"
import  swFooter  from "@/components/swFooter.vue";
export default {

components:{
  swHeader, swFooter, /*swCard, swCarousel,*/ swSideBar
},
  data(){
    return {
      isSideBarShow: false,
      }
    },
methods:{
  showSideBar(){
    console.log('showSideBar in app')
    const btnSideBar = document.querySelector('.btn_sidebar');
    btnSideBar.classList.toggle('btn_active');
    
    this.isSideBarShow=!this.isSideBarShow
  },

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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
