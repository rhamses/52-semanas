<template>
  <q-header elevated class="bg-grey-5 text-black">
    <q-toolbar v-if="navigation.context === 'goals'">
      <q-btn flat dense round icon="navigate_before" @click="previousPanel"  />
      <q-toolbar-title class="text-center">
        {{ goals[panelSelected].name }}
      </q-toolbar-title>
      <q-btn flat dense round icon="navigate_next" @click="nextPanel" />
    </q-toolbar>
    <q-toolbar v-if="navigation.context === 'simple'">
        <q-btn v-if="navigation.nav" flat dense round icon="navigate_before" @click="previousPanel"  />
        <q-toolbar-title class="text-center">
          52 week
        </q-toolbar-title>
        <q-btn v-if="navigation.nav" flat dense round icon="navigate_before" color="grey-5"  />
      </q-toolbar>
  </q-header>
</template>

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