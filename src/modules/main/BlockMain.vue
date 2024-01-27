<template>
  <div class="f1 row vh-100 m-0 p-0">
    <TheNavbar />
    <ThePresent />
  </div>
</template>

<script>
import TheNavbar from './components/ui/TheNavbar2.vue'
import ThePresent from './components/ui/ThePresent.vue'

export default {
  components: {
    TheNavbar,
    ThePresent
  }
}
</script>

<style lang="scss" scoped>
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