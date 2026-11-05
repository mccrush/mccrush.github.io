<script setup>
import TheNavbar from './components/ui/TheNavbar.vue'
import ThePresent from './components/ui/ThePresent.vue'
</script>

<template>
  <div class="f1 row vh-100 m-0 p-0">
    <TheNavbar />
    <ThePresent />
  </div>
</template>

<style scoped>
[data-bs-theme='dark'] .f1 {
  background: radial-gradient(circle, #343a40 0%, #212529 46%);
}
</style>