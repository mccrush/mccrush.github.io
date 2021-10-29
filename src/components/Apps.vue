<template>
  <div class="row pe-2">
    <div v-for="app in apps" :key="app.alias" class="col-sm-4 mt-3 pe-0">
      <div class="card border-0 rounded-0">
        <div class="card-body">
          <h5 class="card-title">{{ app.title }}</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
        <div class="card-footer border-0 rounded-0 text-center fs-5">
          <a href="#" class="app-link w-100 stretched-link font-monospace"
            ><span class="color-c">mccrush.github.io/</span
            ><span class="color-f fw-bold">{{ app.alias }}</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apps from '@/data/apps.js'
export default {
  data() {
    return {
      apps
    }
  }
}
</script>

<style scoped>
.card {
  /* border: 1px solid #253144; */
  transition: 0.3s ease;
}

.card:hover {
  /* border: none; */
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.card:hover .card-body {
  border: 1px solid #253144;
}

.card-body {
  border: 1px solid #253144;
  background-color: #253144 !important;
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

.card-footer {
  border: 1px solid #253144 !important;
  background-color: #32425a !important;
  transition: 0.3s ease;
}

.card:hover .card-footer {
  border: 1px solid #32425a !important;
}
</style>