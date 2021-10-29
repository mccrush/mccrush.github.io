<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-3 pe-sm-0">
    <a
      class="my-card d-block rounded shadow-sm"
      :href="app.link"
      target="_blank"
    >
      <div class="my-card-body rounded-top p-3">
        <h5>{{ app.title }}</h5>
        <p class="card-text">
          {{ app.description }}
        </p>
      </div>
      <div class="my-card-footer rounded-bottom text-center p-2">
        <span class="color-c font-monospace fw-bold">{{ app.alias }}</span>
      </div>
    </a>
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


<style scoped>
.my-card {
  color: #ccc;
  text-decoration: none;
  transition: 0.3s ease;
}

.my-card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.my-card-body {
  background-color: #253144 !important;
  height: 112px;
}

.my-card-footer {
  background-color: #32425a !important;
  transition: 0.3s ease;
}

.app-link {
  text-decoration: none;
}

.color-c {
  color: #ccc;
  transition: 0.3s ease;
}

.color-f {
  color: #f2f2f2;
}

.app-link:hover .color-c {
  color: #f2f2f2;
}
</style>