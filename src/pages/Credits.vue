<template>
  <div class="fullscreen bg-green text-white text-center q-pa-md flex flex-center">
    <div>
      <h1>
        Credits
      </h1>

      <p>
        This project is a sample of the power of PWA.
      </p>

      <p>
        <a href="https://github.com/rhamses/52-semanas" target="_blank" style="color: white">Contribuitions are welcome on the Github page.</a>
      </p>

      <p>
        This project is made by <a href="https://rhams.es" target="_blank" style="color: white">Rhamses</a> .
        <br>
        <q-icon name="favorite" size="sm" color="white" />
      </p>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Credit'
  }
</script>