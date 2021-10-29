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
    <h4 class="text-center">Приложения на домене</h4>
    <Apps />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Apps from '@/components/Apps'
export default {
  components: {
    Apps
  }
}
</script>

<style>
body {
  color: #f2f2f2;
  background-color: #32425a;
}
</style>
  