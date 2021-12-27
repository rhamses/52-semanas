<template>
  <article class="text-center">
    <lottie
      :animationData="animationData"
      :height="190"
      :autoplay="true"
      :loop="true" />    

    <h2 class="text-h4 text-center">Desafio das <br> <b>52 semanas!</b></h2>
    <p class="text-subtitle1 text-center q-mb-xl">Guarde um pouco de dinheiro toda semana e tenha no fim do ano um motivo a mais para comemorar! </p>
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