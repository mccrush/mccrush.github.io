<template>
  <div class="container-fluid p-0">
    <!-- <Navbar /> -->
    <!-- <transition name="fade" mode="out-in" appear>
      <component :is="currentPage" />
    </transition> -->
    <F1 />
    <F3 />
    <F4 />
    <F5 />
  </div>
</template>

<script>
//import 'bootstrap/dist/css/bootstrap.min.css'
//import { routes } from './router/routes.js'

// import Navbar from './components/interface/Navbar.vue'
// import PageIndex from './pages/PageIndex.vue'
// import PageDevel from './pages/PageDevel.vue'
// import PageElectric from './pages/PageElectric.vue'
// import PageTrello from './pages/PageTrello.vue'
import F1 from './layouts/F1.vue'
import F3 from './layouts/F3.vue'
import F4 from './layouts/F4.vue'
import F5 from './layouts/F5.vue'

export default {
  components: {
    F1,
    F3,
    F4,
    F5
  }
  // data() {
  //   return {
  //     routes,
  //     currentRoute: window.location.pathname
  //   }
  // }
  // computed: {
  //   currentPage() {
  //     return routes[this.currentRoute] || 'PageIndex'
  //   }
  // }
}
</script>

<style lang="scss">
@import './scss/common';
</style>
  