<template>
  <div class="col-12 col-sm-4 col-lg-4 mt-4 ps-2 pe-2">
    <div class="border-top-light d-block shadow-sm rounded text-start p-4">
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
</style>