<template>
  <q-layout>
    <router-view />
    <MainMenu />
  </q-layout>
</template>

<script>
  import MainMenu from '../components/MainMenu.vue'
  export default {
    name: "Internal",
    components: {
      MainMenu
    }
  }
</script>