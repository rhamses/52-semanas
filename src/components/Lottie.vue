<template>
  <div :style="style" ref="lavContainer"></div>
</template>

<script>
import lottie from "lottie-web";

export default {
  props: {
    rendererSettings: String,
    animationData: Object,
    loop: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    height: Number,
    width: Number
  },

  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : "100%",
        height: this.height ? `${this.height}px` : "100%",
        overflow: "hidden",
        margin: "0"
      }
    };
  },

  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: "svg",
      loop: this.loop !== false,
      autoplay: this.autoplay !== false,
      animationData: this.animationData,
      rendererSettings: this.rendererSettings
    });
    this.$emit("animCreated", this.anim);
  }
};
</script>
