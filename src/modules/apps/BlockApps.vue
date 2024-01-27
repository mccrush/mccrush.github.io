<template>
  <div class="f2">
    <div class="container-960 row text-center m-0 m-auto ps-2 pt-5 pe-2 pb-5">
      <h3 id="apps">Приложения</h3>
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

      <div class="col-12 m-0 p-0">
        <div class="row m-0 p-0">
          <Card v-for="app in filterApps" :key="app.alias" :app="app" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apps } from './../data/apps'
import { types } from './../data/types'
import Card from './../components/Card.vue'
import FilterItem from './../components/FilterItem.vue'

export default {
  components: {
    Card,
    FilterItem
  },
  data() {
    return {
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

<style scoped>
.f2 {
  background: #32435d;
}
</style>