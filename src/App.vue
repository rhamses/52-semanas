<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import askNotification from './services/notification.js'

/*
  ASK NOTIFICATION API
 */

askNotification()

export default defineComponent({
  name: 'App'
})
</script>