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

<style scoped>
/* .f1 {
  background: rgb(46, 62, 86);
  background: radial-gradient(
    circle,
    rgba(46, 62, 86, 1) 0%,
    rgba(32, 43, 60, 1) 100%
  );
} */

.f1 {
  background: rgb(50, 67, 93);
  background: radial-gradient(
    circle,
    rgba(50, 67, 93, 1) 0%,
    rgba(29, 38, 53, 1) 100%
  );
}
</style>