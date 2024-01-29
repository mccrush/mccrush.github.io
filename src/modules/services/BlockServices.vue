<template>
  <div class="f3 pt-5 pb-5" id="services">
    <div class="container-960 row text-center m-0 m-auto ps-2 pt-5 pe-2 pb-5">
      <h3>Услуги разработки</h3>
      <p class="m-0">
        На регуляр­ной основе от 8500&nbsp;₽/мес, сдельная работа от 1500 ₽/час
      </p>
      <div class="col-12 m-0 p-0">
        <div class="row m-0 p-0">
          <ServicesCard v-for="app in services" :key="app.alias" :app="app" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { services } from './../../data/services'
import ServicesCard from './components/ui/ServicesCard.vue'

export default {
  components: {
    ServicesCard
  },
  data() {
    return {
      services
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