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

<style lang="scss" scoped>
// .f1 {
//   background-image: radial-gradient(
//     154.86% 76.83% at 50% 22.26%,
//     hsla(240, 7%, 97%, 0.4) 8.98%,
//     #f7f7f8 45.99%
//   );
// }

// @import './../scss/colors';

// .f1 {
//   background: $dark;
//   background: radial-gradient(
//     circle,
//     var(--bg-color-light) 0%,
//     var(--bg-color-dark) 100%
//   );
// }
</style>