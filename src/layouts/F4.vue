<template>
  <div class="f4">
    <div class="container-960 row text-center m-0 m-auto ps-2 pt-5 pe-2 pb-5">
      <h3 id="computing">Услуги настройки ПК</h3>
      <div class="col-12 col-md-6 m-auto p-0 pt-3">
        <table class="table table-dark shadow">
          <tbody>
            <tr v-for="comp in computing" :key="comp.id">
              <td class="text-start ps-3">
                {{ comp.title }}
                <abbr v-if="comp.desc" :title="comp.desc" class="ms-1"
                  >[?]</abbr
                >
              </td>
              <td>{{ comp.price }}&nbsp;₽</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { computing } from '../data/computing'

export default {
  data() {
    return {
      computing
    }
  }
}
</script>

<style scoped>
.f4 {
  /* background: #32435d; */
  background: rgba(29, 38, 53, 1);
}

.table > :not(caption) > * > * {
  /* background: rgba(29, 38, 53, 1); */
  background: hsl(216deg 30% 26%);
  border: 1px solid #32435d;
}
</style>