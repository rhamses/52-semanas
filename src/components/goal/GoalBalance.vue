<template>
  <section class="goal__balance text-center">
    <h2 class="text-h5"><b>Remaining Weeks: {{ remainingWeek }}</b></h2>
    <div class="flex flex-center">
      <lottie 
      :animationData="animationData"
      :width="150"
      :height="150"
      v-on:animCreated="handleAnimation" />
      <div>
        <q-circular-progress
        show-value
        :value="balance.total"
        :min="0"
        :max="goal.total"
        track-color="grey-3"
        :thickness=".1"
        size="7rem"
        color="green"
        >
        <b class="text-h5">{{percentage}}%</b>
      </q-circular-progress>
      <p class="q-mb-none q-mt-sm q-pa-none text-body1">Balance: <b>R$ {{ balance.total }}</b></p>
      <p class="q-ma-none q-pa-none">Goal Total: <b>R$ {{goal.total}}</b></p>
    </div>
  </div>
</section>
</template>

<script>
  import Lottie from '../Lottie.vue'
  import animationData from "../../assets/data.json";
  import { mapState } from 'vuex'

  export default {
    props: ['goal'],
    components: {
      Lottie
    },
    updated(){
      this.updateAnimation();
    },
    computed: {
      balance(){
        const weeks = this.goal.weeks.filter(item => item.status == "paid").length;
        const total = weeks * this.goal.stallment;
        return {
          weeks,
          total
        }
      },
      remainingWeek(){
        return this.goal.weeks.length - this.balance.weeks
      },
      percentage(){
        return Math.floor((this.balance.total / this.goal.total) * 100);
      },
      ...mapState('goals', ['animation'])
    },
    data(){
      return {
        animationData
      }
    },
    methods: {
      handleAnimation(anim){
        this.lottie = anim;
      },
      updateAnimation(){
        if (this.animation) {
          this.lottie.setDirection(1);
        } else {
          this.lottie.setDirection(-1);
        }
        this.lottie.play();
      }
    }
  }
</script>