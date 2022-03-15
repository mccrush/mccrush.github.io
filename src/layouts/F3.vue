<template>
  <div class="f3">
    <div class="container-960 row text-center m-0 m-auto ps-2 pt-5 pe-2 pb-5">
      <h3 id="services">Услуги</h3>
      <p class="m-0">
        Стоимость услуг: на регуляр­ной основе от 7500 р/месяц, сдельная работа
        от 1000 р/час
      </p>
      <div class="col-12 m-0 p-0">
        <div class="row m-0 p-0">
          <Card v-for="app in services" :key="app.alias" :app="app" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { services } from '../data/services'
import Card from '../components/Card.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      services
    }
  }
}
</script>

<style scoped>
.f3 {
  background: #32435d;
}
</style>