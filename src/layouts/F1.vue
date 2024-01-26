<template>
  <div class="f1 row vh-100 m-0 p-0">
    <Navbar />
    <Present />
  </div>
</template>

<script>
import Navbar from './../components/F1/Navbar.vue'
import Present from './../components/F1/Present.vue'

export default {
  components: {
    Navbar,
    Present
  }
}
</script>

<style lang="scss" scoped>
@import './../scss/colors';

.f1 {
  background: $dark;
  // background: radial-gradient(
  //   circle,
  //   var(--bg-color-light) 0%,
  //   var(--bg-color-dark) 100%
  // );
}
</style>