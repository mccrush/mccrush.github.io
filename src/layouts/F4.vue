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
                <!-- <abbr v-if="comp.desc" :title="comp.desc" class="ms-1"
                  >[?]</abbr
                > -->
                <button
                  v-if="comp.desc"
                  type="button"
                  class="btn btn-sm btn-light ms-1 p-0 ps-2 pe-2"
                  data-bs-toggle="popover"
                  data-bs-placement="bottom"
                  :data-bs-content="comp.desc"
                >
                  ?
                </button>
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
import { Popover } from 'bootstrap'

export default {
  data() {
    return {
      computing
    }
  },
  mounted() {
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    )
    const popoverList = [...popoverTriggerList].map(
      popoverTriggerEl => new Popover(popoverTriggerEl)
    )
  }
}
</script>

<style scoped>
.f4 {
  /* background: #32435d; */
  background: var(--bg-color-dark);
  background: radial-gradient(
    circle,
    var(--bg-color-light) 0%,
    var(--bg-color-dark) 100%
  );
}

.table > :not(caption) > * > * {
  background: var(--bg-color-medium);
  border: 1px solid var(--bg-color-light);
}
</style>