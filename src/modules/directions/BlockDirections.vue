<script setup>
import { directions } from './../../data/data_directions'
import ServicesCard from '../services/components/ui/ServicesCard.vue'
</script>

<template>
  <div class="f3 pt-5 pb-5" id="directions">
    <div class="container-960 row text-center m-0 m-auto ps-2 pt-5 pe-2 pb-5">
      <h3>Направления деятельности</h3>
      <p class="m-0">Работа с юридическими и физическими лицами</p>
      <div class="col-12 m-0 p-0">
        <div class="row m-0 p-0">
          <ServicesCard v-for="app in directions" :key="app.alias" :app="app" />
        </div>
      </div>
    </div>
  </div>
</template>