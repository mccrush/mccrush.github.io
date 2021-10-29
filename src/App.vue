<template>
  <div class="container-lg mt-4 mb-4">
    <div class="row border">
      <div class="col-12">
        <h1>mccrush apps</h1>
      </div>
    </div>
    <div class="row border">
      <div class="col-12">2</div>
    </div>
    <h4 class="text-center fs-1">Приложения на домене</h4>
    <div class="row pe-sm-3">
      <Card v-for="app in apps" :key="app.alias" :app="app" />
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import sites from '@/data/sites.js'
import apps from '@/data/apps.js'
import Card from '@/components/Card'
export default {
  components: {
    Card
  },
  data() {
    return {
      sites,
      apps
    }
  }
}
</script>

<style>
body {
  color: #f2f2f2;
  background-color: #32425a;
}
</style>
  