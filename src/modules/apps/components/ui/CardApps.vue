<script setup>
defineProps({
  app: { type: Object, required: true }
})
</script>

<template>
  <div class="col-12 col-sm-6 col-md-4 mt-4 mb-5 ps-2 pe-2">
    <div class="d-block rounded-0 text-start border p-4 pt-3">
      <h5 class="">{{ app.title }}</h5>
      <p class="m-0" v-html="app.description"></p>
      <a
        :href="app.link"
        target="_blank"
        class="btn btn-sm btn-dark rounded-0 border-top-0 border w-100 mt-2"
        >Открыть
      </a>
    </div>
  </div>
</template>

<style scoped>
.btn-dark {
  color: #dee2e6;
}
</style>