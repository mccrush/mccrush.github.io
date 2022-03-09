<template>
  <div class="container-lg mt-4 mb-4">
    <div class="row">
      <div class="col-12 d-flex justify-content-center pt-4">
        <img
          src="logo_.png"
          alt="Logo mccrush apps"
          width="64"
          height="64"
          class="me-2 me-sm-3 mt-3 mt-sm-3"
        />
        <div class="mt-1">
          <h1 class="fw-bold m-0 mt-1 mb-1 fs-1">mccrush apps</h1>
          <p class="fs-5 fw-light lh-1">разработка веб-приложений</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <img
          src="images/1f/pair-programming-animate.svg"
          alt="Разработка веб-приложений"
        />
      </div>
    </div>
    <div class="row pe-sm-3 pt-3">
      <Card v-for="app in sites" :key="app.alias" :app="app" />
    </div>
    <h4 class="text-center mt-5">Приложения на домене mccrush.github.io</h4>
    <div class="row">
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
    <div class="row pe-sm-3">
      <Card v-for="app in filterApps" :key="app.alias" :app="app" />
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import { sites } from './data/sites'
import { apps } from './data/apps'
import { types } from './data/types'
import Card from './components/Card.vue'
import FilterItem from './components/FilterItem.vue'

export default {
  components: {
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

.logo {
  width: 64px;
  height: 64px;
}
</style>
  