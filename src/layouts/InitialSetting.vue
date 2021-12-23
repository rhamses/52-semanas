<template>
  <q-layout>
    <Header :navigation="nav" :panelSelected="panel" @nextPanel="changePanel" @previousPanel="changePanel" />
    <router-view :changePanel="newPanel" @panelSelected="panelSelected" />
    <MainMenu v-if="nav.nav"/>
  </q-layout>
</template>

<script>
  import Header from '../components/goal/GoalHeader'
  import MainMenu from '../components/MainMenu.vue'
  export default {
    props: ['nav'],
    data(){
      return {
        newPanel: false,
        panel: 0
      }
    },
    components: {
      Header,
      MainMenu
    },
    methods: {
      changePanel(direction){
        if(this.$router.currentRoute._value.name != 'Goals') {
          this.$router.go(-1)
        } else {
          this.newPanel = direction
        }
      },
      panelSelected(value){
        this.panel = value
      }
    }
  }
</script>