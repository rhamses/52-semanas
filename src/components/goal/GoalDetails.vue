<template>
  <q-page-container class="q-mb-xl" style="padding-top: 50px">
      <GoalBalance :goal="goal" />
      <WeekList :goal="goal" @swipeRight="swipeRight" @swipeLeft="swipeLeft" />
      <q-btn flat 
      @click="removeGoal"
      label="Apagar Meta" 
      color="red" 
      size="md" 
      icon="delete" 
      align="center"
      class="text-center q-mb-xl"
      style="width: 100%;" />
  </q-page-container>
</template>

<script>
  import WeekList from '../../components/WeekList.vue'
  import GoalBalance from './GoalBalance.vue'
  import { mapMutations } from 'vuex'
  export default {
    props: {
      goal: Object
    },
    components: {
      WeekList,
      GoalBalance
    },
    methods: {
      ...mapMutations('goals', ['mutRemoveGoal']),
      removeGoal(){
        if (confirm(`Deseja apagar a meta ${this.goal.name}? Não será possível recuperar os dados depois.`)) {
          this.mutRemoveGoal(this.goal.name);
          this.$router.go(this.$router.currentRoute)
        }
      }
    }
  }
</script>