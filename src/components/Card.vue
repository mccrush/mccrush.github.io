<template>
  <div class="col-12 col-sm-4 col-lg-4 mt-4 ps-2 pe-2">
    <div class="my-card d-block rounded shadow-sm">
      <div
        class="my-card-body rounded-top align-items-center d-flex justify-content-center"
      >
        <!-- <h5 class="color-c">{{ app.title }}</h5> -->
        <p class="card-text color-c lh-sm m-0 p-2 pt-5 pb-5">
          {{ app.description }}
        </p>
      </div>
      <div class="my-card-footer rounded-bottom text-center">
        <!-- <span v-if="app.alias" class="color-c font-monospace">{{
          app.alias
        }}</span>
        <span v-else class="color-c font-monospace"></span> -->
        &nbsp;
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