<template>
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li v-for="page in pages" :key="page.alias" class="nav-item">
      <a class="nav-link" :href="page.href">{{ page.title }}</a>
    </li>
  </ul>
</template>

<script>
import { pages } from './../../data/pages.js'

export default {
  data() {
    return {
      pages
    }
  }
}
</script>