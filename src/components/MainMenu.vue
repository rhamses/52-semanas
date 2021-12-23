<template>
  <section class="row fixed-bottom bg-grey-9 q-pa-sm">
    <div class="col text-center">
      <router-link to="/list" class="column items-center menu--item">
        <q-icon name="receipt_long" size="sm" color="white" />
        Goals
      </router-link>
    </div>
    <div class="col text-center">
      <router-link to="/goal" class="column items-center menu--item">
        <q-icon name="add_circle" size="xl" class="menu--item__new" color="white" />
        <b>New Goal</b>
      </router-link>
    </div>
    <div class="col text-center">
      <router-link to="/credits" class="column items-center menu--item">
        <q-icon name="local_library" size="sm" color="white" />
        Learn / Credits
      </router-link>
    </div>
  </section>
</template>

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
  export default {
    name: 'MainMenu'
  }
</script>