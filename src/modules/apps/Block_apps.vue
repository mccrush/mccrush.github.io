<template>
  <div class="f3 pt-5" id="apps">
    <div
      class="container-960 row text-center border-bottom border-secondary m-0 m-auto ps-2 pt-5 pe-2 pb-5"
    >
      <h3>Наши приложения</h3>
      <!-- <p class="m-0">
        На регуляр­ной основе от 15000&nbsp;₽/мес, сдельная работа от 1500 ₽/час
      </p> -->
      <div class="col-12 m-0 p-0">
        <div class="row m-0 p-0">
          <Card_apps v-for="app in apps" :key="app.alias" :app="app" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apps } from './../../data/apps'
import Card_apps from './components/ui/Card_apps.vue'

export default {
  name: 'Block_apps',
  components: {
    Card_apps
  },
  data() {
    return {
      apps
    }
  }
}
</script>

<style scoped>
[data-bs-theme='light'] .f3 {
  background: #212529;
  color: #dee2e6;
}
</style>