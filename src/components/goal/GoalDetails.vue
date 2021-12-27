<template>
  <q-page-container class="q-mb-xl" style="padding-top: 50px">
      <GoalBalance :goal="goal" />
      <WeekList :goal="goal" @swipeRight="swipeRight" @swipeLeft="swipeLeft" />
  </q-page-container>
</template>

<script>
  import WeekList from '../../components/WeekList.vue'
  import GoalBalance from './GoalBalance.vue'
  export default {
    props: {
      goal: Object
    },
    components: {
      WeekList,
      GoalBalance
    }
  }
</script>