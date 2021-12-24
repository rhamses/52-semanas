<template>
  <q-page class="flex flex-center" >
    <q-tab-panels keep-alive animated swipeable v-model="panel" ref="onboarding">
      <q-tab-panel name="slide1">
        <Slide1 />
      </q-tab-panel>
      <q-tab-panel name="slide2">
        <Slide2 />
      </q-tab-panel>
      <q-tab-panel name="slide3">
        <Slide3 />
      </q-tab-panel>
      <q-tab-panel name="slide4">
        <Slide4 buttonText="Começar a economizar" />
      </q-tab-panel>
    </q-tab-panels>
    <div class="fixed-bottom full-width text-center q-mb-xl" v-if="panel != 'slide4'">
      <q-btn color="primary" @click="next" :label="buttonLabel" block :push="true" ripple size="md" icon-right="navigate_next" align="center" />
    </div>
  </q-page>
</template>

<script>
  import Slide1 from '../components/onboarding/Slide1.vue'
  import Slide2 from '../components/onboarding/Slide2.vue'
  import Slide3 from '../components/onboarding/Slide3.vue'
  import Slide4 from './NewGoal.vue'
  export default {
    data(){
      return {
        panel: 'slide1',
        buttonLabel: 'Next',
        runSave: false
      }
    },
    components: {
      Slide1,
      Slide2,
      Slide3,
      Slide4
    },
    methods:{
      next(){
        if (this.panel === "slide3") {
          this.$refs.onboarding.next()
          this.runSave = true;
          this.buttonLabel = 'Start saving'
        } else if (this.panel === "slide4") {
          this.$router.push('/list')
        } else {
          this.$refs.onboarding.next()
        }
      }
    }
  }
</script>