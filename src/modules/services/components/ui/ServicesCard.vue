<template>
  <div class="col-12 col-sm-4 col-lg-4 mt-4 ps-2 pe-2">
    <div class="border-top-light d-block shadow-sm rounded text-start p-4 pt-3">
      <h5 class=""><component :is="icon" class="" /></h5>
      <h5 class="">{{ app.title }}</h5>
      <p class="m-0" v-html="app.description"></p>
    </div>
  </div>
</template>

<script>
import IconDev from './../icons/IconDev.vue'
import IconAdm from './../icons/IconAdm.vue'
import IconHlp from './../icons/IconHlp.vue'

export default {
  components: {
    IconDev,
    IconAdm,
    IconHlp
  },
  props: {
    app: {
      type: Object
    }
  },
  computed: {
    icon() {
      return this.app.icon
    }
  }
}
</script>


<style scoped>
/* .mc-card-icon {
  width: 32px;
} */
</style>