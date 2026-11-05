<script setup>
defineProps({ app: { type: Object, required: true } })
</script>

<template>
  <div class="col-12 col-sm-6 col-md-4 mt-4 ps-2 pe-2">
    <div class="d-block rounded-0 text-start border p-4 pt-4">
      <div class="d-flex justify-content-between align-items-baseline">
        <h5 v-if="app.icon" class="d-inline bg-dark-subtle rounded-3 px-2 py-1">
          <i class="bi" :class="app.icon"></i>
        </h5>
        <p v-if="app.price" class="fw-bold text-success m-0 p-0">
          {{ app.price }} ₽
        </p>
      </div>

      <h5 class="mt-2">{{ app.title }}</h5>
      <p class="lh-sm m-0" v-html="app.description"></p>
      <a
        v-if="app.link"
        :href="app.link"
        target="_blank"
        class="btn btn-sm btn-dark rounded-0 border-top-0 border w-100 mt-3"
        >Открыть
      </a>
    </div>
  </div>
</template>