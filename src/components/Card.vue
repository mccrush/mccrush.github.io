<template>
  <div class="col-12 col-sm-6 col-lg-4 mt-4 ps-1 pe-1">
    <div class="my-card d-block rounded shadow h-100">
      <div class="my-card-body rounded-top h-75 p-3">
        <!-- <h5 class="color-c">{{ app.title }}</h5> -->
        <p class="card-text color-c lh-sm">
          {{ app.description }}
        </p>
      </div>
      <div class="my-card-footer rounded-bottom text-center p-2">
        <span v-if="app.alias" class="color-c font-monospace">{{
          app.alias
        }}</span>
        <span v-else class="color-c font-monospace">&nbsp;</span>
      </div>
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
  background-color: hsl(216deg 30% 18%) !important;
  border-bottom: 1px solid hsl(216deg 30% 16%);
  /* height: 112px; */
}

.my-card-footer {
  background-color: hsl(216deg 30% 26%) !important;
  border-top: 1px solid hsl(216deg 30% 28%);
  /* border-bottom: 1px solid #253144; */
  transition: 0.3s ease;
}

.app-link {
  text-decoration: none;
}

.color-c {
  color: #f2f2f2;
  transition: 0.3s ease;
}

.color-f {
  color: #f2f2f2;
}

.app-link:hover .color-c {
  color: #f2f2f2;
}
</style>