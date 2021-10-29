<template>
  <div class="container-lg mt-5 mb-4">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <img
          src="logo_.png"
          alt="Logo mccrush apps"
          width="64"
          height="64"
          class="me-3 mt-3"
        />
        <div class="">
          <h1 class="fw-bold m-0 mt-1">mccrush apps</h1>
          <p class="fs-5 fw-light lh-1">разработка веб-приложений</p>
        </div>
      </div>
    </div>
    <div class="row border">
      <div class="col-12">2</div>
    </div>
    <h4 class="text-center">Приложения на домене mccrush.github.io</h4>
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

.logo {
  width: 64px;
  height: 64px;
}
</style>
  