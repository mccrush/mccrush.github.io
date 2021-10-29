<template>
  <div class="my-card rounded">
    <div class="card-body">
      <h5 class="card-title">{{ app.title }}</h5>
      <p class="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
    </div>
    <div class="card-footer border-0 rounded-0 text-center fs-5">
      <a href="#" class="app-link w-100 stretched-link font-monospace"
        ><span class="color-c">mccrush.github.io/</span
        ><span class="color-f fw-bold">{{ app.alias }}</span></a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    app: {
      type: Object
    }
  }
}
</script>
