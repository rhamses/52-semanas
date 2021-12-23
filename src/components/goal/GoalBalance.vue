<template>
  <section class="goal__balance text-center">
    <h2 class="text-h5"><b>Pending Weeks</b></h2>
    <div class="flex flex-center">
      <lottie 
      :animationData="animationData"
      :width="150"
      :height="150"
      v-on:animCreated="handleAnimation" />
      <div>
        <q-circular-progress
        show-value
        :value="goal.balance"
        :min="0"
        :max="goal.total"
        :thickness=".1"
        size="7rem"
        color="green"
        >
        <b class="text-h5">{{percentage}}%</b>
      </q-circular-progress>
      <p class="q-mb-none q-mt-sm q-pa-none text-body1">Balance: <b>R$ {{goal.balance}}</b></p>
      <p class="q-ma-none q-pa-none">Goal Total: <b>R$ {{goal.total}}</b></p>
    </div>
  </div>
</section>
</template>

<script>
  import Lottie from '../Lottie.vue'
  import animationData from "../../assets/data.json";
  export default {
    props: ['state', 'goal'],
    components: {
      Lottie
    },
    created(){
      this.percentage = Math.floor((this.goal.balance / this.goal.total) * 100);
    },
    data(){
      return {
        animationData,
        lottie: '',
        percentage: 0
      }
    },
    watch: {
      state(value){
        if (value) {
          this.lottie.setDirection(1);
        } else {
          this.lottie.setDirection(-1);
        }
        this.lottie.play();
      }
    },
    methods: {
      handleAnimation(anim){
        this.lottie = anim;
      }
    }
  }
</script>