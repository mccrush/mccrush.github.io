<template>
  <div class="col-12 col-sm-4 col-lg-4 mt-4 ps-2 pe-2">
    <div class="d-block shadow rounded text-start p-4">
      <!-- <div
        class="my-card-body rounded-top align-items-center d-flex justify-content-center"
      > -->
      <h5 class="">{{ app.title }}</h5>
      <p class="m-0" v-html="app.description"></p>
      <!-- </div> -->
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

.my-card-body {
  background-color: var(--bg-color-darkless) !important;
  border-bottom: 1px solid var(--bg-color-dark);
  /* height: 112px; */
}

.my-card-footer {
  background-color: var(--bg-color-medium) !important;
  border-top: 1px solid var(--bg-color-light);
  /* border-bottom: 1px solid #253144; */
  transition: 0.3s ease;
}

.app-link {
  text-decoration: none;
}

.color-c {
  color: var(--text-color-light);
  transition: 0.3s ease;
}

.color-f {
  color: var(--text-color-light);
}

.app-link:hover .color-c {
  color: var(--text-color-light);
}
</style>