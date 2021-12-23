<template>
  <section>
    <q-tab-panels @update:model-value="modelValue" keep-alive animated swipeable infinte v-model="panel" ref="paineis">
      <q-tab-panel v-for="(goal, index) in goals" :name="index" :key="index">
        <GoalDetails :goal="goal" />
      </q-tab-panel>
    </q-tab-panels>
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  import GoalDetails from '../components/goal/GoalDetails.vue'
  export default {
    data(){
      return {
        panel: 0,
        panelSelected: 0,
      }
    },
    props: [ 'changePanel' ],
    components: {
      GoalDetails
    },
    computed: {
      ...mapState({
        goals: state => state.goals.goals
      })
    },
    watch: {
      changePanel(direction){
        if (direction) {
          this.$refs.paineis.next();
        } else {
          this.$refs.paineis.previous();
        }
      }
    },
    methods: {
      modelValue(value){
        this.$emit('panelSelected', value);
      }
    }
  }
</script>