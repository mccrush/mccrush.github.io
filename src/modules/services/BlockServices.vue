<script setup>
import { services } from '@/data/data_services'
import ServicesCard from './components/ui/ServicesCard.vue'
</script>

<template>
  <div class="f3 pt-5 pb-5" id="services">
    <div class="container-960 row text-center m-0 m-auto ps-2 pt-5 pe-2 pb-5">
      <h3>Оказываемые услуги</h3>
      <p class="m-0">
        Сдельная работа от 1500 ₽/час или фиксированная стоимость за услугу
      </p>
      <div class="col-12 m-0 p-0">
        <div class="row m-0 p-0">
          <ServicesCard v-for="app in services" :key="app.alias" :app="app" />
        </div>
      </div>
    </div>
  </div>
</template>