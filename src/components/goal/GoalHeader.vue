<template>
  <q-header reveal elevated class="amb1io text-black">
    <q-toolbar v-if="navigation.context === 'goals'">
      <q-btn flat dense round icon="navigate_before" @click="previousPanel" v-if="goals.length > 1"  />
      <q-toolbar-title class="text-center title">
        <b>{{ goals[panelSelected].name }}</b>
      </q-toolbar-title>
      <q-btn flat dense round icon="navigate_next" @click="nextPanel" v-if="goals.length > 1" />
    </q-toolbar>
    <q-toolbar v-if="navigation.context === 'simple'">
        <q-btn v-if="navigation.nav" flat dense round icon="navigate_before" @click="previousPanel"  />
        <q-toolbar-title class="text-center title">
          <b>52 week</b>
        </q-toolbar-title>
        <q-btn v-if="navigation.nav" flat dense round icon="navigate_before"  class="hide-arrow"/>
      </q-toolbar>
  </q-header>
</template>

<style>
  .title {
    text-transform: uppercase;
    color: #58585A;
  }

  .amb1io {
    background-color: #BDD747;
  }

  .amb1io .hide-arrow {
    opacity: 0;
  }
</style>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState({
        goals: state => state.goals.goals
      })
    },
    props: {
      panelSelected: Number,
      navigation: Object
    },
    methods: {
      nextPanel(){
        this.$emit('nextPanel', true);
      },
      previousPanel(){
        this.$emit('previousPanel', false);
      }
    }
  }
</script>