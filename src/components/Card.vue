<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4 pe-sm-0">
    <a
      class="my-card d-block rounded shadow h-100"
      :href="app.link"
      target="_blank"
    >
      <div class="my-card-body rounded-top h-75 p-3">
        <h5 class="color-f">{{ app.title }}</h5>
        <p class="card-text color-c lh-sm">
          {{ app.description }}
        </p>
      </div>
      <div class="my-card-footer rounded-bottom text-center p-2">
        <span class="color-c font-monospace">{{ app.alias }}</span>
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
  text-decoration: none;
  transition: 0.3s ease;
}

.my-card:hover {
  /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important; */
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.my-card-body {
  background-color: #253144 !important;
  /* height: 112px; */
}

.my-card-footer {
  background-color: #32425a !important;
  /* border-bottom: 1px solid #253144; */
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