<template>
  <q-timeline class="q-px-md full-width">
    <WeekItem v-for="(week, index) in goal.weeks" :key="index" :week="{number: index, date: week.date, status: week.status}" :goal="goal" @swipeRight="swipeRight" @swipeLeft="swipeLeft" />
  </q-timeline>
</template>

<style scope>
  .q-timeline__subtitle,
  .q-timeline__title {
    display: none;
  }
</style>

<script>
  import WeekItem from '../components/WeekItem.vue'
  import { mapMutations } from 'vuex'

  export default {
    props: {
      goal: Object
    },
    components: {
      WeekItem
    },
    methods: {
      ...mapMutations('goals', ['mutPayment', 'mutAnimation']),
      swipeRight(index){
        const payload = {
          status: 'paid',
          index,
          goal: this.goal
        }
        this.mutAnimation(true)
        this.mutPayment(payload)
      },
      swipeLeft(index){
        const payload = {
          status: 'unpaid',
          index,
          goal: this.goal
        }
        this.mutAnimation(false)
        this.mutPayment(payload)
      }
    }
  }
</script>