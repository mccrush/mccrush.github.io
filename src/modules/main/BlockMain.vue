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
[data-bs-theme='dark'] .f1 {
  background: radial-gradient(circle, #343a40 0%, #212529 46%);
}
</style>