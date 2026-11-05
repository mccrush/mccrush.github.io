<template>
  <div class="f3 pt-5" id="apps">
    <div class="container-960 row text-center m-0 m-auto ps-2 pt-5 pe-2 pb-5">
      <h3>Пет-проекты</h3>

      <div class="col-12 m-0 p-0">
        <div class="row m-0 p-0">
          <CardApps v-for="app in apps" :key="app.alias" :app="app" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apps } from '@/data/data_apps'
import CardApps from './components/ui/CardApps.vue'

export default {
  name: 'Block_apps',
  components: {
    CardApps
  },
  data() {
    return {
      apps
    }
  }
}
</script>