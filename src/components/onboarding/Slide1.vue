<template>
  <article class="text-center">
    <lottie
      :animationData="animationData"
      :height="190"
      :autoplay="true"
      :loop="true" />    

    <h2 class="text-h4 text-center">Super Title Here!</h2>
    <p class="text-subtitle1 text-center q-mb-xl">Lorem ipsum, dolor, sit amet consectetur adipisicing elit. Nam, aliquid mollitia voluptatem </p>
  </article>
</template>

<script>
  import Lottie from '../Lottie.vue'
  import animationData from "../../assets/meeting-and-stuff.json";
  export default {
    components: {
      Lottie
    },
    data(){
      return {
        animationData,
        lottie: ''
      }
    }
  }
</script>