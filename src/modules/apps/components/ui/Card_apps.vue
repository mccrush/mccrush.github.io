<template>
  <div class="col-12 col-sm-6 col-md-4 mt-4 mb-5 ps-2 pe-2">
    <div class="border-top-light d-block shadow-sm rounded text-start p-4 pt-3">
      <h4>
        <component :is="'Icon_' + app.alias" class="" />
      </h4>
      <h5 class="">{{ app.title }}</h5>
      <p class="m-0" v-html="app.description"></p>
      <a
        :href="app.link"
        target="_blank"
        class="btn btn-sm btn-dark text-secondary-emphasis w-100 mt-2"
        >Открыть</a
      >
    </div>
  </div>
</template>

<script>
import Icon_mwp from './../icons/Icon_mwp.vue'

export default {
  components: {
    Icon_mwp
  },
  props: {
    app: {
      type: Object
    }
  }
  // computed: {
  //   icon() {
  //     return this.app.icon
  //   }
  // }
}
</script>