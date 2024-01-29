<template>
  <div class="f1 row vh-100 m-0 p-0">
    <TheNavbar />
    <ThePresent />
  </div>
</template>

<script>
import TheNavbar from './components/ui/TheNavbar.vue'
import ThePresent from './components/ui/ThePresent.vue'

export default {
  components: {
    TheNavbar,
    ThePresent
  }
}
</script>

<style scoped>
/* [data-bs-theme='dark'] .f1 {
  background-image: radial-gradient(
    154.86% 76.83% at 50% 22.26%,
    hsla(240, 7%, 97%, 0.4) 8.98%,
    #f7f7f8 45.99%
  );
} */

/* @import './../scss/colors'; */

[data-bs-theme='dark'] .f1 {
  background: radial-gradient(circle, #343a40 0%, #212529 46%);
}
</style>