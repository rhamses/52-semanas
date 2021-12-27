<template>
  <section class="row fixed-bottom bg-grey-9 q-pa-sm">
    <div class="col text-center">
      <router-link to="/list" class="column items-center menu--item">
        <q-icon name="receipt_long" size="sm" color="white" />
        Metas
      </router-link>
    </div>
    <div class="col text-center">
      <router-link to="/goal" class="column items-center menu--item">
        <q-icon name="add_circle" size="xl" class="menu--item__new" color="white" />
        <b>Nova Meta</b>
      </router-link>
    </div>
    <div class="col flex justify-center">
      <q-btn flat label="Instalar App" style="text-transform: none;" padding="none" @click="checkPWA" :ripple="false" class="menu--item" icon="local_library" />
    </div>

    <q-dialog v-model="carousel" maximized>
      <q-card>
        <q-card-section class="row items-center q-pb-none title amb1io q-toolbar amb1io shadow-2">
          <div class="text-h6 title">Como instalar no celular</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-carousel
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        v-model="slide"
        control-color="primary"
        navigation-icon="radio_button_unchecked"
        navigation
        class="bg-white shadow-1 rounded-borders rs-dialog"
        >
        <q-carousel-slide :name="1" class="column no-wrap flex-center">
          <q-icon name="apple" color="gray" size="56px" />
          <div class="q-mt-md text-center">
            Instale este app no seu iOS <br> fazendo como o desenho abaixo
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap flex-center">
          <q-icon name="android" color="green" size="56px" />
          <div class="q-mt-md text-center">
            Instale este app no seu iOS <br> fazendo como o desenho abaixo
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-card>
  </q-dialog>
</section>
</template>

<style>
  .rs-dialog .q-dialog__inner {
    display:  block !important;
  }

  .menu--item .q-btn__content {
    display: flex;
    flex-direction: column;
  }

  .menu--item .q-btn__content .on-left{
    margin-right: 0;
  }
</style>

<style scoped lang="scss">
  .menu {
    &--item {
      color: #fff;
      text-decoration: none;

      &__new {
        display: inline-block;  
        margin-top: -.5em;

        background-color: #424242;
        border-radius: 50%;
      }


    }
  }
</style>

<script>
  import { mapMutations, mapState } from 'vuex'
  import PWAInstall from '../services/pwainstall.js'
  
  PWAInstall.checkInstall();
  
  export default {
    name: 'MainMenu',
    data(){
      return {
        carousel: false,
        slide: 1,
      }
    },
    computed: {
      ...mapState({
        deferredPrompt: state => state.goals.deferredPrompt
      })
    },
    methods: {
      async checkPWA(){
        this.carousel = !this.carousel
        PWAInstall.doInstall().then(result => (result != 'dismissed') ? this.carousel = !this.carousel : '')
      }
    }
  }
</script>