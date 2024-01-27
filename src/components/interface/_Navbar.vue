<template>
  <ul class="nav">
    <li v-for="page in pages" :key="page.alias" class="nav-item">
      <a
        class="nav-link"
        :href="page.href"
        :class="{ active, 'bg-dark': page.href === currentLocation }"
        >{{ page.title }}</a
      >
    </li>
  </ul>
</template>

<script>
import { pages } from './../../data/pages.js'

export default {
  data() {
    return {
      pages,
      currentLocation: window.location.pathname
    }
  }
  // computed: {
  //   CurrentPageInfo() {
  //     return this.pages.filter(item => item.href === window.location.pathname)
  //   }
  // }
}
</script>

<style scoped>
a.nav-link {
  text-decoration: none !important;
}
</style>