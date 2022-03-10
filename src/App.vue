<template>
  <div class="container-fluid p-0">
    <F1 />
    <F5 />
    <div class="row m-0 p-0 pt-3">
      <Card v-for="app in sites" :key="app.alias" :app="app" />
    </div>
    <h4 class="text-center mt-5">Приложения на домене mccrush.github.io</h4>
    <div class="row m-0 p-0">
      <div class="col-12 d-flex flex-wrap justify-content-center">
        <FilterItem
          v-for="type in types"
          :key="type.pos"
          :type="type"
          :filterType="filterType"
          @click="filterType = type.type"
        />
        <FilterItem
          v-if="filterType"
          :type="{ title: 'Показать все', type: '' }"
          :filterType="filterType"
          @click="filterType = ''"
        />
      </div>
    </div>
    <div class="row m-0 p-0">
      <Card v-for="app in filterApps" :key="app.alias" :app="app" />
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import { sites } from './data/sites'
import { apps } from './data/apps'
import { types } from './data/types'
import F1 from './layouts/F1.vue'
import F5 from './layouts/F5.vue'
import Card from './components/Card.vue'
import FilterItem from './components/FilterItem.vue'

export default {
  components: {
    F1,
    F5,
    Card,
    FilterItem
  },
  data() {
    return {
      sites: sites(),
      apps: apps(),
      types: types(),
      filterType: ''
    }
  },
  computed: {
    filterApps() {
      if (this.filterType) {
        return this.apps.filter(item => item.type === this.filterType)
      } else {
        return this.apps
      }
    }
  }
}
</script>

<style>
body {
  color: #f2f2f2;
  /* background-color: #32425a; */
  /* background-color: hsl(216deg, 30%, 26%); */
  background: rgb(46, 62, 86);
  background: radial-gradient(
    circle,
    rgba(46, 62, 86, 1) 0%,
    rgba(32, 43, 60, 1) 100%
  );
}

.container-960 {
  max-width: 960px;
}
</style>
  